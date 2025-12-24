import Poo from "../certificados/POO.pdf";
import Desenvolvimento_Web_FrontEnd from "../certificados/Desenvolvimento_Web_FrontEnd.pdf";
import Desenvolvimento_Mobile from "../certificados/Desenvolvimento_Mobile.pdf";
import HTML_CSS_JS_basico from "../certificados/HTML_CSS_JS_basico.pdf";
import { 
  SiHtml5, SiCss3, SiJavascript, SiTypescript, SiReact, SiVuedotjs,
  SiBootstrap, SiTailwindcss, SiVite, SiNpm, SiBun, SiSpring,
  SiPython, SiNodedotjs, SiDotnet, SiExpress, SiFastapi, SiDocker,
  SiRabbitmq, SiGit, SiGithub, SiMongodb, SiMysql, SiLinux
} from "react-icons/si";
import { FaJava, FaDatabase, FaCode } from "react-icons/fa";

import type { IconType } from "react-icons";


export const imgData: Record<string, {
  name: string;
  src: string;
  txt: string;
  level: number;
  tema?: string;
  icon?: IconType;
}> = {
  // FRONTEND
  html5: {
    name: "HTML5",
    src: "html5",
    txt: "Frontend",
    level: 5,
    tema: "#61dafb",
    icon: SiHtml5,
  },
  css3: {
    name: "CSS3",
    src: "css3",
    txt: "Frontend",
    level: 5,
    tema: "#61dafb",
    icon: SiCss3,
  },
  javascript: {
    name: "JavaScript",
    src: "javascript",
    txt: "Frontend",
    level: 4,
    tema: "#61dafb",
    icon: SiJavascript,
  },
  typescript: {
    name: "TypeScript",
    src: "typescript",
    txt: "Frontend",
    level: 4,
    tema: "#61dafb",
    icon: SiTypescript,
  },
  react: {
    name: "React",
    src: "react",
    txt: "Frontend",
    level: 4,
    tema: "#61dafb",
    icon: SiReact,
  },
  vuejs: {
    name: "Vue.js",
    src: "vuejs",
    txt: "Frontend",
    level: 3,
    tema: "#61dafb",
    icon: SiVuedotjs,
  },
  bootstrap: {
    name: "Bootstrap",
    src: "bootstrap",
    txt: "Frontend",
    level: 4,
    tema: "#61dafb",
    icon: SiBootstrap,
  },
  tailwindcss: {
    name: "Tailwind CSS",
    src: "tailwindcss",
    txt: "Frontend",
    level: 3,
    tema: "#61dafb",
    icon: SiTailwindcss,
  },
  vite: {
    name: "Vite",
    src: "vite",
    txt: "Ferramentas",
    level: 3,
    tema: "#3c873a",
    icon: SiVite,
  },
  npm: {
    name: "NPM",
    src: "npm",
    txt: "Ferramentas",
    level: 4,
    tema: "#3c873a",
    icon: SiNpm,
  },
  bun: {
    name: "Bun",
    src: "bun",
    txt: "Ferramentas",
    level: 2,
    tema: "#3c873a",
    icon: SiBun,
  },

  // BACKEND
  csharp: {
    name: "C#",
    src: "csharp",
    txt: "Backend",
    level: 4,
    tema: "#a56eff",
    icon: FaCode,
  },
  dotnet: {
    name: ".NET Core",
    src: "dot-net",
    txt: "Backend",
    level: 4,
    tema: "#a56eff",
    icon: SiDotnet,
  },
  aspnetcore: {
    name: "ASP.NET Core",
    src: "asp-net",
    txt: "Backend",
    level: 4,
    tema: "#a56eff",
    icon: SiDotnet,
  },
  spring: {
    name: "Spring",
    src: "spring",
    txt: "Backend",
    level: 3,
    tema: "#a56eff",
    icon: SiSpring,
  },
  java: {
    name: "Java",
    src: "java",
    txt: "Backend",
    level: 4,
    tema: "#a56eff",
    icon: FaJava,
  },
  python: {
    name: "Python",
    src: "python",
    txt: "Backend",
    level: 3,
    tema: "#a56eff",
    icon: SiPython,
  },
  nodejs: {
    name: "Node.js",
    src: "nodejs",
    txt: "Backend",
    level: 3,
    tema: "#a56eff",
    icon: SiNodedotjs,
  },
  express: {
    name: "Express",
    src: "express",
    txt: "Backend",
    level: 3,
    tema: "#a56eff",
    icon: SiExpress,
  },
  fastapi: {
    name: "FastAPI",
    src: "fastapi",
    txt: "Backend",
    level: 2,
    tema: "#a56eff",
    icon: SiFastapi,
  },
  rabbitmq: {
    name: "RabbitMQ",
    src: "rabbitmq",
    txt: "Backend",
    level: 2,
    tema: "#a56eff",
    icon: SiRabbitmq,
  },
  git: {
    name: "Git",
    src: "git",
    txt: "Ferramentas",
    level: 4,
    tema: "#3c873a",
    icon: SiGit,
  },
  github: {
    name: "GitHub",
    src: "github",
    txt: "Ferramentas",
    level: 5,
    tema: "#3c873a",
    icon: SiGithub,
  },
  docker: {
    name: "Docker",
    src: "docker",
    txt: "DevOps",
    level: 3,
    tema: "#1e90ff",
    icon: SiDocker,
  },
  linux: {
    name: "Linux / WSL",
    src: "linux",
    txt: "DevOps",
    level: 3,
    tema: "#1e90ff",
    icon: SiLinux,
  },

  // DATABASE
  SqlServer: {
    name: "SQL Server",
    src: "SqlServer",
    txt: "Banco de Dados",
    level: 4,
    tema: "#fad222ff",
    icon: FaDatabase,
  },
  mongodb: {
    name: "MongoDB",
    src: "mongodb",
    txt: "Banco de Dados",
    level: 4,
    tema: "#fad222ff",
    icon: SiMongodb,
  },
  mysql: {
    name: "MySQL",
    src: "mysql",
    txt: "Banco de Dados",
    level: 3,
    tema: "#fad222ff",
    icon: SiMysql,
  },
};

