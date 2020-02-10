import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { FavoritesPageComponent } from './favorites-page/favorites-page.component';
import { HttpClientModule } from '@angular/common/http';
import { MainComponent } from './main/main.component';
import { SearchCriteriaComponent } from './search-criteria/search-criteria.component';
import { RouterModule, Routes } from '@angular/router';
import { RecipeComponent } from './recipe/recipe.component';


@NgModule({
  declarations: [
    AppComponent,
    SearchCriteriaComponent,
    RecipeListComponent,
    FavoritesPageComponent,
    MainComponent,
    SearchCriteriaComponent,
    RecipeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
