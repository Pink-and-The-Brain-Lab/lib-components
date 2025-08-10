import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CustomSelectComponent } from './custom-select.component';
import { PopoverModule } from '../popover/popover.module';

@NgModule({
  declarations: [
    CustomSelectComponent
  ],
  exports: [
    CustomSelectComponent
  ],
  imports: [
    CommonModule,
    PopoverModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class CustomSelectModule { }
