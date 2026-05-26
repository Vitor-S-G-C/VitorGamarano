import { Box, Typography } from "@mui/material";
import { FaInstagram, FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

export default function RedesSociais() {
  const contatos = [
    {
      href: "https://www.instagram.com/vitor.s.g.c/",
      icon: <FaInstagram size={24} />,
      label: "Instagram",
      color: "#E4405F",
    },
    {
      href: "https://github.com/Vitor-S-G-C",
      icon: <FaGithub size={24} />,
      label: "GitHub",
      color: "#ffffff",
    },
    {
      href: "https://www.linkedin.com/in/vitor-gamarano",
      icon: <FaLinkedin size={24} />,
      label: "LinkedIn",
      color: "#0A66C2",
    },
    {
      href: "mailto:vitorgamarano1@gmail.com",
      icon: <FaEnvelope size={24} />,
      label: "E-mail",
      color: "#f55e54",
    },
  ];

  return (
    <Box
      id="contato"
      sx={{
        background: "var(--panel-bg)",
        border: "1px solid var(--panel-border)",
        borderRadius: 6,
        px: { xs: 2, md: 3 },
        py: { xs: 2.5, md: 3 },
      }}
    >
      <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", lg: "1.2fr 0.8fr" }, gap: 2, alignItems: "stretch" }}>
        <Box
          sx={{
            borderRadius: 5,
            p: { xs: 2.5, md: 3 },
            background: "linear-gradient(135deg, rgba(9, 18, 37, 0.96), rgba(7, 12, 26, 0.96))",
            border: "1px solid rgba(93, 145, 255, 0.12)",
          }}
        >
          <Typography sx={{ color: "var(--text-main)", fontWeight: 800, fontFamily: "var(--font-display)", fontSize: "1.4rem" }}>
            Vamos construir algo sólido
          </Typography>
          <Typography sx={{ color: "var(--text-muted)", mt: 1.2, lineHeight: 1.8, maxWidth: 640 }}>
            Disponível para conversar sobre oportunidades em backend, desenvolvimento full stack e evolução de produtos com foco em performance e qualidade técnica.
          </Typography>
        </Box>

        <Box
          sx={{
            borderRadius: 5,
            p: { xs: 2.5, md: 3 },
            background: "rgba(7, 13, 28, 0.88)",
            border: "1px solid rgba(93, 145, 255, 0.12)",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: 1.2,
            flexWrap: "wrap",
          }}
        >
          {contatos.map((contato) => (
            <Box
              key={contato.label}
              component="a"
              href={contato.href}
              target={contato.href.startsWith("mailto:") ? undefined : "_blank"}
              rel={contato.href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
              sx={{
                width: 64,
                height: 64,
                borderRadius: "50%",
                display: "grid",
                placeItems: "center",
                bgcolor: "rgba(255,255,255,0.04)",
                color: "#d9d9d9",
                border: "1px solid rgba(93, 145, 255, 0.12)",
                transition: "transform 0.2s ease, color 0.2s ease, border-color 0.2s ease",
                "&:hover": {
                  color: contato.color,
                  transform: "translateY(-4px)",
                  borderColor: contato.color,
                },
              }}
              aria-label={contato.label}
            >
              {contato.icon}
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
}
