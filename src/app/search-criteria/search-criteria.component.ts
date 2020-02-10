import { Component, OnInit, Input } from '@angular/core';
import { Recipes } from '../recipes';
import { RecipesService } from '../recipes.service';

@Component({
  selector: 'app-search-criteria',
  templateUrl: './search-criteria.component.html',
  styleUrls: ['./search-criteria.component.css']
})

export class SearchCriteriaComponent implements OnInit {
  @Input()
  post : Recipes;

  @Input()
  recipes : Recipes[] = [];

  open : boolean = false;

  constructor(public service: RecipesService) { }

  ngOnInit() {
  }

  openForm() {
    if (this.open === false) {
      this.open = true;
    }
    else {
      this.open = false;
    }
  }
  
  closeSearchForm() {
    this.open = false;
  }
}
