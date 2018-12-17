import { ShoppingListService } from './../shopping-list/shopping-list.service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RecipeService } from '../recipes/recipe.service';
import { map } from 'rxjs/operators';
import { Recipe } from '../recipes/recipe.model';

@Injectable({
  providedIn: 'root'
})
export class DataStorageService {

  constructor(private httpClient: HttpClient,
    private recipeService: RecipeService,
    private shoppingListService: ShoppingListService) { }

  private dbURL = 'https://ng-recipe-book-b77be.firebaseio.com/recipes.json';

  getURL(schema: string) {
    return this.dbURL + schema + '.json';
  }

  storeRecipes() {
    return this.httpClient.put(this.getURL('recipes'), this.recipeService.getRecipes());
  }

  getRecipes() {
    this.httpClient.get<Recipe[]>(this.getURL('recipes'))
      .pipe(map(
        (recipes) => {
          for (let recipe of recipes) {
            if (!recipe['ingredients']) {
              recipe['ingredients'] = []
            }
          }
          return recipes;
        }
      ))
      .subscribe(
        (response) => {
          this.recipeService.setRecipe(response);
        }
      );
  }
}
