import { ModelAvatarMask } from "./models/model-avatar-mask.type";
import { StatusAvatarMask } from "./models/status-avatar-mask.type";
import { UserStatus } from "./models/user-status.type";

export class BuildMaskClassName {
  private mask: ModelAvatarMask;
  private maskType: StatusAvatarMask;
  private status: UserStatus;
  private baseName = 'avatar__mask--';

  constructor (mask: ModelAvatarMask, maskType: StatusAvatarMask, status: UserStatus) {
    this.mask = mask;
    this.maskType = maskType;
    this.status = status;
  }

  buildClassName(): string {
    return this.getSquareMask();
  }

  private getSquareMask(): string {
    if (this.mask !== 'square') return this.getCircleMask();

    if (this.maskType === 'fixed')
      return this.baseName.concat(`${this.mask}--${this.maskType}`)

    return this.baseName.concat(`${this.mask}`);
  }

  private getCircleMask(): string {
    if (this.mask !== 'circle') return this.getHexagonMask();

    if (this.status.length && this.maskType.length)
      return this.baseName.concat(`${this.mask}--status--${this.maskType}`);

    if (this.maskType.length)
      return this.baseName.concat(`${this.mask}--${this.maskType}`);

    if (this.status.length)
        return this.baseName.concat(`${this.mask}--status`);

    return this.baseName.concat(`${this.mask}`);
  }

  private getHexagonMask(): string {
    if (this.status.length && this.maskType.length)
      return this.baseName.concat(`${this.mask}--status--${this.maskType}`);

    if (this.maskType.length && this.maskType === 'check')
      return this.baseName.concat(`${this.mask}--${this.maskType}`);

    if (this.status.length)
        return this.baseName.concat(`${this.mask}--status`);

    return this.baseName.concat(`${this.mask}`);
  }
}
