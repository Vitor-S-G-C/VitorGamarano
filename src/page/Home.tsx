import { Container, Box } from "@mui/material";
import PermanentSidebar from "../navabar/Navbar";
import Hero from "./paginas/About";
import Tecnologias from "./paginas/Tecnologias";
import Projetos from "./paginas/Projetos/Project";
import RedesSociais from "../page/social/RedesSociais";

const SIDEBAR_WIDTH = 250;

const Home = () => {
  return (
    <>
      <PermanentSidebar />

      <Container
        component="main"
        maxWidth={false}
        disableGutters
        sx={{
          width: "80%",
          pt: "64px", // espaço pro AppBar fixo (se existir)
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
          <section id="tecnologias">
            <Tecnologias />
          </section>
          <section id="projetos">
            <Projetos />
          </section>
          <section id="contato">
            <RedesSociais />
          </section>
        </Box>
      </Container>
    </>
  );
};

export default Home;
