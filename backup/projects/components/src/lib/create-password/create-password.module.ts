import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreatePasswordComponent } from './create-password.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputValidationModule } from '../input-validation/input-validation.module';
import { PasswordValidationModule } from '../password-validation/password-validation.module';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    CreatePasswordComponent
  ],
  exports: [
    CreatePasswordComponent
  ],
  imports: [
    CommonModule,
    InputValidationModule,
    FormsModule,
    ReactiveFormsModule,
    PasswordValidationModule,
    TranslateModule.forChild(),
  ]
})
export class CreatePasswordModule { }
