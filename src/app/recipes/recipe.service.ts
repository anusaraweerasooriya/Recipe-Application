import { EventEmitter, Injectable } from "@angular/core";
import { Recipe } from "./recipe.model";
import { Ingredient } from "../shopping-list/ingredient.modal";
import { ShoppingListService } from "../shopping-list/shopping-list.service";

@Injectable()
export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe(
            "A Tasty Recipe",
            "This is Very tasty recipe for foodies",
            "https://static01.nyt.com/images/2022/09/29/dining/afg-ricotta-polpette/merlin_213671208_2553d655-4170-4155-acdf-5fca2ce34a06-master768.jpg?w=1280&q=75",
            [
                new Ingredient("Meat", 1),
                new Ingredient("French Fires", 20),
            ]
        ),
        new Recipe(
            "Burger Recipe", 
            "This is Burger recipe in china", 
            "https://static01.nyt.com/images/2022/09/29/dining/afg-ricotta-polpette/merlin_213671208_2553d655-4170-4155-acdf-5fca2ce34a06-master768.jpg?w=1280&q=75",
            [
                new Ingredient("Buns", 2),
                new Ingredient("Meat", 1),
            ]
        )
    ];

    constructor(private slService: ShoppingListService) {}

    getRecipes() {
        return this.recipes.slice();
        // by slice we send a copy of the recipe
        // array so it cannot access from outside
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.slService.addIngredients(ingredients);
    }
}