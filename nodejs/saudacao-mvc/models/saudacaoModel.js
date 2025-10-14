module.exports = {
  gerarMensagemPersonalizada: (nome, idade, sangue) => {
    let faixaEtaria;

    if (idade < 12) {
      faixaEtaria = "criança";
    } else if (idade < 18) {
      faixaEtaria = "adolescente";
    } else if (idade < 60) {
      faixaEtaria = "adulto";
    } else {
      faixaEtaria = "idoso";
    }

    return `Olá, ${nome}! Você tem ${idade} anos, portanto é um ${faixaEtaria} e seu tipo sanguíneo é ${sangue}.`;
  }
};
