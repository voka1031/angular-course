import { Component, OnInit } from '@angular/core';
import { RecipeService } from './recipes/recipe.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  loadedFeature = 'recipe';

  constructor(private recipeService: RecipeService) { }
  
  ngOnInit(): void {
  
  }
  
  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }
}
