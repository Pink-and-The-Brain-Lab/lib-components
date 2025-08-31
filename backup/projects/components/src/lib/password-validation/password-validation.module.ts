import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PasswordValidationDirective } from './password-validation.directive';

@NgModule({
  declarations: [
    PasswordValidationDirective
  ],
  exports: [
    PasswordValidationDirective
  ],
  imports: [
    CommonModule
  ]
})
export class PasswordValidationModule { }
