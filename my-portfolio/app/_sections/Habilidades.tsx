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
      <div className="panel rounded-2xl p-8">
        <p className="hud-label">Habilidades</p>
        <h2 className="font-display mt-4 text-3xl sm:text-4xl">Lo que domino</h2>
        <div className="mt-6 grid gap-3 sm:grid-cols-2">
          {skills.map((skill) => (
            <div
              key={skill}
              className="rounded-xl border border-[color:var(--line)] bg-[color:var(--surface)] px-4 py-3 text-xs uppercase tracking-[0.22em]"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
      <div className="panel rounded-2xl p-8">
        <p className="hud-label">Toolset</p>
        <h2 className="font-display mt-4 text-3xl sm:text-4xl">
          Herramientas que me gusta usar
        </h2>
        <div className="mt-6 flex flex-wrap gap-3">
          {toolset.map((tool) => (
            <span
              key={tool}
              className="neo-tag rounded-full px-4 py-2 text-[0.6rem]"
            >
              {tool}
            </span>
          ))}
        </div>
        <div className="mt-8 rounded-2xl border border-[color:var(--line)] bg-[color:var(--surface-strong)] p-6">
          <p className="panel-title">Metodologia</p>
          <p className="mt-3 text-sm leading-6 text-[color:var(--muted)]">
            Trabajo desde el GDD (Game Design Document) para definir claramente cada
            sistema y su interaccion con el resto. Me gusta iterar rapido sobre
            prototipos jugables para ajustar sensaciones y pulir el gameplay loop.
          </p>
        </div>
      </div>
    </section>
  );
}
