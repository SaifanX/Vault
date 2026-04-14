import { useState } from "react";
import { useMutation } from "convex/react";
import { api } from "../../convex/_generated/api";
import { Id } from "../../convex/_generated/dataModel";

interface SummaryModalProps {
  chapterId: Id<"chapters"> | null;
  onClose: () => void;
}

export function SummaryModal({ chapterId, onClose }: SummaryModalProps) {
  const [content, setContent] = useState("");
  const createSummary = useMutation(api.summaries.createSummary);

  if (!chapterId) return null;

  const handleSubmit = async () => {
    if (content.length < 20) {
      alert("Summary too short. Engineering integrity requires at least 20 characters.");
      return;
    }
    await createSummary({ chapterId, content });
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center p-6">
      <div className="brutalist-card max-w-lg w-full bg-background">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-black italic">POST-SESSION COMPILATION</h2>
          <button onClick={onClose} className="font-bold opacity-50 hover:opacity-100">CLOSE</button>
        </div>
        
        <p className="text-xs uppercase tracking-widest mb-4 opacity-70">
          State recorded as PENDING. Submit a cognitive summary for AI verification to finalize.
        </p>

        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Synthesize what you've learned in 1-2 sentences..."
          className="w-full h-32 brutalist-input mb-6 resize-none"
        />

        <button 
          onClick={handleSubmit}
          className="w-full brutalist-button bg-accent text-background"
        >
          SUBMIT FOR VALIDATION
        </button>
      </div>
    </div>
  );
}
