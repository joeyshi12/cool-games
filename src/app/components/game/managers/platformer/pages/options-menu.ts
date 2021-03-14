import {Page} from './page';
import {StartMenu} from './start-menu';
import * as P5 from 'p5';
import {PlatformerManager} from '../platformer-manager';
import {Global} from '../util/global';

export class OptionsMenu extends Page {
  private selectedControl: string | undefined;

  constructor(p5: P5, manager: PlatformerManager) {
    super(p5, manager);
    this.setButton('left', Global.width / 2 - 60, Global.height / 2 - 100);
    this.setButton('right', Global.width / 2 - 60, Global.height / 2 - 60);
    this.setButton('jump', Global.width / 2 - 60, Global.height / 2 - 20);
    this.setButton('drop', Global.width / 2 - 60, Global.height / 2 + 20);
    this.setButton('pause', Global.width / 2 - 60, Global.height / 2 + 60);
    this.setButton('back', Global.width / 2 - 60, Global.height / 2 + 100);
  }

  mouseMoveListener(): void {
    this.updateButtons();
  }

  mouseClickListener(): void {
    if (this.isButtonSelected('left')) {
      this.selectedControl = 'lef';
    } else if (this.isButtonSelected('right')) {
      this.selectedControl = 'right';
    } else if (this.isButtonSelected('jump')) {
      this.selectedControl = 'jump';
    } else if (this.isButtonSelected('drop')) {
      this.selectedControl = 'drop';
    } else if (this.isButtonSelected('pause')) {
      this.selectedControl = 'pause';
    } else if (this.isButtonSelected('back')) {
      this.manager.setPage(new StartMenu(this.p5, this.manager));
    }
  }

  keyPressListener(): void {
    if (this.selectedControl) {
      this.manager.setKeyBinding(this.selectedControl, this.p5.key.toUpperCase());
    }
    this.selectedControl = undefined;
  }

  keyReleaseListener(): void { }

  update(): void { }

  draw(): void {
    this.p5.push();
    this.p5.background(24, 24, 24);
    this.p5.textSize(20);
    this.p5.fill(255, 255, 255);
    this.p5.push();
    this.p5.textSize(32);
    this.p5.text('Controls', Global.width / 2 - 64, 100);
    this.p5.pop();
    this.drawMoveRow('left', this.manager.getKeyBinding('left'), 0);
    this.drawMoveRow('right', this.manager.getKeyBinding('right'), 1);
    this.drawMoveRow('jump', this.manager.getKeyBinding('jump'), 2);
    this.drawMoveRow('drop', this.manager.getKeyBinding('drop'), 3);
    this.drawMoveRow('pause', this.manager.getKeyBinding('pause'), 4);
    this.drawButton('back');
  }

  drawMoveRow(control: string, key: string, row: number): void {
    this.drawButton(control);
    this.p5.push();
    if (this.selectedControl === control) {
      this.p5.fill(255, 255, 0);
    }
    this.p5.text(key, Global.width / 2 + 30, Global.height / 2 - 80 + 40 * row);
    this.p5.pop();
  }
}
