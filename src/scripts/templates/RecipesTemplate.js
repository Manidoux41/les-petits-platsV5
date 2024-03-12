export function RecipesTemplate(datas) {
    const app = document.querySelector('#app');
    const recipes = document.createElement('section');
    recipes.classList.add('recipes');
    app.appendChild(recipes);

    datas.forEach(element => {
        const article = document.createElement('article');
        article.classList.add('recipe');
        recipes.appendChild(article);

        const title = document.createElement('h2');
        title.textContent = element.name;
        article.appendChild(title);

        const description = document.createElement('p');
        description.textContent = element.description;
        article.appendChild(description);
    });
    
}