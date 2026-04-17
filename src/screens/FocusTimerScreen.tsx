import React from 'react';
import { X } from 'lucide-react';

export function FocusTimerScreen() {
  return (
    <div className="bg-background font-mono text-foreground transition-colors duration-300 antialiased overflow-hidden min-h-screen">
      <div className="relative flex h-screen w-full flex-col max-w-[430px] mx-auto overflow-hidden">
        {/* Header */}
        <header className="flex items-center justify-between p-6 pt-14">
          <div className="text-neutral-500 hover:text-accent flex size-10 items-center justify-start cursor-pointer transition-colors">
            <X size={32} strokeWidth={2} />
          </div>
          <h2 className="text-neutral-600 text-[10px] font-black tracking-[0.4em] uppercase border-b-2 border-neutral-800 pb-1">Focus Engine</h2>
          <div className="size-10"></div> {/* Spacer for centering */}
        </header>

        {/* Main Content */}
        <main className="flex flex-1 flex-col items-center justify-center px-6 relative z-10">

          {/* Timer Display */}
          <div className="flex items-baseline justify-center gap-2 mb-16 relative">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 border-4 border-foreground/5 rounded-full -z-10 animate-pulse"></div>
            <div className="flex flex-col items-center">
              <span className="text-[8rem] md:text-[10rem] font-black tracking-tighter text-foreground leading-none">24</span>
            </div>
            <span className="text-[7rem] md:text-[9rem] font-black text-accent -translate-y-4 animate-pulse leading-none">:</span>
            <div className="flex flex-col items-center">
              <span className="text-[8rem] md:text-[10rem] font-black tracking-tighter text-foreground leading-none">59</span>
            </div>
          </div>

          {/* Current Task */}
          <div className="text-center mb-20 brutalist-border p-6 bg-glass relative">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-background px-3 border-x-2 border-foreground">
              <p className="text-[10px] font-black uppercase tracking-[0.3em] text-accent">Current Task</p>
            </div>
            <h3 className="text-foreground text-4xl font-black tracking-tighter leading-[0.9] px-2 max-w-[300px] italic uppercase mt-2">
              Geometry Homework
            </h3>
          </div>

          {/* Controls */}
          <div className="w-full max-w-[320px] flex flex-col gap-6">
            <div className="flex gap-4 w-full">
              <button className="flex-1 brutalist-button h-16 text-sm tracking-[0.2em] uppercase flex items-center justify-center bg-accent text-background hover:bg-background hover:text-accent border-accent">
                Start
              </button>
              <button className="flex-1 brutalist-button h-16 text-sm tracking-[0.2em] uppercase flex items-center justify-center bg-background text-foreground hover:bg-foreground hover:text-background">
                Pause
              </button>
            </div>
            <button className="w-full flex items-center justify-center h-12 bg-transparent text-neutral-500 text-[10px] font-black tracking-[0.3em] uppercase hover:text-danger hover:underline transition-colors mt-2 underline-offset-4 decoration-2">
              Reset Engine
            </button>
          </div>
        </main>

        {/* Footer Stats */}
        <footer className="pb-12 pt-6 flex flex-col items-center gap-6 relative z-10">
          <div className="flex flex-col items-center brutalist-border p-4 bg-background">
            <p className="font-black text-[9px] tracking-[0.4em] text-neutral-500 uppercase border-b-2 border-neutral-800 pb-2 mb-2">
              Sessions Completed
            </p>
            <p className="font-black text-3xl text-foreground mt-1">
              03
            </p>
          </div>

          {/* Session Dots */}
          <div className="flex gap-4 mt-2">
            <div className="size-3 bg-accent brutalist-border !border-2 shadow-[2px_2px_0px_0px_#FAFAFA]"></div>
            <div className="size-3 bg-accent brutalist-border !border-2 shadow-[2px_2px_0px_0px_#FAFAFA]"></div>
            <div className="size-3 bg-accent brutalist-border !border-2 shadow-[2px_2px_0px_0px_#FAFAFA]"></div>
            <div className="size-3 bg-background brutalist-border !border-2 shadow-[2px_2px_0px_0px_#FAFAFA]"></div>
          </div>
        </footer>

        {/* Decorative Grid Background */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjEiIGZpbGw9InJnYmEoMjUwLCAyNTAsIDI1MCwgMC4xKSIvPjwvc3ZnPg==')] opacity-30 pointer-events-none"></div>
        <div className="h-6 w-full"></div>
      </div>
    </div>
  );
}
