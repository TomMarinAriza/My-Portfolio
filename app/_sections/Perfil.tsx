export default function Perfil() {
  return (
    <section
      id="perfil"
      className="panel reveal grid gap-10 rounded-3xl p-8 sm:p-12 lg:grid-cols-[1.35fr_0.65fr]"
    >
      <div className="flex flex-col gap-6">
        <div className="flex items-center gap-3 text-[0.6rem] uppercase tracking-[0.4em] text-[color:var(--muted)]">
          <span className="text-[color:var(--accent)]">//</span>
          ficha del personaje · lvl 28
        </div>
        <h1 className="font-display text-4xl leading-tight sm:text-5xl">
          Tomás Marín
          <span className="text-[color:var(--accent)]"> Ariza</span>
          <br />
          <span className="text-2xl tracking-[0.35em] text-[color:var(--muted)] sm:text-3xl">
            Game Developer
          </span>
        </h1>
        <p className="hud-line max-w-xl text-sm leading-6 text-[color:var(--muted)]">
          Nacido para construir mundos jugables, sistemas con identidad y experiencias que
          hacen sentir cada decisión. Especializado en gameplay, prototipos, progresión y
          feedback visual. Su misión: convertir ideas de juego en loops claros, intensos y
          memorables.
        </p>
        <div className="flex flex-wrap gap-4">
          <a className="neo-button primary" href="#contacto">
            Contratar
          </a>
          <a className="neo-button" href="/cv.pdf" download="CV-Tomas-Marin.pdf">
            Ver CV
          </a>
        </div>
      </div>
      <div className="flex flex-col gap-6">
        <div className="panel rounded-2xl p-5">
          <p className="panel-title">Atributos //</p>
          <ul className="mt-4 space-y-3 text-[0.6rem] uppercase tracking-[0.25em] text-[color:var(--foreground)]">
            <li>
              <div className="flex items-center justify-between gap-4">
                <span>Gameplay</span>
                <span className="text-[color:var(--accent)]">95</span>
              </div>
              <div className="mt-2 h-1.5 rounded-full bg-[color:var(--surface)]">
                <div className="h-full w-[95%] rounded-full bg-[color:var(--accent)]" />
              </div>
            </li>
            <li>
              <div className="flex items-center justify-between gap-4">
                <span>UI</span>
                <span className="text-[color:var(--accent)]">88</span>
              </div>
              <div className="mt-2 h-1.5 rounded-full bg-[color:var(--surface)]">
                <div className="h-full w-[88%] rounded-full bg-[color:var(--accent)]" />
              </div>
            </li>
            <li>
              <div className="flex items-center justify-between gap-4">
                <span>Prototipos</span>
                <span className="text-[color:var(--accent)]">90</span>
              </div>
              <div className="mt-2 h-1.5 rounded-full bg-[color:var(--surface)]">
                <div className="h-full w-[90%] rounded-full bg-[color:var(--accent)]" />
              </div>
            </li>
          </ul>
        </div>
        <div className="panel rounded-2xl p-5">
          <p className="panel-title">Disponibilidad //</p>
          <ul className="mt-4 space-y-2 text-xs uppercase tracking-[0.25em] text-[color:var(--muted)]">
            <li>&gt; Freelance</li>
            <li>&gt; Indie Team</li>
            <li>&gt; Contrato</li>
          </ul>
        </div>
        <div className="panel rounded-2xl p-5">
          <p className="panel-title">Quest log</p>
          <ul className="mt-4 space-y-2 text-[0.6rem] uppercase tracking-[0.3em] text-[color:var(--muted)]">
            <li>&gt; thriller level design</li>
            <li>&gt; game feel tuning</li>
            <li>&gt; combat feedback</li>
            <li className="text-[color:var(--accent)]">&gt; misión activa</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
