import type { Key } from "react";
import { Card, Container } from "react-bootstrap";
import imgData from "../data/tecnologiasImg";

export default function Tecnologias() {
  return (
    <Container
      className="p-4 d-flex justify-content-center align-items-center"
      style={{ minHeight: "80vh" }}
    >
      <Card
        className="shadow-lg bg-dark text-light rounded-4"
        style={{ width: "25rem", minHeight: "32rem" }}
      >
        <Card.Body className="text-center">
          <Card.Title className="mb-4 fs-4 fw-bold">
            Sei trabalhar com as seguintes tecnologias
          </Card.Title>

          <div className="d-flex flex-wrap justify-content-center">
            {imgData.map((tech: { name: Key; src: string }) => (
              <div key={tech.name} className="text-center m-2">
                <img
                  src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${tech.src}/${tech.src}-original.svg`}
                  alt={`${tech.name} logo`}
                  height={55}
                  className="m-2 tech-icon"
                />
                <p className="small text-secondary">{tech.name}</p>
              </div>
            ))}
          </div>
        </Card.Body>
      </Card>
    </Container>
  );
}
