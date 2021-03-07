import * as P5 from 'p5';
import {Page} from './page';
import {Global} from '../util/global';
import {PlatformerManager, Sound} from '../platformer-manager';
import {OptionsMenu} from './options-menu';
import {GameRun} from './game-run';

export class StartMenu extends Page {
  constructor(p5: P5, manager: PlatformerManager) {
    super(p5, manager);
    this.setButton('start', Global.width / 2 - 25, Global.height / 2 - 16);
    this.setButton('options', Global.width / 2 - 35, Global.height / 2 + 16);
  }

  mouseMoveListener(): void {
    this.updateButtons();
  }

  mouseClickListener(): void {
    if (this.isButtonSelected('start')) {
      this.manager.playSound(Sound.click);
      this.manager.setPage(new GameRun(this.p5, this.manager));
    } else if (this.isButtonSelected('options')) {
      this.manager.playSound(Sound.click);
      this.manager.setPage(new OptionsMenu(this.p5, this.manager));
    }
  }

  keyPressListener(): void { }

  keyReleaseListener(): void { }

  draw(): void {
    this.p5.fill(255, 0 , 0);
    this.p5.rect(0, 0, 100, 100);
    this.p5.push();
    this.p5.background(24, 24, 24);
    this.p5.fill(255);
    this.p5.textSize(32);
    this.p5.text('Platformer', Global.width / 2 - 80, 180);
    this.p5.pop();
    this.drawButton('start');
    this.drawButton('options');
  }

  update(): void { }
}
