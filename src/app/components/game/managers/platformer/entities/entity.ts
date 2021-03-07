export class Entity {
  protected x: number;
  protected y: number;
  protected width: number;
  protected height: number;

  constructor(x: number, y: number, width: number, height: number) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
  }

  isCollidingWith(entity: Entity): boolean {
    if (this.x + this.width < entity.x || this.x > entity.x + entity.width) {
      return false;
    }
    return !(this.y + this.height < entity.y || this.y > entity.y + entity.height);
  }

  getX(): number {
    return this.x;
  }

  getY(): number {
    return this.y;
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
}
