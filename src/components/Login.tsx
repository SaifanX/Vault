import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { cn } from "../lib/utils";
import { ArrowRight, User, Eye, EyeOff, ShieldCheck, Activity, Terminal as TerminalIcon } from "lucide-react";

const MatrixBackground: React.FC = () => (
  <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-5 select-none font-mono text-[8px] leading-none text-foreground whitespace-pre">
    {Array.from({ length: 40 }).map((_, i) => (
      <div key={i} className="animate-pulse" style={{ animationDelay: `${i * 100}ms` }}>
        {Math.random().toString(36).substring(2, 100)}
      </div>
    ))}
  </div>
);

const SystemStatus: React.FC = () => (
  <div className="flex gap-4 mb-8">
    <div className="flex items-center gap-2 bg-foreground/5 px-3 py-1.5 border border-foreground/10 rounded-sm">
      <div className="w-1.5 h-1.5 rounded-full bg-accent animate-ping" />
      <span className="text-[10px] font-black uppercase tracking-widest opacity-60">Auth_Node: Online</span>
    </div>
    <div className="flex items-center gap-2 bg-foreground/5 px-3 py-1.5 border border-foreground/10 rounded-sm">
      <Activity size={10} className="text-foreground/40" />
      <span className="text-[10px] font-black uppercase tracking-widest opacity-60">Latency: 24ms</span>
    </div>
  </div>
);

export const Login: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isAuthenticating, setIsAuthenticating] = useState(false);
  const { login } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setIsAuthenticating(true);
    try {
      await login(username, password);
    } catch (err) {
      setError("AUTHENTICATION_REJECTED: CHECK_CREDENTIALS");
      setIsAuthenticating(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#050505] text-foreground flex flex-col items-center justify-center p-6 transition-all duration-500 relative overflow-hidden font-mono">
      <MatrixBackground />
      
      {/* Container */}
      <div className="w-full max-w-md relative z-10 transition-all duration-700 animate-in fade-in zoom-in-95">
        
        {/* Header Section */}
        <div className="mb-12 text-center md:text-left">
          <div className="inline-flex items-center justify-center w-14 h-14 bg-accent text-background border-4 border-foreground mb-6 shadow-[6px_6px_0px_0px_rgba(255,255,255,0.1)] group">
             <TerminalIcon size={24} className="group-hover:scale-110 transition-transform" />
          </div>
          <h1 className="text-5xl font-black tracking-tighter italic uppercase mb-2 text-white">
            System_Access
          </h1>
          <p className="text-foreground/40 text-[10px] font-black uppercase tracking-[0.4em] mb-8">
            The Vault Academic OS • Secure Terminal
          </p>
          <SystemStatus />
        </div>

        {/* Form Box */}
        <div className="bg-[#0a0a0a] border-2 border-foreground/10 p-8 shadow-[12px_12px_0px_0px_rgba(255,255,255,0.03)] relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-accent/10 blur-3xl rounded-full -mr-16 -mt-16 pointer-events-none" />
          
          <form onSubmit={handleSubmit} className="space-y-8 relative">
            <div className="space-y-6">
              {/* Field: Username */}
              <div className="space-y-3">
                <div className="flex justify-between items-end">
                  <label className="text-[10px] font-black uppercase tracking-[0.3em] text-accent">
                    Identifier_Key
                  </label>
                  <span className="text-[8px] opacity-20 uppercase">Required</span>
                </div>
                <div className="group relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none opacity-30 group-focus-within:opacity-100 transition-opacity">
                    <User size={14} />
                  </div>
                  <input
                    type="text"
                    placeholder="ENTER_STUDENT_ID"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="w-full bg-foreground/[0.03] border-b-2 border-foreground/10 px-4 py-4 pl-12 focus:outline-none focus:border-accent focus:bg-foreground/[0.05] transition-all placeholder:text-foreground/10 text-sm tracking-widest text-white"
                    required
                  />
                </div>
              </div>

              {/* Field: Password */}
              <div className="space-y-3">
                <div className="flex justify-between items-end">
                  <label className="text-[10px] font-black uppercase tracking-[0.3em] text-accent">
                    Hash_Credential
                  </label>
                  <span className="text-[8px] opacity-20 uppercase">Encrypted</span>
                </div>
                <div className="group relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="••••••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full bg-foreground/[0.03] border-b-2 border-foreground/10 px-4 py-4 focus:outline-none focus:border-accent focus:bg-foreground/[0.05] transition-all placeholder:text-foreground/10 text-sm tracking-[0.5em] text-white"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-foreground/20 hover:text-accent transition-colors"
                  >
                    {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                  </button>
                </div>
              </div>
            </div>

            {error && (
              <div className="bg-danger/10 border-l-4 border-danger p-4 animate-in slide-in-from-left-2 transition-all">
                <p className="text-danger text-[9px] font-black uppercase tracking-widest leading-relaxed">
                   Critical_Error: {error}
                </p>
              </div>
            )}

            <button
              type="submit"
              disabled={isAuthenticating}
              className={cn(
                "w-full bg-white text-black font-black uppercase tracking-[0.4em] py-5 flex items-center justify-center gap-4 transition-all group overflow-hidden relative active:scale-95",
                isAuthenticating && "opacity-50 cursor-not-allowed"
              )}
            >
              <div className="absolute inset-0 bg-accent translate-y-full group-hover:translate-y-0 transition-transform duration-300 pointer-events-none" />
              <span className="relative z-10 flex items-center gap-2 group-hover:text-black transition-colors">
                {isAuthenticating ? "Synchronizing..." : "Initiate_Sequence"}
                {!isAuthenticating && <ArrowRight size={18} className="translate-x-0 group-hover:translate-x-1 transition-transform" />}
              </span>
            </button>

            <div className="pt-6 border-t border-foreground/5 flex flex-col items-center gap-4">
               <p className="text-[9px] font-black text-foreground/20 uppercase tracking-[0.3em]">
                 Authorization Required for Node Entry
               </p>
               <div className="flex gap-2">
                  <ShieldCheck size={12} className="text-foreground/10" />
                  <span className="text-[8px] opacity-10 uppercase font-black">256-Bit_Protocol</span>
               </div>
            </div>
          </form>
        </div>

        {/* Footer info */}
        <div className="mt-8 flex justify-between px-2">
           <span className="text-[8px] opacity-20 uppercase font-black">Build v5.0.1 Stable</span>
           <span className="text-[8px] opacity-20 uppercase font-black">Location: Node_Orchids_Bangalore</span>
        </div>
      </div>
    </div>
  );
};
