/**
 * ====================================================================
 * LÓGICA PRINCIPAL DO PORTFÓLIO (VANILLA JS)
 * ====================================================================
 * 
 * Este arquivo lê os dados do arquivo 'js/dados.js' e preenche
 * dinamicamente as páginas HTML (Início, Sobre mim e Projetos).
 * 
 * Nenhuma alteração é necessária neste arquivo para mudar seu conteúdo;
 * personalize tudo através do arquivo 'js/dados.js'.
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Verifica se os dados foram carregados corretamente
  if (typeof portfolioData === 'undefined') {
    console.error('Erro: Os dados do portfólio não foram encontrados. Certifique-se de carregar js/dados.js antes de js/script.js.');
    return;
  }

  // 2. Inicializa as seções da página atual
  inicializarPerfil();
  inicializarSobre();
  inicializarProjetos();
  inicializarCertificados();
  inicializarRedesSociais();

  console.log('✅ Portfólio carregado com sucesso a partir de js/dados.js');
});

/**
 * Preenche informações do perfil (foto, nome, cargo e rodapé)
 * presentes em todas as páginas.
 */
function inicializarPerfil() {
  const { nome, cargo, foto } = portfolioData.perfil || {};

  // Nome do perfil
  const elementosNome = document.querySelectorAll('[data-perfil="nome"]');
  elementosNome.forEach(el => {
    if (nome) el.textContent = nome;
  });

  // Cargo / descrição profissional
  const elementosCargo = document.querySelectorAll('[data-perfil="cargo"]');
  elementosCargo.forEach(el => {
    if (cargo) el.textContent = cargo;
  });

  // Foto de perfil
  const elementosFoto = document.querySelectorAll('[data-perfil="foto"]');
  elementosFoto.forEach(img => {
    if (foto) {
      img.src = foto;
      img.alt = `Foto de perfil de ${nome || 'desenvolvedor'}`;
      // Fallback em caso de erro no carregamento da imagem
      img.onerror = () => {
        img.src = 'assets/img/perfil.svg';
      };
    }
  });

  // Nome no rodapé
  const elementosRodapeNome = document.querySelectorAll('[data-perfil="rodape-nome"]');
  elementosRodapeNome.forEach(el => {
    if (nome) el.textContent = nome;
  });
}

/**
 * Preenche os links das redes sociais (GitHub e LinkedIn).
 * Trata links vazios com elegância.
 */
function inicializarRedesSociais() {
  const { github, linkedin } = portfolioData.perfil || {};

  const linkGithub = document.querySelector('[data-perfil="github"]');
  if (linkGithub) {
    if (github && github.trim() !== '') {
      linkGithub.href = github;
      linkGithub.target = '_blank';
      linkGithub.rel = 'noopener noreferrer';
      linkGithub.setAttribute('aria-label', 'Acessar perfil no GitHub');
    } else {
      linkGithub.style.display = 'none';
    }
  }

  const linkLinkedin = document.querySelector('[data-perfil="linkedin"]');
  if (linkLinkedin) {
    if (linkedin && linkedin.trim() !== '') {
      linkLinkedin.href = linkedin;
      linkLinkedin.target = '_blank';
      linkLinkedin.rel = 'noopener noreferrer';
      linkLinkedin.setAttribute('aria-label', 'Acessar perfil no LinkedIn');
    } else {
      linkLinkedin.style.display = 'none';
    }
  }
}

/**
 * Configura o botão de certificados na página inicial.
 * Abre a pasta do Google Drive configurada em js/dados.js.
 */
function inicializarCertificados() {
  const btnCertificados = document.getElementById('btn-certificados');
  if (!btnCertificados) return;

  const urlPasta = portfolioData.certificados && portfolioData.certificados.urlPasta;

  if (urlPasta && urlPasta.trim() !== '') {
    btnCertificados.href = urlPasta;
    btnCertificados.target = '_blank';
    btnCertificados.rel = 'noopener noreferrer';
  } else {
    // Caso o link ainda não tenha sido configurado
    btnCertificados.href = '#';
    btnCertificados.addEventListener('click', (e) => {
      e.preventDefault();
      alert('O link da pasta de certificados ainda não foi configurado. Você pode defini-lo no arquivo js/dados.js.');
    });
  }
}

/**
 * Renderiza o texto da seção "Sobre mim" na página sobre.html.
 * Suporta múltiplas linhas divididas em parágrafos semânticos.
 */
function inicializarSobre() {
  const containerSobre = document.getElementById('sobre-texto');
  if (!containerSobre) return;

  const sobre = portfolioData.perfil && portfolioData.perfil.sobre;

  if (!sobre || sobre.trim() === '') {
    containerSobre.innerHTML = '<p class="texto-vazio">Nenhuma apresentação cadastrada no momento.</p>';
    return;
  }

  // Divide o texto por quebras de linha duplas para criar parágrafos separados
  const paragrafos = sobre
    .split(/\n\s*\n/)
    .map(p => p.trim())
    .filter(p => p.length > 0);

  containerSobre.innerHTML = '';
  paragrafos.forEach(texto => {
    const p = document.createElement('p');
    p.textContent = texto;
    containerSobre.appendChild(p);
  });
}

/**
 * Renderiza dinamicamente os cards de projetos na página projetos.html.
 * Para adicionar ou remover projetos, altere apenas o array 'projetos' em js/dados.js.
 */
function inicializarProjetos() {
  const gridProjetos = document.getElementById('projetos-grid');
  if (!gridProjetos) return;

  const projetos = portfolioData.projetos;

  // Estado vazio caso não haja projetos cadastrados
  if (!projetos || !Array.isArray(projetos) || projetos.length === 0) {
    gridProjetos.innerHTML = `
      <div class="projetos-vazio">
        <p>Nenhum projeto cadastrado ainda.</p>
        <small>Adicione seus projetos no arquivo <code>js/dados.js</code>.</small>
      </div>
    `;
    return;
  }

  gridProjetos.innerHTML = '';

  projetos.forEach((proj, index) => {
    const card = document.createElement('article');
    card.className = 'card-projeto';

    // Imagem com fallback
    const imgWrapper = document.createElement('div');
    imgWrapper.className = 'card-imagem-wrapper';

    const img = document.createElement('img');
    img.className = 'card-imagem';
    img.src = proj.imagem || 'assets/img/projeto-exemplo.svg';
    img.alt = `Imagem ilustrativa do projeto: ${proj.titulo || 'Sem título'}`;
    img.onerror = () => {
      img.src = 'assets/img/projeto-exemplo.svg';
    };
    imgWrapper.appendChild(img);

    // Corpo do card
    const corpo = document.createElement('div');
    corpo.className = 'card-conteudo';

    const titulo = document.createElement('h3');
    titulo.className = 'card-titulo';
    titulo.textContent = proj.titulo || `Projeto ${index + 1}`;

    const desc = document.createElement('p');
    desc.className = 'card-descricao';
    desc.textContent = proj.descricao || 'Projeto desenvolvido durante a trilha de aprendizado.';

    const link = document.createElement('a');
    link.className = 'btn-card';
    link.textContent = 'Ver projeto';

    if (proj.url && proj.url.trim() !== '') {
      link.href = proj.url;
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
    } else {
      link.href = '#';
      link.classList.add('desabilitado');
      link.textContent = 'Link em breve';
      link.addEventListener('click', (e) => e.preventDefault());
    }

    corpo.appendChild(titulo);
    corpo.appendChild(desc);
    corpo.appendChild(link);

    card.appendChild(imgWrapper);
    card.appendChild(corpo);

    gridProjetos.appendChild(card);
  });
}
