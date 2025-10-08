import { styled } from "@mui/material";
import { type ReactNode, type ButtonHTMLAttributes } from "react";

interface StyledButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

const StyledButton: React.FC<StyledButtonProps> = ({ children, ...props }) => {
  const Button = styled("button")(({ theme }) => ({
    backgroundColor: "transparent",
    border: `1px solid ${theme.palette.primary.contrastText}`,
    borderRadius: "3px",
    padding: "5px 15px",
    width: "100%",
    color: theme.palette.primary.contrastText,
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    textDecoration: "none",
    gap: "10px",
    "&:hover": {
      backgroundColor: theme.palette.secondary.light,
    },
  }));

  return <Button {...props}>{children}</Button>;
};

export default StyledButton;
