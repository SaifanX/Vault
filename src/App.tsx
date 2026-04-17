import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useAuth } from "./context/AuthContext";
import { Login } from "./components/Login";
import { LandingPage } from "./components/LandingPage";
import { SideDrawer, BottomNav } from "./components/Navigation";
import { ChapterMatrix } from "./components/ChapterMatrix";
import { ContentHub } from "./components/ContentHub";
import { SubjectNav } from "./components/SubjectNav";
import { AdminControls } from "./components/AdminControls";
import { PasswordChangeModal } from "./components/PasswordChangeModal";
import { useMutation, useQuery } from "convex/react";
import { api } from "../convex/_generated/api";
import { Id } from "../convex/_generated/dataModel";
import { Loader2, ShieldAlert } from "lucide-react";
import { cn } from "./lib/utils";

const BannedOverlay: React.FC = () => (
  <div className="fixed inset-0 z-[100] bg-black/40 backdrop-blur-md flex items-center justify-center p-6 animate-in fade-in duration-500">
    <div className="bg-background border-2 border-red-500 max-w-md w-full p-8 rounded-3xl shadow-[0_0_50px_rgba(239,68,68,0.2)] text-center space-y-6">
      <div className="w-20 h-20 bg-red-500/10 text-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
        <ShieldAlert size={40} />
      </div>
      <div className="space-y-2">
        <h2 className="text-2xl font-black tracking-tight text-white uppercase italic">Account Locked</h2>
        <p className="text-foreground/60 text-sm font-medium leading-relaxed">
          Your account is currently under review by an admin. Access to your dashboard is temporarily restricted.
        </p>
      </div>
      <div className="pt-4 space-y-3">
        <a 
          href="https://wa.me/919663210965" 
          target="_blank" 
          rel="noreferrer"
          className="block w-full bg-red-500 text-white font-black uppercase tracking-widest py-4 rounded-xl hover:bg-red-600 transition-all shadow-lg active:scale-95"
        >
          Contact Admin (WhatsApp)
        </a>
        <a 
          href="mailto:saifanmohammad39@gmail.com"
          className="block w-full bg-foreground/5 text-foreground/60 font-black uppercase tracking-widest py-3 rounded-xl hover:bg-foreground/10 transition-all text-[10px]"
        >
          Appeal via Email
        </a>
      </div>
    </div>
  </div>
);

const CockpitHUD: React.FC = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
      <div className="bento-card relative overflow-hidden group">
        <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-full -mr-16 -mt-16 group-hover:bg-accent/10 transition-colors" />
        <p className="text-[10px] font-black uppercase tracking-[0.2em] opacity-40 mb-1">Current_Rank</p>
        <div className="text-3xl font-black italic">#4<span className="text-xs opacity-30 not-italic ml-1">/120</span></div>
      </div>
      <div className="bento-card">
        <p className="text-[10px] font-black uppercase tracking-[0.2em] opacity-40 mb-1">Exam_Nexus</p>
        <div className="text-3xl font-black italic">12<span className="text-xs opacity-30 not-italic ml-1">Days</span></div>
      </div>
      <div className="bento-card">
        <p className="text-[10px] font-black uppercase tracking-[0.2em] opacity-40 mb-1">Baseline_Sync</p>
        <div className="text-3xl font-black italic">92<span className="text-xs opacity-30 not-italic ml-1">%</span></div>
      </div>
      <div className="bento-card bg-accent text-background border-none">
        <p className="text-[10px] font-black uppercase tracking-[0.2em] opacity-60 mb-1">System_Status</p>
        <div className="text-3xl font-black italic">ELITE</div>
      </div>
    </div>
  );
};

