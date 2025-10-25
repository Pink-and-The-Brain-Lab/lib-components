import { IUpdateProfile } from "../models/update-profile.interface";

export class UpdateProfileAction {
    static readonly type = '[Profile] UpdateProfile';
    constructor (public profile: IUpdateProfile) {}
}