export const ProjetosData = [
  {
    name: "TaskFlow",
    video: "https://www.youtube.com/embed/IyeQJJ6uFxQ",
    github: "https://github.com/Vitor-S-G-C/TaskFlow",
    description:
      "Sistema de gestão de tarefas desenvolvido em ASP.NET Core MVC com arquitetura em camadas. Permite criar, editar, listar, filtrar, concluir e excluir tarefas com validações server-side e interface responsiva.",
    techs: [
      { name: ".NET", src: "dot-net", txt: "Backend", tema: "#a56eff", icon: SiDotnet },
      {
        name: "Bootstrap",
        src: "bootstrap",
        txt: "Frontend",
        tema: "#61dafb",
        icon: SiBootstrap,
      },
      {
  name: "SQL Server",
  src: "SqlServer",
  txt: "Banco de Dados",
  level: 4,
  tema: "#fad222ff",
  icon: FaDatabase,
},
    ],
  },
  {
    name: "Projeto de Delivery",
    video: "https://www.youtube.com/embed/LXKtiyKVIJk",
    github: "https://github.com/Vitor-S-G-C/lanchonete",
    description:
      "Site de delivery para um restaurante fictício, com menu interativo e sistema de pedidos online.",
    techs: [
      { name: "React", src: "react", txt: "Frontend", tema: "#61dafb", icon: SiReact },
      {
        name: "TypeScript",
        src: "typescript",
        txt: "Frontend",
        tema: "#61dafb",
        icon: SiTypescript,
      },
      {
        name: "Bootstrap",
        src: "bootstrap",
        txt: "Frontend",
        tema: "#61dafb",
        icon: SiBootstrap,
      },
      { name: "Vite", src: "vite", txt: "Frontend", tema: "#61dafb", icon: SiVite },
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
        icon: SiJavascript,
      },
      { name: "Vue.js", src: "vuejs", txt: "Frontend", tema: "#61dafb", icon: SiVuedotjs },
      { name: "Python", src: "python", txt: "Backend", tema: "#a56eff", icon: SiPython },
      { name: "FastAPI", src: "fastapi", txt: "Backend", tema: "#a56eff", icon: SiFastapi },
      {
        name: "MongoDB",
        src: "mongodb",
        txt: "Banco de Dados",
        tema: "#fad222ff",
        icon: SiMongodb,
      },
      { name: "Docker", src: "docker", txt: "Backend", tema: "#a56eff", icon: SiDocker },
      { name: "GitHub", src: "github", txt: "Ferramentas", tema: "#3c873a", icon: SiGithub },
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
        icon: SiJavascript,
      },
      { name: "HTML5", src: "html5", txt: "Frontend", tema: "#61dafb", icon: SiHtml5 },
      { name: "CSS3", src: "css3", txt: "Frontend", tema: "#61dafb", icon: SiCss3 },
    ],
  },
];

export const CertificadosData = [
  {
    id: 1,
    nome: "Desenvolvimento Web Front-End",
    cargaHoraria: "180 horas",
    instituicao: "Codi Academy / CRITT – UFJF",
    periodo: "2024 - 2025",
    arquivo: Desenvolvimento_Web_FrontEnd,
  },
  {
    id: 2,
    nome: "Programação Orientada a Objetos (POO)",
    cargaHoraria: "5 horas",
    instituicao: "Fundação Bradesco",
    periodo: "2025",
    arquivo: Poo,
  },

  {
    id: 3,
    nome: "Desenvolvimento Mobile",
    cargaHoraria: "15 horas",
    instituicao: "Fundação Bradesco",
    periodo: "2025",
    arquivo: Desenvolvimento_Mobile,
  },
  {
    id: 4,
    nome: "HTML, CSS e JavaScript",
    cargaHoraria: "2 horas",
    instituicao: "Fundação Bradesco",
    periodo: "2025",
    arquivo: HTML_CSS_JS_basico,
  },
];


