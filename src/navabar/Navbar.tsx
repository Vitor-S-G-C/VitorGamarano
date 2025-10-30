import { useEffect, useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Offcanvas from "react-bootstrap/Offcanvas";
import HomeFilledIcon from "@mui/icons-material/HomeFilled";

interface NavItem {
  label: string;
  id: string;
}

export default function NavbarComponent() {
  const [activeSection, setActiveSection] = useState("home");

  const navItems: NavItem[] = [
    { label: "Habilidades", id: "tecnologias" },
    { label: "Projetos", id: "projetos" },
    { label: "Contato", id: "contato" },
  ];

  // Scroll suave
  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      const yOffset = -80;
      const y = section.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  // Detecta seção ativa
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

  // Cores consistentes
  const linkColor = "#ffffff"; // padrão
  const activeColor = "#90caf9"; // ativo / destaque
  const hoverColor = "#b0d4ff"; // hover

  return (
    <Navbar
      bg="dark"
      variant="dark"
      expand="md"
      className="fixed-top shadow-lg"
    >
      <Container fluid>
        <Navbar.Brand
          className="d-flex align-items-center"
          style={{ cursor: "pointer", color: linkColor }}
          onClick={() => scrollToSection("home")}
        >
          <HomeFilledIcon style={{ marginRight: "0.5rem", color: linkColor }} />
          Vitor Gamarano
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="offcanvasNavbar" />
        <Navbar.Offcanvas
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
          placement="end"
          style={{ backgroundColor: "#212529" }} // fundo escuro consistente no mobile
        >
          <Offcanvas.Header closeButton closeVariant="white">
            <Offcanvas.Title
              id="offcanvasNavbarLabel"
              style={{ color: linkColor }}
            >
              Menu
            </Offcanvas.Title>
          </Offcanvas.Header>

          <Offcanvas.Body>
            <Nav className="ms-auto d-flex flex-column flex-md-row">
              {navItems.map((item) => (
                <Nav.Link
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  style={{
                    color: activeSection === item.id ? activeColor : linkColor,
                    fontWeight: "bold",
                    marginLeft: "1rem",
                    marginTop: "0.5rem",
                    marginBottom: "0.5rem",
                    cursor: "pointer",
                    transition: "color 0.3s ease",
                  }}
                  onMouseEnter={(e) =>
                    ((e.target as HTMLElement).style.color = hoverColor)
                  }
                  onMouseLeave={(e) =>
                    ((e.target as HTMLElement).style.color =
                      activeSection === item.id ? activeColor : linkColor)
                  }
                >
                  {item.label}
                </Nav.Link>
              ))}
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
}
