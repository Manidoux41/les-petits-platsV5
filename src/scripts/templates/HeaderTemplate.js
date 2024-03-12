export function HeaderTemplate() {
    const app = document.querySelector('#app');

    const header = document.createElement('header');
    const title = document.createElement('h1');
    title.textContent = 'Les Petits plats';

    const formSearch = document.createElement('div');
    formSearch.classList.add('formSearch');
    const inputSearch = document.createElement('input');
    inputSearch.type = 'text';
    inputSearch.placeholder = 'Rechercher...';
    inputSearch.name = 'search';
    inputSearch.setAttribute('autocomplete', 'off');

    const buttonSearch = document.createElement('button');
    buttonSearch.textContent = 'Rechercher';
    buttonSearch.type = 'submit';
    buttonSearch.setAttribute('aria-label', 'Rechercher');

    formSearch.appendChild(inputSearch);
    formSearch.appendChild(buttonSearch);

    header.appendChild(title);
    header.appendChild(formSearch);
    
    app.appendChild(header);

}