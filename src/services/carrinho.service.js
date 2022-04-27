import { carrinho } from '../model/carrinho.js';

export const getCarrinhoService = async () => {
  const allCarrinho = await carrinho.find();
  return allCarrinho;
};

export const postCarrinhoService = async (newCarrinho) => {
  const createdCarrinho = await carrinho.insertMany(newCarrinho);
  return createdCarrinho;
};

export const deleteCarrinhoService = async () => {
  return await carrinho.deleteMany();
};
