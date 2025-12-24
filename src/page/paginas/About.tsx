import {
  Box,
  Typography,
  Chip,
  Paper,
  useMediaQuery,
} from "@mui/material";

import {  FaDatabase } from "react-icons/fa";

import {
  SiReact,
  SiTypescript,
  SiDotnet,
  SiGithub,
} from "react-icons/si";
import { DownloadCurriculo } from "../../componentes/DownloadCurriculo";

export default function Hero() {
  const isMobile = useMediaQuery("(max-width:600px)");
  // Top 5 tecnologias principais
  const topTechs = [
    { icon: <SiReact />, label: "React", color: "#61dafb" },
    { icon: <SiTypescript />, label: "TypeScript", color: "#61dafb" },
    { icon: <SiDotnet />, label: ".NET", color: "#a56eff" },
    { icon: <FaDatabase />, label: "SQL Server", color: "#fad222ff" },
    { icon: <SiGithub />, label: "GitHub", color: "#3c873a" },
  ];

  return (
    <Paper
      id="hero"
      elevation={3}
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        py: { xs: 6, md: 10 },
        px: { xs: 3, md: 8 },
        bgcolor: "rgba(14, 14, 14, 0.8)",
        backdropFilter: "blur(10px)",
        color: "white",
        textAlign: "center",
        boxShadow: "0 8px 24px rgba(21, 0, 0, 0.4)",
        borderRadius: "20px",
        margin: "6rem auto",
        maxWidth: "1100px",
      }}
    >
      {/* Texto principal */}
      <Box sx={{ maxWidth: 800 }}>
        <Typography
          variant="h3"
          fontWeight={600}
          sx={{
            background: "linear-gradient(90deg, #1976d2ab, #1976d2)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            mb: 2,
          }}
        >
          Olá, eu sou o Vitor
        </Typography>

        <Typography
          variant="body1"
          sx={{
            mt: 2,
            color: "#bdbdbd",
            lineHeight: 1.7,
            fontSize: { xs: "1rem", md: "1.1rem" },
            px: { xs: 1, md: 6 },
          }}
        >
          Sou um programador júnior com experiência em <strong>ASP.NET Core 4.5 e 8</strong>, especializado em <strong>C#</strong>. 
          Trabalho com manutenção de software legado e implementação de novas funcionalidades, integrando <strong>SQL Server</strong> e APIs internas. 
          No frontend, tenho experiência com <strong>React, TypeScript, Bootstrap e Tailwind</strong>. 
          Aplicador de <strong>SOLID, POO e padrões de design</strong>, participante de hackathons como <strong>HackMeridian (2º lugar)</strong>. 
          Busco crescimento técnico desenvolvendo soluções robustas e escaláveis.
        </Typography>
      </Box>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "repeat(2, 1fr)",
            sm: "repeat(3, 1fr)",
            md: "repeat(5, 1fr)",
          },
          gap: 2.5,
          mt: 6,
          width: "100%",
          maxWidth: "800px",
          justifyItems: "center",
        }}
      >
        {topTechs.map((tech, index) => (
          <Chip
            key={index}
            icon={tech.icon}
            label={tech.label}
            sx={{
              bgcolor: "#1e1e1e",
              color: tech.color,
              fontWeight: 500,
              width: isMobile ? "120px" : "140px",
              justifyContent: "flex-start",
              "&:hover": {
                transform: "scale(1.05)",
                boxShadow: `0 0 10px ${tech.color}80`,
                transition: "all 0.2s ease-in-out",
              },
            }}
          />
        ))}
      </Box>

      <Box sx={{ mt: 6 }}>
        <DownloadCurriculo />
      </Box>
    </Paper>
  );
}
