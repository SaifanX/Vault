import React from 'react';
import { Menu, X, Paperclip, ArrowUp, Plus } from 'lucide-react';

export function DoubtClearanceScreen() {
  return (
    <div className="bg-background text-foreground font-mono antialiased overflow-hidden h-screen w-full flex flex-col relative">

      {/* Drawer Toggle Checkbox (CSS logic for opening/closing drawer) */}
      <input className="peer hidden" id="drawer-toggle" type="checkbox" />

      {/* Header */}
      <header className="h-[72px] min-h-[72px] w-full bg-background border-b-2 border-foreground flex items-center justify-between px-4 z-20 shrink-0 shadow-[0px_4px_0px_0px_rgba(250,250,250,1)]">
        <label className="cursor-pointer p-2 -ml-2 hover:bg-foreground hover:text-background transition-colors text-foreground flex items-center justify-center border-2 border-transparent hover:border-foreground" htmlFor="drawer-toggle">
          <Menu size={28} strokeWidth={2.5} />
        </label>
        <div className="flex flex-col items-center flex-1 mx-2">
          <h1 className="text-base font-black tracking-tighter text-foreground truncate max-w-[200px] uppercase italic">Physics - Newton's Laws</h1>
          <span className="text-[10px] text-accent font-black uppercase tracking-[0.2em] bg-accent/10 px-2 border border-accent mt-0.5">Active Doubt</span>
        </div>
        <button className="brutalist-button bg-accent border-accent text-background text-[11px] font-black px-4 py-2 uppercase tracking-widest active:translate-x-[2px] active:translate-y-[2px] whitespace-nowrap shadow-[2px_2px_0px_0px_rgba(250,250,250,1)] active:shadow-none">
          RESOLVE
        </button>
      </header>

      {/* Main Chat Area */}
      <main className="flex-1 overflow-y-auto no-scrollbar bg-background w-full p-4 flex flex-col gap-6 relative z-0 pb-28">

        {/* Timestamp */}
        <div className="flex justify-center my-4">
          <span className="text-[10px] font-black text-neutral-500 bg-neutral-900 border-2 border-foreground px-4 py-1.5 uppercase tracking-widest">TODAY 10:42 AM</span>
        </div>

        {/* User Message */}
        <div className="flex items-end gap-3 justify-end group">
          <div className="flex flex-col gap-1 items-end max-w-[85%]">
            <div className="bg-background border-4 border-foreground text-foreground text-sm font-bold leading-relaxed px-5 py-4 shadow-[4px_4px_0px_0px_rgba(250,250,250,1)]">
              <p>I don't understand how the 3rd law applies here? It feels like the forces should cancel out if they are equal and opposite.</p>
            </div>
            <span className="text-[10px] text-neutral-500 font-black uppercase tracking-widest mr-1 mt-1">Sent • 10:42 AM</span>
          </div>
          <div className="size-10 shrink-0 mb-1 border-4 border-foreground bg-accent flex items-center justify-center text-background font-black text-lg">
            U
          </div>
        </div>

        {/* Tutor Message */}
        <div className="flex items-end gap-3 justify-start group">
          <div className="size-10 shrink-0 mb-1 border-4 border-foreground bg-foreground flex items-center justify-center text-background font-black text-lg">
            V
          </div>
          <div className="flex flex-col gap-1 items-start max-w-[85%]">
            <span className="text-[11px] text-accent font-black tracking-widest uppercase ml-1">Dr. Vance</span>
            <div className="bg-foreground text-background text-sm font-bold leading-relaxed px-5 py-4 shadow-[4px_4px_0px_0px_#00FF41] border-4 border-foreground">
              <p>That's a very common misconception! Here is the key:</p>
              <p className="mt-2">Think of the action and reaction forces. They act on <em className="italic bg-background text-foreground px-1 border-2 border-background">different</em> bodies, so they cannot cancel each other out.</p>
            </div>
          </div>
        </div>

        {/* Tutor Message - Image Attachment */}
        <div className="flex items-end gap-3 justify-start pl-12">
          <div className="flex flex-col gap-1 items-start max-w-[85%]">
            <div className="bg-background p-2 border-4 border-foreground shadow-[4px_4px_0px_0px_#00FF41]">
              <div className="h-32 w-48 bg-neutral-800 border-2 border-neutral-600 flex items-center justify-center">
                <span className="text-neutral-500 font-black text-[10px] uppercase tracking-widest">Diagram.png</span>
              </div>
            </div>
            <span className="text-[10px] text-neutral-400 mt-2 ml-1 font-black uppercase tracking-[0.2em] bg-neutral-900 px-2 py-0.5 border border-neutral-700">Fig 1.2 • Interaction Pair</span>
          </div>
        </div>

        {/* User Message 2 */}
        <div className="flex items-end gap-3 justify-end group">
          <div className="flex flex-col gap-1 items-end max-w-[85%]">
            <div className="bg-background border-4 border-foreground text-foreground text-sm font-bold leading-relaxed px-5 py-4 shadow-[4px_4px_0px_0px_rgba(250,250,250,1)]">
              <p>Oh, I see! So if I push the wall, the wall pushes me, but the forces are on two different objects?</p>
            </div>
            <div className="flex items-center gap-2 mr-1 mt-1">
              <span className="text-[10px] text-accent font-black uppercase tracking-[0.3em] bg-accent/10 px-1 border border-accent">READ</span>
              <span className="text-[10px] text-neutral-500 font-black uppercase tracking-widest">10:46 AM</span>
            </div>
          </div>
          <div className="size-10 shrink-0 mb-1 border-4 border-foreground bg-accent flex items-center justify-center text-background font-black text-lg">
            U
          </div>
        </div>

      </main>

      {/* Input Area */}
      <div className="fixed bottom-0 left-0 w-full bg-background/95 backdrop-blur-xl border-t-4 border-foreground p-4 z-10 shadow-[0px_-4px_0px_0px_rgba(250,250,250,1)]">
        <div className="flex items-center gap-3 max-w-4xl mx-auto h-14">
          <button className="shrink-0 size-14 flex items-center justify-center border-4 border-foreground text-foreground hover:bg-foreground hover:text-background transition-colors bg-background active:translate-x-[2px] active:translate-y-[2px] shadow-[2px_2px_0px_0px_rgba(250,250,250,1)] active:shadow-none">
            <Paperclip size={24} strokeWidth={2.5} />
          </button>

          <div className="flex-1 bg-background border-4 border-foreground flex items-center h-full px-4 focus-within:border-accent transition-colors shadow-[inset_4px_4px_0px_0px_rgba(0,0,0,1)] group">
            <input
              className="w-full bg-transparent border-none focus:ring-0 p-0 text-sm font-bold text-foreground placeholder:text-neutral-600 outline-none uppercase tracking-wide"
              placeholder="TYPE YOUR DOUBT..."
              type="text"
            />
          </div>

          <button className="shrink-0 size-14 flex items-center justify-center border-4 border-foreground bg-foreground text-background hover:bg-accent hover:border-accent transition-colors active:translate-x-[2px] active:translate-y-[2px] shadow-[2px_2px_0px_0px_rgba(0,255,65,1)] active:shadow-none">
            <ArrowUp size={28} strokeWidth={3} />
          </button>
        </div>
      </div>

      {/* Drawer Overlay */}
      <div
        className="drawer-overlay fixed inset-0 bg-background/80 backdrop-blur-md z-40 opacity-0 pointer-events-none transition-opacity peer-checked:opacity-100 peer-checked:pointer-events-auto"
        onClick={() => {
          const el = document.getElementById('drawer-toggle') as HTMLInputElement;
          if (el) el.checked = false;
        }}
      ></div>

      {/* Drawer Content */}
      <aside className="drawer-content fixed top-0 left-0 h-full w-[85%] max-w-[320px] bg-background border-r-4 border-foreground z-50 transform -translate-x-full peer-checked:translate-x-0 flex flex-col shadow-[8px_0px_0px_0px_rgba(250,250,250,1)] transition-transform">
        <div className="h-[72px] flex items-center px-6 border-b-4 border-foreground bg-glass">
          <h2 className="text-xl font-black tracking-tighter text-foreground uppercase italic">The Vault</h2>
          <div className="ml-auto">
            <label className="cursor-pointer size-10 flex items-center justify-center border-2 border-foreground hover:bg-foreground hover:text-background transition-colors text-foreground" htmlFor="drawer-toggle">
              <X size={24} strokeWidth={2.5} />
            </label>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto p-6 bg-background">
          {/* Active Doubts */}
          <div className="mb-10">
            <h3 className="text-[10px] font-black text-accent bg-accent/10 inline-block px-2 py-1 border-2 border-accent uppercase tracking-[0.3em] mb-4">Active Doubts</h3>
            <ul className="flex flex-col gap-3">
              <li className="flex items-center gap-4 p-4 border-4 border-accent bg-glass relative group cursor-pointer hover:bg-accent hover:text-background transition-colors">
                <div className="size-3 bg-accent group-hover:bg-background border-2 border-foreground animate-pulse"></div>
                <div className="flex flex-col overflow-hidden">
                  <span className="text-sm font-black text-foreground group-hover:text-background truncate tracking-tight uppercase italic">Physics: Newton's Laws</span>
                  <span className="text-[10px] text-neutral-400 group-hover:text-neutral-800 font-black tracking-widest uppercase mt-1">Tutor is typing...</span>
                </div>
              </li>
              <li className="flex items-center gap-4 p-4 border-4 border-foreground bg-background hover:bg-glass transition-colors cursor-pointer">
                <div className="size-3 bg-neutral-600 border-2 border-foreground"></div>
                <div className="flex flex-col overflow-hidden">
                  <span className="text-sm font-bold text-neutral-400 truncate tracking-tight uppercase italic">Chem: Stoichiometry</span>
                  <span className="text-[10px] text-neutral-500 font-black tracking-widest uppercase mt-1">Waiting...</span>
                </div>
              </li>
            </ul>
          </div>

          {/* Resolved Doubts */}
          <div>
            <h3 className="text-[10px] font-black text-neutral-500 bg-neutral-900 inline-block px-2 py-1 border-2 border-foreground uppercase tracking-[0.3em] mb-4">Resolved</h3>
            <ul className="flex flex-col gap-3">
              <li className="flex items-center gap-4 p-4 border-2 border-neutral-800 border-dashed bg-background hover:border-solid hover:border-foreground transition-colors cursor-pointer opacity-60 hover:opacity-100">
                <div className="size-3 bg-background border-2 border-neutral-600"></div>
                <div className="flex flex-col overflow-hidden">
                  <span className="text-sm font-bold text-neutral-500 truncate tracking-tight uppercase italic">Algebra: Quadratic Eq</span>
                  <span className="text-[10px] text-neutral-600 font-black tracking-widest uppercase mt-1">2d ago</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="p-6 border-t-4 border-foreground bg-glass">
          <button className="flex items-center justify-center gap-3 brutalist-button bg-foreground text-background border-foreground w-full py-5 active:translate-x-[2px] active:translate-y-[2px] shadow-[4px_4px_0px_0px_rgba(250,250,250,0.5)] active:shadow-none hover:bg-accent hover:border-accent hover:text-background transition-colors">
            <Plus size={20} strokeWidth={3} />
            <span className="text-xs font-black uppercase tracking-[0.3em]">NEW DOUBT</span>
          </button>
        </div>
      </aside>

    </div>
  );
}
