module.exports = {
    cadastrarProduto: ( id, preco, descricao, quantidade) => {
        
        return `Produto ${descricao}, com Id: ${id} - Quantidade: ${quantidade} 
        - Valor Unitario: ${preco} foi cadastrado com sucesso!`;
    }
};