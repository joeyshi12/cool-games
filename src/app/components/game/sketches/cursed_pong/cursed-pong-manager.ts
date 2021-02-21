import * as P5 from 'p5';
import {GameManager} from '../../game-manager';

export class CursedPongManager implements GameManager {
  p5: P5;
  width = 650;
  height = 450;
  private foodImg!: P5.Image;

  constructor(p5: P5) {
    this.p5 = p5;
  }

  preload(): void {
  }

  setup(): void {
    const canvas = this.p5.createCanvas(this.width, this.height);
    canvas.parent('sketch-holder');
    this.p5.background(255, 255, 0);
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
