import {
  Box,
  Container,
  Typography,
  Paper,
  Chip,
  Card,
  CardContent,
} from "@mui/material";
import { SiDotnet, SiReact, SiTypescript } from "react-icons/si";
import { FaDatabase } from "react-icons/fa";

export default function Experiencia() {
  const experiencias = [
    {
      titulo: "Programador Júnior - Desenvolvimento ASP.NET Core / C#",
      empresa: "AltPermut",
      periodo: "12/2025 - Atual",
      descricao:
        "Manutenção e atualização de software legado em ASP.NET Core 4.5 e C#. Implementação de novas funcionalidades em sistema. Integração com SQL Server e APIs internas. Colaboração com supervisor técnico em projetos full-stack.",
      responsabilidades: [
        "Manutenção e atualização de software legado em ASP.NET Core 4.5 e C#",
        "Implementação de novas funcionalidades em sistema",
        "Integração com SQL Server e APIs internas",
        "Aplicação de boas práticas, princípios SOLID e padrões de design",
        "Colaboração com supervisor técnico em projetos full-stack",
      ],
      tecnologias: [
        { name: "C#", icon: SiDotnet, cor: "#a56eff" },
        { name: "ASP.NET Core", icon: SiDotnet, cor: "#a56eff" },
        { name: "SQL Server", icon: FaDatabase, cor: "#fad222ff" },
      ],
    },
    {
      titulo: "Desenvolvedor Full-Stack - Hackathons",
      empresa: "HackMeridian",
      periodo: "2025",
      descricao:
        "Participante de hackathon HackMeridian, conquistando 2º lugar na categoria principal. Desenvolvimento de solução full-stack integrando múltiplas tecnologias.",
      responsabilidades: [
        "Desenvolvimento full-stack em ambiente de hackathon",
        "Integração de React, TypeScript, Python e Docker",
        "Implementação rápida de funcionalidades",
        "Trabalho colaborativo em equipe sob pressão",
        "Criação de solução inovadora que conquistou 2º lugar",
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
        position: "relative",
        minHeight: "100vh",
        py: 10,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden",
        backgroundColor: "#050505",
      }}
    >
      <Container
        maxWidth="lg"
        sx={{
          position: "relative",
          zIndex: 1,
        }}
      >
        <Typography
          variant="h4"
          sx={{
            color: "primary.main",
            fontWeight: "bold",
            textAlign: "center",
            mb: 8,
            fontFamily: "-apple-system, Roboto, sans-serif",
            fontSize: 42,
          }}
        >
          Experiência 
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
              <Paper
                elevation={3}
                sx={{
                  p: 3,
                  bgcolor: "rgba(14, 14, 14, 0.8)",
                  backdropFilter: "blur(10px)",
                  color: "white",
                  height: "100%",
                  borderLeft: "4px solid",
                  borderLeftColor:
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
                      color: "#bdbdbd",
                      mb: 0.5,
                    }}
                  >
                    {exp.empresa}
                  </Typography>
                  <Typography
                    variant="caption"
                    sx={{
                      color: "#1976d2",
                      fontWeight: "bold",
                    }}
                  >
                    {exp.periodo}
                  </Typography>
                </Box>

                <Typography
                  variant="body2"
                  sx={{
                    color: "#bdbdbd",
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
                        color: "#1976d2",
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
                        color: "#bdbdbd",
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
                        }}
                      />
                    ))}
                  </Box>
                )}
              </Paper>
            </Box>
          ))}
        </Box>

        {/* Seção de Habilidades & Conceitos */}
        <Paper
          elevation={3}
          sx={{
            p: 4,
            mt: 6,
            bgcolor: "rgba(14, 14, 14, 0.8)",
            backdropFilter: "blur(10px)",
            color: "white",
          }}
        >
          <Typography
            variant="h5"
            sx={{
              fontWeight: "bold",
              mb: 3,
              color: "#1976d2",
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
                <Card
                  sx={{
                    bgcolor: "#111122",
                    border: "1px solid rgba(25, 118, 210, 0.3)",
                  }}
                >
                  <CardContent>
                    <Typography
                      variant="h6"
                      sx={{
                        color: "#1976d2",
                        fontWeight: "bold",
                        mb: 1.5,
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
                            color: "#bdbdbd",
                            pl: 1,
                            borderLeft: "2px solid #1976d2",
                          }}
                        >
                          {item}
                        </Typography>
                      ))}
                    </Box>
                  </CardContent>
                </Card>
              </Box>
            ))}
          </Box>
        </Paper>
      </Container>
    </Box>
  );
}
