// Meus ícones de tecnologias

const imgData = [
  { name: "HTML5", src: "html5", txt: "Frontend" },
  { name: "CSS3", src: "css3", txt: "Frontend" },
  { name: "JavaScript", src: "javascript", txt: "Frontend" },
  { name: "TypeScript", src: "typescript", txt: "Frontend" },
  { name: "React", src: "react", txt: "Frontend" },
  { name: "Bootstrap", src: "bootstrap", txt: "Frontend" },
  { name: "Tailwind", src: "tailwindcss", txt: "Frontend" },

  { name: "Spring", src: "spring", txt: "Backend" },
  { name: "Java", src: "java", txt: "Backend" },
  { name: "Python", src: "python", txt: "Backend" },
  { name: "Node.js", src: "nodejs", txt: "Backend" },
  { name: "Express", src: "express", txt: "Backend" },

  { name: "MongoDB", src: "mongodb", txt: "DataBase" },
  { name: "MySQL", src: "mysql", txt: "DataBase" },

  { name: "Docker", src: "docker", txt: "Ferramenta" },
  { name: "RabbitMQ", src: "rabbitmq", txt: "Ferramenta" },
  { name: "Git", src: "git", txt: "Ferramenta" },
  { name: "GitHub", src: "github", txt: "Ferramenta" },
  { name: "npm", src: "npm", txt: "Ferramenta" },
  { name: "Bun", src: "bun", txt: "Ferramenta" },
];

export const ProjetosData = [
  {
    name: "NetFlix com tradução",
    video: "/videos/netflix.mp4",
    description:
      "Clone da página inicial da Netflix com funcionalidade de tradução para diferentes idiomas.",
    techs: [
      { name: "JavaScript", src: "javascript", txt: "Frontend" },
      { name: "HTML5", src: "html5", txt: "Frontend" },
      { name: "CSS3", src: "css3", txt: "Frontend" },
    ],
  },
  {
    name: "Projeto de Delivery",
    video: "/videos/restaurante.mp4", // fallback caso não tenha vídeo
    description:
      "Projeto e um site de delivery para um restaurante fictício, com menu interativo e sistema de pedidos online.",
    techs: [
      { name: "React", src: "react", txt: "Frontend" },
      { name: "TypeScript", src: "typescript", txt: "Frontend" },
      { name: "Bootstrap", src: "bootstrap", txt: "Frontend" },
    ],
  },
];

export { imgData };
