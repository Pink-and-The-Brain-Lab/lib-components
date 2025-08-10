import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CropperComponent } from './cropper.component';
import { ImageCropperModule } from 'ngx-image-cropper';
// import { TooltipModule } from 'ng2-tooltip-directive';
import { RangeModule } from '../range/range.module';
import { AvatarComponent } from '../avatar/avatar.component';

@NgModule({
  declarations: [
    CropperComponent
  ],
  exports: [
    CommonModule
  ],
  imports: [
    CommonModule,
    AvatarComponent,
    ImageCropperModule,
    RangeModule,
    // TooltipModule,
  ]
})
export class CropperModule { }
