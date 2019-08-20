// Desfaio 01
class Usuario {
    constructor(email, senha) {
        this.email = email;
        this.senha = senha;
    }

    isAdmin() {
        return this.admin === true;
    }
}

class Admin extends Usuario {
    constructor(email, senha) {
        super(email, senha);
        this.admin = true;
    }
}

const User1 = new Usuario("email@teste.com", "senha123");
const Adm1 = new Admin("email@teste.com", "senha123");

console.log(User1.isAdmin()); // false
console.log(Adm1.isAdmin()); // true

// Desafio 02
const usuarios = [{
    nome: 'Diego',
    idade: 23,
    empresa: 'Rocketseat'
}, {
    nome: 'Gabiel',
    idade: 15,
    empresa: 'Rocketseat'
}, {
    nome: 'Lucas',
    idade: 30,
    empresa: 'Facebook'
}];

// 2.1
const map = usuarios.map(item => item.idade);
console.log(map);

// 2.2
const filter = usuarios.filter(item => item.idade >= 18 && item.empresa === 'Rocketseat');
console.log(filter);

// 2.3
const find = usuarios.find(item => item.empresa === 'Google');
console.log(find);

// 2.4
const calculo = usuarios
  .map(usuario => ({ ...usuario, idade: usuario.idade * 2 }))
  .filter(usuario => usuario.idade <= 50);
console.log(calculo);