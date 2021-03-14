import { Component, OnInit } from '@angular/core';
import {GameInfo} from './game-info';
import {GameInfoList} from './game-info';

@Component({
  selector: 'app-selection',
  templateUrl: './selection.component.html',
  styleUrls: ['./selection.component.css']
})
export class SelectionComponent implements OnInit {
  games: GameInfo[] | undefined;

  constructor() { }

  ngOnInit(): void {
    this.games = GameInfoList;
  }

}
