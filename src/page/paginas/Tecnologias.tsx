import { Box, Container, Typography } from "@mui/material";
import Backend from "./tecnologias/BackEnd";
import DataBase from "./tecnologias/database";
import Ferramenta from "./tecnologias/Ferramenta";
import Frontend from "./tecnologias/frontend";

export default function Tecnologias() {
  return (
    <Box
      id="tecnologias" // Added an ID for navigation
      sx={{
        backgroundColor: "#363636ff",
        minHeight: "80vh",
        py: 5,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Container maxWidth="lg">
        <Typography
          variant="h4"
          sx={{
            color: "primary.main",
            fontWeight: "bold",
            textAlign: "center",
            mb: 5,
            fontFamily: "-apple-system",
            fontSize: 42,
          }}
        >
          Habilidades
        </Typography>

        <Frontend />
        <Backend />
        <DataBase />
        <Ferramenta />
      </Container>
    </Box>
  );
}
