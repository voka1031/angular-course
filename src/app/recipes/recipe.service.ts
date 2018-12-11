import { Injectable, EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';

@Injectable()
export class RecipeService {

  recipeSelected = new EventEmitter<Recipe>();

  constructor() { }

  recipes: Recipe[] = [
    new Recipe('recipe 1', 'A test recipe', 'https://media2.s-nbcnews.com/j/newscms/2018_35/1363730/rachel-hollis-chicken-fingers-today-main-180828_b9b2a726ec8654e3f9f7435ce26588fb.today-inline-large.jpg'),
    new Recipe('recipe 2', 'A test recipe', 'https://www.seriouseats.com/recipes/images/2017/03/20170210-vietnamese-chicken-emily-matt-clifton-3.jpg'),
  ];

  getRecipes() {
    return this.recipes.slice();
  }

}
