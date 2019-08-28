/* Apenas descomente o exemplo que desejar ver */

/**
 * Exemplo 1: Import de funções
 */
import { soma, subtrair } from './functions';
console.log(soma(1, 2));
console.log(subtrair(2, 1));

/**
 * Exemplo 2: Import do export default mantendo o nome da função
 */
// import soma from './soma';
// console.log(soma(1, 2));

/**
 * Exemplo 3: Import do export default qualquer nome para a função
 */
// import somaFunction from './soma';
// console.log(somaFunction(1, 2));

/**
 * Exemplo 4: Import de função atribuindo apelido
 */ 
// import { soma as somaFn } from './functions';
// console.log(somaFn(1, 2));
 
/**
 * Exemplo 5: Import de função default e outras
 */ 
// import times, { soma, subtrair } from './functions';
// console.log(times(2, 2));
// console.log(soma(1, 2));
// console.log(subtrair(2, 1));

/**
 * Exemplo 6: Import de função todas as funções
 */
// import * as fx from './functions';
// console.log(fx.default(2, 2));
// console.log(fx.soma(1, 2));
// console.log(fx.subtrair(2, 1));
// console.log(fx.divide(2, 1));