export default function Perfil() {
  return (
    <section
      id="perfil"
      className="panel reveal grid gap-10 rounded-3xl p-8 sm:p-12 lg:grid-cols-[1.35fr_0.65fr]"
    >
      <div className="flex flex-col gap-6">
        <div className="flex items-center gap-3 text-[0.6rem] uppercase tracking-[0.4em] text-[color:var(--muted)]">
          <span className="text-[color:var(--accent)]">//</span>
          Portafolio · Entrada principal
        </div>
        <h1 className="font-display text-4xl leading-tight sm:text-5xl">
          Desarrollo
          <span className="text-[color:var(--accent)]"> mundos</span>,
          <br /> sistemas y
          <span className="text-[color:var(--accent)]"> experiencias</span>
          <br /> con ritmo.
        </h1>
        <p className="hud-line max-w-xl text-sm leading-6 text-[color:var(--muted)]">
          Soy desarrollador de videojuegos enfocado en gameplay systems, UI y prototipos
          rapidos. Me interesa construir sensaciones claras en cada interaccion y
          convertirlas en loops que enganchen.
        </p>
        <div className="flex flex-wrap gap-4">
          <a className="neo-button primary" href="#contacto">
            Hablemos
          </a>
          <a className="neo-button" href="/cv.pdf">
            Descargar CV
          </a>
        </div>
      </div>
      <div className="flex flex-col gap-6">
        <div className="panel rounded-2xl p-5">
          <p className="panel-title">Enfoque //</p>
          <ol className="mt-4 space-y-2 text-xs uppercase tracking-[0.25em] text-[color:var(--foreground)]">
            <li>01 Gameplay loop y balance</li>
            <li>02 Feedback audiovisual</li>
            <li>03 Gameplay Programmer</li>
            <li>04 Systems Programmer</li>
            <li>05 Solo developer</li>
          </ol>
        </div>
        <div className="panel rounded-2xl p-5">
          <p className="panel-title">Disponible //</p>
          <ul className="mt-4 space-y-2 text-xs uppercase tracking-[0.25em] text-[color:var(--muted)]">
            <li>&gt; Freelance</li>
            <li>&gt; Estudio indie</li>
            <li>&gt; Consultoria</li>
          </ul>
        </div>
        <div className="panel rounded-2xl p-5">
          <p className="panel-title">System log</p>
          <ul className="mt-4 space-y-2 text-[0.6rem] uppercase tracking-[0.3em] text-[color:var(--muted)]">
            <li>&gt; cargando perfil...</li>
            <li>&gt; gameplay_sys: OK</li>
            <li>&gt; world_builder: OK</li>
            <li>&gt; audio_feedback: OK</li>
            <li className="text-[color:var(--accent)]">&gt; listo.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
