import mongoose from 'mongoose';

export function connectToDatabase() {
  mongoose
    .connect('mongodb://localhost:27017/lanches-db', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log('MongoDB conectado');
    })
    .catch((err) => {
      return console.log(`Erro na conexão com o banco: ${err}`);
    });
}
