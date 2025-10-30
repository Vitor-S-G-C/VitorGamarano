import { useState } from "react";
import {
  Box,
  Container,
  Typography,
  IconButton,
  styled,
  useTheme,
} from "@mui/material";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import { ProjetosData } from "../../../componentes/Componentes";
import { FaGithub } from "react-icons/fa";
import Particles from "react-tsparticles"; // 🔹 Animação de fundo

// 🔸 Estilo do container dos vídeos
const VideoContainer = styled("div")(({ theme }) => ({
  position: "relative",
  width: "100%",
  overflow: "hidden",
  borderRadius: 12,
  boxShadow: "0 4px 16px rgba(0,0,0,0.5)",
  "& video, & iframe": {
    width: "100%",
    height: "100%",
    display: "block",
    objectFit: "cover",
    borderRadius: 12,
  },
  [theme.breakpoints.down("md")]: { borderRadius: 8 },
  [theme.breakpoints.down("sm")]: { borderRadius: 6 },
}));

export default function Projetos() {
  const theme = useTheme();
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () =>
    setCurrentIndex((prev) =>
      prev === 0 ? ProjetosData.length - 1 : prev - 1
    );

  const handleNext = () =>
    setCurrentIndex((prev) =>
      prev === ProjetosData.length - 1 ? 0 : prev + 1
    );

  const currentProject = ProjetosData[currentIndex];

  return (
    <Box
      id="projetos"
      sx={{
        position: "relative",
        backgroundColor: "#050505",
        minHeight: "100vh",
        py: 10,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden",
      }}
    >
      {/* 🔹 ANIMAÇÃO DE FUNDO */}
      {/**<Box
        sx={{
          position: "absolute",
          inset: 0,
          zIndex: 0,
        }}
      >
        <Particles
          options={{
            background: { color: "#050505" },
            particles: {
              number: { value: 40 },
              color: { value: "#ffffff" },
              links: { enable: true, color: "#ffffff", distance: 120 },
              move: { enable: true, speed: 0.5 },
              opacity: { value: 0.3 },
              size: { value: 1 },
            },
          }}
        />
      </Box>
      =======================
      Arrumar animação de fundo futuramente
      ======================

*/}
      {/* 🔹 CONTEÚDO PRINCIPAL */}
      <Container
        maxWidth="lg"
        sx={{
          textAlign: "center",
          position: "relative",
          zIndex: 1,
        }}
      >
        <Typography
          variant="h4"
          sx={{
            color: "primary.main",
            fontWeight: "bold",
            mb: 6,
            fontFamily: "-apple-system, Roboto, sans-serif",
            fontSize: 42,
          }}
        >
          Meus Projetos
        </Typography>

        {/* 🧭 Carrossel de Projetos */}
        <Box sx={{ position: "relative", margin: "auto", maxWidth: 900 }}>
          {currentProject.video ? (
            currentProject.video.includes("youtube") ? (
              <VideoContainer style={{ height: 500 }}>
                <iframe
                  src={currentProject.video}
                  title={currentProject.name}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </VideoContainer>
            ) : (
              <VideoContainer style={{ height: 500 }}>
                <video src={currentProject.video} controls muted playsInline />
              </VideoContainer>
            )
          ) : (
            <Box
              component="img"
              alt={currentProject.name}
              sx={{
                width: "100%",
                height: 500,
                objectFit: "cover",
                borderRadius: 3,
                boxShadow: "0 4px 16px rgba(0,0,0,0.5)",
              }}
            />
          )}

          {/* Botões de navegação */}
          <IconButton
            onClick={handlePrev}
            aria-label="Projeto anterior"
            sx={{
              position: "absolute",
              top: "50%",
              left: 10,
              transform: "translateY(-50%)",
              backgroundColor: "rgba(0,0,0,0.4)",
              backdropFilter: "blur(4px)",
              "&:hover": { backgroundColor: "rgba(0,0,0,0.6)" },
              color: "#fff",
            }}
          >
            <ArrowBackIos />
          </IconButton>

          <IconButton
            onClick={handleNext}
            aria-label="Próximo projeto"
            sx={{
              position: "absolute",
              top: "50%",
              right: 10,
              transform: "translateY(-50%)",
              backgroundColor: "rgba(0,0,0,0.4)",
              backdropFilter: "blur(4px)",
              "&:hover": { backgroundColor: "rgba(0,0,0,0.6)" },
              color: "#fff",
            }}
          >
            <ArrowForwardIos />
          </IconButton>
        </Box>

        {/* 🔸 Nome e Descrição */}
        <Typography
          variant="h5"
          sx={{
            color: "white",
            mt: 3,
            fontWeight: "bold",
            letterSpacing: 0.5,
          }}
        >
          {currentProject.name}
        </Typography>

        <Typography
          variant="body1"
          sx={{
            color: "grey.400",
            mt: 1,
            maxWidth: 700,
            mx: "auto",
            fontSize: 16,
            lineHeight: 1.6,
          }}
        >
          {currentProject.description}
        </Typography>

        {/* 🔸 Tecnologias */}
        <Box
          sx={{
            mt: 4,
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            gap: 3,
          }}
        >
          {currentProject.techs?.map((tech, idx) => (
            <Box
              key={idx}
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                transition: "0.3s",
                "&:hover img": {
                  filter: "none",
                  transform: "scale(1.1)",
                },
              }}
            >
              <Box
                component="img"
                src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${tech.src}/${tech.src}-original.svg`}
                alt={`${tech.name} logo`}
                sx={{
                  height: 50,
                  mb: 1,
                  filter: "grayscale(100%) brightness(0.7)",
                  transition: "0.3s",
                }}
              />
              <Typography
                variant="caption"
                sx={{ color: "grey.400", fontWeight: 500 }}
              >
                {tech.name}
              </Typography>
            </Box>
          ))}
        </Box>

        {/* 🔸 Link do GitHub */}
        {currentProject.github && (
          <Box>
            <a
              href={currentProject.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub
                size={50}
                color={theme.palette.primary.main}
                style={{
                  margin: "1.5rem",
                  transition: "0.3s",
                }}
              />
            </a>
          </Box>
        )}
      </Container>
    </Box>
  );
}
