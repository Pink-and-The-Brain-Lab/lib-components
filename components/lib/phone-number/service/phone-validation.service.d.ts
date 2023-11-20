import { PhoneNumberFormat, PhoneNumberUtil } from 'google-libphonenumber';
import { ICountry } from '../model/country.interface';
import { IPhoneValidation } from '../model/phone-validation.inteface';
import * as i0 from "@angular/core";
export declare class PhoneValidationService {
    phoneUtil: PhoneNumberUtil;
    PNF: typeof PhoneNumberFormat;
    constructor();
    filterCountryCode(phoneNumber: string): ICountry[];
    validateAndFormat(phoneNumber: string, countryCode: string, dialCode: string): IPhoneValidation;
    static ɵfac: i0.ɵɵFactoryDeclaration<PhoneValidationService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<PhoneValidationService>;
}
