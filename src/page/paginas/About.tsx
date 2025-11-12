import {
  Box,
  Typography,
  Chip,
  Paper,
  useMediaQuery,
} from "@mui/material";

import { FaJava } from "react-icons/fa";

import {
  SiReact,
  SiTypescript,
  SiGit,
  SiVite,
  SiNodedotjs,
  SiTailwindcss,
  SiPython,
  SiNpm,
  SiMysql,
} from "react-icons/si";

export default function Hero() {
  const isMobile = useMediaQuery("(max-width:600px)");

  const techs = [
    { icon: <SiReact />, label: "React", color: "#61dafb" },
    { icon: <SiTypescript />, label: "TypeScript", color: "#3178c6" },
    { icon: <SiTailwindcss />, label: "TailwindCSS", color: "#38bdf8" },
    { icon: <SiVite />, label: "Vite", color: "#a56eff" },
    { icon: <SiNodedotjs />, label: "Node.js", color: "#83cd29" },
    { icon: <SiPython />, label: "Python", color: "#ffd43b" },
    { icon: <FaJava />, label: "Java", color: "#6db33f" },
    { icon: <SiGit />, label: "Git", color: "#f1502f" },
    { icon: <SiNpm />, label: "NPM", color: "#cb3837" },
    { icon: <SiMysql />, label: "MySQL", color: "#00758f" },
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
            background: "linear-gradient(90deg, #4caf50, #81c784)",
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
          Sou um desenvolvedor apaixonado pelo ecossistema web, atuando tanto no
          front-end quanto no back-end. Gosto de entender como cada parte se
          conecta para criar aplicações completas, performáticas e bem
          estruturadas. Este portfólio reflete minha busca por unir
          funcionalidade, design moderno e boas práticas de código.
        </Typography>
      </Box>

      {/* Seção das tecnologias */}
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
        {techs.map((tech, index) => (
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
    </Paper>
  );
}
