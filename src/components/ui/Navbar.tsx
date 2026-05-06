"use client";

export function Navbar() {
  return (
    <header className="border-b border-[var(--border)] bg-[var(--bg)]/70 backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between">
        <span className="font-semibold text-[var(--text)]">Harold.dev</span>

        <nav className="flex gap-6 text-sm text-[var(--muted)]">
          <a className="hover:text-[var(--text)] transition">Projects</a>
          <a className="hover:text-[var(--text)] transition">About</a>
        </nav>
      </div>
    </header>
  );
}
