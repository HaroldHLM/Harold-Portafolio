import ContactForm from "@/src/components/contact/ContactForm";
import Reveal from "@/src/components/animations/Reveal";
import { useTranslations } from "next-intl";

const socials = [
  { label: "GitHub", href: "https://github.com/HaroldHLM" },
  { label: "LinkedIn", href: "https://linkedin.com/in/haroldlayme" },
  //   { label: "Twitter / X", href: "https://x.com/tuusuario" },
];

export default function Contact() {
  const t = useTranslations("Contact");
  const info = [
    {
      label: t("info.nameLabel"),
      value: t("info.nameValue"),
    },
    {
      label: t("info.locationLabel"),
      value: t("info.locationValue"),
    },
    {
      label: t("info.availabilityLabel"),
      value: t("info.availabilityValue"),
    },
  ];

  return (
    <section
      id="contact"
      className="px-10 lg:px-20 py-30 border-t border-(--text)/10 relative min-h-screen overflow-hidden"
    >
      {/* Label */}
      <Reveal>
        <div className="flex items-center gap-3 mb-14">
          <span className="block w-8 h-px bg-(--dorado)" />
          <span className="font-mono text-[11px] tracking-[0.2em] uppercase text-(--dorado)">
            {t("badge")}
          </span>
        </div>
      </Reveal>
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-16 items-start">
        {/*info */}
        <Reveal>
          <div>
            <h2
              style={{ fontFamily: "'font-dm-mono', serif" }}
              className="text-5xl font-light leading-[1.05] text-(--text) mb-6"
            >
              {t("titleLine1")}
              <br />
              <em className="text-(--dorado) italic">{t("titleLine2")}</em>
            </h2>
            <p className="font-dm-mono text-[12px] text-(--muted) leading-[1.9] mb-8">
              {t("description")}
            </p>

            {/* Info */}
            <div className="flex flex-col">
              {info.map(({ label, value }) => (
                <div
                  key={label}
                  className="flex flex-col gap-1 py-4 border-b border-(--text)/10 first:border-t first:border-(--text)/10 "
                >
                  <span className="font-dm-mono text-[9px] tracking-[0.15em] uppercase text-(--dorado)">
                    {label}
                  </span>
                  <span className="font-dm-mono text-[11px] text-(--muted)">
                    {value}
                  </span>
                </div>
              ))}
            </div>

            {/* Redes */}
            <div className="flex gap-2.5 mt-7">
              {socials.map(({ label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-dm-mono text-[9px] tracking-widest uppercase px-3.5 py-2 border border-(--text)/10 text-(--text) hover:border-(--dorado) hover:text-(--dorado) transition-all duration-200 no-underline"
                >
                  {label}
                </a>
              ))}
            </div>
          </div>
        </Reveal>
        {/* formulario */}
        <div>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
