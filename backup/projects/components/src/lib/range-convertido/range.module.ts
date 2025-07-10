import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RangeComponent } from './range.component';

@NgModule({
  declarations: [
    RangeComponent
  ],
  exports: [
    RangeComponent
  ],
  imports: [
    CommonModule
  ]
})
export class RangeModule { }
