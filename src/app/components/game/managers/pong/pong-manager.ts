import * as P5 from 'p5';
import 'p5/lib/addons/p5.sound';
import {GameManager} from '../../game-manager';
import {Config} from './config';
import {Paddle} from './paddle';
import {Ball} from './ball';

export class PongManager implements GameManager {
  p5: P5;
  width = 650;
  height = 450;
  private readonly player: Paddle;
  private readonly opponent: Paddle;
  private ball: Ball;
  private readonly tally: number[];
  private countDown: number;

  constructor(p5: P5) {
    this.p5 = p5;
    this.player = new Paddle(p5, Config.padding);
    this.opponent = new Paddle(p5, Config.width - Config.padding - Paddle.width);
    this.ball = new Ball(p5, [this.player, this.opponent]);
    this.tally = [0, 0];
    this.countDown = 0;
  }

  preload(): void {
    this.ball.setBounceSound(new P5.SoundFile('/assets/bounce_sound.wav'));
  }

  setup(): void {
    const canvas = this.p5.createCanvas(this.width, this.height);
    canvas.parent('sketch-holder');
    this.p5.frameRate(60);
  }

  update(): void {
    this.handleGameOver();
    this.player.update();
    this.updateOpponent();
    this.ball.update();
  }

  draw(): void {
    this.p5.push();
    this.drawBackground();
    this.ball.draw();
    this.player.draw();
    this.opponent.draw();
    if (this.countDown > 0) {
      this.p5.push();
      this.p5.fill(255);
      this.p5.textSize(32);
      this.p5.text(this.countDown, Config.width / 2 - 9, Config.height / 2 - 20);
      this.p5.pop();
    }
    this.p5.pop();
  }

  updateOpponent(): void {
    if (this.ball.getHorizontalDirection() > 0) {
      const dy = this.opponent.getY() - this.ball.getY() + Paddle.height / 2;
      if (dy > 5) {
        this.opponent.setDirection(-1);
      } else if (dy < 5) {
        this.opponent.setDirection(1);
      } else {
        this.opponent.setDirection(0);
      }
      this.opponent.update();
    }
  }

  drawBackground(): void {
    this.p5.push();
    this.p5.background(0);
    this.p5.fill(255);
    this.p5.line(Config.width / 2, 0, Config.width / 2, Config.height);
    this.p5.textSize(32);
    this.p5.text(this.tally[0], 160, 50);
    this.p5.text(this.tally[1], Config.width - 180, 50);
    this.p5.pop();
  }

  keyPressListener(keyCode: number): void {
    if (keyCode === 87) {
      this.player.setDirection(-1);
    } else if (keyCode === 83) {
      this.player.setDirection(1);
    }
  }

  keyReleaseListener(keyCode: number): void {
    if (keyCode === 87 && this.player.getDirection() === -1) {
      this.player.setDirection(0);
    } else if (keyCode === 83 && this.player.getDirection() === 1) {
      this.player.setDirection(0);
    }
  }

  handleGameOver(): void {
    if (this.ball.getX() >= 0 && this.ball.getX() + Ball.diameter <= Config.width) {
      return;
    }
    if (this.ball.getX() < 0) {
      this.ball.setDirection(1, 0);
      this.tally[1] += 1;
    } else {
      this.ball.setDirection(-1, 0);
      this.tally[0] += 1;
    }
    const nextTx = this.ball.getHorizontalDirection();
    this.ball.setDirection(0, 0);
    this.ball.setPosition(Config.width / 2, Config.height / 2);
    this.countDown = 3;
    setTimeout(() => {
      this.countDown--;
      setTimeout(() => {
        this.countDown--;
        setTimeout(() => {
          this.countDown--;
          this.ball.setDirection(nextTx, 0);
        }, 600);
      }, 600);
    }, 600);
  }
}
