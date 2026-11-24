"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

export function ThemeToggle() {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    const stored = localStorage.getItem("carehub-theme");
    const initial = stored === "dark" ? "dark" : "light";
    document.documentElement.classList.toggle("dark", initial === "dark");
    const id = requestAnimationFrame(() => setTheme(initial));
    return () => cancelAnimationFrame(id);
  }, []);

  function toggle() {
    const next: "light" | "dark" = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.classList.toggle("dark", next === "dark");
    localStorage.setItem("carehub-theme", next);
  }

  return (
    <button
      onClick={toggle}
      aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
      className="inline-flex h-11 w-11 items-center justify-center rounded-[var(--r-btn)] border border-line text-muted transition-colors hover:bg-accent-soft hover:text-accent-strong"
    >
      {theme === "dark" ? (
        <Sun className="h-4.5 w-4.5" aria-hidden="true" />
      ) : (
        <Moon className="h-4.5 w-4.5" aria-hidden="true" />
      )}
    </button>
  );
}