const StudentDashboard: React.FC = () => {
  const [selectedSubjectId, setSelectedSubjectId] = useState<Id<"subjects"> | null>(null);
  const subjects = useQuery(api.chapters.getSubjects);

  useEffect(() => {
    if (subjects && subjects.length > 0 && !selectedSubjectId) {
      setSelectedSubjectId(subjects[0]._id);
    }
  }, [subjects, selectedSubjectId]);

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <header className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
        <div className="space-y-2">
          <h2 className="text-5xl font-black tracking-tighter italic">My Syllabus.</h2>
          <p className="text-foreground/40 text-[10px] font-black uppercase tracking-[0.3em]">
            Viewing Grade 8–10 Subjects • {new Date().toLocaleDateString()}
          </p>
        </div>
        <SubjectNav selectedId={selectedSubjectId} onSelect={setSelectedSubjectId} />
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <div className="lg:col-span-3 space-y-8">
          <section className="bento-card p-0 overflow-hidden">
            <div className="bg-foreground/5 p-4 border-b border-foreground/5 flex items-center justify-between">
               <h3 className="text-[10px] font-black uppercase tracking-[0.2em] opacity-60">Study_Plan</h3>
               <div className="flex gap-1.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                  <div className="w-1.5 h-1.5 rounded-full bg-foreground/10" />
               </div>
            </div>
            <div className="p-6">
              {selectedSubjectId ? (
                <ChapterMatrix subjectId={selectedSubjectId} />
              ) : (
                <div className="p-20 text-center opacity-20 font-black uppercase tracking-widest flex flex-col items-center gap-4">
                  <Loader2 className="animate-spin text-accent" />
                  Loading your chapters...
                </div>
              )}
            </div>
          </section>
        </div>
        
        <div className="lg:col-span-1 space-y-8">
          <section className="bento-card p-0 overflow-hidden min-h-[600px] flex flex-col">
            <div className="bg-accent p-4 flex items-center justify-between">
               <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-background">Library</h3>
               <BookOpen size={14} className="text-background" />
            </div>
            <div className="p-4 flex-1">
              <ContentHub />
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

const AdminDashboard: React.FC = () => {
  const seed = useMutation(api.users.seedUsers);
  const syllabusSeed = useMutation(api.seed.seedNCERTData);

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <header className="flex flex-col gap-2 border-b border-foreground/10 pb-6">
        <h2 className="text-3xl font-black tracking-tight italic">ADMIN_DASHBOARD</h2>
        <p className="text-red-500 text-[10px] font-black uppercase tracking-widest">Administrator Access Granted</p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-1 space-y-6">
          <div className="bento-card bg-foreground text-background">
            <h3 className="text-xs font-black uppercase tracking-widest mb-4 opacity-70">App Settings</h3>
            <div className="flex flex-col gap-3">
              <button 
                onClick={() => syllabusSeed()}
                className="w-full bg-background text-foreground font-black uppercase tracking-widest py-3 rounded-lg hover:opacity-90 transition-all border border-foreground/10"
              >
                Reset Syllabus
              </button>
              <button 
                onClick={() => seed()}
                className="w-full bg-background text-foreground font-black uppercase tracking-widest py-3 rounded-lg hover:opacity-90 transition-all border border-foreground/10 text-[10px]"
              >
                Seed Default Users
              </button>
            </div>
          </div>
        </div>
        
        <div className="lg:col-span-2">
          <AdminControls />
        </div>
      </div>
    </div>
  );
};

const MainLayout: React.FC = () => {
  const { user, isAuthenticated } = useAuth();
  const [showPasswordModal, setShowPasswordModal] = useState(false);

  useEffect(() => {
    if (user?.passwordChangeRequired) {
      setShowPasswordModal(true);
    }
  }, [user]);

  if (!isAuthenticated) return <Navigate to="/login" />;

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-background text-foreground transition-colors duration-300">
      {user?.isBanned && <BannedOverlay />}
      {showPasswordModal && user && (
        <PasswordChangeModal userId={user._id} onClose={() => setShowPasswordModal(false)} />
      )}
      
      <SideDrawer />
      <main className={cn(
        "flex-1 p-6 md:p-12 pb-32 md:pb-12 bg-background transition-all",
        user?.isBanned && "filter grayscale opacity-50 pointer-events-none"
      )}>
        <div className="max-w-6xl mx-auto">
          {user?.role === "admin" ? <AdminDashboard /> : <StudentDashboard />}
        </div>
      </main>
      <BottomNav />
    </div>
  );
};

function App() {
  const { isAuthenticated, isLoading } = useAuth();

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background text-foreground">
        <div className="text-[10px] font-black uppercase tracking-[0.5em] animate-pulse">Loading Hub...</div>
      </div>
    );
  }

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={isAuthenticated ? <Navigate to="/dashboard" /> : <Login />} />
        <Route path="/dashboard/*" element={<MainLayout />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;
