import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { CustomSelectModule } from '../custom-select/custom-select.module';
import { SpinnerModule } from '../spinner/spinner.module';
import { PhoneNumberComponent } from './phone-number.component';
import { Country } from './model/country.model';
import { PhoneValidationService } from './service/phone-validation.service';
import { ICountry } from './model/country.interface';
import { InputValidationModule } from '../input-validation/input-validation.module';
import { LoadingButtonModule } from '../loading-button/loading-button.module';

const countryMock = new Country('Brasil', '+55', 'BR', 0, 0);
const mockCountryInterfaced: ICountry = {
  name: 'Brasil',
  dial_code: '+55',
  code: 'BR',
  latitude: 0,
  longitude: 0,
}

const mockPhoneValidationService = {
  validateAndFormat: () => ({
    isValid: true,
    masked: '+55 11 91234-5678'
  }),
  filterCountryCode: () => [mockCountryInterfaced]
}

describe('PhoneNumberComponent', () => {
  let component: PhoneNumberComponent;
  let fixture: ComponentFixture<PhoneNumberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhoneNumberComponent ],
      imports: [
        CustomSelectModule,
        FormsModule,
        ReactiveFormsModule,
        InputValidationModule,
        LoadingButtonModule,
        SpinnerModule,
        NoopAnimationsModule
      ],
      providers: [{
        provide: PhoneValidationService,
        useValue: mockPhoneValidationService
      }]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PhoneNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should validate when phone number already validated and number dont change', () => {
    component.selectedOption = countryMock;
    component.formGroup.controls.phoneNumber.patchValue('+55 11 91234-5678');
    const input = component.formGroup.controls.phoneNumber;
    expect(input.valid).toBeTruthy();
  });

  it('should validate when phone number already validated and the number changed', () => {
    const spy = spyOn(component.validatePhoneEvent, 'emit');
    component.verifiedPhoneNumber = '5511912345678';
    component.formGroup.controls.phoneNumber.patchValue('5511912345678');
    component.validatePhone();
    expect(spy).toHaveBeenCalledWith('5511912345678');
    expect(component.phoneValidated).toBeTruthy();
  });

  it('should validate new phone number', () => {
    component.verifiedPhoneNumber = '';
    component.formGroup.controls.phoneNumber.patchValue('5511912345678');
    const inputValue = component.formGroup.controls.phoneNumber.value;
    expect(inputValue).toEqual('+55 11 91234-5678');
  });

  it('should get selected country', () => {
    component.getSelectedCountry(mockCountryInterfaced);
    const inputValue = component.formGroup.controls.phoneNumber.value;
    expect(inputValue).toBe('+55 11 91234-5678');
  });

  it('should get country by phone number', () => {
    const spy = spyOn(component, 'checkIfHasEqualsDialCode');
    component.getCountryByPhoneNumber('+55 11 91234-5678');
    expect(spy).toHaveBeenCalledWith([mockCountryInterfaced]);
  });

  it('should check if equals dial code', () => {
    component.checkIfHasEqualsDialCode([mockCountryInterfaced]);
    expect(component.selectedOption.name).toBe(mockCountryInterfaced.name as any);
  });
});
