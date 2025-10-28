module.exports = {
  gerarMensagemLogin: ( login, senha) => {
    let MensagemLogin;
    
    if (login === "Isabelle" && senha === "1234") {
      MensagemLogin = "Login bem-sucedido! Bem-vinda, Isabelle."
    } 
    
    else {
      MensagemLogin = "Login falhou! Usuário ou senha incorretos."
    }

    return MensagemLogin
  }
};