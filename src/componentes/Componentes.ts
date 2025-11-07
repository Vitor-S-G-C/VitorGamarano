const imgData = {
  // FRONTEND
  html5: { name: "HTML5", src: "html5", txt: "Frontend", level: 5 },
  css3: { name: "CSS3", src: "css3", txt: "Frontend", level: 5 },
  javascript: {
    name: "JavaScript",
    src: "javascript",
    txt: "Frontend",
    level: 4.5,
  },
  typescript: {
    name: "TypeScript",
    src: "typescript",
    txt: "Frontend",
    level: 4,
  },
  react: { name: "React", src: "react", txt: "Frontend", level: 4.5 },
  vuejs: { name: "Vue.js", src: "vuejs", txt: "Frontend", level: 3 },
  bootstrap: { name: "Bootstrap", src: "bootstrap", txt: "Frontend", level: 4 },
  tailwindcss: {
    name: "Tailwind CSS",
    src: "tailwindcss",
    txt: "Frontend",
    level: 3.5,
  },
  vite: { name: "Vite", src: "vite", txt: "Ferramentas", level: 3.5 },
  npm: { name: "NPM", src: "npm", txt: "Ferramentas", level: 4 },
  bun: { name: "Bun", src: "bun", txt: "Ferramentas", level: 2 },

  // BACKEND
  spring: { name: "Spring", src: "spring", txt: "Backend", level: 3 },
  java: { name: "Java", src: "java", txt: "Backend", level: 3.5 },
  python: { name: "Python", src: "python", txt: "Backend", level: 4 },
  nodejs: { name: "Node.js", src: "nodejs", txt: "Backend", level: 4 },
  express: { name: "Express", src: "express", txt: "Backend", level: 3.5 },
  fastapi: { name: "FastAPI", src: "fastapi", txt: "Backend", level: 2.5 },
  docker: { name: "Docker", src: "docker", txt: "DevOps", level: 3 }, // Mudei a categoria para 'DevOps'
  rabbitmq: { name: "RabbitMQ", src: "rabbitmq", txt: "Backend", level: 2.5 },
  git: { name: "Git", src: "git", txt: "Ferramentas", level: 4.5 },
  github: { name: "GitHub", src: "github", txt: "Ferramentas", level: 4 },

  // DATABASE
  mongodb: {
    name: "MongoDB",
    src: "mongodb",
    txt: "Banco de Dados",
    level: 3.5,
  },
  mysql: { name: "MySQL", src: "mysql", txt: "Banco de Dados", level: 4 },
};
export const ProjetosData = [
  {
    name: "Projeto de Delivery",
    video: "https://www.youtube.com/embed/LXKtiyKVIJk",
    github: "https://github.com/Vitor-S-G-C/lanchonete",
    description:
      "Site de delivery para um restaurante fictício, com menu interativo e sistema de pedidos online.",
    techs: [
      { name: "React", src: "react", txt: "Frontend" },
      { name: "TypeScript", src: "typescript", txt: "Frontend" },
      { name: "Bootstrap", src: "bootstrap", txt: "Frontend" },
      { name: "Vite", src: "vite", txt: "Frontend" },
    ],
  },
  {
    name: "IAmeal",
    video: "https://www.youtube.com/embed/3OlFbIqDZnI",
    github: "https://github.com/Vitor-S-G-C/IAmeal",
    description:
      "Gerenciador de emails com IA que organiza, classifica e responde automaticamente mensagens. Permite trabalhar com arquivos PDF, TXT e textos diretos, otimizando produtividade e automação de rotinas de comunicação.",
    techs: [
      { name: "JavaScript", src: "javascript", txt: "Frontend" },
      { name: "Vue.js", src: "vuejs", txt: "Frontend" },
      { name: "Python", src: "python", txt: "Backend" },
      { name: "FastAPI", src: "fastapi", txt: "Backend" },
      { name: "MongoDB", src: "mongodb", txt: "DataBase" },
      { name: "Docker", src: "docker", txt: "Backend" },
      { name: "GitHub", src: "github", txt: "Backend" },
    ],
  },
  {
    name: "Netflix Clone",
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
