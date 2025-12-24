import { Button, Tooltip } from "@mui/material";
import { FaDownload } from "react-icons/fa";
import curriculoData from "../assets/curriculo.json";

export function DownloadCurriculo() {
  const gerarCurriculoTxt = () => {
    const {
      nome,
      email,
      github,
      localizacao,
      resumoProfissional,
      experienciasProfissionais,
      formacaoAcademica,
      habilidadesTecnicas,
      idiomas,
      certificacoes,
    } = curriculoData;

    let conteudo = `
╔════════════════════════════════════════════════════════════════╗
║                        CURRÍCULO                               ║
║                    VITOR GAMARANO                              ║
╚════════════════════════════════════════════════════════════════╝

📋 DADOS PESSOAIS
═══════════════════════════════════════════════════════════════

Nome: ${nome}
E-mail: ${email}
GitHub: ${github}
Localização: ${localizacao}

📝 RESUMO PROFISSIONAL
═══════════════════════════════════════════════════════════════

${resumoProfissional}

💼 EXPERIÊNCIA PROFISSIONAL
═══════════════════════════════════════════════════════════════

${experienciasProfissionais
  .map(
    (exp: { titulo: string; descricao: string }) => `
${exp.titulo}

${exp.descricao}
`
  )
  .join("\n")}

🎓 FORMAÇÃO ACADÊMICA
═══════════════════════════════════════════════════════════════

${formacaoAcademica
  .map((form: { grau: string; instituicao: string }) => `${form.grau} – ${form.instituicao}`)
  .join("\n")}

🛠️ HABILIDADES TÉCNICAS
═══════════════════════════════════════════════════════════════

Linguagens: ${habilidadesTecnicas.linguagens.join(", ")}
Frameworks: ${habilidadesTecnicas.frameworks.join(", ")}
Banco de Dados: ${habilidadesTecnicas.bancoDados.join(", ")}
Ferramentas: ${habilidadesTecnicas.ferramentas.join(", ")}
Conceitos: ${habilidadesTecnicas.conceitos.join(", ")}

🌍 IDIOMAS
═══════════════════════════════════════════════════════════════

${idiomas.map((idioma: { idioma: string; nivel: string }) => `${idioma.idioma}: ${idioma.nivel}`).join("\n")}

📜 CERTIFICAÇÕES
═══════════════════════════════════════════════════════════════

${certificacoes
  .map(
    (cert: { nome: string; instituicao: string; cargaHoraria: string }) => `
${cert.nome}
Instituição: ${cert.instituicao}
Carga Horária: ${cert.cargaHoraria}
`
  )
  .join("\n")}
`;

    return conteudo;
  };

  const gerarCurriculoPDF = () => {
    // Nota: Para PDF real, seria necessário usar uma biblioteca como jsPDF
    // Por enquanto, estamos usando TXT que é mais simples
    const texto = gerarCurriculoTxt();
    const blob = new Blob([texto], { type: "text/plain;charset=utf-8" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "Curriculo_VitorGamarano.txt";
    link.click();
  };

  return (
    <Tooltip title="Baixar Currículo em Formato TXT">
      <Button
        onClick={gerarCurriculoPDF}
        startIcon={<FaDownload />}
        sx={{
          px: 3,
          py: 1.2,
          borderRadius: 2,
          textTransform: "none",
          fontWeight: 600,
          fontSize: "1rem",
          background: "linear-gradient(90deg, #1976d2, #1565c0)",
          color: "#fff",
          border: "none",
          cursor: "pointer",
          transition: "all 0.3s ease",
          "&:hover": {
            transform: "translateY(-2px)",
            boxShadow: "0 8px 16px rgba(25, 118, 210, 0.4)",
            background: "linear-gradient(90deg, #1565c0, #0d47a1)",
          },
        }}
      >
        Download CV
      </Button>
    </Tooltip>
  );
}
