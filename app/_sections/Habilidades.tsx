type HabilidadesProps = {
  skills: string[];
  toolset: string[];
};

const statBySkill: Record<string, number> = {
  "Diseño de niveles": 96,
  "Gameplay 2D": 94,
  "Combate y enemigos": 92,
  "Progresion por habilidades": 90,
  "Optimizacion": 88,
};

export default function Habilidades({ skills, toolset }: HabilidadesProps) {
  return (
    <section
      id="habilidades"
      className="reveal reveal-delay-2 grid gap-8 lg:grid-cols-[1fr_1.1fr]"
    >
      <div className="panel rounded-2xl p-8">
        <p className="hud-label">Stats</p>
        <h2 className="font-display mt-4 text-3xl sm:text-4xl">Habilidades principales</h2>
        <div className="mt-6 space-y-5">
          {skills.map((skill) => {
            const value = statBySkill[skill] ?? 85;
            return (
              <div key={skill} className="space-y-2">
                <div className="flex items-center justify-between gap-4 text-[0.6rem] uppercase tracking-[0.25em] text-[color:var(--muted)]">
                  <span>{skill}</span>
                  <span className="text-[color:var(--accent)]">{value}</span>
                </div>
                <div className="h-2 rounded-full bg-[color:var(--surface)]">
                  <div
                    className="h-full rounded-full bg-[color:var(--accent)]"
                    style={{ width: `${value}%` }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="panel rounded-2xl p-8">
        <p className="hud-label">Loadout</p>
        <h2 className="font-display mt-4 text-3xl sm:text-4xl">
          Herramientas de aventura
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
            Trabajo con una base clara de diseño, prototipos jugables y iteraciones rapidas
            para pulir el feel del juego, la progresion y la claridad del objetivo del
            jugador.
          </p>
        </div>
      </div>
    </section>
  );
}
