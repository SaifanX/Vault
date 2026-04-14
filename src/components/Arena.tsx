import { useState, useEffect } from "react";

export function Arena() {
  const [examActive, setExamActive] = useState(false);
  const [examTime, setExamTime] = useState(3600); // 1 hour test

  useEffect(() => {
    let interval: any;
    if (examActive && examTime > 0) {
      interval = setInterval(() => setExamTime(t => t - 1), 1000);
    }
    return () => clearInterval(interval);
  }, [examActive, examTime]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-2 mb-6">
        <h2 className="text-2xl font-black italic uppercase">SIMULATION ARENA</h2>
        <span className="bg-accent text-background text-[10px] px-2 py-0.5 font-black uppercase">LIVE INSTANCE</span>
      </div>

      {!examActive ? (
        <div className="brutalist-card bg-background flex flex-col items-center py-20 text-center">
          <div className="text-5xl font-black italic mb-4">READY TO DEPLOY?</div>
          <p className="max-w-md opacity-60 text-xs uppercase tracking-widest mb-8">
            High-friction environment. Once started, browser focus is tracked. 
            AI will generate a targeted Grade 9 NCERT mock paper upon initiation.
          </p>
          <button 
            onClick={() => setExamActive(true)}
            className="brutalist-button py-4 px-12 bg-accent text-background text-xl italic"
          >
            INITIALIZE SIMULATION
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-4">
            <div className="brutalist-card min-h-[400px]">
              <div className="border-b-2 border-foreground/20 pb-4 mb-6">
                <h3 className="text-xl font-black uppercase">Question 1: Science (Physics)</h3>
                <p className="text-sm mt-4 italic">"An object of mass 2kg is moving with a velocity of 5m/s. Calculate its momentum and the force required to stop it in 0.5 seconds."</p>
              </div>
              <textarea 
                className="w-full h-64 bg-transparent outline-none resize-none font-mono text-sm"
                placeholder="Type your derivation and final answer here..."
              />
            </div>
            <div className="flex justify-between">
              <button className="brutalist-button bg-background text-foreground shadow-none py-1">PREV</button>
              <button className="brutalist-button bg-accent text-background py-1">NEXT QUESTION</button>
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="brutalist-card text-center py-8">
              <div className="text-xs uppercase tracking-widest opacity-50 mb-1">Time Remaining</div>
              <div className="text-5xl font-black text-danger font-mono">{formatTime(examTime)}</div>
            </div>
            
            <div className="brutalist-card">
              <h4 className="font-black text-xs uppercase tracking-widest mb-4">Paper Index</h4>
              <div className="grid grid-cols-5 gap-2">
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(i => (
                  <div key={i} className="aspect-square border-2 border-foreground flex items-center justify-center font-bold hover:bg-glass cursor-pointer">
                    {i}
                  </div>
                ))}
              </div>
            </div>

            <button 
              onClick={() => {
                if(confirm("Confirm final submission? AI evaluation will commence immediately.")) {
                  setExamActive(false);
                  setExamTime(3600);
                }
              }}
              className="w-full brutalist-button bg-foreground text-background"
            >
              FINALIZE SUBMISSION
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
