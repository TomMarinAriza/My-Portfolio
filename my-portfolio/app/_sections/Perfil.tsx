export default function Perfil() {
  return (
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
          Soy desarrollador de videojuegos enfocado en gameplay systems, UI y prototipos
          rapidos. Me interesa construir sensaciones claras en cada interaccion y
          convertirlas en loops que enganchen.
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
  );
}
