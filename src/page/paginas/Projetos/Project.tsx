import { Box, Typography, Chip } from "@mui/material";
import LaunchRoundedIcon from "@mui/icons-material/LaunchRounded";
import { ProjetosData } from "../../../componentes/Componentes";
import { FaGithub } from "react-icons/fa";

export default function Projetos() {
  const featuredProjects = ProjetosData.slice(0, 3).map((project) => {
    const youtubeId = project.video?.match(/(?:embed\/|watch\?v=)([\w-]{11})/)?.[1];

    return {
      ...project,
      thumbnail: youtubeId
        ? `https://img.youtube.com/vi/${youtubeId}/maxresdefault.jpg`
        : "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80",
    };
  });

  return (
    <Box
      id="projetos"
      sx={{
        background: "var(--panel-bg)",
        border: "1px solid var(--panel-border)",
        borderRadius: 6,
        px: { xs: 2, md: 3 },
        py: { xs: 2.5, md: 3 },
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: { xs: "flex-start", md: "center" },
          justifyContent: "space-between",
          flexDirection: { xs: "column", md: "row" },
          gap: 1,
          mb: 2.5,
        }}
      >
        <Box>
          <Typography variant="h5" sx={{ color: "var(--text-main)", fontWeight: 800, fontFamily: "var(--font-display)" }}>
            Projetos em Destaque
          </Typography>
          <Typography sx={{ mt: 0.8, color: "var(--text-muted)" }}>
            Soluções full stack com foco em APIs, integrações e interfaces modernas.
          </Typography>
        </Box>
        <Box
          component="a"
          href="https://github.com/Vitor-S-G-C?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
          sx={{ color: "var(--brand)", fontWeight: 700, display: "inline-flex", alignItems: "center", gap: 0.7 }}
        >
          Ver todos os projetos
          <LaunchRoundedIcon sx={{ fontSize: 18 }} />
        </Box>
      </Box>

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", xl: "repeat(3, minmax(0, 1fr))" },
          gap: 2,
        }}
      >
        {featuredProjects.map((project) => (
          <Box
            key={project.name}
            sx={{
              height: "100%",
              overflow: "hidden",
              borderRadius: 5,
              background: "rgba(7, 13, 28, 0.88)",
              border: "1px solid rgba(93, 145, 255, 0.12)",
              boxShadow: "0 16px 40px rgba(2, 8, 24, 0.32)",
            }}
          >
            <Box
              component="img"
              src={project.thumbnail}
              alt={project.name}
              sx={{ width: "100%", height: 210, objectFit: "cover", display: "block" }}
            />
            <Box sx={{ p: 2.2 }}>
              <Typography sx={{ color: "#62a3ff", fontWeight: 700, fontSize: "1.08rem" }}>
                {project.name}
              </Typography>
              <Typography sx={{ color: "var(--text-muted)", mt: 1, minHeight: 72, lineHeight: 1.65, fontSize: "0.92rem" }}>
                {project.description}
              </Typography>
              <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.8, mt: 1.5 }}>
                {project.techs?.slice(0, 4).map((tech) => {
                  const Icon = tech.icon;

                  return (
                    <Chip
                      key={`${project.name}-${tech.name}`}
                      icon={Icon ? <Icon /> : undefined}
                      label={tech.name}
                      sx={{
                        height: 28,
                        color: "#cddcff",
                        bgcolor: "rgba(255,255,255,0.04)",
                        border: "1px solid rgba(93, 145, 255, 0.08)",
                        "& .MuiChip-icon": { color: tech.tema || "var(--brand)", fontSize: 16 },
                      }}
                    />
                  );
                })}
              </Box>
              <Box sx={{ display: "flex", gap: 2, mt: 2, flexWrap: "wrap" }}>
                <Box
                  component="a"
                  href={project.video}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{ color: "#62a3ff", fontWeight: 700, display: "inline-flex", alignItems: "center", gap: 0.6 }}
                >
                  Ver Projeto
                  <LaunchRoundedIcon sx={{ fontSize: 16 }} />
                </Box>
                <Box
                  component="a"
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{ color: "#62a3ff", fontWeight: 700, display: "inline-flex", alignItems: "center", gap: 0.6 }}
                >
                  GitHub
                  <FaGithub size={15} />
                </Box>
              </Box>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
}
