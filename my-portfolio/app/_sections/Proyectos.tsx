import type { Project } from "../_data/portfolio";

type ProyectosProps = {
  projects: Project[];
};

export default function Proyectos({ projects }: ProyectosProps) {
  return (
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
  );
}
