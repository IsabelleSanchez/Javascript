const clientesModel = require('../models/clientesModel');
module.exports = {

    clientes: (req, res) => {
        res.sendFile('clientes.html', { root: './views' });
    },

    login: (req, res) => {
        res.sendFile('login.html', { root: './views' });
    },

    logado: (req, res) => {
        const { login, senha} = req.body;
        const MensagemLogin = clientesModel.gerarMensagemLogin( login, senha);
        res.send(`<h1>${MensagemLogin}</h1>`);
        }
};