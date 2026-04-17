import React from 'react';
import { Shield, Search, User, Filter, Rocket, Zap, Microscope, Landmark, Plus, BookOpen, BarChart3, Compass, Settings } from 'lucide-react';

export function LibraryScreen() {
  return (
    <div className="bg-background text-foreground font-mono min-h-screen relative overflow-x-hidden flex flex-col max-w-md mx-auto brutalist-border border-y-0">

      {/* Top Navigation Bar */}
      <header className="sticky top-0 z-50 bg-background/90 backdrop-blur-md px-6 py-4 flex items-center justify-between brutalist-border border-x-0 border-t-0 border-b-2">
        <div className="flex items-center gap-3">
          <Shield className="text-accent" size={24} strokeWidth={2.5} />
          <h1 className="text-xl font-black tracking-tighter uppercase italic hover:text-accent transition-colors cursor-pointer">The Vault</h1>
        </div>
        <div className="flex items-center gap-4">
          <button className="flex items-center justify-center size-10 border-2 border-foreground hover:bg-foreground hover:text-background transition-colors active:translate-x-[2px] active:translate-y-[2px] shadow-[2px_2px_0px_0px_rgba(250,250,250,1)] active:shadow-none">
            <Search size={20} strokeWidth={2.5} />
          </button>
          <button className="flex items-center justify-center size-10 border-2 border-accent bg-accent/10 text-accent hover:bg-accent hover:text-background transition-colors active:translate-x-[2px] active:translate-y-[2px] shadow-[2px_2px_0px_0px_rgba(0,255,65,1)] active:shadow-none">
            <User size={20} strokeWidth={2.5} />
          </button>
        </div>
      </header>

      <main className="p-6 pb-32 flex-1 w-full">
        {/* Search and Filter Bar */}
        <div className="mb-10">
          <h2 className="text-4xl font-black mb-6 uppercase tracking-tighter italic text-foreground">Library</h2>
          <div className="relative group">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-500 group-focus-within:text-accent transition-colors">
              <Filter size={24} strokeWidth={2.5} />
            </span>
            <input
              className="w-full bg-background border-4 border-foreground h-16 pl-14 pr-4 focus:ring-0 focus:outline-none focus:border-accent transition-colors placeholder:text-neutral-600 text-lg font-bold tracking-tight uppercase shadow-[4px_4px_0px_0px_rgba(250,250,250,1)] focus:shadow-[4px_4px_0px_0px_#00FF41]"
              placeholder="SEARCH DECKS OR SUBJECTS..."
              type="text"
            />
          </div>
        </div>

        {/* Section: PHYSICS */}
        <section className="mb-12">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-3 h-3 bg-accent"></div>
            <h3 className="text-sm font-black tracking-[0.3em] text-foreground uppercase">Physics</h3>
            <span className="h-0.5 flex-1 bg-foreground ml-2"></span>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {/* Deck Card 1 */}
            <div className="flex flex-col bg-background brutalist-border overflow-hidden hover:border-accent transition-colors cursor-pointer group shadow-[4px_4px_0px_0px_rgba(250,250,250,1)] hover:shadow-[4px_4px_0px_0px_#00FF41]">
              <div className="h-28 bg-[#1a1a1a] flex items-center justify-center border-b-2 border-foreground relative overflow-hidden group-hover:bg-accent/10 transition-colors">
                <Rocket size={40} className="text-neutral-600 group-hover:text-accent transition-colors -rotate-45" strokeWidth={2} />
              </div>
              <div className="p-4 flex flex-col h-full bg-glass">
                <p className="text-lg font-black uppercase tracking-tight mb-1 group-hover:text-accent transition-colors italic">Motion</p>
                <p className="text-xs text-neutral-400 mb-6 font-bold tracking-widest">42 Cards</p>
                <div className="mt-auto flex items-center justify-between border-t-2 border-neutral-800 pt-3">
                  <span className="text-[10px] font-black tracking-widest text-neutral-500 uppercase">Last Played</span>
                  <p className="text-[10px] font-mono font-black text-foreground bg-foreground/10 px-2 border border-foreground/30">24.05.2024</p>
                </div>
              </div>
            </div>

            {/* Deck Card 2 */}
            <div className="flex flex-col bg-background brutalist-border overflow-hidden hover:border-accent transition-colors cursor-pointer group shadow-[4px_4px_0px_0px_rgba(250,250,250,1)] hover:shadow-[4px_4px_0px_0px_#00FF41]">
              <div className="h-28 bg-[#1a1a1a] flex items-center justify-center border-b-2 border-foreground relative overflow-hidden group-hover:bg-accent/10 transition-colors">
                <Zap size={40} className="text-neutral-600 group-hover:text-accent transition-colors" strokeWidth={2} />
              </div>
              <div className="p-4 flex flex-col h-full bg-glass">
                <p className="text-lg font-black uppercase tracking-tight mb-1 group-hover:text-accent transition-colors italic">Forces</p>
                <p className="text-xs text-neutral-400 mb-6 font-bold tracking-widest">28 Cards</p>
                <div className="mt-auto flex items-center justify-between border-t-2 border-neutral-800 pt-3">
                  <span className="text-[10px] font-black tracking-widest text-neutral-500 uppercase">Last Played</span>
                  <p className="text-[10px] font-mono font-black text-foreground bg-foreground/10 px-2 border border-foreground/30">22.05.2024</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section: BIOLOGY */}
        <section className="mb-12">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-3 h-3 bg-danger"></div>
            <h3 className="text-sm font-black tracking-[0.3em] text-foreground uppercase">Biology</h3>
            <span className="h-0.5 flex-1 bg-foreground ml-2"></span>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {/* Deck Card 3 */}
            <div className="flex flex-col bg-background brutalist-border overflow-hidden hover:border-danger transition-colors cursor-pointer group shadow-[4px_4px_0px_0px_rgba(250,250,250,1)] hover:shadow-[4px_4px_0px_0px_#FF3131]">
              <div className="h-28 bg-[#1a1a1a] flex items-center justify-center border-b-2 border-foreground relative overflow-hidden group-hover:bg-danger/10 transition-colors">
                <Microscope size={40} className="text-neutral-600 group-hover:text-danger transition-colors" strokeWidth={2} />
              </div>
              <div className="p-4 flex flex-col h-full bg-glass">
                <p className="text-lg font-black uppercase tracking-tight mb-1 group-hover:text-danger transition-colors italic">Cells</p>
                <p className="text-xs text-neutral-400 mb-6 font-bold tracking-widest">115 Cards</p>
                <div className="mt-auto flex items-center justify-between border-t-2 border-neutral-800 pt-3">
                  <span className="text-[10px] font-black tracking-widest text-neutral-500 uppercase">Last Played</span>
                  <p className="text-[10px] font-mono font-black text-foreground bg-foreground/10 px-2 border border-foreground/30">20.05.2024</p>
                </div>
              </div>
            </div>

            {/* Create New Deck */}
            <button className="flex flex-col items-center justify-center bg-transparent border-4 border-dashed border-neutral-600 hover:border-foreground hover:bg-glass transition-all group min-h-[220px]">
              <div className="size-16 border-4 border-neutral-600 flex items-center justify-center mb-4 group-hover:border-foreground group-hover:bg-foreground group-hover:text-background text-neutral-600 transition-colors bg-background">
                <Plus size={32} strokeWidth={3} />
              </div>
              <p className="text-sm font-black uppercase tracking-widest text-neutral-500 group-hover:text-foreground">New Deck</p>
            </button>
          </div>
        </section>

        {/* Section: HISTORY */}
        <section className="mb-12">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-3 h-3 bg-[#f4c025]"></div>
            <h3 className="text-sm font-black tracking-[0.3em] text-foreground uppercase">History</h3>
            <span className="h-0.5 flex-1 bg-foreground ml-2"></span>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {/* Deck Card 4 */}
            <div className="flex flex-col bg-background brutalist-border overflow-hidden hover:border-[#f4c025] transition-colors cursor-pointer group shadow-[4px_4px_0px_0px_rgba(250,250,250,1)] hover:shadow-[4px_4px_0px_0px_#f4c025]">
              <div className="h-28 bg-[#1a1a1a] flex items-center justify-center border-b-2 border-foreground relative overflow-hidden group-hover:bg-[#f4c025]/10 transition-colors">
                <Landmark size={40} className="text-neutral-600 group-hover:text-[#f4c025] transition-colors" strokeWidth={2} />
              </div>
              <div className="p-4 flex flex-col h-full bg-glass">
                <p className="text-lg font-black uppercase tracking-tight mb-1 group-hover:text-[#f4c025] transition-colors italic">Rome</p>
                <p className="text-xs text-neutral-400 mb-6 font-bold tracking-widest">30 Cards</p>
                <div className="mt-auto flex items-center justify-between border-t-2 border-neutral-800 pt-3">
                  <span className="text-[10px] font-black tracking-widest text-neutral-500 uppercase">Last Played</span>
                  <p className="text-[10px] font-mono font-black text-danger bg-danger/10 px-2 border border-danger/30">NEVER</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Bottom Navigation Bar */}
      <nav className="fixed bottom-0 left-0 right-0 bg-background/95 backdrop-blur-xl border-t-2 border-foreground pb-6 pt-4 px-6 z-50">
        <div className="flex items-center justify-between max-w-md mx-auto">
          <button className="flex flex-col items-center gap-1 text-accent hover:bg-accent/10 px-4 py-2 border-b-4 border-accent transition-colors">
            <BookOpen size={24} strokeWidth={2.5} />
            <span className="text-[10px] font-black tracking-widest uppercase mt-1">Decks</span>
          </button>
          <button className="flex flex-col items-center gap-1 text-neutral-500 hover:text-foreground px-4 py-2 border-b-4 border-transparent hover:border-foreground hover:bg-glass transition-colors">
            <BarChart3 size={24} strokeWidth={2.5} />
            <span className="text-[10px] font-black tracking-widest uppercase mt-1">Stats</span>
          </button>
          <button className="flex flex-col items-center gap-1 text-neutral-500 hover:text-foreground px-4 py-2 border-b-4 border-transparent hover:border-foreground hover:bg-glass transition-colors">
            <Compass size={24} strokeWidth={2.5} />
            <span className="text-[10px] font-black tracking-widest uppercase mt-1">Explore</span>
          </button>
          <button className="flex flex-col items-center gap-1 text-neutral-500 hover:text-foreground px-4 py-2 border-b-4 border-transparent hover:border-foreground hover:bg-glass transition-colors">
            <Settings size={24} strokeWidth={2.5} />
            <span className="text-[10px] font-black tracking-widest uppercase mt-1">Settings</span>
          </button>
        </div>
      </nav>
    </div>
  );
}
