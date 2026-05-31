type HabilidadesProps = {
  skills: string[];
  toolset: string[];
};

export default function Habilidades({ skills, toolset }: HabilidadesProps) {
  return (
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
            Itero en sprints cortos, valido sensaciones con playtests y documento
            decisiones en bitacoras ligeras.
          </p>
        </div>
      </div>
    </section>
  );
}
