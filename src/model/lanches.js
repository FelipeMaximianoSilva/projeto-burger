import mongoose from 'mongoose';

const lanchesSchema = new mongoose.Schema({
  nome: { type: String, required: true },
  preco: { type: Number, required: true },
  img: { type: String, required: true },
  description: { type: String, required: true },
  tipo: { type: Number },
});

export const lanches = mongoose.model('lanches', lanchesSchema);
