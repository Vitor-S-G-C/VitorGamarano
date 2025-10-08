// src/page/paginas/tecnologias/Backend.tsx
import { Box, Container, Grid, Typography, styled } from "@mui/material";
import { type Key } from "react";
import { imgData } from "../../../componentes/Componentes";

// Styled component para as imagens de tecnologia
const StyledImg = styled("img")(() => ({
  height: 80,
  borderBottom: `3px solid #01579b`,
  borderRadius: "5px",
  padding: 5,
  transition: "transform 0.3s ease, box-shadow 0.3s ease",
  "&:hover": {
    transform: "scale(1.1)",
    boxShadow: "0px 4px 15px rgba(0,0,0,0.3)",
  },
}));

export default function Backend() {
  const BackendArray = Object.values(imgData).filter(
    (item) => item.txt === "Backend"
  );

  return (
    <Box
      sx={{
        py: "2rem",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Container maxWidth="lg">
        <Typography
          variant="h4"
          align="center"
          sx={{ mb: 4, fontWeight: "bold", color: "grey.100" }}
        >
          Tecnologias de Backend
        </Typography>

        <Grid container justifyContent="center" spacing={4}>
          {BackendArray.map((tech: { name: string; src: string; txt: Key }) => (
            <Grid size={{ xs: 6, sm: 4, md: 3, lg: 2 }} key={tech.name}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
                }}
              >
                <StyledImg
                  src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${tech.src}/${tech.src}-original.svg`}
                  alt={`${tech.name} logo`}
                />
                <Typography
                  variant="body1"
                  sx={{ color: "grey.400", mt: 1, fontWeight: 500 }}
                >
                  {tech.name}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
