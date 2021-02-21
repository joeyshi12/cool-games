import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import * as p5 from 'p5';
import {sketches} from './sketches/sketches';

type GameID = 'platformer' | 'pong' | 'snake' | 'cursed_pong';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
  id: GameID = 'platformer';

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params.id;
    const canvas = new p5(sketches[this.id]);
  }

}
