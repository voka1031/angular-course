import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Recipe } from './recipe.model';

@Injectable()
export class RecipeService {

  recipeSelected = new EventEmitter<Recipe>();

  constructor(private shoppingListService: ShoppingListService) { }

  URL1 = 'https://upload.wikimedia.org/wikipedia/commons/7/72/Schnitzel.JPG';
  URL2 = 'https://upload.wikimedia.org/wikipedia/commons/b/be/Burger_King_Angus_Bacon_%26_Cheese_Steak_Burger.jpg';

  recipes: Recipe[] = [
    new Recipe('Tasty Schnitzel', 'A super-tasty Schnitzel - just awesome!', this.URL1, [new Ingredient('Meat', 1), new Ingredient('French Fries', 20)]),
    new Recipe('recipe 2', 'A test recipe', this.URL2, [new Ingredient('Buns', 2), new Ingredient('Meat', 1)]),
  ];

  getRecipes() {
    return this.recipes.slice();
  }

  addIngredientToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }

}
