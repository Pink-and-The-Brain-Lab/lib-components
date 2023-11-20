import { ControlValueAccessor } from '@angular/forms';
import * as i0 from "@angular/core";
export declare class RadioButtonComponent<T> implements ControlValueAccessor {
    disabled: boolean;
    value: T;
    name: string;
    position: 'start' | 'end';
    model: T;
    id: string;
    onChange: Function;
    onTouched: Function;
    registerOnChange(fn: Function): void;
    registerOnTouched(fn: Function): void;
    writeValue(obj: any): void;
    click(e: MouseEvent): void;
    changed(value: T): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<RadioButtonComponent<any>, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<RadioButtonComponent<any>, "cdk-radio", never, { "disabled": "disabled"; "value": "value"; "name": "name"; "position": "position"; }, {}, never, ["*"], false, never>;
}
