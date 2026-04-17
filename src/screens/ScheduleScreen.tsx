import React from 'react';
import { MoreHorizontal } from 'lucide-react';

export function ScheduleScreen() {
  return (
    <div className="bg-background text-foreground font-mono min-h-screen relative overflow-hidden flex flex-col">
      <header className="flex-none bg-background pt-safe-top z-20">
        <div className="px-6 pt-10 pb-4">
          <div className="flex items-end justify-between mb-6">
            <div>
              <h2 className="text-xs font-bold text-neutral-500 uppercase tracking-[0.2em] mb-2">Schedule</h2>
              <h1 className="text-4xl font-bold tracking-tighter text-foreground leading-tight italic">Monday, Oct 24</h1>
            </div>
            <button className="text-foreground border-2 border-foreground p-1 shadow-[2px_2px_0px_0px_rgba(250,250,250,1)] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none transition-all">
              <MoreHorizontal size={24} />
            </button>
          </div>
          <div className="mb-6 flex">
            <div className="flex h-10 w-full brutalist-border p-1 bg-background">
              <button className="flex-1 text-xs font-bold transition-all bg-foreground text-background">
                DAY
              </button>
              <button className="flex-1 text-xs font-bold transition-all text-foreground hover:bg-glass">
                WEEK
              </button>
            </div>
          </div>
        </div>
      </header>

      <main className="flex-1 overflow-y-auto px-6 pb-32 relative">
        <div className="absolute left-[5rem] top-0 bottom-0 w-0.5 bg-foreground"></div>

        <div className="flex flex-col gap-y-2">
          {/* Timeline Item 1 */}
          <div className="grid grid-cols-[4rem_2rem_1fr] items-start min-h-[5rem]">
            <div className="font-mono text-sm pt-1 text-right pr-4 tabular-nums">08:30</div>
            <div className="flex flex-col items-center pt-2.5 z-10 relative">
              <div className="size-3 bg-background border-2 border-foreground relative z-10"></div>
            </div>
            <div className="pb-8 pl-4">
              <p className="text-base font-bold tracking-tight">Homeroom</p>
              <div className="flex items-center gap-1.5 text-neutral-400 text-xs mt-1 font-mono">
                <span>RM 101</span>
              </div>
            </div>
          </div>

          {/* Timeline Item 2 - Active */}
          <div className="grid grid-cols-[4rem_2rem_1fr] items-start min-h-[6rem]">
            <div className="font-mono text-sm pt-5 text-right pr-4 tabular-nums text-accent">09:00</div>
            <div className="flex flex-col items-center pt-6 z-10 relative">
              <div className="size-4 bg-accent border-2 border-foreground relative z-10 animate-pulse"></div>
            </div>
            <div className="pb-8 pl-4">
              <div className="brutalist-card p-4 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-16 h-16 bg-accent/10 rounded-bl-full -z-10"></div>
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-lg font-bold tracking-tighter text-accent">MATHEMATICS</p>
                    <div className="flex items-center gap-1.5 text-neutral-400 text-xs mt-1 font-mono">
                      <span>RM 204</span>
                    </div>
                  </div>
                  <span className="text-[10px] font-black border-2 border-accent text-accent px-1.5 py-0.5 animate-pulse">NOW</span>
                </div>
              </div>
            </div>
          </div>

          {/* Timeline Item 3 */}
          <div className="grid grid-cols-[4rem_2rem_1fr] items-start min-h-[4rem]">
            <div className="font-mono text-sm pt-1 text-right pr-4 tabular-nums">10:15</div>
            <div className="flex flex-col items-center pt-2.5 z-10 relative">
              <div className="size-3 bg-background border-2 border-foreground relative z-10"></div>
            </div>
            <div className="pb-8 pl-4">
              <p className="text-base font-bold tracking-tight">Break</p>
              <p className="text-neutral-500 text-xs mt-1 font-mono">FREE PERIOD</p>
            </div>
          </div>

          {/* Timeline Item 4 */}
          <div className="grid grid-cols-[4rem_2rem_1fr] items-start min-h-[5rem]">
            <div className="font-mono text-sm pt-1 text-right pr-4 tabular-nums">10:30</div>
            <div className="flex flex-col items-center pt-2.5 z-10 relative">
              <div className="size-3 bg-background border-2 border-foreground relative z-10"></div>
            </div>
            <div className="pb-8 pl-4">
              <p className="text-base font-bold tracking-tight">History</p>
              <div className="flex items-center gap-1.5 text-neutral-400 text-xs mt-1 font-mono">
                <span>RM 105</span>
              </div>
            </div>
          </div>

          {/* Timeline Item 5 */}
          <div className="grid grid-cols-[4rem_2rem_1fr] items-start min-h-[5rem]">
            <div className="font-mono text-sm pt-1 text-right pr-4 tabular-nums">12:00</div>
            <div className="flex flex-col items-center pt-2.5 z-10 relative">
              <div className="size-3 bg-background border-2 border-foreground relative z-10"></div>
            </div>
            <div className="pb-8 pl-4">
              <p className="text-base font-bold tracking-tight">Lunch</p>
              <div className="flex items-center gap-1.5 text-neutral-400 text-xs mt-1 font-mono">
                <span>CAFETERIA</span>
              </div>
            </div>
          </div>

          {/* Timeline Item 6 */}
          <div className="grid grid-cols-[4rem_2rem_1fr] items-start min-h-[5rem]">
            <div className="font-mono text-sm pt-1 text-right pr-4 tabular-nums">13:00</div>
            <div className="flex flex-col items-center pt-2.5 z-10 relative">
              <div className="size-3 bg-background border-2 border-foreground relative z-10"></div>
            </div>
            <div className="pb-8 pl-4">
              <p className="text-base font-bold tracking-tight">Physics</p>
              <div className="flex items-center gap-1.5 text-neutral-400 text-xs mt-1 font-mono">
                <span>LAB 3</span>
              </div>
            </div>
          </div>

          {/* Timeline Item 7 */}
          <div className="grid grid-cols-[4rem_2rem_1fr] items-start min-h-[5rem]">
            <div className="font-mono text-sm pt-1 text-right pr-4 tabular-nums">15:00</div>
            <div className="flex flex-col items-center pt-2.5 z-10 relative">
              <div className="size-3 bg-background border-2 border-foreground relative z-10"></div>
            </div>
            <div className="pb-8 pl-4">
              <p className="text-base font-bold tracking-tight">Study Block</p>
              <div className="flex items-center gap-1.5 text-neutral-400 text-xs mt-1 font-mono">
                <span>LIBRARY</span>
              </div>
            </div>
          </div>
        </div>
      </main>

      <div className="fixed bottom-24 right-8 z-30">
        <button className="brutalist-button h-16 w-16 !p-0 rounded-full flex items-center justify-center text-3xl pb-1 hover:bg-accent hover:text-background transition-colors">
          +
        </button>
      </div>
    </div>
  );
}
