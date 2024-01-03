import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import { countriesCode } from './data/countries-codes';
import { ICountry } from './model/country.interface';
import { Country } from './model/country.model';
import { PhoneValidationService } from './service/phone-validation.service';

@Component({
  selector: 'cdk-phone-number',
  templateUrl: './phone-number.component.html',
  styleUrls: ['./phone-number.component.scss']
})
export class PhoneNumberComponent implements OnInit, OnDestroy {

  @Input() labelPhoneNumberValidation = 'Phone number is invalid';
  @Input() phoneValidated = false;
  @Input() phoneAvailable = false;
  @Input() isLoading = false;
  @Output() validationPhoneEvent = new EventEmitter<boolean>();

  isValidPhoneNumber = (): ValidatorFn => {
    return (control: AbstractControl): ValidationErrors | null => {
      this.getCountryByPhoneNumber(control.value);
      const validation = this.phoneValidationService.validateAndFormat(control.value, this.selectedOption.code, this.selectedOption.dial_code);
      if (validation.masked === control.value) return null;
      this.labelPhoneNumberValidation = 'Phone number is invalid';
      this.phoneValidated = false;
      this.validationPhoneEvent.emit(false);
      
      if (this.verifiedPhoneNumber.length && control.value === this.verifiedPhoneNumber.replace(/\s|-/gi, '')) {
        this.validationPhoneEvent.emit(true);
        this.phoneValidated = true;
        return null;
      }

      if (validation.isValid) {
        control.setValue(validation.masked || control.value);
        return null;
      }
    
      return { isInvalidPhoneNumber: true };
    }
  }

  options: ICountry[] = [];
  selectedOption = new Country();
  verifiedPhoneNumber = '';
  formGroup = new FormGroup({
    phoneNumber: new FormControl('', [Validators.required, this.isValidPhoneNumber()])
  });
  private destroy$ = new Subject<void>();

  constructor(
    private phoneValidationService: PhoneValidationService
  ) {}

  ngOnInit(): void {
    this.options = countriesCode.map(country => new Country(country.name, country.dial_code, country.code, country.latitude, country.longitude));
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.unsubscribe();
  }

  getSelectedCountry(country: ICountry): void {
    this.selectedOption = new Country(country.name, country.dial_code, country.code, country.latitude, country.longitude);
    this.formGroup.patchValue({
      phoneNumber: country.dial_code,
    });
  }

  getCountryByPhoneNumber(phoneNumber: string) {
    const countries = this.phoneValidationService.filterCountryCode(phoneNumber);
    if(countries.length) this.checkIfHasEqualsDialCode(countries);
  }

  checkIfHasEqualsDialCode(countries: ICountry[]) {
    const hasEqualsDialCode = countries.find(country => country.dial_code === this.selectedOption.dial_code && country.name === this.selectedOption.name);
    if (!hasEqualsDialCode)
    this.selectedOption = new Country(countries[0].name, countries[0].dial_code, countries[0].code, countries[0].latitude, countries[0].longitude);
  }

  get phoneNumber(): FormControl {
    return this.formGroup.controls.phoneNumber;
  }

}
