import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {GameService} from './game.service';

@Component({
  selector: 'canvas',
  templateUrl: './canvas.component.html',
  styleUrls: ['./canvas.component.css']
})
export class CanvasComponent implements OnInit, OnDestroy {
  constructor(
    private gameService: GameService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.gameService.createCanvas(this.route.snapshot.params.id);
  }

  ngOnDestroy(): void {
    this.gameService.removeCanvas();
  }
}
