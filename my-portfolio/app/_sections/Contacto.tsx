export default function Contacto() {
  return (
    <section
      id="contacto"
      className="panel reveal reveal-delay-3 grid gap-6 rounded-3xl p-10 lg:grid-cols-[1.1fr_0.9fr]"
    >
      <div className="flex flex-col gap-4">
        <p className="hud-label">Contacto</p>
        <h2 className="font-display text-3xl sm:text-4xl">
          Creamos algo que se juegue bien.
        </h2>
        <p className="hud-line text-sm leading-6 text-[color:var(--muted)]">
          Desarrollador de videojuegos INDIE con enfoque en programacion de gamplay
          systems, UI y prototipos rapidos. Si te interesa colaborar o simplemente
          charlar, no dudes en contactarme.
        </p>
      </div>
      <div className="flex flex-col gap-4 text-sm">
        <a
          className="panel rounded-2xl px-5 py-4 text-xs tracking-[0.12em] transition hover:border-[color:var(--accent)]"
          href="mailto:tomasmarinariza@gmail.com"
        >
          tomasmarinariza@gmail.com
        </a>
        <a
          className="panel rounded-2xl px-5 py-4 text-xs uppercase tracking-[0.28em] transition hover:border-[color:var(--accent)]"
          href="https://www.linkedin.com/in/tomas-marin-ariza"
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn
        </a>
      </div>
    </section>
  );
}
