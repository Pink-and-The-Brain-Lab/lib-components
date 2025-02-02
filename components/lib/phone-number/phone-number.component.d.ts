import { EventEmitter, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, ValidatorFn } from '@angular/forms';
import { ICountry } from './model/country.interface';
import { Country } from './model/country.model';
import { PhoneValidationService } from './service/phone-validation.service';
import * as i0 from "@angular/core";
export declare class PhoneNumberComponent implements OnInit, OnDestroy {
    private phoneValidationService;
    labelPhoneNumberValidation: string;
    phoneValidated: boolean;
    phoneAvailable: boolean;
    isLoading: boolean;
    validatePhoneEvent: EventEmitter<string>;
    isValidPhoneNumber: () => ValidatorFn;
    options: ICountry[];
    selectedOption: Country;
    verifiedPhoneNumber: string;
    formGroup: FormGroup<{
        phoneNumber: FormControl<string | null>;
    }>;
    private destroy$;
    constructor(phoneValidationService: PhoneValidationService);
    ngOnInit(): void;
    ngOnDestroy(): void;
    getSelectedCountry(country: ICountry): void;
    getCountryByPhoneNumber(phoneNumber: string): void;
    checkIfHasEqualsDialCode(countries: ICountry[]): void;
    get phoneNumber(): FormControl;
    validatePhone(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<PhoneNumberComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PhoneNumberComponent, "cdk-phone-number", never, { "labelPhoneNumberValidation": { "alias": "labelPhoneNumberValidation"; "required": false; }; "phoneValidated": { "alias": "phoneValidated"; "required": false; }; "phoneAvailable": { "alias": "phoneAvailable"; "required": false; }; "isLoading": { "alias": "isLoading"; "required": false; }; }, { "validatePhoneEvent": "validatePhoneEvent"; }, never, never, false, never>;
}
