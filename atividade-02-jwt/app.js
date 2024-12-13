const express = require('express');
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');

const app = express();
const SECRET_KEY = "$1AAA#2BBB#3CCC$";

app.use(bodyParser.json());

// Rota 1
app.get('/generate-token', (req, res) => {
    const messages = ["Olá mundo", "Teste do Léo", "Node.js é incrível", "JWT funcionando!"];
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];

    const token = jwt.sign({ message: randomMessage }, SECRET_KEY, { expiresIn: '1h' });
    res.json({ token });
});

// Rota 2
app.post('/decode-token', (req, res) => {
    const { token } = req.body;

    if (!token) {
        return res.status(400).json({ error: 'Token não fornecido' });
    }

    try {
        const decoded = jwt.verify(token, SECRET_KEY);
        res.json({ message: decoded.message });
    } catch (error) {
        res.status(401).json({ error: 'Token inválido ou expirado' });
    }
});

app.listen(3000, () => {
    console.log(`Servidor iniciando!`);
});
