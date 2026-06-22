import { Box, Typography, Chip } from "@mui/material";
import LaunchRoundedIcon from "@mui/icons-material/LaunchRounded";
import { FaAndroid } from "react-icons/fa";
import { imgData } from "../../componentes/Componentes";
import { useLanguage } from "../../contexts/LanguageContext";

export default function Tecnologias() {
  const { t } = useLanguage();
  const stackAtual = [
    { ...imgData.csharp, name: "C#" },
    { ...imgData.aspnetcore, name: "ASP.NET" },
    { ...imgData.SqlServer, name: "SQL Server" },
    { ...imgData.html5, name: "HTML" },
    { ...imgData.css3, name: "CSS" },
    { ...imgData.javascript, name: "JavaScript" },
    { ...imgData.bootstrap, name: "Bootstrap" },
    { ...imgData.git, name: "Git" },
    { ...imgData.github, name: "GitHub" },
    { ...imgData.java, name: "Java" },
    { ...imgData.react, name: "React" },
    { name: "Android Studio", tema: "#84cc16", icon: FaAndroid },
  ].filter(Boolean);

  return (
    <Box
      sx={{
        background: "var(--panel-bg)",
        border: "1px solid var(--panel-border)",
        borderRadius: 6,
        px: { xs: 2, md: 3 },
        py: { xs: 2.5, md: 3 },
        boxShadow: "0 20px 60px rgba(3, 10, 30, 0.3)",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", lg: "row" },
          justifyContent: "space-between",
          gap: 2,
          alignItems: { xs: "flex-start", lg: "center" },
          mb: 2.5,
        }}
      >
        <Box>
          <Typography
            variant="h5"
            sx={{ color: "var(--text-main)", fontWeight: 800, fontFamily: "var(--font-display)" }}
          >
            {t("tecnologias.heading")}
          </Typography>
          <Typography sx={{ mt: 0.8, color: "var(--text-muted)", maxWidth: 680 }}>
            {t("tecnologias.subheading")}
          </Typography>
        </Box>
        <Box
          component="a"
          href="#projetos"
          sx={{
            color: "var(--brand)",
            fontWeight: 700,
            display: "inline-flex",
            alignItems: "center",
            gap: 0.6,
          }}
        >
          {t("tecnologias.link")}
          <LaunchRoundedIcon sx={{ fontSize: 18 }} />
        </Box>
      </Box>

      <Box>
        <Typography sx={{ color: "#dce6ff", fontWeight: 700, mb: 1.1, fontSize: "0.95rem" }}>
          {t("tecnologias.current")}
        </Typography>
        <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
          {stackAtual.map((tech) => {
            const Icon = tech.icon;

            return (
              <Chip
                key={`atual-${tech.name}`}
                icon={Icon ? <Icon /> : undefined}
                label={tech.name}
                sx={{
                  height: 38,
                  borderRadius: "999px",
                  color: "#dbe7ff",
                  bgcolor: "rgba(8, 14, 28, 0.82)",
                  border: "1px solid rgba(93, 145, 255, 0.12)",
                  "& .MuiChip-icon": {
                    color: tech.tema || "var(--brand)",
                  },
                }}
              />
            );
          })}
        </Box>
      </Box>
    </Box>
  );
}
