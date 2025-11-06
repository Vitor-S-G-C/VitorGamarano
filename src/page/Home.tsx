import { Container } from "@mui/material";
import PermanentSidebar from "../navabar/Navbar";
import Hero from "./paginas/About";
import Tecnologias from "./paginas/Tecnologias";
import Projetos from "./paginas/Projetos/Project";
import RedesSociais from "../page/social/RedesSociais";

const Home = () => {
  return (
    <>
      <PermanentSidebar />
      <Container className="mb-4" maxWidth={false} disableGutters>
        <div id="home">
          <Hero />
        </div>
        <div id="tecnologias">
          <Tecnologias />
        </div>
        <div id="projetos">
          <Projetos />
          {/* Apenas um componente, que gerencia o carrossel internamente */}
        </div>
        <div id="contato">
          <RedesSociais />
        </div>
      </Container>
    </>
  );
};

export default Home;
