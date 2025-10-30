// tecnologias/EstiloTecnologias.tsx
import { styled } from "@mui/material/styles";
import { Box, Typography, Accordion } from "@mui/material";

export const FundoTecnologias = styled(Box)(({ theme }) => ({
  position: "relative",
  backgroundColor: "#0a0a14",
  minHeight: "100vh",
  color: "#fff",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  paddingTop: theme.spacing(8),
  overflow: "hidden",
}));

export const Titulo = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary.main,
  fontWeight: "bold",
  textAlign: "center",
  marginBottom: theme.spacing(5),
  fontFamily: "Georgia, serif",
  fontSize: "2.8rem",
}));

export const Acordeao = styled(Accordion)({
  backgroundColor: "#1a1a1a",
  color: "#fff",
  marginBottom: "16px",
  borderRadius: "8px",
  "&:before": { display: "none" },
  "&:hover": {
    backgroundColor: "#222",
    transition: "background-color 0.3s ease",
  },
});
