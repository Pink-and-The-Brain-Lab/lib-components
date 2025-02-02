import { ElementRef, EventEmitter } from '@angular/core';
import { IImageUpload } from './models/image-upload.interface';
import * as i0 from "@angular/core";
export declare class ChoseImageComponent {
    buttonText: string;
    aditionalText: string;
    imageFile: EventEmitter<IImageUpload>;
    inputFile: ElementRef;
    private readonly fileConversor;
    selectFile(): void;
    getFile(event: Event): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ChoseImageComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ChoseImageComponent, "cdk-chose-image", never, { "buttonText": { "alias": "buttonText"; "required": false; }; "aditionalText": { "alias": "aditionalText"; "required": false; }; }, { "imageFile": "imageFile"; }, never, never, false, never>;
}
