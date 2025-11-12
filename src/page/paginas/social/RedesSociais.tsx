import { FaInstagram, FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

export default function RedesSociais() {
  const containerStyle: React.CSSProperties = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
    gap: "2rem",
    padding: "2rem 0",
    backgroundColor: "#0d0d0d", // tom mais profundo para contraste
    borderTop: "1px solid #1f1f1f",
    boxShadow: "0 -4px 20px rgba(0, 0, 0, 0.4)",
  };

  const iconWrapper: React.CSSProperties = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "60px",
    height: "60px",
    borderRadius: "50%",
    background: "rgba(255, 255, 255, 0.05)",
    transition: "all 0.3s ease",
    cursor: "pointer",
  };

  const iconStyle: React.CSSProperties = {
    color: "#d9d9d9",
    transition: "color 0.3s ease, transform 0.3s ease",
  };

  const handleHover = (e: React.MouseEvent<HTMLElement>, color: string) => {
    const target = e.currentTarget.querySelector("svg") as unknown as HTMLElement;
    if (target) {
      target.style.color = color;
      target.style.transform = "scale(1.2)";
    }
  };

  const handleLeave = (e: React.MouseEvent<HTMLElement>) => {
    const target = e.currentTarget.querySelector("svg") as unknown as HTMLElement;
    if (target) {
      target.style.color = "#d9d9d9";
      target.style.transform = "scale(1)";
    }
  };

  return (
    <div style={containerStyle}>
      {/* Instagram */}
      <a
        href="https://www.instagram.com/vitor.s.g.c/"
        target="_blank"
        rel="noopener noreferrer"
        style={iconWrapper}
        onMouseEnter={(e) => handleHover(e, "#E4405F")}
        onMouseLeave={handleLeave}
      >
        <FaInstagram size={32} style={iconStyle} />
      </a>

      {/* GitHub */}
      <a
        href="https://github.com/Vitor-S-G-C"
        target="_blank"
        rel="noopener noreferrer"
        style={iconWrapper}
        onMouseEnter={(e) => handleHover(e, "#90caf9")}
        onMouseLeave={handleLeave}
      >
        <FaGithub size={32} style={iconStyle} />
      </a>

      {/* LinkedIn */}
      <a
        href="https://www.linkedin.com/in/vitor-gamarano"
        target="_blank"
        rel="noopener noreferrer"
        style={iconWrapper}
        onMouseEnter={(e) => handleHover(e, "#0A66C2")}
        onMouseLeave={handleLeave}
      >
        <FaLinkedin size={32} style={iconStyle} />
      </a>

      {/* E-mail */}
      <a
        href="mailto:vitorgamarano1@gmail.com?subject=Assunto&body=Ol%C3%A1"
        style={iconWrapper}
        onMouseEnter={(e) => handleHover(e, "#90caf9")}
        onMouseLeave={handleLeave}
      >
        <FaEnvelope size={32} style={iconStyle} />
      </a>
    </div>
  );
}
