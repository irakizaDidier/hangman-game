import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StartScreenComponent } from './components/start-screen/start-screen.component';
import { HowToPlayComponent } from './components/how-to-play/how-to-play.component';
import { PickCategoryComponent } from './components/pick-category/pick-category.component';
import { GameScreenComponent } from './components/game-screen/game-screen.component';

const routes: Routes = [
  { path: '', component: StartScreenComponent },
  { path: 'how-to-play', component: HowToPlayComponent },
  { path: 'pick-category', component: PickCategoryComponent },
  { path: 'game/:category', component: GameScreenComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
