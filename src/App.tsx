import { Route, Routes } from "react-router";
import { Container, Row, Col } from "react-bootstrap";

import Navbar from "./navabar/Navbar";
import Sobre from "./componentes/Sobre";
import Projetos from "./page/Projetos";
import Certificado from "./page/Certificados";
import Tecnologias from "./page/Tecnologias";

function App() {
  return (
    <Container fluid className="mb-5">
      {/* Navbar sempre no topo */}
      <Navbar />
      <Row>
        {/* Coluna fixa com o Sobre */}
        <Col md={3} className="d-none d-md-block">
          <Sobre />
        </Col>
        {/* Coluna dinâmica com as rotas */}
        <Col md={9}>
          <Routes>
            <Route path="/projetos" element={<Projetos />} />
            <Route path="/certificado" element={<Certificado />} />
            <Route path="/tecnologias" element={<Tecnologias />} />
          </Routes>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
