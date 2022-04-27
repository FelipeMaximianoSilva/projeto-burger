import express from 'express';
import {
  getFindLanches,
  getFindLanchesByID,
  postCreateLanchesController,
  updateLanchesController,
  deleteLancheController,
} from '../controllers/lanchesController.js';
import {
  getCarrinho,
  postCarrinho,
  deleteCarrinho,
} from '../controllers/carrinhoController.js';
import {
  validId,
  validObjectBody,
  validObjectBodyCarrinho,
} from '../middlewares/lanche.middleware.js';

export const router = express.Router();

//Listas
router.get('/find-lanches', getFindLanches);

router.get('/find-lanches/:id', validId, getFindLanchesByID);

//Rota para criação
router.post('/create', validObjectBody, postCreateLanchesController);

//Rota para atualizar elemento
router.put('/update/:id', validId, validObjectBody, updateLanchesController);

//Rota para deletar
router.delete('/delete/:id', validId, deleteLancheController);

//Rotas de carrinho
router.get('/all-carrinho', getCarrinho);

router.post('/create-carrinho', postCarrinho, validObjectBodyCarrinho);

router.delete('/delete-carrinho', deleteCarrinho);
