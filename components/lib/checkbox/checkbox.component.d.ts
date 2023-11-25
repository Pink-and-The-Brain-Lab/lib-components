import { EventEmitter } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import * as i0 from "@angular/core";
export declare class CheckboxComponent {
    label: string;
    value: boolean;
    change: EventEmitter<boolean>;
    id: number;
    form: FormGroup<{
        input: FormControl<boolean | null>;
    }>;
    get input(): boolean;
    changeValue(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<CheckboxComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CheckboxComponent, "cdk-checkbox", never, { "label": "label"; "value": "value"; }, { "change": "change"; }, never, never, false, never>;
}
