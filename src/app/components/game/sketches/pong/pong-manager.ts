import * as P5 from 'p5';
import 'p5/lib/addons/p5.sound';
import {GameManager} from '../../game-manager';

export class PongManager implements GameManager {
  p5: P5;
  width = 450;
  height = 450;

  constructor(p5: P5) {
    this.p5 = p5;
  }

  preload(): void {
  }

  setup(): void {
    const canvas = this.p5.createCanvas(this.width, this.height);
    canvas.parent('sketch-holder');
    this.p5.background(0, 0, 255);
  }

  update(): void {
  }

  draw(): void {
    this.p5.rect(10, 10, 20, 20);
  }

  keyPressListener(keyCode: number): void {
    console.log(keyCode);
  }

  keyReleaseListener(keyCode: number): void {
    console.log(keyCode);
  }
}
