import mongoose from 'mongoose';

const carrinhoSchema = new mongoose.Schema({
  lancheId: { type: String, required: true },
  quantidade: { type: Number, required: true },
});

export const carrinho = mongoose.model('carrinho', carrinhoSchema);
