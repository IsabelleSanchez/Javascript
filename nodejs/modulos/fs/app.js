// importando o módulo 'fs' para operações de sistema de arquivos
const fs = require('fs');

// Lendo um arquivo de forma assíncrona
fs.readFile('example.txt', 'utf8', (err, data) => {
    // Tratando erros
    if (err) {
        // Se ocorrer um erro, exibe a mensagem de erro
        console.error('Erro ao ler arquivo:', err);
        // retornando para evitar continuar a execução
        return; 
    }
    // Se a leitura for bem-sucedida, exibe o conteúdo do arquivo
    console.log('Conteúdo do arquivo:', data);
})

// Mensagem para demonstrar a natureza assíncrona da operação de leitura de arquivo 
console.log('Esta mensagem aparece primeiro.');