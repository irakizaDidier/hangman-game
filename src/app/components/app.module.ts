import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {
  HttpClientModule,
  provideHttpClient,
  withFetch,
} from '@angular/common/http';

import { AppRoutingModule } from '../app-routing.module';
import { AppComponent } from '../app.component';
import { StartScreenComponent } from './start-screen/start-screen.component';
import { HowToPlayComponent } from './how-to-play/how-to-play.component';
import { PickCategoryComponent } from './pick-category/pick-category.component';
import { GameScreenComponent } from './game-screen/game-screen.component';

@NgModule({
  declarations: [
    AppComponent,
    StartScreenComponent,
    HowToPlayComponent,
    PickCategoryComponent,
    GameScreenComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [provideHttpClient(withFetch())],
  bootstrap: [AppComponent],
})
export class AppModule {}
