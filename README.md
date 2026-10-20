# Meu Primeiro Portfólio — Programa Trilhas

> **Desafio 1 — Trilha de Desenvolvimento Front-end**  
> Um portfólio pessoal moderno, responsivo e minimalista, desenvolvido exclusivamente com **HTML5, CSS3 e JavaScript puro (Vanilla JS)**, sem frameworks ou dependências externas.

---

## 📋 Sumário

- [Visão Geral](#-visão-geral)
- [Identidade Visual e Design](#-identidade-visual-e-design)
- [Estrutura do Projeto](#-estrutura-do-projeto)
- [Como Executar o Projeto Localmente](#-como-executar-o-projeto-localmente)
- [Como Personalizar Suas Informações](#-como-personalizar-suas-informações)
  - [1. Alterar Nome, Cargo, Foto e Redes Sociais](#1-alterar-nome-cargo-foto-e-redes-sociais)
  - [2. Alterar o Texto da Página "Sobre Mim"](#2-alterar-o-texto-da-página-sobre-mim)
  - [3. Como Adicionar um Novo Projeto](#3-como-adicionar-um-novo-projeto)
  - [4. Como Modificar ou Remover um Projeto](#4-como-modificar-ou-remover-um-projeto)
  - [5. Como Configurar o Acesso aos Certificados](#5-como-configurar-o-acesso-aos-certificados)
- [Como Publicar no GitHub Pages](#-como-publicar-no-github-pages)
- [Boas Práticas Implementadas](#-boas-práticas-implementadas)

---

## 🌟 Visão Geral

Este projeto foi construído para ser o seu primeiro portfólio oficial como desenvolvedor Front-end no Programa Trilhas. Ele foi arquitetado com uma prioridade fundamental: **facilidade extrema de personalização**.

Todas as informações pessoais, biografia, redes sociais, certificados e projetos estão centralizados em um único arquivo de dados (`js/dados.js`). Isso significa que você pode:
- Adicionar ou remover projetos apenas editando uma lista simples.
- Atualizar seu nome, cargo ou foto em um só lugar, refletindo automaticamente em todas as páginas.
- Manter o código HTML e a lógica JavaScript intactos, evitando erros de sintaxe ou quebra de layout.

---

## 🎨 Identidade Visual e Design

O design reproduz fielmente as especificações visuais do Figma do desafio:

- **Fundo Pastel Difuso:** Fundo suave com manchas orgânicas em tons de lavanda, rosa e azul pastel criadas com `radial-gradient` puro no CSS.
- **Translucidez (Glassmorphism Suave):** Botões e cartões com fundo translúcido e desfoque suave (`backdrop-filter: blur()`), bordas finas e cantos arredondados.
- **Tipografia e Espaçamentos:** Tipografia limpa baseada no sistema, alinhamentos centrais equilibrados e foco na legibilidade.
- **100% Responsivo:** Funciona perfeitamente em celulares (360px+), tablets e monitores desktop.

---

## 📁 Estrutura do Projeto

```text
portifolio-lucas/
├── index.html              # Página inicial (perfil, botões principais e redes sociais)
├── sobre.html              # Página "Sobre mim" (apresentação, trajetória e navegação)
├── projetos.html           # Página "Veja meus projetos" (cards gerados dinamicamente)
├── css/
│   └── style.css           # Estilos unificados, variáveis CSS e responsividade
├── js/
│   ├── dados.js            # ARQUIVO PRINCIPAL DE PERSONALIZAÇÃO (edite aqui seus dados!)
│   └── script.js           # Lógica JavaScript nativa (manipulação dinâmica do DOM)
├── assets/
│   └── img/
│       ├── perfil-gatinho.png  # Foto de perfil de exemplo (gatinho da referência Figma)
│       ├── perfil.svg          # Avatar vetorial alternativo
│       ├── projeto-exemplo.svg # Ilustração vetorial para projetos
│       ├── projeto-1.svg       # Ilustração: Landing Page
│       ├── projeto-2.svg       # Ilustração: Lógica de Programação
│       └── projeto-3.svg       # Ilustração: Gerenciador de Tarefas
├── .gitignore              # Arquivos ignorados pelo Git
└── README.md               # Este guia completo de instruções
```

---

## 🚀 Como Executar o Projeto Localmente

Você não precisa instalar Node.js, compiladores ou bancos de dados. Por ser um site puramente estático, você pode executá-lo de várias formas:

### Opção 1: Diretamente no Navegador (Mais Rápido)
1. Localize a pasta do projeto no seu gerenciador de arquivos.
2. Dê um duplo clique no arquivo `index.html` (ou clique com botão direito e selecione *Abrir com* seu navegador preferido: Chrome, Firefox, Edge, etc.).

### Opção 2: Pelo Visual Studio Code com a Extensão Live Server (Recomendado)
1. Abra a pasta do projeto no VS Code.
2. Caso ainda não tenha, instale a extensão **Live Server** (de *Ritwick Dey*).
3. Clique com o botão direito sobre o arquivo `index.html` e selecione **"Open with Live Server"**.
4. O navegador abrirá automaticamente em `http://127.0.0.1:5500`.

### Opção 3: Usando Python no Terminal
Se você tiver o Python instalado:
```bash
# Abra o terminal na pasta do projeto e execute:
python3 -m http.server 8000
```
Depois abra seu navegador em: `http://localhost:8000`.

---

## ✏️ Como Personalizar Suas Informações

> **Regra de Ouro:** Todas as suas alterações são feitas exclusivamente no arquivo:  
> 📄 `js/dados.js`

Abra o arquivo `js/dados.js` no seu editor de código (como o VS Code). Você verá a estrutura `portfolioData`.

---

### 1. Alterar Nome, Cargo, Foto e Redes Sociais

No início do arquivo `js/dados.js`, edite o objeto `perfil`:

```javascript
perfil: {
  // Substitua pelo seu nome real
  nome: "Lucas Silva",

  // Substitua pelo seu cargo ou curso atual
  cargo: "Desenvolvedor Front-end no Programa Trilhas",

  // Caminho da sua foto:
  // Coloque seu arquivo (ex: foto.jpg) dentro de assets/img/ e aponte aqui:
  foto: "assets/img/minha-foto.jpg",

  // Link do seu GitHub
  github: "https://github.com/seu-usuario",

  // Link do seu LinkedIn
  linkedin: "https://linkedin.com/in/seu-usuario"
}
```

> **Dica sobre a foto:** Recomendamos utilizar uma foto quadrada (ex: 500x500 pixels). O CSS cuidará de torná-la circular automaticamente. Caso a foto não carregue ou você informe um caminho incorreto, o portfólio possui um mecanismo de proteção que exibe automaticamente uma imagem reserva.

---

### 2. Alterar o Texto da Página "Sobre Mim"

Ainda dentro de `perfil`, edite a propriedade `sobre`:

```javascript
sobre: `Olá! Sou o Lucas, estudante de desenvolvimento Front-end.

Iniciei minha trajetória na tecnologia motivado pelo desejo de criar experiências interativas na internet. Tenho grande interesse em interfaces web acessíveis, animações suaves e design limpo.

Atualmente domino conceitos fundamentais de HTML5, CSS3, lógica com JavaScript e controle de versão com Git/GitHub. Meu objetivo profissional é ingressar em uma equipe de desenvolvimento e contribuir ativamente na construção de produtos reais.`
```

> **Dica:** Você pode separar seus parágrafos com uma linha em branco. O script converterá cada bloco de texto em parágrafos separados na página.

---

### 3. Como Adicionar um Novo Projeto

Para adicionar um projeto à página "Veja meus projetos", basta adicionar um novo objeto ao array `projetos` em `js/dados.js`.

#### Exemplo Concreto:

Suponha que você acabou de criar um projeto de **Calculadora de IMC** e quer colocá-lo no seu portfólio:

1. Salve uma captura de tela do seu projeto dentro da pasta `assets/img/` (exemplo: `assets/img/calculadora-imc.png`).
2. Abra `js/dados.js` e adicione o bloco abaixo dentro do array `projetos`:

```javascript
projetos: [
  // ... seus outros projetos ...

  // Novo projeto adicionado:
  {
    titulo: "Calculadora de IMC",
    descricao: "Aplicação interativa desenvolvida com JavaScript para cálculo do Índice de Massa Corporal com validação de dados.",
    imagem: "assets/img/calculadora-imc.png",
    url: "https://github.com/seu-usuario/calculadora-imc"
  }
]
```

3. Salve o arquivo. Pronto! O novo card aparecerá automaticamente na página `projetos.html`, mantendo a harmonia visual, o alinhamento da grade e o botão de acesso.

---

### 4. Como Modificar ou Remover um Projeto

- **Para Modificar:** Altere o `titulo`, `descricao`, `imagem` ou `url` do projeto desejado no array `projetos`.
- **Para Remover:** Basta apagar o bloco correspondente (do `{` até o `},`) do array `projetos`.

Se você apagar todos os projetos temporariamente, a página exibirá automaticamente uma mensagem amigável informando que os projetos estão sendo preparados.

---

### 5. Como Configurar o Acesso aos Certificados

O botão **"Acesse os meus certificados"** direciona o visitante para a sua pasta pública de certificados (por exemplo, no Google Drive).

Para configurá-lo:
1. Acesse o seu Google Drive e crie uma pasta (ex: "Certificados - Programa Trilhas").
2. Envie seus certificados em PDF para dentro dessa pasta.
3. Clique com o botão direito na pasta > **Compartilhar** > em *Acesso Geral*, mude de *Restrito* para **"Qualquer pessoa com o link"**.
4. Copie o link gerado.
5. Em `js/dados.js`, cole o link na propriedade `urlPasta`:

```javascript
certificados: {
  urlPasta: "https://drive.google.com/drive/folders/1a2b3c4d5e6f7g8h9?usp=sharing"
}
```

6. Se o link for deixado em branco, ao clicar no botão o usuário receberá uma mensagem amigável instruindo sobre a configuração.

---

## 🌐 Como Publicar no GitHub Pages

O portfólio foi arquitetado com caminhos relativos para funcionar imediatamente no **GitHub Pages**. Siga este passo a passo:

### Passo 1: Inicialize o repositório Git localmente (caso ainda não tenha feito)
Abra o terminal na pasta do projeto:
```bash
git init
git add .
git commit -m "feat: Implementação do Desafio 1 — Meu Primeiro Portfólio"
```

### Passo 2: Crie um repositório público no GitHub
1. Acesse [github.com/new](https://github.com/new).
2. Dê um nome ao repositório (exemplo: `portifolio-trilhas`).
3. Mantenha o repositório como **Público**.
4. Não adicione README nem .gitignore (eles já existem no seu projeto).
5. Clique em **Create repository**.

### Passo 3: Envie seu código para o GitHub
Execute os comandos sugeridos pelo GitHub no seu terminal:
```bash
git branch -M main
git remote add origin https://github.com/SEU-USUARIO/portifolio-trilhas.git
git push -u origin main
```

### Passo 4: Ative o GitHub Pages
1. No seu repositório no GitHub, clique na aba **Settings** (Configurações).
2. No menu lateral esquerdo, clique em **Pages**.
3. Na seção **Build and deployment**:
   - Em **Source**, selecione `Deploy from a branch`.
   - Em **Branch**, selecione `main` e a pasta `/(root)`.
4. Clique no botão **Save**.
5. Aguarde cerca de 1 a 2 minutos e recarregue a página.
6. Um aviso com a URL pública do seu portfólio será exibido no topo:
   `https://SEU-USUARIO.github.io/portifolio-trilhas/`

Pronto! Seu portfólio estará online para qualquer pessoa acessar e pronto para ser enviado na plataforma do Programa Trilhas.

---

## 🛡️ Boas Práticas Implementadas

- **HTML5 Semântico:** Uso correto de tags semânticas (`<header>`, `<main>`, `<section>`, `<article>`, `<nav>`, `<footer>`) facilitando indexação e acessibilidade.
- **Acessibilidade (a11y):** Imagens com atributos `alt` descritivos, ícones com `aria-hidden="true"` e links sociais com `aria-label` claros para leitores de tela.
- **Foco e Interatividade:** Elementos interativos com transições suaves e anéis de foco (`:focus-visible`) adequados para navegação via teclado.
- **Segurança:** Todos os links externos abrem em nova aba com `target="_blank"` acompanhado de `rel="noopener noreferrer"`.
- **CSS Modular com Variáveis:** Utilização de CSS Custom Properties (`:root`) para controle ágil de cores, bordas e espaçamentos.
- **Vanilla JavaScript Seguro:** Código desacoplado, sem dependências externas pesadas, com tratamento defensivo para campos vazios e fallback de imagens.

---

Desenvolvido com carinho durante o **Programa Trilhas**. Bons estudos e rumo à carreira Front-end! 🚀
