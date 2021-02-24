import * as P5 from 'p5';
import {Config} from './config';

export enum Direction {
  neutral,
  left,
  right,
  up,
  down
}

export class Snake {
  private p5: P5;
  private direction: Direction;
  readonly positionsX: number[];
  readonly positionsY: number[];
  private size: number;
  private isDead: boolean;

  constructor(p5: P5) {
    this.p5 = p5;
    this.direction = Direction.neutral;
    this.positionsX = [5, 4, 3];
    this.positionsY = [10, 10, 10];
    this.size = 3;
    this.isDead = false;
  }

  update(): void {
    if (this.hasCollided()) {
      this.isDead = true;
      return;
    }
    if (this.direction === Direction.up) {
      this.positionsX.unshift(this.positionsX[0]);
      this.positionsY.unshift(this.positionsY[0] - 1);
    } else if (this.direction === Direction.down) {
      this.positionsX.unshift(this.positionsX[0]);
      this.positionsY.unshift(this.positionsY[0] + 1);
    } else if (this.direction === Direction.left) {
      this.positionsX.unshift(this.positionsX[0] - 1);
      this.positionsY.unshift(this.positionsY[0]);
    } else {
      this.positionsX.unshift(this.positionsX[0] + 1);
      this.positionsY.unshift(this.positionsY[0]);
    }
    this.positionsX.pop();
    this.positionsY.pop();
  }

  draw(): void {
    this.p5.push();
    this.p5.fill(0, 255, 0);
    for (let i = 0; i < this.size; i++) {
      this.p5.square(this.positionsX[i] * Config.unitLength, this.positionsY[i] * Config.unitLength, Config.unitLength);
    }
    this.p5.pop();
  }

  grow(): void {
    this.positionsX.push(2 * this.positionsX[this.size - 1] - this.positionsX[this.size - 2]);
    this.positionsY.push(2 * this.positionsY[this.size - 1] - this.positionsY[this.size - 2]);
    this.size++;
  }

  hasCollided(): boolean {
    if (this.isDead) {
      return true;
    }
    const notWithinBoundsX = this.positionsX[0] === 0 || this.positionsX[0] === Config.cols - 1;
    const notWithinBoundsY = this.positionsY[0] === 0 || this.positionsY[0] === Config.rows - 1;
    if (notWithinBoundsX || notWithinBoundsY) {
      return true;
    }
    for (let i = 1; i < this.size; i++) {
      if (this.positionsX[0] === this.positionsX[i] && this.positionsY[0] === this.positionsY[i]) {
        return true;
      }
    }
    return false;
  }

  getSize(): number {
    return this.size;
  }

  getIsDead(): boolean {
    return this.isDead;
  }

  setDirection(direction: Direction): void {
    this.direction = direction;
  }
}
