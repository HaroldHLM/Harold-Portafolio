"use client";

import { useTranslations } from "next-intl";

export default function Hero() {
  const t = useTranslations("Hero");

  return (
    <section className="relative z-10 max-w-4xl animate-fadeIn h-screen flex items-center justify-center text-center px-6">
      {/* Contenido */}
      <div className="relative z-10 max-w-4xl">
        {/* Badge */}
        <div className="mb-6 inline-block px-4 py-1 text-sm rounded-full border border-(--border) bg-(--bg)/60 backdrop-blur">
          <span className="text-(--muted)">{t("badge")}</span>
        </div>

        {/* Título */}
        <h1 className="text-5xl md:text-7xl font-semibold tracking-tight text-[(--text) leading-tight">
          {t("titleTop")}
          <br />
          <span className="bg-linear-to-r from-blue-500 to-indigo-500 bg-clip-text text-transparent">
            {t("titleHighlight")}
          </span>
        </h1>

        {/* Descripción */}
        <p className="mt-6 text-lg md:text-xl text-(--muted) max-w-2xl mx-auto">
          {t("description")}
        </p>

        {/* Botones */}
        <div className="mt-10 flex gap-4 justify-center">
          <button className="px-6 py-3 rounded-lg bg-(--text) text-(--bg) hover:opacity-90 transition">
            {t("primaryAction")}
          </button>

          <button className="px-6 py-3 rounded-lg border border-(--border) text-(--text) hover:bg-(--bg)/50 transition">
            {t("secondaryAction")}
          </button>
        </div>
      </div>

      {/* Glow sutil (PRO) */}
      <div className="absolute inset-0 -z-10 flex items-center justify-center">
        <div className="w-125 h-125 bg-blue-500/10 blur-3xl rounded-full" />
      </div>
    </section>
  );
}
