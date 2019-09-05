class App {
    constructor() {
        this.repositories = [];
        this.form = document.getElementById('repo-form');
        this.list = document.getElementById('repo-list');
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

        this.render();
    }

    render() {
        this.list.innerHTML = "";
        this.repositories.forEach(repository => {
            let image = document.createElement('img');
            image.setAttribute('src', repository.avatar_url);

            let title = document.createElement('strong');
            title.appendChild(document.createTextNode(repository.name));

            let description = document.createElement('p');
            description.appendChild(document.createTextNode(repository.description));

            let link = document.createElement('a');
            link.setAttribute('target', '_blank');
            link.appendChild(document.createTextNode('Acessar'));

            let list = document.createElement('li');
            list.appendChild(image)
            list.appendChild(title)
            list.appendChild(description)
            list.appendChild(link)

            this.list.appendChild(list);
        });
    }
}

new App();