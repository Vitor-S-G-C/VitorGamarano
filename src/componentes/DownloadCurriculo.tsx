import { Button, Tooltip } from "@mui/material";
import { FaDownload } from "react-icons/fa";
import curriculoPDF from "../assets/Vitor-curiculo-v1.pdf";

export function DownloadCurriculo() {
  const downloadCurriculo = () => {
    const link = document.createElement("a");
    link.href = curriculoPDF;
    link.download = "Curriculo_VitorGamarano.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Tooltip title="Baixar Currículo em Formato PDF">
      <Button
        onClick={downloadCurriculo}
        startIcon={<FaDownload />}
        sx={{
          px: 3,
          py: 1.2,
          borderRadius: 2,
          textTransform: "none",
          fontWeight: 600,
          fontSize: "1rem",
          background: "linear-gradient(90deg, #1976d2, #1565c0)",
          color: "#fff",
          border: "none",
          cursor: "pointer",
          transition: "all 0.3s ease",
          "&:hover": {
            transform: "translateY(-2px)",
            boxShadow: "0 8px 16px rgba(25, 118, 210, 0.4)",
            background: "linear-gradient(90deg, #1565c0, #0d47a1)",
          },
        }}
      >
        Download CV
      </Button>
    </Tooltip>
  );
}
