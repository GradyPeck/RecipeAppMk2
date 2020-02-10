import { Component, OnInit, Input } from '@angular/core';
import { Recipes } from '../recipes';
import { RecipesService } from '../recipes.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})

export class RecipeListComponent implements OnInit {

  @Input()
  posts : Recipes;

  @Input()
  recipes : Recipes[] = [];

  @Input()
  open : boolean = false;

  constructor(public service: RecipesService) { }

  ngOnInit(): void {
    this.service.getRecipes();
  }

  addRecipe(post) {
    this.service.addToFavoritesList(post)
  }
}
