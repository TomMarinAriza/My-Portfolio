export default function Nav() {
  return (
    <nav className="flex flex-wrap items-center justify-between gap-6 text-sm uppercase tracking-[0.2em] text-[color:var(--muted)]">
      <span className="font-display text-2xl text-[color:var(--foreground)]">Dev Game</span>
      <div className="flex flex-wrap gap-6">
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
