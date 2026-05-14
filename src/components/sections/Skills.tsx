"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import Reveal from "../animations/Reveal";
import {
  SiGithub,
  SiFigma,
  SiVercel,
  SiDocker,
  SiPostman,
  SiNotion,
} from "react-icons/si";

import { Terminal } from "lucide-react";

type Category = "all" | "frontend" | "backend" | "a&d" | "mobile";

const filters: { label: string; value: Category }[] = [
  { label: "filters.all", value: "all" },
  { label: "filters.frontend", value: "frontend" },
  { label: "filters.backend", value: "backend" },
  { label: "filters.automatización y data", value: "a&d" },
  { label: "filters.movil", value: "mobile" },
];

const skillCategories = [
  {
    id: "frontend" as Category,
    key: "Frontend",
  },
  {
    id: "backend" as Category,
    key: "Backend",
  },
  {
    id: "a&d" as Category,
    key: "Automatización y Data",
  },
  {
    id: "frontend" as Category,
    key: "Soft Skills",
  },
  {
    id: "mobile" as Category,
    key: "Mobile",
  },
];

export const tools = [
  {
    icon: SiGithub,
    name: "GitHub",
  },
  {
    icon: SiFigma,
    name: "Figma",
  },
  {
    icon: Terminal,
    name: "Terminal",
  },
  {
    icon: SiVercel,
    name: "Vercel",
  },
  {
    icon: SiDocker,
    name: "Docker",
  },
  {
    icon: SiPostman,
    name: "Postman",
  },
  {
    icon: SiNotion,
    name: "Notion",
  },
];

function SkillBar({ name }: { name: string }) {
  return (
    <div className="flex flex-col gap-1.5">
      <div className="flex justify-between items-baseline">
        <span className="font-mono text-[11px] text-(--text)/70">{name}</span>
      </div>
      <div className="h-px w-full bg-(--muted)/30">
        <div className="h-full bg-(--dorado) transition-all duration-700" />
      </div>
    </div>
  );
}

export default function Skills() {
  const t = useTranslations("Skill");

  const [active, setActive] = useState<Category>("all");

  const visible = skillCategories.filter(
    (cat) => active === "all" || cat.id === active,
  );

  return (
    <section
      id="skills"
      className="relative min-h-screen overflow-hidden pt-36 pb-1 lg:pt-28"
    >
      {/* Label */}
      <Reveal>
        <div className="flex items-center gap-3 mb-14 z-10">
          <div className="block w-8 h-px bg-(--dorado)/60" />
          <span className="font-mono text-[11px] tracking-[0.2em] uppercase text-(--dorado)">
            <span
              className="
                        font-dm-mono
                        text-[10px]
                        uppercase
                        tracking-[0.35em]
                        text-(--dorado)
                        sm:text-[10px]
                        md:text-[10px]
                        xl:text-[11px]
                        "
            >
              03.
            </span>
            <span
              className="
                        font-dm-mono
                        text-[10px]
                        uppercase
                        tracking-[0.35em]
                        text-(--text)
                        sm:text-[10px]
                        md:text-[10px]
                        xl:text-[11px]
                        "
            >
              {t("badge")}
            </span>
          </span>
        </div>
      </Reveal>
      {/* Encabezado */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12 items-start">
        <Reveal>
          <h2
            className="
              font-cormorant
              text-3xl
              leading-none
              tracking-tight
              text-(--text)
              sm:text-4xl
              md:text-5xl
              xl:text-5xl
            "
          >
            {t("titleLine1")}{" "}
            <em className="italic text-(--dorado)">{t("titleLine2")}</em>
            <br />
            {t("titleLine3")}
          </h2>
        </Reveal>
        {/* Description */}
        <Reveal>
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
        </Reveal>
      </div>

      {/* Filtros */}
      <Reveal>
        <div className="flex flex-wrap gap-2 mb-10">
          {filters.map(({ label, value }) => (
            <button
              key={value}
              onClick={() => setActive(value)}
              className={`
              font-mono text-[10px] tracking-widest uppercase px-4 py-1.5
              border transition-all duration-200
              ${
                active === value
                  ? "border-(--dorado) text-(--dorado)"
                  : "border-(--muted)/30 text-(--muted)/60 hover:border-(--muted)/50 hover:text-(--muted)/80"
              }
            `}
            >
              {t(label)}
            </button>
          ))}
        </div>
      </Reveal>
      {/* Cards de skills */}
      <Reveal>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {visible.map((cat, i) => {
            const category = t.raw(cat.key);

            return (
              <div key={i} className="border border-(--text)/10 rounded-xl p-6">
                <div className="flex items-center gap-2.5 mb-5">
                  <span className="w-1.5 h-1.5 rounded-full bg-(--dorado)" />

                  <span className="font-mono text-[10px] tracking-[0.15em] uppercase text-(--dorado)">
                    {category.title}
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-x-6 gap-y-4">
                  {category.skills.map((skill: { name: string }) => (
                    <SkillBar key={skill.name} name={skill.name} />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </Reveal>
      {/* Herramientas */}
      <Reveal>
        <div className="mt-10 border border-(--text)/10 rounded-xl p-6">
          <div className="font-mono text-[10px] tracking-[0.15em] uppercase text-(--dorado) mb-5">
            {t("tools")}
          </div>
          <div className="flex flex-wrap gap-2.5">
            {tools.map(({ icon: Icon, name }) => (
              <div
                key={name}
                className="
        flex items-center gap-2
        border border-(--text)/10
        px-4 py-2
        text-(--text)/70
        font-mono text-[10px]
        tracking-[0.08em]
      "
              >
                <Icon size={14} />
                {name}
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
