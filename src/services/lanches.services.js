//LISTA DE OPÇÕES

export const lanches = [
  {
    id: '1',
    nome: 'Cheese Burger',
    preco: '10',
    img: 'https://sachefmio.blob.core.windows.net/fotos/x-burguer-73517.jpg',
    description: 'Pão, Salada, Queijo, Hamburger Bovino',
    tipo: '1',
  },
  {
    id: '2',
    nome: 'Chicken Burger',
    preco: '12.5',
    img: 'https://d3sn2rlrwxy0ce.cloudfront.net/chicken-jr-d_2021-09-16-143722_moyk.jpg?mtime=20210916103723&focal=none',
    description: 'Pão, Salada, Queijo, Frango Empanado',
    tipo: '2',
  },
  {
    id: '3',
    nome: 'Cheese Bacon Burger',
    preco: '14.5',
    img: 'https://sachefmio.blob.core.windows.net/fotos/x-burguer-73517.jpg',
    description: 'Pão, Salada, Bacon, Queijo, Hamburger Bovino',
    tipo: '1',
  },
  {
    id: '4',
    nome: 'Veggie Burger',
    preco: '9',
    img: 'https://www.thespruceeats.com/thmb/KAgMssHoQUmx30uuYL_FTahXA0A=/2048x1360/filters:fill(auto,1)/vegan-mushroom-bean-burger-recipe-3378623-13_preview1-5b241897fa6bcc0036d2c9bf.jpeg',
    description: 'Pão, Salada, Tofu, Double burger de Cogumelos',
    tipo: '3',
  },
];

// const postCreateLanchesController = (req, res) => {
//   const lanche = req.body;
//   const newLanche = lanchesService.createLanchesService(lanche);
//   res.send(newLanche);
// };

// export const getCardapioService = () => {
//   return lanches;
// };

export const findLanchesService = () => {
  return lanches;
};

export const findLanchesByIdService = (id) => {
  return lanches.find((lanches) => lanches.id == id);
};

export const createLanchesService = (newLanche) => {
  const newID = lanches.length + 1;
  newLanche.id = newID;
  lanche.push(newLanche);
  return newLanche;
};

export const updateLanchesService = (id, lanchesEdited) => {
  lanchesEdited['id'] = id;
  const lancheIndex = lanches.findIndex((lanches) => lanches.id == id);
  lanches[lanchesEdited] = lanchesEdited;
  return lanchesEdited;
};

export const deleteLanchesService = (id) => {
  const lanchesIndex = lanches.findIndex((lanches) => lanches.id == id);
  return lanches.splice(lanchesIndex, 1);
};

// module.exports = {
//   findLanchesService,
//   findLanchesByIdService,
//   createLanchesService,
//   updateLanchesService,
//   deleteLanchesService,
// };
