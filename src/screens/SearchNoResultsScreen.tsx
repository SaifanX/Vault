import React from 'react';
import { ChevronLeft, X, Search, SearchX, HelpCircle } from 'lucide-react';

export function SearchNoResultsScreen() {
  return (
    <div className="bg-background text-foreground font-mono min-h-screen flex flex-col overflow-hidden">
      <div className="relative flex h-screen w-full flex-col overflow-hidden max-w-[430px] mx-auto brutalist-border border-y-0">

        {/* Header */}
        <header className="flex items-center px-6 pt-8 pb-4 justify-between sticky top-0 bg-background/90 backdrop-blur-md z-10 brutalist-border border-x-0 border-t-0 border-b-2">
          <div className="flex items-center gap-4 hover:text-accent cursor-pointer transition-colors group">
            <div className="border-2 border-foreground size-10 flex items-center justify-center group-hover:bg-accent group-hover:border-accent group-hover:text-background transition-colors">
              <ChevronLeft size={24} strokeWidth={2.5} />
            </div>
            <h2 className="text-foreground text-xl font-black leading-tight tracking-tighter uppercase italic group-hover:text-accent transition-colors">The Vault</h2>
          </div>
          <div className="flex items-center">
            <button className="h-10 w-10 flex items-center justify-center border-2 border-foreground hover:bg-danger hover:border-danger hover:text-background transition-colors active:translate-x-[2px] active:translate-y-[2px] shadow-[2px_2px_0px_0px_rgba(250,250,250,1)] active:shadow-none">
              <X size={24} strokeWidth={2.5} />
            </button>
          </div>
        </header>

        {/* Search Input */}
        <div className="px-6 py-4 bg-glass border-b-2 border-foreground">
          <label className="flex flex-col w-full">
            <div className="flex w-full h-14 items-stretch brutalist-border bg-background group focus-within:border-accent transition-colors shadow-[4px_4px_0px_0px_rgba(250,250,250,1)] focus-within:shadow-[4px_4px_0px_0px_#00FF41]">
              <div className="flex items-center justify-center pl-4 text-foreground group-focus-within:text-accent transition-colors">
                <Search size={24} strokeWidth={2.5} />
              </div>
              <input
                className="flex w-full min-w-0 flex-1 border-none bg-transparent focus:ring-0 text-foreground placeholder:text-neutral-600 text-lg font-bold px-4 tracking-tight outline-none italic uppercase"
                type="text"
                defaultValue="Quantum Physics"
                autoFocus
              />
              <div className="flex items-center pr-3 border-l-2 border-foreground pl-3 group-focus-within:border-accent transition-colors">
                <button className="flex items-center justify-center text-foreground hover:text-danger transition-colors">
                  <X size={20} strokeWidth={3} />
                </button>
              </div>
            </div>
          </label>
        </div>

        {/* Main Content Area */}
        <main className="flex-1 overflow-y-auto px-6 pb-32">

          {/* No Results State */}
          <div className="flex flex-col items-center justify-center py-16 px-6 relative">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-danger/5 rounded-full blur-2xl -z-10 animate-pulse"></div>

            <div className="mb-10 flex items-center justify-center w-28 h-28 border-4 border-dashed border-danger/50 text-danger bg-danger/5 rotate-3 hover:rotate-0 transition-transform duration-300">
              <SearchX size={48} strokeWidth={2} />
            </div>

            <div className="text-center space-y-4">
              <h3 className="text-foreground text-2xl font-black leading-tight tracking-tighter uppercase italic">
                No results found for <br/><span className="text-danger border-b-4 border-danger inline-block mt-2">"Quantum Physics"</span>
              </h3>
              <p className="text-neutral-500 text-xs font-bold leading-relaxed max-w-[280px] mx-auto uppercase tracking-widest mt-4">
                Try a different keyword or check your spelling.
              </p>
            </div>
          </div>

          {/* Suggested Topics */}
          <div className="pt-8 pb-4">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-3 h-3 bg-accent"></div>
              <h3 className="text-foreground text-[10px] font-black uppercase tracking-[0.3em]">Suggested Topics</h3>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-3 py-2">
            <div className="flex flex-wrap gap-3">
              <div className="flex h-12 items-center justify-center brutalist-border px-4 bg-background hover:bg-accent hover:text-background hover:border-accent active:translate-x-[2px] active:translate-y-[2px] transition-all cursor-pointer shadow-[2px_2px_0px_0px_rgba(250,250,250,1)] hover:shadow-[2px_2px_0px_0px_#00FF41] active:shadow-none">
                <p className="text-current text-xs font-black tracking-widest uppercase">Newtonian Mechanics</p>
              </div>
              <div className="flex h-12 items-center justify-center brutalist-border px-4 bg-background hover:bg-accent hover:text-background hover:border-accent active:translate-x-[2px] active:translate-y-[2px] transition-all cursor-pointer shadow-[2px_2px_0px_0px_rgba(250,250,250,1)] hover:shadow-[2px_2px_0px_0px_#00FF41] active:shadow-none">
                <p className="text-current text-xs font-black tracking-widest uppercase">Thermodynamics</p>
              </div>
              <div className="flex h-12 items-center justify-center brutalist-border px-4 bg-background hover:bg-accent hover:text-background hover:border-accent active:translate-x-[2px] active:translate-y-[2px] transition-all cursor-pointer shadow-[2px_2px_0px_0px_rgba(250,250,250,1)] hover:shadow-[2px_2px_0px_0px_#00FF41] active:shadow-none">
                <p className="text-current text-xs font-black tracking-widest uppercase">Optics</p>
              </div>
              <div className="flex h-12 items-center justify-center brutalist-border px-4 bg-background hover:bg-accent hover:text-background hover:border-accent active:translate-x-[2px] active:translate-y-[2px] transition-all cursor-pointer shadow-[2px_2px_0px_0px_rgba(250,250,250,1)] hover:shadow-[2px_2px_0px_0px_#00FF41] active:shadow-none">
                <p className="text-current text-xs font-black tracking-widest uppercase">Atomic Physics</p>
              </div>
              <div className="flex h-12 items-center justify-center brutalist-border px-4 bg-background hover:bg-accent hover:text-background hover:border-accent active:translate-x-[2px] active:translate-y-[2px] transition-all cursor-pointer shadow-[2px_2px_0px_0px_rgba(250,250,250,1)] hover:shadow-[2px_2px_0px_0px_#00FF41] active:shadow-none">
                <p className="text-current text-xs font-black tracking-widest uppercase">Gravity</p>
              </div>
              <div className="flex h-12 items-center justify-center brutalist-border px-4 bg-background hover:bg-accent hover:text-background hover:border-accent active:translate-x-[2px] active:translate-y-[2px] transition-all cursor-pointer shadow-[2px_2px_0px_0px_rgba(250,250,250,1)] hover:shadow-[2px_2px_0px_0px_#00FF41] active:shadow-none">
                <p className="text-current text-xs font-black tracking-widest uppercase">Electromagnetism</p>
              </div>
            </div>
          </div>
        </main>

        {/* Floating Action / Gradient Area */}
        <div className="absolute bottom-0 left-0 w-full px-6 pb-12 pt-16 bg-gradient-to-t from-background via-background/90 to-transparent flex flex-col items-center pointer-events-none">
          <button className="pointer-events-auto flex items-center gap-3 text-background font-black text-sm tracking-[0.2em] uppercase px-8 py-5 brutalist-border bg-accent border-accent hover:bg-background hover:text-accent active:translate-x-[2px] active:translate-y-[2px] transition-all shadow-[6px_6px_0px_0px_#FAFAFA] active:shadow-none w-full max-w-sm justify-center">
            <HelpCircle size={20} strokeWidth={2.5} />
            Ask a Doubt
          </button>
        </div>
      </div>
    </div>
  );
}
