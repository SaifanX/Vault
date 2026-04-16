import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { cn } from "../lib/utils";
import { ArrowRight, User, Eye, EyeOff } from "lucide-react";

export const Login: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { login } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    try {
      await login(username, password);
    } catch (err) {
      setError("AUTHENTICATION FAILED. CHECK CREDENTIALS.");
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col items-center justify-center p-6 transition-colors duration-300">
      {/* Brand Header */}
      <div className="flex flex-col items-center mb-12">
        <div className="w-20 h-20 bg-foreground text-background flex items-center justify-center text-4xl font-black mb-6 select-none">
          V
        </div>
        <h1 className="text-4xl font-black tracking-tight mb-2">The Vault</h1>
        <p className="text-foreground/60 text-sm uppercase tracking-widest font-medium">
          Orchids International Grade 8–10
        </p>
      </div>

      {/* Login Form */}
      <form onSubmit={handleSubmit} className="w-full max-w-sm space-y-6">
        <div className="space-y-4">
          <div className="space-y-2">
            <label className="text-[10px] font-black uppercase tracking-widest opacity-60">
              Student ID
            </label>
            <div className="relative">
              <input
                type="text"
                placeholder="Enter your ID"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full bg-foreground/5 border border-foreground/10 px-4 py-3 rounded-lg focus:outline-none focus:border-foreground/30 transition-all placeholder:text-foreground/20"
                required
              />
              <User size={18} className="absolute right-4 top-1/2 -translate-y-1/2 text-foreground/20" />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-[10px] font-black uppercase tracking-widest opacity-60">
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-foreground/5 border border-foreground/10 px-4 py-3 rounded-lg focus:outline-none focus:border-foreground/30 transition-all placeholder:text-foreground/20"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-foreground/20 hover:text-foreground/40 transition-colors"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>
        </div>

        {error && (
          <div className="bg-red-500/10 border border-red-500/20 text-red-500 text-[10px] font-bold uppercase tracking-widest p-3 text-center">
            {error}
          </div>
        )}

        <button
          type="submit"
          className="w-full bg-foreground text-background font-black uppercase tracking-widest py-4 rounded-lg flex items-center justify-center gap-3 hover:opacity-90 active:scale-[0.98] transition-all shadow-[0_4px_12px_rgba(0,0,0,0.1)]"
        >
          Authenticate
          <ArrowRight size={20} />
        </button>

        <p className="text-center text-[10px] font-bold text-foreground/40 uppercase tracking-widest pt-4">
          Need help accessing the system?
        </p>
      </form>
    </div>
  );
};
