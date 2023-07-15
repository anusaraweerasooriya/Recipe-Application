import { EventEmitter } from "@angular/core";
import { Recipe } from "./recipe.model";

export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe("A Test Recipe", "This is Test", "https://static01.nyt.com/images/2022/09/29/dining/afg-ricotta-polpette/merlin_213671208_2553d655-4170-4155-acdf-5fca2ce34a06-master768.jpg?w=1280&q=75"),
        new Recipe("Another Test Recipe", "This is Test", "https://static01.nyt.com/images/2022/09/29/dining/afg-ricotta-polpette/merlin_213671208_2553d655-4170-4155-acdf-5fca2ce34a06-master768.jpg?w=1280&q=75")
    
    ];

    getRecipes() {
        return this.recipes.slice();
        // by slice we send a copy of the recipe
        // array so it cannot access from outside
    }
}