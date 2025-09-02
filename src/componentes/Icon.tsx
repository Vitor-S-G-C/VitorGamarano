import { FaInstagram, FaLinkedin , FaGithub} from "react-icons/fa";
import { FaJs } from "react-icons/fa";

export default function RedesSociais() {
  return (
    
    <div style={{ display: "flex", gap: "16px" }}>
      
      <a href="https://www.instagram.com/vitor.s.g.c/" target="_blank" rel="noopener noreferrer">
        <FaInstagram size={30} color="#E4405F" />
      </a>

      <a href="https://github.com/Vitor-S-G-C"
 target="_blank" rel="noopener noreferrer">
        <FaGithub size={30} color="#f3f3f3ff" />
      </a>

      <a href="https://linkedin.com/in/seuPerfil" target="_blank" rel="noopener noreferrer">
        <FaLinkedin size={30} color="#0A66C2" />
      </a>
    </div>
  );
}


export  function Js() {
  return (
     <a href="https://www.instagram.com/vitor.s.g.c/" target="_blank" rel="noopener noreferrer">
        <FaJs size={30} color="#E4405F" />
      </a>
  )
}
      
