import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CanvasComponent} from './components/canvas/canvas.component';
import {SketchName} from "./sketches/sketch";

const routes: Routes = [
  {
    path: '',
    redirectTo: '/' + SketchName.platformer,
    pathMatch: 'full'
  },
  {
    path: ':id',
    component: CanvasComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
