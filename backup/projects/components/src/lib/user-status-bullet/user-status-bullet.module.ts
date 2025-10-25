import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { UserStatusBulletComponent } from './user-status-bullet.component';

@NgModule({
  declarations: [
    UserStatusBulletComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    UserStatusBulletComponent
  ]
})
export class UserStatusBulletModule { }
