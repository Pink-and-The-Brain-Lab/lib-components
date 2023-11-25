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
    static ɵcmp: i0.ɵɵComponentDeclaration<CustomSelectComponent<any>, "cdk-custom-select", never, { "options": "options"; "placeholder": "placeholder"; "modelProperty": "modelProperty"; "label": "label"; "selectedOption": "selectedOption"; "isValid": "isValid"; "hasLeftIcon": "hasLeftIcon"; "hasDivider": "hasDivider"; }, { "valueChanges": "valueChanges"; }, ["customTemplate", "selectedTemplate"], never, false, never>;
}
