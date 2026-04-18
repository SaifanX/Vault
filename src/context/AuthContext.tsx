import React, { createContext, useContext } from "react";
import { useQuery } from "convex/react";
import { useAuthActions } from "@convex-dev/auth/react";
import { api } from "../../convex/_generated/api";
import { Id } from "../../convex/_generated/dataModel";

interface User {
  _id: Id<"users">;
  username?: string;
  name?: string;
  role?: "admin" | "student";
  grade?: string;
  isBanned?: boolean;
  passwordChangeRequired?: boolean;
}

interface AuthContextType {
  user: User | null | undefined;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (username: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { signIn, signOut } = useAuthActions();
  const userData = useQuery(api.users.me);
  
  // We determine loading state based on whether userData has returned yet if we're technically authenticated
  const isLoading = userData === undefined;
  const isAuthenticated = !!userData;

  const login = async (username: string, password: string) => {
    try {
      // We translate 'username' to 'email' field for the Password provider
      // since the library expects email/phone as the primary key.
      await signIn("password", { 
        email: username, 
        password, 
        flow: "signIn" 
      });
    } catch (error) {
      console.error("Login failed:", error);
      throw error;
    }
  };

  const logout = async () => {
    await signOut();
  };

  return (
    <AuthContext.Provider
      value={{
        user: userData,
        isAuthenticated,
        isLoading,
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
