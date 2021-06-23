import {Ghost} from '../entities/ghost';

export class MapData {
  private readonly tiles: Array<number>;
  private readonly numRows: number;
  private readonly numCols: number;
  private initialGhostPositions: Array<[number, number]>;
  private leftMap: null | MapData;
  private rightMap: null | MapData;

  constructor(tiles: Array<number>, numRows: number, numCols: number, initialGhostPositions: Array<[number, number]>,
              leftMap: null | MapData = null, rightMap: null | MapData = null) {
    this.tiles = tiles;
    this.numRows = numRows;
    this.numCols = numCols;
    this.initialGhostPositions = initialGhostPositions;
    this.leftMap = leftMap;
    this.rightMap = rightMap;
  }

  isIdxWithinBounds(i: number, j: number): boolean {
    return 0 <= i && i < this.numRows && 0 <= j && j < this.numCols;
  }

  getTile(i: number, j: number): number {
    if (!this.isIdxWithinBounds(i, j)) {
      throw new Error('index out of bounds');
    } else {
      return this.tiles[i * this.numCols + j];
    }
  }

  getNumRows(): number {
    return this.numRows;
  }

  getNumCols(): number {
    return this.numCols;
  }

  getInitialGhostPositions(): Array<[number, number]> {
    return this.initialGhostPositions;
  }

  getLeftMap(): null | MapData {
    return this.leftMap;
  }

  getRightMap(): null | MapData {
    return this.rightMap;
  }

  setLeftMap(map: MapData): void {
    this.leftMap = map;
    map.rightMap = this;
  }

  setRightMap(map: MapData): void {
    this.rightMap = map;
    map.leftMap = this;
  }
}
