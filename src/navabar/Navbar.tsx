import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Offcanvas from "react-bootstrap/Offcanvas";
import HomeFilledIcon from "@mui/icons-material/HomeFilled";

export default function NavbarComponent() {
  // Função para scroll suave
  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Navbar bg="dark" variant="dark" expand="md" className="fixed-top">
      <Container fluid>
        {/* Brand */}
        <Navbar.Brand
          className="d-flex align-items-center text-white"
          style={{ cursor: "pointer" }}
          onClick={() => scrollToSection("home")}
        >
          <HomeFilledIcon style={{ marginRight: "0.5rem" }} />
        </Navbar.Brand>

        {/* Toggle para mobile */}
        <Navbar.Toggle aria-controls="offcanvasNavbar" />

        {/* Offcanvas */}
        <Navbar.Offcanvas
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
          placement="end"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id="offcanvasNavbarLabel">Menu</Offcanvas.Title>
          </Offcanvas.Header>

          <Offcanvas.Body>
            <Nav className="mx-auto d-flex justify-content-center"></Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
}
