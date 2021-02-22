import * as P5 from 'p5';
import 'p5/lib/addons/p5.sound';
import {Config} from './config';
import {Paddle} from './paddle';

export class Ball {
  static diameter = 6;
  static speed = 10;
  private p5: P5;
  private readonly paddles: Array<Paddle>;
  private x: number;
  private y: number;
  private tx: number;
  private ty: number;
  private bounceSound!: P5.SoundFile;

  constructor(p5: P5, paddles: Array<Paddle>) {
    this.p5 = p5;
    this.paddles = paddles;
    this.x = Config.width / 2;
    this.y = Config.height / 2;
    this.tx = -1;
    this.ty = 0;
  }

  update(): void {
    this.x += Ball.speed * this.tx;
    this.y += Ball.speed * this.ty;
    this.handleWallBounce();
    this.handlePaddleBounce();
  }

  private handleWallBounce(): void {
    if (this.y <= 0) {
      this.ty = Math.abs(this.ty);
    } else if (this.y + Ball.diameter >= Config.height) {
      this.ty = -Math.abs(this.ty);
    }
  }

  private handlePaddleBounce(): void {
    for (const paddle of this.paddles) {
      if (this.isWithin(paddle)) {
        this.bounceSound.play();
        this.x -= Ball.speed * this.tx;
        const t = 2 * (this.getY() - paddle.getY() - Paddle.height / 2) / Paddle.height;
        const angle = Math.atan(t * Config.maxBounceAngle);
        this.setDirection(-Math.sign(this.tx) * Math.cos(angle), Math.sin(angle));
      }
    }
  }

  private isWithin(paddle: Paddle): boolean {
    const isWithinPaddleBoundX = paddle.getX() <= this.x && this.x <= paddle.getX() + Paddle.width;
    const isWithinPaddleBoundY = paddle.getY() <= this.y && this.y <= paddle.getY() + Paddle.height;
    return isWithinPaddleBoundX && isWithinPaddleBoundY;
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

  getVerticalDirection(): number {
    return this.ty;
  }

  setPosition(x: number, y: number): void {
    [this.x, this.y] = [x, y];
  }

  setDirection(tx: number, ty: number): void {
    [this.tx, this.ty] = [tx, ty];
  }

  setBounceSound(bounceSound: P5.SoundFile): void {
    this.bounceSound = bounceSound;
  }
}
