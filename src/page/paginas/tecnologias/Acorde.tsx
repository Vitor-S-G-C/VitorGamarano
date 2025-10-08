import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Typography from "@mui/material/Typography";

import Backend from "./BackEnd";
import DataBase from "./Database";
import Ferramenta from "./Ferramenta";
import Frontend from "./Frontend";





export const Acorde: React.FC = () => {
  return (
    <>
      <Accordion sx={{ backgroundColor: "#363636ff", borderRadius: 2, mb: 2 }}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography
            variant="h4"
            sx={{
              color: "primary.main",
              fontWeight: "bold",
              textAlign: "center",
              mb: 5,
              fontFamily: "Georgia, serif",
              fontSize: 42,
            }}
          >
            Frontend
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Frontend />
        </AccordionDetails>
      </Accordion>
    
      <Accordion sx={{ backgroundColor: "#363636ff", borderRadius: 2, mb: 2 }}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography
            variant="h4"
            sx={{
              color: "primary.main",
              fontWeight: "bold",
              textAlign: "center",
              mb: 5,
              fontFamily: "Georgia, serif",
              fontSize: 42,
            }}
          >
            Backend
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Backend />
        </AccordionDetails>
      </Accordion>
      <Accordion sx={{ backgroundColor: "#363636ff", borderRadius: 2, mb: 2 }}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography
            variant="h4"
            sx={{
              color: "primary.main",
              fontWeight: "bold",
              textAlign: "center",
              mb: 5,
              fontFamily: "Georgia, serif",
              fontSize: 42,
            }}
          >
            Banco de Dados
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <DataBase />
        </AccordionDetails>
      </Accordion>
      <Accordion sx={{ backgroundColor: "#363636ff", borderRadius: 2, mb: 2 }}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography
            variant="h4"
            sx={{
              color: "primary.main",
              fontWeight: "bold",
              textAlign: "center",
              mb: 5,
              fontFamily: "Georgia, serif",
              fontSize: 42,
            }}
          >
            Ferramentas
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Ferramenta />
        </AccordionDetails>
      </Accordion>
    </>
  );
};
