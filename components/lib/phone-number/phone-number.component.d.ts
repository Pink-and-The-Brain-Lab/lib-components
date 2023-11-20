import { EventEmitter, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, ValidatorFn } from '@angular/forms';
import { ICountry } from './model/country.interface';
import { Country } from './model/country.model';
import { PhoneValidationService } from './service/phone-validation.service';
import * as i0 from "@angular/core";
export declare class PhoneNumberComponent implements OnInit, OnDestroy {
    private phoneValidationService;
    validationPhoneEvent: EventEmitter<boolean>;
    isValidPhoneNumber: () => ValidatorFn;
    options: ICountry[];
    selectedOption: Country;
    phoneValidated: boolean;
    phoneAvailable: boolean;
    isLoading: boolean;
    verifiedPhoneNumber: string;
    labelPhoneNumberValidation: string;
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
    verifyPhoneNumber(): void;
    get phoneNumber(): FormControl;
    static ɵfac: i0.ɵɵFactoryDeclaration<PhoneNumberComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PhoneNumberComponent, "cdk-phone-number", never, {}, { "validationPhoneEvent": "validationPhoneEvent"; }, never, never, false, never>;
}
