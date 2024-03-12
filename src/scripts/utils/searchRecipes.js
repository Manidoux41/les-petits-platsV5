export function searchRecipes() {
    const inputSearch = document.querySelector('input');   
    inputSearch.addEventListener('keyup', () => {
        const inputSearch = document.querySelector('input');
        const value = inputSearch.value;
        console.log(value);
    });
}