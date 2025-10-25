import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext, StateToken } from "@ngxs/store";
import { UpdateProfileAction } from '../actions/update-profile.action';
import { Theme } from '../../utils/enums/theme';
import { IUpdateProfile } from '../models/update-profile.interface';

const STATE_TOKEN = new StateToken<IUpdateProfile>('updateProfile');

@State<IUpdateProfile>({
    name: STATE_TOKEN,
    defaults: {
        email: '',
        phoneNumber: '',
        phoneNumberValidated: false,
        image: '',
        color: '',
        userName: '',
        profileName: '',
        profileType: '',
        profilePolicy: '',
        theme: Theme.DARK,
    }
})
@Injectable()
export class UpdateProfileState {

    constructor () {}

    @Action(UpdateProfileAction)
    updateProfile(ctx: StateContext<IUpdateProfile>, action: UpdateProfileAction): void {
        ctx.setState({
            ...action.profile
        });
    }

    @Selector()
    static profile(state: IUpdateProfile): IUpdateProfile {
        return state;
    }
}