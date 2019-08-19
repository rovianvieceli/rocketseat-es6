const arr = [2, 4, 7, 6, 9];

// Quando um parâmetro e um retorno ex.: callback
const newArr = arr.map(item => item * 2);
console.log(newArr);

// Função que retorna um objeto
// Não recomendado
const obj = () => ({ nome: 'Mark' });
console.log(obj());