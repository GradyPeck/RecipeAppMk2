import { Component, OnInit, Input } from '@angular/core';
import { RecipesService } from '../recipes.service';


@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent implements OnInit {

  @Input() post;

  @Input() fave : boolean = false;
  
  detailed : boolean = false;

  constructor(public service: RecipesService) { }

  ngOnInit() {
    for(let thingie of this.service.favoritesList) {
      if(thingie.recipe.url == this.post.recipe.url) {
        this.fave = true;
      }
    }
  }

  removeRecipe (post) {
    this.service.removeFromFavoritesList(post);
    this.fave = false;
  }

  addRecipe (post) {
    this.service.addToFavoritesList(post);
    this.fave = true;
  }

  toggleDetailed () {
    this.detailed = !this.detailed;
  }

}
