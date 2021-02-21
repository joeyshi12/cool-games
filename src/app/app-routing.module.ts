import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SelectionComponent} from './components/selection/selection.component';
import {GameComponent} from './components/game/game.component';

const routes: Routes = [
  { path: '', redirectTo: '/selection', pathMatch: 'full' },
  { path: 'selection', component: SelectionComponent },
  { path: 'game/:id', component: GameComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
