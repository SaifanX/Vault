import React from 'react';
import { Grid, CloudOff, RefreshCw, Filter, FileText, BookOpen, Calculator, Search, Home, Box, PenSquare, User } from 'lucide-react';

export function OfflineStatusScreen() {
  return (
    <div className="bg-background text-foreground font-mono min-h-screen flex flex-col relative overflow-hidden">
      {/* Top Navigation Bar */}
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b-2 border-foreground brutalist-border border-x-0 border-t-0">
        <div className="flex items-center justify-between px-6 py-4">
          <div className="flex items-center gap-2 hover:text-accent cursor-pointer transition-colors">
            <Grid size={24} strokeWidth={2.5} />
            <span className="font-bold tracking-tighter text-lg uppercase italic">The Vault</span>
          </div>
          <div className="flex items-center gap-4">
            <Search size={24} strokeWidth={2.5} className="cursor-pointer hover:text-accent transition-colors" />
            <CloudOff size={24} strokeWidth={2.5} className="text-danger animate-pulse" />
          </div>
        </div>

        {/* Persistent Status Bar */}
        <div className="bg-danger/20 py-2 px-4 flex items-center justify-center gap-2 border-b-2 border-danger brutalist-border border-x-0 border-t-0 border-b-danger">
          <CloudOff size={16} className="text-danger" />
          <p className="text-danger text-[11px] font-bold tracking-[0.1em] uppercase">Syncing paused — No connection</p>
        </div>
      </header>

      <main className="flex-1 flex flex-col items-center pt-12 pb-32">
        {/* Hero Status Indicator */}
        <div className="flex flex-col items-center text-center px-8 mb-16 relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-danger/10 rounded-full blur-3xl -z-10"></div>
          <div className="mb-6 p-8 brutalist-card rounded-full border-danger text-danger bg-danger/5 shadow-[4px_4px_0px_0px_#FF3131]">
            <CloudOff size={64} strokeWidth={1.5} />
          </div>
          <h1 className="tracking-[0.2em] text-4xl font-bold leading-tight uppercase mb-2 italic">Offline</h1>
          <p className="text-neutral-500 text-xs font-medium tracking-wider uppercase mb-8">Accessing Local Secure Cache</p>

          <div className="flex items-center gap-4 py-2 px-4 brutalist-border bg-glass">
            <div className="w-2 h-2 bg-danger animate-pulse border border-foreground"></div>
            <span className="text-neutral-400 text-[10px] uppercase tracking-widest font-bold">Last Synced 12m Ago</span>
          </div>
        </div>

        {/* Cached Resources Section */}
        <div className="w-full flex-1 brutalist-border border-x-0 border-b-0 pt-8 pb-8 bg-glass">
          <div className="px-8 mb-6 flex justify-between items-end">
            <div>
              <h3 className="text-[11px] font-bold leading-tight tracking-[0.2em] uppercase text-accent">Cached Resources</h3>
              <p className="text-neutral-500 text-[10px] mt-1 uppercase tracking-widest">Available for offline study</p>
            </div>
            <button className="text-neutral-400 hover:text-foreground transition-colors">
              <Filter size={20} strokeWidth={2.5} />
            </button>
          </div>

          <div className="flex flex-col gap-0 border-y-2 border-foreground brutalist-border border-x-0 bg-background">
            {/* Resource Item 1 */}
            <div className="flex items-center gap-4 px-6 py-4 hover:bg-glass transition-colors cursor-pointer group border-b-2 border-foreground brutalist-border border-x-0 border-t-0">
              <div className="flex items-center justify-center brutalist-border shrink-0 size-12 bg-background group-hover:border-accent group-hover:text-accent transition-colors">
                <FileText size={24} strokeWidth={2} />
              </div>
              <div className="flex flex-col flex-1">
                <span className="text-accent text-[9px] font-bold tracking-widest uppercase mb-1">Physics</span>
                <p className="text-base font-bold leading-none mb-2 tracking-tight group-hover:text-accent transition-colors">Wave Mechanics & Optics</p>
                <p className="text-neutral-500 text-[10px] uppercase tracking-wider">02.4MB • PDF Document</p>
              </div>
            </div>

            {/* Resource Item 2 */}
            <div className="flex items-center gap-4 px-6 py-4 hover:bg-glass transition-colors cursor-pointer group border-b-2 border-foreground brutalist-border border-x-0 border-t-0">
              <div className="flex items-center justify-center brutalist-border shrink-0 size-12 bg-background group-hover:border-accent group-hover:text-accent transition-colors">
                <FileText size={24} strokeWidth={2} />
              </div>
              <div className="flex flex-col flex-1">
                <span className="text-accent text-[9px] font-bold tracking-widest uppercase mb-1">History</span>
                <p className="text-base font-bold leading-none mb-2 tracking-tight group-hover:text-accent transition-colors">The Industrial Revolution</p>
                <p className="text-neutral-500 text-[10px] uppercase tracking-wider">01.1MB • Interactive Deck</p>
              </div>
            </div>

            {/* Resource Item 3 */}
            <div className="flex items-center gap-4 px-6 py-4 hover:bg-glass transition-colors cursor-pointer group border-b-2 border-foreground brutalist-border border-x-0 border-t-0">
              <div className="flex items-center justify-center brutalist-border shrink-0 size-12 bg-background group-hover:border-accent group-hover:text-accent transition-colors">
                <BookOpen size={24} strokeWidth={2} />
              </div>
              <div className="flex flex-col flex-1">
                <span className="text-accent text-[9px] font-bold tracking-widest uppercase mb-1">Literature</span>
                <p className="text-base font-bold leading-none mb-2 tracking-tight group-hover:text-accent transition-colors">Hamlet - Act III & IV</p>
                <p className="text-neutral-500 text-[10px] uppercase tracking-wider">840KB • Text Study</p>
              </div>
            </div>

            {/* Resource Item 4 */}
            <div className="flex items-center gap-4 px-6 py-4 hover:bg-glass transition-colors cursor-pointer group">
              <div className="flex items-center justify-center brutalist-border shrink-0 size-12 bg-background group-hover:border-accent group-hover:text-accent transition-colors">
                <Calculator size={24} strokeWidth={2} />
              </div>
              <div className="flex flex-col flex-1">
                <span className="text-accent text-[9px] font-bold tracking-widest uppercase mb-1">Mathematics</span>
                <p className="text-base font-bold leading-none mb-2 tracking-tight group-hover:text-accent transition-colors">Quadratic Equations</p>
                <p className="text-neutral-500 text-[10px] uppercase tracking-wider">03.2MB • Problem Set</p>
              </div>
            </div>
          </div>

          <div className="mt-8 px-8">
            <button className="w-full brutalist-button bg-background text-foreground hover:bg-foreground hover:text-background flex items-center justify-center gap-3 group">
              <RefreshCw size={16} strokeWidth={2.5} className="group-hover:rotate-180 transition-transform duration-500" />
              <span className="text-[11px] font-bold uppercase tracking-widest">Attempt Reconnection</span>
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
