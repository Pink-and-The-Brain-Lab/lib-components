import { Component, DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { InputValidationDirective } from './input-validation.directive';
import { InputValidationModule } from './input-validation.module';

@Component({
  template: `
    <form [formGroup]="formGroup">
      <input cdkInputValidation type="email" formControlName="control" />
    </form>
  `
})
class HostComponent {
  formGroup = new FormGroup({
    control: new FormControl('', [Validators.required, Validators.email])
  });
}

describe('InputValidationDirective', () => {
  let component: HostComponent;
  let fixture: ComponentFixture<HostComponent>;
  let directiveEl: DebugElement;
  let directiveInstance: InputValidationDirective;
  let inputElement: DebugElement;
  
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        InputValidationDirective,
        HostComponent
      ],
      imports: [
        FormsModule,
        ReactiveFormsModule,
        InputValidationModule,
      ],
    });

    fixture = TestBed.createComponent(HostComponent);
    component = fixture.componentInstance;
    directiveEl = fixture.debugElement.query(By.directive(InputValidationDirective));
    directiveInstance = directiveEl.injector.get(InputValidationDirective);
    inputElement = fixture.debugElement.query(By.css('input'));
    fixture.detectChanges();
  });

  it('should create an instance', () => {
    expect(directiveInstance).toBeTruthy();
    expect(component).toBeTruthy();
  });

  it('should call setErrorClass', () => {
    component.formGroup.get('control')?.setValue('wrongEmail');
    const hasInvalidClass = inputElement.nativeElement.className.split(' ').includes('invalid');
    const hasSuccessClass = inputElement.nativeElement.className.split(' ').includes('success');
    expect(hasInvalidClass).toBeTruthy();
    expect(hasSuccessClass).toBeFalsy();
  });

  it('should call setSuccessClass', () => {
    component.formGroup.get('control')?.setValue('email@mail.com');
    const hasInvalidClass = inputElement.nativeElement.className.split(' ').includes('invalid');
    const hasSuccessClass = inputElement.nativeElement.className.split(' ').includes('success');
    expect(hasSuccessClass).toBeTruthy();
    expect(hasInvalidClass).toBeFalsy();
  });

  it('should add not-empty class', () => {
    component.formGroup.get('control')?.setValue('email@mail.com');
    const hasClass = inputElement.nativeElement.className.split(' ').includes('not-empty');
    expect(hasClass).toBeTruthy();
  });

  it('should remove not-empty class', () => {
    component.formGroup.get('control')?.setValue('');
    const hasClass = inputElement.nativeElement.className.split(' ').includes('not-empty');
    expect(hasClass).toBeFalsy();
  });
});
