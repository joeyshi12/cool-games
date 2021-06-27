import {Component} from '@angular/core';
import {ActivatedRoute, NavigationEnd, Router} from '@angular/router';
import * as P5 from "p5";
import {PlatformerSketch} from "../../sketches/platformer/platformer-sketch";
import {PongSketch} from "../../sketches/pong/pong-sketch";
import {SnakeSketch} from "../../sketches/snake/snake-sketch";
import {Sketch, SketchName, sketchHolderId} from "../../sketches/sketch";

@Component({
  selector: 'main-canvas',
  templateUrl: './canvas.component.html',
  styleUrls: ['./canvas.component.css']
})
export class CanvasComponent {
  public sketchHolderId: string;
  public canvas?: P5;

  constructor(private route: ActivatedRoute,
              router: Router) {
    this.sketchHolderId = sketchHolderId;
    router.events.subscribe(val => {
      if (val instanceof NavigationEnd) {
        if (this.canvas !== undefined) {
          this.canvas.remove();
          delete this.canvas;
        }
        this.canvas = undefined;
        this._createCanvas();
      }
    });
  }

  private _createCanvas(): void {
    this.canvas = new P5((p5: P5) => {
      const sketch = this._createSketch(p5);
      p5.preload = () => { sketch.preload(); };
      p5.setup = () => { sketch.setup(); };
      p5.mouseMoved = () => { sketch.mouseMoveListener(); };
      p5.mouseClicked = () => { sketch.mouseClickListener(); };
      p5.keyPressed = () => { sketch.keyPressListener(); };
      p5.keyReleased = () => { sketch.keyReleaseListener(); };
      p5.draw = () => {
        sketch.draw();
        sketch.update();
      };
    });
  }

  private _createSketch(p5: P5): Sketch {
    switch (this.route.snapshot.params.id) {
      case SketchName.platformer:
        return new PlatformerSketch(p5);
      case SketchName.pong:
        return new PongSketch(p5);
      case SketchName.snake:
        return new SnakeSketch(p5);
      default:
        throw Error("Invalid sketch name received");
    }
  }
}
