"use client";

import { Sun, Moon } from "lucide-react";

type ThemeToggleProps = {
  dark: boolean;
  toggleTheme: () => void;
};

export default function ThemeToggle({ dark, toggleTheme }: ThemeToggleProps) {
  return (
    <button
      onClick={toggleTheme}
      className={`
        relative flex items-center
        w-17 h-9
        px-1
        rounded-full
        border border-(--border)
        bg-(--bg)/70
        backdrop-blur-md
        transition-all duration-300
      `}
    >
      {/* Iconos */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-between px-3">
        <Sun
          size={14}
          className={`
            transition-colors duration-300
            ${dark ? "text-(--muted)" : "text-yellow-400"}
          `}
        />

        <Moon
          size={14}
          className={`
            transition-colors duration-300
            ${dark ? "text-blue-400" : "text-(--muted)"}
          `}
        />
      </div>

      {/* Thumb */}
      <div
        className={`
          relative z-10
          flex size-7 items-center justify-center
          rounded-full
          bg-(--text)
          shadow-md
          transition-transform duration-300 ease-out
          ${dark ? "translate-x-8" : "translate-x-0"}
        `}
      >
        {dark ? (
          <Moon size={14} className="text-(--bg)" />
        ) : (
          <Sun size={14} className="text-(--bg)" />
        )}
      </div>
    </button>
  );
}
