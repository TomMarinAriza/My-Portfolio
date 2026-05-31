export default function Home() {
  const projects = [
    {
      title: "Kitsune",
      role: "Diseno + Programacion",
      description:
        "Plataformas 2D inspirado en la mitologia japonesa. La protagonista gana colas que desbloquean nuevas habilidades mientras avanza por tres niveles con combate y puzzles.",
      tags: ["Unity", "C#", "PC"],
      link: "https://github.com/TomMarinAriza/Kitsune-videogame-demo",
    },
  ];

  const skills = [
    "Diseno de niveles",
    "Gameplay 2D",
    "Combate y enemigos",
    "Progresion por habilidades",
    "Arte pixel",
    "Optimizacion",
  ];

  const toolset = ["Unity", "Blender", "LibreSprite"];

  return (
    <div className="page-shell min-h-screen bg-[color:var(--background)] text-[color:var(--foreground)]">
      <div className="grid-overlay" />
      <main className="relative z-10 mx-auto flex w-full max-w-6xl flex-col gap-20 px-6 py-14 sm:px-10">
        <header className="flex flex-col gap-8">
          <nav className="flex flex-wrap items-center justify-between gap-6 text-sm uppercase tracking-[0.2em] text-[color:var(--muted)]">
            <span className="font-display text-2xl text-[color:var(--foreground)]">
              Dev Game
            </span>
            <div className="flex flex-wrap gap-6">
              <a className="transition hover:text-[color:var(--accent)]" href="#perfil">
                Perfil
              </a>
              <a className="transition hover:text-[color:var(--accent)]" href="#proyectos">
                Proyectos
              </a>
              <a className="transition hover:text-[color:var(--accent)]" href="#habilidades">
                Habilidades
              </a>
              <a className="transition hover:text-[color:var(--accent)]" href="#contacto">
                Contacto
              </a>
            </div>
          </nav>

          <section
            id="perfil"
            className="glass-card reveal grid gap-10 rounded-3xl p-8 sm:p-12 lg:grid-cols-[1.2fr_0.8fr]"
          >
            <div className="flex flex-col gap-6">
              <p className="text-xs uppercase tracking-[0.35em] text-[color:var(--accent)]">
                Portafolio 2026
              </p>
              <h1 className="font-display text-5xl leading-none sm:text-6xl">
                Desarrollo mundos, sistemas y experiencias jugables con ritmo.
              </h1>
              <p className="max-w-xl text-base leading-7 text-[color:var(--muted)]">
                Soy desarrollador de videojuegos enfocado en gameplay systems, UI
                y prototipos rapidos. Me interesa construir sensaciones claras en
                cada interaccion y convertirlas en loops que enganchen.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  className="accent-ring rounded-full bg-[color:var(--accent)] px-6 py-3 text-sm font-semibold text-black transition hover:translate-y-[-2px]"
                  href="#contacto"
                >
                  Hablemos
                </a>
                <a
                  className="rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-[color:var(--foreground)] transition hover:border-[color:var(--accent)]"
                  href="/cv.pdf"
                >
                  Descargar CV
                </a>
              </div>
            </div>
            <div className="flex flex-col gap-6">
              <div className="rounded-2xl bg-[color:var(--surface-strong)] p-6">
                <p className="text-xs uppercase tracking-[0.3em] text-[color:var(--muted)]">
                  Enfoque
                </p>
                <div className="mt-4 flex flex-col gap-3 text-lg">
                  <span>Gameplay loop y balance</span>
                  <span>Interfaces diegeticas</span>
                  <span>Feedback audiovisual</span>
                </div>
              </div>
              <div className="rounded-2xl border border-white/10 bg-[color:var(--surface)] p-6">
                <p className="text-xs uppercase tracking-[0.3em] text-[color:var(--muted)]">
                  Disponible para
                </p>
                <p className="mt-4 text-lg">Freelance, estudio indie, consultoria.</p>
              </div>
            </div>
          </section>
        </header>

        <section id="proyectos" className="reveal reveal-delay-1">
          <div className="flex flex-col gap-4">
            <p className="text-xs uppercase tracking-[0.3em] text-[color:var(--muted)]">
              Proyectos destacados
            </p>
            <h2 className="font-display text-4xl">Mundos en produccion</h2>
          </div>
          <div className="mt-8 grid gap-6 lg:grid-cols-3">
            {projects.map((project) => (
              <article
                key={project.title}
                className="glass-card flex h-full flex-col gap-6 rounded-2xl p-6"
              >
                <div>
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                  <p className="text-sm text-[color:var(--accent)]">{project.role}</p>
                </div>
                <p className="text-sm leading-6 text-[color:var(--muted)]">
                  {project.description}
                </p>
                <a
                  className="text-sm font-semibold text-[color:var(--accent)] transition hover:text-[color:var(--accent-strong)]"
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                >
                  Ver repositorio
                </a>
                <div className="mt-auto flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-white/10 px-3 py-1 text-xs uppercase tracking-[0.2em] text-[color:var(--muted)]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section
          id="habilidades"
          className="reveal reveal-delay-2 grid gap-8 lg:grid-cols-[1fr_1.1fr]"
        >
          <div className="glass-card rounded-2xl p-8">
            <p className="text-xs uppercase tracking-[0.3em] text-[color:var(--muted)]">
              Habilidades
            </p>
            <h2 className="font-display mt-4 text-4xl">Lo que domino</h2>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {skills.map((skill) => (
                <div
                  key={skill}
                  className="rounded-xl border border-white/10 bg-[color:var(--surface)] px-4 py-3 text-sm"
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>
          <div className="glass-card rounded-2xl p-8">
            <p className="text-xs uppercase tracking-[0.3em] text-[color:var(--muted)]">
              Toolset
            </p>
            <h2 className="font-display mt-4 text-4xl">Stack creativo</h2>
            <div className="mt-6 flex flex-wrap gap-3">
              {toolset.map((tool) => (
                <span
                  key={tool}
                  className="rounded-full border border-white/10 px-4 py-2 text-sm text-[color:var(--muted)]"
                >
                  {tool}
                </span>
              ))}
            </div>
            <div className="mt-8 rounded-2xl bg-[color:var(--surface-strong)] p-6">
              <p className="text-xs uppercase tracking-[0.3em] text-[color:var(--muted)]">
                Metodologia
              </p>
              <p className="mt-3 text-sm leading-6 text-[color:var(--muted)]">
                Itero en sprints cortos, valido sensaciones con playtests y
                documento decisiones en bitacoras ligeras.
              </p>
            </div>
          </div>
        </section>

        <section
          id="contacto"
          className="reveal reveal-delay-3 grid gap-6 rounded-3xl border border-white/10 bg-[color:var(--surface)] p-10 lg:grid-cols-[1.1fr_0.9fr]"
        >
          <div className="flex flex-col gap-4">
            <h2 className="font-display text-4xl">Creamos algo que se juegue bien.</h2>
            <p className="text-sm leading-6 text-[color:var(--muted)]">
              Busco equipos y proyectos donde la experiencia del jugador sea la
              prioridad. Escribeme y te respondo en 24-48 horas.
            </p>
          </div>
          <div className="flex flex-col gap-4 text-sm">
            <a
              className="rounded-2xl border border-white/10 px-5 py-4 transition hover:border-[color:var(--accent)]"
              href="mailto:hello@tuemail.com"
            >
              hello@tuemail.com
            </a>
            <a
              className="rounded-2xl border border-white/10 px-5 py-4 transition hover:border-[color:var(--accent)]"
              href="https://www.linkedin.com"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
            <a
              className="rounded-2xl border border-white/10 px-5 py-4 transition hover:border-[color:var(--accent)]"
              href="https://itch.io"
              target="_blank"
              rel="noreferrer"
            >
              itch.io
            </a>
          </div>
        </section>

        <footer className="pb-10 text-xs uppercase tracking-[0.3em] text-[color:var(--muted)]">
          Disponible para nuevas colaboraciones. Base en 2026.
        </footer>
      </main>
    </div>
  );
}
