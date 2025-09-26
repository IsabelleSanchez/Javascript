//const funcoesMatematicas = require('./funcoes_matematicas');
//const calculaIdade = require('./calcula_idade');

import { somar, subtrair, multiplicar, dividir } from './funcoes_matematicas.js';
import * as calcula_idade from './calcula_idade.js';

//const resultadoSoma = funcoesMatematicas.somar(5, 3);
console.log(`A soma é: ` + somar(5, 3));

//const resultadoSubtracao = funcoesMatematicas.subtrair(10, 4);
console.log(`A subtração é: ` + subtrair(10, 4));

//const resultadoMultiplicacao = funcoesMatematicas.multiplicar(6, 7);
console.log(`A multiplicação é: ` + multiplicar(6, 7));

//const resultadoDivisao = funcoesMatematicas.dividir(20, 4);
console.log(`A divisão é: `+ dividir(20, 4));

//const resultadoidade = calculaIdade.idade(2025, 2008);
console.log(calcula_idade.idade("Belle", 2025, 2008));