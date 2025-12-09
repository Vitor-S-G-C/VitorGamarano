import type { IconType } from "react-icons";

export interface Tecnologia {
  name: string;
  src: string;
  txt: string;
  level: number;
  tema?: string;
  icon?: IconType;
}

export interface Projeto {
  name: string;
  video: string;
  github: string;
  description: string;
  techs: Tecnologia[];
}

export interface Certificado {
  id: number;
  nome: string;
  cargaHoraria: string;
  instituicao: string;
  periodo: string;
  arquivo: string;
}

export type ImgData = Record<string, Tecnologia>;
