import * as P5 from 'p5';
import {Entity} from './entity';
import {Player} from './player';
import {Global} from '../util/global';

export class Ghost extends Entity {
  SPEED = 2;
  RANGE = 320;
  UPDATE_BUFFER = 20;
  private target: Player;
  private angle: number;
  private updateTimer: number;
  private triggered: boolean;
  private readonly sprite: any;

  constructor(p5: P5, x: number, y: number, target: Player, sprite: P5.Image) {
    super(p5, x, y, 0, 0, 36, 36);
    this.p5 = p5;
    this.target = target;
    this.angle = Math.random() * 2 * Math.PI;
    this.updateTimer = 20;
    this.triggered = false;
    this.sprite = sprite;
  }

  update(): void {
    const dx = this.target.getX() - this.x;
    const dy = this.target.getY() - this.y;
    const r = Math.sqrt(dx ** 2 + dy ** 2);
    if (r < this.RANGE) {
      this.triggered = true;
    }
    if (this.triggered) {
      const tx = dx / r;
      const ty = dy / r;
      if (this.updateTimer > 0) {
        this.updateTimer--;
      } else {
        this.vx = this.SPEED * tx + Math.random() - 0.5;
        this.vy = this.SPEED * ty + Math.random() - 0.5;
        this.updateTimer = this.UPDATE_BUFFER;
      }
    }
    this.angle = (this.angle + 0.1) % (2 * Math.PI);
    this.x += this.vx + 0.7 * Math.cos(this.angle);
    this.y += this.vy + 0.7 * Math.sin(this.angle);
  }

  draw(): void {
    // drawing for debugging purposes
    // this.drawHitBox();
    const [x, y] = Global.camera.shift(this.x, this.y);
    this.p5.push();
    if (this.vx > 0) {
      this.p5.scale(-1, 1);
      this.p5.image(this.sprite, -x - this.width, y, this.width + 3 * Math.cos(this.angle), this.height);
    } else {
      this.p5. image(this.sprite, x, y, this.width + 3 * Math.cos(this.angle), this.height);
    }
    this.p5.pop();
  }
}
