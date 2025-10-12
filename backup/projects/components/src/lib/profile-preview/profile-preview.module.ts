import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfilePreviewComponent } from './profile-preview.component';
import { AvatarComponent } from '../avatar/avatar.component';

@NgModule({
  declarations: [
    ProfilePreviewComponent
  ],
  exports: [
    ProfilePreviewComponent
  ],
  imports: [
    CommonModule,
    AvatarComponent,
  ]
})
export class ProfilePreviewModule { }
