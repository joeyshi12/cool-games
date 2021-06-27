import * as P5 from 'p5';

export class Animator {
  private animIdx: number;
  private readonly imageSeq: Array<P5.Image>;

  constructor(idxSeq: Array<[number, number]>, spriteSheet: P5.Image,
              paddingLeft: number = 0, paddingRight: number = 0, paddingTop: number = 0, paddingBottom: number = 0) {
    this.animIdx = 0;
    this.imageSeq = this.parseImages(idxSeq, spriteSheet, paddingLeft, paddingRight, paddingTop, paddingBottom);
  }

  parseImages(idxSeq: Array<[number, number]>, spriteSheet: P5.Image,
              paddingLeft: number, paddingRight: number, paddingTop: number, paddingBottom: number): Array<P5.Image> {
    const imageSeq = [];
    for (const [i, j] of idxSeq) {
      imageSeq.push(spriteSheet.get(j * 16 + paddingLeft, i * 16 + paddingTop, 16 - paddingRight, 16 - paddingBottom));
    }
    return imageSeq;
  }

  getCurrentImage(): P5.Image {
    return this.imageSeq[this.animIdx];
  }

  getAnimIdx(): number {
    return this.animIdx;
  }

  setAnimIdx(idx: number): void {
    this.animIdx = idx;
  }
}
