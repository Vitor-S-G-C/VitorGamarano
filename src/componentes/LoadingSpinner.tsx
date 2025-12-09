import { Box, CircularProgress, Typography } from "@mui/material";

export default function LoadingSpinner() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "400px",
        gap: 2,
      }}
    >
      <CircularProgress size={60} sx={{ color: "#61dafb" }} />
      <Typography variant="h6" sx={{ color: "grey.400" }}>
        Carregando...
      </Typography>
    </Box>
  );
}
