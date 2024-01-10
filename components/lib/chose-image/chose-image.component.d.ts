import { ElementRef, EventEmitter } from '@angular/core';
import * as i0 from "@angular/core";
export declare class ChoseImageComponent {
    buttonText: string;
    aditionalText: string;
    imageFile: EventEmitter<string>;
    inputFile: ElementRef;
    private readonly fileConversor;
    selectFile(): void;
    getFile(event: Event): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ChoseImageComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ChoseImageComponent, "cdk-chose-image", never, { "buttonText": "buttonText"; "aditionalText": "aditionalText"; }, { "imageFile": "imageFile"; }, never, never, false, never>;
}
