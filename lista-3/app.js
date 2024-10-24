const express = require('express');
const mustacheExpress = require('mustache-express');
const path = require('path');

const app = express();

app.engine('mustache', mustacheExpress());
app.set('view engine', 'mustache');
app.set('views', __dirname + '/views');

app.use(express.static(path.join(__dirname, 'public')));

app.use(express.urlencoded({ extended: true }));

app.get('/rota1', (req, res) => {
    res.render('rota', { titulo: 'Rota 1', mensagem: 'Clique aqui para ir para a Rota 2', link: '/rota2' });
});

app.get('/rota2', (req, res) => {
    res.render('rota', { titulo: 'Rota 2', mensagem: 'Clique aqui para voltar para a Rota 1', link: '/rota1' });
});

app.get('/inverter', (req, res) => {
    const texto = req.query.texto;
    const textoInvertido = texto ? texto.split('').reverse().join('') : 'Envie um texto!';
    res.render('resultado', { titulo: 'Texto Invertido', resultado: textoInvertido });
});

app.post('/login', (req, res) => {
    const { usuario, senha } = req.body;
    let mensagem;

    if (senha === usuario + usuario) {
        mensagem = `Acesso permitido para o usuário: ${usuario}`;
    } else {
        mensagem = 'Acesso negado. Senha incorreta.';
    }

    res.render('resultado', { titulo: 'Resultado de Login', resultado: mensagem });
});

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});
