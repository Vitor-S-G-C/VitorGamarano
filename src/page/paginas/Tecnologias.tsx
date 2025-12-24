git meimport { Box, Container, Typography } from "@mui/material";
import {CarrosselTech } from "./tecnologias/CarrosselTech";
export default function Tecnologias() {
  return (
    <Box
      id="tecnologias"
      sx={{
        position: "relative", // necessário para o background animado
        //backgroundColor: "#050505",
        minHeight: "100vh",
        py: 10,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden", // impede as partículas de ultrapassar os limites
      }}
    >
      {/* 🔹 CONTEÚDO PRINCIPAL */}
      <Container
        maxWidth="lg"
        sx={{
          position: "relative",
          margin:0,
          padding:0,
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
        <CarrosselTech />
      </Container>
    </Box>
  );
}
