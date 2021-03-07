import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import * as P5 from 'p5';
import {GameManager} from './game-manager';
import {SnakeManager} from './managers/snake/snake-manager';
import {PlatformerManager} from './managers/platformer/platformer-manager';
import {PongManager} from './managers/pong/pong-manager';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit, OnDestroy {
  canvas!: P5;

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.canvas = this.createCanvas(this.route.snapshot.params.id);
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

  createCanvas(id: string): P5 {
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
    return new P5(sketch);
  }

  ngOnDestroy(): void {
    this.canvas.remove();
  }

}
