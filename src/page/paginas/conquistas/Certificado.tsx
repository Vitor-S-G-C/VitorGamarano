import { GrCertificate } from "react-icons/gr";
import { styled, Button, Typography, Box, Container } from "@mui/material";
import { CertificadosData } from "../../../componentes/Componentes";

const StyledButton = styled(Button)(() => ({
  color: "#fff",
  borderColor: "#90caf9",
  textTransform: "none",
  fontWeight: "bold",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "8px",
  marginTop: "8px",
  "&:hover": {
    backgroundColor: "#333",
    borderColor: "#b0d4ff",
  },
}));

const Certificados = () => {
  return (
    <Container
      id="Certificados"
      maxWidth="lg"
      sx={{
        py: 6,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Typography
        variant="h4"
        sx={{
          color: "#1976d2",
          mb: 4,
          fontWeight: "bold",
          textAlign: "center",
        }}
      >
        Certificados
      </Typography>

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: 4,
          justifyItems: "center",
          width: "100%",
        }}
      >
        {CertificadosData.map((cert) => (
          <Box
            key={cert.id}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
              backgroundColor: "#111122",
              borderRadius: "1rem",
              padding: "1.5rem",
              width: "100%",
              maxWidth: "20rem",
              boxShadow: "0 0 10px rgba(0,0,0,0.3)",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
              "&:hover": {
                transform: "translateY(-5px)",
                boxShadow: "0 0 20px rgba(144,202,249,0.3)",
              },
            }}
          >
            <Typography variant="h6" sx={{ color: "#90caf9", mb: 1 }}>
              {cert.nome}
            </Typography>
            <Typography variant="body2" sx={{ color: "#ddd" }}>
              Conclusão do curso com carga horária de{" "}
              <strong>{cert.cargaHoraria}</strong>
              <br />
              <strong>{cert.instituicao}</strong>
              <br />
              <br />
              <strong>{cert.periodo}</strong>
            </Typography>

            <a
              href={cert.arquivo}
              download={`Certificado_${cert.nome}.pdf`}
              style={{ textDecoration: "none" }}
            >
              <StyledButton variant="outlined">
                <GrCertificate size={22} />
                <span>Baixar Certificado</span>
              </StyledButton>
            </a>
          </Box>
        ))}
      </Box>
    </Container>
  );
};

export default Certificados;
