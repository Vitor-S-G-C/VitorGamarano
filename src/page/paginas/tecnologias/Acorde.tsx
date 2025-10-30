import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Grid,
  Card,
  CardContent,
  Box,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { imgData } from "../../../componentes/Componentes";

export function Acorde() {
  // Agrupa as tecnologias por tipo (Frontend, Backend, etc)
  const grupos = Array.from(
    new Set(Object.values(imgData).map((tech) => tech.txt))
  );

  return (
    <Box>
      {grupos.map((grupo) => {
        const tecnologias = Object.values(imgData).filter(
          (t) => t.txt === grupo
        );

        return (
          <Accordion
            key={grupo}
            sx={{
              backgroundColor: "rgba(20, 20, 20, 0.2)", // transparência suave
              borderRadius: 2,
              mb: 3,
              backdropFilter: "blur(8px)", // efeito vidro fosco
              "&:before": { display: "none" }, // remove a linha do MUI
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon sx={{ color: "primary.main" }} />}
            >
              <Typography
                variant="h6"
                sx={{
                  color: "grey.200",
                  fontWeight: "bold",
                  textTransform: "uppercase",
                  letterSpacing: 1,
                }}
              >
                {grupo}
              </Typography>
            </AccordionSummary>

            <AccordionDetails>
              <Grid container spacing={3} justifyContent="center">
                {tecnologias.map((tech) => (
                  <Grid size={{xs:6, sm:4, md:3,}} key={tech.name}>
                    <Card
                      sx={{
                        backgroundColor: "#111122",
                        borderRadius: 3,
                        textAlign: "center",
                        height: "100%",
                        transition: "0.3s",
                        "&:hover": {
                          transform: "translateY(-6px)",
                          boxShadow: (theme) =>
                            `0 0 16px ${theme.palette.primary.main}`,
                          color: "primary.main",
                          "& img": {
                            filter: "none",
                          },
                        },
                      }}
                    >
                      <CardContent>
                        <Box
                          component="img"
                          src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${tech.src}/${tech.src}-original.svg`}
                          alt={tech.name}
                          sx={{
                            width: 64,
                            height: 64,
                            mb: 1,
                            filter: "grayscale(100%) brightness(0.7)",
                            transition: "0.3s",
                          }}
                        />
                        <Typography
                          variant="h6"
                          fontWeight="bold"
                          sx={{ color: "#ddd" }}
                        >
                          {tech.name}
                        </Typography>
                      </CardContent>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </AccordionDetails>
          </Accordion>
        );
      })}
    </Box>
  );
}
