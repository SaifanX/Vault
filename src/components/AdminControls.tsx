import React, { useState } from "react";
import { useQuery, useMutation } from "convex/react";
import { api } from "../../convex/_generated/api";
import { Id } from "../../convex/_generated/dataModel";
import { cn } from "../lib/utils";
import { 
  Users, 
  UserPlus, 
  ShieldAlert, 
  Trash2, 
  CheckCircle, 
  XCircle,
  Clock,
  Key
} from "lucide-react";

export const AdminControls: React.FC = () => {
  const requests = useQuery(api.requests.getRequests, { status: "pending" });
  const approve = useMutation(api.requests.approveRequest);
  const [successMsg, setSuccessMsg] = useState<string | null>(null);

  const handleApprove = async (id: Id<"accessRequests">) => {
    const tempPass = "VAULT_" + Math.floor(Math.random() * 9999);
    const result = await approve({ requestId: id, tempPassword: tempPass });
    setSuccessMsg(`Approved! User: ${result.username} | Temp Pass: ${tempPass}`);
    setTimeout(() => setSuccessMsg(null), 10000);
  };

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-right-4 duration-500">
      {successMsg && (
        <div className="bg-accent text-background p-4 rounded-xl font-black uppercase tracking-widest text-center shadow-lg border-2 border-background animate-bounce">
          {successMsg}
        </div>
      )}

      {/* Access Requests Table */}
      <section className="bento-card">
        <div className="flex items-center gap-3 mb-8">
          <Clock size={20} className="text-accent" />
          <h3 className="text-xs font-black uppercase tracking-widest opacity-60">Pending Access Applications</h3>
        </div>

        <div className="overflow-x-auto rounded-2xl border border-foreground/5 overflow-hidden">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-foreground/5 text-[10px] font-black uppercase tracking-[0.2em] opacity-40">
                <th className="p-4">Applicant</th>
                <th className="p-4">Metadata (Email/Grade)</th>
                <th className="p-4">Status</th>
                <th className="p-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-foreground/5">
              {requests?.length === 0 && (
                <tr>
                   <td colSpan={4} className="p-12 text-center text-xs font-black uppercase tracking-widest opacity-20 italic">No pending requests found in the matrix.</td>
                </tr>
              )}
              {requests?.map((req: any) => (
                <tr key={req._id} className="hover:bg-foreground/[0.02] transition-colors">
                  <td className="p-4 font-bold">{req.name}</td>
                  <td className="p-4">
                    <div className="flex flex-col">
                      <span className="text-xs opacity-60">{req.email}</span>
                      <span className="text-[10px] font-black uppercase tracking-widest text-accent">Grade {req.grade}</span>
                    </div>
                  </td>
                  <td className="p-4">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase tracking-widest bg-yellow-400/10 text-yellow-400">
                      Pending
                    </span>
                  </td>
                  <td className="p-4 text-right">
                    <button 
                      onClick={() => handleApprove(req._id)}
                      className="bg-accent text-background px-4 py-2 rounded-lg text-[10px] font-black uppercase tracking-widest hover:scale-105 active:scale-95 transition-all shadow-md flex items-center gap-2 ml-auto"
                    >
                      <CheckCircle size={14} /> Approve Access
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* General User Management */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
         <div className="bento-card">
            <div className="flex items-center gap-3 mb-6">
               <ShieldAlert size={20} className="text-red-500" />
               <h3 className="text-xs font-black uppercase tracking-widest opacity-60">System Sanctions</h3>
            </div>
            <div className="space-y-4">
               <p className="text-xs text-foreground/40 leading-relaxed font-medium">Banning a user freezes their dashboard and revocates all write access instantly. Use with caution.</p>
               <div className="flex items-center gap-3 p-4 bg-red-500/5 border border-red-500/10 rounded-xl">
                  <input type="text" placeholder="Enter username to flag..." className="bg-transparent text-sm font-bold flex-1 outline-none border-b border-foreground/10" />
                  <button className="bg-red-500 text-white px-4 py-2 rounded-lg text-[10px] font-black uppercase tracking-widest hover:bg-red-600">Ban User</button>
               </div>
            </div>
         </div>

         <div className="bento-card border-accent/20">
            <div className="flex items-center gap-3 mb-6">
               <Key size={20} className="text-accent" />
               <h3 className="text-xs font-black uppercase tracking-widest opacity-60">Permission Nexus</h3>
            </div>
            <p className="text-xs text-foreground/40 leading-relaxed font-medium mb-4">Set global feature flags for user cohorts.</p>
            <div className="space-y-2">
               <PermissionToggle label="Marketplace_Module" active={true} />
               <PermissionToggle label="Focus_Engine_v2" active={false} />
               <PermissionToggle label="Peer_Leaderboards" active={false} />
            </div>
         </div>
      </div>
    </div>
  );
};

const PermissionToggle = ({ label, active }: { label: string, active: boolean }) => (
   <div className="flex items-center justify-between p-3 bg-foreground/[0.03] rounded-xl border border-foreground/5 hover:border-foreground/10 transition-colors">
      <span className="text-[10px] font-black uppercase tracking-widest opacity-60">{label}</span>
      <div className={cn(
         "w-10 h-6 rounded-full p-1 transition-colors relative cursor-pointer",
         active ? "bg-accent" : "bg-foreground/10"
      )}>
         <div className={cn(
            "w-4 h-4 rounded-full bg-white shadow-sm transition-transform",
            active ? "translate-x-4" : "translate-x-0"
         )} />
      </div>
   </div>
);
