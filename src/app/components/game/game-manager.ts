import * as P5 from 'p5';

export interface GameManager {
  p5: P5;
  width: number;
  height: number;
  preload(): void;
  setup(): void;
  update(): void;
  draw(): void;
  keyPressListener(keyCode: number): void;
  keyReleaseListener(keyCode: number): void;
}
