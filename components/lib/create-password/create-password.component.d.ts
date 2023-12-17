import { EventEmitter, OnDestroy, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidatorFn } from '@angular/forms';
import { InputType } from './models/input-type';
import { IPasswordEvent } from './models/password-event';
import * as i0 from "@angular/core";
export declare class CreatePasswordComponent implements OnInit, OnDestroy {
    private destroy$;
    passwordValidation: EventEmitter<boolean>;
    submitEvent: EventEmitter<void>;
    passwordEvent: EventEmitter<IPasswordEvent>;
    inputConfig: InputType[];
    isPasswordValid: boolean;
    private readonly translateService;
    passwordsAreEquals: () => ValidatorFn;
    form: FormGroup<{
        password: FormControl<string | null>;
        confirmPassword: FormControl<string | null>;
    }>;
    ngOnInit(): void;
    ngOnDestroy(): void;
    validatePassword(value: boolean): void;
    get password(): AbstractControl | null;
    get confirmPassword(): AbstractControl | null;
    get _passwordValidation(): boolean;
    togglePasswordVisibility(index: number, type: InputType): void;
    submit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<CreatePasswordComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CreatePasswordComponent, "cdk-create-password", never, {}, { "passwordValidation": "passwordValidation"; "submitEvent": "submitEvent"; "passwordEvent": "passwordEvent"; }, never, never, false, never>;
}
