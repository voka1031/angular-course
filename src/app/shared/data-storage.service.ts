import { HttpClient, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Recipe } from '../recipes/recipe.model';
import { RecipeService } from '../recipes/recipe.service';
import { firebaseConfig } from './../../environments/firebase-config';
import { AuthService } from './../auth/auth.service';

@Injectable()
export class DataStorageService {

  constructor(private httpClient: HttpClient,
    private recipeService: RecipeService,
    private authService: AuthService) { }

  private dbURL = firebaseConfig.recipeBookURL;
  //private dbURL2 = this.dbURL+'?auth=';

  // private getURL() {
  //   return this.dbURL2 + this.authService.getToken();
  // }

  storeRecipes() {
    // // const headers = new HttpHeaders().append('test', 'Bearer akojerdag');
    // return this.httpClient.put(this.dbURL, this.recipeService.getRecipes(), {
    //   //*request event
    //   // observe: 'events'
    //   observe: 'body',
    //   params: new HttpParams().set('auth', this.authService.getToken())
    //   // headers: headers
    // });

    const req = new HttpRequest('PUT', this.dbURL, this.recipeService.getRecipes(),
      {
        // reportProgress: true,
        //*set token in auth.interceptor.ts
        // params: new HttpParams().set('auth', this.authService.getToken())
      });
    return this.httpClient.request(req);
  }

  getRecipes() {
    // this.httpClient.get<Recipe[]>(this.getURL())
    this.httpClient.get<Recipe[]>(this.dbURL, {
      //*default value: body / json
      observe: 'body',
      //*set token in auth.interceptor.ts
      // params: new HttpParams().set('auth', this.authService.getToken()),
      responseType: 'json'
    })
      .pipe(map(
        (recipes) => {
          console.log(recipes);
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
