import * as P5 from 'p5';
import {Config} from './config';

export class Paddle {
  static width = 12;
  static height = 80;
  static speed = 6;
  private p5: P5;
  private readonly x: number;
  private y: number;
  private direction: number;

  constructor(p5: P5, x: number) {
    this.p5 = p5;
    this.x = x;
    this.y = (Config.height - Paddle.height) / 2;
    this.direction = 0;
  }

  update(): void {
    this.y = Math.min(Config.height - Paddle.height, Math.max(0, this.y + Paddle.speed * this.direction));
  }

  draw(): void {
    this.p5.rect(this.x, this.y, Paddle.width, Paddle.height);
  }

  getX(): number {
    return this.x;
  }

  getY(): number {
    return this.y;
  }

  getDirection(): number {
    return this.direction;
  }

  setDirection(dir: number): void {
    this.direction = dir;
  }
}
