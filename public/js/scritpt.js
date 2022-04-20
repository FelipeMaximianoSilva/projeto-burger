const baseUrl = 'http://localhost:3001/lanches';

// Pegar todas os lanches do backend
async function findAlllanches() {
  const response = await fetch(`${baseUrl}`);
  const lanches = await response.json();
  console.log('localizados os lanches');

  lanches.forEach((lanches) => {
    document.getElementById('lancheList').insertAdjacentHTML(
      // Primeiro parâmetro que é a posição
      'beforeend',
      // Segundo parâmetro que o conteúdo a ser adicionado
      `
          <div class="lancheListaItem">
            <div class="inside-card-space">
              <div class="lancheListaItem__nome">${lanches.nome}</div>
              <div class="lancheListaItem__preco">R$ ${lanches.preco}</div>
              <div class="lancheListaItem__descricao">
                ${lanches.description}
              </div>
            </div>
            <img
              class="lancheListaItem__foto"
              src=${lanches.img}
              alt=${`${lanches.nome}`}
            />
          </div>
        `,
    );
  });
}

findAlllanches();

// Pegar um lanche pelo seu ID
const findByIdLanches = async () => {
  const id = document.getElementById('idLanche').value;

  const response = await fetch(`${baseUrl}/find-lanches/${id}`);

  const lanche = await response.json();

  const lancheEscolhidoDiv = document.getElementById('lancheEscolhido');

  lancheEscolhidoDiv.innerHTML = `
      <div class="lancheCardItem">
        <div>
          <div class="lancheCardItem__nome">${lanche.nome}</div>
          <div class="lancheCardItem__preco">R$ ${lanche.preco}</div>
          <div class="lancheCardItem__descricao">${lanche.description}</div>
        </div>
        <img
          class="lancheCardItem__foto"
          src=${lanche.img}
          alt=${`${lanche.nome}`}
        />
        <button class="buttons">Editar</button>
        <button class="buttons" onclick="">Excluir</button>
      </div>
    `;
};

function abrirModalCadastro() {
  document.querySelector('.modal-overlay').style.display = 'flex';
}

function limparModal() {
  const nome = (document.querySelector('#nome').value = '');
  const preco = (document.querySelector('#preco').value = 0);
  const descricao = (document.querySelector('#description').value = '');
  const img = (document.querySelector('#img').value = '');
}

function fecharModalCadastro() {
  document.querySelector('.modal-overlay').style.display = 'none';

  limparModal();
}

async function createLanche() {
  const nome = document.querySelector('#nome').value;
  const preco = document.querySelector('#preco').value;
  const description = document.querySelector('#description').value;
  const img = document.querySelector('#img').value;

  const lanches = {
    nome,
    preco,
    description,
    img,
  };

  const response = await fetch(baseUrl + '/create', {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
    },
    mode: 'cors',
    body: JSON.stringify(lanches),
  });

  const novoLanche = await response.json();

  const html = `<div class="lancheListaItem">
    <div>
      <div class="lancheListaItem__nome">${novoLanche.nome}</div>
      <div class="lancheListaItem__preco">R$ ${novoLanche.preco}</div>
      <div class="lancheListaItem__descricao">${novoLanche.description}</div>
    </div>
    <img class="lancheListaItem__foto" src=${
      novoLanche.img
    } alt=${`${novoLanche.nome}`} />
  </div>`;

  document.getElementById('lancheList').insertAdjacentHTML('beforeend', html);

  console.log('Criou o lanche');
  fecharModalCadastro();
}
