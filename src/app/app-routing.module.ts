import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CanvasComponent} from './components/canvas/canvas.component';
import {sketchId, SketchName} from "./sketches/sketch";

const routes: Routes = [
  {
    path: '',
    redirectTo: sketchId + '/' + SketchName.platformer,
    pathMatch: 'full'
  },
  {
    path: sketchId + '/:id',
    component: CanvasComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
