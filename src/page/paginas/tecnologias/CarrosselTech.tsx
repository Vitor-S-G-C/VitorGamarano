import { useEffect } from "react";
import Slider from "react-slick";
import { Box, Card, CardContent, Typography, Rating } from "@mui/material";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { imgData } from "../../../componentes/Componentes";

interface Tecnologia {
  name: string;
  src: string;
  txt: string;
  level?: number;
  tema?: string; // 👈 adiciona a cor temática
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

export function CarrosselTech() {
  const tecnologiasAgrupadas = agruparTecnologias(
    imgData as Record<string, Tecnologia>
  );
  const grupos = Object.keys(tecnologiasAgrupadas);

  // 🔧 Ajuste das setas e dots
  useEffect(() => {
    const style = document.createElement("style");
    style.innerHTML = `
      .slick-prev:before, .slick-next:before {
        color: #ccc !important;
        font-size: 28px !important;
      }
      .slick-dots li button:before {
        color: #888 !important;
      }
      .slick-dots li.slick-active button:before {
        color: #00bcd4 !important;
      }
    `;
    document.head.appendChild(style);
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
    autoplaySpeed: 3000,
    responsive: [
      { breakpoint: 1200, settings: { slidesToShow: 1 } },
      { breakpoint: 900, settings: { slidesToShow: 1 } },
      { breakpoint: 600, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <Box>
      {grupos.map((grupo) => {
        const tecnologias = tecnologiasAgrupadas[grupo];
        // Pega a cor do primeiro item do grupo (já que todos do grupo têm o mesmo txt/tema)
        const corGrupo = tecnologias[0]?.tema || "#00bcd4";

        return (
          <Box key={grupo} sx={{ mt:10 }}>
            <Typography
              variant="h5"
              textAlign="center"
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

            <Slider {...settings}>
              {tecnologias.map((tech) => (
                <Box
                  key={tech.name}
                  px={1}
                 
                >
                  <Card
                    sx={{
                      margin:"1rem",
                      backgroundColor: "#111122",
                      borderRadius: 3,
                      textAlign: "center",
                      height: "100%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      transition: "0.3s",
                      border: `1px solid ${tech.tema || "#333"}`, // 👈 borda na cor do tema
                      "&:hover": {
                        transform: "translateY(-6px)",
                        boxShadow: `0 0 16px ${tech.tema || "#61dafb"}`,
                        "& img": { filter: "none" },
                      },
                    }}
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
                      <Box
                        component="img"
                        src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${tech.src}/${tech.src}-original.svg`}
                        onError={(e) => {
                          const target = e.currentTarget as HTMLImageElement;
                          target.src = `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${tech.src}/${tech.src}-plain.svg`;
                          target.onerror = () => {
                            target.src = `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${tech.src}/${tech.src}-line.svg`;
                          };
                        }}
                        alt={tech.name}
                        sx={{
                          width: 64,
                          height: 64,
                          mb: 1,
                          filter: "grayscale(100%) brightness(0.7)",
                          transition: "0.3s",
                        }}
                      />
                      <Typography
                        variant="h6"
                        fontWeight="bold"
                        sx={{ color: tech.tema || "#ddd" }} // 👈 nome na cor do tema
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
          </Box>
        );
      })}
    </Box>
  );
}
