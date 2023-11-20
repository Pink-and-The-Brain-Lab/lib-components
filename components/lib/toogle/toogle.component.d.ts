import { EventEmitter } from '@angular/core';
import * as i0 from "@angular/core";
export declare class ToogleComponent {
    toogleControl: boolean;
    disabled: boolean;
    toogleEvent: EventEmitter<boolean>;
    toogle(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ToogleComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ToogleComponent, "cdk-toogle", never, { "toogleControl": "toogleControl"; "disabled": "disabled"; }, { "toogleEvent": "toogleEvent"; }, never, never, false, never>;
}
