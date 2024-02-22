import { Component, ElementRef, EventEmitter, Input, Output, ViewChild, inject } from '@angular/core';
import { FileConversor } from '../utils/convert-file';
import { IImageUpload } from './models/image-upload.interface';

@Component({
  selector: 'cdk-chose-image',
  templateUrl: './chose-image.component.html',
  styleUrls: ['./chose-image.component.scss']
})
export class ChoseImageComponent {

  @Input() buttonText = 'Choose Image';
  @Input() aditionalText = 'or choose a color below';
  @Output() imageFile = new EventEmitter<IImageUpload>();
  @ViewChild('inputFile') inputFile: ElementRef = {} as ElementRef;

  private readonly fileConversor = inject(FileConversor);

  selectFile() {
    this.inputFile.nativeElement.click();
  }

  getFile(event: Event) {
    const target = event.target as HTMLInputElement;
    if (target.files?.length) {
      const image = target.files[0];
      this.fileConversor.convertoToBlobURL(image).then(
        response => this.imageFile.emit({
          file: image,
          blobUrl: response as string
        })
      );
    }
  }

}
