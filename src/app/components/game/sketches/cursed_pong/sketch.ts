import * as p5 from 'p5';

export const cursedPongSketch = (s: p5) => {
  s.setup = () => {
    const canvas = s.createCanvas(650, 450);
    canvas.parent('sketch-holder');
    s.background(255, 0, 0);
  };

  s.keyPressed = () => {
  };

  s.keyReleased = () => {
  };

  s.draw = () => {
  };
};
