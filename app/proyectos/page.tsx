import { projects } from "../_data/portfolio";
import Proyectos from "../_sections/Proyectos";

export default function ProyectosPage() {
  return (
    <main className="mx-auto flex w-full max-w-6xl flex-col gap-12 px-6 py-12 sm:px-10">
      <header className="flex flex-col gap-3">
        <p className="hud-label">Portfolio</p>
        <h1 className="font-display text-4xl sm:text-5xl">Proyectos</h1>
      </header>
      <Proyectos projects={projects} />
    </main>
  );
}
