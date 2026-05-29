"use client";

import Image from "next/image";
import Link from "next/link";
import { useTranslations, useMessages } from "next-intl";
import { SiGithub } from "react-icons/si";
import { useState, useCallback } from "react";
import { Project } from "./types";

type ProcessStep = {
  image: string;
  caption: string;
};

type Props = {
  project: Project;
  onClose: () => void;
};

export default function ProjectModal({ project, onClose }: Props) {
  const t = useTranslations("Projects");
  const messages = useMessages();
  const [current, setCurrent] = useState(0);

  // Extraemos los pasos del proceso desde messages raw
  const processSteps: ProcessStep[] =
    (messages as any)?.Projects?.items?.[project.id]?.process ?? [];

  const hasProcess = processSteps.length > 0;

  const prev = useCallback(() => {
    setCurrent((c) => (c - 1 + processSteps.length) % processSteps.length);
  }, [processSteps.length]);

  const next = useCallback(() => {
    setCurrent((c) => (c + 1) % processSteps.length);
  }, [processSteps.length]);

  // Cerrar con Escape
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") onClose();
    if (e.key === "ArrowLeft") prev();
    if (e.key === "ArrowRight") next();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onKeyDown={handleKeyDown}
      tabIndex={-1}
    >
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div
        className="
          relative z-10
          w-full max-w-4xl
          max-h-[90vh]
          overflow-y-auto
          border border-(--text)/20
          bg-(--bg)
          rounded-2xl
          overflow-hidden
        "
      >
        {/* Imagen principal del proyecto */}
        <div className="relative w-full h-64 lg:h-80">
          <Image
            src={project.image}
            alt={project.id}
            fill
            className="object-cover object-top"
          />
          <button
            onClick={onClose}
            className="
              absolute top-4 right-4
              w-9 h-9
              flex items-center justify-center
              border border-white/20
              bg-black/40
              text-white
              rounded-lg
              cursor-pointer
              hover:bg-black/60
              transition-colors
            "
          >
            ✕
          </button>
        </div>

        {/* Contenido */}
        <div className="p-7 flex flex-col gap-6">
          {/* Título y descripción */}
          <div>
            <h3
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
              className="text-4xl text-(--text)"
            >
              {t(`items.${project.id}.title`)}
            </h3>
            <p className="mt-3 font-mono text-[11px] leading-7 text-(--muted)">
              {t(`items.${project.id}.description`)}
            </p>
          </div>

          {/* Stack */}
          <div className="flex flex-wrap gap-2">
            {project.stack.map((tech) => (
              <span
                key={tech}
                className="
                  font-mono text-[10px]
                  px-3 py-1.5
                  border border-(--text)/20
                  text-(--muted)
                "
              >
                {tech}
              </span>
            ))}
          </div>

          {/* ── Carrusel del proceso ── */}
          {hasProcess && (
            <div className="flex flex-col gap-3">
              <h4 className="font-mono text-[10px] uppercase tracking-widest text-(--muted)">
                {t("process_title")} {/* ej: "Development Process" */}
              </h4>

              <div className="relative w-full">
                {/* Imagen del paso */}
                <div className="relative w-full h-56 lg:h-72 rounded-xl overflow-hidden border border-(--text)/10">
                  <Image
                    key={current}
                    src={processSteps[current].image}
                    alt={processSteps[current].caption}
                    fill
                    className="object-cover object-top transition-opacity duration-300"
                  />

                  {/* Flecha izquierda */}
                  <button
                    onClick={prev}
                    className="
                      absolute left-3 top-1/2 -translate-y-1/2
                      w-9 h-9
                      flex items-center justify-center
                      bg-black/50 hover:bg-black/70
                      border border-white/10
                      text-white rounded-lg
                      transition-colors cursor-pointer
                    "
                    aria-label="Anterior"
                  >
                    ‹
                  </button>

                  {/* Flecha derecha */}
                  <button
                    onClick={next}
                    className="
                      absolute right-3 top-1/2 -translate-y-1/2
                      w-9 h-9
                      flex items-center justify-center
                      bg-black/50 hover:bg-black/70
                      border border-white/10
                      text-white rounded-lg
                      transition-colors cursor-pointer
                    "
                    aria-label="Siguiente"
                  >
                    ›
                  </button>

                  {/* Contador */}
                  <span
                    className="
                    absolute bottom-3 right-3
                    font-mono text-[10px]
                    bg-black/50 text-white
                    px-2 py-1 rounded
                  "
                  >
                    {current + 1} / {processSteps.length}
                  </span>
                </div>

                {/* Caption */}
                <p className="mt-3 font-mono text-[11px] leading-6 text-(--muted) text-center">
                  {processSteps[current].caption}
                </p>

                {/* Dots */}
                <div className="flex justify-center gap-1.5 mt-3">
                  {processSteps.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setCurrent(i)}
                      className={`
                        w-1.5 h-1.5 rounded-full transition-all cursor-pointer
                        ${
                          i === current
                            ? "bg-(--text) scale-125"
                            : "bg-(--text)/20 hover:bg-(--text)/40"
                        }
                      `}
                      aria-label={`Ir al paso ${i + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* GitHub */}
          <Link
            href={project.github}
            target="_blank"
            className="
              font-mono text-[10px]
              uppercase tracking-widest
              text-(--text)
              hover:text-(--dorado)
              transition-colors
              flex items-center gap-2
            "
          >
            <SiGithub size={14} />
            GitHub
          </Link>
        </div>
      </div>
    </div>
  );
}
