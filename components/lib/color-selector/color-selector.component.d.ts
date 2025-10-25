import { EventEmitter, OnInit } from '@angular/core';
import * as i0 from "@angular/core";
export declare class ColorSelectorComponent implements OnInit {
    colorChanged: EventEmitter<string>;
    selectedColor: string;
    options1: string[];
    options2: string[];
    ngOnInit(): void;
    selectColor(color: string): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ColorSelectorComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ColorSelectorComponent, "cdk-color-selector", never, {}, { "colorChanged": "colorChanged"; }, never, never, false, never>;
}
