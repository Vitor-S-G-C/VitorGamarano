import { Component } from "react";
import type { ErrorInfo, ReactNode } from "react";
import { Box, Button, Container, Typography } from "@mui/material";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import RefreshIcon from "@mui/icons-material/Refresh";

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null,
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Erro capturado pelo ErrorBoundary:", error, errorInfo);
  }

  private handleReload = () => {
    window.location.reload();
  };

  public render() {
    if (this.state.hasError) {
      return (
        <Container maxWidth="md">
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              minHeight: "100vh",
              textAlign: "center",
              gap: 3,
              backgroundColor: "#000",
              color: "#fff",
            }}
          >
            <ErrorOutlineIcon sx={{ fontSize: 100, color: "#f44336" }} />
            
            <Typography variant="h3" fontWeight="bold" color="#fff">
              Ops! Algo deu errado
            </Typography>
            
            <Typography variant="h6" color="grey.400" sx={{ maxWidth: 600 }}>
              Desculpe, encontramos um erro inesperado. Nossa equipe foi notificada
              e estamos trabalhando para resolver o problema.
            </Typography>

            {import.meta.env.DEV && this.state.error && (
              <Box
                sx={{
                  mt: 2,
                  p: 2,
                  backgroundColor: "rgba(255,255,255,0.05)",
                  borderRadius: 2,
                  maxWidth: 800,
                  width: "100%",
                  textAlign: "left",
                }}
              >
                <Typography variant="caption" color="error" component="pre">
                  {this.state.error.toString()}
                </Typography>
              </Box>
            )}

            <Button
              variant="contained"
              size="large"
              startIcon={<RefreshIcon />}
              onClick={this.handleReload}
              sx={{
                mt: 2,
                backgroundColor: "#61dafb",
                "&:hover": { backgroundColor: "#4fc3f7" },
                textTransform: "none",
                fontWeight: "bold",
                px: 4,
                py: 1.5,
              }}
            >
              Recarregar Página
            </Button>
          </Box>
        </Container>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
