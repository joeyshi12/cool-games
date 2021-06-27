import * as P5 from 'p5';
import {Sketch, sketchHolderId} from "../sketch";

export class BlankSketch implements Sketch {
  p5: P5;

  constructor(p5: P5) {
    this.p5 = p5;
  }

  draw(): void {
    this.p5.background(100);
  }

  keyPressListener(): void {
  }

  keyReleaseListener(): void {
  }

  mouseClickListener(): void {
  }

  mouseMoveListener(): void {
  }

  preload(): void {
  }

  setup(): void {
    const canvas = this.p5.createCanvas(400, 300);
    canvas.parent(sketchHolderId);
  }

  update(): void {
  }
}
