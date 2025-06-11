import { UserStatus } from '../user-status-bullet/models/user-status';
import { AvatarMask } from './models/avatar-mask.model';
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
    static ɵcmp: i0.ɵɵComponentDeclaration<AvatarComponent, "cdk-avatar", never, { "imageUrl": { "alias": "imageUrl"; "required": false; }; "size": { "alias": "size"; "required": false; }; "mask": { "alias": "mask"; "required": false; }; "maskType": { "alias": "maskType"; "required": false; }; "secondMaskType": { "alias": "secondMaskType"; "required": false; }; "status": { "alias": "status"; "required": false; }; "color": { "alias": "color"; "required": false; }; "name": { "alias": "name"; "required": false; }; }, {}, never, never, false, never>;
}
