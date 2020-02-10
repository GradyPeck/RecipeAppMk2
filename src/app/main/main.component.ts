import { Component, OnInit } from '@angular/core';
import { RecipesService } from '../recipes.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(public service: RecipesService) { }

  ngOnInit() {
  }

  showOnStart = true;
  show = false;
  appear() {
    this.show = !this.show;
    this.showOnStart = !this.showOnStart;
  }
}
