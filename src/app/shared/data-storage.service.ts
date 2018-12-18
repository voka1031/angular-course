import { AuthService } from './../auth/auth.service';
import { ShoppingListService } from './../shopping-list/shopping-list.service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RecipeService } from '../recipes/recipe.service';
import { map } from 'rxjs/operators';
import { Recipe } from '../recipes/recipe.model';

@Injectable()
export class DataStorageService {

  constructor(private httpClient: HttpClient,
    private recipeService: RecipeService,
    private authService: AuthService) { }

  private dbURL = 'https://ng-recipe-book-b77be.firebaseio.com/recipes.json?auth=';

  private getURL() {
    return this.dbURL + this.authService.getToken();
  }

  storeRecipes() {
    return this.httpClient.put(this.getURL(), this.recipeService.getRecipes());
  }

  getRecipes() {
    const token = this.authService.getToken();
    this.httpClient.get<Recipe[]>(this.getURL())
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
