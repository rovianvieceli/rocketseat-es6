"use strict";

var arr = [2, 4, 7, 6, 9]; // Quando um parâmetro e um retorno ex.: callback

var newArr = arr.map(function (item) {
  return item * 2;
});
console.log(newArr); // Função que retorna um objeto
// Não recomendado

var obj = function obj() {
  return {
    nome: 'Mark'
  };
};

console.log(obj());
