const usuario = {
    nome: "Mark",
    idade: 34,
    endereco: {
        cidade: "São Leopoldo",
        estado: "RS"
    }
};

// Desestruturando
const { nome, idade, endereco: { cidade } } = usuario;
console.log(`${nome}, ${idade} reside em ${cidade}`);

// Desestruturando nos parametros de funcao
function mostraNome({ nome, idade }) {
    console.log(`${nome}, ${idade}`); 
}
mostraNome(usuario);