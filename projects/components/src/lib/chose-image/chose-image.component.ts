import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { convertoToBlobURL } from '../utils/convert-file';

@Component({
  selector: 'cdk-chose-image',
  templateUrl: './chose-image.component.html',
  styleUrls: ['./chose-image.component.scss']
})
export class ChoseImageComponent {

  @Input() buttonText = 'Choose Image';
  @Input() aditionalText = 'or choose a color below';
  @Output() imageFile = new EventEmitter<string>();
  @ViewChild('inputFile') inputFile: ElementRef = {} as ElementRef;

  selectFile() {
    this.inputFile.nativeElement.click();
  }

  getFile(event: Event) {
    const target = event.target as HTMLInputElement;
    if (target.files?.length) {
      const image = target.files[0];
      convertoToBlobURL(image).then(
        response => this.imageFile.emit(response as string)
      );
    }
  }

}
