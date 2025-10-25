import { IProfile } from "../models/profile.interface";

export class ProfileAction {
    static readonly type = '[Profile] Profiles';
    constructor (public profiles: IProfile[]) {}
}
