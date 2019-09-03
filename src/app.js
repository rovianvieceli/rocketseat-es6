class App {
    constructor() {
        this.repositories = [];
        this.form = document.getElementById('repo-form');
        this.registerHandlers();
    }

    registerHandlers() {
        this.form.onsubmit = event => this.addRepository(event);
    }

    addRepository(event){        
        event.preventDefault();

        this.repositories.push({
            name: 'rocketseat.com.br',
            description: 'Tire suas idéias do papel e de vida à sua StartUP',
            avatar_url: 'https://avatars0.githubusercontent.com/u/28929274?v=4',
            html_url: 'http//github.com/rocketseat/rocketseat.com.br'
        });

        console.log(this.repositories);
    }
}

new App();