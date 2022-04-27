import mongoose from 'mongoose';
import {
  findLanchesService,
  findLanchesByIdService,
  createLanchesService,
  updateLanchesService,
  deleteLanchesService,
} from '../services/lanches.services.js';

export const getFindLanches = async (req, res) => {
  const allLanches = await findLanchesService();
  if (allLanches.length == 0) {
    return res
      .status(404)
      .send({ message: 'Não existe nenhum lanche no sistema!' });
  }
  res.send(allLanches);
};

export const getFindLanchesByID = async (req, res) => {
  const idParam = req.params.id;
  const chosenLanche = await findLanchesByIdService(idParam);
  if (!chosenLanche) {
    return res.status(404).send({ message: 'Lanche não encontrado!' });
  }
  res.send(chosenLanche);
};

export const postCreateLanchesController = async (req, res) => {
  const lanche = req.body;
  const newLanche = createLanchesService(lanche);
  res.send(newLanche);
};

export const updateLanchesController = async (req, res) => {
  const idParam = req.params.id;
  const lanchesEdit = req.body;
  const updateLanches = await updateLanchesService(idParam, lanchesEdit);
  res.send(updateLanches);
};

export const deleteLancheController = async (req, res) => {
  const idParam = req.params.id;
  const chosenLanche = await findLanchesByIdService(idParam);
  await deleteLanchesService(idParam);
  res.send({ message: 'Lanche deletado do cardápio!' });
};
