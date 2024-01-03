import { TestBed } from '@angular/core/testing';
import { PhoneValidationService } from './phone-validation.service';

let mockPhoneNumberUtil = {
  parseAndKeepRawInput: () => {},
  isValidNumberForRegion: (value: boolean) => value || false,
  format: () => '+55 11 1234-5678',
}

describe('PhoneValidationService', () => {
  let service: PhoneValidationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PhoneValidationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get country by phone number', () => {
    const country = service.filterCountryCode('+55');
    expect(country[0].name).toBe('Brazil');
  });

  it('should return invalid phone number', () => {
    service.phoneUtil = mockPhoneNumberUtil as any;
    const isValid = service.validateAndFormat('123', '123', '123');
    expect(isValid.isValid).toBeFalsy();
  });
});
