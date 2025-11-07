import { Box, Typography, Stack, Avatar, Chip, Paper } from "@mui/material";
import {
  SiReact,
  SiTypescript,
  SiMui,
  SiVite,
  SiNodedotjs,
} from "react-icons/si";

export default function Hero() {
  return (
    <Paper
      id="hero"
      elevation={3}
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        alignItems: "center",
        justifyContent: "center",
        gap: 6,
        py: { xs: 6, md: 10 },
        px: { xs: 3, md: 6 },
        borderRadius: "20px",
        bgcolor: "rgba(25, 25, 25, 0.8)",
        backdropFilter: "blur(10px)",
        color: "white",
        textAlign: { xs: "center", md: "left" },
        boxShadow: "0 8px 24px rgba(0, 0, 0, 0.4)",
      }}
    >
      {/* Avatar */}
      <Avatar
        src="/img/foto-perfil.jpg"
        alt="Vitor Gamarano"
        sx={{
          width: 180,
          height: 180,
          border: "3px solid #4caf50",
          boxShadow: "0 0 20px rgba(76, 175, 80, 0.3)",
        }}
      />

      {/* Texto e tecnologias */}
      <Box sx={{ maxWidth: 600 }}>
        <Typography
          variant="h3"
          fontWeight={700}
          sx={{
            background: "linear-gradient(90deg, #4caf50, #81c784)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Olá, eu sou o Vitor
        </Typography>

        <Typography
          variant="body1"
          sx={{
            mt: 2,
            color: "#bdbdbd",
            lineHeight: 1.6,
          }}
        >
          Sou um desenvolvedor apaixonado por tecnologia, dados e automação.
          Este portfólio reflete minha trajetória, reunindo projetos e
          experiências que valorizam performance, design moderno e boas práticas
          de código.
        </Typography>

        {/* Tecnologias */}
        <Stack
          direction="row"
          spacing={1.5}
          mt={4}
          flexWrap="wrap"
          justifyContent={{ xs: "center", md: "flex-start" }}
        >
          <Chip
            icon={<SiReact size={18} />}
            label="React"
            sx={{ bgcolor: "#1e1e1e", color: "#61dafb", fontWeight: 500 }}
          />
          <Chip
            icon={<SiTypescript size={18} />}
            label="TypeScript"
            sx={{ bgcolor: "#1e1e1e", color: "#3178c6", fontWeight: 500 }}
          />
          <Chip
            icon={<SiMui size={18} />}
            label="MUI"
            sx={{ bgcolor: "#1e1e1e", color: "#00b0ff", fontWeight: 500 }}
          />
          <Chip
            icon={<SiVite size={18} />}
            label="Vite"
            sx={{ bgcolor: "#1e1e1e", color: "#a56eff", fontWeight: 500 }}
          />
          <Chip
            icon={<SiNodedotjs size={18} />}
            label="Node.js"
            sx={{ bgcolor: "#1e1e1e", color: "#3c873a", fontWeight: 500 }}
          />
        </Stack>
      </Box>
    </Paper>
  );
}
