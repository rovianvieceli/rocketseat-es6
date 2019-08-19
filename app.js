// Classe
class List {
    constructor() {
        this.data = [];
    }

    add(data) {
        this.data.push(data);        
        console.log(this.data);
    }
}

// Classe: Herança
class TodoList extends List {
    constructor() {
        // Chamada do construtor do pai
        super()

        this.usuario = "Mark";
    }

    mostraUsuaio() {
        console.log(this.usuario);
    }
}

// Classe: Estática    
class Matematica {
    static soma(a, b) {
        return a + b;
    }
}

// Chamada e utilização das Classe 
const MinhaLista = new TodoList();
MinhaLista.mostraUsuaio();
document.getElementById('novoTodo').onclick = function() {
    MinhaLista.add('New Todo');
}

// Estática não precisa do New
console.log(Matematica.soma(1, 3));

