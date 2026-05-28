"use client";

import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { SiGithub } from "react-icons/si";
import { Project } from "./types";

type Props = {
  project: Project;
  onClose: () => void;
};

export default function ProjectModal({ project, onClose }: Props) {
  const t = useTranslations("Projects");

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
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
          border border-(--text)/20
          bg-(--bg)
          rounded-2xl
          overflow-hidden
        "
      >
        {/* Imagen */}
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
            "
          >
            ✕
          </button>
        </div>

        {/* Contenido */}
        <div className="p-7 flex flex-col gap-6">
          <div>
            <h3
              style={{
                fontFamily: "'Cormorant Garamond', serif",
              }}
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
