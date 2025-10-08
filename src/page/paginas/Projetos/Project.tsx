import { useState } from "react";
import { Box, Container, Typography, IconButton, styled } from "@mui/material";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import { ProjetosData } from "../../../componentes/Componentes";
import { FaGithub } from "react-icons/fa";

// Container responsivo para vídeos ou iframe
const VideoContainer = styled("div")(({ theme }) => ({
  position: "relative",
  width: "100%",
  overflow: "hidden",
  borderRadius: 12,
  boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
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
        py: 5,
        backgroundColor: "#1e1e1e",
        minHeight: "80vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Container maxWidth="lg" sx={{ textAlign: "center" }}>
        <Typography
          variant="h4"
          sx={{ color: "primary.main", fontWeight: "bold", mb: 4 }}
        >
          Meus Projetos
        </Typography>

       
        <Box sx={{ position: "relative", margin: "auto" }}>
          {currentProject.video ? (
            currentProject.video.includes("youtube") ? (
              <VideoContainer style={{ height: 600 }}>
                <iframe
                  src={currentProject.video}
                  title={currentProject.name}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </VideoContainer>
            ) : (
              <VideoContainer>
                <video
                  src={currentProject.video}
                  controls
                  autoPlay={false}
                  muted={false}
                  playsInline
                />
              </VideoContainer>
            )
          ) : (
            <Box
              component="img"
              alt={currentProject.name}
              sx={{ width: "100%", objectFit: "cover" }}
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

        {/* Nome do projeto */}
        <Typography
          variant="h5"
          sx={{ color: "white", mt: 3, fontWeight: "bold" }}
        >
          {currentProject.name}
        </Typography>

        {/* Descrição */}
        <Typography variant="body1" sx={{ color: "grey.400", mt: 1 }}>
          {currentProject.description}
        </Typography>

        {/* Tecnologias */}
        <Box
          sx={{
            mt: 3,
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
                minWidth: 70,
              }}
            >
              <Box
                component="img"
                src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${tech.src}/${tech.src}-original.svg`}
                alt={`${tech.name} logo`}
                sx={{ height: 50, mb: 1 }}
              />
              <Typography variant="caption" sx={{ color: "grey.400" }}>
                {tech.name}
              </Typography>
            </Box>
          ))}
        </Box>

        {/* GitHub */}
        {currentProject.github && (
          <Box>
            <a
              href={currentProject.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub
                size={50}
                color="#f3f3f3ff"
                style={{ margin: "1rem" }}
              />
            </a>
          </Box>
        )}
      </Container>
    </Box>
  );
}
