import {Component} from '@angular/core';
import {SketchMetadata, SketchName} from "./sketches/sketch";
import {Messages} from "./messages";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public messages: Messages;
  public sketchNames: SketchName[];

  constructor() {
    this.messages = new Messages;
    this.sketchNames = [
      SketchName.platformer,
      SketchName.pong,
      SketchName.snake,
    ]
  }

  public getSketchMetadata(sketchName: SketchName): SketchMetadata {
    switch (sketchName) {
      case SketchName.platformer:
        return {
          id: sketchName,
          displayName: this.messages.platformer,
          description: this.messages.platformerDescription,
        };
      case SketchName.pong:
        return {
          id: sketchName,
          displayName: this.messages.pong,
          description: this.messages.pongDescription,
        };
      case SketchName.snake:
        return {
          id: sketchName,
          displayName: this.messages.snake,
          description: this.messages.snakeDescription,
        };
      default:
        throw new Error("Invalid sketch name received");
    }
  }
}
