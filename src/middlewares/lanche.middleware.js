import mongoose from 'mongoose';

export const validId = (req, res, next) => {
  const idParam = req.params.id;

  if (!mongoose.Types.ObjectId.isValid(idParam)) {
    return res.status(400).send({ message: 'Id inválido' });
  }
  next();
};

export const validObjectBody = (req, res, next) => {
  const lanche = req.body;
  if (
    !lanche ||
    !lanche.nome ||
    !lanche.preco ||
    !lanche.description ||
    !lanche.img
  ) {
    return res
      .status(400)
      .send({ message: 'Envie o todos os campos do lanche!' });
  }
  next();
};

export const validObjectBodyCarrinho = (req, res, next) => {
  const carrinho = req.body;
  carrinho.array.forEach((item) => {
    if (!item || !item.lancheId || !item.quantidade) {
      res.status(400).send({ message: 'Envie o todos os campos do carrinho!' });
    }
  });
};
