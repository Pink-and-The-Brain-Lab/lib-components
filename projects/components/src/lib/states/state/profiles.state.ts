import { Injectable } from '@angular/core';
import { Action, State, StateContext, StateToken } from "@ngxs/store";
import { ProfileAction } from '../actions/profile.action';
import { IProfile } from '../models/profile.interface';

const STATE_TOKEN = new StateToken<IProfile>('profiles');

@State<IProfile[]>({
    name: STATE_TOKEN,
    defaults: []
})
@Injectable()
export class ProfilesState {

    constructor () {}

    @Action(ProfileAction)
    profiles(ctx: StateContext<IProfile[]>, action: ProfileAction): void {
        ctx.setState(action.profiles);
    }
}
