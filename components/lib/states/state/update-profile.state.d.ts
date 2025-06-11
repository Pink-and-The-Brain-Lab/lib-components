import { StateContext } from "@ngxs/store";
import { UpdateProfileAction } from '../actions/update-profile.action';
import { IUpdateProfile } from '../models/update-profile.interface';
import * as i0 from "@angular/core";
export declare class UpdateProfileState {
    constructor();
    updateProfile(ctx: StateContext<IUpdateProfile>, action: UpdateProfileAction): void;
    static profile(state: IUpdateProfile): IUpdateProfile;
    static ɵfac: i0.ɵɵFactoryDeclaration<UpdateProfileState, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<UpdateProfileState>;
}
