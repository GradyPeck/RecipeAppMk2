import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Recipes } from '../recipes';
import { RecipesService } from '../recipes.service';

@Component({
  selector: 'app-favorites-page',
  templateUrl: './favorites-page.component.html',
  styleUrls: ['./favorites-page.component.css']
})

export class FavoritesPageComponent implements OnInit {
  @Input()
  posts : any;

  @Input()
  recipes : Recipes[] = [];
  recipeList: Recipes[] = [];

  constructor(public service: RecipesService) { }

  ngOnInit(): void {
    this.posts = this.service.favoritesList
  }

}
