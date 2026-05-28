import Container from "@/src/components/layout/Container";
import Hero from "../../components/sections/Hero";
import About from "@/src/components/sections/About";
import Skill from "@/src/components/sections/Skills";
import Projects from "@/src/components/sections/Projects/Projects";
import { routing } from "../../i18n/routing";
import { setRequestLocale } from "next-intl/server";

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
      <Skill />
      <Projects />
    </Container>
  );
}
