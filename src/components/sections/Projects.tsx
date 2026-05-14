"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Reveal from "../animations/Reveal";
import { useTranslations } from "next-intl";
import { SiGithub } from "react-icons/si";
import { ExternalLink } from "lucide-react";

type Project = {
  id: string;
  stack: string[];
  github: string;
  demo: string;
  image: string;
  featured?: boolean;
};

const projects: Project[] = [
  {
    id: "ecommerce",
    stack: ["Next.js", "TypeScript", "PostgreSQL", "Stripe", "Prisma"],
    github: "https://github.com/tuusuario/ecommerce",
    demo: "https://ecommerce-demo.vercel.app",
    image: "/image/projects/image1.png",
    featured: true,
  },
  {
    id: "task-manager",
    stack: ["React", "Node.js", "Socket.io"],
    github: "https://github.com/tuusuario/taskmanager",
    demo: "https://tasks-demo.vercel.app",
    image: "/image/projects/image2.png",
  },
  {
    id: "blog-cms",
    stack: ["Next.js", "PostgreSQL", "MDX"],
    github: "https://github.com/tuusuario/blog-cms",
    demo: "https://blog-demo.vercel.app",
    image: "/image/projects/image3.png",
  },
  {
    id: "finance-dashboard",
    stack: ["React", "Node.js", "PostgreSQL", "Recharts"],
    github: "https://github.com/tuusuario/finance",
    demo: "https://finance-demo.vercel.app",
    image: "/image/projects/image4.png",
  },
];

// Genera los filtros dinámicamente de stacks
const allTags = [
  { label: "filters.all", value: "all" },
  ...Array.from(new Set(projects.flatMap((p) => p.stack))).map((tag) => ({
    label: tag,
    value: tag,
  })),
];

function ProjectCard({ project }: { project: Project }) {
  const t = useTranslations("Projects.items");
  return (
    <div
      className={`
        border border-(--text)/30 rounded-xl overflow-hidden
        hover:border-(--dorado)/70 transition-all duration-300
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
          <span className="text-(--text)/70 text-xs">·</span>
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
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const t = useTranslations("Projects");
  const [active, setActive] = useState("all");

  const visible = projects.filter(
    (p) => active === "all" || p.stack.includes(active),
  );

  return (
    <section
      id="work"
      className="relative min-h-screen overflow-hidden pt-36 pb-24 lg:pt-28"
    >
      {/* Label */}
      <Reveal>
        <div className="flex items-center gap-3 mb-14 z-10">
          <span className="block w-8 h-px bg-(--dorado)" />
          <span className="font-mono text-[11px] tracking-[0.2em] uppercase text-(--text)">
            <span className="text-(--dorado)">04.</span> {t("badge")}
          </span>
        </div>
      </Reveal>
      {/* Encabezado */}
      <Reveal>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12 items-start">
          <h2
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
            className="text-5xl font-light leading-[1.05] text-(--text)"
          >
            {t("titleLine1")}{" "}
            <em className="text-(--dorado) italic">{t("titleAccent")}</em>
            <br />
            {t("titleLine3")}
          </h2>
          <p
            className="
                mt-2
                max-w-2xl
                font-dm-mono
                text-[12px]
              leading-8
              tracking-[0.15em]
              text-(--muted)
            "
          >
            {t("description")}
          </p>
        </div>
      </Reveal>
      {/* Filtros */}
      <Reveal>
        <div className="flex flex-wrap gap-2 mb-4">
          {allTags.map(({ label, value }) => (
            <button
              key={value}
              onClick={() => setActive(value)}
              className={`
              font-mono text-[10px] tracking-widest uppercase px-4 py-1.5
              border transition-all duration-200
              ${
                active === value
                  ? "border-(--dorado) text-(--dorado)"
                  : "border-(--text)/30 text-(--text)/60 hover:border-(--dorado)/70 hover:text-(--dorado)"
              }
            `}
            >
              {label === "filters.all" ? t(label) : label}
            </button>
          ))}
        </div>
      </Reveal>

      {/* Contador */}
      <Reveal>
        <p className="font-mono text-[10px] text-(--text)/70 mb-8">
          Mostrando <span className="text-(--dorado)">{visible.length}</span>{" "}
          proyectos
        </p>
      </Reveal>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        {visible.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}
