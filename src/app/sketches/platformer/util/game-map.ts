import * as P5 from 'p5';
import {MapData} from './map-data';
import {Global} from './global';

export class GameMap {
  private p5: P5;
  private data: MapData;
  private readonly spriteSheet: P5.Image;

  constructor(p5: P5, data: MapData, spriteSheet: P5.Image) {
    this.p5 = p5;
    this.data = data;
    this.spriteSheet = spriteSheet;
  }

  draw(): void {
    for (let i = 0; i < this.data.getNumRows(); i++) {
      for (let j = 0; j < this.data.getNumCols(); j++) {
        this.drawTile(this.data.getTile(i, j), i, j);
      }
    }
  }

  drawTile(tile: number, i: number, j: number): void {
    const [x, y] = Global.camera.shift(j * Global.unitLength, i * Global.unitLength);
    const sx = (tile % 48) * 16 + 0.5;
    const sy = Math.floor(tile / 48) * 16 + 0.5;
    this.p5.image(this.spriteSheet, x, y, Global.unitLength, Global.unitLength, sx, sy, 15, 15);
  }

  respawnEnemies(): void {
    console.log('reviving enemies');
  }

  isSolidAt(i: number, j: number): boolean {
    if (!this.data.isIdxWithinBounds(i, j)) {
      return false;
    }
    return Global.solidSet.has(this.data.getTile(i, j));
  }

  isPlatformAt(i: number, j: number): boolean {
    if (!this.data.isIdxWithinBounds(i, j)) {
      return false;
    }
    return Global.platformSet.has(this.data.getTile(i, j));
  }

  getData(): MapData {
    return this.data;
  }

  setDataToLeftMap(): void {
    const mapData = this.data.getLeftMap();
    if (mapData == null) {
      throw new Error('Left map data does not exist');
    }
    this.data = mapData;
  }

  setDataToRightMap(): void {
    const mapData = this.data.getRightMap();
    if (mapData == null) {
      throw new Error('Right map data does not exist');
    }
    this.data = mapData;
  }
}
