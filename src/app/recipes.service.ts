import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {
  favoritesList = [];
  recipes = [];

  YOUR_APP_ID = '40badb0a';
  YOUR_APP_KEY = '440e881e1f0dd3eb17fa64fd1f9efa46';
  MEAT = '';
  HEALTH_LABELS = '';
  DIET_LABELS = '';
  
  baseUrl: string = `https://api.edamam.com/search?q=`;
  infoUrl: string = `app_id=${this.YOUR_APP_ID}&app_key=${this.YOUR_APP_KEY}`;


  //MAIN ITEM
  beef : boolean = false;
  chicken : boolean = false;
  pork : boolean = false;
  lamb : boolean = false;

  //HEALTH
  vegan : boolean = false;
  vegetarian : boolean = false;
  sugarConscious : boolean = false;
  peanutFree : boolean = false;
  treeNutFree : boolean = false;
  alcoholFree : boolean = false;

  //DIET
  balanced : boolean = false;
  highProtein : boolean = false;
  lowCarb : boolean = false;
  lowFat : boolean = false;

  constructor(private httpClient: HttpClient) { }

  getRecipes() {
    let baseUrl = this.baseUrl;

    if (!this.beef && !this.chicken && !this.pork && !this.lamb) {
      baseUrl += `no meat`;
    }

    if (this.beef) {
      baseUrl += ` beef`;
    }

    if (this.chicken) {
      baseUrl += ` chicken`;
    }

    if (this.pork) {
      baseUrl += ` pork`;
    }

    if (this.lamb) {
      baseUrl += ` lamb`;
    }
    
    baseUrl += '&';

    if (!this.vegan && !this.vegetarian && !this.sugarConscious && !this.peanutFree && !this.treeNutFree && !this.alcoholFree) {
      baseUrl = baseUrl;
    }
    else {
      baseUrl += `health=`;
    }


    if (this.vegan) {
      baseUrl += `vegan&`;
    }

    if (this.vegetarian) {
      baseUrl += `vegetarian&`;
    }

    if (this.sugarConscious) {
      baseUrl += `sugar-conscious&`;
    }

    if (this.peanutFree) {
      baseUrl += `peanut-free&`;
    }

    if (this.treeNutFree) {
      baseUrl += `tree-nut-free&`;
    }

    if (this.alcoholFree) {
      baseUrl += `alcohol-free&`;
    }



    if (!this.balanced && !this.highProtein && !this.lowCarb && !this.lowFat) {
      baseUrl = baseUrl;
    }
    else {
      baseUrl += `diet=`;
    }


    if (this.balanced) {
      baseUrl += `balanced&`;
    }

    if (this.highProtein) {
      baseUrl += `high-protein&`;
    }

    if (this.lowCarb) {
      baseUrl += `low-carb&`;
    }
    if (this.lowFat) {
      baseUrl += `low-fat&`;
    }

    baseUrl += this.infoUrl;

    // this.beef = false;
    // this.chicken = false;
    // this.pork = false;
    // this.lamb = false;
    // this.vegan = false;
    // this.vegetarian = false;
    // this.sugarConscious = false;
    // this.peanutFree = false;
    // this.treeNutFree = false;
    // this.alcoholFree = false;
    // this.balanced = false;
    // this.highProtein = false;
    // this.lowCarb = false;
    // this.lowFat = false;


    return(this.httpClient.get(baseUrl).subscribe((data : any) => {
      console.log(data); 
      this.recipes = data.hits;
      }));

  }

  addToFavoritesList(post) {
    this.favoritesList.push(post);
    console.log(this.favoritesList);
  }
}
