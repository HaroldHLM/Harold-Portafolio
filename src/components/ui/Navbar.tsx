"use client";

import Link from "next/link";

export function Navbar() {
  return (
    <header className="border-b border-neutral-200 dark:border-neutral-800 backdrop-blur-md bg-white/70 dark:bg-[#0a1428]/70">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="font-semibold text-black dark:text-white">
          Harold.dev
        </Link>

        <nav className="flex gap-6 text-sm text-neutral-600 dark:text-neutral-400">
          <Link
            href="/projects"
            className="hover:text-black dark:hover:text-white transition-colors"
          >
            Projects
          </Link>

          <Link
            href="/about"
            className="hover:text-black dark:hover:text-white transition-colors"
          >
            About
          </Link>
        </nav>
      </div>
    </header>
  );
}
