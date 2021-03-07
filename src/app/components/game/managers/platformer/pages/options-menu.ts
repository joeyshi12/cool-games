import {Page} from './page';
import {StartMenu} from './start-menu';
import * as P5 from 'p5';
import {Control, PlatformerManager, Sound} from '../platformer-manager';
import {Global} from '../util/global';

export class OptionsMenu extends Page {
  private selectedControl: string | undefined;

  constructor(p5: P5, manager: PlatformerManager) {
    super(p5, manager);
    this.setButton(Control.left, Global.width / 2 - 60, Global.height / 2 - 100);
    this.setButton(Control.right, Global.width / 2 - 60, Global.height / 2 - 60);
    this.setButton(Control.jump, Global.width / 2 - 60, Global.height / 2 - 20);
    this.setButton(Control.drop, Global.width / 2 - 60, Global.height / 2 + 20);
    this.setButton(Control.pause, Global.width / 2 - 60, Global.height / 2 + 60);
    this.setButton('back', Global.width / 2 - 60, Global.height / 2 + 100);
  }

  mouseMoveListener(): void {
    this.updateButtons();
  }

  mouseClickListener(): void {
    if (this.isButtonSelected(Control.left)) {
      this.selectedControl = Control.left;
    } else if (this.isButtonSelected(Control.right)) {
      this.selectedControl = Control.right;
    } else if (this.isButtonSelected(Control.jump)) {
      this.selectedControl = Control.jump;
    } else if (this.isButtonSelected(Control.drop)) {
      this.selectedControl = Control.drop;
    } else if (this.isButtonSelected(Control.pause)) {
      this.selectedControl = Control.pause;
    } else if (this.isButtonSelected('back')) {
      this.manager.setPage(new StartMenu(this.p5, this.manager));
    }
  }

  keyPressListener(): void {
    if (this.selectedControl) {
      this.manager.setKeyBinding(this.selectedControl as Control, this.p5.key.toUpperCase());
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
    this.drawMoveRow(Control.left, this.manager.getKeyBinding(Control.left), 0);
    this.drawMoveRow(Control.right, this.manager.getKeyBinding(Control.right), 1);
    this.drawMoveRow(Control.jump, this.manager.getKeyBinding(Control.jump), 2);
    this.drawMoveRow(Control.drop, this.manager.getKeyBinding(Control.drop), 3);
    this.drawMoveRow(Control.pause, this.manager.getKeyBinding(Control.pause), 4);
    this.drawButton('back');
  }

  drawMoveRow(control: Control, key: string, row: number): void {
    this.drawButton(control);
    this.p5.push();
    if (this.selectedControl === control) {
      this.p5.fill(255, 255, 0);
    }
    this.p5.text(key, Global.width / 2 + 30, Global.height / 2 - 80 + 40 * row);
    this.p5.pop();
  }
}
