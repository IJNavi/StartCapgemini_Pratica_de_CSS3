const express = require('express');
const lessMiddleware = require('less-middleware');
const path = require('path');

const app = express();

// Configurar EJS como template engine
app.set('view engine', 'ejs');
app.set('views', path.join(..\CSS3\Exercicio_CSS_Avançado_LESS));

// Configurar middleware para LESS
app.use(lessMiddleware(path.join(..\CSS3\Exercicio_CSS_Avançado_LESS)));
app.use(express.static(path.join(..\CSS3\Exercicio_CSS_Avançado_LESS)));

// Rota para sua página
app.get('/', (req, res) => {
    res.render('exercicio01');
});

app.listen(3000, () => {
    console.log('Servidor rodando em http://localhost:3000');
});