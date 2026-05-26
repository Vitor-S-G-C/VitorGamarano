import { Container, Box } from "@mui/material";
import PermanentSidebar from "../navabar/Navbar";
import Hero from "./paginas/About";
import Tecnologias from "./paginas/Tecnologias";
import Experiencia from "./paginas/Experiencia";
import Projetos from "./paginas/Projetos/Project";
// import RedesSociais from "./paginas/social/RedesSociais";
// import Certificados from "./paginas/conquistas/Certificado";

const SIDEBAR_WIDTH = 250;

const Home = () => {
  return (
    <Container
      component="main"
      maxWidth={false}
      disableGutters
      sx={{
        minHeight: "100vh",
        background:
          "radial-gradient(circle at top, rgba(24, 76, 189, 0.18), transparent 28%), var(--bg-base)",
        position: "relative",
      }}
    >
      <PermanentSidebar />
      <Box
        sx={{
          minHeight: "100vh",
          px: { xs: 2, md: 3 },
          py: { xs: 8, md: 3 },
          "@media (min-width:960px)": {
            ml: `${SIDEBAR_WIDTH}px`,
            width: `calc(100% - ${SIDEBAR_WIDTH}px)`,
          },
        }}
      >
        <Box
          sx={{
            maxWidth: 1280,
            mx: "auto",
            display: "flex",
            flexDirection: "column",
            gap: 2.5,
          }}
        >
          <section id="home">
            <Hero />
          </section>
          <section id="tecnologias">
            <Tecnologias />
          </section>
          <section id="projetos">
            <Projetos />
          </section>
          <section id="experiencia">
            <Experiencia />
          </section>
          {/* <section id="certificados">
            <Certificados />
          </section> */}
          {/* <section id="contato">
            <RedesSociais />
          </section> */}
        </Box>
      </Box>
    </Container>
  );
};

export default Home;
