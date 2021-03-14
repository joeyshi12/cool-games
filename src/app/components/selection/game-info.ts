export interface GameInfo {
  id: string;
  title: string;
  description: string;
}

export const GameInfoList: GameInfo[] = [
  { id: 'platformer', title: 'Platformer', description: 'A prototype for a side-scrolling platform game.' },
  { id: 'pong', title: 'Pong', description: 'The classic arcade Pong game' },
  { id: 'snake', title: 'Snake', description: 'The classic arcade snake game' }
];
