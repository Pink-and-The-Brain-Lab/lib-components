import { Component, Input } from '@angular/core';
import { UserStatus } from './models/user-status';

@Component({
  selector: 'cdk-user-status-bullet',
  templateUrl: './user-status-bullet.component.html',
  styleUrls: ['./user-status-bullet.component.scss']
})
export class UserStatusBulletComponent {

  @Input() status: UserStatus = 'online'

}
