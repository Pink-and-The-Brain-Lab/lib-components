import { ImageCroppedEvent, ImageCropperComponent } from 'ngx-image-cropper';
import * as i0 from "@angular/core";
export declare class CropperComponent {
    imageFile: string;
    modalService: any;
    imageCropper: ImageCropperComponent;
    imageCroppedFile: string;
    imageRotation: number;
    imageFlipH: boolean;
    imageZoom: number;
    constructor(imageFile: string, modalService: any);
    imageCropped(event: ImageCroppedEvent): void;
    selectedRange(event: string): void;
    rotateImage(): void;
    invertImage(): void;
    zoomOutImage(): void;
    zoomInImage(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<CropperComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CropperComponent, "cdk-cropper", never, {}, {}, never, never, false, never>;
}
