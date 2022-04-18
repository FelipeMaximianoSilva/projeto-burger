const baseUrl = 'http://localhost:3001/cardapio';

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
            <div>
              <div class="lancheListaItem__nome">${lanches.nome}</div>
              <div class="lancheListaItem__preco">R$ ${lanches.preco.toFixed(2)}</div>
              <div class="lancheListaItem__descricao">
                ${lanches.description}
              </div>
            </div>
            <img
              class="lancheListaItem__foto"
              src=${lanches.img}
              alt=${`${lanches.nome}`}
            />
          </div><br>
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
          <div class="lancheCardItem__preco">R$ ${lanche.preco.toFixed(2)}</div>
          <div class="lancheCardItem__descricao">${lanche.description}</div>
        </div>
        <img
          class="lancheCardItem__foto"
          src=${lanche.img}
          alt=${`${lanche.nome}`}
        />
      </div>
    `;
};
