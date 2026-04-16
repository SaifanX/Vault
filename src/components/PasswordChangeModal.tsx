import React, { useState } from "react";
import { useMutation } from "convex/react";
import { api } from "../../convex/_generated/api";
import { Id } from "../../convex/_generated/dataModel";
import { KeyRound, ShieldCheck, X } from "lucide-react";

export const PasswordChangeModal: React.FC<{ userId: Id<"users">, onClose: () => void }> = ({ userId, onClose }) => {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const updatePassword = useMutation(api.users.updatePassword);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (newPassword !== confirmPassword) {
      setError("PASSWORDS DO NOT MATCH");
      return;
    }
    if (newPassword.length < 6) {
      setError("PASSWORD MUST BE AT LEAST 6 CHARACTERS");
      return;
    }

    setLoading(true);
    try {
      await updatePassword({ userId, newPassword });
      onClose();
    } catch (err) {
      setError("SYSTEM ERROR. TRY AGAIN.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-[110] bg-black/60 backdrop-blur-md flex items-center justify-center p-6 animate-in fade-in duration-300">
      <div className="bg-background border border-foreground/10 max-w-sm w-full p-8 rounded-[2.5rem] shadow-2xl space-y-8 relative overflow-hidden">
        <button onClick={onClose} className="absolute top-6 right-6 text-foreground/20 hover:text-foreground transition-colors group">
          <X size={20} className="group-hover:rotate-90 transition-transform duration-300" />
        </button>

        <div className="flex flex-col items-center gap-4 text-center">
          <div className="w-16 h-16 bg-accent/10 text-accent rounded-full flex items-center justify-center">
            <ShieldCheck size={32} />
          </div>
          <div className="space-y-1">
            <h3 className="text-xl font-black italic uppercase tracking-tighter">Security Update</h3>
            <p className="text-[10px] font-bold uppercase tracking-widest opacity-40">System detected temporary password</p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <label className="text-[10px] font-black uppercase tracking-widest opacity-40">New Password</label>
            <div className="relative">
              <input 
                type="password"
                required
                value={newPassword}
                onChange={e => setNewPassword(e.target.value)}
                className="w-full bg-foreground/5 border border-foreground/10 px-4 py-3 rounded-xl focus:outline-none focus:border-foreground/30 transition-all"
                placeholder="••••••••"
              />
              <KeyRound size={16} className="absolute right-4 top-1/2 -translate-y-1/2 opacity-20" />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-[10px] font-black uppercase tracking-widest opacity-40">Confirm New Password</label>
            <input 
              type="password"
              required
              value={confirmPassword}
              onChange={e => setConfirmPassword(e.target.value)}
              className="w-full bg-foreground/5 border border-foreground/10 px-4 py-3 rounded-xl focus:outline-none focus:border-foreground/30 transition-all"
              placeholder="••••••••"
            />
          </div>

          {error && (
            <p className="text-red-500 text-[10px] font-black uppercase tracking-widest text-center animate-pulse">{error}</p>
          )}

          <div className="pt-2 space-y-3">
             <button 
               type="submit"
               disabled={loading}
               className="w-full bg-foreground text-background font-black uppercase tracking-widest py-4 rounded-xl hover:opacity-90 active:scale-95 transition-all shadow-xl disabled:opacity-50"
             >
               {loading ? "Syncing..." : "Update Security"}
             </button>
             <button 
               type="button"
               onClick={onClose}
               className="w-full text-foreground/40 font-black uppercase tracking-widest text-[10px] hover:text-foreground transition-colors"
             >
               Skip for now
             </button>
          </div>
        </form>
      </div>
    </div>
  );
};
