import { SimpleChanges } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PopoverModule } from '@app/_cdk/directives/popover/popover.module';
import { ICountry } from '../phone-number/model/country.interface';
import { CustomSelectComponent } from './custom-select.component';

const mockOptions: ICountry[] = [{
  name: 'Brasil',
  code: '55',
}, {
  name: 'USA',
  code: '1',
}]

describe('CustomSelectComponent', () => {
  let component: CustomSelectComponent<ICountry[]>;
  let fixture: ComponentFixture<CustomSelectComponent<ICountry[]>>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomSelectComponent ],
      imports: [
        PopoverModule,
        FormsModule,
        ReactiveFormsModule,
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent<CustomSelectComponent<ICountry[]>>(CustomSelectComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call filter options on application initiation', () => {
    const spy = jest.spyOn(component, 'filterOptions');
    component.ngOnInit();
    expect(spy).toBeCalled();
  });

  it('should call filter options on application inputs changes', () => {
    const spy = jest.spyOn(component, 'filterOptions');
    const simpleChangesMock: SimpleChanges = {
      selectedOption: {
        firstChange: false,
        isFirstChange: () => false,
        currentValue: mockOptions[0],
        previousValue: null
      }
    }
    component.ngOnChanges(simpleChangesMock);
    expect(spy).toBeCalled();
  });

  it('should filter options and input select option', () => {
    component.selectedOption = mockOptions[0];
    component.modelProperty = 'name';
    component.filterOptions();
    const inputValue = component.formGroup.controls.input.value;
    expect(inputValue).toEqual(mockOptions[0].name);
  });

  it('should close popover', () => {
    component.closePopover();
    expect(component.showOptions).toBeFalsy();
  });

  it('should get option', () => {
    const spy = jest.spyOn(component.valueChanges, 'emit');
    component.modelProperty = 'name';
    component.getOption(mockOptions[0]);
    const inputValue = component.formGroup.controls.input.value;
    expect(spy).toBeCalledWith(mockOptions[0]);
    expect(component.selectedOption).toEqual(mockOptions[0]);
    expect(inputValue).toEqual(mockOptions[0].name);
    expect(component.showOptions).toBeFalsy();
  });
});
