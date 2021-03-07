export class Camera {
  private leftBound: number;
  private rightBound: number;
  private topBound: number;
  private bottomBound: number;
  private x: number;
  private y: number;
  private centerX: number;
  private centerY: number;

  constructor(centerX: number, centerY: number, leftBound: number, rightBound: number, topBound: number, bottomBound: number) {
    this.centerX = centerX;
    this.centerY = centerY;
    this.leftBound = leftBound;
    this.rightBound = rightBound;
    this.topBound = topBound;
    this.bottomBound = bottomBound;
    this.x = centerX;
    this.y = centerY;
  }

  update(focusX: number, focusY: number): void {
    this.x = Math.min(this.rightBound - 2 * this.centerX, Math.max(this.leftBound, focusX - this.centerX));
    this.y = Math.min(this.bottomBound - 2 * this.centerY, Math.max(this.topBound, focusY - this.centerY));
  }

  adjustBoundary(leftBound: number, rightBound: number, topBound: number, bottomBound: number): void {
    this.leftBound = leftBound;
    this.rightBound = rightBound;
    this.topBound = topBound;
    this.bottomBound = bottomBound;
  }

  shift(x: number, y: number): [number, number] {
    return [x - this.x, y - this.y];
  }
}
