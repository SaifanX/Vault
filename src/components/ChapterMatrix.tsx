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
  const [activeSummaryChapter, setActiveSummaryChapter] = useState<Id<"chapters"> | null>(null);

  if (!chapters) return <div className="p-4">Loading Matrix Data...</div>;

  return (
    <div className="space-y-6">
      <div className="overflow-x-auto">
        <table className="w-full border-collapse bg-background rounded-2xl overflow-hidden border border-foreground/5">
          <thead>
            <tr className="bg-foreground/5 text-left text-[10px] font-black uppercase tracking-widest opacity-40">
              <th className="p-4">CH#</th>
              <th className="p-4 min-w-[200px]">CHAPTER TITLE</th>
              <th className="p-4 text-center">THEORY</th>
              <th className="p-4 text-center">IN-TEXT</th>
              <th className="p-4 text-center">EXERCISE</th>
              <th className="p-4 text-center">PYQ</th>
              <th className="p-4 text-center">FRICTION</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-foreground/5">
            {chapters.map((ch: any) => (
              <tr key={ch._id} className="hover:bg-foreground/[0.02] transition-colors">
                <td className="p-4 font-bold">{ch.chapterNumber}</td>
                <td className="p-4">
                  <div className="flex flex-col">
                    <span className="font-bold">{ch.title}</span>
                    <span className={cn(
                      "text-[10px] uppercase font-black",
                      ch.verificationStatus === "verified" ? "text-accent" : 
                      ch.verificationStatus === "pending" ? "text-yellow-400 animate-pulse" : "text-foreground/20 italic"
                    )}>
                      {ch.verificationStatus}
                    </span>
                  </div>
                </td>
                <BooleanCell 
                  chapterId={ch._id} 
                  field="theoryCompleted" 
                  value={ch.theoryCompleted}
                  updateState={updateState}
                />
                <BooleanCell 
                  chapterId={ch._id} 
                  field="inTextQuestionsCompleted" 
                  value={ch.inTextQuestionsCompleted}
                  updateState={updateState}
                />
                <BooleanCell 
                  chapterId={ch._id} 
                  field="ncertExercisesCompleted" 
                  value={ch.ncertExercisesCompleted}
                  updateState={updateState}
                />
                <BooleanCell 
                  chapterId={ch._id} 
                  field="pyqCompleted" 
                  value={ch.pyqCompleted} 
                  updateState={updateState}
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

function BooleanCell({ chapterId, field, value, updateState, onComplete }: any) {
  
  const handleToggle = async () => {
    const newValue = !value;
    await updateState({ chapterId, field, value: newValue });
    if (newValue === true && onComplete) {
      onComplete();
    }
  };

  return (
    <td className="p-4 text-center">
      <button 
        onClick={handleToggle}
        className={cn(
          "w-5 h-5 rounded-md border-2 border-foreground/10 transition-all flex items-center justify-center",
          value ? "bg-accent border-accent text-background" : "bg-foreground/5 hover:border-foreground/30"
        )}
      >
        {value && <span className="text-[10px] font-black">✓</span>}
      </button>
    </td>
  );
}
