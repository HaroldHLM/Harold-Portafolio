import Container from "@/src/components/layout/Container";
import Hero from "../../components/sections/Hero";
import { routing } from "../../i18n/routing";
import { setRequestLocale } from "next-intl/server";
import About from "@/src/components/sections/About";

type Props = {
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function Home({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <Container>
      <Hero />
      <About />
    </Container>
  );
}
