import * as P5 from 'p5';
import {Config} from './config';
import {Ball} from './ball';

export class Paddle {
  static width = 12;
  static height = 80;
  static speed = 6;
  private p5: P5;
  private readonly x: number;
  private y: number;
  private readonly ball: Ball;
  private readonly isAutomatic: boolean;
  private direction: number;
  private bounceSound: P5.SoundFile | undefined;

  constructor(p5: P5, x: number, ball: Ball, isAutomatic: boolean = true) {
    this.p5 = p5;
    this.x = x;
    this.y = (Config.height - Paddle.height) / 2;
    this.ball = ball;
    this.isAutomatic = isAutomatic;
    this.direction = 0;
  }

  update(): void {
    if (this.isAutomatic) { this.handleAutomaticControl(); }
    this.y = Math.min(Config.height - Paddle.height, Math.max(0, this.y + Paddle.speed * this.direction));
    this.notifyBalls();
  }

  draw(): void {
    this.p5.rect(this.x, this.y, Paddle.width, Paddle.height);
  }

  keyPressListener(keyCode: number): void {
    if (!this.isAutomatic) {
      if (keyCode === 87) {
        this.setDirection(-1);
      } else if (keyCode === 83) {
        this.setDirection(1);
      }
    }
  }

  keyReleaseListener(keyCode: number): void {
    if (!this.isAutomatic) {
      if (keyCode === 87 && this.getDirection() === -1) {
        this.setDirection(0);
      } else if (keyCode === 83 && this.getDirection() === 1) {
        this.setDirection(0);
      }
    }
  }

  private handleAutomaticControl(): void {
    const isBallNotApproaching = (this.x - this.ball.getX()) * this.ball.getHorizontalDirection() < 0;
    const dy = (this.getY() + Paddle.height / 2) - this.ball.getY();
    if (-Paddle.speed / 2 < dy && dy < Paddle.speed / 2 || isBallNotApproaching) {
      this.setDirection(0);
    } else if (dy > Paddle.speed / 2) {
      this.setDirection(-1);
    } else {
      this.setDirection(1);
    }
  }

  private notifyBalls(): void {
    if (this.contains(this.ball.getX(), this.ball.getY())) {
      if (this.bounceSound) {
        this.bounceSound.play();
      }
      this.ball.setPosition(this.ball.getX() - Ball.speed * this.ball.getHorizontalDirection(), this.ball.getY());
      const t = 2 * (this.ball.getY() - this.getY() - Paddle.height / 2) / Paddle.height;
      const angle = Math.atan(t * Config.maxBounceAngle);
      this.ball.setDirection(-Math.sign(this.ball.getHorizontalDirection()) * Math.cos(angle), Math.sin(angle));
    }
  }

  private contains(x: number, y: number): boolean {
    const withinRangeX = this.x <= x && x <= this.x + Paddle.width;
    const withinRangeY = this.y <= y && y <= this.y + Paddle.height;
    return withinRangeX && withinRangeY;
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

  setBounceSound(bounceSound: P5.SoundFile): void {
    this.bounceSound = bounceSound;
  }
}
