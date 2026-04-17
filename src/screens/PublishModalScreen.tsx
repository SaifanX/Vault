import React from 'react';
import { UploadCloud, Layers, Store } from 'lucide-react';

export function PublishModalScreen() {
  return (
    <div className="bg-background text-foreground font-mono min-h-screen flex items-center justify-center p-4 relative overflow-hidden">
      {/* Decorative background grid */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjEiIGZpbGw9InJnYmEoMjUwLCAyNTAsIDI1MCwgMC4xKSIvPjwvc3ZnPg==')] opacity-20"></div>

      {/* Modal Container */}
      <div className="w-full max-w-[420px] brutalist-card bg-background flex flex-col p-0 z-10 relative">

        {/* Top Bar */}
        <div className="flex items-center p-4 border-b-2 border-foreground justify-between bg-glass">
          <div className="flex size-10 shrink-0 items-center justify-center border-2 border-foreground bg-background">
            <UploadCloud className="text-foreground" size={24} strokeWidth={2.5} />
          </div>
          <h2 className="text-foreground text-xs font-black leading-tight tracking-[0.2em] flex-1 text-center uppercase">Publish to Community</h2>
          <div className="flex w-10 items-center justify-end">
            <button className="text-neutral-500 text-[10px] font-black uppercase tracking-widest cursor-pointer hover:text-danger hover:underline transition-all underline-offset-4 decoration-2">Cancel</button>
          </div>
        </div>

        {/* Headline Section */}
        <div className="px-6 pt-8 pb-4">
          <h1 className="text-foreground tracking-tighter text-4xl font-black leading-[0.9] text-center italic uppercase">Earn Vault Credits</h1>
          <p className="text-neutral-400 text-xs text-center mt-3 font-bold tracking-wider uppercase">Monetize your study materials in the Marketplace</p>
        </div>

        {/* Deck Summary Card */}
        <div className="px-6 py-4">
          <div className="flex items-center justify-between gap-4 p-4 border-2 border-foreground bg-glass relative overflow-hidden group hover:border-accent transition-colors cursor-pointer">
            <div className="absolute right-0 top-0 w-16 h-16 bg-accent/10 rounded-bl-full -z-10 group-hover:bg-accent/20 transition-colors"></div>

            <div className="flex flex-col gap-2">
              <p className="text-foreground text-lg font-black leading-tight tracking-tight uppercase group-hover:text-accent transition-colors">Physics - Mechanics</p>
              <div className="flex items-center gap-2">
                <Layers className="text-neutral-500" size={16} strokeWidth={2.5} />
                <p className="text-neutral-400 text-[10px] font-black uppercase tracking-[0.2em]">15 Cards</p>
              </div>
            </div>

            <div className="h-16 w-16 bg-neutral-900 border-2 border-foreground shrink-0 flex items-center justify-center group-hover:border-accent transition-colors">
               <span className="text-[8px] font-black tracking-widest text-neutral-600 uppercase flex flex-col items-center">
                 <span>[THUMB]</span>
               </span>
            </div>
          </div>
        </div>

        {/* Form Fields */}
        <div className="px-6 py-2 space-y-6">

          {/* Public Description */}
          <label className="flex flex-col">
            <p className="text-foreground text-[10px] font-black uppercase tracking-[0.2em] pb-2 flex items-center gap-2">
              <span className="w-2 h-2 bg-accent"></span>
              Public Description
            </p>
            <textarea
              className="brutalist-input w-full min-h-[120px] resize-none text-sm leading-relaxed"
              placeholder="WHAT WILL STUDENTS LEARN FROM THIS DECK? (MIN 50 CHARS)"
            ></textarea>
          </label>

          <div className="grid grid-cols-2 gap-4">
            {/* Pricing */}
            <label className="flex flex-col">
              <p className="text-foreground text-[10px] font-black uppercase tracking-[0.2em] pb-2 flex items-center gap-2">
                <span className="w-2 h-2 bg-foreground"></span>
                Pricing (VC)
              </p>
              <div className="relative">
                <input
                  className="brutalist-input w-full h-14 pl-4 pr-12 text-2xl font-black text-accent border-accent focus:bg-accent/5"
                  type="text"
                  defaultValue="25"
                />
                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-neutral-500 text-xs font-black tracking-widest">VC</span>
              </div>
            </label>

            {/* Toggle Verification */}
            <div className="flex flex-col">
              <p className="text-foreground text-[10px] font-black uppercase tracking-[0.2em] pb-2 flex items-center gap-2">
                <span className="w-2 h-2 bg-[#f4c025]"></span>
                Verification
              </p>
              <div className="flex items-center justify-between h-14 px-4 border-2 border-[#f4c025] bg-[#f4c025]/5">
                <span className="text-[10px] text-[#f4c025] font-black uppercase tracking-widest">Gold Status</span>

                {/* Brutalist Toggle */}
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" defaultChecked />
                  <div className="w-10 h-6 bg-background border-2 border-[#f4c025] peer-focus:outline-none peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[4px] after:left-[4px] after:bg-[#f4c025] after:border-2 after:border-[#f4c025] after:h-4 after:w-4 after:transition-all peer-checked:bg-[#f4c025]/20 peer-checked:after:bg-[#f4c025]"></div>
                </label>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Action */}
        <div className="p-6 mt-4 border-t-2 border-foreground bg-glass">
          <button className="brutalist-button w-full py-5 text-sm tracking-[0.2em] uppercase flex items-center justify-center gap-3">
            <Store size={20} strokeWidth={2.5} />
            Publish to Marketplace
          </button>
          <p className="text-[9px] text-neutral-500 text-center mt-6 uppercase tracking-[0.3em] font-black">The Vault • OS v0.1</p>
        </div>
      </div>
    </div>
  );
}
