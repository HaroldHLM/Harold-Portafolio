import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import { useTranslations } from "next-intl";
import { SiGithub } from "react-icons/si";
import { Project } from "./types";

type Props = {
  project: Project;
  onOpen: (project: Project) => void;
};

export function ProjectCard({ project, onOpen }: Props) {
  const t = useTranslations("Projects.items");

  return (
    <div
      onClick={() => onOpen(project)}
      className={`
        border border-(--text)/30 rounded-xl overflow-hidden
        hover:border-(--dorado)/70 transition-all duration-300 cursor-pointer
        ${project.featured ? "lg:col-span-2" : ""}
      `}
    >
      {/* Imagen */}
      <div
        className={`
          relative w-full bg-(--dorado)/10
          ${project.featured ? "h-56" : "h-40"}
        `}
      >
        <Image
          src={project.image}
          alt={t(`${project.id}.title`)}
          fill
          className="object-cover object-top"
        />
        {project.featured && (
          <span className="absolute top-3 left-3 font-mono text-[9px] tracking-widest uppercase px-2.5 py-1 border border-(--dorado) text-(--dorado)">
            destacado
          </span>
        )}
      </div>

      {/* Contenido */}
      <div className="p-5">
        <h3
          style={{ fontFamily: "'Cormorant Garamond', serif" }}
          className="text-[22px] font-light text-(--text) mb-1.5"
        >
          {t(`${project.id}.title`)}
        </h3>
        <p className="font-mono text-[10px] text-(--text)/70 leading-[1.8] mb-4">
          {t(`${project.id}.description`)}
        </p>

        {/* Stack */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="font-mono text-[9px] tracking-[0.06em] px-2.5 py-1 border border-(--text)/30 text-(--text)/60"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex items-center gap-3 pt-4 border-t border-(--text)/30">
          <Link
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(event) => event.stopPropagation()}
            className="
              font-mono text-[9px] tracking-widest uppercase
              text-(--text) hover:text-(--dorado)
              transition-colors duration-200
              flex items-center gap-1.5 no-underline
            "
          >
            <SiGithub size={13} />
            GitHub
          </Link>
          {/* <span className="text-(--text)/70 text-xs">·</span>
          <Link
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="
              font-mono text-[9px] tracking-widest uppercase
              text-(--text) hover:text-(--dorado)
              transition-colors duration-200
              flex items-center gap-1.5 no-underline
            "
          >
            <ExternalLink size={13} />
            Demo
          </Link> */}
        </div>
      </div>
    </div>
  );
}
