import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-profile-preview',
  templateUrl: './profile-preview.component.html',
  styleUrls: ['./profile-preview.component.scss']
})
export class ProfilePreviewComponent {
  @Input() color = '';
  @Input() imageFile = '';
  @Input() userName = '';
  @Input() profileName = '';

  private defaultUserName = 'chosen name';
  private defaultProfileName = 'profile name';

  get isDefaultUserName(): boolean {
    return this.userName.toLowerCase().trim() === this.defaultUserName;
  }

  get isDefaultProfileName(): boolean {
    return this.profileName.toLowerCase().trim() === this.defaultProfileName;
  }
}
