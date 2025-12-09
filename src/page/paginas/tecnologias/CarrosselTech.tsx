import Slider from "react-slick";
import {
  Box,
  Card,
  CardContent,
  Typography,
  Rating,
  IconButton,
} from "@mui/material";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { imgData } from "../../../componentes/Componentes";
import { ArrowBackIosNew, ArrowForwardIos } from "@mui/icons-material";
import { useRef } from "react";
import type { IconType } from "react-icons";

interface Tecnologia {
  name: string;
  src: string;
  txt: string;
  level?: number;
  tema?: string;
  icon?: IconType;
}

type Agrupamento = Record<string, Tecnologia[]>;

const agruparTecnologias = (data: Record<string, Tecnologia>): Agrupamento => {
  return Object.values(data).reduce<Agrupamento>((acc, tech) => {
    const grupo = tech.txt;
    if (!acc[grupo]) acc[grupo] = [];
    acc[grupo].push(tech);
    return acc;
  }, {});
};

// --- Componentes personalizados das setas ---
const PrevArrow = ({ onClick }: { onClick?: () => void }) => (
  <IconButton
    onClick={onClick}
    aria-label="Anterior"
    sx={{
      color: "white",
      backgroundColor: "rgba(255,255,255,0.1)",
      "&:hover": { backgroundColor: "rgba(255,255,255,0.25)" },
      mx: 1,
      borderRadius: 2,
      transition: "0.3s",
    }}
  >
    <ArrowBackIosNew fontSize="small" />
  </IconButton>
);

const NextArrow = ({ onClick }: { onClick?: () => void }) => (
  <IconButton
    onClick={onClick}
    aria-label="Próximo"
    sx={{
      color: "white",
      backgroundColor: "rgba(255,255,255,0.1)",
      "&:hover": { backgroundColor: "rgba(255,255,255,0.25)" },
      mx: 1,
      borderRadius: 2,
      transition: "0.3s",
    }}
  >
    <ArrowForwardIos fontSize="small" />
  </IconButton>
);

export function CarrosselTech() {
  const tecnologiasAgrupadas = agruparTecnologias(
    imgData as Record<string, Tecnologia>
  );
  const grupos = Object.keys(tecnologiasAgrupadas);

  const settings = {
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 2,
    slidesToScroll: 1,
    swipeToSlide: true,
    touchThreshold: 15,
    pauseOnHover: true,
    autoplay: false,
    cssEase: "ease-in-out",
    arrows: false, // remove as setas padrão
    responsive: [
      { breakpoint: 1000, settings: { slidesToShow: 2 } },
      { breakpoint: 600, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <Box>
      {grupos.map((grupo) => {
        const tecnologias = tecnologiasAgrupadas[grupo];
        const corGrupo = tecnologias[0]?.tema || "#00bcd4";
        const sliderRef = useRef<Slider | null>(null); // 👈 ref único pra cada carrossel

        return (
          <Box key={grupo} sx={{ mt: 10, textAlign: "center" }}>
            <Typography
              variant="h5"
              sx={{
                color: corGrupo,
                fontWeight: "bold",
                textTransform: "uppercase",
                mb: 2,
                letterSpacing: 5,
              }}
            >
              {grupo}
            </Typography>

            {/* Container para slider e setas */}
            <Box sx={{ position: "relative" }}>
              <Slider ref={sliderRef} {...settings}>
                {tecnologias.map((tech) => (
                  <Box key={tech.name} px={1}>
                    <Card
                      sx={{
                        margin: "1rem",
                        backgroundColor: "#111122",
                        borderRadius: 3,
                        textAlign: "center",
                        height: "100%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        transition: "0.3s",
                        border: `1px solid ${tech.tema || "#333"}`,
                        "&:hover": {
                          transform: "translateY(-6px)",
                          boxShadow: `0 0 16px ${tech.tema || "#61dafb"}`,
                          "& .tech-icon": { filter: "none" },
                        },
                      }}
                      aria-label={`Tecnologia ${tech.name} - Nível ${tech.level} de 5`}
                    >
                      <CardContent
                        sx={{
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "center",
                          justifyContent: "center",
                          gap: 1.2,
                          py: 3,
                        }}
                      >
                        {tech.icon ? (
                          <Box
                            className="tech-icon"
                            sx={{
                              width: 64,
                              height: 64,
                              mb: 1,
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              color: tech.tema || "#ddd",
                              transition: "0.3s",
                              filter: "grayscale(100%) brightness(0.7)",
                              "& svg": {
                                width: "100%",
                                height: "100%",
                              },
                            }}
                          >
                            <tech.icon />
                          </Box>
                        ) : (
                          <Box
                            className="tech-icon"
                            component="img"
                            src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${tech.src}/${tech.src}-original.svg`}
                            onError={(e) => {
                              const target = e.currentTarget as HTMLImageElement;
                              target.src = `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${tech.src}/${tech.src}-plain.svg`;
                              target.onerror = () => {
                                target.src = `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${tech.src}/${tech.src}-line.svg`;
                              };
                            }}
                            alt={`Logo da tecnologia ${tech.name}`}
                            sx={{
                              width: 64,
                              height: 64,
                              mb: 1,
                              filter: "grayscale(100%) brightness(0.7)",
                              transition: "0.3s",
                            }}
                          />
                        )}
                        <Typography
                          variant="h6"
                          fontWeight="bold"
                          sx={{ color: tech.tema || "#ddd" }}
                        >
                          {tech.name}
                        </Typography>
                        <Rating
                          name={`rating-${tech.name}`}
                          value={tech.level || 0}
                          readOnly
                          precision={0.5}
                          size="small"
                          sx={{
                            color: "gold",
                            textShadow: "0 0 5px rgba(255,215,0,0.5)",
                          }}
                        />
                      </CardContent>
                    </Card>
                  </Box>
                ))}
              </Slider>

              {/* Setas personalizadas abaixo */}
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  mt: 2,
                  gap: 4,
                }}
              >
                <PrevArrow onClick={() => sliderRef.current?.slickPrev()} />
                <NextArrow onClick={() => sliderRef.current?.slickNext()} />
              </Box>
            </Box>
          </Box>
        );
      })}
    </Box>
  );
}
