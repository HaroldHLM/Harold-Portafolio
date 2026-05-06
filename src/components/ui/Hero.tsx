"use client";

export default function Hero() {
  return (
    <section className="relative z-10 max-w-4xl animate-fadeIn h-screen flex items-center justify-center text-center px-6">
      {/* Contenido */}
      <div className="relative z-10 max-w-4xl">
        {/* Badge */}
        <div className="mb-6 inline-block px-4 py-1 text-sm rounded-full border border-[var(--border)] bg-[var(--bg)]/60 backdrop-blur">
          <span className="text-[var(--muted)]">
            Software Engineer · Web Developer
          </span>
        </div>

        {/* Título */}
        <h1 className="text-5xl md:text-7xl font-semibold tracking-tight text-[var(--text)] leading-tight">
          Building modern
          <br />
          <span className="bg-gradient-to-r from-blue-500 to-indigo-500 bg-clip-text text-transparent">
            web experiences
          </span>
        </h1>

        {/* Descripción */}
        <p className="mt-6 text-lg md:text-xl text-[var(--muted)] max-w-2xl mx-auto">
          I design and build scalable, high-performance web applications with
          clean architecture and modern technologies.
        </p>

        {/* Botones */}
        <div className="mt-10 flex gap-4 justify-center">
          <button className="px-6 py-3 rounded-lg bg-[var(--text)] text-[var(--bg)] hover:opacity-90 transition">
            View Projects
          </button>

          <button className="px-6 py-3 rounded-lg border border-[var(--border)] text-[var(--text)] hover:bg-[var(--bg)]/50 transition">
            Contact Me
          </button>
        </div>
      </div>

      {/* Glow sutil (PRO) */}
      <div className="absolute inset-0 -z-10 flex items-center justify-center">
        <div className="w-[500px] h-[500px] bg-blue-500/10 blur-3xl rounded-full" />
      </div>
    </section>
  );
}
