import { UserStatus } from '../user-status-bullet/models/user-status';
import { AvatarMask } from './models/avatar-maks.model';
import { AvatarMaskType } from './models/avatar-mask-type';
import { AvatarSize } from './models/avatar-size.model';
import * as i0 from "@angular/core";
export declare class AvatarComponent {
    imageUrl: string;
    size: AvatarSize;
    mask: AvatarMask;
    maskType: AvatarMaskType;
    secondMaskType: AvatarMaskType;
    status: UserStatus;
    color: string;
    name: string;
    static ɵfac: i0.ɵɵFactoryDeclaration<AvatarComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<AvatarComponent, "cdk-avatar", never, { "imageUrl": "imageUrl"; "size": "size"; "mask": "mask"; "maskType": "maskType"; "secondMaskType": "secondMaskType"; "status": "status"; "color": "color"; "name": "name"; }, {}, never, never, false, never>;
}
