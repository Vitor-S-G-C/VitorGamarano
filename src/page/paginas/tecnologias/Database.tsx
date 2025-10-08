import { Box, Container, Grid, Typography, styled } from "@mui/material";
import { type Key } from "react";
import { imgData } from "../../../componentes/Componentes";

// Styled component for the technology images, similar to your Hero component
const StyledImg = styled("img")(({}) => ({
  height: 80,
  borderBottom: `3px solid #01579b`,
  borderRadius: "5px",
  padding: 5,
}));

export default function DataBase() {
  const DataBaseArray = Object.values(imgData).filter(
    (item) => item.txt === "DataBase"
  );

  return (
    <Box
      sx={{
        py: "1rem",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Container maxWidth="lg">
    

        <Grid container justifyContent="center" spacing={4}>
          {DataBaseArray.map(
            (tech: { name: string; src: string; txt: Key }) => (
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
            )
          )}
        </Grid>
      </Container>
    </Box>
  );
}

