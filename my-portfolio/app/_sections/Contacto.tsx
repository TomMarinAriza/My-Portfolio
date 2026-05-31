export default function Contacto() {
  return (
    <section
      id="contacto"
      className="reveal reveal-delay-3 grid gap-6 rounded-3xl border border-white/10 bg-[color:var(--surface)] p-10 lg:grid-cols-[1.1fr_0.9fr]"
    >
      <div className="flex flex-col gap-4">
        <h2 className="font-display text-4xl">Creamos algo que se juegue bien.</h2>
        <p className="text-sm leading-6 text-[color:var(--muted)]">
          Busco equipos y proyectos donde la experiencia del jugador sea la prioridad.
          Escribeme y te respondo en 24-48 horas.
        </p>
      </div>
      <div className="flex flex-col gap-4 text-sm">
        <a
          className="rounded-2xl border border-white/10 px-5 py-4 transition hover:border-[color:var(--accent)]"
          href="mailto:hello@tuemail.com"
        >
          tomasmarinariza@gmail.com
        </a>
        <a
          className="rounded-2xl border border-white/10 px-5 py-4 transition hover:border-[color:var(--accent)]"
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
