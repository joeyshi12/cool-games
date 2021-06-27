import {Component, Input} from '@angular/core';
import {SketchMetadata} from "../../sketches/sketch";

@Component({
  selector: 'sketch-details',
  templateUrl: './sketch-details.component.html',
  styleUrls: ['./sketch-details.component.css']
})
export class SketchDetailsComponent {
  @Input() sketchMetadata?: SketchMetadata

  public get imagePath(): string {
      if (this.sketchMetadata) {
          const name = this.sketchMetadata.sketchName;
          return "/assets/" + name + "/" + name + ".png";
      } else {
          return "";
      }
  }
}
