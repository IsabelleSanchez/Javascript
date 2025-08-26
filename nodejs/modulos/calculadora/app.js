const funcoesMatematicas = require('./funcoes_matematicas');
const calculaIdade = require('./calcula_idade');

const resultadoSoma = funcoesMatematicas.somar(5, 3);
console.log(`A soma é: ${resultadoSoma}`);

const resultadoSubtracao = funcoesMatematicas.subtrair(10, 4);
console.log(`A subtração é: ${resultadoSubtracao}`);

const resultadoMultiplicacao = funcoesMatematicas.multiplicar(6, 7);
console.log(`A multiplicação é: ${resultadoMultiplicacao}`);

const resultadoDivisao = funcoesMatematicas.dividir(20, 4);
console.log(`A divisão é: ${resultadoDivisao}`);

const resultadoidade = calculaIdade.idade(2025, 2008);
console.log(`A idade é: ${resultadoidade}`);