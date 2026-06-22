import { Button, Tooltip } from "@mui/material";
import { FaDownload } from "react-icons/fa";
import { jsPDF } from "jspdf";
import curriculo from "../assets/curriculo.json";
import { useLanguage } from "../contexts/LanguageContext";

export function DownloadCurriculo() {
  const { language, t } = useLanguage();
  const getString = (value: string | Record<string, string>) =>
    typeof value === "object" ? value[language] ?? value["pt"] ?? "" : value;

  const downloadCurriculo = () => {
    const doc = new jsPDF({ unit: "mm", format: "a4" });
    const pageW = doc.internal.pageSize.getWidth();
    const margin = 20;
    const contentW = pageW - margin * 2;
    let y = 20;

    const addPageIfNeeded = (needed = 10) => {
      if (y + needed > doc.internal.pageSize.getHeight() - 15) {
        doc.addPage();
        y = 20;
      }
    };

    const drawSectionLine = () => {
      doc.setDrawColor(0, 0, 0);
      doc.setLineWidth(0.4);
      doc.line(margin, y, margin + contentW, y);
      y += 4;
    };

    // ── Header ──────────────────────────────────────────────
    doc.setFont("helvetica", "bold");
    doc.setFontSize(32);
    doc.setTextColor(15, 15, 15);
    doc.text(curriculo.nome, margin, y);
    y += 12;

    doc.setFontSize(11);
    doc.setTextColor(60, 60, 60);
    doc.text(getString(curriculo.titulo), margin, y);
    y += 7;

    doc.setFont("helvetica", "normal");
    doc.setFontSize(9);
    doc.setTextColor(80, 80, 80);
    const contactLine = `${getString(curriculo.localizacao)}  |  ${curriculo.telefone}  |  ${curriculo.email}  |  ${curriculo.linkedin}`;
    doc.text(contactLine, margin, y, { maxWidth: contentW });
    y += 10;

    doc.setDrawColor(200, 200, 200);
    doc.setLineWidth(0.3);
    doc.line(margin, y, margin + contentW, y);
    y += 8;

    // ── Resumo ───────────────────────────────────────────────
    doc.setFont("helvetica", "bold");
    doc.setFontSize(12);
    doc.setTextColor(20, 20, 20);
    doc.text(t("cv.summary"), margin, y);
    y += 3;
    drawSectionLine();

    doc.setFont("helvetica", "normal");
    doc.setFontSize(9.5);
    doc.setTextColor(50, 50, 50);
    const resumoLines = doc.splitTextToSize(getString(curriculo.resumoProfissional), contentW);
    addPageIfNeeded(resumoLines.length * 5);
    doc.text(resumoLines, margin, y);
    y += resumoLines.length * 5 + 8;

    // ── Experiências ─────────────────────────────────────────
    addPageIfNeeded(12);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(12);
    doc.setTextColor(20, 20, 20);
    doc.text(t("cv.experiences"), margin, y);
    y += 3;
    drawSectionLine();

    for (const exp of curriculo.experienciasProfissionais) {
      addPageIfNeeded(30);
      doc.setFont("helvetica", "bold");
      doc.setFontSize(10);
      doc.setTextColor(20, 20, 20);
      doc.text(`${exp.empresa}  |  ${exp.periodo}`, margin, y);
      y += 5;

      doc.setFont("helvetica", "italic");
      doc.setFontSize(9.5);
      doc.setTextColor(60, 60, 60);
      doc.text(getString(exp.titulo), margin, y);
      y += 5;

      doc.setFont("helvetica", "normal");
      doc.setFontSize(9.5);
      doc.setTextColor(50, 50, 50);
      const bullets = getString(exp.descricao).split(". ").filter(Boolean);
      for (const bullet of bullets) {
        const lines = doc.splitTextToSize(`• ${bullet.trim().replace(/\.$/, "")}`, contentW - 4);
        addPageIfNeeded(lines.length * 5);
        doc.text(lines, margin + 2, y);
        y += lines.length * 5;
      }
      y += 4;
    }

    // ── Educação ─────────────────────────────────────────────
    addPageIfNeeded(20);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(12);
    doc.setTextColor(20, 20, 20);
    doc.text(t("cv.education"), margin, y);
    y += 3;
    drawSectionLine();

    for (const edu of curriculo.formacaoAcademica) {
      addPageIfNeeded(15);
      doc.setFont("helvetica", "bold");
      doc.setFontSize(10);
      doc.setTextColor(20, 20, 20);
      doc.text(getString(edu.instituicao), margin, y);

      doc.setFont("helvetica", "normal");
      doc.setFontSize(10);
      doc.text(getString(edu.periodo), margin + contentW, y, { align: "right" });
      y += 5;

      doc.setFont("helvetica", "normal");
      doc.setFontSize(9.5);
      doc.setTextColor(60, 60, 60);
      const detalhesFormacao = [
        `Graduação: ${getString(edu.grau)}`,
        `Modalidade: ${getString(edu.modalidade)}`,
      ];
      if (edu.previsaoConclusao) {
        detalhesFormacao.push(`${t("cv.expectedCompletion")}: ${getString(edu.previsaoConclusao)}`);
      }
      doc.text(detalhesFormacao.join("  |  "), margin, y);
      y += 8;
    }

    // ── Habilidades ──────────────────────────────────────────
    addPageIfNeeded(30);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(12);
    doc.setTextColor(20, 20, 20);
    doc.text(t("cv.skills"), margin, y);
    y += 3;
    drawSectionLine();

    const skills = curriculo.habilidadesTecnicas;
    const skillRows: [string, string][] = [
      [t("cv.skillCategories.backend"), skills.backend.join(", ")],
      [t("cv.skillCategories.frontend"), skills.frontend.join(", ")],
      [t("cv.skillCategories.tools"), (skills.ferramentas ?? []).join(", ")],
      [t("cv.skillCategories.os"), (skills.sistemasOperacionais ?? []).join(", ")],
      [t("cv.skillCategories.softSkills"), skills.softSkills.join(", ")],
    ];
    doc.setFontSize(9.5);
    for (const [label, value] of skillRows) {
      addPageIfNeeded(8);
      doc.setFont("helvetica", "bold");
      doc.setTextColor(20, 20, 20);
      doc.text(`${label}: `, margin + 2, y);
      const labelW = doc.getTextWidth(`${label}: `);
      doc.setFont("helvetica", "normal");
      doc.setTextColor(50, 50, 50);
      const valueLines = doc.splitTextToSize(value, contentW - labelW - 4);
      doc.text(valueLines, margin + 2 + labelW, y);
      y += valueLines.length * 5;
    }
    y += 4;

    // ── Idiomas ─────────────────────────────────────────────
    addPageIfNeeded(20);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(12);
    doc.setTextColor(20, 20, 20);
    doc.text(t("cv.languages"), margin, y);
    y += 3;
    drawSectionLine();

    doc.setFont("helvetica", "normal");
    doc.setFontSize(9.5);
    doc.setTextColor(50, 50, 50);
    for (const idioma of curriculo.idiomas) {
      addPageIfNeeded(6);
      doc.text(`• ${getString(idioma.idioma)}: ${getString(idioma.nivel)}`, margin + 2, y);
      y += 6;
    }
    y += 2;

    // ── Projetos Pessoais ───────────────────────────────────
    addPageIfNeeded(20);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(12);
    doc.setTextColor(20, 20, 20);
    doc.text(t("cv.projects"), margin, y);
    y += 3;
    drawSectionLine();

    for (const projeto of curriculo.projetosPessoais) {
      addPageIfNeeded(12);
      doc.setFont("helvetica", "bold");
      doc.setFontSize(10);
      doc.setTextColor(20, 20, 20);
      doc.text(`• ${getString(projeto.nome)}`, margin + 2, y);
      y += 5;

      if (projeto.github) {
        addPageIfNeeded(6);
        doc.setFont("helvetica", "normal");
        doc.setFontSize(9.5);
        doc.setTextColor(35, 35, 35);
        const githubLine = doc.splitTextToSize(`GitHub: ${projeto.github}`, contentW - 6);
        doc.text(githubLine, margin + 6, y);
        y += githubLine.length * 5;
      }

      doc.setFont("helvetica", "normal");
      doc.setFontSize(9.5);
      doc.setTextColor(50, 50, 50);
      const descricaoProjeto = doc.splitTextToSize(getString(projeto.descricao), contentW - 6);
      addPageIfNeeded(descricaoProjeto.length * 5);
      doc.text(descricaoProjeto, margin + 6, y);
      y += descricaoProjeto.length * 5 + 3;
    }
    y += 1;

    // ── Certificações ────────────────────────────────────────
    addPageIfNeeded(20);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(12);
    doc.setTextColor(20, 20, 20);
    doc.text(t("cv.certifications"), margin, y);
    y += 3;
    drawSectionLine();

    doc.setFont("helvetica", "normal");
    doc.setFontSize(9.5);
    doc.setTextColor(50, 50, 50);
    for (const cert of curriculo.certificacoes) {
      addPageIfNeeded(6);
      doc.text(`• ${getString(cert.nome)} – ${getString(cert.instituicao)} (${cert.periodo})`, margin + 2, y);
      y += 6;
    }

    doc.save(language === "en" ? "Vitor-resume-v1.pdf" : "Vitor-curriculo-v1.pdf");
  };

  return (
    <Tooltip title={t("download.tooltip")}>
      <Button
        onClick={downloadCurriculo}
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
        {t("download.button")}
      </Button>
    </Tooltip>
  );
}
