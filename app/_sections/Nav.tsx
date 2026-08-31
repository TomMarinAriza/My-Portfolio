export default function Nav() {
  return (
    <nav className="sticky top-0 z-20 border-b border-[color:var(--line)] bg-[color:var(--background)]/85 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-6 px-6 py-4 sm:px-10">
        <span className="font-display text-lg tracking-[0.35em] text-[color:var(--accent)] sm:text-xl">
          DEV_GAME
        </span>
        <div className="hidden items-center gap-8 text-[0.6rem] uppercase tracking-[0.45em] text-[color:var(--muted)] sm:flex">
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
        <span className="hidden rounded-full border border-[color:var(--line)] px-3 py-1 text-[0.55rem] uppercase tracking-[0.4em] text-[color:var(--accent)] sm:inline-flex">
          Online
        </span>
      </div>
      <div className="flex flex-wrap justify-center gap-6 border-t border-[color:var(--line)] px-6 py-3 text-[0.55rem] uppercase tracking-[0.4em] text-[color:var(--muted)] sm:hidden">
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
  );
}
