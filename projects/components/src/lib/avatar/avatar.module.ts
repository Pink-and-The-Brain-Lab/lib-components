import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { UserStatusBulletModule } from '../user-status-bullet/user-status-bullet.module';
import { AvatarComponent } from './avatar.component';

@NgModule({
  declarations: [
    AvatarComponent
  ],
  imports: [
    CommonModule,
    UserStatusBulletModule
  ],
  exports: [
    AvatarComponent
  ]
})
export class AvatarModule { }
