import { useState, useEffect } from "react";
import { useQuery, useMutation } from "convex/react";
import { api } from "../convex/_generated/api";
import { Id } from "../convex/_generated/dataModel";
import { SubjectNav } from "./components/SubjectNav";
import { ChapterMatrix } from "./components/ChapterMatrix";
import { SRQFeed } from "./components/SRQFeed";
import { Arena } from "./components/Arena";
import { ContentHub } from "./components/ContentHub";
import { cn } from "./lib/utils";

type View = "MATRIX" | "SRQ" | "NOTES" | "ARENA";

function App() {
  const [currentView, setCurrentView] = useState<View>("MATRIX");
  const [selectedSubjectId, setSelectedSubjectId] = useState<Id<"subjects"> | null>(null);
  const subjects = useQuery(api.chapters.getSubjects);
  const seed = useMutation(api.seed.seedNCERTData);

  // Auto-select first subject once loaded
  useEffect(() => {
    if (subjects && subjects.length > 0 && !selectedSubjectId) {
      setSelectedSubjectId(subjects[0]._id);
    }
  }, [subjects, selectedSubjectId]);

  const requestNotificationPermission = () => {
    if ("Notification" in window) {
      Notification.requestPermission().then(permission => {
        if (permission === "granted") {
          alert("AGRESSIVE NOTIFICATIONS ENABLED. VAULT WILL SYNC WITH OVERDUE TASKS.");
        }
      });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground font-mono">
      <header className="brutalist-border border-t-0 border-x-0 p-6 flex justify-between items-center bg-background z-10">
        <div>
          <h1 className="text-4xl font-black tracking-tighter italic">VAULT. v0.1</h1>
          <p className="text-[10px] opacity-50 uppercase tracking-[0.3em] font-black mt-1">Mechanical Academic OS</p>
        </div>
        <div className="flex gap-4">
          <button 
            onClick={requestNotificationPermission}
            className="hidden md:block brutalist-button text-[10px] py-1 px-3 bg-glass text-foreground shadow-none"
          >
            ENABLE PUSH
          </button>
          <div className="brutalist-card py-1 px-4 bg-accent text-background font-bold text-sm">95% BASELINE</div>
          {subjects?.length === 0 && (
            <button 
              onClick={() => seed()} 
              className="brutalist-button text-xs py-1 animate-pulse"
            >
              INITIALIZE SYLLABUS
            </button>
          )}
        </div>
      </header>

      <main className="flex-1 p-6 pb-24 overflow-y-auto max-w-7xl mx-auto w-full">
        {currentView === "MATRIX" && (
          <>
            <SubjectNav 
              selectedId={selectedSubjectId} 
              onSelect={setSelectedSubjectId} 
            />
            {selectedSubjectId ? (
              <ChapterMatrix subjectId={selectedSubjectId} />
            ) : (
              <div className="flex flex-col items-center justify-center h-64 grayscale opacity-30">
                <div className="text-6xl font-black">NULL</div>
                <p className="mt-2 text-xs uppercase tracking-widest">Awaiting Command...</p>
              </div>
            )}
          </>
        )}

        {currentView === "SRQ" && <SRQFeed />}
        {currentView === "ARENA" && <Arena />}
        {currentView === "NOTES" && <ContentHub />}
      </main>

      <nav className="fixed bottom-0 left-0 right-0 brutalist-border border-b-0 border-x-0 bg-background/90 backdrop-blur-xl p-4 flex justify-around z-20">
        <NavItem 
          label="MATRIX" 
          active={currentView === "MATRIX"} 
          onClick={() => setCurrentView("MATRIX")} 
        />
        <NavItem 
          label="SRQ" 
          active={currentView === "SRQ"} 
          onClick={() => setCurrentView("SRQ")} 
        />
        <NavItem 
          label="NOTES" 
          active={currentView === "NOTES"} 
          onClick={() => setCurrentView("NOTES")} 
        />
        <NavItem 
          label="ARENA" 
          active={currentView === "ARENA"} 
          onClick={() => setCurrentView("ARENA")} 
        />
      </nav>
    </div>
  );
}

function NavItem({ label, active = false, onClick }: { label: string; active?: boolean; onClick: () => void }) {
  return (
    <button 
      onClick={onClick}
      className={cn(
        "font-black text-xs tracking-widest px-4 py-2 transition-all hover:bg-glass",
        active && "text-accent border-b-2 border-accent"
      )}
    >
      {label}
    </button>
  );
}


export default App;
