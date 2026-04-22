import Link from "next/link";

export function Navbar() {
  return (
    <header className="border-b border-neutral-800">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between">
        <Link href="/" className="font-semibold">
          Harold.dev
        </Link>

        <nav className="flex gap-6 text-sm text-neutral-400">
          <Link href="/projects" className="hover:text-white transition">
            Projects
          </Link>
          <Link href="/about" className="hover:text-white transition-colors">
            About
          </Link>
        </nav>
      </div>
    </header>
  );
}
