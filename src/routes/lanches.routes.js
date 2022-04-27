import express from 'express';
import {
  getFindLanches,
  getFindLanchesByID,
  postCreateLanchesController,
  updateLanchesController,
  deleteLancheController,
} from '../controllers/lanchesController.js';
import { validId, validObjectBody} from "../middlewares/lanche.middleware.js"

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
