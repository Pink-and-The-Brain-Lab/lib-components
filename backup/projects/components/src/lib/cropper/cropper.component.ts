import { Component, Inject, ViewChild } from '@angular/core';
import { ImageCroppedEvent, ImageCropperComponent } from 'ngx-image-cropper';
import { IMAGE_DATA } from '../modal/interfaces/image-data.const';
import { MODAL_SERVICE_DATA } from '../modal/interfaces/modal-service-data.const';

@Component({
  selector: 'cdk-cropper',
  templateUrl: './cropper.component.html',
  styleUrls: ['./cropper.component.scss']
})
export class CropperComponent {

  @ViewChild(ImageCropperComponent) imageCropper: ImageCropperComponent = {} as ImageCropperComponent;
  imageCroppedFile = '';
  imageRotation = 0;
  imageFlipH = false;
  imageZoom = 1;
  
  constructor (
    @Inject(IMAGE_DATA) public imageFile: string,
    @Inject(MODAL_SERVICE_DATA) public modalService: any,
  ) {
    this.imageCroppedFile = imageFile;
  }

  imageCropped(event: ImageCroppedEvent) {
    this.imageCroppedFile = event.objectUrl || this.imageFile;
    this.modalService.getComponentResultData(this.imageCroppedFile)
  }

  selectedRange(event: string) {
    const baseDeg = 45;
    const maxDeg = 180;
    const parsedRange = parseInt(event);
    const totalToRotate = (parsedRange * maxDeg) / 100 / baseDeg;
    this.imageRotation = totalToRotate;
  }

  rotateImage() {
    this.imageRotation++;
  }

  invertImage() {
    this.imageFlipH = !this.imageFlipH;
  }

  zoomOutImage() {
    if (this.imageZoom <= 1) return;
    this.imageZoom--;
  }

  zoomInImage() {
    if (this.imageZoom >= 10) return;
    this.imageZoom++;
  }
}
