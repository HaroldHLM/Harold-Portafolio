"use client";

import { useState } from "react";
import Reveal from "../../animations/Reveal";
import { projects } from "./projects.data";
import { Project } from "./types";
import { ProjectCard } from "./ProjectCard";
import ProjectModal from "./ProjectModal";
import { useTranslations } from "next-intl";

// Genera los filtros dinámicamente de stacks
const allTags = [
  { label: "filters.all", value: "all" },
  ...Array.from(new Set(projects.flatMap((p) => p.stack))).map((tag) => ({
    label: tag,
    value: tag,
  })),
];

export default function Projects() {
  const t = useTranslations("Projects");
  const [active, setActive] = useState("all");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

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
          {t("Showing")}{" "}
          <span className="text-(--dorado)">{visible.length}</span>
          {t("Pro")}
        </p>
      </Reveal>
      <Reveal>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          {visible.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onOpen={setSelectedProject}
            />
          ))}
        </div>
      </Reveal>
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}
