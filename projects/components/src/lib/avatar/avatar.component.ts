import { Component, Input } from '@angular/core';
import { UserStatus } from '../user-status-bullet/models/user-status';
import { AvatarMask } from './models/avatar-mask.model';
import { AvatarMaskType } from './models/avatar-mask-type';
import { AvatarSize } from './models/avatar-size.model';

@Component({
  selector: 'cdk-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.scss']
})
export class AvatarComponent {
  @Input()
  imageUrl = '';

  @Input()
  size: AvatarSize = 'xs';

  @Input()
  mask: AvatarMask = 'hexagon';

  @Input()
  maskType: AvatarMaskType = '';

  @Input()
  secondMaskType: AvatarMaskType = '';

  @Input()
  status: UserStatus = 'online';

  @Input()
  color = '#9D7CDC';

  @Input()
  name = '';
}
