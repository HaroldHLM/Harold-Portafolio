"use client";

import Image from "next/image";
import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
import { SiGithub } from "react-icons/si";
import { useCallback, useEffect, useState } from "react";
import { Project } from "./types";

type Props = {
  project: Project;
  onClose: () => void;
};

export default function ProjectModal({ project, onClose }: Props) {
  const t = useTranslations("Projects");
  const locale = useLocale();
  const [current, setCurrent] = useState(0);
  const isSpanish = locale.startsWith("es");

  type Slide = { image: string; caption: string };
  const processSlides = t.raw(`items.${project.id}.process`);

  const fallbackSlides: Slide[] = [{ image: "/", caption: "" }];
  const slides: Slide[] = processSlides?.length ? processSlides : fallbackSlides;

  const hasMultipleSlides = slides.length > 1;

  const prev = useCallback(() => {
    setCurrent((value) => (value - 1 + slides.length) % slides.length);
  }, [slides.length]);

  const next = useCallback(() => {
    setCurrent((value) => (value + 1) % slides.length);
  }, [slides.length]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
      if (event.key === "ArrowLeft") prev();
      if (event.key === "ArrowRight") next();
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose, prev, next]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4">
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div
        className="
          relative z-10
          w-full max-w-5xl
          max-h-[90vh]
          border border-(--text)/20
          bg-(--bg)
          rounded-2xl
          overflow-hidden
        "
        role="dialog"
        aria-modal="true"
        aria-label={t(`items.${project.id}.title`)}
      >
        <button
          onClick={onClose}
          className="
            absolute top-3 right-3 z-20
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
          aria-label={isSpanish ? "Cerrar modal" : "Close modal"}
        >
          ✕
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="relative border-b lg:border-b-0 lg:border-r border-(--text)/20">
            <div className="relative w-full h-56 sm:h-72 lg:h-full lg:min-h-130">
              <Image
                key={`${project.id}-${current}`}
                src={slides[current].image}
                alt={slides[current].caption}
                fill
                className="object-contain object-center"
              />
            </div>

            {hasMultipleSlides && (
              <>
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
                  aria-label={isSpanish ? "Anterior" : "Previous"}
                >
                  ‹
                </button>
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
                  aria-label={isSpanish ? "Siguiente" : "Next"}
                >
                  ›
                </button>
              </>
            )}
          </div>

          <div className="max-h-[90vh] overflow-y-auto p-5 sm:p-7 lg:p-8 flex flex-col gap-6">
            <div>
              <h3
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
                className="text-3xl sm:text-4xl text-(--text)"
              >
                {t(`items.${project.id}.title`)}
              </h3>
              <p className="mt-3 font-mono text-[11px] leading-7 text-(--muted)">
                {t(`items.${project.id}.descriptionModal`)}
              </p>
            </div>

            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.15em] text-(--text)/70 mb-3">
                {isSpanish ? "Recorrido visual" : "Visual walkthrough"}
              </p>
              <p className="font-mono text-[11px] leading-6 text-(--muted)">
                {slides[current].caption}
              </p>
              {hasMultipleSlides && (
                <div className="flex items-center gap-2 mt-3">
                  <span className="font-mono text-[10px] text-(--text)/60">
                    {current + 1} / {slides.length}
                  </span>
                  <div className="flex items-center gap-1.5">
                    {slides.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrent(index)}
                        className={`
                          w-2 h-2 rounded-full transition-all cursor-pointer
                          ${
                            index === current
                              ? "bg-(--dorado) scale-110"
                              : "bg-(--text)/20 hover:bg-(--text)/40"
                          }
                        `}
                        aria-label={
                          isSpanish
                            ? `Ir a diapositiva ${index + 1}`
                            : `Go to slide ${index + 1}`
                        }
                      />
                    ))}
                  </div>
                </div>
              )}
            </div>

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

            <Link
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="
                mt-auto
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
    </div>
  );
}
