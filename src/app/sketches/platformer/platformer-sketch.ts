import * as P5 from 'p5';
import 'p5/lib/addons/p5.sound';
import {Page} from './pages/page';
import {Global} from './util/global';
import {StartMenu} from './pages/start-menu';
import {Sketch, sketchHolderId} from "../sketch";

export class PlatformerSketch implements Sketch {
  p5: P5;
  private spriteSheet!: P5.Image;
  private page!: Page;
  private soundMap: Map<string, P5.SoundFile> | undefined;
  private controlMap: Map<string, string>;
  private fontFace!: P5.Font;

  constructor(p5: P5) {
    this.p5 = p5;
    this.controlMap = new Map<string, string>([
      ['left', 'A'],
      ['right', 'D'],
      ['jump', 'W'],
      ['drop', 'S'],
      ['pause', 'ESCAPE']
    ]);
  }

  preload(): void {
    this.fontFace = this.p5.loadFont('assets/platformer/inconsolata.otf');
    this.spriteSheet = this.p5.loadImage('assets/platformer/spritesheet.png');
    this.soundMap = new Map<string, P5.SoundFile>([
      ['click', new P5.SoundFile('assets/platformer/click.mp3')],
      ['pause', new P5.SoundFile('assets/platformer/pause.mp3')],
      ['jump', new P5.SoundFile('assets/platformer/jump.mp3')],
      ['land', new P5.SoundFile('assets/platformer/land.mp3')]
    ]);
  }

  setup(): void {
    const canvas = this.p5.createCanvas(Global.width, Global.height);
    canvas.parent(sketchHolderId);
    this.p5.textFont(this.fontFace);
    this.p5.frameRate(60);
    this.page = new StartMenu(this.p5, this);
  }

  mouseMoveListener(): void {
    this.page.mouseMoveListener();
  }

  mouseClickListener(): void {
    this.page.mouseClickListener();
  }

  keyPressListener(): void {
    this.page.keyPressListener();
  }

  keyReleaseListener(): void {
    this.page.keyReleaseListener();
  }

  draw(): void {
    this.page.draw();
  }

  update(): void {
    this.page.update();
  }

  playSound(id: string): void {
    if (!this.soundMap) {
      return;
    }
    const sound = this.soundMap.get(id);
    if (!sound) {
      return;
    }
    sound.play();
  }

  getPage(): Page {
    return this.page;
  }

  getKeyBinding(control: string): string {
    const key = this.controlMap.get(control);
    if (!key) {
      throw new Error('no such control exists');
    }
    return key;
  }

  getSpriteSheet(): P5.Image {
    return this.spriteSheet;
  }

  setPage(page: Page): void {
    this.page = page;
  }

  setKeyBinding(control: string, newKey: string): void {
    this.controlMap.set(control, newKey);
  }
}
