import { Box } from "@mui/material";
import type { BoxProps } from "@mui/material";
import type { ReactNode } from "react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

interface ScrollRevealProps extends BoxProps {
  children: ReactNode;
  animation?: "fadeIn" | "slideUp" | "slideLeft" | "slideRight" | "zoomIn";
  delay?: number;
  duration?: number;
}

export default function ScrollReveal({
  children,
  animation = "fadeIn",
  delay = 0,
  duration = 0.6,
  ...boxProps
}: ScrollRevealProps) {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1, triggerOnce: true });

  const animations = {
    fadeIn: {
      opacity: isVisible ? 1 : 0,
      transition: `opacity ${duration}s ease ${delay}s`,
    },
    slideUp: {
      opacity: isVisible ? 1 : 0,
      transform: isVisible ? "translateY(0)" : "translateY(50px)",
      transition: `all ${duration}s ease ${delay}s`,
    },
    slideLeft: {
      opacity: isVisible ? 1 : 0,
      transform: isVisible ? "translateX(0)" : "translateX(-50px)",
      transition: `all ${duration}s ease ${delay}s`,
    },
    slideRight: {
      opacity: isVisible ? 1 : 0,
      transform: isVisible ? "translateX(0)" : "translateX(50px)",
      transition: `all ${duration}s ease ${delay}s`,
    },
    zoomIn: {
      opacity: isVisible ? 1 : 0,
      transform: isVisible ? "scale(1)" : "scale(0.8)",
      transition: `all ${duration}s ease ${delay}s`,
    },
  };

  return (
    <Box ref={ref} sx={{ ...animations[animation], ...boxProps.sx }} {...boxProps}>
      {children}
    </Box>
  );
}
