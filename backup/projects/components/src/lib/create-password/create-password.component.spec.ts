import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CreatePasswordComponent } from './create-password.component';
import { InputValidationModule } from '../input-validation/input-validation.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PasswordValidationModule } from '../password-validation/password-validation.module';
import { TranslateModule, TranslatePipe } from '@ngx-translate/core';

describe('CreatePasswordComponent', () => {
  let component: CreatePasswordComponent;
  let fixture: ComponentFixture<CreatePasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreatePasswordComponent],
      imports: [
        InputValidationModule,
        FormsModule,
        ReactiveFormsModule,
        PasswordValidationModule,
        TranslateModule.forRoot(),
      ],
      providers: [TranslatePipe],
    }).compileComponents();

    fixture = TestBed.createComponent(CreatePasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit password event', () => {
    const spy = spyOn(component.passwordEvent, 'emit');
    component.validatePassword(true);
    component.form.patchValue({
      password: 'abcd1234',
      confirmPassword: 'abcd1234',
    });
    component['watchInputValuesChanges']();
    expect(spy).toHaveBeenCalled();
  });

  it('should return passwords is valid', () => {
    component.form.patchValue({
      password: 'abcd1234',
      confirmPassword: 'abcd1234',
    });
    component.validatePassword(true);
    expect(component._passwordValidation).toBeTrue();
  });

  it('should return passwords is not valid', () => {
    component.form.patchValue({
      password: 'abcd1234',
      confirmPassword: 'abcd1234',
    });
    component.validatePassword(false);
    expect(component._passwordValidation).toBeFalse();
  });

  it('should toggle input visibility', () => {
    component.togglePasswordVisibility(0, 'text');
    expect(component.inputConfig[0]).toBe('text');
  });

  it('should submit password', () => {
    const spy = spyOn(component.submitEvent, 'emit');
    component.form.patchValue({
      password: 'abcd1234',
      confirmPassword: 'abcd1234',
    });
    component.validatePassword(true);
    component.submit();
    expect(spy).toHaveBeenCalled();
  });

  it('should not submit password', () => {
    const spy = spyOn(component.submitEvent, 'emit');
    component.form.patchValue({
      password: 'abcd1234',
      confirmPassword: 'abcd1234',
    });
    component.validatePassword(false);
    component.submit();
    expect(spy).not.toHaveBeenCalled();
  });

  it('should get an error when passwords are diferent', () => {
    component.form.patchValue({
      password: 'abcd1234',
      confirmPassword: '1234abcd',
    });
    expect(component._passwordValidation).toBeFalse();
  });
});
