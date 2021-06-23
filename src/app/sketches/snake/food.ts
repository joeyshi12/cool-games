import * as P5 from 'p5';
import {Config} from './config';

export class Food {
  private p5: P5;
  private x: number;
  private y: number;
  private image!: P5.Image;

  constructor(p5: P5) {
    this.p5 = p5;
    this.x = 14;
    this.y = 10;
  }

  draw(): void {
    this.p5.image(
      this.image,
      this.x * Config.unitLength,
      this.y * Config.unitLength,
      Config.unitLength,
      Config.unitLength
    );
  }

  randomMove(): void {
    this.x = Math.floor(Math.random() * (Config.cols - 4) + 2);
    this.y = Math.floor(Math.random() * (Config.rows - 4) + 2);
  }

  getPosition(): Array<number> {
    return [this.x, this.y];
  }

  setImage(image: P5.Image): void {
    this.image = image;
  }
}
