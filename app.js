/*
 constante não pode ter seu valor 
 reatribuido

 ex.: Erro 
    const a = 1;
    a = 3;     
*/ 

/*
 Constante sofre mutação
    Quando altera-se o valores 
    dentro da constante
*/
const usuario = { nome: "Mark" };
usuario.nome = "Job";
console.log(usuario);

function teste(x) {
    let y = 2;
    if (x > 5) {        
        console.log(x, y);
    }
}
// console.log(y) fora do escopo
teste(10);