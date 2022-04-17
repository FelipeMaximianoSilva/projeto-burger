// Importando o módulo o express
import express from 'express';

// Importando o path, que serve para informar caminhos para o EJS
import path from 'path';

// Importando as rotas
// import { routes } from './src/routes/routes.js'

// Informa a pasta raiz
const __dirname = path.resolve(path.dirname(''));

// Criar uma variável e instanciar (ou seja: passar todos as funções da função express para o variável app)
const app = express();

// Serve para que a informação que vem do body da requisição - ou seja, informação que usário nos envia - vire JSON
app.use(express.json());

// Serve para 'parsear' - ou seja, transformar em JSON - a requisição do usário
app.use(express.urlencoded({ extended: true }));

// Informa para o meu express que o motor de visualização (ou seja, o modo que vai exibir as minhas páginas) vai ser o EJS
app.set('view engine', 'ejs');

// Informa onde estão os arquivos estáticos (que são todos os arquivos complementares do HMTL/EJS - EX: CSS, JS, IMG e etc)
app.use(express.static(path.join(__dirname, 'public')));

// Instruindo o app a usar as rotas da pasta SRC
// app.use(routes)

// Variável porta = indica qual porta o nosso servidor vai rodar /  (3000 - 4999)
const port = 3001;

app.listen(port, () => {
  console.log(`Estou rodando dentro da port ${port}`);
});

//LISTA DE OPÇÕES

const lanche = [
  {
    id: '1',
    nome: 'Cheese Burger',
    img: 'https://sachefmio.blob.core.windows.net/fotos/x-burguer-73517.jpg',
    description: 'Pão, Salada, Queijo, Hamburger Bovino',
    tipo: '1',
  },
  {
    id: '2',
    nome: 'Chicken Burger',
    img: 'https://sachefmio.blob.core.windows.net/fotos/x-burguer-73517.jpg',
    description: 'Pão, Salada, Queijo, Frango Empanado',
    tipo: '2',
  },
  {
    id: '3',
    nome: 'Cheese Bacon Burger',
    img: 'https://sachefmio.blob.core.windows.net/fotos/x-burguer-73517.jpg',
    description: 'Pão, Salada, Bacon, Queijo, Hamburger Bovino',
    tipo: '1',
  },
  {
    id: '4',
    nome: 'Veggie Burger',
    img: 'https://sachefmio.blob.core.windows.net/fotos/x-burguer-73517.jpg',
    description: 'Pão, Salada, Tofu, Hamburger de Cogumelos',
    tipo: '3',
  },
];

//ROTAS

app.get('/', (req, res) => {
  res.send("Olá mundo");
});

app.get('/boi', (req, res) => {
    res.send(lanche)
})
