/**
 * ====================================================================
 * DADOS PERSONALIZÁVEIS DO PORTFÓLIO
 * ====================================================================
 * 
 * Este arquivo centraliza todas as informações do seu portfólio.
 * Para personalizar o site com os seus dados, basta alterar os valores
 * abaixo. Você NÃO precisa mexer no código HTML ou CSS!
 * 
 * DICAS:
 * - Mantenha as aspas ao redor dos textos.
 * - Caso ainda não tenha algum link (ex: LinkedIn ou GitHub), você pode
 *   deixar entre aspas vazias ("") ou com o seu link de exemplo.
 * - Para adicionar novos projetos, copie um bloco do array "projetos"
 *   e cole logo abaixo, separando por vírgula.
 */

const portfolioData = {
  // Informações do perfil exibidas em todas as páginas
  perfil: {
    // Seu nome completo como deseja que apareça no site
    nome: "Lucas Andrade dos Santos",

    // Seu cargo ou descrição profissional
    cargo: "Desenvolvedor Front-end no Programa Trilhas",

    // Caminho para a sua foto de perfil.
    // Você pode usar a imagem do gatinho ("assets/img/perfil-gatinho.png"),
    // o avatar padrão ("assets/img/perfil.svg") ou colocar sua própria foto
    // na pasta assets/img/ (ex: "assets/img/minha-foto.jpg").
    foto: "assets/img/foto-perfil.jpg",

    // Texto de apresentação pessoal para a página "Sobre mim".
    // Você pode escrever parágrafos separados por quebra de linha.
    sobre: `Olá! Sou apaixonado por tecnologia e por transformar ideias em experiências digitais. Para mim, o desenvolvimento web é a ferramenta ideal para construir soluções que facilitem o dia a dia e entreguem valor real aos usuários.

Como estudante de Front-end pelo Programa Trilhas, busco construir uma base técnica sólida. Dedico-me ao domínio de HTML5, CSS3 e JavaScript, sempre unindo a teoria com boas práticas de programação e código limpo.

Acredito que a internet deve ser um espaço inclusivo. Meu objetivo é desenvolver interfaces modernas, estritamente acessíveis e totalmente responsivas em qualquer tamanho de tela, combinando uma ótima usabilidade com excelência visual.

Sou movido pela curiosidade e pelo trabalho em equipe. Busco colaborar em projetos inovadores que impulsionem minha evolução técnica, sempre pronto para agregar valor e entregar aplicações web de alto impacto e qualidade.
`,

    // Link para o seu perfil no GitHub (ex: "https://github.com/seu-usuario")
    github: "https://github.com/lucasA51",

    // Link para o seu perfil no LinkedIn (ex: "https://linkedin.com/in/seu-usuario")
    linkedin: "https://www.linkedin.com/in/135lucassantos"
  },

  // Configuração dos certificados
  certificados: {
    // Link para a pasta pública do Google Drive contendo seus certificados
    urlPasta: "https://drive.google.com/drive/folders/13rzFfOsYxW7p9urIWp4xtcx3Rzn1q0Df?usp=drive_link",

    // (Opcional) Lista individual para cadastro futuro de certificados
    lista: [
      {
        titulo: "Trilha Front-end — Fundamentos Web",
        instituicao: "Programa Trilhas",
        ano: "2026",
        url: "https://drive.google.com/file/d/1qwzsvTJPtrjSYMs1VkumlIY3gZ7WwAgz/view?usp=sharing"
      }
    ]
  },

  // Lista de projetos exibidos na página "Veja meus projetos"
  // Para adicionar um novo projeto, basta duplicar um dos objetos abaixo.
  // Para remover, basta apagar o bloco correspondente.
  projetos: [
    {
      titulo: "Filtro Digital",
      descricao: "Implementa filtro passa alta e baixa em python e demonstra algumas propriedade do sinal e filtro graficamente.",
      imagem: "assets/img/projeto-1.jpg",
      url: "https://github.com/lucasA51/ProjetoFiltroDigital"
    },
    {
      titulo: "Sensor MQTT",
      descricao: "Arquivos necessários para apresentação da simulação de um sensor de distância que envia seus dados via mqtt para uma dashboard e base de dados sqlite",
      imagem: "assets/img/projeto-2.png",
      url: "https://github.com/lucasA51/sensor-mqtt"
    },
    {
      titulo: "O Arauto do Rei",
      descricao: "O Arauto do Rei é um site temático inspirado no universo de Game of Thrones, que transporta os visitantes ao mundo de Westeros por meio de uma experiência digital imersiva.",
      imagem: "assets/img/projeto-3.png",
      url: "https://github.com/lucasA51/o-arauto-do-rei"
    },
    {
      titulo: "Plataforma de Eventos",
      descricao: "Aplicação web para organização de eventos.",
      imagem: "assets/img/projeto-4.png",
      url: "https://github.com/lucasA51/PlataformaDeEventos"
    }
  ]
};
