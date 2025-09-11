import { Container } from "@mui/material";
import Navbar from "../navabar/Navbar";
import Hero from "./paginas/About";
import Tecnologias from "./paginas/Tecnologias";

const Home = () => {
  return (
    <>
      <Navbar />
      <Container className="mb-4" maxWidth={false} disableGutters>
        <div id="home">
          <Hero />
        </div>
        <div id="tecnologias">
          <Tecnologias />
        </div>
      </Container>
    </>
  );
};

export default Home;
