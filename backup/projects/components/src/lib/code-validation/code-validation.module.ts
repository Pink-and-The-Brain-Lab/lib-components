import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CodeValidationComponent } from './code-validation.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SpinnerModule } from '../spinner/spinner.module';
import { LoadingButtonModule } from '../loading-button/loading-button.module';

@NgModule({
  declarations: [
    CodeValidationComponent
  ],
  exports: [
    CodeValidationComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SpinnerModule,
    LoadingButtonModule,
  ]
})
export class CodeValidationModule { }
