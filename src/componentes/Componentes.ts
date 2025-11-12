const imgData = {
  // FRONTEND
  html5: {
    name: "HTML5",
    src: "html5",
    txt: "Frontend",
    level: 5,
    tema: "#61dafb",
  },
  css3: {
    name: "CSS3",
    src: "css3",
    txt: "Frontend",
    level: 5,
    tema: "#61dafb",
  },
  javascript: {
    name: "JavaScript",
    src: "javascript",
    txt: "Frontend",
    level: 4,
    tema: "#61dafb",
  },
  typescript: {
    name: "TypeScript",
    src: "typescript",
    txt: "Frontend",
    level: 4,
    tema: "#61dafb",
  },
  react: {
    name: "React",
    src: "react",
    txt: "Frontend",
    level: 4,
    tema: "#61dafb",
  },
  vuejs: {
    name: "Vue.js",
    src: "vuejs",
    txt: "Frontend",
    level: 3,
    tema: "#61dafb",
  },
  bootstrap: {
    name: "Bootstrap",
    src: "bootstrap",
    txt: "Frontend",
    level: 4,
    tema: "#61dafb",
  },
  tailwindcss: {
    name: "Tailwind CSS",
    src: "tailwindcss",
    txt: "Frontend",
    level: 3,
    tema: "#61dafb",
  },
  vite: {
    name: "Vite",
    src: "vite",
    txt: "Ferramentas",
    level: 3,
    tema: "#3c873a",
  },
  npm: {
    name: "NPM",
    src: "npm",
    txt: "Ferramentas",
    level: 4,
    tema: "#3c873a",
  },
  bun: {
    name: "Bun",
    src: "bun",
    txt: "Ferramentas",
    level: 2,
    tema: "#3c873a",
  },

  // BACKEND
  spring: {
    name: "Spring",
    src: "spring",
    txt: "Backend",
    level: 3,
    tema: "#a56eff",
  },
  java: {
    name: "Java",
    src: "java",
    txt: "Backend",
    level: 3,
    tema: "#a56eff",
  },
  python: {
    name: "Python",
    src: "python",
    txt: "Backend",
    level: 4,
    tema: "#a56eff",
  },
  nodejs: {
    name: "Node.js",
    src: "nodejs",
    txt: "Backend",
    level: 4,
    tema: "#a56eff",
  },
  express: {
    name: "Express",
    src: "express",
    txt: "Backend",
    level: 3,
    tema: "#a56eff",
  },
  fastapi: {
    name: "FastAPI",
    src: "fastapi",
    txt: "Backend",
    level: 2,
    tema: "#a56eff",
  },
  docker: { name: "Docker", src: "docker", txt: "DevOps", level: 3 }, // DevOps sem cor
  rabbitmq: {
    name: "RabbitMQ",
    src: "rabbitmq",
    txt: "Backend",
    level: 2,
    tema: "#a56eff",
  },
  git: {
    name: "Git",
    src: "git",
    txt: "Ferramentas",
    level: 4,
    tema: "#3c873a",
  },
  github: {
    name: "GitHub",
    src: "github",
    txt: "Ferramentas",
    level: 4,
    tema: "#3c873a",
  },

  // DATABASE
  mongodb: {
    name: "MongoDB",
    src: "mongodb",
    txt: "Banco de Dados",
    level: 3,
    tema: "#fad222ff",
  },
  mysql: {
    name: "MySQL",
    src: "mysql",
    txt: "Banco de Dados",
    level: 4,
    tema: "#fad222ff",
  },
};

export const ProjetosData = [
  {
    name: "Projeto de Delivery",
    video: "https://www.youtube.com/embed/LXKtiyKVIJk",
    github: "https://github.com/Vitor-S-G-C/lanchonete",
    description:
      "Site de delivery para um restaurante fictício, com menu interativo e sistema de pedidos online.",
    techs: [
      { name: "React", src: "react", txt: "Frontend", tema: "#61dafb" },
      {
        name: "TypeScript",
        src: "typescript",
        txt: "Frontend",
        tema: "#61dafb",
      },
      {
        name: "Bootstrap",
        src: "bootstrap",
        txt: "Frontend",
        tema: "#61dafb",
      },
      { name: "Vite", src: "vite", txt: "Frontend", tema: "#61dafb" },
    ],
  },
  {
    name: "IAmeal",
    video: "https://www.youtube.com/embed/3OlFbIqDZnI",
    github: "https://github.com/Vitor-S-G-C/IAmail",
    description:
      "Gerenciador de emails com IA que organiza, classifica e responde automaticamente mensagens. Permite trabalhar com arquivos PDF, TXT e textos diretos, otimizando produtividade e automação de rotinas de comunicação.",
    techs: [
      {
        name: "JavaScript",
        src: "javascript",
        txt: "Frontend",
        tema: "#61dafb",
      },
      { name: "Vue.js", src: "vuejs", txt: "Frontend", tema: "#61dafb" },
      { name: "Python", src: "python", txt: "Backend", tema: "#a56eff" },
      { name: "FastAPI", src: "fastapi", txt: "Backend", tema: "#a56eff" },
      {
        name: "MongoDB",
        src: "mongodb",
        txt: "Banco de Dados",
        tema: "#fad222ff",
      },
      { name: "Docker", src: "docker", txt: "Backend", tema: "#a56eff" },
      { name: "GitHub", src: "github", txt: "Ferramentas", tema: "#3c873a" },
    ],
  },
  {
    name: "Netflix Clone",
    video: "https://www.youtube.com/embed/HH7vWcjXimI",
    github: "https://github.com/Vitor-S-G-C/copiaNetflix",
    description:
      "Clone da página inicial da Netflix com funcionalidade de tradução para diferentes idiomas.",
    techs: [
      {
        name: "JavaScript",
        src: "javascript",
        txt: "Frontend",
        tema: "#61dafb",
      },
      { name: "HTML5", src: "html5", txt: "Frontend", tema: "#61dafb" },
      { name: "CSS3", src: "css3", txt: "Frontend", tema: "#61dafb" },
    ],
  },
];

export { imgData };
