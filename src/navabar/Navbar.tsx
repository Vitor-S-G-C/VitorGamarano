import { useEffect, useState } from "react";
import type { ReactElement } from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Box,
  IconButton,
  Typography,
  styled,
  Chip,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import AutoAwesomeRoundedIcon from "@mui/icons-material/AutoAwesomeRounded";
import WorkOutlineRoundedIcon from "@mui/icons-material/WorkOutlineRounded";
import FolderOpenRoundedIcon from "@mui/icons-material/FolderOpenRounded";
// import MilitaryTechRoundedIcon from "@mui/icons-material/MilitaryTechRounded";
// import MailOutlineRoundedIcon from "@mui/icons-material/MailOutlineRounded";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Avatar from "../assets/Avatar.png";
import { DownloadCurriculo } from "../componentes/DownloadCurriculo";

interface NavItem {
  key: string;
  label: string;
  id: string;
  icon: ReactElement;
}

const drawerWidth = 280;
const COLORS = {
  link: "#ffffff",
  active: "#90caf9",
  hover: "#b0d4ff",
  background: "#081120",
};

// Avatar estilizado
const StyledImg = styled("img")(({ theme }) => ({
  width: 124,
  borderRadius: "50%",
  border: `3px solid rgba(79, 123, 244, 0.9)`,
  boxShadow: "0 0 0 6px rgba(79, 123, 244, 0.12)",
  marginBottom: theme.spacing(2),
}));

