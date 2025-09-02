import { Container, Nav, Navbar as NavbarBs } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import Sobre from "../componentes/Sobre";

export default function Navbar() {
  return (
    <>
      <NavbarBs sticky="top" className="bg-dark mb-5">
        <Container className="d-flex justify-content-center">
          <Nav className="me-auto"> 
            <Nav.Link 
              as={NavLink} 
              to="/tecnologias" 
              className="fs-4 text-white"
            >
              Tecnologias
            </Nav.Link>

            <Nav.Link 
              as={NavLink} 
              to="/certificado" 
              className="fs-4 text-white"
            >
              Certificados
            </Nav.Link>

            <Nav.Link 
              as={NavLink} 
              to="/projetos" 
              className="fs-4 text-white"
            >
              Projetos
            </Nav.Link>
          </Nav>
        </Container>
      </NavbarBs>

      <div className="position-absolute">
        <Sobre />
      </div>
    </>
  );
}
