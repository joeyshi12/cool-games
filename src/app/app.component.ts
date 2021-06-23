import {Component} from '@angular/core';
import {SketchName, availableSketchMetadataList, SketchMetadata} from "./sketches/sketch";
import {Messages} from "./messages";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public messages: Messages;
  public sketchMetadataList: SketchMetadata[];

  constructor() {
    this.messages = new Messages;
    this.sketchMetadataList = availableSketchMetadataList;
  }

  getSketchLink(name: SketchName) {
    return this.messages.sketch + "/" + name;
  }
}
