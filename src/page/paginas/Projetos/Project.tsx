import{ useState } from "react";
import { Box, Container, Typography, IconButton } from "@mui/material";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import { ProjetosData } from "../../../componentes/Componentes";

export default function Projetos() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? ProjetosData.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev === ProjetosData.length - 1 ? 0 : prev + 1
    );
  };

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

        <Box
          sx={{
            position: "relative",
            width: "80%",
            maxWidth: 900,
            height: 500,
            margin: "auto",
            overflow: "hidden",
            borderRadius: 3,
            boxShadow: 3,
          }}
        >
          {/* Renderiza vídeo .mp4 ou imagem */}
          {currentProject.video ? (
            <Box
              component="video"
              src={currentProject.video}
              controls
              autoPlay={false}
              muted={false}
              sx={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                borderRadius: 3,
              }}
            />
          ) : (
            <Box
              component="img"
              alt={currentProject.name}
              sx={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          )}

          {/* Botão anterior */}
          <IconButton
            onClick={handlePrev}
            aria-label="Projeto anterior"
            sx={{
              position: "absolute",
              top: "50%",
              left: 10,
              transform: "translateY(-50%)",
              backgroundColor: "rgba(0,0,0,0.4)",
              "&:hover": { backgroundColor: "rgba(0,0,0,0.6)" },
              color: "#fff",
            }}
          >
            <ArrowBackIos />
          </IconButton>

          {/* Botão próximo */}
          <IconButton
            onClick={handleNext}
            aria-label="Próximo projeto"
            sx={{
              position: "absolute",
              top: "50%",
              right: 10,
              transform: "translateY(-50%)",
              backgroundColor: "rgba(0,0,0,0.4)",
              "&:hover": { backgroundColor: "rgba(0,0,0,0.6)" },
              color: "#fff",
            }}
          >
            <ArrowForwardIos />
          </IconButton>
        </Box>

        <Typography
          variant="h5"
          sx={{ color: "white", mt: 2, fontWeight: "bold" }}
        >
          {currentProject.name}
        </Typography>

        <Typography variant="body1" sx={{ color: "grey.400", mt: 1 }}>
          {currentProject.description}
        </Typography>

        {/* Tecnologias */}
        <Box
          sx={{
            mt: 2,
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          {currentProject.techs?.map((tech, idx) => (
            <Box
              key={idx}
              component="img"
              src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${tech.src}/${tech.src}-original.svg`}
              alt={`${tech.name} logo`}
              sx={{ margin: "0 8px", height: 50 }}
            />
          ))}
        </Box>
      </Container>
    </Box>
  );
}
