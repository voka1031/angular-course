import { Injectable, EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Injectable()
export class ShoppingListService {

  ingredientChanged = new EventEmitter<Ingredient[]>();

  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10),
  ];

  constructor() { }

  getIngredients() {
    return this.ingredients.slice();
  }

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    //this.manageList([ingredient]);
    this.ingredientChanged.emit(this.ingredients.slice());
  }

  addIngredients(ingredients: Ingredient[]) {
    this.ingredients.push(...ingredients);
    //this.manageList(ingredients);
    this.ingredientChanged.emit(this.ingredients.slice());
  }

  // result: Ingredient[];
  // tempData: Ingredient;
  // manageList(ingredients: Ingredient[]) {
  //   this.result = [];
  //   console.log('ingredients : ' + ingredients);
  //   for (let ing of ingredients) {
  //     console.log("amount " + ing.amount + "name" + ing.name);
  //     console.log("filter : " + this.ingredients.filter(e => e.name === ing.name));
  //   }
  //   this.ingredients = this.result;
  // }

}
