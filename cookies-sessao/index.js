const express = require('express');
const mustacheExpress = require('mustache-express');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');

const app = express();

app.engine('mustache', mustacheExpress());
app.set('view engine', 'mustache');
app.set('views', __dirname + '/views');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(session({
  secret: 'segredo',
  resave: false,
  saveUninitialized: false
}));

let totalRequests = 0;

app.get('/', (req, res) => {
  const nome = req.session.nome || '';
  res.render('index', { nome });
});

app.post('/salvauser', (req, res) => {
  req.session.nome = req.body.nome;
  res.redirect('/');
});

app.get('/random', (req, res) => {
  let randomNumber = req.cookies.random || Math.floor(Math.random() * 100);
  res.cookie('random', randomNumber);
  res.send(`Número aleatório: ${randomNumber}`);
});

app.get('/contador', (req, res) => {
  totalRequests++;

  if (!req.session.userRequests) {
    req.session.userRequests = 0;
  }

  req.session.userRequests++;

  res.send(`
    <p>Total de requisições: ${totalRequests}</p>
    <p>Suas requisições: ${req.session.userRequests}</p>
    <a href="/">Voltar</a>
  `);
});

app.get('/tarefas', (req, res) => {
  const tarefas = req.session.tarefas || [];
  res.render('tarefas', { tarefas });
});

app.post('/addtarefa', (req, res) => {
  const tarefa = req.body.tarefa;
  req.session.tarefas = [...(req.session.tarefas || []), tarefa];
  res.redirect('/tarefas');
});

app.listen(3000, () => {
  console.log('Servidor rodando!');
});