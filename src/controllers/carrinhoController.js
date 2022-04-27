import {
  getCarrinhoService,
  postCarrinhoService,
  deleteCarrinhoService,
} from '../services/carrinho.service.js';

export const getCarrinho = async (req, res) => {
  const allCarrinho = await getCarrinhoService();
  if (!allCarrinho) {
    return res
      .status(404)
      .send({ message: 'Não existe nenhum item no carrinho' });
  }
  res.send(allCarrinho);
};

export const postCarrinho = async (req, res) => {
  const carrinho = req.body;
  const newCarrinho = await postCarrinhoService(carrinho);
  res.status(201).send(newCarrinho);
};

export const deleteCarrinho = async (req, res) => {
  await deleteCarrinhoService();
  res.send({ message: 'Carrinho deletado com sucesso!' });
};
