import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TooltipComponent } from './tooltip.component';
import { TooltipDirective } from './tooltip.directive';
import { OverlayModule } from '@angular/cdk/overlay';

@NgModule({
  declarations: [
    TooltipComponent,
    TooltipDirective,
  ],
  exports: [
    TooltipComponent,
    TooltipDirective,
  ],
  imports: [
    CommonModule,
    OverlayModule,
  ]
})
export class TooltipModule { }
