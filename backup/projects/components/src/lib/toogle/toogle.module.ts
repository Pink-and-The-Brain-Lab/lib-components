import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToogleComponent } from './toogle.component';

@NgModule({
  declarations: [
    ToogleComponent
  ],
  exports: [
    ToogleComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ToogleModule { }
