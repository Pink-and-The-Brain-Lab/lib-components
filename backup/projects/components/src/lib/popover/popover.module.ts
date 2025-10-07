import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PopoverDirective } from './popover.directive';
import { FullscreenOverlayContainer, OverlayContainer, OverlayModule } from '@angular/cdk/overlay';

@NgModule({
  declarations: [
    PopoverDirective
  ],
  exports: [PopoverDirective],
  imports: [CommonModule, OverlayModule],
  providers: [{
    provide: OverlayContainer,
    useClass: FullscreenOverlayContainer,
  }]
})
export class PopoverModule { }
