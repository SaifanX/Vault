import React from 'react';
import { Grid, User, Search, X, FileText, CheckCircle, CalendarDays } from 'lucide-react';

export function GlobalSearchScreen() {
  return (
    <div className="bg-background text-foreground font-mono min-h-screen flex flex-col">
      <header className="sticky top-0 z-50 bg-background/90 backdrop-blur-md brutalist-border border-b-2 border-x-0 border-t-0">
        <div className="flex items-center p-4 justify-between max-w-screen-xl mx-auto w-full">
          <div className="flex items-center gap-3 hover:text-accent cursor-pointer transition-colors">
            <Grid size={24} strokeWidth={2.5} />
            <h1 className="text-lg font-black tracking-tighter uppercase italic">THE VAULT</h1>
          </div>
          <div className="flex items-center gap-4">
            <button className="hover:text-accent transition-colors">
              <User size={24} strokeWidth={2.5} />
            </button>
          </div>
        </div>
      </header>

      <main className="flex flex-col md:flex-row max-w-screen-xl mx-auto w-full flex-1">
        <aside className="w-full md:w-64 brutalist-border border-b-2 md:border-b-0 md:border-r-2 border-x-0 border-t-0 p-6 shrink-0 bg-glass">
          <div className="flex flex-col gap-8">
            <div>
              <h3 className="text-xs uppercase text-neutral-500 mb-4 font-bold tracking-widest">Grade</h3>
              <div className="flex md:flex-col gap-3 overflow-x-auto pb-2 md:pb-0 no-scrollbar">
                <button className="brutalist-button px-4 py-2 text-xs w-full text-left whitespace-nowrap">GRADE 9</button>
                <button className="brutalist-border px-4 py-2 text-xs font-bold text-neutral-400 hover:text-foreground transition-colors w-full text-left whitespace-nowrap bg-background">GRADE 8</button>
                <button className="brutalist-border px-4 py-2 text-xs font-bold text-neutral-400 hover:text-foreground transition-colors w-full text-left whitespace-nowrap bg-background">GRADE 10</button>
              </div>
            </div>

            <div>
              <h3 className="text-xs uppercase text-neutral-500 mb-4 font-bold tracking-widest">Subject</h3>
              <div className="flex md:flex-col gap-3 overflow-x-auto pb-2 md:pb-0 no-scrollbar">
                <button className="brutalist-border px-4 py-2 text-xs font-bold text-neutral-400 hover:text-foreground transition-colors w-full text-left whitespace-nowrap bg-background">ALL</button>
                <button className="brutalist-border px-4 py-2 text-xs font-bold text-accent border-accent bg-accent/10 w-full text-left whitespace-nowrap">PHYSICS</button>
                <button className="brutalist-border px-4 py-2 text-xs font-bold text-neutral-400 hover:text-foreground transition-colors w-full text-left whitespace-nowrap bg-background">SCIENCE</button>
                <button className="brutalist-border px-4 py-2 text-xs font-bold text-neutral-400 hover:text-foreground transition-colors w-full text-left whitespace-nowrap bg-background">MATH</button>
              </div>
            </div>
          </div>
        </aside>

        <section className="flex-1 bg-background">
          <div className="px-6 py-8 brutalist-border border-b-2 border-x-0 border-t-0">
            <div className="relative group">
              <div className="absolute inset-y-0 left-0 flex items-center pointer-events-none">
                <Search size={32} className="text-neutral-500 group-focus-within:text-accent transition-colors" strokeWidth={3} />
              </div>
              <input
                className="w-full h-16 pl-12 pr-12 text-4xl font-black bg-transparent border-none focus:ring-0 placeholder:text-neutral-700 text-foreground uppercase tracking-tight italic"
                type="text"
                defaultValue="Newton"
                autoFocus
              />
              <button className="absolute inset-y-0 right-0 flex items-center hover:text-danger transition-colors">
                <X size={24} strokeWidth={3} />
              </button>
            </div>
            <p className="mt-4 text-[10px] text-neutral-500 uppercase tracking-widest font-bold">14 results in 0.02s</p>
          </div>

          <div className="pb-32">
            {/* Resources Section */}
            <div className="pt-8">
              <div className="px-6 mb-4 flex items-center gap-3">
                <div className="w-3 h-3 bg-foreground"></div>
                <h2 className="text-xs font-black tracking-[0.3em] uppercase text-foreground">RESOURCES</h2>
              </div>

              <div className="flex flex-col border-y-2 border-foreground brutalist-border border-x-0 bg-background">
                <div className="px-6 py-5 flex items-center justify-between hover:bg-glass cursor-pointer transition-colors group border-b-2 border-foreground brutalist-border border-x-0 border-t-0">
                  <div className="flex items-center gap-5">
                    <div className="w-12 h-12 flex items-center justify-center bg-background brutalist-border shrink-0 group-hover:border-accent group-hover:text-accent transition-colors">
                      <FileText size={24} strokeWidth={2} />
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-foreground group-hover:text-accent transition-colors tracking-tight">Newton's Three Laws of Motion</h4>
                      <div className="flex items-center gap-3 mt-2">
                        <span className="px-2 py-0.5 text-[10px] font-black bg-foreground text-background uppercase">PHYSICS</span>
                        <span className="text-xs text-neutral-500 font-medium tracking-wide">PDF • Grade 9 • 2.4 MB</span>
                      </div>
                    </div>
                  </div>
                  <span className="text-[10px] text-neutral-500 font-bold uppercase tracking-widest hidden sm:block">[TITLE]</span>
                </div>

                <div className="px-6 py-5 flex items-center justify-between hover:bg-glass cursor-pointer transition-colors group">
                  <div className="flex items-center gap-5">
                    <div className="w-12 h-12 flex items-center justify-center bg-background brutalist-border shrink-0 group-hover:border-accent group-hover:text-accent transition-colors">
                      <FileText size={24} strokeWidth={2} />
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-foreground group-hover:text-accent transition-colors tracking-tight">Classical Mechanics: The Newton Legacy</h4>
                      <div className="flex items-center gap-3 mt-2">
                        <span className="px-2 py-0.5 text-[10px] font-black bg-foreground text-background uppercase">PHYSICS</span>
                        <span className="text-xs text-neutral-500 font-medium tracking-wide">Notes • Grade 10 • Sep 12</span>
                      </div>
                    </div>
                  </div>
                  <span className="text-[10px] text-neutral-500 font-bold uppercase tracking-widest hidden sm:block">[CONTENT]</span>
                </div>
              </div>
            </div>

            {/* Doubts Section */}
            <div className="pt-12">
              <div className="px-6 mb-4 flex items-center gap-3">
                <div className="w-3 h-3 bg-accent"></div>
                <h2 className="text-xs font-black tracking-[0.3em] uppercase text-foreground">DOUBTS</h2>
              </div>

              <div className="flex flex-col border-y-2 border-foreground brutalist-border border-x-0 bg-background">
                <div className="px-6 py-5 flex items-center justify-between hover:bg-glass cursor-pointer transition-colors group">
                  <div className="flex items-center gap-5">
                    <div className="w-12 h-12 flex items-center justify-center bg-background brutalist-border border-accent text-accent shrink-0 group-hover:bg-accent group-hover:text-background transition-colors">
                      <CheckCircle size={24} strokeWidth={2.5} />
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-foreground group-hover:text-accent transition-colors tracking-tight">How does Newton's 2nd Law apply to friction?</h4>
                      <div className="flex items-center gap-3 mt-2">
                        <span className="px-2 py-0.5 text-[10px] font-black bg-foreground text-background uppercase">PHYSICS</span>
                        <span className="text-xs text-neutral-500 font-medium tracking-wide">Resolved • 12 Answers</span>
                      </div>
                    </div>
                  </div>
                  <span className="text-[10px] text-neutral-500 font-bold uppercase tracking-widest hidden sm:block">[TITLE]</span>
                </div>
              </div>
            </div>

            {/* Exams Section */}
            <div className="pt-12">
              <div className="px-6 mb-4 flex items-center gap-3">
                <div className="w-3 h-3 bg-danger"></div>
                <h2 className="text-xs font-black tracking-[0.3em] uppercase text-foreground">EXAMS</h2>
              </div>

              <div className="flex flex-col border-y-2 border-foreground brutalist-border border-x-0 bg-background">
                <div className="px-6 py-5 flex items-center justify-between hover:bg-glass cursor-pointer transition-colors group">
                  <div className="flex items-center gap-5">
                    <div className="w-12 h-12 flex items-center justify-center bg-background brutalist-border border-danger text-danger shrink-0 group-hover:bg-danger group-hover:text-background transition-colors">
                      <CalendarDays size={24} strokeWidth={2.5} />
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-foreground group-hover:text-danger transition-colors tracking-tight">Mid-Term Assessment: Newtonian Physics</h4>
                      <div className="flex items-center gap-3 mt-2">
                        <span className="px-2 py-0.5 text-[10px] font-black bg-foreground text-background uppercase">PHYSICS</span>
                        <span className="text-xs text-neutral-500 font-medium tracking-wide">Final • Nov 20 • 60 Mins</span>
                      </div>
                    </div>
                  </div>
                  <span className="text-[10px] text-neutral-500 font-bold uppercase tracking-widest hidden sm:block">[TAGS]</span>
                </div>
              </div>
            </div>

          </div>
        </section>
      </main>
    </div>
  );
}
