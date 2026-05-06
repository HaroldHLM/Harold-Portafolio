/* eslint-disable react-hooks/set-state-in-effect */
"use client";

import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [dark, setDark] = useState<boolean | null>(null);

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    const isDark = saved ? saved === "dark" : true;

    setDark(isDark);
    document.documentElement.classList.toggle("dark", isDark);
  }, []);

  useEffect(() => {
    if (dark === null) return;

    document.documentElement.classList.toggle("dark", dark);
    localStorage.setItem("theme", dark ? "dark" : "light");
  }, [dark]);

  if (dark === null) return null;

  return (
    <button
      onClick={() => setDark(!dark)}
      className="fixed top-5 right-5 z-50 px-4 py-2 border border-border bg-[var(--bg)] text-[var(--text)] rounded-lg"
    >
      {dark ? "Light" : "Dark"}
    </button>
  );
}
