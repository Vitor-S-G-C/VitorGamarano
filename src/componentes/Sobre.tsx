import { Container, Row, Col, Card } from "react-bootstrap";
import imgData from "../data/tecnologiasImg";
import RedesSociais from "./Icon";

const img5tech = imgData.slice(0, 5);

export default function Sobre() {
  return (
    <Container
      className="bg-dark rounded-3 p-4 position-absolute "
      style={{
        width: "25rem",
        minHeight: "35rem",
        marginTop: "0",
        marginLeft: "0",
      }}
      id="sobre"
    >
      <Row className="text-center">
        <h1 data-shadow="vitor">Vitor</h1>

        <Col>
          <img
            src="./src/assets/Vitor.png"
            alt="Vitor Gamarano"
            className="img-fluid rounded-circle mb-4 shadow-sm"
            style={{
              width: "250px",
              height: "250px",
              objectFit: "cover",
              cursor: "pointer",
            }}
          />
          <Card className="bg-dark text-light border-0 shadow-sm">
            <Card.Body>
              <Card.Title className="mb-3">Eu sou vitor Gamarano</Card.Title>
              <div className="d-flex flex-wrap justify-content-center">
                {img5tech.map((tech: { name: string; src: string }) => (
                  <img
                    key={tech.name}
                    src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${tech.src}/${tech.src}-original.svg`}
                    alt={`${tech.name} logo`}
                    height={45}
                    className="m-2"
                  />
                ))}
                <RedesSociais />
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
