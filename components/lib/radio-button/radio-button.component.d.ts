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
    click(event: MouseEvent): void;
    changed(value: T): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<RadioButtonComponent<any>, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<RadioButtonComponent<any>, "cdk-radio", never, { "disabled": { "alias": "disabled"; "required": false; }; "value": { "alias": "value"; "required": false; }; "name": { "alias": "name"; "required": false; }; "position": { "alias": "position"; "required": false; }; }, {}, never, ["*"], false, never>;
}
