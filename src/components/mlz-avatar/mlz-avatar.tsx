import { Component, Host, Prop, h } from '@stencil/core';
import { AvatarSize } from './models/avatar-size.type';
import { ModelAvatarMask } from './models/model-avatar-mask.type';
import { StatusAvatarMask } from './models/status-avatar-mask.type';
import { UserStatus } from './models/user-status.type';
import { BuildMaskClassName } from './build-mask-class-name';

@Component({
  tag: 'mlz-avatar',
  styleUrl: 'mlz-avatar.scss',
  scoped: true,
})
export class MlzAvatar {

  @Prop()
  imageUrl = '';

  @Prop()
  size: AvatarSize = 'xs';

  @Prop()
  mask: ModelAvatarMask = 'hexagon';

  @Prop()
  maskType: StatusAvatarMask = '';

  @Prop()
  status: UserStatus = '';

  @Prop()
  color = '#9D7CDC';

  @Prop()
  name = '';

  buildMaskClassName = (): string => {
    const buildMaskClassName = new BuildMaskClassName(this.mask, this.maskType, this.status);
    const className = buildMaskClassName.buildClassName();
    return className;
  }

  buildStatusBullet = (): HTMLElement => {
    return (this.status?.length && this.mask !== 'square') &&
      <div class="avatar__status">
        <span class={`d-block w-100 h-100 bullet-status--${this.status}` }></span>
      </div>
  }

  buildFixedIcon = (): HTMLElement => {
    return (this.maskType === 'fixed') &&
      <div class="avatar__fixed">
        <i class="bi bi-pin-angle-fill"></i>
      </div>
  }

  buildCheckIcon = (): HTMLElement => {
    return (this.maskType === 'check' && this.mask !== 'square') &&
      <div class="avatar__checked">
        <i class="bi bi-check-lg"></i>
      </div>
  }

  render() {
    return (
      <Host class="d-block">
        <div class={`avatar avatar--${this.size}`}>
          <div
            class={`
              avatar__mask
              ${this.buildMaskClassName()}
            `}
            style={{
              backgroundImage: `url(${this.imageUrl})`,
              backgroundColor: this.color
            }}
          >
            {
              (!this.imageUrl.length && this.name.length) &&
              <span>{ this.name[0] }</span>
            }
          </div>

          { this.buildStatusBullet() }

          { this.buildFixedIcon() }

          { this.buildCheckIcon() }
        </div>
      </Host>
    );
  }
}
