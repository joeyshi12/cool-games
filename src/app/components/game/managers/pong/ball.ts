import * as P5 from 'p5';
import 'p5/lib/addons/p5.sound';
import {Config} from './config';

export class Ball {
  static diameter = 6;
  static speed = 10;
  private p5: P5;
  private x: number;
  private y: number;
  private tx: number;
  private ty: number;

  constructor(p5: P5) {
    this.p5 = p5;
    this.x = Config.width / 2;
    this.y = Config.height / 2;
    this.tx = -1;
    this.ty = 0;
  }

  update(): void {
    this.x += Ball.speed * this.tx;
    this.y += Ball.speed * this.ty;
    this.handleWallBounce();
  }

  private handleWallBounce(): void {
    if (this.y <= 0) {
      this.ty = Math.abs(this.ty);
    } else if (this.y + Ball.diameter >= Config.height) {
      this.ty = -Math.abs(this.ty);
    }
  }

  draw(): void {
    this.p5.circle(this.x, this.y, Ball.diameter);
  }

  getX(): number {
    return this.x;
  }

  getY(): number {
    return this.y;
  }

  getHorizontalDirection(): number {
    return this.tx;
  }

  setPosition(x: number, y: number): void {
    [this.x, this.y] = [x, y];
  }

  setDirection(tx: number, ty: number): void {
    [this.tx, this.ty] = [tx, ty];
  }
}
