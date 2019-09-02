class App {
    constructor() {
        this.repositories = [];
        this.form = document.getElementById('repo-form');
        this.registerHandlers();
    }

    registerHandlers() {
        this.form.onsubmit = event => this.addRepository();
    }

    addRepository(event){        
        event.preventDefault();
    }
}