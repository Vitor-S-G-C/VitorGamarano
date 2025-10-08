import { Box, Container, Grid, Typography, styled } from "@mui/material";
import Avatar from "../../assets/Avatar.png";
import DownloadIcon from "@mui/icons-material/Download";
import StyledButton from "../../utils/styles";
import { AnimatedBackground } from "../../componentes/animetion/Animated";
import pdf from "./../../assets/CV.pdf";
import RedesSociais from "../social/RedesSociais";

const About = () => {
  const StyledAbout = styled("div")(({ theme }) => ({
    backgroundColor: theme.palette.primary.main,
    height: "100vh",
    display: "flex",
    alignItems: "center",
    [theme.breakpoints.up("xs")]: {
      // <= mobile
      marginTop: "3rem",
      height: "120vh",
    },
    [theme.breakpoints.up("md")]: {
      // >=mobile
      paddingTop: "0",
      height: "100vh",
    },
  }));

  const StyledImg = styled("img")(({ theme }) => ({
    width: "75%",
    borderRadius: "50%",
    border: `1px solid ${theme.palette.primary.contrastText}`,
  }));

  return (
    <>
      <StyledAbout>
        <Container maxWidth="lg">
          <Grid container spacing={2}>
            <Grid size={{ xs: 12, md: 5 }}>
              <Box position="relative">
                <Box position="absolute" width={"150%"} top={-100} right={0}>
                  <AnimatedBackground />
                </Box>
                <Box position="relative" textAlign="center">
                  <StyledImg src={Avatar} />
                </Box>
              </Box>
            </Grid>
            <Grid size={{ xs: 12, md: 7 }}>
              <Typography
                color="primary.contrastText"
                variant="h1"
                textAlign="center"
                pb={2}
                sx={{ fontFamily: "Georgia, serif" }}
              >
                Vitor S.G.C
              </Typography>

              <Typography
                color="primary.contrastText"
                variant="h2"
                textAlign="center"
                sx={{ fontFamily: "Georgia, serif" }}
              >
                Engenheiro de Software
              </Typography>

              <Grid
                container
                display="flex"
                justifyContent="center"
                spacing={3}
                pt={3}
              >
                <Grid
                  size={{ xs: 12, md: 4 }}
                  display="flex"
                  justifyContent="center"
                >
                  <a download href={pdf} style={{ textDecoration: "none" }}>
                    <StyledButton>
                      <DownloadIcon /> Download CV
                    </StyledButton>
                  </a>
                </Grid>
              </Grid>
              <RedesSociais />
            </Grid>
          </Grid>
        </Container>
      </StyledAbout>
    </>
  );
};

export default About;

