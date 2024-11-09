import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalComponent } from './modal.component';
import { OverlayModule } from '@angular/cdk/overlay';
import { ModalService } from './services/modal.component.service';
import { PortalModule } from '@angular/cdk/portal';

@NgModule({
  declarations: [
    ModalComponent
  ],
  exports: [
    ModalComponent,
  ],
  imports: [
    CommonModule,
    OverlayModule,
    PortalModule,
  ],
  providers: [
    ModalService,
  ]
})
export class ModalModule { }
