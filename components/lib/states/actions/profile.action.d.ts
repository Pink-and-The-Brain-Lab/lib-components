import { IProfile } from "../models/profile.interface";
export declare class ProfileAction {
    profiles: IProfile[];
    static readonly type = "[Profile] Profiles";
    constructor(profiles: IProfile[]);
}
