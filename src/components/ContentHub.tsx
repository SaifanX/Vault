import { useState, useEffect } from "react";
import { useQuery } from "convex/react";
import { api } from "../../convex/_generated/api";
import { cn } from "../lib/utils";
import { 
  BookOpen, 
  ExternalLink, 
  Loader2, 
  FileText,
  X
} from "lucide-react";

export function ContentHub() {
  const [activeUrl, setActiveUrl] = useState<string | null>(null);
  const subjects = useQuery(api.chapters.getSubjects);
  const [selectedSubjectId, setSelectedSubjectId] = useState<any>(null);
  
  const chapters = useQuery(
    api.chapters.getChapters, 
    selectedSubjectId ? { subjectId: selectedSubjectId } : "skip"
  );

  useEffect(() => {
    if (subjects && subjects.length > 0 && !selectedSubjectId) {
      setSelectedSubjectId(subjects[0]._id);
    }
  }, [subjects]);

  if (!subjects) return <div className="p-4">Loading Library...</div>;

  return (
    <div className="space-y-6 animate-in fade-in duration-700">
      {/* Subject Switcher */}
      <div className="flex gap-2 overflow-x-auto pb-4 scrollbar-none">
        {subjects?.map((sub) => (
          <button
            key={sub._id}
            onClick={() => setSelectedSubjectId(sub._id)}
            className={cn(
              "px-4 py-2 rounded-full text-[10px] font-black uppercase tracking-widest transition-all shrink-0",
              selectedSubjectId === sub._id 
                ? "bg-foreground text-background" 
                : "bg-foreground/5 text-foreground/40 hover:bg-foreground/10"
            )}
          >
            {sub.name}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Resource List */}
        <div className="space-y-3 max-h-[600px] overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-foreground/10">
          {!chapters && (
            <div className="flex items-center justify-center p-12 opacity-20">
              <Loader2 className="animate-spin" />
            </div>
          )}
          {chapters?.map((ch) => (
            <button
              key={ch._id}
              onClick={() => ch.resourceUrl && setActiveUrl(ch.resourceUrl)}
              disabled={!ch.resourceUrl}
              className={cn(
                "w-full bento-card p-4 flex items-center justify-between group transition-all text-left",
                activeUrl === ch.resourceUrl ? "border-accent bg-accent/5" : "hover:border-foreground/20",
                !ch.resourceUrl && "opacity-30 cursor-not-allowed grayscale"
              )}
            >
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-foreground/5 rounded-lg flex items-center justify-center text-foreground/40 group-hover:text-accent group-hover:bg-accent/10 transition-colors">
                  <FileText size={18} />
                </div>
                <div>
                  <h4 className="text-sm font-bold tracking-tight">Ch.{ch.chapterNumber} • {ch.title}</h4>
                  <p className="text-[10px] font-black uppercase tracking-[0.2em] opacity-30 italic">Official_PDF_Link</p>
                </div>
              </div>
              {ch.resourceUrl && <ExternalLink size={14} className="opacity-0 group-hover:opacity-40 transition-opacity" />}
            </button>
          ))}
        </div>

        {/* Viewer Frame */}
        <div className="bento-card relative min-h-[500px] flex flex-col p-0 overflow-hidden bg-black/20 border-foreground/5">
          {activeUrl ? (
            <div className="flex flex-col h-full">
              <div className="flex justify-between items-center p-4 bg-background border-b border-foreground/10">
                 <div className="text-[10px] font-black uppercase tracking-widest opacity-40">NCERT_Viewer_Engine</div>
                 <div className="flex gap-2">
                    <a 
                      href={activeUrl} 
                      target="_blank" 
                      rel="noreferrer"
                      className="text-[10px] font-black uppercase tracking-widest bg-foreground/5 px-3 py-1 rounded hover:bg-foreground/10 transition-all flex items-center gap-2"
                    >
                      <ExternalLink size={10} />
                      Backup Viewer
                    </a>
                    <button onClick={() => setActiveUrl(null)} className="opacity-40 hover:opacity-100 transition-opacity">
                      <X size={14} />
                    </button>
                 </div>
              </div>
              <iframe 
                src={activeUrl}
                className="flex-1 w-full h-full grayscale invert-[0.9] dark:invert-0 brightness-90 contrast-110"
                title="Syllabus Viewer"
              />
            </div>
          ) : (
            <div className="m-auto text-center space-y-6 p-12">
               <div className="w-20 h-20 bg-foreground/5 rounded-full flex items-center justify-center mx-auto opacity-20">
                  <BookOpen size={40} />
               </div>
               <div className="space-y-2">
                  <h3 className="text-2xl font-black italic tracking-tighter uppercase opacity-30">Awaiting_Selection</h3>
                  <p className="max-w-[200px] mx-auto text-[10px] font-black uppercase tracking-widest opacity-20 leading-relaxed">
                    Select a chapter from the list to start reading.
                  </p>
               </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
