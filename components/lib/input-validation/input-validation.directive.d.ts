import { ElementRef, OnDestroy, OnInit, Renderer2 } from '@angular/core';
import { FormControlName } from '@angular/forms';
import * as i0 from "@angular/core";
export declare class InputValidationDirective implements OnInit, OnDestroy {
    private formControl;
    private element;
    private renderer;
    private destroy$;
    private readonly responseMap;
    constructor(formControl: FormControlName, element: ElementRef, renderer: Renderer2);
    ngOnInit(): void;
    setErrorClass(element: ElementRef, renderer: Renderer2): void;
    setSuccessClass(element: ElementRef, renderer: Renderer2): void;
    hasValue(element: ElementRef, renderer: Renderer2): void;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<InputValidationDirective, [{ optional: true; host: true; }, null, null]>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<InputValidationDirective, "[cdkInputValidation]", never, {}, {}, never, never, false, never>;
}
