import React from 'react';
import { X, Share2, RefreshCw, AlertTriangle } from 'lucide-react';

export function SessionCompleteScreen() {
  return (
    <div className="bg-background text-foreground font-mono min-h-screen flex flex-col relative overflow-hidden">
      {/* Decorative Grid Background */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjEiIGZpbGw9InJnYmEoMjUwLCAyNTAsIDI1MCwgMC4xKSIvPjwvc3ZnPg==')] opacity-10 pointer-events-none -z-10"></div>

      {/* Top Navigation Bar */}
      <nav className="flex items-center bg-background/90 backdrop-blur-md px-6 py-5 sticky top-0 z-50 brutalist-border border-x-0 border-t-0 border-b-2">
        <div className="flex-1">
          <X className="hover:text-accent cursor-pointer transition-colors" size={28} strokeWidth={2.5} />
        </div>
        <h2 className="text-xs font-black uppercase tracking-[0.3em] text-center flex-[2] text-neutral-400">The Vault // Session</h2>
        <div className="flex-1 flex justify-end">
          <Share2 className="hover:text-accent cursor-pointer transition-colors" size={24} strokeWidth={2.5} />
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-1 px-6 pb-32 max-w-2xl mx-auto w-full">
        {/* Headline Section */}
        <header className="py-12 text-center">
          <h1 className="text-foreground tracking-tighter text-5xl font-black leading-tight mb-4 italic uppercase">Session Complete</h1>
          <div className="inline-block bg-foreground text-background px-3 py-1 brutalist-border shadow-[4px_4px_0px_0px_#FAFAFA]">
            <p className="uppercase text-[10px] tracking-[0.2em] font-black">Algebra I • Deck A</p>
          </div>
        </header>

        {/* Hero Metric */}
        <section className="mb-8">
          <div className="flex flex-col items-center justify-center p-12 brutalist-border bg-glass relative overflow-hidden">
            <div className="absolute top-0 left-0 w-16 h-16 border-t-4 border-l-4 border-accent"></div>
            <div className="absolute bottom-0 right-0 w-16 h-16 border-b-4 border-r-4 border-accent"></div>

            <p className="text-neutral-500 text-[10px] font-black uppercase tracking-[0.3em] mb-4 flex items-center gap-2">
              <span className="w-2 h-2 bg-accent animate-pulse"></span>
              Cards Mastered
            </p>
            <div className="font-mono text-7xl font-black tracking-tighter text-foreground leading-none">
              18<span className="text-neutral-600">/</span><span className="text-5xl text-neutral-400">20</span>
            </div>
          </div>
        </section>

        {/* Stats Grid */}
        <section className="grid grid-cols-2 gap-6 mb-12">
          <div className="flex flex-col gap-2 brutalist-border p-6 bg-glass hover:border-accent hover:bg-accent/5 transition-colors cursor-default">
            <p className="text-neutral-500 text-[10px] font-black uppercase tracking-[0.3em]">Time Spent</p>
            <p className="font-mono text-foreground text-3xl font-black leading-tight">04:20</p>
          </div>
          <div className="flex flex-col gap-2 brutalist-border p-6 bg-glass hover:border-accent hover:bg-accent/5 transition-colors cursor-default">
            <p className="text-neutral-500 text-[10px] font-black uppercase tracking-[0.3em]">Accuracy</p>
            <p className="font-mono text-foreground text-3xl font-black leading-tight">90%</p>
          </div>
        </section>

        {/* Mastery Distribution */}
        <section className="mb-14">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-3 h-3 bg-foreground"></div>
            <h3 className="text-foreground text-[11px] font-black uppercase tracking-[0.3em]">Mastery Distribution</h3>
          </div>

          <div className="w-full h-4 flex brutalist-border bg-background mb-6 p-0.5 gap-0.5">
            {/* Mastered (Foreground) */}
            <div className="h-full bg-foreground w-[70%]"></div>
            {/* Reviewing (Neutral) */}
            <div className="h-full bg-neutral-600 w-[20%]"></div>
            {/* Still Learning (Accent) */}
            <div className="h-full bg-[#f4c025] w-[10%]"></div>
          </div>

          <div className="flex justify-between text-[10px] font-black uppercase tracking-widest text-neutral-500 px-1 flex-wrap gap-4">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 border-2 border-foreground bg-foreground"></span>
              <span className="text-foreground">Mastered (14)</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 border-2 border-neutral-600 bg-neutral-600"></span>
              <span>Reviewing (4)</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 border-2 border-[#f4c025] bg-[#f4c025] animate-pulse"></span>
              <span className="text-[#f4c025]">Learning (2)</span>
            </div>
          </div>
        </section>

        {/* Difficult Cards */}
        <section className="mb-8">
          <div className="flex justify-between items-end mb-6 border-b-2 border-foreground pb-2">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 bg-[#f4c025]"></div>
              <h3 className="text-foreground text-[11px] font-black uppercase tracking-[0.3em]">Difficult Cards</h3>
            </div>
            <span className="text-[#f4c025] text-[10px] font-black uppercase tracking-widest bg-[#f4c025]/10 px-2 py-1 border-2 border-[#f4c025]">Critical Focus</span>
          </div>

          <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between p-5 brutalist-border bg-glass hover:bg-background transition-colors group cursor-pointer border-l-4 border-l-[#f4c025]">
              <div className="flex flex-col gap-1">
                <span className="text-neutral-500 text-[10px] font-black uppercase tracking-[0.2em]">Concept</span>
                <p className="text-foreground text-lg font-bold tracking-tight group-hover:text-[#f4c025] transition-colors italic">Quadratic Formula Constants</p>
              </div>
              <AlertTriangle className="text-[#f4c025]" size={24} strokeWidth={2.5} />
            </div>

            <div className="flex items-center justify-between p-5 brutalist-border bg-glass hover:bg-background transition-colors group cursor-pointer border-l-4 border-l-[#f4c025]">
              <div className="flex flex-col gap-1">
                <span className="text-neutral-500 text-[10px] font-black uppercase tracking-[0.2em]">Concept</span>
                <p className="text-foreground text-lg font-bold tracking-tight group-hover:text-[#f4c025] transition-colors italic">Slope-Intercept Form Exceptions</p>
              </div>
              <AlertTriangle className="text-[#f4c025]" size={24} strokeWidth={2.5} />
            </div>
          </div>
        </section>
      </main>

      {/* Sticky Footer CTA */}
      <footer className="fixed bottom-0 left-0 right-0 p-6 bg-background/95 backdrop-blur-xl brutalist-border border-x-0 border-b-0 border-t-2 z-50">
        <div className="flex flex-col gap-4 max-w-2xl mx-auto">
          <button className="w-full brutalist-button bg-[#f4c025] hover:bg-background hover:text-[#f4c025] border-[#f4c025] text-background font-black py-5 text-sm uppercase tracking-[0.2em] transition-colors flex items-center justify-center gap-3 shadow-[4px_4px_0px_0px_#f4c025] active:shadow-none">
            <RefreshCw size={20} strokeWidth={3} />
            Re-study Difficult (2)
          </button>
          <button className="w-full brutalist-button bg-background text-neutral-400 border-neutral-600 shadow-[4px_4px_0px_0px_#525252] hover:text-foreground hover:border-foreground hover:shadow-[4px_4px_0px_0px_#fafafa] font-black py-5 text-sm uppercase tracking-[0.2em] transition-colors active:shadow-none">
            Back to Dashboard
          </button>
        </div>
      </footer>
    </div>
  );
}
