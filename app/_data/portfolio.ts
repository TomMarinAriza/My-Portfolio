export type Project = {
  title: string;
  role: string;
  description: string;
  tags: string[];
  link: string;
};

export const projects: Project[] = [
  {
    title: "Asahi: Tamashii no Kitsune",
    role: "Diseño de niveles, gameplay y programacion",
    description:
      "Plataformero 2D inspirado en la mitologia japonesa donde el jugador controla a un kistune que busca su proposito en el mundo terrenal.",
    tags: ["Unity", "C#", "PC"],
    link: "https://github.com/TomMarinAriza/Kitsune-videogame-demo",
  },
];

export const skills = [
  "Diseño de niveles",
  "Gameplay 2D",
  "Combate y enemigos",
  "Progresion por habilidades",
  "Optimizacion",
];

export const toolset = ["Unity", "Blender", "LibreSprite"];
