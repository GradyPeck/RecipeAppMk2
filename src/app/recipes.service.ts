import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {
  favoritesList = [];
  recipes = [];

  YOUR_APP_ID = '10c8657b';
  YOUR_APP_KEY = '7074f3f9b91a9277a60d79b689290e97';
  MEAT = '';
  HEALTH_LABELS = '';
  DIET_LABELS = '';
  
  baseUrl: string = `https://api.edamam.com/search?q=`;
  infoUrl: string = `app_id=${this.YOUR_APP_ID}&app_key=${this.YOUR_APP_KEY}`;


  //MAIN ITEM
  meat : number = 0;

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

    this.meat = Number(this.meat);
    
    switch (this.meat) {
      case 0: {
        baseUrl += `meatless`;
        break;
      }
      case 1: {
        baseUrl += ` beef`;
        break;
      }
      case 2: {
        baseUrl += ` chicken`;
        break;
      }
      case 3: {
        baseUrl += ` pork`;
        break;
      }
      case 4: {
        baseUrl += ` lamb`;
        break;
      }
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

    return(this.httpClient.get(baseUrl).subscribe((data : any) => {
      console.log(data); 
      this.recipes = data.hits;
      }));

  }

  addToFavoritesList(post) {
    this.favoritesList.push(post);
  }

  removeFromFavoritesList(post) {
    for(let i = 0; i < this.favoritesList.length; i++) {
      if(this.favoritesList[i] == post) {
        this.favoritesList.splice(i, 1);
      }
    }
  }
}