export default function Sidebar() {
  const [activeSection, setActiveSection] = useState("home");
  const [mobileOpen, setMobileOpen] = useState(false);

  const navItems: NavItem[] = [
    { key: "inicio", label: "Início", id: "home", icon: <HomeRoundedIcon fontSize="small" /> },
    { key: "habilidades", label: "Minhas Tecnologias", id: "tecnologias", icon: <AutoAwesomeRoundedIcon fontSize="small" /> },
    { key: "projetos", label: "Projetos", id: "projetos", icon: <FolderOpenRoundedIcon fontSize="small" /> },
    { key: "experiencia", label: "Experiência", id: "experiencia", icon: <WorkOutlineRoundedIcon fontSize="small" /> },
    // { key: "certificados", label: "Certificados", id: "certificados", icon: <MilitaryTechRoundedIcon fontSize="small" /> },
    // { key: "contato", label: "Contato", id: "contato", icon: <MailOutlineRoundedIcon fontSize="small" /> },
  ];

  const scrollToSection = (id: string) => {
    const section =
      document.getElementById(id) ||
      (document.querySelector(`[id="${CSS.escape(id)}"]`) as HTMLElement | null);

    if (section) {
      const yOffset = -10;
      const y = section.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
      setMobileOpen(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      let currentSection = "home";
      navItems.forEach(({ id }) => {
        const section = document.getElementById(id);
        if (section && window.scrollY >= section.offsetTop - 100) {
          currentSection = id;
        }
      });
      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleDrawer = () => setMobileOpen((prev) => !prev);

  const drawerContent = (
    <Box
      sx={{
        textAlign: "center",
        background:
          "linear-gradient(180deg, rgba(8, 17, 32, 0.96), rgba(5, 10, 21, 0.98))",
        height: "100%",
        p: 2,
      }}
    >
      <Box
        sx={{
          background: "rgba(7, 16, 34, 0.78)",
          border: "1px solid rgba(93, 145, 255, 0.14)",
          borderRadius: 4,
          py: 3,
          px: 2,
          mb: 2,
          boxShadow: "0 24px 50px rgba(2, 8, 24, 0.35)",
        }}
      >
        <StyledImg src={Avatar} alt="Foto de perfil de Vitor Gamarano" />
        <Typography
          variant="h5"
          color="white"
          fontWeight="bold"
          sx={{ fontFamily: "var(--font-display)", letterSpacing: "-0.02em" }}
          component="h1"
        >
          Vitor S.G.C
        </Typography>
        <Typography
          variant="body2"
          color="white"
          sx={{ opacity: 0.72, mt: 0.5 }}
          component="p"
        >
          Engenheiro de Software
        </Typography>

        <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
          <DownloadCurriculo />
        </Box>

        <Box sx={{ display: "flex", justifyContent: "center", gap: 1.5, mt: 2.5, mb: 0.5 }}>
          <IconButton
            href="https://github.com/Vitor-S-G-C"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            sx={{
              color: "#fff",
              bgcolor: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(107, 132, 206, 0.14)",
              "&:hover": { color: "#90caf9", bgcolor: "rgba(37, 99, 235, 0.16)" },
            }}
          >
            <FaGithub size={18} />
          </IconButton>
          <IconButton
            href="https://www.linkedin.com/in/vitor-gamarano/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            sx={{
              color: "#fff",
              bgcolor: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(107, 132, 206, 0.14)",
              "&:hover": { color: "#90caf9", bgcolor: "rgba(37, 99, 235, 0.16)" },
            }}
          >
            <FaLinkedin size={18} />
          </IconButton>
        </Box>
      </Box>

      <List
        sx={{
          mt: 1,
          borderRadius: 4,
          border: "1px solid rgba(89, 126, 208, 0.1)",
          bgcolor: "rgba(7, 14, 29, 0.65)",
          p: 1,
        }}
        component="nav"
        aria-label="Menu de navegação principal"
      >
        {navItems.map(({ key, id, label, icon }) => (
          <ListItem key={key} disablePadding>
            <ListItemButton
              onClick={() => scrollToSection(id)}
              aria-label={`Navegar para seção ${label}`}
              sx={{
                borderRadius: 3,
                mb: 0.4,
                px: 1.25,
                py: 0.85,
                justifyContent: "center",
                backgroundColor:
                  activeSection === id ? "rgba(21, 52, 117, 0.42)" : "transparent",
                borderLeft:
                  activeSection === id ? "2px solid var(--brand)" : "2px solid transparent",
              }}
            >
              <Box sx={{ color: activeSection === id ? COLORS.active : "rgba(255,255,255,0.75)" }}>
                {icon}
              </Box>
              <ListItemText
                primary={label}
                sx={{
                  ml: 1.2,
                  color: activeSection === id ? COLORS.active : COLORS.link,
                  transition: "color 0.3s ease",
                  "&:hover": { color: COLORS.hover },
                  "& .MuiTypography-root": {
                    fontSize: "0.96rem",
                    fontWeight: activeSection === id ? 700 : 500,
                  },
                }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>

      <Box
        sx={{
          mt: 2,
          borderRadius: 4,
          border: "1px solid rgba(89, 126, 208, 0.1)",
          bgcolor: "rgba(7, 14, 29, 0.65)",
          py: 2.5,
          px: 2,
        }}
      >
        <Chip
          label="Transformo ideias em soluções escaláveis"
          sx={{
            whiteSpace: "normal",
            height: "auto",
            py: 1.2,
            px: 1,
            color: "#dce7ff",
            bgcolor: "transparent",
            border: "1px solid rgba(92, 128, 210, 0.14)",
            "& .MuiChip-label": {
              display: "block",
              whiteSpace: "normal",
              textAlign: "center",
            },
          }}
        />
      </Box>
    </Box>
  );

  return (
    <Box sx={{ display: "flex" }}>
      {/* Botão de menu (mobile) */}
      <IconButton
        aria-label="Abrir menu de navegação"
        onClick={toggleDrawer}
        sx={{
          position: "fixed",
          top: 16,
          left: 16,
          zIndex: 1300,
          display: { md: "none" },
          backgroundColor: COLORS.background,
          color: "#fff",
          "&:hover": { backgroundColor: "#333" },
        }}
      >
        <MenuIcon />
      </IconButton>

      {/* Sidebar fixa (desktop) */}
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          display: { xs: "none", md: "block" },
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            background:
              "linear-gradient(180deg, rgba(8, 17, 32, 0.96), rgba(5, 10, 21, 0.98))",
            boxSizing: "border-box",
            borderRight: "1px solid rgba(89, 126, 208, 0.14)",
            padding: "12px",
          },
        }}
        open
      >
        {drawerContent}
      </Drawer>

      {/* Sidebar retrátil (mobile) */}
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={toggleDrawer}
        ModalProps={{ keepMounted: true }}
        sx={{
          display: { xs: "block", md: "none" },
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            background:
              "linear-gradient(180deg, rgba(8, 17, 32, 0.96), rgba(5, 10, 21, 0.98))",
            padding: "12px",
          },
        }}
      >
        {drawerContent}
      </Drawer>

      {/* Conteúdo principal */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          ml: { md: `${drawerWidth}px` },
          mt: { xs: 6, md: 0 },
        }}
      />
    </Box>
  );
}
