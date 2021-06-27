import * as P5 from 'p5';

export class Entity {
  protected p5: P5;
  protected x: number;
  protected y: number;
  protected vx: number;
  protected vy: number;
  protected width: number;
  protected height: number;

  constructor(p5: P5, x: number, y: number, vx: number, vy: number, width: number, height: number) {
    this.p5 = p5;
    [this.x, this.y] = [x, y];
    [this.vx, this.vy] = [vx, vy];
    this.width = width;
    this.height = height;
  }

  isCollidingWith(entity: Entity): boolean {
    if (this.x + this.width < entity.x || this.x > entity.x + entity.width) {
      return false;
    }
    return !(this.y + this.height < entity.y || this.y > entity.y + entity.height);
  }

  nextPosition(): [number, number] {
    return [this.x + this.vx, this.y + this.vy];
  }

  getX(): number {
    return this.x;
  }

  getY(): number {
    return this.y;
  }

  getVelX(): number {
    return this.vx;
  }

  getVelY(): number {
    return this.vy;
  }

  getWidth(): number {
    return this.width;
  }

  getHeight(): number {
    return this.height;
  }

  setX(x: number): void {
    this.x = x;
  }

  setY(y: number): void {
    this.y = y;
  }

  setVelY(vy: number): void {
    this.vy = vy;
  }
}
