import { EventEmitter, OnChanges, OnInit, SimpleChanges, TemplateRef } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import * as i0 from "@angular/core";
export declare class CustomSelectComponent<T> implements OnInit, OnChanges {
    options: T[];
    placeholder: string;
    modelProperty: string;
    label: string;
    selectedOption: any;
    isValid: boolean;
    hasLeftIcon: boolean;
    hasDivider: boolean;
    valueChanges: EventEmitter<T>;
    customTemplate: TemplateRef<any>;
    selectedTemplate: TemplateRef<any>;
    showOptions: boolean;
    formGroup: FormGroup<{
        input: FormControl<string | null>;
    }>;
    ngOnInit(): void;
    ngOnChanges({ selectedOption }: SimpleChanges): void;
    filterOptions(): void;
    closePopover: () => boolean;
    getOption(option: any): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<CustomSelectComponent<any>, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CustomSelectComponent<any>, "cdk-custom-select", never, { "options": { "alias": "options"; "required": false; }; "placeholder": { "alias": "placeholder"; "required": false; }; "modelProperty": { "alias": "modelProperty"; "required": false; }; "label": { "alias": "label"; "required": false; }; "selectedOption": { "alias": "selectedOption"; "required": false; }; "isValid": { "alias": "isValid"; "required": false; }; "hasLeftIcon": { "alias": "hasLeftIcon"; "required": false; }; "hasDivider": { "alias": "hasDivider"; "required": false; }; }, { "valueChanges": "valueChanges"; }, ["customTemplate", "selectedTemplate"], never, false, never>;
}
