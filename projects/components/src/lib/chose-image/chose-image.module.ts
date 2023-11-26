import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChoseImageComponent } from './chose-image.component';

@NgModule({
  declarations: [
    ChoseImageComponent
  ],
  exports: [
    ChoseImageComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ChoseImageModule { }
