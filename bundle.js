"use strict";

var usuario = {
  nome: "Mark",
  idade: 34,
  endereco: {
    cidade: "São Leopoldo",
    estado: "RS"
  }
}; // Desestruturando

var nome = usuario.nome,
    idade = usuario.idade,
    cidade = usuario.endereco.cidade;
console.log("".concat(nome, ", ").concat(idade, " reside em ").concat(cidade)); // Desestruturando nos parametros de funcao

function mostraNome(_ref) {
  var nome = _ref.nome,
      idade = _ref.idade;
  console.log("".concat(nome, ", ").concat(idade));
}

mostraNome(usuario);
