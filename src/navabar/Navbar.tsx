import { useEffect, useState } from "react";
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
  Button,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import DownloadIcon from "@mui/icons-material/Download";
import Avatar from "../assets/Avatar.png";
import pdf from "../assets/CV.pdf";

interface NavItem {
  label: string;
  id: string;
}

const drawerWidth = 280;
const COLORS = {
  link: "#ffffff",
  active: "#90caf9",
  hover: "#b0d4ff",
  background: "#212121",
  
};

// Avatar estilizado
const StyledImg = styled("img")(({ theme }) => ({
  width: "60%",
  borderRadius: "50%",
  border: `2px solid ${theme.palette.primary.contrastText}`,
  marginBottom: theme.spacing(2),
}));

// Botão de download estilizado
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

export default function Sidebar() {
  const [activeSection, setActiveSection] = useState("home");
  const [mobileOpen, setMobileOpen] = useState(false);

  const navItems: NavItem[] = [
    { label: "Habilidades", id: "tecnologias" },
    { label: "Projetos", id: "projetos" },
    { label: "Contato", id: "contato" },
  ];

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
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
        backgroundColor: COLORS.background,
        height: "100%",
        p: 3,
        mt: 5,
      }}
    >
      {/* Avatar e informações pessoais */}
      <StyledImg src={Avatar} alt="Avatar" />
      <Typography
        variant="h5"
        color="white"
        fontWeight="bold"
        sx={{ fontFamily: "Georgia, serif" }}
      >
        Vitor S.G.C
      </Typography>
      <Typography
        variant="body1"
        color="white"
        sx={{ opacity: 0.8, fontFamily: "Georgia, serif" }}
      >
        Engenheiro de Software
      </Typography>

     
      <a href={pdf} download style={{ textDecoration: "none",display: "flex", justifyContent:"center" }}>
        <StyledButton variant="outlined">
          <DownloadIcon /> Download CV
        </StyledButton>
      </a>

      {/* Lista de navegação */}
      <List sx={{ mt: 4 }}>
        {navItems.map(({ id, label }) => (
          <ListItem key={id} disablePadding>
            <ListItemButton onClick={() => scrollToSection(id)}>
              <ListItemText
                primary={label}
                sx={{
                  textAlign: "center",
                  color: activeSection === id ? COLORS.active : COLORS.link,
                  transition: "color 0.3s ease",
                  "&:hover": { color: COLORS.hover },
                }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box sx={{ display: "flex" }}>
      {/* Botão de menu (mobile) */}
      <IconButton
        aria-label="open drawer"
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
            backgroundColor: COLORS.background,
            boxSizing: "border-box",
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
            backgroundColor: COLORS.background,
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
