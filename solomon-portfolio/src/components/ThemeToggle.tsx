"use client";

import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";

export const ThemeToggle = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="w-9 h-9 rounded-xl border border-slate-700/50 bg-dark-850/60 flex items-center justify-center opacity-50" />
    );
  }

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="relative p-2 rounded-xl transition-all duration-300 border border-slate-200 dark:border-white/10 bg-white/70 dark:bg-dark-850/70 hover:border-emerald-500/50 hover:shadow-neon-green text-slate-700 dark:text-slate-300 hover:text-emerald-500 dark:hover:text-emerald-400 focus:outline-none"
      aria-label="Toggle theme"
      title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
    >
      {theme === "dark" ? (
        <Sun className="w-5 h-5 transition-transform duration-300 hover:rotate-45 text-emerald-400" />
      ) : (
        <Moon className="w-5 h-5 transition-transform duration-300 hover:-rotate-12 text-slate-700" />
      )}
    </button>
  );
};
