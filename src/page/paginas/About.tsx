import { Box, Typography, Chip, Paper, Button } from "@mui/material";
import LaunchRoundedIcon from "@mui/icons-material/LaunchRounded";
import MailOutlineRoundedIcon from "@mui/icons-material/MailOutlineRounded";
import { FaDatabase, FaCode } from "react-icons/fa";
import {
  SiBootstrap,
  SiJavascript,
  SiDotnet,
  SiGithub,
  SiReact,
  SiTypescript,
  SiMongodb,
} from "react-icons/si";
import { useLanguage } from "../../contexts/LanguageContext";

export default function Hero() {
  const { t } = useLanguage();
  const topTechs = [
    { icon: <FaCode />, label: "C#", color: "#5b8cff", x: "6%", y: "12%" },
    { icon: <SiReact />, label: "React", color: "#38bdf8", x: "76%", y: "10%" },
    { icon: <SiDotnet />, label: ".NET", color: "#8b5cf6", x: "15%", y: "68%" },
    { icon: <FaDatabase />, label: "SQL Server", color: "#fbbf24", x: "14%", y: "36%" },
    { icon: <SiMongodb />, label: "MongoDB", color: "#4ade80", x: "84%", y: "38%" },
    { icon: <SiTypescript />, label: "TS", color: "#60a5fa", x: "72%", y: "70%" },
  ];

  const stackHighlights = [
    { icon: <SiDotnet />, label: "ASP.NET Core" },
    { icon: <FaDatabase />, label: "SQL Server" },
    { icon: <SiReact />, label: "React" },
    { icon: <SiTypescript />, label: "TypeScript" },
    { icon: <SiJavascript />, label: "JavaScript" },
    { icon: <SiBootstrap />, label: "Bootstrap" },
    { icon: <SiGithub />, label: "Git" },
  ];

  return (
    <Paper
      id="hero"
      elevation={3}
      sx={{
        display: "grid",
        gridTemplateColumns: { xs: "1fr", lg: "1.05fr 0.95fr" },
        gap: { xs: 4, lg: 2 },
        alignItems: "stretch",
        py: { xs: 4, md: 5 },
        px: { xs: 3, md: 5 },
        bgcolor: "var(--panel-bg)",
        backdropFilter: "blur(22px)",
        color: "white",
        borderRadius: "24px",
        border: "1px solid var(--panel-border)",
        boxShadow: "0 30px 80px rgba(3, 10, 30, 0.45)",
        overflow: "hidden",
        position: "relative",
        "&::before": {
          content: '""',
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(135deg, rgba(35, 88, 215, 0.08), transparent 32%, rgba(21, 110, 255, 0.04) 75%, transparent)",
          pointerEvents: "none",
        },
      }}
    >
      <Box sx={{ position: "relative", zIndex: 1 }}>
        <Chip
          label={t("hero.greeting")}
          sx={{
            mb: 2.5,
            height: 32,
            color: "#d8e7ff",
            bgcolor: "rgba(20, 34, 67, 0.9)",
            border: "1px solid rgba(93, 145, 255, 0.22)",
            fontWeight: 600,
          }}
        />
        <Typography
          variant="h1"
          fontWeight={800}
          sx={{
            fontSize: { xs: "2.4rem", md: "4rem" },
            lineHeight: 0.98,
            mb: 1.5,
            letterSpacing: "-0.04em",
            fontFamily: "var(--font-display)",
          }}
        >
          Vitor <Box component="span" sx={{ color: "var(--brand)" }}>S.G.C</Box>
        </Typography>

        <Typography
          variant="h5"
          sx={{
            color: "#f2f6ff",
            fontWeight: 700,
            fontSize: { xs: "1.1rem", md: "1.45rem" },
            mb: 2.5,
          }}
        >
          {t("hero.title")}
        </Typography>

        <Typography
          variant="body1"
          sx={{
            color: "var(--text-muted)",
            lineHeight: 1.85,
            fontSize: { xs: "0.98rem", md: "1.05rem" },
            maxWidth: 620,
          }}
        >
          {t("hero.description")}
        </Typography>

        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: 1.5,
            mt: 4,
          }}
        >
          <Button
            href="#projetos"
            variant="contained"
            startIcon={<LaunchRoundedIcon />}
            sx={{
              px: 3,
              py: 1.3,
              borderRadius: 3,
              textTransform: "none",
              fontWeight: 700,
              background: "linear-gradient(135deg, #2563eb, #3b82f6)",
              boxShadow: "0 16px 30px rgba(37, 99, 235, 0.35)",
            }}
          >
            {t("hero.buttonProjects")}
          </Button>
          <Button
            href="#contato"
            variant="outlined"
            startIcon={<MailOutlineRoundedIcon />}
            sx={{
              px: 3,
              py: 1.3,
              borderRadius: 3,
              textTransform: "none",
              fontWeight: 700,
              color: "#eef4ff",
              borderColor: "rgba(158, 183, 255, 0.2)",
              bgcolor: "rgba(10, 17, 36, 0.72)",
            }}
          >
            {t("hero.buttonContact")}
          </Button>
        </Box>

        <Box
          sx={{
            mt: 4.5,
            display: "flex",
            flexWrap: "wrap",
            gap: 1,
          }}
        >
          {stackHighlights.map((tech) => (
            <Chip
              key={tech.label}
              icon={tech.icon}
              label={tech.label}
              sx={{
                height: 36,
                px: 0.8,
                borderRadius: "999px",
                color: "#dbe7ff",
                bgcolor: "rgba(10, 17, 36, 0.82)",
                border: "1px solid rgba(100, 137, 217, 0.22)",
                "& .MuiChip-icon": {
                  color: "var(--brand)",
                },
              }}
            />
          ))}
        </Box>
      </Box>

      <Box
        sx={{
          position: "relative",
          minHeight: { xs: 320, md: 420 },
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            inset: { xs: "12% 4%", md: "8%" },
            borderRadius: "50%",
            border: "1px solid rgba(37, 99, 235, 0.18)",
          }}
        />
        <Box
          sx={{
            position: "absolute",
            inset: { xs: "22% 13%", md: "18%" },
            borderRadius: "50%",
            border: "1px solid rgba(37, 99, 235, 0.12)",
          }}
        />
        <Box
          sx={{
            position: "absolute",
            inset: { xs: "32% 24%", md: "28%" },
            borderRadius: "50%",
            border: "1px solid rgba(37, 99, 235, 0.12)",
          }}
        />

        {topTechs.map((tech) => (
          <Box
            key={tech.label}
            sx={{
              position: "absolute",
              top: tech.y,
              left: tech.x,
              width: { xs: 64, md: 76 },
              height: { xs: 64, md: 76 },
              borderRadius: 4,
              display: "grid",
              placeItems: "center",
              color: tech.color,
              bgcolor: "rgba(11, 18, 37, 0.92)",
              border: "1px solid rgba(87, 114, 188, 0.22)",
              boxShadow: "0 18px 30px rgba(4, 9, 25, 0.45)",
              fontSize: { xs: "1.8rem", md: "2.2rem" },
            }}
          >
            {tech.icon}
          </Box>
        ))}

        <Box
          sx={{
            width: { xs: 150, md: 210 },
            height: { xs: 150, md: 210 },
            borderRadius: "50%",
            display: "grid",
            placeItems: "center",
            background:
              "radial-gradient(circle, rgba(38, 99, 235, 0.35), rgba(10, 18, 38, 0.94) 58%, rgba(4, 8, 20, 0.98) 100%)",
            border: "1px solid rgba(94, 127, 220, 0.25)",
            boxShadow: "0 0 80px rgba(37, 99, 235, 0.32)",
            position: "relative",
            overflow: "hidden",
            "&::after": {
              content: '""',
              position: "absolute",
              inset: "auto 12% -18% 12%",
              height: 38,
              borderRadius: "50%",
              background: "rgba(59, 130, 246, 0.45)",
              filter: "blur(22px)",
            },
          }}
        >
          <Typography sx={{ fontSize: { xs: "3rem", md: "4.2rem" }, color: "#5ea2ff" }}>
            &lt;/&gt;
          </Typography>
        </Box>

        <Box
          sx={{
            position: "absolute",
            bottom: { xs: 18, md: 22 },
            left: "50%",
            transform: "translateX(-50%)",
            width: "62%",
            height: 10,
            borderRadius: "999px",
            background: "rgba(59, 130, 246, 0.9)",
            filter: "blur(16px)",
          }}
        />
      </Box>
    </Paper>
  );
}
