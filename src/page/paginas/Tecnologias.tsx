import { Box, Container, Grid, Typography, styled } from "@mui/material";
import type { Key } from "react";
import imgData from "../../componentes/tecnologiasImg";

// Styled component for the technology images, similar to your Hero component
const StyledImg = styled("img")(({}) => ({
  height: 80,
  borderBottom: `3px solid #01579b`,
  borderRadius: "5px",
  padding: 5,
}));

export default function Tecnologias() {
  return (
    <Box
      id="tecnologias" // Added an ID for navigation
      sx={{
        backgroundColor: "black",
        minHeight: "80vh",
        py: 6, // Adds padding on the top and bottom
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
            mb: 4,
            fontFamily: "Georgia, serif",
          }}
        >
          Habilidades
        </Typography>

        <Grid container justifyContent="center" spacing={4}>
          {imgData.map((tech: { name: Key; src: string }) => (
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
                <Typography variant="body1" sx={{ color: "grey.400", mt: 1 }}>
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
