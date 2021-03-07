import * as P5 from 'p5';

export interface GameManager {
  p5: P5;
  preload(): void;
  setup(): void;
  mouseMoveListener(): void;
  mouseClickListener(): void;
  keyPressListener(): void;
  keyReleaseListener(): void;
  update(): void;
  draw(): void;
}
