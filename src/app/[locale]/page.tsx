import Hero from "../../components/ui/Hero";
import { routing } from "../../i18n/routing";
import { getTranslations, setRequestLocale } from "next-intl/server";

type Props = {
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function Home({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations("Home");

  return (
    <main className="relative z-10 min-h-screen">
      <Hero />
      <div className="relative z-10 h-[200vh]">
        <section className="h-screen flex items-center justify-center">
          <h1 className="text-5xl">{t("scrollDown")}</h1>
        </section>

        <section className="h-screen flex items-center justify-center">
          <h1 className="text-5xl">{t("nextScene")}</h1>
        </section>
      </div>
    </main>
  );
}
