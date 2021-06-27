import * as P5 from "p5";

export interface Sketch {
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

export enum SketchName {
  platformer = "platformer",
  pong = "pong",
  snake = "snake",
}

export interface SketchMetadata {
  id: SketchName,
  displayName: string,
  description: string,
}

export const sketchId = "sketch"
export const sketchHolderId = "sketch-holder";
