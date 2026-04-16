import React, { createContext, useContext, useEffect, useState } from "react";
import { useMutation, useQuery } from "convex/react";
import { api } from "../../convex/_generated/api";
import { Id } from "../../convex/_generated/dataModel";

interface User {
  _id: Id<"users">;
  username: string;
  name: string;
  role: "admin" | "student";
  isBanned?: boolean;
  passwordChangeRequired?: boolean;
}

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (username: string, password: string) => Promise<void>;
  logout: () => void;
  isBanned: boolean;
  passwordChangeRequired: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [userId, setUserId] = useState<Id<"users"> | null>(() => {
    const saved = localStorage.getItem("vault-user-id");
    return saved ? (saved as unknown as Id<"users">) : null;
  });

  const userData = useQuery(api.users.me, userId ? { userId } : "skip");
  const loginMutation = useMutation(api.users.login);

  const login = async (username: string, password: string) => {
    try {
      const result = await loginMutation({ username, password });
      setUserId(result.userId);
      localStorage.setItem("vault-user-id", result.userId);
    } catch (error) {
      console.error("Login failed:", error);
      throw error;
    }
  };

  const logout = () => {
    setUserId(null);
    localStorage.removeItem("vault-user-id");
  };

  return (
    <AuthContext.Provider
      value={{
        user: userData || null,
        isAuthenticated: !!userId && !!userData,
        isLoading: userId !== null && userData === undefined,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
