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
