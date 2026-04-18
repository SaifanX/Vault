import React from 'react'
import ReactDOM from 'react-dom/client'
import { ConvexAuthProvider } from "@convex-dev/auth/react";
import { ConvexReactClient } from "convex/react";
import { TimerProvider } from './context/TimerContext'
import App from './App'
import './index.css'

import { ThemeProvider } from './context/ThemeContext'
import { AuthProvider } from './context/AuthContext'

const convexUrl = import.meta.env.VITE_CONVEX_URL;

function SafeApp() {
  if (!convexUrl) {
    return (
      <div className="min-h-screen bg-[#050505] text-white flex flex-col items-center justify-center p-8 font-mono">
        <div className="border-3 border-danger p-6 shadow-[4px_4px_0px_0px_rgba(255,49,49,1)] max-w-lg">
          <h1 className="text-3xl font-black italic mb-4">BACKEND MISCONFIGURED</h1>
          <p className="opacity-60 text-xs uppercase tracking-[0.2em] mb-6">Error Code: NULL_CONVEX_URL</p>
          <div className="space-y-4 text-sm">
            <p>The Hub cannot load your study data. Please check your system configuration.</p>
            <div className="bg-glass p-4 border border-foreground/20">
              <p className="text-accent font-bold mb-2">REQUIRED ACTION:</p>
              <ol className="list-decimal list-inside space-y-2 opacity-80">
                <li>Run <code className="bg-foreground text-background px-1">npx convex dev</code></li>
                <li>Copy the generated URL from your dashboard.</li>
                <li>Create an <code className="bg-foreground text-background px-1">.env.local</code> file and add:</li>
              </ol>
              <pre className="mt-4 text-[10px] bg-black p-2 border border-foreground/10">VITE_CONVEX_URL=your_url_here</pre>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const convex = new ConvexReactClient(convexUrl);
  return (
    <ConvexAuthProvider client={convex}>
      <AuthProvider>
        <TimerProvider>
          <App />
        </TimerProvider>
      </AuthProvider>
    </ConvexAuthProvider>
  );
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider>
      <SafeApp />
    </ThemeProvider>
  </React.StrictMode>,
)
