import React from 'react';
import { ChevronLeft, ChevronRight, Moon, Contrast, Globe, User } from 'lucide-react';

export function UserSettingsScreen() {
  return (
    <div className="bg-background text-foreground font-mono antialiased min-h-screen flex flex-col overflow-x-hidden max-w-md mx-auto brutalist-border border-y-0">

      {/* Sticky Header */}
      <div className="sticky top-0 z-50 flex items-center bg-background/90 backdrop-blur-xl p-4 pb-3 justify-between brutalist-border border-x-0 border-t-0 border-b-2">
        <div className="text-foreground flex size-10 items-center justify-center border-2 border-transparent hover:border-foreground hover:bg-foreground hover:text-background cursor-pointer transition-colors">
          <ChevronLeft size={24} strokeWidth={2.5} />
        </div>
        <div className="flex-1 text-center font-black text-xs tracking-[0.2em] uppercase text-neutral-500">Settings</div>
        <div className="text-foreground font-black text-xs uppercase tracking-widest cursor-pointer hover:text-accent transition-colors w-10 text-right underline underline-offset-4 decoration-2">Done</div>
      </div>

      <div className="px-6 pb-6 pt-8">
        <h1 className="text-foreground tracking-tighter text-4xl font-black leading-tight italic uppercase">User Settings</h1>
      </div>

      <div className="flex-1 flex flex-col no-scrollbar pb-12">

        {/* Profile Section */}
        <div className="mb-10">
          <h3 className="text-accent text-[10px] font-black leading-tight tracking-[0.3em] px-6 pb-3 pt-4 uppercase">Profile</h3>
          <div className="bg-glass brutalist-border border-x-0">
            <div className="flex p-5 items-center gap-5">
              <div className="bg-neutral-800 brutalist-border h-16 w-16 shrink-0 flex items-center justify-center shadow-[4px_4px_0px_0px_rgba(250,250,250,1)]">
                 <User size={32} className="text-neutral-500" strokeWidth={2} />
              </div>
              <div className="flex flex-col justify-center flex-1 min-w-0 gap-1">
                <p className="text-foreground text-xl font-black tracking-tight truncate uppercase">Alex Mercer</p>
                <div className="flex items-center gap-3">
                  <p className="text-neutral-400 text-xs font-bold uppercase tracking-wider">Grade 9</p>
                  <span className="text-foreground font-black">/</span>
                  <p className="text-neutral-500 text-[10px] font-mono font-black bg-neutral-900 px-2 py-0.5 border border-neutral-700">#882910</p>
                </div>
              </div>
            </div>

            <div className="h-0.5 bg-foreground w-full"></div>

            <div className="flex items-center justify-between px-6 py-4 cursor-pointer hover:bg-foreground hover:text-background transition-colors group">
              <span className="text-current text-xs font-black uppercase tracking-widest">Edit Profile Details</span>
              <ChevronRight size={20} strokeWidth={3} className="text-neutral-500 group-hover:text-background" />
            </div>
          </div>
        </div>

        {/* Notifications Section */}
        <div className="mb-10">
          <h3 className="text-accent text-[10px] font-black leading-tight tracking-[0.3em] px-6 pb-3 pt-2 uppercase">Notifications</h3>
          <div className="bg-glass brutalist-border border-x-0 flex flex-col">
            <div className="flex items-center justify-between px-6 py-5 hover:bg-neutral-900 transition-colors">
              <span className="text-foreground text-sm font-bold tracking-tight uppercase">Assignment Alerts</span>

              {/* Brutalist Toggle */}
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" defaultChecked />
                <div className="w-12 h-6 bg-background border-2 border-foreground peer-focus:outline-none peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[4px] after:left-[4px] after:bg-foreground after:border-2 after:border-foreground after:h-4 after:w-4 after:transition-all peer-checked:bg-accent/20 peer-checked:after:bg-accent peer-checked:border-accent"></div>
              </label>
            </div>

            <div className="h-0.5 bg-foreground w-full"></div>

            <div className="flex items-center justify-between px-6 py-5 hover:bg-neutral-900 transition-colors">
              <span className="text-foreground text-sm font-bold tracking-tight uppercase">Grade Updates</span>

              {/* Brutalist Toggle */}
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" />
                <div className="w-12 h-6 bg-background border-2 border-foreground peer-focus:outline-none peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[4px] after:left-[4px] after:bg-foreground after:border-2 after:border-foreground after:h-4 after:w-4 after:transition-all peer-checked:bg-accent/20 peer-checked:after:bg-accent peer-checked:border-accent"></div>
              </label>
            </div>
          </div>
        </div>

        {/* System Section */}
        <div className="mb-12">
          <h3 className="text-accent text-[10px] font-black leading-tight tracking-[0.3em] px-6 pb-3 pt-2 uppercase">System</h3>
          <div className="bg-glass brutalist-border border-x-0 flex flex-col">
            <div className="flex items-center justify-between px-6 py-5 hover:bg-neutral-900 transition-colors">
              <div className="flex items-center gap-4">
                <div className="flex items-center justify-center w-8 h-8 border-2 border-foreground bg-background text-foreground shadow-[2px_2px_0px_0px_rgba(250,250,250,1)]">
                  <Moon size={16} strokeWidth={2.5} />
                </div>
                <span className="text-foreground text-sm font-bold tracking-tight uppercase">Dark Mode</span>
              </div>

              {/* Brutalist Toggle */}
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" defaultChecked />
                <div className="w-12 h-6 bg-background border-2 border-foreground peer-focus:outline-none peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[4px] after:left-[4px] after:bg-foreground after:border-2 after:border-foreground after:h-4 after:w-4 after:transition-all peer-checked:bg-accent/20 peer-checked:after:bg-accent peer-checked:border-accent"></div>
              </label>
            </div>

            <div className="h-0.5 bg-foreground w-full"></div>

            <div className="flex items-center justify-between px-6 py-5 hover:bg-neutral-900 transition-colors">
              <div className="flex items-center gap-4">
                <div className="flex items-center justify-center w-8 h-8 border-2 border-foreground bg-background text-foreground shadow-[2px_2px_0px_0px_rgba(250,250,250,1)]">
                  <Contrast size={16} strokeWidth={2.5} />
                </div>
                <span className="text-foreground text-sm font-bold tracking-tight uppercase">High Contrast</span>
              </div>

              {/* Brutalist Toggle */}
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" />
                <div className="w-12 h-6 bg-background border-2 border-foreground peer-focus:outline-none peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[4px] after:left-[4px] after:bg-foreground after:border-2 after:border-foreground after:h-4 after:w-4 after:transition-all peer-checked:bg-accent/20 peer-checked:after:bg-accent peer-checked:border-accent"></div>
              </label>
            </div>

            <div className="h-0.5 bg-foreground w-full"></div>

            <div className="flex items-center justify-between px-6 py-5 cursor-pointer hover:bg-foreground hover:text-background transition-colors group">
              <div className="flex items-center gap-4">
                <div className="flex items-center justify-center w-8 h-8 border-2 border-current bg-background text-current shadow-[2px_2px_0px_0px_rgba(250,250,250,1)] group-hover:shadow-[2px_2px_0px_0px_rgba(5,5,5,1)] group-hover:bg-foreground transition-all">
                  <Globe size={16} strokeWidth={2.5} />
                </div>
                <span className="text-current text-sm font-bold tracking-tight uppercase">Language</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-neutral-500 text-xs font-black tracking-widest group-hover:text-background border-b-2 border-transparent group-hover:border-background">ENGLISH</span>
                <ChevronRight size={20} strokeWidth={3} className="text-neutral-500 group-hover:text-background" />
              </div>
            </div>
          </div>
        </div>

        {/* Actions Section */}
        <div className="px-6 space-y-6">
          <button className="w-full flex items-center justify-center h-14 brutalist-button bg-danger border-danger text-background hover:bg-background hover:text-danger shadow-[4px_4px_0px_0px_#FF3131]">
            <span className="font-black text-sm tracking-[0.2em] uppercase">Log Out</span>
          </button>

          <div className="flex flex-col items-center gap-2 pt-4">
            <p className="text-accent text-[10px] uppercase tracking-[0.3em] font-black border-b-2 border-accent pb-1">The Vault OS</p>
            <p className="text-neutral-600 text-[10px] font-bold tracking-widest">v0.1.0 • Build 491</p>
          </div>
        </div>
      </div>
    </div>
  );
}
