import { Box, Typography, Stack, Chip, Paper } from "@mui/material";
import {
  SiReact,
  SiTypescript,
  SiGit,
  SiVite,
  SiNodedotjs,
  SiTailwindcss,
  SiSpringboot,
  SiPython,
  SiNpm,
  SiMysql
} from "react-icons/si";

export default function Hero() {
  return (
    <>
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
          bgcolor: "rgba(14, 14, 14, 0.8)",
          backdropFilter: "blur(10px)",
          color: "white",
          textAlign: { xs: "center", md: "left" },
          boxShadow: "0 8px 24px rgba(21, 0, 0, 0.4)",
          marginTop: "5rem",
          marginBottom: "10rem",
        }}
      >
        {/* Texto e tecnologias */}
        <Box sx={{ maxWidth: 800, height: 450 }}>
          <Typography
            variant="h3"
            fontWeight={600}
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
            }}>
            Sou um desenvolvedor apaixonado por tecnologia e pelo ecossistema
            web. Gosto de atuar tanto no front-end quanto no back-end,
            explorando como cada parte se conecta para criar aplicações
            completas, performáticas e bem estruturadas. Este portfólio reúne
            projetos e experiências que refletem meu foco em usabilidade, design
            moderno e boas práticas de código — sempre buscando unir
            funcionalidade e estética em cada solução.
          </Typography>

          {/* Tecnologias */}
          <Stack
            direction="row"
            spacing={1}
            flexWrap="wrap"
            justifyContent={{ xs: "center", md: "flex-start" }}
          >
            <Chip
              icon={<SiReact size={20} />}
              label="React"
              sx={{
                bgcolor: "#1e1e1e",
                color: "#61dafb",
                fontWeight: 500,
                margin: 15,
              }}
            />
            <Chip
              icon={<SiTypescript size={20} />}
              label="TypeScript"
              sx={{ bgcolor: "#1e1e1e", color: "#61dafb", fontWeight: 500 }}
            />
            <Chip
              icon={<SiTailwindcss size={20} />}
              label="Tailwindcss"
              sx={{ bgcolor: "#1e1e1e", color: "#61dafb", fontWeight: 500 }}
            />

            <Chip
              icon={<SiVite size={20} />}
              label="Vite"
              sx={{ bgcolor: "#1e1e1e", color: "#61dafb", fontWeight: 500 }}
            />
            <Chip
              icon={<SiNodedotjs size={20} />}
              label="Node.js"
              sx={{ bgcolor: "#1e1e1e", color: "#a56eff", fontWeight: 500 }}
            />
            <Chip
              icon={<SiPython size={20} />}
              label="Python"
              sx={{ bgcolor: "#1e1e1e", color: "#a56eff", fontWeight: 500 }}
            />
            <Chip
              icon={<SiSpringboot size={20} />}
              label="Springboot"
              sx={{ bgcolor: "#1e1e1e", color: "#a56eff", fontWeight: 500 }}
            />
            <Chip
              icon={<SiGit size={20} />}
              label="Git"
              sx={{ bgcolor: "#1e1e1e", color: "#3c873a", fontWeight: 500 }}
            />
            <Chip
              icon={<SiNpm size={20} />}
              label="NPM"
              sx={{ bgcolor: "#1e1e1e", color: "#3c873a", fontWeight: 500 }}
            />
            <Chip
              icon={<SiMysql size={20} />}
              label="Mysql"
              sx={{ bgcolor: "#1e1e1e", color: "#fad222ff", fontWeight: 500 }}
            />
          </Stack>
        </Box>
      </Paper>
    </>
  );
};
