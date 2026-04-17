import React from 'react';
import { Database, TrendingUp, Home, CalendarDays, FolderOpen, User, Edit3, LibraryBig, Activity } from 'lucide-react';

export function MarketingScreen() {
  return (
    <div className="bg-background text-foreground font-mono min-h-screen">
      <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden">
        {/* Navigation */}
        <nav className="sticky top-0 z-50 flex items-center justify-between px-6 py-5 bg-background/90 backdrop-blur-md brutalist-border border-x-0 border-t-0 border-b-2">
          <div className="flex items-center gap-3 hover:text-accent cursor-pointer transition-colors">
            <Database size={28} strokeWidth={2.5} />
            <span className="font-black tracking-widest uppercase italic text-sm hidden sm:block">The Vault OS</span>
          </div>
          <button className="brutalist-button bg-background text-foreground border-foreground hover:bg-foreground hover:text-background py-2 px-6 text-xs tracking-widest uppercase">
            Login
          </button>
        </nav>

        {/* Hero Section */}
        <main className="flex flex-col items-center px-6 pt-16 pb-32 text-center relative overflow-hidden">
          {/* Decorative Grid Background */}
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjEiIGZpbGw9InJnYmEoMjUwLCAyNTAsIDI1MCwgMC4xKSIvPjwvc3ZnPg==')] opacity-30 pointer-events-none -z-20"></div>

          <div className="max-w-3xl flex flex-col items-center gap-10">
            <div className="flex flex-col items-center gap-6 relative">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-accent/20 rounded-full blur-3xl -z-10 animate-pulse"></div>

              <h1 className="text-7xl sm:text-8xl md:text-9xl font-black leading-[0.85] tracking-tighter text-foreground italic uppercase">
                The Vault.
              </h1>
              <div className="h-2 w-32 bg-accent mt-2 mb-4"></div>
              <h2 className="text-xl font-bold leading-relaxed text-neutral-400 max-w-md mx-auto uppercase tracking-wide">
                The definitive operating system for <br className="hidden sm:block"/> academic excellence.
              </h2>
              <button className="mt-8 brutalist-button bg-accent text-background border-accent h-16 px-12 text-lg font-black tracking-[0.2em] uppercase hover:bg-background hover:text-accent shadow-[8px_8px_0px_0px_rgba(250,250,250,1)] hover:shadow-[8px_8px_0px_0px_#00FF41] transition-all">
                Get Access
              </button>
            </div>

            {/* Mock Device Container */}
            <div className="relative mt-20 w-full max-w-[340px] sm:max-w-md mx-auto perspective-1000 z-10">
              <div className="relative w-full aspect-[9/19] bg-background rounded-[2.5rem] border-[12px] border-neutral-900 shadow-2xl overflow-hidden rotate-x-12 hover:rotate-0 transition-transform duration-700 ease-out shadow-[0_20px_50px_rgba(0,255,65,0.2)]">

                <div className="absolute inset-0 bg-background flex flex-col">
                  {/* Dynamic Island / Notch Mock */}
                  <div className="h-14 flex items-center justify-between px-6 border-b-2 border-neutral-800 bg-black">
                    <div className="w-20 h-4 bg-neutral-900 rounded-full"></div>
                    <div className="size-8 bg-neutral-900 rounded-full"></div>
                  </div>

                  {/* App Screen Mock */}
                  <div className="flex-1 p-6 flex flex-col gap-6 text-left bg-background overflow-hidden relative">
                    <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjEiIGZpbGw9InJnYmEoMjUwLCAyNTAsIDI1MCwgMC4xKSIvPjwvc3ZnPg==')] opacity-20"></div>

                    <div className="p-6 brutalist-border bg-glass flex flex-col justify-between h-40 relative z-10">
                      <div className="flex justify-between items-start">
                        <span className="text-[10px] font-black uppercase text-accent tracking-widest bg-accent/10 px-2 py-1 border border-accent">Current GPA</span>
                        <TrendingUp size={24} className="text-accent" strokeWidth={2.5} />
                      </div>
                      <div>
                        <span className="text-6xl font-black tracking-tighter text-foreground italic">3.8</span>
                        <div className="text-[10px] mt-2 font-bold uppercase tracking-widest text-neutral-400">+0.2 from last term</div>
                      </div>
                    </div>

                    <div className="flex flex-col gap-4 relative z-10 mt-2">
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-foreground"></div>
                        <span className="text-[10px] font-black uppercase text-foreground tracking-widest">Today's Schedule</span>
                      </div>

                      <div className="flex items-center gap-4 p-4 brutalist-border bg-background border-l-4 border-l-accent">
                        <div className="flex-1">
                          <div className="text-base font-black text-foreground uppercase italic tracking-tight">Mathematics</div>
                          <div className="text-xs font-bold text-neutral-500 tracking-wider mt-1">09:00 AM</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-4 p-4 brutalist-border bg-background border-l-4 border-l-danger">
                        <div className="flex-1">
                          <div className="text-base font-black text-foreground uppercase italic tracking-tight">Physics Lab</div>
                          <div className="text-xs font-bold text-neutral-500 tracking-wider mt-1">11:30 AM</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* App Nav Mock */}
                  <div className="h-16 border-t-2 border-neutral-800 flex items-center justify-around text-neutral-600 bg-black">
                    <Home className="text-foreground" size={24} strokeWidth={2.5} />
                    <CalendarDays size={24} strokeWidth={2.5} />
                    <FolderOpen size={24} strokeWidth={2.5} />
                    <User size={24} strokeWidth={2.5} />
                  </div>
                </div>
              </div>
            </div>

          </div>
        </main>

        {/* Features Section */}
        <section className="bg-glass py-24 px-6 brutalist-border border-x-0 border-b-0 border-t-2">
          <div className="max-w-6xl mx-auto flex flex-col gap-16">
            <div className="flex flex-col gap-4 items-center text-center">
              <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-foreground uppercase italic">System Features</h2>
              <div className="w-16 h-2 bg-accent mb-2"></div>
              <p className="text-neutral-400 max-w-lg font-bold tracking-wider uppercase text-sm">Designed for academic excellence. Minimal clutter, maximum focus.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {/* Feature 1 */}
              <div className="flex flex-col gap-6 brutalist-border p-8 bg-background hover:bg-glass transition-colors group">
                <div className="size-16 border-4 border-foreground flex items-center justify-center text-foreground group-hover:border-accent group-hover:text-accent group-hover:bg-accent/10 transition-colors">
                  <Edit3 size={32} strokeWidth={2.5} />
                </div>
                <div className="flex flex-col gap-4">
                  <h3 className="text-xl font-black uppercase tracking-tight text-foreground italic group-hover:text-accent transition-colors">Simulated Exams</h3>
                  <p className="text-sm text-neutral-400 leading-relaxed font-medium">
                    Test your knowledge before it counts with realistic mock tests designed by experts. Instant brutalist feedback.
                  </p>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="flex flex-col gap-6 brutalist-border p-8 bg-background hover:bg-glass transition-colors group">
                <div className="size-16 border-4 border-foreground flex items-center justify-center text-foreground group-hover:border-accent group-hover:text-accent group-hover:bg-accent/10 transition-colors">
                  <LibraryBig size={32} strokeWidth={2.5} />
                </div>
                <div className="flex flex-col gap-4">
                  <h3 className="text-xl font-black uppercase tracking-tight text-foreground italic group-hover:text-accent transition-colors">Central Resources</h3>
                  <p className="text-sm text-neutral-400 leading-relaxed font-medium">
                    Every textbook, lecture note, and syllabus organized in one searchable, indestructible vault.
                  </p>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="flex flex-col gap-6 brutalist-border p-8 bg-background hover:bg-glass transition-colors group">
                <div className="size-16 border-4 border-foreground flex items-center justify-center text-foreground group-hover:border-accent group-hover:text-accent group-hover:bg-accent/10 transition-colors">
                  <Activity size={32} strokeWidth={2.5} />
                </div>
                <div className="flex flex-col gap-4">
                  <h3 className="text-xl font-black uppercase tracking-tight text-foreground italic group-hover:text-accent transition-colors">Academic Radar</h3>
                  <p className="text-sm text-neutral-400 leading-relaxed font-medium">
                    Track your performance trends, grades, and attendance stats in real-time. No sugar-coating.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-32 px-6 bg-accent brutalist-border border-x-0 border-y-2">
          <div className="max-w-4xl mx-auto text-center flex flex-col items-center gap-8">
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter text-background leading-tight uppercase italic">Ready for the upgrade?</h2>
            <p className="text-background/80 text-xl font-black tracking-widest uppercase border-y-2 border-background py-2">Join over 1,200 students optimizing their academic life.</p>
            <button className="w-full max-w-sm flex items-center justify-center h-20 bg-background text-accent text-xl font-black tracking-[0.2em] uppercase border-4 border-background hover:bg-transparent hover:text-background transition-colors mt-8 shadow-[8px_8px_0px_0px_rgba(5,5,5,1)] hover:shadow-[4px_4px_0px_0px_rgba(5,5,5,1)] active:translate-x-[4px] active:translate-y-[4px] active:shadow-none">
              Get Access Now
            </button>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-background py-16 px-6 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iMTAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTAgMTBMMjAgMEw0MCAxMCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1MCwgMjUwLCAyNTAsIDAuMikiIHN0cm9rZS13aWR0aD0iMiIvPjwvc3ZnPg==')] repeat-x"></div>

          <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 pt-8">
            <p className="text-xs font-black uppercase tracking-[0.4em] text-neutral-500">© 2024 The Vault OS</p>
            <div className="flex items-center gap-8">
              <a className="text-xs font-black uppercase tracking-widest text-neutral-500 hover:text-accent hover:underline underline-offset-4 decoration-2 transition-all" href="#">Terms</a>
              <a className="text-xs font-black uppercase tracking-widest text-neutral-500 hover:text-accent hover:underline underline-offset-4 decoration-2 transition-all" href="#">Privacy</a>
              <a className="text-xs font-black uppercase tracking-widest text-neutral-500 hover:text-accent hover:underline underline-offset-4 decoration-2 transition-all" href="#">Support</a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
