import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfilePreviewComponent } from './profile-preview.component';
import { AvatarModule } from '../avatar/avatar.module';

@NgModule({
  declarations: [
    ProfilePreviewComponent
  ],
  exports: [
    ProfilePreviewComponent
  ],
  imports: [
    CommonModule,
    AvatarModule,
  ]
})
export class ProfilePreviewModule { }
