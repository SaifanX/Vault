import { useQuery } from "convex/react";
import { api } from "../../convex/_generated/api";
import { cn } from "../lib/utils";

export function SRQFeed() {
  const overdueChapters = useQuery(api.chapters.getSRQ);

  if (!overdueChapters) return <div className="text-xs animate-pulse">Scanning Neural Latency...</div>;

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2 mb-6">
        <h2 className="text-2xl font-black italic">PRIORITY QUEUE</h2>
        <span className="bg-danger text-background text-[10px] px-2 py-0.5 font-black uppercase">OVERDUE</span>
      </div>

      {overdueChapters.length === 0 ? (
        <div className="brutalist-card bg-glass border-dashed opacity-50 flex flex-col items-center py-12">
          <div className="text-4xl font-black italic mb-2">ZERO LATENCY</div>
          <p className="text-[10px] uppercase tracking-widest">Baseline Integrity: 100%</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {overdueChapters.map((ch: any) => (
            <div key={ch._id} className="brutalist-card hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all group">
              <div className="flex justify-between items-start mb-2">
                <span className="text-[10px] font-black uppercase tracking-tighter text-accent">CH#{ch.chapterNumber}</span>
                <span className="text-[10px] font-black uppercase tracking-tighter opacity-100 bg-foreground text-background px-1">FRICTION: {ch.frictionScore}</span>
              </div>
              <h3 className="text-lg font-black leading-tight mb-4 group-hover:text-accent transition-colors">{ch.title}</h3>
              <div className="flex gap-2">
                <button 
                  onClick={() => alert("Neural Baseline Synchronized: Progress persisting.")}
                  className="brutalist-button text-[10px] py-1 px-3 bg-accent text-background"
                >
                  RE-SYNC
                </button>
                {ch.resourceUrl && (
                  <a 
                    href={ch.resourceUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="brutalist-button text-[10px] py-1 px-3 bg-background text-foreground shadow-none border-2 flex items-center gap-1"
                  >
                    OPEN PDF
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
