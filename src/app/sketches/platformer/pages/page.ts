import * as P5 from 'p5';
import {PlatformerManager} from '../platformer-manager';

class Button {
  private p5: P5;
  private readonly text: string;
  private readonly x: number;
  private readonly y: number;
  private readonly width: number;
  private readonly height: number;
  private isFocused: boolean;

  constructor(p5: P5, text: string, x: number, y: number) {
    this.p5 = p5;
    this.text = text;
    this.x = x;
    this.y = y;
    this.width = 10 * text.length;
    this.height = 20;
    this.isFocused = false;
  }

  updateIsFocused(): void {
    if (this.x < this.p5.mouseX && this.p5.mouseX < this.x + this.width) {
      if (this.y < this.p5.mouseY && this.p5.mouseY < this.y + this.height) {
        this.isFocused = true;
        return;
      }
    }
    this.isFocused = false;
  }

  draw(): void {
    this.p5.push();
    if (this.isFocused) {
      this.p5.textSize(22);
      this.p5.fill(255);
      this.p5.text(this.text, this.x - this.text.length / 2, this.y + this.height);
    } else {
      this.p5.textSize(20);
      this.p5.fill(255);
      this.p5.text(this.text, this.x, this.y + this.height);
    }
    this.p5.pop();
  }

  getIsFocused(): boolean {
    return this.isFocused;
  }
}

export abstract class Page {
  protected p5: P5;
  protected manager: PlatformerManager;
  protected readonly buttonMap: Map<string, Button>;

  protected constructor(p5: P5, manager: PlatformerManager) {
    this.p5 = p5;
    this.manager = manager;
    this.buttonMap = new Map<string, Button>();
  }

  abstract mouseMoveListener(): void;

  abstract mouseClickListener(): void;

  abstract keyPressListener(): void;

  abstract keyReleaseListener(): void;

  abstract draw(): void;

  abstract update(): void;

  isButtonSelected(id: string): boolean {
    if (!this.buttonMap.has(id)) {
      return false;
    }
    const button = this.buttonMap.get(id);
    if (!button) {
      return false;
    }
    if (button.getIsFocused()) {
      this.manager.playSound('click');
      return true;
    } else {
      return false;
    }
  }

  updateButtons(): void {
    for (const button of this.buttonMap.values()) {
      button.updateIsFocused();
    }
  }

  drawButton(id: string): void {
    if (!this.buttonMap.has(id)) {
      return;
    }
    const button = this.buttonMap.get(id);
    if (!button) {
      return;
    }
    return button.draw();
  }

  setButton(text: string, x: number, y: number): void {
    this.buttonMap.set(text, new Button(this.p5, text, x, y));
  }
}
