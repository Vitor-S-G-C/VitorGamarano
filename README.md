# 🚀 Portfólio Vitor Gamarano

Portfólio profissional desenvolvido com as mais modernas tecnologias web, apresentando projetos, habilidades técnicas e certificações.

## 🎯 Sobre

Este é meu portfólio pessoal onde apresento:
- 💼 Projetos desenvolvidos
- 🎓 Certificados e conquistas
- 💻 Stack de tecnologias
- 📱 Redes sociais e contato

## ✨ Tecnologias Utilizadas

### Frontend
- **React 19** - Biblioteca para construção de interfaces
- **TypeScript** - Superset JavaScript com tipagem estática
- **Material-UI (MUI)** - Framework de componentes React
- **React Router DOM** - Navegação entre páginas
- **React Icons** - Biblioteca de ícones
- **React Slick** - Carrossel de imagens

### Ferramentas e Build
- **Vite** - Build tool extremamente rápido
- **ESLint** - Linter para manter código limpo
- **TypeScript ESLint** - Regras específicas para TS

### Estilização
- **Styled Components** - CSS-in-JS
- **Emotion** - Biblioteca de estilização
- **Bootstrap** - Framework CSS

## 🚀 Como Executar

### Pré-requisitos
- Node.js >= 18.0.0
- npm >= 9.0.0

### Instalação

```bash
# Clone o repositório
git clone https://github.com/Vitor-S-G-C/VitorGamarano.git

# Entre no diretório
cd VitorGamarano

# Instale as dependências
npm install

# Execute em modo de desenvolvimento
npm run dev

# Build para produção
npm run build

# Preview do build de produção
npm run preview
```

## 📦 Scripts Disponíveis

```bash
npm run dev      # Inicia servidor de desenvolvimento
npm run build    # Gera build de produção
npm run preview  # Preview do build
npm run lint     # Executa linter
```

## 🎨 Funcionalidades

- ✅ Design responsivo para todos os dispositivos
- ✅ Lazy loading para otimização de performance
- ✅ SEO otimizado com meta tags
- ✅ Acessibilidade com ARIA labels
- ✅ Animações e transições suaves
- ✅ Carrossel interativo de tecnologias
- ✅ Download de currículo em PDF
- ✅ Integração com GitHub

## 📱 Responsividade

O site é totalmente responsivo e otimizado para:
- 📱 Mobile (< 600px)
- 💻 Tablet (600px - 960px)
- 🖥️ Desktop (> 960px)

## 🌐 Deploy

Este projeto pode ser facilmente deployado em:
- [Vercel](https://vercel.com/)
- [Netlify](https://www.netlify.com/)
- [GitHub Pages](https://pages.github.com/)

## 📄 Licença

Este projeto é de uso pessoal.

## 👤 Contato

**Vitor Gamarano**
- GitHub: [@Vitor-S-G-C](https://github.com/Vitor-S-G-C)

---

⭐ Se você gostou deste projeto, considere dar uma estrela no repositório!

  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
