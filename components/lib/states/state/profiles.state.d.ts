import { StateContext } from "@ngxs/store";
import { ProfileAction } from '../actions/profile.action';
import { IProfile } from '../models/profile.interface';
import * as i0 from "@angular/core";
export declare class ProfilesState {
    constructor();
    profiles(ctx: StateContext<IProfile[]>, action: ProfileAction): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ProfilesState, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<ProfilesState>;
}
