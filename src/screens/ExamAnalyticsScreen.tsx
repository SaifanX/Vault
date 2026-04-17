import React from 'react';
import { ChevronLeft, Share, Verified, ChevronDown } from 'lucide-react';

export function ExamAnalyticsScreen() {
  return (
    <div className="bg-background text-foreground font-mono min-h-screen">
      <div className="sticky top-0 z-50 bg-background/90 backdrop-blur-md brutalist-border border-b-2 border-x-0 border-t-0">
        <div className="flex items-center p-4 justify-between max-w-md mx-auto">
          <div className="flex size-10 items-center justify-start cursor-pointer hover:text-accent transition-colors">
            <ChevronLeft size={24} strokeWidth={3} />
          </div>
          <h2 className="text-[11px] font-black tracking-[0.2em] uppercase text-neutral-500">Exam Analytics</h2>
          <div className="flex size-10 items-center justify-end cursor-pointer hover:text-accent transition-colors">
            <Share size={20} strokeWidth={2.5} />
          </div>
        </div>
      </div>

      <main className="max-w-md mx-auto pb-32">
        <section className="py-16 px-6 flex flex-col items-center brutalist-border border-b-2 border-x-0 border-t-0">
          <h1 className="font-mono text-8xl font-black tracking-tighter text-foreground italic">94/100</h1>
          <div className="flex items-center gap-2 mt-8 bg-glass px-4 py-2 brutalist-border">
            <Verified className="text-[#D4AF37]" size={16} strokeWidth={3} />
            <p className="text-[10px] font-black uppercase tracking-[0.2em] text-neutral-400">Verified Submission</p>
          </div>
        </section>

        <section className="grid grid-cols-3 brutalist-border border-b-2 border-x-0 border-t-0">
          <div className="py-8 brutalist-border border-r-2 border-y-0 border-l-0 flex flex-col items-center text-center hover:bg-glass transition-colors">
            <p className="text-[10px] font-black uppercase tracking-widest text-neutral-500 mb-3">Percentile</p>
            <p className="font-mono text-2xl font-black text-foreground">92nd</p>
          </div>
          <div className="py-8 brutalist-border border-r-2 border-y-0 border-l-0 flex flex-col items-center text-center hover:bg-glass transition-colors">
            <p className="text-[10px] font-black uppercase tracking-widest text-neutral-500 mb-3">Time spent</p>
            <p className="font-mono text-2xl font-black text-foreground">42:10</p>
          </div>
          <div className="py-8 flex flex-col items-center text-center hover:bg-glass transition-colors">
            <p className="text-[10px] font-black uppercase tracking-widest text-neutral-500 mb-3">Accuracy</p>
            <p className="font-mono text-2xl font-black text-foreground">94%</p>
          </div>
        </section>

        <section className="p-8 brutalist-border border-b-2 border-x-0 border-t-0">
          <div className="flex items-center gap-3 mb-10">
            <div className="w-3 h-3 bg-accent"></div>
            <h3 className="text-[11px] font-black uppercase tracking-[0.2em] text-foreground">Performance History</h3>
          </div>

          <div className="relative h-32 w-full px-2 mt-4">
            <svg className="w-full h-full overflow-visible" preserveAspectRatio="none" viewBox="0 0 100 40">
              <path
                d="M 0 30 L 25 10 L 50 25 L 75 0 L 100 5"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                vectorEffect="non-scaling-stroke"
                className="text-foreground"
              />
              <circle cx="0" cy="30" fill="currentColor" r="4" className="text-foreground" />
              <circle cx="25" cy="10" fill="currentColor" r="4" className="text-foreground" />
              <circle cx="50" cy="25" fill="currentColor" r="4" className="text-foreground" />
              <circle cx="75" cy="0" fill="currentColor" r="4" className="text-foreground" />
              <circle cx="100" cy="5" fill="currentColor" r="4" className="text-accent" />
            </svg>
            <div className="flex justify-between mt-8">
              <span className="font-mono text-[10px] font-bold text-neutral-500">T-04</span>
              <span className="font-mono text-[10px] font-bold text-neutral-500">T-03</span>
              <span className="font-mono text-[10px] font-bold text-neutral-500">T-02</span>
              <span className="font-mono text-[10px] font-bold text-neutral-500">T-01</span>
              <span className="font-mono text-[10px] text-accent font-black">NOW</span>
            </div>
          </div>
        </section>

        <section className="p-8">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-3 h-3 bg-danger"></div>
            <h3 className="text-[11px] font-black uppercase tracking-[0.2em] text-foreground">Question Matrix</h3>
          </div>

          <div className="space-y-0 brutalist-border border-t-2 border-x-0 border-b-0">
            {/* Item 1 */}
            <div className="flex items-center justify-between py-5 brutalist-border border-b-2 border-x-0 border-t-0 hover:bg-glass transition-colors px-2">
              <div className="flex items-center gap-4">
                <div className="w-2.5 h-2.5 bg-foreground"></div>
                <span className="font-mono text-sm font-bold tracking-tight text-foreground">ITEM 01</span>
              </div>
              <button className="px-4 py-1.5 brutalist-border bg-background hover:bg-foreground hover:text-background text-[10px] font-black uppercase tracking-widest transition-colors">
                Review
              </button>
            </div>

            {/* Item 2 */}
            <div className="flex items-center justify-between py-5 brutalist-border border-b-2 border-x-0 border-t-0 hover:bg-glass transition-colors px-2">
              <div className="flex items-center gap-4">
                <div className="w-2.5 h-2.5 bg-danger animate-pulse"></div>
                <span className="font-mono text-sm font-bold tracking-tight text-foreground">ITEM 02</span>
              </div>
              <button className="px-4 py-1.5 brutalist-border bg-background hover:bg-foreground hover:text-background text-[10px] font-black uppercase tracking-widest transition-colors">
                Review
              </button>
            </div>

            {/* Item 3 */}
            <div className="flex items-center justify-between py-5 brutalist-border border-b-2 border-x-0 border-t-0 hover:bg-glass transition-colors px-2">
              <div className="flex items-center gap-4">
                <div className="w-2.5 h-2.5 bg-foreground"></div>
                <span className="font-mono text-sm font-bold tracking-tight text-foreground">ITEM 03</span>
              </div>
              <button className="px-4 py-1.5 brutalist-border bg-background hover:bg-foreground hover:text-background text-[10px] font-black uppercase tracking-widest transition-colors">
                Review
              </button>
            </div>

            {/* Item 4 */}
            <div className="flex items-center justify-between py-5 brutalist-border border-b-2 border-x-0 border-t-0 hover:bg-glass transition-colors px-2">
              <div className="flex items-center gap-4">
                <div className="w-2.5 h-2.5 bg-foreground"></div>
                <span className="font-mono text-sm font-bold tracking-tight text-foreground">ITEM 04</span>
              </div>
              <button className="px-4 py-1.5 brutalist-border bg-background hover:bg-foreground hover:text-background text-[10px] font-black uppercase tracking-widest transition-colors">
                Review
              </button>
            </div>

            {/* Item 5 */}
            <div className="flex items-center justify-between py-5 brutalist-border border-b-2 border-x-0 border-t-0 hover:bg-glass transition-colors px-2">
              <div className="flex items-center gap-4">
                <div className="w-2.5 h-2.5 bg-danger animate-pulse"></div>
                <span className="font-mono text-sm font-bold tracking-tight text-foreground">ITEM 05</span>
              </div>
              <button className="px-4 py-1.5 brutalist-border bg-background hover:bg-foreground hover:text-background text-[10px] font-black uppercase tracking-widest transition-colors">
                Review
              </button>
            </div>
          </div>

          <button className="w-full mt-10 py-5 flex items-center justify-center gap-3 brutalist-border bg-background hover:bg-glass text-neutral-400 hover:text-foreground transition-all">
            <span className="text-[11px] font-black uppercase tracking-[0.3em]">Full Table (25)</span>
            <ChevronDown size={16} strokeWidth={3} />
          </button>
        </section>
      </main>

      <div className="fixed bottom-0 left-0 right-0 p-6 bg-background/90 backdrop-blur-xl brutalist-border border-t-2 border-x-0 border-b-0">
        <div className="max-w-md mx-auto">
          <button className="w-full brutalist-button py-5 text-[11px] tracking-[0.2em] uppercase flex items-center justify-center">
            Export Analytical Data
          </button>
        </div>
      </div>
    </div>
  );
}
