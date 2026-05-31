export type Project = {
  title: string;
  role: string;
  description: string;
  tags: string[];
  link: string;
};

export const projects: Project[] = [
  {
    title: "Kitsune",
    role: "Diseno + Programacion",
    description:
      "Plataformas 2D inspirado en la mitologia japonesa. La protagonista gana colas que desbloquean nuevas habilidades mientras avanza por tres niveles con combate y puzzles.",
    tags: ["Unity", "C#", "PC"],
    link: "https://github.com/TomMarinAriza/Kitsune-videogame-demo",
  },
];

export const skills = [
  "Diseno de niveles",
  "Gameplay 2D",
  "Combate y enemigos",
  "Progresion por habilidades",
  "Arte pixel",
  "Optimizacion",
];

export const toolset = ["Unity", "Blender", "LibreSprite"];
