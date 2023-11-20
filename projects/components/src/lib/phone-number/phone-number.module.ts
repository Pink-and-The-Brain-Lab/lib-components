import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhoneNumberComponent } from './phone-number.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SpinnerModule } from '../spinner/spinner.module';
import { CustomSelectModule } from '../custom-select/custom-select.module';
import { InputValidationModule } from '../input-validation/input-validation.module';
import { LoadingButtonModule } from '../loading-button/loading-button.module';

@NgModule({
  declarations: [
    PhoneNumberComponent,
  ],
  exports: [
    PhoneNumberComponent,
  ],
  imports: [
    CommonModule,
    CustomSelectModule,
    FormsModule,
    ReactiveFormsModule,
    InputValidationModule,
    LoadingButtonModule,
    SpinnerModule,
  ]
})
export class PhoneNumberModule { }
