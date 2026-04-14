import { useQuery } from "convex/react";
import { api } from "../../convex/_generated/api";
import { Id } from "../../convex/_generated/dataModel";
import { cn } from "../lib/utils";

interface SubjectNavProps {
  selectedId: Id<"subjects"> | null;
  onSelect: (id: Id<"subjects">) => void;
}

export function SubjectNav({ selectedId, onSelect }: SubjectNavProps) {
  const subjects = useQuery(api.chapters.getSubjects);

  if (!subjects) return <div className="animate-pulse bg-glass h-12 w-full brutalist-border"></div>;

  return (
    <div className="flex flex-wrap gap-3 mb-8">
      {subjects.map((sub) => (
        <button
          key={sub._id}
          onClick={() => onSelect(sub._id)}
          className={cn(
            "px-4 py-2 font-black transition-all text-xs brutalist-border uppercase tracking-widest",
            selectedId === sub._id 
              ? "bg-accent text-background shadow-none translate-x-[2px] translate-y-[2px]" 
              : "bg-background text-foreground shadow-[2px_2px_0px_0px_rgba(250,250,250,1)] hover:shadow-none hover:translate-x-[1px] hover:translate-y-[1px]"
          )}
        >
          {sub.name}
        </button>
      ))}
    </div>
  );
}
