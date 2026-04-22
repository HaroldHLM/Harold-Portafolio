import SceneCanvas from "../components/canvas/SceneCanvas";

export default function Home() {
  return (
    <main className="h-[200vh]">
      <div className="fixed top-0 left-0 w-full h-screen">
        <SceneCanvas />
      </div>

      <section className="h-screen flex items-center justify-center">
        <h1 className="text-5xl">Scroll Down</h1>
      </section>

      <section className="h-screen flex items-center justify-center">
        <h1 className="text-5xl">Next Scene</h1>
      </section>
    </main>
  );
}
