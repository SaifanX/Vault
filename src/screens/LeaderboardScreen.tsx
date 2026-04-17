import React from 'react';
import { Grid, User, Star } from 'lucide-react';

export function LeaderboardScreen() {
  return (
    <div className="bg-background text-foreground font-mono min-h-screen relative overflow-x-hidden flex flex-col">
      <div className="flex items-center bg-background/90 backdrop-blur-md p-6 justify-between sticky top-0 z-20 brutalist-border border-x-0 border-t-0 border-b-2">
        <div className="text-foreground flex size-10 shrink-0 items-center justify-center border-2 border-foreground hover:bg-foreground hover:text-background transition-colors cursor-pointer">
          <Grid size={20} strokeWidth={2.5} />
        </div>
        <h2 className="text-foreground text-[10px] font-black leading-tight flex-1 ml-4 uppercase tracking-[0.3em] opacity-60">The Vault OS</h2>
        <div className="flex items-center justify-end">
          <button className="flex cursor-pointer items-center justify-center size-10 border-2 border-foreground hover:bg-foreground hover:text-background transition-colors">
            <User size={20} strokeWidth={2.5} />
          </button>
        </div>
      </div>

      <div className="px-6 pt-10 pb-6">
        <h1 className="text-foreground text-5xl font-black leading-[0.9] tracking-tighter uppercase italic">
          Academic<br/>Leaderboard
        </h1>
      </div>

      <div className="px-6 py-2">
        <div className="flex h-12 items-center justify-center border-2 border-foreground p-1 bg-background">
          <label className="flex cursor-pointer h-full grow items-center justify-center overflow-hidden px-2 has-[:checked]:bg-foreground has-[:checked]:text-background text-neutral-500 text-xs font-black uppercase tracking-widest transition-all">
            <span className="truncate">Top Contributors</span>
            <input defaultChecked className="hidden" name="leaderboard-type" type="radio" value="Contributors"/>
          </label>
          <label className="flex cursor-pointer h-full grow items-center justify-center overflow-hidden px-2 has-[:checked]:bg-foreground has-[:checked]:text-background text-neutral-500 text-xs font-black uppercase tracking-widest transition-all">
            <span className="truncate">Top Scholars</span>
            <input className="hidden" name="leaderboard-type" type="radio" value="Scholars"/>
          </label>
        </div>
      </div>

      <div className="flex items-center px-6 py-4 border-b-2 border-foreground text-[10px] uppercase tracking-[0.2em] font-black text-neutral-500 mt-4">
        <div className="w-12">Rank</div>
        <div className="flex-1 ml-4">Student Name</div>
        <div className="w-12 text-center">Gr</div>
        <div className="w-24 text-right">Score</div>
      </div>

      <div className="flex flex-col mb-40">
        {/* Top Rank - Featured */}
        <div className="flex items-center px-6 py-5 border-b-2 border-foreground bg-accent/10 relative overflow-hidden">
          <div className="absolute left-0 top-0 bottom-0 w-1 bg-accent"></div>
          <div className="w-12 flex flex-col items-start">
            <Star className="text-accent mb-1 fill-accent" size={16} />
            <span className="font-mono text-lg font-black text-accent">01</span>
          </div>
          <div className="flex-1 ml-4 flex flex-col justify-center">
            <p className="text-foreground text-lg font-bold leading-none tracking-tight">Alex Schneider</p>
            <p className="text-accent text-[10px] font-black uppercase tracking-widest mt-1.5">Alpha Tier</p>
          </div>
          <div className="w-12 text-center font-mono text-sm text-neutral-400 font-bold">10</div>
          <div className="w-24 text-right font-mono font-black text-accent text-xl">4,950</div>
        </div>

        {/* Regular Ranks */}
        <div className="flex items-center px-6 py-5 border-b-2 border-foreground hover:bg-glass transition-colors">
          <div className="w-12 font-mono text-base font-bold text-neutral-500">02</div>
          <div className="flex-1 ml-4">
            <p className="text-foreground text-base font-bold tracking-tight">Beatrice Müller</p>
          </div>
          <div className="w-12 text-center font-mono text-xs text-neutral-500 font-bold">09</div>
          <div className="w-24 text-right font-mono font-black text-foreground text-lg">4,820</div>
        </div>

        <div className="flex items-center px-6 py-5 border-b-2 border-foreground hover:bg-glass transition-colors">
          <div className="w-12 font-mono text-base font-bold text-neutral-500">03</div>
          <div className="flex-1 ml-4">
            <p className="text-foreground text-base font-bold tracking-tight">Lukas Weber</p>
          </div>
          <div className="w-12 text-center font-mono text-xs text-neutral-500 font-bold">10</div>
          <div className="w-24 text-right font-mono font-black text-foreground text-lg">4,710</div>
        </div>

        <div className="flex items-center px-6 py-5 border-b-2 border-foreground hover:bg-glass transition-colors">
          <div className="w-12 font-mono text-base font-bold text-neutral-500">04</div>
          <div className="flex-1 ml-4">
            <p className="text-foreground text-base font-bold tracking-tight">Elena Fischer</p>
          </div>
          <div className="w-12 text-center font-mono text-xs text-neutral-500 font-bold">08</div>
          <div className="w-24 text-right font-mono font-black text-foreground text-lg">4,685</div>
        </div>

        <div className="flex items-center px-6 py-5 border-b-2 border-foreground hover:bg-glass transition-colors">
          <div className="w-12 font-mono text-base font-bold text-neutral-500">05</div>
          <div className="flex-1 ml-4">
            <p className="text-foreground text-base font-bold tracking-tight">Marc Baumann</p>
          </div>
          <div className="w-12 text-center font-mono text-xs text-neutral-500 font-bold">10</div>
          <div className="w-24 text-right font-mono font-black text-foreground text-lg">4,550</div>
        </div>

        <div className="flex items-center px-6 py-5 border-b-2 border-foreground hover:bg-glass transition-colors">
          <div className="w-12 font-mono text-base font-bold text-neutral-500">06</div>
          <div className="flex-1 ml-4">
            <p className="text-foreground text-base font-bold tracking-tight">Sophie Keller</p>
          </div>
          <div className="w-12 text-center font-mono text-xs text-neutral-500 font-bold">07</div>
          <div className="w-24 text-right font-mono font-black text-foreground text-lg">4,490</div>
        </div>

        <div className="flex items-center px-6 py-5 border-b-2 border-foreground hover:bg-glass transition-colors">
          <div className="w-12 font-mono text-base font-bold text-neutral-500">07</div>
          <div className="flex-1 ml-4">
            <p className="text-foreground text-base font-bold tracking-tight">Julian Steiner</p>
          </div>
          <div className="w-12 text-center font-mono text-xs text-neutral-500 font-bold">09</div>
          <div className="w-24 text-right font-mono font-black text-foreground text-lg">4,320</div>
        </div>

        <div className="flex items-center px-6 py-5 border-b-2 border-foreground hover:bg-glass transition-colors">
          <div className="w-12 font-mono text-base font-bold text-neutral-500">08</div>
          <div className="flex-1 ml-4">
            <p className="text-foreground text-base font-bold tracking-tight">Maria Vogt</p>
          </div>
          <div className="w-12 text-center font-mono text-xs text-neutral-500 font-bold">10</div>
          <div className="w-24 text-right font-mono font-black text-foreground text-lg">4,280</div>
        </div>
      </div>

      {/* Sticky User Status */}
      <div className="fixed bottom-24 left-1/2 -translate-x-1/2 w-[calc(100%-3rem)] max-w-xl z-30">
        <div className="bg-background text-foreground p-4 brutalist-border shadow-[8px_8px_0px_0px_rgba(250,250,250,1)] flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="bg-foreground w-12 h-12 flex items-center justify-center text-background">
              <span className="font-mono font-black text-xl">12</span>
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-widest text-neutral-500 font-black mb-1">Your Status</p>
              <p className="font-bold text-base tracking-tight">Stefan Frei</p>
            </div>
          </div>
          <div className="flex flex-col items-end">
            <p className="text-accent font-black font-mono text-lg mb-1">3,840 pts</p>
            <div className="flex items-center gap-2">
              <div className="w-16 h-2 bg-neutral-800 border border-foreground/30 overflow-hidden">
                <div className="bg-accent h-full w-3/4"></div>
              </div>
              <p className="text-[10px] text-neutral-500 font-mono font-bold tracking-tight">NEXT: 110</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
