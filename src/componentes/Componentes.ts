// Meus ícones de tecnologias

const imgData = [
  // FRONTEND
  ...[
    "html5",
    "css3",
    "javascript",
    "typescript",
    "react",
    "vuejs",
    "bootstrap",
    "tailwindcss",
  ].map((src) => ({ name: src.toUpperCase(), src, txt: "Frontend" })),

  // BACKEND
  ...["spring", "java", "python", "nodejs", "express"].map((src) => ({
    name: src.charAt(0).toUpperCase() + src.slice(1),
    src,
    txt: "Backend",
  })),

  // DATABASE
  ...["mongodb", "mysql"].map((src) => ({
    name: src.toUpperCase(),
    src,
    txt: "DataBase",
  })),

  // TOOLS
  ...["docker", "rabbitmq", "git", "github", "npm", "bun"].map((src) => ({
    name: src.toUpperCase(),
    src,
    txt: "Ferramenta",
  })),
];

export const ProjetosData = [
  {
    name: "Projeto de Delivery",
    video: "https://www.youtube.com/embed/LXKtiyKVIJk", // link de embed correto
    github: "https://github.com/Vitor-S-G-C/lanchonete",
    description:
      "Projeto e um site de delivery para um restaurante fictício, com menu interativo e sistema de pedidos online.",
    techs: [
      { name: "React", src: "react", txt: "Frontend" },
      { name: "TypeScript", src: "typescript", txt: "Frontend" },
      { name: "Bootstrap", src: "bootstrap", txt: "Frontend" },
    ],
  },
  {
    name: "IAmeal",
    video: "https://www.youtube.com/embed/3OlFbIqDZnI",
    github: "https://github.com/Vitor-S-G-C/IAmail",
    description:
      "Um gerenciador de emails com IA que organiza, classifica e responde automaticamente mensagens. Permite trabalhar com arquivos PDF, TXT e textos diretos, otimizando a produtividade e automação de rotinas de comunicação.",
    techs: [
      { name: "JavaScript", src: "javascript", txt: "Frontend" },
      { name: "Vue", src: "vuejs", txt: "Frontend" },
      { name: "Python", src: "python", txt: "Backend" },
      { name: "FastAPI", src: "fastapi", txt: "Backend" },
      { name: "MongoDB", src: "mongodb", txt: "DataBase" },
      { name: "Docker", src: "docker", txt: "Ferramenta" },
      { name: "GitHub", src: "github", txt: "Ferramenta" },
    ],
  },
  {
    name: "NetFlix",
    video: "https://www.youtube.com/embed/HH7vWcjXimI",
    github: "https://github.com/Vitor-S-G-C/copiaNetflix",
    description:
      "Clone da página inicial da Netflix com funcionalidade de tradução para diferentes idiomas.",
    techs: [
      { name: "JavaScript", src: "javascript", txt: "Frontend" },
      { name: "HTML5", src: "html5", txt: "Frontend" },
      { name: "CSS3", src: "css3", txt: "Frontend" },
    ],
  },
];

export { imgData };
