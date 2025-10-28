const produtosModel = require('../models/produtosModel');
module.exports = {

    produtos: (req, res) => {
        res.sendFile('produtos.html', { root: './views' });
    },

    camisetas: (req, res) => {
        res.sendFile('camisetas.html', { root: './views' });
    },

    formCadastro: (req, res) => {
        res.sendFile('formCadastro.html', { root: './views' });
    },

    cadastrar: (req, res) => {
        const { id, preco, descricao, quantidade} = req.body;
        const mensagemcadastro = produtosModel.cadastrarProduto( id, preco, descricao, quantidade);
        res.send (`<h1>${mensagemcadastro}</h1>`);
    }

};