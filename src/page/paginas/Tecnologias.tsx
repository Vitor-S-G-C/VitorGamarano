import { Box, Container, Typography } from "@mui/material";
import { Acorde } from "./tecnologias/Acorde";

export default function Tecnologias() {
  return (
    <Box
      id="tecnologias"
      sx={{
        position: "relative", // necessário para o background animado
        backgroundColor: "#050505",
        minHeight: "100vh",
        py: 10,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden", // impede as partículas de ultrapassar os limites
      }}
    >
      {/* 🔹 ANIMAÇÃO DE FUNDO */}
  { /**
  import Particles from "react-tsparticles"; // animação de fundo com partículas

  <Box
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
          position: "relative",
          zIndex: 1, // conteúdo acima das partículas
        }}
      >
        <Typography
          variant="h4"
          sx={{
            color: "primary.main",
            fontWeight: "bold",
            textAlign: "center",
            mb: 6,
            fontFamily: "-apple-system, Roboto, sans-serif",
            fontSize: 42,
          }}
        >
          Habilidades
        </Typography>
        <Acorde />
      </Container>
    </Box>
  );
}
