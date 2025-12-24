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
      titulo: "Programador Júnior - Desenvolvimento .NET",
      empresa: "Projetos Pessoais & Estudo",
      periodo: "2024 - Presente",
      descricao:
        "Desenvolvimento de aplicações backend robustas utilizando ASP.NET Core com C#. Foco em arquitetura limpa, padrões SOLID e boas práticas de desenvolvimento.",
      responsabilidades: [
        "Desenvolvimento de APIs REST escaláveis com ASP.NET Core",
        "Integração com bancos de dados SQL Server e MongoDB",
        "Implementação de padrões de design e princípios SOLID",
        "Containerização de aplicações com Docker",
        "Versionamento de código com Git/GitHub",
      ],
      tecnologias: [
        { name: "C#", icon: SiDotnet, cor: "#a56eff" },
        { name: ".NET Core", icon: SiDotnet, cor: "#a56eff" },
        { name: "SQL Server", icon: FaDatabase, cor: "#fad222ff" },
        { name: "MongoDB", icon: FaDatabase, cor: "#fad222ff" },
      ],
    },
    {
      titulo: "Desenvolvedor Full-Stack - React & TypeScript",
      empresa: "Projetos Pessoais",
      periodo: "2023 - Presente",
      descricao:
        "Construção de interfaces modernas e responsivas utilizando React com TypeScript. Integração com APIs backend e consumo de dados.",
      responsabilidades: [
        "Desenvolvimento de componentes React reutilizáveis",
        "Tipagem estática com TypeScript",
        "Estilização com Material-UI e Styled Components",
        "Integração com APIs REST",
        "Otimização de performance e lazy loading",
      ],
      tecnologias: [
        { name: "React", icon: SiReact, cor: "#61dafb" },
        { name: "TypeScript", icon: SiTypescript, cor: "#61dafb" },
        { name: ".NET API", icon: SiDotnet, cor: "#a56eff" },
      ],
    },
    {
      titulo: "Experiência Profissional Anterior",
      empresa: "Atendimento & Operações",
      periodo: "2020 - 2023",
      descricao:
        "Experiência em atendimento ao cliente e operações, desenvolvendo soft skills essenciais para trabalho em equipe.",
      responsabilidades: [
        "Atendimento de clientes",
        "Trabalho em equipe colaborativa",
        "Organização e gestão de tempo",
        "Proatividade e resolução de problemas",
        "Comunicação efetiva",
      ],
      tecnologias: [],
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
          Experiência Profissional
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
              { title: "Arquitetura", items: ["MVC", "MVVM", "Clean Architecture", "Domain-Driven Design"] },
              {
                title: "Padrões de Projeto",
                items: ["SOLID", "Repository Pattern", "Dependency Injection", "Factory Pattern"],
              },
              {
                title: "Desenvolvimento",
                items: ["APIs REST", "Full-Stack Development", "Responsive Design", "Performance Optimization"],
              },
              {
                title: "DevOps & Ferramentas",
                items: ["Docker", "Git/GitHub", "Linux/WSL", "CI/CD Concepts"],
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
