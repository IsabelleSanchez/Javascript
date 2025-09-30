import { somar, subtrair, multiplicar, dividir } from './modulos/funcoes_matematicas.js';
import * as calcula_idade from './modulos/calcula_idade.js';

console.log(`A soma é: ` + somar(5, 3));
console.log(`A subtração é: ` + subtrair(10, 4));
console.log(`A multiplicação é: ` + multiplicar(6, 7));
console.log(`A divisão é: `+ dividir(20, 4));
console.log(calcula_idade.idade("Belle", 2025, 2008));