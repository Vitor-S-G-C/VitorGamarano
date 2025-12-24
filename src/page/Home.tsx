import { Container, Box } from "@mui/material";
import { lazy, Suspense } from "react";
import PermanentSidebar from "../navabar/Navbar";
import Hero from "./paginas/About";
import LoadingSpinner from "../componentes/LoadingSpinner";

// Lazy loading para componentes pesados
const Tecnologias = lazy(() => import("./paginas/Tecnologias"));
const Experiencia = lazy(() => import("./paginas/Experiencia"));
const Projetos = lazy(() => import("./paginas/Projetos/Project"));
const RedesSociais = lazy(() => import("./paginas/social/RedesSociais"));
const Certificados = lazy(() => import("./paginas/conquistas/Certificado"));

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
          <Suspense fallback={<LoadingSpinner />}>
            <section id="Certificados">
              <Certificados />
            </section>
          </Suspense>
          <Suspense fallback={<LoadingSpinner />}>
            <section id="tecnologias">
              <Tecnologias />
            </section>
          </Suspense>
          <Suspense fallback={<LoadingSpinner />}>
            <section id="experiencia">
              <Experiencia />
            </section>
          </Suspense>
          <Suspense fallback={<LoadingSpinner />}>
            <section id="projetos">
              <Projetos />
            </section>
          </Suspense>
          <Suspense fallback={<LoadingSpinner />}>
            <section id="Redes Sociais">
              <RedesSociais />
            </section>
          </Suspense>
        </Box>
        <PermanentSidebar />
      </Container>
    </>
  );
};

export default Home;
