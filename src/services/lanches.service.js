//LISTA DE OPÇÕES

import { lanches } from '../model/lanches.js';

export const findLanchesService = async () => {
  const lanche = await lanches.find();
  return lanche;
};

export const findLanchesByIdService = async (id) => {
  const lanche = await lanches.findById(id);
  return lanche;
};

export const createLanchesService = async (newLanche) => {
  const lancheCriado = await lanches.create(newLanche);
  return lancheCriado;
};

export const updateLanchesService = async (id, lanchesEdited) => {
  const lancheAtualizado = await findByIdAndUpdate(id, lanchesEdited);
  return lancheAtualizado;
};

export const deleteLanchesService = async (id) => {
  return await lanches.findByIdAndDelete(id);
};
