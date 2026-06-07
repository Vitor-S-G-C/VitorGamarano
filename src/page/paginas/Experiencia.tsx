import {
  Box,
  Typography,
  Chip,
} from "@mui/material";
import { SiDotnet, SiReact, SiTypescript } from "react-icons/si";
import { FaDatabase } from "react-icons/fa";

export default function Experiencia() {
  const experiencias = [
    {
      titulo: "Programador Júnior - Desenvolvimento ASP.NET Framework / C#",
      empresa: "AltPermuta",
      periodo: "12/2025 - Atual",
      descricao:
        "Atuação em sistema legado corporativo com ASP.NET Framework 4.5.2 e C#, desenvolvendo novas funcionalidades, atualizando layouts e realizando sustentação técnica em produção.",
      responsabilidades: [
        "Manutenção e evolução de sistema legado em ASP.NET Framework 4.5.2 e C#",
        "Desenvolvimento de novas funcionalidades para ambiente empresarial",
        "Atualização de layouts para melhorar usabilidade da plataforma",
        "Correção de falhas críticas no sistema de moeda digital",
        "Integração com SQL Server e APIs internas",
        "Aplicação de boas práticas, princípios SOLID e padrões de design",
      ],
      tecnologias: [
        { name: "C#", icon: SiDotnet, cor: "#a56eff" },
        { name: "ASP.NET Framework", icon: SiDotnet, cor: "#a56eff" },
        { name: "SQL Server", icon: FaDatabase, cor: "#fad222ff" },
      ],
    },
    {
      titulo: "Desenvolvedor de Software - Autônomo",
      empresa: "Projetos Freelance",
      periodo: "05/2026 - Atual",
      descricao:
        "Desenvolvimento de sistemas web e landing pages sob demanda com foco em responsividade, experiência de usuário e entregas rápidas.",
      responsabilidades: [
        "Desenvolvimento de sistemas e landing pages para diferentes necessidades",
        "Implementação de interfaces responsivas e modernas",
        "Construção de funcionalidades personalizadas com foco em negócio",
        "Atuação full stack com .NET Core, Angular e TypeScript",
      ],
      tecnologias: [
        { name: "React", icon: SiReact, cor: "#61dafb" },
        { name: "TypeScript", icon: SiTypescript, cor: "#61dafb" },
        { name: ".NET Core", icon: SiDotnet, cor: "#a56eff" },
      ],
    },
  ];

  return (
    <Box
      id="experiencia"
      sx={{
        background: "var(--panel-bg)",
        border: "1px solid var(--panel-border)",
        borderRadius: 6,
        px: { xs: 2, md: 3 },
        py: { xs: 2.5, md: 3 },
      }}
    >
      <Box>
        <Typography
          variant="h5"
          sx={{
            color: "var(--text-main)",
            fontWeight: 800,
            mb: 0.7,
            fontFamily: "var(--font-display)",
          }}
        >
          Experiência
        </Typography>
        <Typography sx={{ color: "var(--text-muted)", mb: 2.5 }}>
          Atuação com sistemas legados, evolução de produtos e entregas full stack orientadas a negócio.
        </Typography>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "repeat(2, 1fr)" },
            gap: 3,
          }}
        >
          {experiencias.map((exp, index) => (
            <Box key={index}>
              <Box
                sx={{
                  p: 3,
                  bgcolor: "rgba(7, 13, 28, 0.88)",
                  color: "white",
                  height: "100%",
                  borderRadius: 5,
                  border: "1px solid rgba(93, 145, 255, 0.12)",
                  boxShadow: "0 16px 40px rgba(2, 8, 24, 0.25)",
                  borderTop: "3px solid",
                  borderTopColor:
                    index === 0
                      ? "#a56eff"
                      : index === 1
                        ? "#61dafb"
                        : "#fad222ff",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    transform: "translateY(-5px)",
                    boxShadow: "0 8px 24px rgba(25, 118, 210, 0.3)",
                  },
                }}
              >
                <Box sx={{ mb: 2 }}>
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: "bold",
                      color: "#fff",
                      mb: 0.5,
                    }}
                  >
                    {exp.titulo}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      color: "var(--text-muted)",
                      mb: 0.5,
                    }}
                  >
                    {exp.empresa}
                  </Typography>
                  <Typography
                    variant="caption"
                    sx={{
                      color: "var(--brand)",
                      fontWeight: "bold",
                    }}
                  >
                    {exp.periodo}
                  </Typography>
                </Box>

                <Typography
                  variant="body2"
                  sx={{
                    color: "var(--text-muted)",
                    mb: 2,
                    lineHeight: 1.6,
                  }}
                >
                  {exp.descricao}
                </Typography>

                {exp.responsabilidades.length > 0 && (
                  <Box sx={{ mb: 2 }}>
                    <Typography
                      variant="subtitle2"
                      sx={{
                        color: "var(--brand)",
                        fontWeight: "bold",
                        mb: 1,
                      }}
                    >
                      Principais Atividades:
                    </Typography>
                    <Box
                      component="ul"
                      sx={{
                        pl: 2,
                        color: "var(--text-muted)",
                        fontSize: "0.875rem",
                        "& li": {
                          mb: 0.5,
                        },
                      }}
                    >
                      {exp.responsabilidades.map((resp, i) => (
                        <li key={i}>{resp}</li>
                      ))}
                    </Box>
                  </Box>
                )}

                {exp.tecnologias.length > 0 && (
                  <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                    {exp.tecnologias.map((tech, i) => (
                      <Chip
                        key={i}
                        icon={<tech.icon />}
                        label={tech.name}
                        sx={{
                          bgcolor: "#1e1e1e",
                          color: tech.cor,
                          fontWeight: 500,
                          fontSize: "0.75rem",
                          border: "1px solid rgba(93, 145, 255, 0.08)",
                        }}
                      />
                    ))}
                  </Box>
                )}
              </Box>
            </Box>
          ))}
        </Box>

        <Box
          sx={{
            p: { xs: 2.2, md: 3 },
            mt: 2.5,
            bgcolor: "rgba(7, 13, 28, 0.88)",
            color: "white",
            borderRadius: 5,
            border: "1px solid rgba(93, 145, 255, 0.12)",
          }}
        >
          <Typography
            variant="h6"
            sx={{
              fontWeight: "bold",
              mb: 3,
              color: "var(--text-main)",
            }}
          >
            Habilidades & Conceitos Técnicos
          </Typography>

          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", sm: "repeat(2, 1fr)", md: "repeat(4, 1fr)" },
              gap: 2,
            }}
          >
            {[
              { 
  title: "Arquitetura", 
  items: ["MVC", "MVVM", "Arquitetura Limpa", "Domain-Driven Design (DDD)"] 
},
{
  title: "Padrões de Projeto",
  items: ["SOLID", "Padrão Repository", "Injeção de Dependência", "Padrão Factory"],
},
{
  title: "Desenvolvimento",
  items: ["APIs REST", "Desenvolvimento Full-Stack", "Design Responsivo", "Otimização de Performance"],
},
{
  title: "DevOps & Ferramentas",
  items: ["Docker", "Git/GitHub"],
},

            ].map((categoria, idx) => (
              <Box key={idx}>
                <Box
                  sx={{
                    bgcolor: "rgba(255,255,255,0.02)",
                    border: "1px solid rgba(93, 145, 255, 0.08)",
                    borderRadius: 4,
                    p: 2,
                    height: "100%",
                  }}
                >
                  <Typography
                    variant="h6"
                    sx={{
                      color: "var(--brand)",
                      fontWeight: "bold",
                      mb: 1.5,
                      fontSize: "1rem",
                    }}
                  >
                    {categoria.title}
                  </Typography>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      gap: 0.8,
                    }}
                  >
                    {categoria.items.map((item, i) => (
                      <Typography
                        key={i}
                        variant="body2"
                        sx={{
                          color: "var(--text-muted)",
                          pl: 1,
                          borderLeft: "2px solid rgba(59, 130, 246, 0.4)",
                        }}
                      >
                        {item}
                      </Typography>
                    ))}
                  </Box>
                </Box>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
