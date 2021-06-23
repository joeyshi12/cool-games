import * as P5 from 'p5';
import {Direction, Snake} from './snake';
import {Food} from './food';
import {Config} from './config';
import {Sketch, sketchHolderId} from "../sketch";

export class SnakeSketch implements Sketch {
  p5: P5;
  width;
  height;
  private snake: Snake;
  private food: Food;

  constructor(p5: P5) {
    this.p5 = p5;
    this.width = Config.cols * Config.unitLength;
    this.height = Config.rows * Config.unitLength;
    this.snake = new Snake(p5);
    this.food = new Food(p5);
  }

  preload(): void {
    this.food.setImage(this.p5.loadImage('/assets/snake/apple.png'));
  }

  setup(): void {
    const canvas = this.p5.createCanvas(this.width, this.height);
    canvas.parent(sketchHolderId);
    this.p5.frameRate(18);
  }

  mouseMoveListener(): void { }

  mouseClickListener(): void { }

  keyPressListener(): void {
    const key = this.p5.key.toUpperCase();
    const dx = this.snake.positionsX[0] - this.snake.positionsX[1];
    const dy = this.snake.positionsY[0] - this.snake.positionsY[1];
    if ((key === 'W') && dy <= 0) {
      this.snake.setDirection(Direction.up);
    } else if ((key === 'S') && dy >= 0) {
      this.snake.setDirection(Direction.down);
    } else if ((key === 'A') && dx <= 0) {
      this.snake.setDirection(Direction.left);
    } else if ((key === 'D') && dx >= 0) {
      this.snake.setDirection(Direction.right);
    }
  }

  keyReleaseListener(): void { }

  update(): void {
    this.snake.update();
    const [foodX, foodY] = this.food.getPosition();
    if (this.snake.positionsX[0] === foodX && this.snake.positionsY[0] === foodY) {
      this.handleEatFood();
    }
  }

  draw(): void {
    this.p5.background(255);
    this.food.draw();
    this.snake.draw();
    this.drawBorders();
    if (this.snake.getIsDead()) {
      this.drawGameOverMessage();
    }
  }

  private handleEatFood(): void {
    let [foodX, foodY] = this.food.getPosition();
    this.snake.grow();
    this.food.randomMove();
    while (true) {
      let appleMisplaced = false;
      for (let i = 0; i < this.snake.getSize(); i++) {
        [foodX, foodY] = this.food.getPosition();
        if (this.snake.positionsX[i] === foodX && this.snake.positionsY[i] === foodY) {
          appleMisplaced = true;
          break;
        }
      }
      if (!appleMisplaced) {
        break;
      }
      this.food.randomMove();
    }
  }

  private drawBorders(): void {
    this.p5.push();
    this.p5.noFill();
    this.p5.strokeWeight(2 * Config.unitLength);
    this.p5.rect(0, 0, this.width, this.height);
    this.p5.pop();
  }

  private drawGameOverMessage(): void {
    this.p5.push();
    this.p5.fill(0);
    this.p5.textSize(30);
    this.p5.text('yuo died', 64, 80);
    this.p5.text('score: ' + (this.snake.getSize() - 3), 64, 120);
    this.p5.text('ctrl+r to restart', 64, 160);
    this.p5.pop();
  }
}
