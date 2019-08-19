/* REST - para jogar o resto tem dois casos de uso */

// Elementos
const usuario = {
    nome: "Mark",
    idade: 34,
    empresa: "Facebook"
}
const { nome, ...resto } = usuario;
console.log(nome, resto);

const arr = [1, 2, 3, 4 ];
const [ a, b, ...c ] = arr;
console.log(a, b, c);

// Funções
function soma(a, b, ...params) {
    return params;
}
console.log(soma(1, 3, 4, 5, 6));

function sum(...params) {
    return params;
}
console.log(sum(1, 3, 4, 5, 6));

/* SPREAD - Propaga os elementos */
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = [...arr1, ...arr2];
console.log(arr3);

const usuario1 = {
    nome: "Jobs",
    idade: 56,
    empresa: "Apple"
} 
const usuario2 = { ...usuario1, nome: "Tim" };
console.log(usuario1, usuario2);