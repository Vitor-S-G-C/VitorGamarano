import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";

type Language = "pt" | "en";

interface LanguageContextValue {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (path: string) => string;
}

const translations: Record<Language, Record<string, any>> = {
  pt: {
    nav: {
      inicio: "Início",
      habilidades: "Minhas Tecnologias",
      projetos: "Projetos",
      experiencia: "Experiência",
      contato: "Contato",
    },
    header: {
      role: "Engenheiro de Software",
      description: "Transformo ideias em soluções escaláveis",
      downloadTooltip: "Baixar Currículo em Formato PDF",
    },
    hero: {
      greeting: "Oi, eu sou",
      title: "Desenvolvedor Back-end & Full Stack",
      description:
        "Sou programador júnior com experiência em ASP.NET Core, C#, SQL Server e APIs. No frontend, trabalho com React, TypeScript, Bootstrap e Tailwind. Aplicador de SOLID, POO e padrões de design, participante de hackathons e apaixonado por construir soluções robustas e escaláveis.",
      buttonProjects: "Ver Projetos",
      buttonContact: "Entre em Contato",
    },
    tecnologias: {
      heading: "Tecnologias que Uso no Trabalho",
      subheading: "Stack real que uso hoje no trabalho e já apliquei em projetos desenvolvidos por mim.",
      link: "Ver projetos com essa stack",
      current: "Uso atualmente",
    },
    experiencia: {
      heading: "Experiência",
      subheading: "Atuação com sistemas legados, evolução de produtos e entregas full-stack orientadas a negócio.",
      activitiesTitle: "Principais Atividades:",
      skillsTitle: "Habilidades & Conceitos Técnicos",
    },
    projetos: {
      heading: "Projetos em Destaque",
      subheading: "Soluções full stack com foco em APIs, integrações e interfaces modernas.",
      ctaAll: "Ver todos os projetos",
      projectLink: "Ver Projeto",
      github: "GitHub",
    },
    contact: {
      heading: "Vamos construir algo sólido",
      body: "Disponível para conversar sobre oportunidades em backend, desenvolvimento full stack e evolução de produtos com foco em performance e qualidade técnica.",
    },
    language: {
      label: "Idioma",
      portuguese: "Português",
      english: "English",
    },
    download: {
      button: "Baixar Currículo",
      tooltip: "Baixar Currículo em Formato PDF",
    },
    cv: {
      summary: "Resumo",
      experiences: "Experiências",
      education: "Educação",
      skills: "Habilidades",
      languages: "Idiomas",
      projects: "Projetos Pessoais",
      certifications: "Certificações",
      skillCategories: {
        backend: "Backend",
        frontend: "Frontend",
        tools: "Ferramentas",
        os: "Sistemas Operacionais",
        softSkills: "Soft Skills",
      },
      expectedCompletion: "Previsão de conclusão",
    },
  },
  en: {
    nav: {
      inicio: "Home",
      habilidades: "Technologies",
      projetos: "Projects",
      experiencia: "Experience",
      contato: "Contact",
    },
    header: {
      role: "Software Engineer",
      description: "I turn ideas into scalable solutions",
      downloadTooltip: "Download resume as PDF",
    },
    hero: {
      greeting: "Hi, I am",
      title: "Back-end Developer & Full Stack",
      description:
        "I am a junior developer with experience in ASP.NET Core, C#, SQL Server and APIs. On the frontend, I work with React, TypeScript, Bootstrap and Tailwind. I apply SOLID, OOP and design patterns, participate in hackathons, and love building robust and scalable solutions.",
      buttonProjects: "See Projects",
      buttonContact: "Contact Me",
    },
    tecnologias: {
      heading: "Technologies I Use at Work",
      subheading: "Real stack I use at work and have already applied in projects developed by me.",
      link: "See projects using this stack",
      current: "Currently using",
    },
    experiencia: {
      heading: "Experience",
      subheading: "Work with legacy systems, product evolution, and business-focused full-stack delivery.",
      activitiesTitle: "Main Activities:",
      skillsTitle: "Technical Skills & Concepts",
    },
    projetos: {
      heading: "Featured Projects",
      subheading: "Full stack solutions focused on APIs, integrations and modern interfaces.",
      ctaAll: "See all projects",
      projectLink: "View Project",
      github: "GitHub",
    },
    contact: {
      heading: "Let's build something solid",
      body: "Available to talk about backend opportunities, full-stack development, and product evolution with a focus on performance and technical quality.",
    },
    language: {
      label: "Language",
      portuguese: "Português",
      english: "English",
    },
    download: {
      button: "Download CV",
      tooltip: "Download resume as PDF",
    },
    cv: {
      summary: "Summary",
      experiences: "Experience",
      education: "Education",
      skills: "Skills",
      languages: "Languages",
      projects: "Personal Projects",
      certifications: "Certifications",
      skillCategories: {
        backend: "Backend",
        frontend: "Frontend",
        tools: "Tools",
        os: "Operating Systems",
        softSkills: "Soft Skills",
      },
      expectedCompletion: "Expected completion",
    },
  },
};

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);

function getTranslation(language: Language, path: string) {
  const value = path.split(".").reduce((current: any, key) => {
    if (current && typeof current === "object") {
      return current[key];
    }
    return undefined;
  }, translations[language]);

  return typeof value === "string" ? value : path;
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>(() => {
    if (typeof window === "undefined") return "pt";
    const stored = window.localStorage.getItem("portfolio-language");
    return stored === "en" ? "en" : "pt";
  });

  useEffect(() => {
    window.localStorage.setItem("portfolio-language", language);
  }, [language]);

  const value = useMemo(
    () => ({
      language,
      setLanguage,
      t: (path: string) => getTranslation(language, path),
    }),
    [language],
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
