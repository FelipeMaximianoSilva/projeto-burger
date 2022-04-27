import mongoose from 'mongoose';

export function connectToDatabase() {
  mongoose
    .connect(
      'mongodb+srv://felipemaximiano:556758595a@cluster0.cetlg.mongodb.net/test',
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      },
    )
    .then(() => {
      console.log('MongoDB conectado');
    })
    .catch((err) => {
      return console.log(`Erro na conexão com o banco: ${err}`);
    });
}
