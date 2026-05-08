"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "../../i18n/navigation";

export default function LocaleToggle() {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  const switchLocale = (nextLocale: "es" | "en") => {
    router.replace(pathname, { locale: nextLocale });
  };

  return (
    <div
      className="
        flex h-9 shrink-0 items-center border border-(--border)
        bg-(--bg)/70 font-dm-mono text-[10px]
        uppercase tracking-[0.14em] text-(--muted) backdrop-blur-md xl:tracking-widest
      "
      aria-label="Language selector"
    >
      <button
        type="button"
        onClick={() => switchLocale("es")}
        aria-pressed={locale === "es"}
        className={`
          h-full px-2 transition-colors duration-200
          ${locale === "es" ? "bg-(--dorado) text-(--bg)" : "hover:text-(--text)"}
        `}
      >
        es
      </button>
      <span className="h-4 w-px bg-(--border)" aria-hidden="true" />
      <button
        type="button"
        onClick={() => switchLocale("en")}
        aria-pressed={locale === "en"}
        className={`
          h-full px-2 transition-colors duration-200
          ${locale === "en" ? "bg-(--dorado) text-(--bg)" : "hover:text-(--text)"}
        `}
      >
        en
      </button>
    </div>
  );
}
