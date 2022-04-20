import {
  findLanchesService,
  findLanchesByIdService,
  createLanchesService,
  updateLanchesService,
  deleteLanchesService,
} from '../services/lanches.services.js';

// export const getCardapio = (req, res) => {
//   const CardapioService = getCardapioService();
//   res.send(CardapioService);
// };

export const getFindLanches = (req, res) => {
  const allLanches = findLanchesService();
  res.send(allLanches);
};

export const getFindLanchesByID = (req, res) => {
  const idParam = req.params.id;
  const chosenLanche = findLanchesByIdService(idParam);
  res.send(chosenLanche);
};

export const postCreateLanchesController = (req, res) => {
  const lanche = req.body;
  const newLanche = createLanchesService(lanche);
  res.send(newLanche);
};

export const updateLanchesController = (req, res) => {
  const idParam = req.params.id;
  const lanchesEdit = req.body;
  const updateLanches = updateLanchesService(idParam, lanchesEdit);
  res.send(updateLanches);
};

export const deleteLancheController = (req, res) => {
  const idParam = req.params.id;
  deleteLanchesService(idParam);
  res.send({ message: 'Lanche deletado do cardápio!' });
};

// export const findLanchesService

// export const findLanchesByIdService

// export const createLanchesService = (newLanche)

// export const updateLancheService = (id, lanchesEdited)

// export const deleteLanchesService = (id)
