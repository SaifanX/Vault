import React from "react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "../lib/utils";
import { LayoutDashboard, Library, Calendar, Settings, Plus, LogOut, Moon, Sun } from "lucide-react";
import { useAuth } from "../context/AuthContext";
import { useTheme } from "../context/ThemeContext";

const navItems = [
  { icon: LayoutDashboard, label: "Dash", path: "/" },
  { icon: Library, label: "Library", path: "/library" },
  { icon: Calendar, label: "Plan", path: "/plan" },
  { icon: Settings, label: "Settings", path: "/settings" },
];

export const BottomNav: React.FC = () => {
  const location = useLocation();

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-background border-t border-foreground/10 px-6 py-3 flex items-center justify-between md:hidden z-50">
      {navItems.map((item) => {
        const isActive = location.pathname === item.path;
        return (
          <Link
            key={item.path}
            to={item.path}
            className={cn(
              "flex flex-col items-center gap-1 transition-colors",
              isActive ? "text-foreground" : "text-foreground/40"
            )}
          >
            <item.icon size={20} />
            <span className="text-[10px] font-bold uppercase tracking-widest">{item.label}</span>
          </Link>
        );
      })}
      
      {/* Central Plus Button Shortcut */}
      <button className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 bg-foreground text-background rounded-full flex items-center justify-center shadow-lg active:scale-95 transition-transform">
        <Plus size={24} />
      </button>
    </div>
  );
};

export const SideDrawer: React.FC = () => {
  const location = useLocation();
  const { logout, user } = useAuth();
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="hidden md:flex flex-col w-64 h-screen bg-background border-r border-foreground/10 p-6 sticky top-0">
      <div className="flex items-center gap-3 mb-10">
        <div className="w-8 h-8 bg-foreground text-background flex items-center justify-center font-black">V</div>
        <span className="font-black text-xl tracking-tighter">The Vault</span>
      </div>

      <nav className="flex-1 space-y-2">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <Link
              key={item.path}
              to={item.path}
              className={cn(
                "flex items-center gap-4 px-4 py-3 rounded-lg transition-all font-bold text-sm uppercase tracking-widest",
                isActive 
                  ? "bg-foreground text-background shadow-md" 
                  : "text-foreground/60 hover:bg-foreground/5 hover:text-foreground"
              )}
            >
              <item.icon size={18} />
              {item.label}
            </Link>
          );
        })}
      </nav>

      <div className="mt-auto space-y-4 pt-6 border-t border-foreground/10">
        <button 
          onClick={toggleTheme}
          className="flex items-center gap-4 px-4 py-3 w-full text-foreground/60 hover:bg-foreground/5 hover:text-foreground transition-all font-bold text-sm uppercase tracking-widest"
        >
          {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          Theme: {theme}
        </button>

        <div className="flex items-center gap-3 px-4 py-2 bg-foreground/5 rounded-lg">
          <div className="w-8 h-8 rounded-full bg-foreground/20 flex items-center justify-center text-xs font-bold">
            {user?.name?.[0]}
          </div>
          <div className="flex-1 overflow-hidden">
            <p className="text-xs font-black truncate">{user?.name}</p>
            <p className="text-[10px] uppercase opacity-40 font-bold">{user?.role}</p>
          </div>
        </div>

        <button 
          onClick={logout}
          className="flex items-center gap-4 px-4 py-3 w-full text-red-500/60 hover:bg-red-500/5 hover:text-red-500 transition-all font-bold text-sm uppercase tracking-widest"
        >
          <LogOut size={18} />
          Sign Out
        </button>
      </div>
    </div>
  );
};
