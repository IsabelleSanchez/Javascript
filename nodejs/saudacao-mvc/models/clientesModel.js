module.exports = {
  gerarMensagemLogin: ( login, senha) => {
    
    if (login === "Isabelle" && senha === "1234") {
      return "Login bem-sucedido! Bem-vinda, Isabelle.";
    } else {
      return "Login falhou! Usuário ou senha incorretos.";
    }

  }
};