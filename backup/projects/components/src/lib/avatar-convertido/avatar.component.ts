import { Component, Input } from '@angular/core';
import { UserStatus } from '../user-status-bullet/models/user-status';
import { AvatarSize } from './models/avatar-size.type';
import { StatusAvatarMask } from './models/status-avatar-mask.type';
import { ModelAvatarMask } from './models/model-avatar-mask.type';
import { CommonModule } from '@angular/common';
import { UserStatusBulletModule } from '../user-status-bullet/user-status-bullet.module';

@Component({
  selector: 'cdk-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    UserStatusBulletModule,
  ],
})
export class AvatarComponent {
  @Input()
  imageUrl = '';

  @Input()
  size: AvatarSize = 'xs';

  @Input()
  mask: ModelAvatarMask = 'hexagon';

  @Input()
  maskType: StatusAvatarMask = '';

  @Input()
  status: UserStatus = '';

  @Input()
  color = '#9D7CDC';

  @Input()
  name = '';
}
