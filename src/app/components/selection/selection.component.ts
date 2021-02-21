import { Component, OnInit } from '@angular/core';
import {Game} from '../../game';
import {GAMES} from '../../game-data';

@Component({
  selector: 'app-selection',
  templateUrl: './selection.component.html',
  styleUrls: ['./selection.component.css']
})
export class SelectionComponent implements OnInit {
  games: Game[] | undefined;

  constructor() { }

  ngOnInit(): void {
    this.games = GAMES;
  }

}
