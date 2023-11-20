import { AfterViewInit, ElementRef, EventEmitter, OnDestroy, OnInit, QueryList } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import * as i0 from "@angular/core";
export declare class CodeValidationComponent implements OnInit, OnDestroy, AfterViewInit {
    inputs: QueryList<ElementRef<any>>;
    isLoading: boolean;
    validate: EventEmitter<string>;
    private destroy$;
    private focusedInput;
    formGroup: FormGroup<{
        _0: FormControl<string | null>;
        _1: FormControl<string | null>;
        _2: FormControl<string | null>;
        _3: FormControl<string | null>;
        _4: FormControl<string | null>;
        _5: FormControl<string | null>;
    }>;
    constructor();
    ngOnInit(): void;
    ngOnDestroy(): void;
    ngAfterViewInit(): void;
    private setInputFocus;
    setFocusedElement(index: number): void;
    private backToPreviousInput;
    onKeyDownHandler(event: KeyboardEvent): void;
    onPaste(event: ClipboardEvent): void;
    private inputPastedCode;
    validateCode(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<CodeValidationComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CodeValidationComponent, "cdk-code-validation", never, { "isLoading": "isLoading"; }, { "validate": "validate"; }, never, never, false, never>;
}
