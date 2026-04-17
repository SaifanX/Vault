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
import { BrowserRouter, Routes, Route, Link, useLocation } from "react-router-dom";

// Import all screens
import { ScheduleScreen } from "./screens/ScheduleScreen";
import { OfflineStatusScreen } from "./screens/OfflineStatusScreen";
import { GlobalSearchScreen } from "./screens/GlobalSearchScreen";
import { PublishSuccessScreen } from "./screens/PublishSuccessScreen";
import { LeaderboardScreen } from "./screens/LeaderboardScreen";
import { ExamAnalyticsScreen } from "./screens/ExamAnalyticsScreen";
import { FocusTimerScreen } from "./screens/FocusTimerScreen";
import { BulletinScreen } from "./screens/BulletinScreen";
import { PublishModalScreen } from "./screens/PublishModalScreen";
import { SessionCompleteScreen } from "./screens/SessionCompleteScreen";
import { AIStudyGuideScreen } from "./screens/AIStudyGuideScreen";
import { UserSettingsScreen } from "./screens/UserSettingsScreen";
import { SearchNoResultsScreen } from "./screens/SearchNoResultsScreen";
import { LibraryScreen } from "./screens/LibraryScreen";
import { MarketingScreen } from "./screens/MarketingScreen";
import { DoubtClearanceScreen } from "./screens/DoubtClearanceScreen";

type View = "MATRIX" | "SRQ" | "NOTES" | "ARENA";

function AppContent() {
  const [currentView, setCurrentView] = useState<View>("MATRIX");
  const [selectedSubjectId, setSelectedSubjectId] = useState<Id<"subjects"> | null>(null);
  const subjects = useQuery(api.chapters.getSubjects);
  const seed = useMutation(api.seed.seedNCERTData);
  const location = useLocation();

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
          <Link to="/">
            <h1 className="text-4xl font-black tracking-tighter italic hover:text-accent transition-colors">VAULT. v0.1</h1>
          </Link>
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
        <Routes>
          <Route path="/" element={
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <h2 className="text-xl font-bold col-span-full border-b brutalist-border pb-2 mb-4">Core Components</h2>
              {currentView === "MATRIX" && (
                <div className="col-span-full">
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
                </div>
              )}
              {currentView === "SRQ" && <div className="col-span-full"><SRQFeed /></div>}
              {currentView === "ARENA" && <div className="col-span-full"><Arena /></div>}
              {currentView === "NOTES" && <div className="col-span-full"><ContentHub /></div>}

              <h2 className="text-xl font-bold col-span-full border-b brutalist-border pb-2 mt-8 mb-4">Screens Navigation</h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 col-span-full">
                <ScreenLink to="/screen/1" label="1. Schedule" />
                <ScreenLink to="/screen/2" label="2. Offline Status" />
                <ScreenLink to="/screen/3" label="3. Global Search" />
                <ScreenLink to="/screen/4" label="4. Publish Success" />
                <ScreenLink to="/screen/5" label="5. Leaderboard" />
                <ScreenLink to="/screen/6" label="6. Exam Analytics" />
                <ScreenLink to="/screen/7" label="7. Focus Timer" />
                <ScreenLink to="/screen/8" label="8. Bulletin" />
                <ScreenLink to="/screen/9" label="9. Publish Modal" />
                <ScreenLink to="/screen/10" label="10. Session Complete" />
                <ScreenLink to="/screen/11" label="11. AI Study Guide" />
                <ScreenLink to="/screen/12" label="12. User Settings" />
                <ScreenLink to="/screen/13" label="13. Search No Results" />
                <ScreenLink to="/screen/14" label="14. Library" />
                <ScreenLink to="/screen/15" label="15. Marketing" />
                <ScreenLink to="/screen/16" label="16. Doubt Clearance" />
              </div>
            </div>
          } />

          <Route path="/screen/1" element={<ScheduleScreen />} />
          <Route path="/screen/2" element={<OfflineStatusScreen />} />
          <Route path="/screen/3" element={<GlobalSearchScreen />} />
          <Route path="/screen/4" element={<PublishSuccessScreen />} />
          <Route path="/screen/5" element={<LeaderboardScreen />} />
          <Route path="/screen/6" element={<ExamAnalyticsScreen />} />
          <Route path="/screen/7" element={<FocusTimerScreen />} />
          <Route path="/screen/8" element={<BulletinScreen />} />
          <Route path="/screen/9" element={<PublishModalScreen />} />
          <Route path="/screen/10" element={<SessionCompleteScreen />} />
          <Route path="/screen/11" element={<AIStudyGuideScreen />} />
          <Route path="/screen/12" element={<UserSettingsScreen />} />
          <Route path="/screen/13" element={<SearchNoResultsScreen />} />
          <Route path="/screen/14" element={<LibraryScreen />} />
          <Route path="/screen/15" element={<MarketingScreen />} />
          <Route path="/screen/16" element={<DoubtClearanceScreen />} />
        </Routes>
      </main>

      {location.pathname === "/" && (
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
      )}
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
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

function ScreenLink({ to, label }: { to: string, label: string }) {
  return (
    <Link to={to} className="brutalist-card hover:bg-foreground hover:text-background transition-colors text-center text-sm font-bold flex items-center justify-center h-24">
      {label}
    </Link>
  )
}

export default App;
