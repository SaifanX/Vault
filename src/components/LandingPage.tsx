import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { cn } from "../lib/utils";
import { 
  ArrowRight, 
  ShieldCheck, 
  Zap, 
  Search, 
  BarChart3, 
  GraduationCap,
  Mail,
  User,
  BookOpen
} from "lucide-react";
import { useMutation } from "convex/react";
import { api } from "../../convex/_generated/api";

export const LandingPage: React.FC = () => {
  const { isAuthenticated } = useAuth();
  const [showInviteModal, setShowInviteModal] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-accent selection:text-background">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 h-20 bg-background/80 backdrop-blur-xl z-50 px-6 md:px-12 flex items-center justify-between border-b border-foreground/5">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-foreground text-background flex items-center justify-center font-black text-xl rounded-lg">V</div>
          <span className="font-black text-2xl tracking-tighter hidden md:block">The Vault.</span>
        </div>
        <div className="flex items-center gap-4">
          <Link to="/login" className="text-xs font-black uppercase tracking-widest px-4 py-2 hover:opacity-60 transition-all">Login</Link>
          <button 
             onClick={() => setShowInviteModal(true)}
             className="bg-foreground text-background text-xs font-black uppercase tracking-widest px-6 py-3 rounded-full hover:scale-105 active:scale-95 transition-all shadow-xl"
          >
            Get Started
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-40 pb-24 px-6 md:px-12 text-center max-w-5xl mx-auto space-y-10">
        <div className="space-y-4">
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter leading-[0.9]">
            The Best <br />
            <span className="text-foreground/40 italic">Study Hub</span> <br />
            for Your Success.
          </h1>
          <p className="max-w-xl mx-auto text-foreground/60 text-lg font-medium">
            Built for students in Grades 8–10. 
            No distractions, just everything you need to study well.
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-6 pt-6">
          <Link 
            to={isAuthenticated ? "/dashboard" : "/login"} 
            className="w-full md:w-auto bg-foreground text-background px-10 py-5 rounded-full font-black uppercase tracking-[0.2em] text-sm flex items-center justify-center gap-3 shadow-2xl hover:bg-foreground/90 transition-all"
          >
            {isAuthenticated ? "Go to My Dashboard" : "Join Now"}
            <ArrowRight size={20} />
          </Link>
          <p className="text-[10px] font-black uppercase tracking-widest opacity-40">Helping 1,200+ students improve their grades</p>
        </div>

        {/* Hero Visual Block */}
        <div className="pt-12 relative">
          <div className="absolute inset-0 bg-accent/20 blur-[120px] -z-10 rounded-full scale-75" />
          <div className="bento-card bg-foreground/[0.03] border-foreground/5 p-4 md:p-8 rounded-[2rem] shadow-inner overflow-hidden">
             <div className="bg-background rounded-2xl aspect-[16/10] shadow-2xl border border-foreground/5 overflow-hidden flex flex-col">
                <div className="h-12 border-b border-foreground/5 bg-foreground/[0.02] flex items-center px-4 gap-2">
                   <div className="flex gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-red-400 opacity-20" />
                      <div className="w-2.5 h-2.5 rounded-full bg-yellow-400 opacity-20" />
                      <div className="w-2.5 h-2.5 rounded-full bg-green-400 opacity-20" />
                   </div>
                   <div className="mx-auto text-[10px] font-black uppercase tracking-widest opacity-20">Securely Connected</div>
                </div>
                <div className="flex-1 p-8 grid grid-cols-3 gap-6 opacity-30">
                   <div className="col-span-2 space-y-4 pt-12">
                      <div className="h-12 bg-foreground/10 rounded-xl w-3/4" />
                      <div className="h-4 bg-foreground/10 rounded-lg w-1/2" />
                      <div className="h-4 bg-foreground/10 rounded-lg w-full" />
                      <div className="h-4 bg-foreground/10 rounded-lg w-2/3" />
                   </div>
                   <div className="space-y-4">
                      <div className="aspect-square bg-foreground/5 rounded-3xl" />
                      <div className="h-20 bg-foreground/5 rounded-2xl" />
                   </div>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="px-6 md:px-12 py-32 max-w-7xl mx-auto">
        <div className="mb-20 space-y-4">
          <h2 className="text-4xl md:text-5xl font-black tracking-tight uppercase">Tools You'll Love</h2>
          <p className="text-foreground/40 uppercase tracking-widest font-black text-xs">Simpler studying for everyone</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <FeatureCard 
            icon={Zap} 
            title="Practice Exams" 
            desc="Test yourself before the real thing with practice papers made for your grade." 
          />
          <FeatureCard 
            icon={BookOpen} 
            title="Study Library" 
            desc="Every textbook and your notes organized in one clear, easy-to-use library." 
          />
          <FeatureCard 
            icon={BarChart3} 
            title="Grade Tracker" 
            desc="See how you're doing and track your improvement over time. Stay on top of your goals." 
          />
        </div>
      </section>

      {/* CTA Footer */}
      <section className="px-6 py-40 text-center">
        <div className="bento-card border-accent/20 bg-accent/5 p-16 rounded-[3rem] max-w-4xl mx-auto space-y-10">
          <h2 className="text-4xl md:text-5xl font-black tracking-tighter italic">Want to join the community?</h2>
          <button 
             onClick={() => setShowInviteModal(true)}
             className="bg-foreground text-background px-12 py-6 rounded-full font-black uppercase tracking-widest text-sm shadow-2xl hover:scale-105 active:scale-95 transition-all"
          >
            Apply for Membership
          </button>
          <div className="flex justify-center gap-12 pt-10 text-[10px] font-black uppercase tracking-widest opacity-40">
            <span>Safe & Private</span>
            <span>Fast Approval</span>
            <span>Always Online</span>
          </div>
        </div>
      </section>

      <footer className="p-12 border-t border-foreground/5 text-center space-y-6">
        <div className="text-[10px] font-black uppercase tracking-[0.3em] opacity-30">© 2024 THE VAULT STUDY HUB</div>
        <div className="flex justify-center gap-8 text-[10px] font-black uppercase opacity-20">
           <span>Terms</span>
           <span>Privacy</span>
           <span>Support</span>
        </div>
      </footer>

      {showInviteModal && <InviteModal onClose={() => setShowInviteModal(false)} />}
    </div>
  );
};

