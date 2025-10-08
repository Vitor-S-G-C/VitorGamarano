import { FaInstagram, FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

export default function RedesSociais() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "24px",
        margin: "2rem",
      }}
    >
      <a
        href="https://www.instagram.com/vitor.s.g.c/"
        target="_blank"
        rel="noopener noreferrer"
      >""
        <FaInstagram size={40} color="#E4405F" />
      </a>

      <a
        href="https://github.com/Vitor-S-G-C"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGithub size={40} color="#f3f3f3ff" />
      </a>

      <a
        href="https://www.linkedin.com/in/vitor-gamarano"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaLinkedin size={40} color="#0A66C2" />
      </a>

      <a href="mailto:vitorgamarano1@gmail.com?subject=Assunto&body=Ol%C3%A1">
        <FaEnvelope size={40} color="#f3f3f3ff" />
      </a>
    </div>
  );
}
