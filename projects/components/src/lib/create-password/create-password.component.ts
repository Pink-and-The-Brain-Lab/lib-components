import {
  Component,
  EventEmitter,
  OnDestroy,
  OnInit,
  Output,
  inject,
} from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { Subject, takeUntil } from 'rxjs';
import { InputType } from './models/input-type';
import { IPasswordEvent } from './models/password-event';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'cdk-create-password',
  templateUrl: './create-password.component.html',
  styleUrls: ['./create-password.component.scss'],
})
export class CreatePasswordComponent implements OnInit, OnDestroy {
  private destroy$ = new Subject<boolean>();
  @Output() passwordValidation = new EventEmitter<boolean>();
  @Output() submitEvent = new EventEmitter<void>();
  @Output() passwordEvent = new EventEmitter<IPasswordEvent>();
  inputConfig: InputType[] = ['password', 'password'];
  isPasswordValid = false;

  passwordsAreEquals = (): ValidatorFn => {
    return (): ValidationErrors | null => {
      return this.password?.value === this.confirmPassword?.value
        ? null
        : { passwordsDiferent: true };
    };
  };

  form = new FormGroup({
    password: new FormControl('', [Validators.required]),
    confirmPassword: new FormControl('', [
      Validators.required,
      this.passwordsAreEquals(),
    ]),
  });

  ngOnInit(): void {
    this.watchInputValuesChanges();
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }

  private watchInputValuesChanges() {
    this.form.valueChanges.pipe(takeUntil(this.destroy$)).subscribe(() => {
      this.passwordValidation.emit(this._passwordValidation);
      if (!this._passwordValidation) return;
      this.passwordEvent.emit({
        password: this.password?.value,
        confirmPassword: this.confirmPassword?.value,
      });
    });
  }

  validatePassword(value: boolean) {
    this.isPasswordValid = value;
  }

  get password(): AbstractControl | null {
    return this.form?.get('password');
  }

  get confirmPassword(): AbstractControl | null {
    return this.form?.get('confirmPassword');
  }

  get _passwordValidation(): boolean {
    const arePassValid =
      !!this.password?.valid && !!this.confirmPassword?.valid;
    const arePassEquals = this.password?.value === this.confirmPassword?.value;
    return this.isPasswordValid && arePassValid && arePassEquals;
  }

  togglePasswordVisibility(index: number, type: InputType) {
    this.inputConfig[index] = type;
  }

  submit() {
    if (!this._passwordValidation) return;
    this.submitEvent.emit();
  }
}
