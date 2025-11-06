import { useEffect, useState } from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
  Box,
  IconButton,
} from "@mui/material";
import HomeFilledIcon from "@mui/icons-material/HomeFilled";
import MenuIcon from "@mui/icons-material/Menu";

interface NavItem {
  label: string;
  id: string;
}

export default function Sidebar() {
  const [activeSection, setActiveSection] = useState("home");
  const [mobileOpen, setMobileOpen] = useState(false);

  const navItems: NavItem[] = [
    { label: "Habilidades", id: "tecnologias" },
    { label: "Projetos", id: "projetos" },
    { label: "Contato", id: "contato" },
  ];

  const drawerWidth = 240;
  const linkColor = "#ffffff";
  const activeColor = "#90caf9";
  const hoverColor = "#b0d4ff";
  const drawerBgColor = "#212121";

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
      navItems.forEach((item) => {
        const section = document.getElementById(item.id);
        if (section) {
          const sectionTop = section.offsetTop - 100;
          if (window.scrollY >= sectionTop) {
            currentSection = item.id;
          }
        }
      });
      setActiveSection(currentSection);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawerContent = (
    <Box
      sx={{
        textAlign: "center",
        backgroundColor: drawerBgColor,
        height: "100%",
        p: 2,
      }}
    >
      <Typography
        variant="h6"
        onClick={() => scrollToSection("home")}
        sx={{
          my: 2,
          color: linkColor,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
        }}
      >
        <HomeFilledIcon sx={{ mr: 1 }} /> Início
      </Typography>

      <List>
        {navItems.map((item) => (
          <ListItem key={item.id} disablePadding>
            <ListItemButton onClick={() => scrollToSection(item.id)}>
              <ListItemText
                primary={item.label}
                sx={{
                  textAlign: "center",
                  color: activeSection === item.id ? activeColor : linkColor,
                  transition: "color 0.3s ease",
                  "&:hover": { color: hoverColor },
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
        color="inherit"
        aria-label="open drawer"
        edge="start"
        onClick={handleDrawerToggle}
        sx={{
          position: "fixed",
          top: 16,
          left: 16,
          zIndex: 1300,
          display: { md: "none" },
          backgroundColor: "#212121",
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
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: "border-box",
            backgroundColor: drawerBgColor,
          },
          display: { xs: "none", md: "block" },
        }}
        open
      >
        {drawerContent}
      </Drawer>

      {/* Sidebar retrátil (mobile) */}
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }}
        sx={{
          display: { xs: "block", md: "none" },
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            backgroundColor: drawerBgColor,
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
          ml: { md: `${drawerWidth}px` }, // Dá espaço pro drawer fixo
          mt: { xs: 6, md: 0 }, // Evita sobreposição do botão mobile
        }}
      >
        {/* Aqui vai o conteúdo da página */}
      </Box>
    </Box>
  );
}
