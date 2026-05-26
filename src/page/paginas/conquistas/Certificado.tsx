import { GrCertificate } from "react-icons/gr";
import { styled, Button, Typography, Box } from "@mui/material";
import LaunchRoundedIcon from "@mui/icons-material/LaunchRounded";
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
    <Box
      id="certificados"
      sx={{
        background: "var(--panel-bg)",
        border: "1px solid var(--panel-border)",
        borderRadius: 6,
        px: { xs: 2, md: 3 },
        py: { xs: 2.5, md: 3 },
      }}
    >
      <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: { xs: "flex-start", md: "center" }, flexDirection: { xs: "column", md: "row" }, gap: 1, mb: 2.5 }}>
        <Box>
          <Typography
            variant="h5"
            sx={{
              color: "var(--text-main)",
              fontWeight: 800,
              fontFamily: "var(--font-display)",
            }}
          >
            Certificados
          </Typography>
          <Typography sx={{ mt: 0.8, color: "var(--text-muted)" }}>
            Formação complementar voltada para web, fundamentos de software e mobile.
          </Typography>
        </Box>
        <Box component="a" href="#contato" sx={{ color: "var(--brand)", fontWeight: 700, display: "inline-flex", alignItems: "center", gap: 0.6 }}>
          Ver contato
          <LaunchRoundedIcon sx={{ fontSize: 18 }} />
        </Box>
      </Box>

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", xl: "repeat(3, minmax(0, 1fr))" },
          gap: 2,
          width: "100%",
        }}
      >
        {CertificadosData.slice(0, 3).map((cert, index) => (
          <Box
            key={cert.id}
            sx={{
              display: "flex",
              alignItems: "flex-start",
              gap: 2,
              backgroundColor: "rgba(7, 13, 28, 0.88)",
              borderRadius: "1.25rem",
              padding: "1.5rem",
              width: "100%",
              border: "1px solid rgba(93, 145, 255, 0.12)",
              boxShadow: "0 16px 40px rgba(2, 8, 24, 0.25)",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
              "&:hover": {
                transform: "translateY(-5px)",
                boxShadow: "0 0 20px rgba(144,202,249,0.3)",
              },
            }}
          >
            <Box
              sx={{
                width: 48,
                height: 48,
                borderRadius: "50%",
                display: "grid",
                placeItems: "center",
                bgcolor: index === 0 ? "rgba(59, 130, 246, 0.14)" : index === 1 ? "rgba(139, 92, 246, 0.14)" : "rgba(163, 230, 53, 0.12)",
                color: index === 0 ? "#60a5fa" : index === 1 ? "#8b5cf6" : "#a3e635",
              }}
            >
              <GrCertificate size={22} />
            </Box>

            <Box sx={{ flex: 1 }}>
              <Typography variant="h6" sx={{ color: "#f0f6ff", mb: 0.8, fontSize: "1rem" }}>
                {cert.nome}
              </Typography>
              <Typography variant="body2" sx={{ color: "var(--text-muted)", lineHeight: 1.65 }}>
                Conclusão do curso com carga horária de {cert.cargaHoraria}
              </Typography>
              <Typography variant="body2" sx={{ color: "#dce6ff", mt: 1, fontWeight: 700 }}>
                {cert.instituicao}
              </Typography>
              <Typography variant="body2" sx={{ color: "var(--text-muted)", mt: 0.4 }}>
                {cert.periodo}
              </Typography>
            </Box>

            <Box sx={{ ml: "auto" }}>
              <a
                href={cert.arquivo}
                download={`Certificado_${cert.nome}.pdf`}
                style={{ textDecoration: "none" }}
              >
                <StyledButton variant="outlined" sx={{ minWidth: 0, px: 1.4 }}>
                  <GrCertificate size={18} />
                </StyledButton>
              </a>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Certificados;
