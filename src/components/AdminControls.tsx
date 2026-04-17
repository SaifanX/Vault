import React, { useState } from "react";
import { useQuery, useMutation } from "convex/react";
import { api } from "../../convex/_generated/api";
import { Id } from "../../convex/_generated/dataModel";
import { cn } from "../lib/utils";
import { 
  Users, 
  ShieldAlert, 
  CheckCircle, 
  Clock,
  Key,
  ShieldX,
  UserCheck
} from "lucide-react";

export const AdminControls: React.FC = () => {
  const requests = useQuery(api.requests.getRequests, { status: "pending" });
  const users = useQuery(api.users.listUsers);
  const approve = useMutation(api.requests.approveRequest);
  const toggleBan = useMutation(api.users.toggleBan);
  
  const [successMsg, setSuccessMsg] = useState<string | null>(null);

  const handleApprove = async (id: Id<"accessRequests">) => {
    const tempPass = "VAULT_" + Math.floor(Math.random() * 9999);
    const result = await approve({ requestId: id, tempPassword: tempPass });
    setSuccessMsg(`Approved! User: ${result.username} | Temp Pass: ${tempPass}`);
    setTimeout(() => setSuccessMsg(null), 10000);
  };

  const handleToggleBan = async (userId: Id<"users">, currentStatus: boolean) => {
    await toggleBan({ userId, isBanned: !currentStatus });
  };

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-right-4 duration-500">
      {successMsg && (
        <div className="bg-accent text-background p-4 rounded-xl font-black uppercase tracking-widest text-center shadow-lg border-2 border-background animate-bounce">
          {successMsg}
        </div>
      )}

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
        {/* Access Requests Table */}
        <section className="bento-card">
          <div className="flex items-center gap-3 mb-8">
            <Clock size={20} className="text-accent" />
            <h3 className="text-xs font-black uppercase tracking-widest opacity-60">Pending Applications</h3>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-foreground/5 overflow-hidden">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-foreground/5 text-[10px] font-black uppercase tracking-[0.2em] opacity-40">
                  <th className="p-4">Applicant</th>
                  <th className="p-4">Metadata</th>
                  <th className="p-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-foreground/5">
                {requests?.length === 0 && (
                  <tr>
                    <td colSpan={3} className="p-10 text-center text-[10px] font-black uppercase tracking-widest opacity-20 italic">No users found</td>
                  </tr>
                )}
                {requests?.map((req: any) => (
                  <tr key={req._id}>
                    <td className="p-4 font-bold">{req.name}</td>
                    <td className="p-4 text-xs opacity-60">Gr. {req.grade}</td>
                    <td className="p-4 text-right">
                      <button 
                        onClick={() => handleApprove(req._id)}
                        className="bg-accent text-background px-4 py-2 rounded-lg text-[10px] font-black uppercase tracking-widest hover:scale-105 transition-all"
                      >
                        Approve
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* User Registry and Banning */}
        <section className="bento-card border-red-500/10">
            <div className="flex items-center gap-3 mb-8">
            <Users size={20} className="text-red-500" />
            <h3 className="text-xs font-black uppercase tracking-widest opacity-60">User Registry & Controls</h3>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-foreground/5 overflow-hidden">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-foreground/5 text-[10px] font-black uppercase tracking-[0.2em] opacity-40">
                  <th className="p-4">User</th>
                  <th className="p-4">Status</th>
                  <th className="p-4 text-right">Control</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-foreground/5">
                {users?.filter(u => u.role !== "admin").map((u: any) => (
                  <tr key={u._id} className={cn(u.isBanned && "opacity-50")}>
                    <td className="p-4">
                      <div className="flex flex-col">
                        <span className="font-bold">{u.name}</span>
                        <span className="text-[10px] opacity-40 uppercase tracking-widest">{u.username}</span>
                      </div>
                    </td>
                    <td className="p-4">
                      {u.isBanned ? (
                        <span className="text-[8px] font-black uppercase tracking-widest text-red-500 bg-red-500/10 px-2 py-1 rounded">Banned</span>
                      ) : (
                        <span className="text-[8px] font-black uppercase tracking-widest text-green-500 bg-green-500/10 px-2 py-1 rounded">Active</span>
                      )}
                    </td>
                    <td className="p-4 text-right">
                      <button 
                        onClick={() => handleToggleBan(u._id, u.isBanned)}
                        className={cn(
                          "px-4 py-2 rounded-lg text-[10px] font-black uppercase tracking-widest transition-all",
                          u.isBanned ? "bg-green-500 text-white" : "bg-red-500 text-white"
                        )}
                      >
                        {u.isBanned ? "Unban" : "Ban"}
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </div>

      {/* Permission Matrix Area */}
      <section className="bento-card border-accent/20">
        <div className="flex items-center gap-3 mb-6">
          <Key size={20} className="text-accent" />
          <h3 className="text-xs font-black uppercase tracking-widest opacity-60">Feature Settings</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
           <PermissionToggle label="Marketplace_Module" active={true} />
           <PermissionToggle label="Focus_Engine_v2" active={false} />
           <PermissionToggle label="Peer_Leaderboards" active={false} />
        </div>
      </section>
    </div>
  );
};

const PermissionToggle = ({ label, active }: { label: string, active: boolean }) => (
   <div className="flex items-center justify-between p-4 bg-foreground/[0.03] rounded-2xl border border-foreground/5">
      <span className="text-[10px] font-black uppercase tracking-widest opacity-60">{label}</span>
      <div className={cn(
         "w-10 h-6 rounded-full p-1 transition-colors relative cursor-pointer",
         active ? "bg-accent" : "bg-foreground/10"
      )}>
         <div className={cn(
            "w-4 h-4 rounded-full bg-white transition-transform",
            active ? "translate-x-4" : "translate-x-0"
         )} />
      </div>
   </div>
);
