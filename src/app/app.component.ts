import { Component } from '@angular/core';
import { Recipes } from './recipes';
import { RecipesService } from './recipes.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'recipesApi';

  constructor (public service: RecipesService, private route: ActivatedRoute) {}

  fetchRecipes() {
    this.service.getRecipes();
  }

  showOnStart = true;
  show = false;
  appear() {
    this.show = !this.show;
    this.showOnStart = !this.showOnStart;
  }
}
