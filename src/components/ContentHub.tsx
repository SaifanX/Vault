import { useState } from "react";
import { cn } from "../lib/utils";

export function ContentHub() {
  const [view, setView] = useState<"textbooks" | "notes">("textbooks");

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-6 mb-8 border-b-3 border-foreground/10 pb-4">
        <button 
          onClick={() => setView("textbooks")}
          className={cn(
            "text-2xl font-black italic transition-all",
            view === "textbooks" ? "text-accent translate-y-[-2px]" : "opacity-30 hover:opacity-100"
          )}
        >
          NCERT TEXTBOOKS
        </button>
        <button 
          onClick={() => setView("notes")}
          className={cn(
            "text-2xl font-black italic transition-all",
            view === "notes" ? "text-accent translate-y-[-2px]" : "opacity-30 hover:opacity-100"
          )}
        >
          TOPPER'S NOTES
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {view === "textbooks" ? (
          <>
            <ContentCard title="Mathematics (Class 9)" status="NCERT Official" />
            <ContentCard title="Science (Class 9)" status="NCERT Official" />
            <ContentCard title="India & Contemporary World I" status="History" />
            <ContentCard title="Contemporary India I" status="Geography" />
            <ContentCard title="Democratic Politics I" status="Civics" />
            <ContentCard title="Economics (Class 9)" status="Economics" />
          </>
        ) : (
          <>
            <ContentCard title="Physics: Master Derivations" status="Handwritten" />
            <ContentCard title="The French Revolution: Mindmap" status="Handwritten" />
            <ContentCard title="Polynomials: Logic Gaps" status="Handwritten" />
            <ContentCard title="Tissues: Essential Diagrams" status="Handwritten" />
          </>
        )}
      </div>

      <div className="brutalist-card bg-glass min-h-[500px] flex items-center justify-center border-dashed">
        <div className="text-center space-y-4">
          <div className="text-4xl font-black opacity-30 italic">VIEWER INITIALIZING...</div>
          <p className="text-[10px] uppercase tracking-[0.4em] font-black opacity-50">Rendering High-Fidelity PDF Host</p>
        </div>
      </div>
    </div>
  );
}

function ContentCard({ title, status }: { title: string; status: string }) {
  return (
    <div className="brutalist-card bg-background hover:bg-glass transition-all cursor-pointer group">
      <div className="text-[10px] font-black text-accent mb-2 uppercase tracking-tighter">{status}</div>
      <h3 className="text-lg font-black group-hover:italic transition-all">{title}</h3>
      <div className="mt-4 flex justify-end">
        <span className="text-[10px] font-black border-2 border-foreground px-2 py-0.5">OPEN →</span>
      </div>
    </div>
  );
}

