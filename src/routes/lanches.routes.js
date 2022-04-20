import express from 'express';
import {
  getFindLanches,
  getFindLanchesByID,
  postCreateLanchesController,
  updateLanchesController,
  deleteLancheController,
} from '../controllers/lanchesController.js';

export const router = express.Router();

//Listas
router.get('/find-lanches', getFindLanches);

router.get('/find-lanches/:id', getFindLanchesByID);

//Rota para criação
router.post('/create', postCreateLanchesController);

//Rota para atualizar elemento
router.put('/update/:id', updateLanchesController);

//Rota para deletar
router.delete('/delete/:id', deleteLancheController);
