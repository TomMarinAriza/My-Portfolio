import { projects, skills, toolset } from "./_data/portfolio";
import Contacto from "./_sections/Contacto";
import Footer from "./_sections/Footer";
import Habilidades from "./_sections/Habilidades";
import Perfil from "./_sections/Perfil";
import Proyectos from "./_sections/Proyectos";

export default function Home() {
  return (
    <div className="page-shell min-h-screen bg-[color:var(--background)] text-[color:var(--foreground)]">
      <div className="grid-overlay" />
      <main className="relative z-10 mx-auto flex w-full max-w-6xl flex-col gap-16 px-6 py-12 sm:px-10">
        <header className="flex flex-col gap-8">
          <Perfil />
        </header>
        <Proyectos projects={projects} />
        <Habilidades skills={skills} toolset={toolset} />
        <Contacto />
        <Footer />
      </main>
    </div>
  );
}
