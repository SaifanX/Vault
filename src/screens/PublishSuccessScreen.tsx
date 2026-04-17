import React from 'react';
import { X, Check } from 'lucide-react';

export function PublishSuccessScreen() {
  return (
    <div className="bg-background text-foreground font-mono min-h-screen flex flex-col">
      {/* Top Navigation Bar */}
      <div className="flex items-center bg-background p-6 justify-between brutalist-border border-x-0 border-t-0">
        <button className="text-foreground flex size-12 shrink-0 items-center justify-start hover:text-accent transition-colors">
          <X size={32} strokeWidth={2.5} />
        </button>
        <h2 className="text-foreground text-sm font-bold leading-tight tracking-[0.2em] uppercase flex-1 text-center pr-12">Status</h2>
      </div>

      {/* Main Content Container */}
      <div className="flex-1 flex flex-col items-center justify-center px-6 pt-10 pb-20 relative">
        {/* Background Graphic Element */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 border-4 border-foreground/10 rounded-full -z-10"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 border-2 border-foreground/5 rounded-full -z-10"></div>

        {/* Large Success Icon */}
        <div className="mb-12 relative">
          <div className="size-32 rounded-full border-4 border-accent flex items-center justify-center bg-background shadow-[8px_8px_0px_0px_#00FF41]">
            <Check size={64} className="text-accent" strokeWidth={3} />
          </div>
          {/* Subtle primary glow behind the checkmark */}
          <div className="absolute inset-0 bg-accent/20 blur-2xl rounded-full -z-10 animate-pulse"></div>
        </div>

        {/* Headline */}
        <h1 className="text-foreground tracking-tighter text-5xl font-black leading-tight px-4 text-center pb-4 italic uppercase">
          Deck Published
        </h1>

        {/* Body Text */}
        <p className="text-neutral-400 text-sm font-medium leading-relaxed pb-12 pt-1 px-8 text-center max-w-sm tracking-wide">
          You will receive <span className="text-accent font-bold">50%</span> of all credits from future downloads on the marketplace.
        </p>

        {/* Earnings Calculation Box (Brutalist style) */}
        <div className="w-full max-w-sm bg-background border-4 border-foreground p-6 mb-12 shadow-[8px_8px_0px_0px_rgba(250,250,250,1)] relative">
          <div className="absolute -top-3 left-4 bg-background px-2 text-accent text-[10px] font-black tracking-[0.2em] uppercase">
            Expected Earnings
          </div>

          <div className="space-y-4 font-mono text-sm mt-2">
            <div className="flex justify-between text-neutral-400">
              <span className="font-bold tracking-wider">PRICE / UNIT</span>
              <span className="text-foreground font-black">100 CR</span>
            </div>
            <div className="flex justify-between text-neutral-400 border-b-2 border-foreground/30 pb-4">
              <span className="font-bold tracking-wider">CREATOR SHARE</span>
              <span className="text-foreground font-black">50%</span>
            </div>
            <div className="flex justify-between font-black pt-2 text-lg">
              <span className="text-foreground">NET / SALE</span>
              <span className="text-accent">+50 CR</span>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="w-full max-w-sm space-y-4">
          <button className="brutalist-button w-full py-4 text-sm tracking-[0.2em] uppercase">
            View Listing
          </button>
          <button className="w-full bg-background text-foreground border-4 border-foreground font-bold py-4 text-sm tracking-[0.2em] uppercase hover:bg-foreground hover:text-background transition-colors active:translate-x-[2px] active:translate-y-[2px]">
            Back to Decks
          </button>
        </div>
      </div>
    </div>
  );
}
