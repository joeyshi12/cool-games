import * as P5 from 'p5';
import {Page} from './page';
import {PlatformerManager} from '../platformer-manager';
import {Global} from '../util/global';
import {Player} from '../entities/player';
import {GameMap} from '../util/game-map';
import {StartMenu} from './start-menu';
import {Ghost} from '../entities/ghost';

export class GameRun extends Page {
  private isPaused: boolean;
  private readonly player: Player;
  private ghosts: Array<Ghost>;
  private map: GameMap;

  constructor(p5: P5, manager: PlatformerManager) {
    super(p5, manager);
    this.isPaused = false;
    this.player = new Player(p5, 60, 15 * Global.unitLength + 9, manager);
    this.map = new GameMap(p5, Global.mapData, manager.getSpriteSheet());
    this.ghosts = this.respawnGhosts();
    this.setButton('reset', Global.width / 2 - 25, 140);
    this.setButton('exit', Global.width / 2 - 20, 170);
  }

  mouseMoveListener(): void {
    this.updateButtons();
  }

  mouseClickListener(): void {
    if (this.isPaused) {
      if (this.isButtonSelected('reset')) {
        this.reset();
      } else if (this.isButtonSelected('exit')) {
        this.manager.setPage(new StartMenu(this.p5, this.manager));
      }
    }
  }

  keyPressListener(): void {
    if (this.p5.key.toUpperCase() === 'ESCAPE') {
      this.manager.playSound('pause');
      this.isPaused = !this.isPaused;
    } else if (!this.player.getIsDead()) {
      this.handlePlayerMovement();
    }
  }

  keyReleaseListener(): void {
    switch (this.p5.key.toUpperCase()) {
      case this.manager.getKeyBinding('left'):
        if (this.player.getDirection() === -1) {
          this.player.setDirection(0);
        }
        break;
      case this.manager.getKeyBinding('right'):
        if (this.player.getDirection() === 1) {
          this.player.setDirection(0);
        }
        break;
      case this.manager.getKeyBinding('jump'):
        if (this.player.getVelY() < 0) {
          this.player.setVelY(this.player.getVelY() * 0.5);
        }
    }
  }

  draw(): void {
    if (this.isPaused) {
      this.drawPauseMenu();
    } else {
      this.p5.push();
      this.p5.background(71, 45, 60);
      this.map.draw();
      this.player.draw();
      this.ghosts.forEach(ghost => ghost.draw());
      this.p5.pop();
    }
  }

  update(): void {
    if (this.isPaused) {
      return;
    }
    this.player.update(this.map);
    this.ghosts.forEach(ghost => {
      ghost.update();
      if (this.player.isCollidingWith(ghost)) {
        this.player.setIsDead(true);
      }
    });
    this.handleMapTransition();
    Global.camera.update(this.player.getX(), this.player.getY());
  }

  private handlePlayerMovement(): void {
    switch (this.p5.key.toUpperCase()) {
      case this.manager.getKeyBinding('left'):
        this.player.setDirection(-1);
        break;
      case this.manager.getKeyBinding('right'):
        this.player.setDirection(1);
        break;
      case this.manager.getKeyBinding('jump'):
        this.player.jump();
        break;
      case this.manager.getKeyBinding('drop'):
        this.player.dropFromPlatform(this.map);
        break;
    }
  }

  private handleMapTransition(): void {
    const centerX = this.player.getX() + this.player.getWidth() / 2;
    if (centerX < 0) {
      if (this.map.getData().getLeftMap() === null) {
        this.player.setX(this.player.getX() - this.player.getVelX());
        return;
      }
      this.map.setDataToLeftMap();
      this.player.setX(this.map.getData().getNumCols() * Global.unitLength - this.player.getWidth() / 2);
      this.respawnGhosts();
      Global.camera.adjustBoundary(0, this.map.getData().getNumCols() * Global.unitLength, 0,
        this.map.getData().getNumRows() * Global.unitLength);
    } else if (centerX > this.map.getData().getNumCols() * Global.unitLength) {
      if (this.map.getData().getRightMap() === null) {
        this.player.setX(this.player.getX() - this.player.getVelX());
        return;
      }
      this.map.setDataToRightMap();
      this.player.setX(-this.player.getWidth() / 2);
      this.respawnGhosts();
      Global.camera.adjustBoundary(0, this.map.getData().getNumCols() * Global.unitLength, 0,
        this.map.getData().getNumRows() * Global.unitLength);
    }
  }

  private drawPauseMenu(): void {
    this.p5.push();
    this.p5.fill(255);
    this.p5.rect(Global.width / 2 - 75, 70, 150, 150);
    this.p5.fill(0);
    this.p5.rect(Global.width / 2 - 70, 75, 140, 140);
    this.p5.stroke(1);
    this.p5.textSize(32);
    this.p5.fill(255);
    this.p5.text('Paused', Global.width / 2 - 48, 120);
    this.p5.pop();
    this.drawButton('reset');
    this.drawButton('exit');
  }

  private reset(): void {
    this.isPaused = false;
    this.player.setIsDead(false);
    this.player.setX(60);
    this.player.setY(15 * Global.unitLength + 9);
    this.map = new GameMap(this.p5, Global.mapData, this.manager.getSpriteSheet());
    Global.camera.adjustBoundary(0, this.map.getData().getNumCols() * Global.unitLength, 0,
      this.map.getData().getNumRows() * Global.unitLength);
    this.ghosts = this.respawnGhosts();
  }

  private respawnGhosts(): Array<Ghost> {
    return this.map.getData().getInitialGhostPositions().map(([x, y]) =>
      new Ghost(this.p5, x, y, this.player, this.manager.getSpriteSheet().get(26 * 16 + 1, 6 * 16, 14, 16)));
  }
}
