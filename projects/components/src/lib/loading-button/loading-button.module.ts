import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingButtonDirective } from './loading-button.directive';

@NgModule({
  declarations: [
    LoadingButtonDirective
  ],
  exports: [
    LoadingButtonDirective
  ],
  imports: [
    CommonModule
  ]
})
export class LoadingButtonModule { }
