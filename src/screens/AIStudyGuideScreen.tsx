import React from 'react';
import { ArrowLeft, MoreVertical, Zap, FileText, FunctionSquare, AlertTriangle, Download } from 'lucide-react';

export function AIStudyGuideScreen() {
  return (
    <div className="bg-background font-mono text-foreground min-h-screen flex flex-col">
      <header className="sticky top-0 z-50 bg-background/90 backdrop-blur-md brutalist-border border-b-2 border-x-0 border-t-0">
        <div className="flex items-center p-4 justify-between max-w-md mx-auto w-full">
          <div className="flex size-10 items-center justify-center hover:bg-foreground hover:text-background border-2 border-transparent hover:border-foreground transition-colors cursor-pointer">
            <ArrowLeft size={24} strokeWidth={2.5} />
          </div>
          <h1 className="text-lg font-black uppercase tracking-widest text-foreground italic">The Vault</h1>
          <div className="flex size-10 items-center justify-center hover:bg-foreground hover:text-background border-2 border-transparent hover:border-foreground transition-colors cursor-pointer text-neutral-500">
            <MoreVertical size={24} strokeWidth={2.5} />
          </div>
        </div>
      </header>

      <main className="max-w-md mx-auto px-6 pb-32 w-full">
        <div className="py-8">
          <label className="flex flex-col gap-3">
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-neutral-500 flex items-center gap-2">
              <span className="w-2 h-2 bg-accent"></span>
              Subject / Topic
            </span>
            <input
              className="brutalist-input w-full h-16 px-4 text-xl font-bold tracking-tight italic placeholder:text-neutral-600 focus:bg-accent/5 focus:border-accent transition-colors"
              placeholder="e.g., Photosynthesis"
              type="text"
              defaultValue="Pythagorean Theorem"
            />
          </label>
          <div className="mt-6">
            <button className="w-full brutalist-button bg-accent text-background border-accent hover:bg-background hover:text-accent shadow-[4px_4px_0px_0px_#00FF41] h-16 rounded-none font-black text-lg flex items-center justify-center gap-3 uppercase tracking-widest transition-all">
              <span>Generate Guide</span>
              <Zap size={24} strokeWidth={3} className="animate-pulse" />
            </button>
          </div>
        </div>

        <div className="h-0.5 bg-foreground w-full mb-10 brutalist-border border-x-0 border-t-0 border-b-2"></div>

        <div className="space-y-8">
          {/* Key Concepts Section */}
          <section className="bg-glass brutalist-border p-6 relative">
            <div className="absolute top-0 right-0 w-12 h-12 bg-accent/20 border-b-2 border-l-2 border-foreground"></div>
            <div className="flex items-center gap-3 mb-8">
              <FileText className="text-accent" size={24} strokeWidth={2.5} />
              <h2 className="text-2xl font-black leading-none uppercase text-foreground italic tracking-tight">Key Concepts</h2>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4 p-5 brutalist-border bg-background relative group hover:border-accent transition-colors">
                <div className="size-10 brutalist-border bg-accent text-background flex items-center justify-center shrink-0 shadow-[2px_2px_0px_0px_#FAFAFA] group-hover:shadow-[2px_2px_0px_0px_#00FF41] transition-shadow">
                  <span className="font-black text-sm">01</span>
                </div>
                <div>
                  <p className="font-bold text-lg leading-tight text-foreground uppercase tracking-tight group-hover:text-accent transition-colors">Right-Angled Triangle</p>
                  <p className="text-neutral-400 text-sm mt-2 leading-relaxed font-medium">The theorem only applies to triangles where one angle is exactly 90 degrees.</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-5 brutalist-border bg-background relative group hover:border-accent transition-colors">
                <div className="size-10 brutalist-border bg-accent text-background flex items-center justify-center shrink-0 shadow-[2px_2px_0px_0px_#FAFAFA] group-hover:shadow-[2px_2px_0px_0px_#00FF41] transition-shadow">
                  <span className="font-black text-sm">02</span>
                </div>
                <div>
                  <p className="font-bold text-lg leading-tight text-foreground uppercase tracking-tight group-hover:text-accent transition-colors">The Hypotenuse</p>
                  <p className="text-neutral-400 text-sm mt-2 leading-relaxed font-medium">The longest side of the triangle, located directly opposite the right angle.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Formulas Section */}
          <section className="bg-glass brutalist-border p-6 relative">
            <div className="absolute top-0 right-0 w-12 h-12 bg-accent/20 border-b-2 border-l-2 border-foreground"></div>
            <div className="flex items-center gap-3 mb-8">
              <FunctionSquare className="text-accent" size={24} strokeWidth={2.5} />
              <h2 className="text-2xl font-black leading-none uppercase text-foreground italic tracking-tight">Formulas</h2>
            </div>

            <div className="bg-background brutalist-border p-6 shadow-[4px_4px_0px_0px_#00FF41]">
              <div className="font-mono text-3xl font-black tracking-tighter text-center text-foreground py-4 border-2 border-dashed border-neutral-600 bg-neutral-900/50">
                a² + b² = c²
              </div>
              <div className="mt-6 pt-6 border-t-2 border-foreground space-y-4">
                <div className="flex justify-between items-center text-[10px] uppercase tracking-widest text-neutral-400 font-bold">
                  <span>Leg A</span>
                  <span className="font-mono text-accent font-black text-sm bg-accent/10 px-2 py-1 border border-accent">a = √(c² - b²)</span>
                </div>
                <div className="flex justify-between items-center text-[10px] uppercase tracking-widest text-neutral-400 font-bold">
                  <span>Hypotenuse</span>
                  <span className="font-mono text-accent font-black text-sm bg-accent/10 px-2 py-1 border border-accent">c = √(a² + b²)</span>
                </div>
              </div>
            </div>
          </section>

          {/* Watch Out Section */}
          <section className="bg-glass brutalist-border p-6 relative">
            <div className="absolute top-0 right-0 w-12 h-12 bg-danger/20 border-b-2 border-l-2 border-foreground"></div>
            <div className="flex items-center gap-3 mb-8">
              <AlertTriangle className="text-danger animate-pulse" size={24} strokeWidth={2.5} />
              <h2 className="text-2xl font-black leading-none uppercase text-foreground italic tracking-tight">Watch Out</h2>
            </div>

            <div className="grid grid-cols-1 gap-4">
              <div className="p-5 brutalist-border bg-background border-l-8 border-l-danger">
                <p className="text-[10px] font-black text-danger uppercase tracking-widest mb-2 border-b border-danger/30 pb-2 inline-block">Mismatching Sides</p>
                <p className="text-sm text-neutral-400 font-medium leading-relaxed">Confusing 'c' with other sides. 'c' MUST always be the longest side.</p>
              </div>

              <div className="p-5 brutalist-border bg-background border-l-8 border-l-[#f4c025]">
                <p className="text-[10px] font-black text-[#f4c025] uppercase tracking-widest mb-2 border-b border-[#f4c025]/30 pb-2 inline-block">Non-Right Triangles</p>
                <p className="text-sm text-neutral-400 font-medium leading-relaxed">Trying to use the formula on acute or obtuse triangles.</p>
              </div>
            </div>
          </section>

          <footer className="text-center py-12 border-t-2 border-neutral-800 mt-12">
            <p className="text-[10px] uppercase tracking-[0.3em] font-black text-neutral-600 bg-neutral-900 inline-block px-4 py-2 brutalist-border">Generated by Vault AI Core v0.1</p>
          </footer>
        </div>
      </main>

      <div className="fixed bottom-8 left-0 right-0 flex justify-center px-6 pointer-events-none z-50">
        <button className="pointer-events-auto flex items-center justify-center gap-4 brutalist-button bg-foreground text-background hover:bg-background hover:text-foreground h-16 px-10 shadow-[8px_8px_0px_0px_rgba(0,255,65,0.5)] active:shadow-none w-full max-w-sm">
          <Download size={24} strokeWidth={2.5} />
          <span className="font-black text-sm uppercase tracking-[0.2em]">Download PDF</span>
        </button>
      </div>
    </div>
  );
}
