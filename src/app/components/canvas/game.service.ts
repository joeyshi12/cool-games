import { Injectable } from '@angular/core';
import * as P5 from 'p5';
import {PlatformerManager} from '../../sketches/platformer/platformer-manager';
import {PongManager} from '../../sketches/pong/pong-manager';
import {SnakeManager} from '../../sketches/snake/snake-manager';

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

@Injectable({
  providedIn: 'root'
})
export class GameService {
  private canvas: undefined | P5;

  createCanvas(id: string): void {
    const sketch = (p5: P5) => {
      const gameManager = this.createManager(p5, id);
      p5.preload = () => { gameManager.preload(); };
      p5.setup = () => { gameManager.setup(); };
      p5.mouseMoved = () => { gameManager.mouseMoveListener(); };
      p5.mouseClicked = () => { gameManager.mouseClickListener(); };
      p5.keyPressed = () => { gameManager.keyPressListener(); };
      p5.keyReleased = () => { gameManager.keyReleaseListener(); };
      p5.draw = () => {
        gameManager.draw();
        gameManager.update();
      };
    };
    this.canvas = new P5(sketch);
  }

  removeCanvas(): void {
    if (this.canvas === undefined) {
      throw Error('Canvas is not defined');
    }
    this.canvas.remove();
  }

  createManager(p5: P5, id: string): GameManager {
    switch (id) {
      case 'platformer':
        return new PlatformerManager(p5);
      case 'pong':
        return new PongManager(p5);
      case 'snake':
        return new SnakeManager(p5);
      default:
        throw Error('invalid game id encountered');
    }
  }
}
