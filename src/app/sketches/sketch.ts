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
  snake = "snake"
}

export interface SketchMetadata {
  sketchName: SketchName,
  displayName: string,
  description: string
}

export const availableSketchMetadataList: SketchMetadata[] = [
  {
    sketchName: SketchName.platformer,
    displayName: "Platformer",
    description: "Bruh",
  },
  {
    sketchName: SketchName.pong,
    displayName: "Pong",
    description: "Bruh",
  },
  {
    sketchName: SketchName.snake,
    displayName: "Snake",
    description: "Bruh",
  }
]

export const sketchHolderId = "sketch-holder";
