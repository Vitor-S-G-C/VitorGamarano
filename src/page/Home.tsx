import { Container, Box } from "@mui/material";
import PermanentSidebar from "../navabar/Navbar";
import Hero from "./paginas/About";
import Tecnologias from "./paginas/Tecnologias";
import Projetos from "./paginas/projetos/Project";
import RedesSociais from "./paginas/social/RedesSociais";
import Certificados from "./paginas/consquistas/Certificado";

const SIDEBAR_WIDTH = 250;

const Home = () => {
  return (
    <>
      <Container
        bg-black
        component="main"
        maxWidth={false}
        disableGutters
        sx={{
          backgroundColor: "black",
          width: "100%",
          height: "100%",

          "@media (min-width:960px)": {
            ml: `${SIDEBAR_WIDTH}px`,
            width: `calc(100% - ${SIDEBAR_WIDTH}px)`,
          },
        }}
      >
        <Box sx={{ p: 2 }}>
          <section id="home">
            <Hero />
          </section>
          <section id="Certificados">
            <Certificados />
          </section>
          <section id="tecnologias">
            <Tecnologias />
          </section>
          <section id="projetos">
            <Projetos />
          </section>
          <section id="Redes Sociais">
            <RedesSociais />
          </section>
        </Box>
        <PermanentSidebar />
      </Container>
    </>
  );
};

export default Home;
