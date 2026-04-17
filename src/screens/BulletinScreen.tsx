import React from 'react';
import { Search, SlidersHorizontal, Plus, LayoutDashboard, Bell, GraduationCap, UserCircle } from 'lucide-react';

export function BulletinScreen() {
  return (
    <div className="bg-background text-foreground font-mono min-h-screen relative flex w-full flex-col max-w-[480px] mx-auto overflow-x-hidden brutalist-border border-y-0">

      {/* Sticky Header */}
      <div className="sticky top-0 z-50 bg-background/90 backdrop-blur-md">
        <div className="flex flex-col gap-2 p-4 pb-2 brutalist-border border-x-0 border-t-0 border-b-2">
          <div className="flex items-center h-12 justify-between">
            <div className="flex items-center gap-3">
              <Search size={24} strokeWidth={2.5} className="text-foreground hover:text-accent cursor-pointer transition-colors" />
              <span className="text-[10px] uppercase tracking-[0.2em] font-black text-accent bg-accent/10 px-2 py-1 border-2 border-accent">The Vault / OS</span>
            </div>
            <div className="flex w-12 items-center justify-end">
              <button className="flex items-center justify-center border-2 border-foreground size-10 hover:bg-foreground hover:text-background transition-colors shadow-[2px_2px_0px_0px_rgba(250,250,250,1)] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none">
                <SlidersHorizontal size={20} strokeWidth={2.5} />
              </button>
            </div>
          </div>
          <h1 className="text-foreground tracking-tighter text-4xl font-black leading-tight uppercase italic mt-2">Bulletin</h1>
        </div>

        {/* Tab Navigation */}
        <div className="flex brutalist-border border-x-0 border-t-0 px-4 gap-6 overflow-x-auto no-scrollbar bg-glass">
          <a className="flex flex-col items-center justify-center border-b-4 border-accent text-accent pb-3 pt-4 font-black" href="#">
            <p className="text-[10px] leading-normal tracking-[0.2em] uppercase">All</p>
          </a>
          <a className="flex flex-col items-center justify-center border-b-4 border-transparent text-neutral-500 pb-3 pt-4 hover:text-foreground transition-colors font-bold" href="#">
            <p className="text-[10px] leading-normal tracking-[0.2em] uppercase">Admin</p>
          </a>
          <a className="flex flex-col items-center justify-center border-b-4 border-transparent text-neutral-500 pb-3 pt-4 hover:text-foreground transition-colors font-bold" href="#">
            <p className="text-[10px] leading-normal tracking-[0.2em] uppercase">Exams</p>
          </a>
          <a className="flex flex-col items-center justify-center border-b-4 border-transparent text-neutral-500 pb-3 pt-4 hover:text-foreground transition-colors font-bold" href="#">
            <p className="text-[10px] leading-normal tracking-[0.2em] uppercase">Clubs</p>
          </a>
        </div>
      </div>

      {/* Feed Content */}
      <div className="flex flex-col p-4 gap-6 bg-glass min-h-screen">

        {/* Urgent Post */}
        <div className="brutalist-card p-0 border-l-8 border-l-danger relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-16 h-16 bg-danger/10 rounded-bl-full -z-10 group-hover:bg-danger/20 transition-colors"></div>
          <div className="p-5 flex flex-col gap-4">
            <div className="flex justify-between items-start">
              <span className="px-2 py-1 bg-danger text-background text-[9px] font-black tracking-[0.2em] uppercase border-2 border-danger">Urgent</span>
              <span className="text-[10px] text-neutral-500 uppercase font-bold tracking-widest">12.12.24 // 08:45</span>
            </div>
            <div className="flex flex-col gap-2">
              <h2 className="text-foreground text-xl font-black leading-tight tracking-tighter uppercase italic">Campus Maintenance: North Entrance Closed</h2>
              <p className="text-neutral-400 text-sm leading-relaxed font-medium">
                Electrical maintenance scheduled for the North Wing. Please use the South entrance for all arrivals today. Gym classes relocated to auditorium.
              </p>
            </div>
            {/* Image Placeholder */}
            <div className="w-full h-48 brutalist-border bg-neutral-900 flex items-center justify-center overflow-hidden">
               <div className="text-neutral-600 font-black text-xs tracking-widest uppercase flex flex-col items-center gap-2">
                 <span className="text-danger">[IMAGE DATA CORRUPTED]</span>
                 <span>Maintenance.jpg</span>
               </div>
            </div>
          </div>
        </div>

        {/* Exams Post */}
        <div className="brutalist-card p-0 relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-16 h-16 bg-accent/10 rounded-bl-full -z-10 group-hover:bg-accent/20 transition-colors"></div>
          <div className="p-5 flex flex-col gap-4">
            <div className="flex justify-between items-start">
              <span className="px-2 py-1 bg-foreground text-background text-[9px] font-black tracking-[0.2em] uppercase border-2 border-foreground">Exams</span>
              <span className="text-[10px] text-neutral-500 uppercase font-bold tracking-widest">11.12.24 // 14:20</span>
            </div>
            <div className="flex flex-col gap-2">
              <h2 className="text-foreground text-xl font-black leading-tight tracking-tighter uppercase italic group-hover:text-accent transition-colors">Semester 1 Final Exam Schedule</h2>
              <p className="text-neutral-400 text-sm leading-relaxed font-medium">
                The full schedule for grades 6-10 has been published. Grade 9 Mathematics and Grade 10 Physics exams will be held in the Main Hall.
              </p>
            </div>
          </div>
        </div>

        {/* Admin Post */}
        <div className="brutalist-card p-0 relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-16 h-16 bg-foreground/5 rounded-bl-full -z-10 group-hover:bg-foreground/10 transition-colors"></div>
          <div className="p-5 flex flex-col gap-4">
            <div className="flex justify-between items-start">
              <span className="px-2 py-1 bg-foreground text-background text-[9px] font-black tracking-[0.2em] uppercase border-2 border-foreground">Admin</span>
              <span className="text-[10px] text-neutral-500 uppercase font-bold tracking-widest">10.12.24 // 09:00</span>
            </div>
            <div className="flex flex-col gap-2">
              <h2 className="text-foreground text-xl font-black leading-tight tracking-tighter uppercase italic">Winter Break Dates Confirmed</h2>
              <p className="text-neutral-400 text-sm leading-relaxed font-medium">
                School will be officially closed from December 20th through January 5th. Classes will resume on Monday, Jan 8th.
              </p>
            </div>
            {/* Image Placeholder */}
            <div className="w-full h-40 brutalist-border bg-neutral-900 flex items-center justify-center overflow-hidden">
               <div className="text-neutral-600 font-black text-xs tracking-widest uppercase flex flex-col items-center gap-2">
                 <span>Winter_Schedule.pdf</span>
               </div>
            </div>
          </div>
        </div>

        {/* Clubs Post */}
        <div className="brutalist-card p-0 relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-16 h-16 bg-foreground/5 rounded-bl-full -z-10 group-hover:bg-foreground/10 transition-colors"></div>
          <div className="p-5 flex flex-col gap-4">
            <div className="flex justify-between items-start">
              <span className="px-2 py-1 bg-foreground text-background text-[9px] font-black tracking-[0.2em] uppercase border-2 border-foreground">Clubs</span>
              <span className="text-[10px] text-neutral-500 uppercase font-bold tracking-widest">09.12.24 // 16:45</span>
            </div>
            <div className="flex flex-col gap-2">
              <h2 className="text-foreground text-xl font-black leading-tight tracking-tighter uppercase italic group-hover:text-accent transition-colors">Robotics Club: Regional Qualifiers</h2>
              <p className="text-neutral-400 text-sm leading-relaxed font-medium">
                Congratulations to the Grade 8 team for advancing to the regional robotics tournament. Practice sessions will move to daily slots.
              </p>
            </div>
          </div>
        </div>

        <div className="h-24"></div>
      </div>

      {/* Floating Action Button */}
      <div className="fixed bottom-24 right-6 md:right-[calc(50%-216px)] z-40">
        <button className="brutalist-button bg-accent text-background border-accent size-14 !p-0 rounded-full flex items-center justify-center hover:bg-background hover:text-accent shadow-[4px_4px_0px_0px_rgba(0,255,65,1)]">
          <Plus size={32} strokeWidth={3} />
        </button>
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 w-full max-w-[480px] bg-background/95 backdrop-blur-xl brutalist-border border-x-0 border-b-0 px-6 py-4 flex justify-between items-center z-50">
        <button className="flex flex-col items-center gap-1.5 text-neutral-500 hover:text-foreground transition-colors">
          <LayoutDashboard size={24} strokeWidth={2.5} />
          <span className="text-[9px] uppercase font-black tracking-[0.2em]">Home</span>
        </button>
        <button className="flex flex-col items-center gap-1.5 text-accent border-b-2 border-accent pb-1">
          <Bell size={24} strokeWidth={3} />
          <span className="text-[9px] uppercase font-black tracking-[0.2em]">Bulletin</span>
        </button>
        <button className="flex flex-col items-center gap-1.5 text-neutral-500 hover:text-foreground transition-colors">
          <GraduationCap size={24} strokeWidth={2.5} />
          <span className="text-[9px] uppercase font-black tracking-[0.2em]">Academy</span>
        </button>
        <button className="flex flex-col items-center gap-1.5 text-neutral-500 hover:text-foreground transition-colors">
          <UserCircle size={24} strokeWidth={2.5} />
          <span className="text-[9px] uppercase font-black tracking-[0.2em]">Vault</span>
        </button>
      </div>
    </div>
  );
}
