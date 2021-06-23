import { Component } from '@angular/core';
import {SketchName, availableSketchMetadataList, SketchMetadata} from "./sketches/sketch";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public sketchMetadataList: SketchMetadata[];

  constructor() {
    this.sketchMetadataList = availableSketchMetadataList;
  }

  getSketchLink(name: SketchName) {
    return "game/" + name;
  }
}
