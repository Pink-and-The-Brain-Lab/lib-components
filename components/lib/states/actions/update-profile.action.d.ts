import { IUpdateProfile } from "../models/update-profile.interface";
export declare class UpdateProfileAction {
    profile: IUpdateProfile;
    static readonly type = "[Profile] UpdateProfile";
    constructor(profile: IUpdateProfile);
}
