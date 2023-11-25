import { AfterViewInit, ElementRef, EventEmitter, Renderer2 } from '@angular/core';
import * as i0 from "@angular/core";
export declare class PasswordValidationDirective implements AfterViewInit {
    private element;
    private renderer;
    private totalCharacters;
    private number;
    private letter;
    private errorColor;
    private successColor;
    set password(value: string);
    isValid: EventEmitter<boolean>;
    constructor(element: ElementRef, renderer: Renderer2);
    ngAfterViewInit(): void;
    private validatePassword;
    private colorizeElements;
    static ɵfac: i0.ɵɵFactoryDeclaration<PasswordValidationDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<PasswordValidationDirective, "[cdkPasswordValidation]", never, { "password": "cdkPasswordValidation"; }, { "isValid": "isValid"; }, never, never, false, never>;
}
