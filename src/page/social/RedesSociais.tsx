import { FaInstagram, FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

export default function RedesSociais() {
  const containerStyle: React.CSSProperties = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
    gap: "2rem",
    padding: "2rem 0",
    backgroundColor: "#121212", // fundo escuro moderno
    borderTop: "2px solid #1e1e1e",
  };

  const iconStyle: React.CSSProperties = {
    color: "#d9d9d9", // preto e branco (cinza claro neutro)
    transition: "none",
    cursor: "pointer",
  };

  return (
    <div style={containerStyle}>
      {/* Instagram */}
      <a
        href="https://www.instagram.com/vitor.s.g.c/"
        target="_blank"
        rel="noopener noreferrer"
        style={iconStyle}
        onMouseEnter={(e) =>
          ((e.target as HTMLElement).style.color = "#E4405F")
        }
        onMouseLeave={(e) =>
          ((e.target as HTMLElement).style.color = "#d9d9d9")
        }
      >
        <FaInstagram size={40} />
      </a>

      {/* GitHub */}
      <a
        href="https://github.com/Vitor-S-G-C"
        target="_blank"
        rel="noopener noreferrer"
        style={iconStyle}
        onMouseEnter={(e) =>
          ((e.target as HTMLElement).style.color = "#90caf9")
        }
        onMouseLeave={(e) =>
          ((e.target as HTMLElement).style.color = "#d9d9d9")
        }
      >
        <FaGithub size={40} />
      </a>

      {/* LinkedIn */}
      <a
        href="https://www.linkedin.com/in/vitor-gamarano"
        target="_blank"
        rel="noopener noreferrer"
        style={iconStyle}
        onMouseEnter={(e) =>
          ((e.target as HTMLElement).style.color = "#0A66C2")
        }
        onMouseLeave={(e) =>
          ((e.target as HTMLElement).style.color = "#d9d9d9")
        }
      >
        <FaLinkedin size={40} />
      </a>

      {/* E-mail */}
      <a
        href="mailto:vitorgamarano1@gmail.com?subject=Assunto&body=Ol%C3%A1"
        style={iconStyle}
        onMouseEnter={(e) =>
          ((e.target as HTMLElement).style.color = "#90caf9")
        }
        onMouseLeave={(e) =>
          ((e.target as HTMLElement).style.color = "#d9d9d9")
        }
      >
        <FaEnvelope size={40} />
      </a>
    </div>
  );
}
