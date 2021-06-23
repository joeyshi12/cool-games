import {Component} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import * as P5 from "p5";
import {PlatformerSketch} from "../../sketches/platformer/platformer-sketch";
import {PongSketch} from "../../sketches/pong/pong-sketch";
import {SnakeSketch} from "../../sketches/snake/snake-sketch";
import {Sketch, SketchName, sketchHolderId} from "../../sketches/sketch";
import {BlankSketch} from "../../sketches/blank/blank-sketch";

@Component({
  selector: 'canvas',
  templateUrl: './canvas.component.html',
  styleUrls: ['./canvas.component.css']
})
export class CanvasComponent {
  public sketchHolderId: string;
  public canvas: P5;

  constructor(private route: ActivatedRoute) {
    this.sketchHolderId = sketchHolderId;
    this.canvas = this._createCanvas();
  }

  private _createCanvas(): P5 {
    const sketch = (p5: P5) => {
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
    };
    return new P5(sketch);
  }

  private _createSketch(p5: P5): Sketch {
    const test = this.route.snapshot.params.id;
    const gameName = "platformer";
    // switch (gameName) {
    //   case SketchName.platformer:
    //     return new PlatformerSketch(p5);
    //   case SketchName.pong:
    //     return new PongSketch(p5);
    //   case SketchName.snake:
    //     return new SnakeSketch(p5);
    //   default:
    //     throw Error("Invalid sketch name received");
    // }
    return new BlankSketch(p5);
  }

  ngOnDestroy(): void {
    this.canvas.remove();
  }
}