const FeatureCard = ({ icon: Icon, title, desc }: { icon: any, title: string, desc: string }) => (
  <div className="bento-card space-y-6 p-10 group hover:border-foreground/30 transition-colors">
    <div className="w-12 h-12 bg-foreground text-background flex items-center justify-center rounded-2xl group-hover:scale-110 transition-transform">
      <Icon size={24} />
    </div>
    <div className="space-y-3">
      <h3 className="text-xl font-bold tracking-tight">{title}</h3>
      <p className="text-foreground/40 text-sm leading-relaxed">{desc}</p>
    </div>
  </div>
);

const InviteModal = ({ onClose }: { onClose: () => void }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [grade, setGrade] = useState("10");
  const [submitted, setSubmitted] = useState(false);
  const submitRequest = useMutation(api.requests.submitRequest);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await submitRequest({ name, email, grade });
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-md flex items-center justify-center p-6 animate-in fade-in duration-300">
      <div className="bg-background border border-foreground/10 max-w-md w-full p-10 rounded-[2.5rem] shadow-2xl relative overflow-hidden">
        <button onClick={onClose} className="absolute top-6 right-6 text-foreground/20 hover:text-foreground transition-colors">✕</button>
        
        {submitted ? (
          <div className="text-center py-12 space-y-6 animate-in zoom-in-95 duration-500">
            <div className="w-20 h-20 bg-accent text-background rounded-full flex items-center justify-center mx-auto text-3xl font-black">✓</div>
            <div className="space-y-2">
              <h3 className="text-2xl font-black italic tracking-tighter uppercase">Application_Sent</h3>
              <p className="text-foreground/40 text-sm px-6">Your application has been received. Our team will review your details soon.</p>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="space-y-2">
              <h3 className="text-3xl font-black italic tracking-tighter uppercase">Join Member List</h3>
              <p className="text-foreground/40 text-xs font-bold uppercase tracking-widest">Apply to become a student member</p>
            </div>

            <div className="space-y-4">
               <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest opacity-40 flex items-center gap-2">
                     <User size={12} /> Full Name
                  </label>
                  <input 
                    required
                    value={name}
                    onChange={e => setName(e.target.value)}
                    className="w-full bg-foreground/5 border border-foreground/10 px-5 py-4 rounded-2xl focus:outline-none focus:border-foreground/30 transition-all font-bold"
                    placeholder="Enter your name" 
                  />
               </div>
               <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest opacity-40 flex items-center gap-2">
                     <Mail size={12} /> Email Address
                  </label>
                  <input 
                    required
                    type="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    className="w-full bg-foreground/5 border border-foreground/10 px-5 py-4 rounded-2xl focus:outline-none focus:border-foreground/30 transition-all font-bold"
                    placeholder="student@orchids.edu" 
                  />
               </div>
               <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest opacity-40 flex items-center gap-2">
                     <GraduationCap size={12} /> Grade Level
                  </label>
                  <select 
                    value={grade}
                    onChange={e => setGrade(e.target.value)}
                    className="w-full bg-foreground/5 border border-foreground/10 px-5 py-4 rounded-2xl focus:outline-none focus:border-foreground/30 transition-all font-bold"
                  >
                     <option value="8">Grade 8</option>
                     <option value="9">Grade 9</option>
                     <option value="10">Grade 10</option>
                  </select>
               </div>
            </div>

            <button 
               type="submit"
               className="w-full bg-foreground text-background font-black uppercase tracking-[0.2em] py-5 rounded-2xl hover:bg-foreground/90 active:scale-95 transition-all shadow-xl"
            >
               Submit Application
            </button>
          </form>
        )}
      </div>
    </div>
  );
};
