import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from '../app-routing.module';
import { AppComponent } from '../app.component';
import { CategoryMoviesComponent } from './category-movies/category-movies.component';
import { CategoryTvshowsComponent } from './category-tvshows/category-tvshows.component';
import { CategoryCountriesComponent } from './category-countries/category-countries.component';
import { CategoryCapitalcitiesComponent } from './category-capitalcities/category-capitalcities.component';
import { CategoryAnimalsComponent } from './category-animals/category-animals.component';
import { CategorySportsComponent } from './category-sports/category-sports.component';

@NgModule({
  declarations: [
    AppComponent,
    CategoryMoviesComponent,
    CategoryTvshowsComponent,
    CategoryCountriesComponent,
    CategoryCapitalcitiesComponent,
    CategoryAnimalsComponent,
    CategorySportsComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
