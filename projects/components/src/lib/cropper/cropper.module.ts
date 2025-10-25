import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CropperComponent } from './cropper.component';
import { ImageCropperModule } from 'ngx-image-cropper';
// import { TooltipModule } from 'ng2-tooltip-directive';
import { AvatarModule } from '../avatar/avatar.module';
import { RangeModule } from '../range/range.module';

@NgModule({
  declarations: [
    CropperComponent
  ],
  exports: [
    CommonModule
  ],
  imports: [
    CommonModule,
    AvatarModule,
    ImageCropperModule,
    RangeModule,
    // TooltipModule,
  ]
})
export class CropperModule { }
