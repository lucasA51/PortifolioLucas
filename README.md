# 🌐 Portfólio Web — Lucas Andrade dos Santos

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Vanilla JS](https://img.shields.io/badge/Vanilla_JS-Zero_Deps-informational?style=for-the-badge)
![Status](https://img.shields.io/badge/Status-Concluído-success?style=for-the-badge)

> Portfólio pessoal moderno, responsivo e minimalista, projetado para apresentar trajetória, projetos desenvolvidos, competências técnicas e certificados de desenvolvimento web.

---

## Sumário

- [Visão Geral](#-visão-geral)
- [Demonstração das Páginas](#-demonstração-das-páginas)
- [Principais Recursos e Destaques](#-principais-recursos-e-destaques)
- [Tecnologias Utilizadas](#-tecnologias-utilizadas)
- [Arquitetura e Fluxo de Dados](#-arquitetura-e-fluxo-de-dados)
- [Estrutura de Arquivos](#-estrutura-de-arquivos)
- [Guia de Configuração e Customização](#-guia-de-configuração-e-customização)
  - [Perfil e Redes Sociais](#1-perfil-e-redes-sociais)
  - [Apresentação Pessoal (Sobre Mim)](#2-apresentação-pessoal-sobre-mim)
  - [Certificados](#3-certificados)
  - [Projetos](#4-projetos)
- [Como Executar Localmente](#-como-executar-localmente)
- [Publicação e Deploy](#-publicação-e-deploy)
- [Autor](#-autor)

---

## Visão Geral

Este projeto consiste em uma aplicação web estática criada para servir como vitrine profissional de projetos e qualificações. Desenvolvido no contexto do **Programa Trilhas** (Trilha de Desenvolvimento Front-end), o projeto foca em excelência nos fundamentos da web: **código limpo**, **semântica**, **acessibilidade** e **performance**.

O principal diferencial da aplicação é sua **arquitetura orientada a dados (data-driven)**: toda a informação do portfólio (biografia, dados de contato, redes sociais, links para certificados e lista de projetos) fica desacoplada do HTML e do CSS, centralizada no arquivo de dados `js/dados.js`. Dessa forma, o site pode ser atualizado e mantido com facilidade, sem a necessidade de reescrever estruturas de página ou manipular código de estilização.

---

## Demonstração das Páginas

O portfólio é organizado em três visões complementares:

1. **Início (`index.html`):** Cartão de boas-vindas com foto de perfil, título profissional, botões de ação rápida e links para redes sociais (GitHub e LinkedIn).
2. **Sobre Mim (`sobre.html`):** Apresentação detalhada da trajetória, motivações, valores e metas de carreira, com renderização dinâmica de múltiplos parágrafos.
3. **Projetos (`projetos.html`):** Grade responsiva com cards interativos de projetos em destaque, exibindo imagem, título descritivo, resumo técnico e botão para acesso ao repositório ou demonstração.

---

## Principais Recursos e Destaques

- ** Design Minimalista com Glassmorphism Suave:** Paleta em tons pastel (lavanda, lilás e azul) composta por gradientes radiais nativos em CSS (`radial-gradient`), combinada com botões translúcidos e efeito de desfoque (`backdrop-filter: blur`).
- ** 100% Responsivo:** Grid e layout fluidos pensados com metodologia Mobile-First, adaptando-se confortavelmente desde smartphones (360px+) até monitores ultrawide.
- ** Zero Dependências Externas:** Construído puramente com **Vanilla JavaScript**, sem bibliotecas ou frameworks pesados (como React, Vue ou Bootstrap), garantindo carregamento instantâneo e pontuação máxima em desempenho.
- ** Acessibilidade e Semântica (a11y):** Uso rigoroso de tags semânticas (`<main>`, `<header>`, `<nav>`, `<article>`, `<footer>`), suporte a navegação por teclado (`:focus-visible`), atributos `aria-label` e ícones SVG inline otimizados.
- ** Tratamento Defensivo:** Fallback automático para imagens com erro de carregamento e estado vazio amigável caso nenhum projeto esteja cadastrado.

---

## Tecnologias Utilizadas

| Tecnologia | Descrição |
|---|---|
| **HTML5** | Estruturação semântica, meta tags para SEO e compatibilidade multi-dispositivo. |
| **CSS3** | Variáveis CSS (Design Tokens), Flexbox, CSS Grid, Glassmorphism, transições suaves e gradientes nativos. |
| **JavaScript (ES6+)** | Manipulação dinâmica do DOM, renderização desacoplada de dados e controle de eventos. |

---

## Arquitetura e Fluxo de Dados

A aplicação adota um padrão de separação de responsabilidades simples e eficaz:

```mermaid
flowchart LR
    A["js/dados.js<br/>(Fonte Única de Dados)"] -->|Fornece portfolioData| B["js/script.js<br/>(Engine de Renderização)"]
    B -->|Preenche elementos [data-perfil]| C["index.html<br/>(Página Inicial)"]
    B -->|Injeta parágrafos semânticos| D["sobre.html<br/>(Sobre Mim)"]
    B -->|Gera cards dinâmicos na grid| E["projetos.html<br/>(Meus Projetos)"]
```

1. **Camada de Dados (`js/dados.js`):** Expõe o objeto global `portfolioData` contendo as seções `perfil`, `certificados` e `projetos`.
2. **Camada de Lógica (`js/script.js`):** Aguarda o evento `DOMContentLoaded`, valida a integridade dos dados e distribui as informações para as tags correspondentes usando seletores de atributo (`data-perfil`) ou geração programática de elementos HTML.
3. **Camada de Apresentação (`*.html` + `css/style.css`):** Estrutura estática limpa e estilização compartilhada baseada em variáveis globais.

---

## Estrutura de Arquivos

```text
portifolio-lucas/
├── index.html              # Página inicial (perfil, menu principal e redes sociais)
├── sobre.html              # Página com biografia e apresentação profissional
├── projetos.html           # Página com a galeria de projetos em destaque
├── css/
│   └── style.css           # Estilos unificados, design tokens e responsividade
├── js/
│   ├── dados.js            # Arquivo de configuração e dados (Single Source of Truth)
│   └── script.js           # Lógica JavaScript (injeção no DOM e interatividade)
├── assets/
│   └── img/                # Fotos de perfil, capas dos projetos e ícones SVG
├── .gitignore              # Arquivos e pastas desconsiderados pelo Git
└── README.md               # Documentação completa do projeto
```

---

## Guia de Configuração e Customização

Toda a personalização do portfólio é feita no arquivo:

> **`js/dados.js`**

Não é necessário alterar nenhuma linha dos arquivos HTML ou CSS para atualizar as informações do site.

### 1. Perfil e Redes Sociais

No início do objeto `portfolioData`, edite a chave `perfil`:

```javascript
perfil: {
  nome: "Lucas Andrade dos Santos",
  cargo: "Desenvolvedor Front-end no Programa Trilhas",
  foto: "assets/img/foto-perfil.jpg", // Caminho local ou URL externa da imagem
  github: "https://github.com/lucasA51",
  linkedin: "https://www.linkedin.com/in/135lucassantos"
}
```

- **Foto de perfil:** Recomenda-se imagem quadrada (ex: 500x500px). O CSS aplica corte circular automático.
- **Redes Sociais:** Se algum dos links estiver vazio (`""`), o botão correspondente será ocultado automaticamente.

### 2. Apresentação Pessoal ("Sobre Mim")

Defina o texto biográfico na propriedade `sobre`:

```javascript
sobre: `Olá! Sou apaixonado por tecnologia e por transformar ideias em experiências digitais...

Como estudante de Front-end pelo Programa Trilhas, busco construir uma base técnica sólida...`
```

> **Dica:** Parágrafos separados por linhas em branco no texto serão renderizados automaticamente como tags `<p>` individuais na página `sobre.html`.

### 3. Certificados

Configure o link para o diretório de certificados (ex.: pasta pública no Google Drive):

```javascript
certificados: {
  urlPasta: "https://drive.google.com/drive/folders/SEU_LINK_AQUI"
}
```

O botão **"Acesse os meus certificados"** na página inicial direcionará o usuário para esta URL em uma nova aba.

### 4. Projetos

A seção de projetos é gerenciada através de uma lista de objetos:

```javascript
projetos: [
  {
    titulo: "Filtro Digital",
    descricao: "Implementa filtro passa alta e baixa em python e demonstra propriedades graficamente.",
    imagem: "assets/img/projeto-1.jpg",
    url: "https://github.com/lucasA51/ProjetoFiltroDigital"
  },
  {
    titulo: "Sensor MQTT",
    descricao: "Simulação de sensor de distância enviando dados via MQTT para dashboard e SQLite.",
    imagem: "assets/img/projeto-2.png",
    url: "https://github.com/lucasA51/sensor-mqtt"
  }
]
```

- **Adicionar:** Duplique um bloco de objeto dentro do array `projetos`.
- **Remover:** Exclua o bloco do projeto indesejado.
- **Link em breve:** Se deixar `url: ""`, o card exibirá o botão desabilitado com o rótulo *"Link em breve"*.

---

## Como Executar Localmente

Por se tratar de um site estático puro, não há etapas de compilação ou instalação de pacotes gerenciados via npm/yarn.

### Pré-requisitos
- Um navegador web moderno (Google Chrome, Firefox, Edge, Safari, Opera).

### Passo a Passo

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/lucasA51/PortifolioLucas.git
   cd PortifolioLucas
   ```

2. **Execute a aplicação por uma das opções:**

   - **Opção 1 — Abertura Direta:**  
     Dê um duplo clique no arquivo `index.html` ou abra-o diretamente no seu navegador.

   - **Opção 2 — Extensão Live Server (VS Code):**  
     Abra a pasta do projeto no VS Code, clique com o botão direito no `index.html` e escolha **"Open with Live Server"**.

   - **Opção 3 — Servidor Local com Python:**  
     No terminal, dentro da pasta do projeto, execute:
     ```bash
     # Python 3
     python3 -m http.server 8000
     ```
     Em seguida, acesse no navegador: `http://localhost:8000`

---

## Publicação e Deploy

Como a estrutura utiliza referências e caminhos relativos para todos os assets e scripts, o projeto está pronto para deploy instantâneo em qualquer plataforma de hospedagem de páginas estáticas:

- **GitHub Pages:**
  1. Vá em **Settings** > **Pages** no repositório.
  2. Em **Source**, selecione `Deploy from a branch`.
  3. Escolha o branch `master` (ou `main`) e o diretório `/ (root)`.
  4. Salve e acesse pela URL pública gerada.
- **Vercel / Netlify:**
  - Basta conectar o repositório; o deploy ocorre sem necessidade de comando de build.

---

## Autor

**Lucas Andrade dos Santos**  
*Desenvolvedor Front-end em formação no Programa Trilhas*

- **GitHub:** [@lucasA51](https://github.com/lucasA51)
- **LinkedIn:** [Lucas Santos](https://www.linkedin.com/in/135lucassantos)

---

<div align="center">
  <sub>Desenvolvido com dedicação durante a Trilha de Desenvolvimento Front-end do Programa Trilhas.</sub>
</div>
