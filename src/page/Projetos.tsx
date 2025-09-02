import type { FC } from "react";
import { Card, Container } from "react-bootstrap";

const Projetos: FC = () => {
  return (
    <Container
      className="p-4 d-flex justify-content-center align-items-center"
      style={{ height: "100%", width: "100%" }}
    >
      <Card
        className="shadow-lg bg-dark text-light rounded-4"
        style={{ width: "25rem", minHeight: "32rem" }}
      >
        <h1>Meus Projetos</h1>
      </Card>
    </Container>
  );
};

export default Projetos;
