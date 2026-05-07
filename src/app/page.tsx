import Hero from "../components/ui/Hero";

export default function Home() {
  return (
    <main className="relative z-10 min-h-screen">
      <Hero />
      <div className="relative z-10 h-[200vh]">
        <section className="h-screen flex items-center justify-center">
          <h1 className="text-5xl">Scroll Down</h1>
        </section>

        <section className="h-screen flex items-center justify-center">
          <h1 className="text-5xl">Next Scene</h1>
        </section>
      </div>
    </main>
  );
}
