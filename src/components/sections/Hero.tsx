"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import WarGreymonScene from "../scene/WarGreymonScene";

export default function Hero() {
  const t = useTranslations("Hero");

  return (
    <section
      id="hero"
      className="relative min-h-screen overflow-hidden pt-36 pb-24 lg:pt-28"
    >
      <div className="grid min-h-[calc(100vh-7rem)] items-center gap-12 lg:grid-cols-[minmax(0,0.92fr)_minmax(360px,1.08fr)]">
        <div className="relative z-10">
          {/* Top label */}
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
              {t("badge")}
            </span>
            <Image
              src="/image/harold.jpg"
              alt="Harold Layme"
              width={60}
              height={60}
              priority
              className="
              rounded-full
              object-cover
              border border-(--dorado)/30
              shadow-lg shadow-blue-500/10
            "
            />
          </div>
          {/* Main title */}
          <h1
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
            {t("titleLine1")}
            <br />
            <span className="italic text-(--dorado)">{t("titleAccent")}</span>
            <br />
            {t("titleLine3")}
          </h1>

          {/* Description */}
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
        </div>

        <div className="relative z-0 h-105 sm:h-130 lg:h-170">
          <div className="pointer-events-none absolute inset-6 border border-(--border) opacity-40" />
          <div className="absolute inset-0">
            <WarGreymonScene />
          </div>
        </div>
      </div>
    </section>
  );
}
