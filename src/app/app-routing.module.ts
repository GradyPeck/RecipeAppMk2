import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FavoritesPageComponent} from './favorites-page/favorites-page.component';
import { AppComponent } from './app.component';
import { SearchCriteriaComponent } from './search-criteria/search-criteria.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { MainComponent } from './main/main.component';

const routes: Routes = [
  {
    path: 'favoritesPage',
    component: FavoritesPageComponent
  },

  {
    path: 'searchCriteria',
    component: SearchCriteriaComponent
  },

  {
    path: 'recipeList',
    component: RecipeListComponent
  },

  {
    path: 'main',
    component: MainComponent
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
