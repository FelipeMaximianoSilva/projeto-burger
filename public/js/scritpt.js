const baseUrl = 'http://localhost:3001/lanches';
const msgAlert = document.querySelector('.msg-alert');

// Pegar todas os lanches do backend
async function findAlllanches() {
  const response = await fetch(`${baseUrl}/find-lanches`);

  const lanches = await response.json();

  lanches.forEach((lanches) => {
    document.querySelector('#lancheList').insertAdjacentHTML(
      // Primeiro parâmetro que é a posição
      'beforeend',
      // Segundo parâmetro que o conteúdo a ser adicionado
      `
          <div class="lancheListaItem" id="lancheListaItem__${lanches._id}">
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
async function findByIdLanches() {
  const id = document.querySelector('#idLanche').value;

  if (id == '') {
    localStorage.setItem('message', 'Digite um ID para pesquisar!');
    localStorage.setItem('type', 'danger');

    closeMessageAlert();
    return;
  }

  const response = await fetch(`${baseUrl}/find-lanches/${id}`);
  const lanche = await response.json();

  if (lanche.message != undefined) {
    localStorage.setItem('message', lanche.message);
    localStorage.setItem('type', 'danger');
    showMessageAlert();
    return;
  }

  document.querySelector('.list-all').style.display = 'block';
  document.querySelector('.lanche-list').style.display = 'none';
  const lancheEscolhidoDiv = document.querySelector('#lancheEscolhido');



  lancheEscolhidoDiv.innerHTML = `
      <div class="lancheCardItem" id="lancheListaItem__${lanche._id}">
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
        <button class="change-buttons" onclick="showModal('${
          lanche._id
        }'>Editar</button>
        <button type="button"
        class="change-buttons"
        onclick="showModalDelete('${lanche._id}'>Excluir</button>
      </div>
    `;
};

async function showModal(id = '') {
  if (id != '') {
    document.querySelector('#title-header-modal').innerText =
      'Atualizar um lanche';
    document.querySelector('#button-form-modal').innerText = 'Atualizar';

    const response = await fetch(`${baseUrl}/find-lanches/${id}`);
    const lanche = await response.json();

    document.querySelector('#nome').value = lanche.nome;
    document.querySelector('#description').value = lanche.description;
    document.querySelector('#preco').value = lanche.preco;
    document.querySelector('#img').value = lanche.img;
    document.querySelector('#id').value = lanche._id;
    document.querySelector('#tipo').value = lanche.tipo;
  } else {
    document.querySelector('#title-header-modal').innerText =
      'Cadastrar um Lanche';
    document.querySelector('#button-form-modal').innerText = 'Cadastrar';
  }

  document.querySelector('#overlay').style.display = 'flex';
}

function closeModal() {
  document.querySelector('.modal-overlay').style.display = 'none';

  document.querySelector('#nome').value = '';
  document.querySelector('#description').value = '';
  document.querySelector('#preco').value = 0;
  document.querySelector('#img').value = '';
  document.querySelector('#tipo').value = 0;
}

async function submitLanche() {
  const id = document.querySelector('#id').value;
  const nome = document.querySelector('#nome').value;
  const description = document.querySelector('#description').value;
  const preco = document.querySelector('#preco').value;
  const img = document.querySelector('#img').value;
  const tipo = document.querySelector('#tipo').value;

  const lanche = {
    id,
    nome,
    description,
    preco,
    img,
    tipo,
  };

  const modoEdicaoAtivado = id != '';

  const endpoint = baseUrl + (modoEdicaoAtivado ? `/update/${id}` : `/create`);

  const response = await fetch(endpoint, {
    method: modoEdicaoAtivado ? 'put' : 'post',
    headers: {
      'Content-Type': 'application/json',
    },
    mode: 'cors',
    body: JSON.stringify(lanche),
  });

  const novoLanche = await response.json();

  if (novoLanche.message != undefined) {
    localStorage.setItem('message', novoLanche.message);
    localStorage.setItem('type', 'danger');
    showMessageAlert();
    return;
  }

  if (modoEdicaoAtivado) {
    localStorage.setItem('message', 'Lanche atualizado com sucesso');
    localStorage.setItem('type', 'success');
  } else {
    localStorage.setItem('message', 'Lanche criado com sucesso');
    localStorage.setItem('type', 'success');
  }

  document.location.reload(true);

  closeModal();
}

function showModalDelete(id) {
  document.querySelector('#overlay-delete').style.display = 'flex';

  const btnSim = document.querySelector('#button-delete');

  btnSim.addEventListener('click', function () {
    deleteLanche(id);
  });
}

function closeModalDelete() {
  document.querySelector('#overlay-delete').style.display = 'none';
}

async function deleteLanche(id) {
  const response = await fetch(`${baseUrl}/delete/${id}`, {
    method: 'delete',
    headers: {
      'Content-Type': 'application/json',
    },
    mode: 'cors',
  });

  const result = await response.json();

  localStorage.setItem('message', result.message);
  localStorage.setItem('type', 'success');

  document.location.reload(true);

  closeModalDelete();
}

function closeMessageAlert() {
  setTimeout(function () {
    msgAlert.innerText = '';
    msgAlert.classList.remove(localStorage.getItem('type'));
    localStorage.clear();
  }, 3000);
}

function showMessageAlert() {
  msgAlert.innerText = localStorage.getItem('message');
  msgAlert.classList.add(localStorage.getItem('type'));
  closeMessageAlert();
}

showMessageAlert();
