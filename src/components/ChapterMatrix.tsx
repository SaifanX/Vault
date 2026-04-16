import { useQuery, useMutation } from "convex/react";
import { api } from "../../convex/_generated/api";
import { Id } from "../../convex/_generated/dataModel";
import { useTimer } from "../context/TimerContext";
import { useState } from "react";
import { cn } from "../lib/utils";

import { SummaryModal } from "./SummaryModal";

export function ChapterMatrix({ subjectId }: { subjectId: Id<"subjects"> }) {
  const chapters = useQuery(api.chapters.getChapters, { subjectId });
  const updateState = useMutation(api.chapters.updateChapterState);
  const { isLocked, timeLeft, startTimer } = useTimer();
  const [activeSummaryChapter, setActiveSummaryChapter] = useState<Id<"chapters"> | null>(null);

  if (!chapters) return <div className="p-4">Loading Matrix Data...</div>;

  return (
    <div className="space-y-6">
      <div className={cn(
        "brutalist-card bg-background flex justify-between items-center transition-all",
        isLocked ? "border-danger shadow-[4px_4px_0px_0px_rgba(255,49,49,1)]" : "border-accent shadow-[4px_4px_0px_0px_rgba(0,255,65,1)]"
      )}>
        <div>
          <h3 className="text-xl font-bold">{isLocked ? "LOCKDOWN ACTIVE" : "ENGINE UNLOCKED"}</h3>
          <p className="text-xs opacity-60 uppercase tracking-widest font-mono">
            {isLocked ? `Complete ${timeLeft}s micro-commitment to unlock toggles` : "Manual override permitted"}
          </p>
        </div>
        {isLocked && timeLeft === 300 && (
          <button onClick={startTimer} className="brutalist-button bg-danger">IGNITE TIMER</button>
        )}
      </div>

      <div className="overflow-x-auto">
        <table className="w-full border-collapse brutalist-border bg-background">
          <thead>
            <tr className="bg-glass text-left">
              <th className="p-3 border-r-3 border-foreground">CH#</th>
              <th className="p-3 border-r-3 border-foreground min-w-[200px]">CHAPTER TITLE</th>
              <th className="p-3 border-r-3 border-foreground text-center">THEORY</th>
              <th className="p-3 border-r-3 border-foreground text-center">IN-TEXT</th>
              <th className="p-3 border-r-3 border-foreground text-center">EXERCISE</th>
              <th className="p-3 border-r-3 border-foreground text-center">PYQ</th>
              <th className="p-3 text-center">FRICTION</th>
            </tr>
          </thead>
          <tbody>
            {chapters.map((ch: any) => (
              <tr key={ch._id} className="border-t-3 border-foreground hover:bg-glass transition-colors">
                <td className="p-3 border-r-3 border-foreground font-bold">{ch.chapterNumber}</td>
                <td className="p-3 border-r-3 border-foreground">
                  <div className="flex flex-col">
                    <span className="font-bold">{ch.title}</span>
                    <span className={cn(
                      "text-[10px] uppercase font-black",
                      ch.verificationStatus === "verified" ? "text-accent" : 
                      ch.verificationStatus === "pending" ? "text-yellow-400 animate-pulse" : "text-danger opacity-50"
                    )}>
                      STATUS: {ch.verificationStatus}
                    </span>
                  </div>
                </td>
                <BooleanCell 
                  chapterId={ch._id} 
                  field="theoryCompleted" 
                  value={ch.theoryCompleted} 
                  locked={isLocked}
                />
                <BooleanCell 
                  chapterId={ch._id} 
                  field="inTextQuestionsCompleted" 
                  value={ch.inTextQuestionsCompleted} 
                  locked={isLocked}
                />
                <BooleanCell 
                  chapterId={ch._id} 
                  field="ncertExercisesCompleted" 
                  value={ch.ncertExercisesCompleted} 
                  locked={isLocked}
                />
                <BooleanCell 
                  chapterId={ch._id} 
                  field="pyqCompleted" 
                  value={ch.pyqCompleted} 
                  locked={isLocked}
                  onComplete={() => setActiveSummaryChapter(ch._id)}
                />
                <td className="p-2 text-center">
                  <input 
                    type="number" 
                    min="0" max="10" 
                    value={ch.frictionScore}
                    onChange={(e) => updateState({ 
                      chapterId: ch._id, 
                      field: "frictionScore", 
                      value: parseInt(e.target.value) || 0 
                    })}
                    className="w-12 bg-transparent text-center font-bold border-b-2 border-foreground/30 focus:border-accent outline-none"
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <SummaryModal 
        chapterId={activeSummaryChapter} 
        onClose={() => setActiveSummaryChapter(null)} 
      />
    </div>
  );
}

function BooleanCell({ chapterId, field, value, locked, onComplete }: any) {
  const updateState = useMutation(api.chapters.updateChapterState);
  
  const handleToggle = async () => {
    const newValue = !value;
    await updateState({ chapterId, field, value: newValue });
    if (newValue === true && onComplete) {
      onComplete();
    }
  };

  return (
    <td className="p-3 border-r-3 border-foreground text-center">
      <button 
        disabled={locked}
        onClick={handleToggle}
        className={cn(
          "w-6 h-6 border-2 border-foreground transition-all",
          value ? "bg-accent shadow-[2px_2px_0px_0px_rgba(250,250,250,1)]" : "bg-transparent",
          locked && "opacity-20 grayscale cursor-not-allowed"
        )}
      >
        {value && <span className="text-background block text-[10px] font-black">✓</span>}
      </button>
    </td>
  );
}
