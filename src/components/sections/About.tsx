"use client";

import Reveal from "../animations/Reveal";
import { useTranslations } from "next-intl";
import Image from "next/image";

const stats = [
  { num: "2+", label: "Stats.experience" },
  { num: "15+", label: "Stats.projects" },
  { num: "8", label: "Stats.technologies" },
  { num: "∞", label: "Stats.bugs" },
];

export default function About() {
  const t = useTranslations("About");

  return (
    <section
      id="about"
      className="relative min-h-screen overflow-hidden pt-36 pb-1 lg:pt-28"
    >
      <div className="grid min-h-[calc(100vh-7rem)] items-center gap-12 lg:grid-cols-[minmax(0,0.92fr)_minmax(360px,1.08fr)]">
        <div className="relative z-10">
          {/* Top label */}
          <Reveal>
            <div className="mb-10 flex items-center gap-5">
              <div className="h-px w-8 bg-(--dorado)/60" />
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
                02.
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
            </div>
            <div className="flex justify-center">
              <Image
                src="/image/harold.jpg"
                alt="Harold Layme"
                width={100}
                height={100}
                priority
                className="
                            rounded-full
                            object-cover
                            border border-(--dorado)/30
                            shadow-lg shadow-blue-500/10
                          "
              />
            </div>
          </Reveal>
          {/* Description */}
          <Reveal>
            <p
              className="
              mt-12
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
          <Reveal>
            <div className="flex items-center gap-3 mt-8">
              <a
                href="https://drive.google.com/file/d/1E6jZDd8es193q8ouDoO8UgLhtrB_fZKh/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-[10px] tracking-widest uppercase border border-(--dorado) text-(--dorado) px-5 py-2.5 hover:bg-(--dorado) hover:text-(--text) transition-all duration-200 no-underline"
              >
                {t("CV")}
              </a>
            </div>
          </Reveal>
        </div>
        <div className="flex flex-col gap-6">
          {/* Stats */}
          <Reveal>
            <div className="grid grid-cols-2 gap-3">
              {stats.map(({ num, label }) => (
                <div key={label} className="bg-(--accent) rounded-lg p-5">
                  <div
                    style={{ fontFamily: "'Cormorant Garamond', serif" }}
                    className="text-4xl font-light text-(--dorado) leading-none mb-1"
                  >
                    {num}
                  </div>
                  <div className="font-mono text-[10px] tracking-widest uppercase text-(--muted)/80">
                    {t(label)}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal>
            {/* Actualmente */}
            <div className="border-l-2 border-(--dorado) pl-5 py-4 bg-(--accent)">
              <div className="font-mono text-[10px] tracking-[0.15em] uppercase text-(--dorado) mb-2">
                {"// actualmente"}
              </div>
              <p className="font-mono text-[11px] text-(--muted) leading-[1.7]">
                {t("Currently")}
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
