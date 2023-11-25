import { EventEmitter } from '@angular/core';
import * as i0 from "@angular/core";
export declare class RangeComponent {
    min: number;
    max: number;
    step: number;
    selectedRange: EventEmitter<string>;
    change(event: Event): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<RangeComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<RangeComponent, "cdk-range", never, { "min": "min"; "max": "max"; "step": "step"; }, { "selectedRange": "selectedRange"; }, never, never, false, never>;
}
