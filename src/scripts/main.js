import { recipes } from "../datas/recipes.js";
import { HeaderTemplate } from "./templates/HeaderTemplate.js";
import { RecipesTemplate } from "./templates/RecipesTemplate.js";
import { searchRecipes } from "./utils/searchRecipes.js";

function init(){
    setTimeout(() => {
        HeaderTemplate();
        RecipesTemplate(recipes);
        searchRecipes();
    }, 1000);
}

init();