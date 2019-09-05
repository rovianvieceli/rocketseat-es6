/**
 * import local "./api" não sendo do node_modules
 */
import api from './api';

class App {
    constructor() {
        this.repositories = [];

        this.form   = document.getElementById('repo-form');
        this.list   = document.getElementById('repo-list');
        this.input  = document.querySelector('input[name=repository]');

        this.registerHandlers();
    }

    registerHandlers() {
        this.form.onsubmit = event => this.addRepository(event);
    }

    loading(active = true) {
        if(active === true) {
            let loading = document.createElement('span');
            loading.appendChild(document.createTextNode('Carregando...'));
            loading.setAttribute('id', 'loading');
            document.body.appendChild(loading);
        } else {
            document.getElementById('loading').remove();
        }
    }

    async addRepository(event){
        event.preventDefault();

        let input = this.input.value;
        if (input.length === 0) return;
        this.loading();

        try {
            let response = await api.get(`/repos/${input}`);
            let { name, description, html_url, owner: { avatar_url } } = response.data;
            this.input.value = '';
            this.repositories.push({ name, description, html_url, avatar_url });
            this.render();
        } catch (error) {
            alert(`Repositório ${input} não localizado.`);
        }
        this.loading(false);
    }

    delRepository(elem) {
        console.log(elem.list);
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

            let acessar = document.createElement('a');
            acessar.setAttribute('target', '_blank');
            acessar.setAttribute('href', repository.html_url);
            acessar.appendChild(document.createTextNode('Acessar'));

            let list = document.createElement('li');
            list.appendChild(image);
            list.appendChild(title);
            list.appendChild(description);
            list.appendChild(acessar);

            this.list.appendChild(list);
        });
    }
}

new App();