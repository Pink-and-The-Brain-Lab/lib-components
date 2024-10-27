import { Injectable } from '@angular/core';
import { PhoneNumberFormat, PhoneNumberUtil } from 'google-libphonenumber';
import { countriesCode } from '../data/countries-codes';
import { ICountry } from '../model/country.interface';
import { IPhoneValidation } from '../model/phone-validation.inteface';

@Injectable({
  providedIn: 'root'
})
export class PhoneValidationService {

  phoneUtil = PhoneNumberUtil.getInstance();
  PNF = PhoneNumberFormat;

  constructor() { }

  filterCountryCode(phoneNumber: string): ICountry[] {
    let country: ICountry[] = [];
    if(phoneNumber.length < 5)
    country = countriesCode.filter(country => country.dial_code === phoneNumber);
    return country;
  }

  validateAndFormat(phoneNumber: string, countryCode: string, dialCode: string): IPhoneValidation {
    const number = phoneNumber.split(dialCode).slice(-1).pop() || '';
    const rawNumber = this.phoneUtil.parseAndKeepRawInput(number, countryCode);
    const isValid = this.phoneUtil.isValidNumberForRegion(rawNumber, countryCode);
    if (!isValid) return { isValid, masked: phoneNumber };

    return {
      isValid,
      masked: this.phoneUtil.format(rawNumber, this.PNF.INTERNATIONAL)
    }
  }
}
