import { Injectable } from '@angular/core';
import { Action, State, StateContext, StateToken } from "@ngxs/store";
import { ILanguageChange } from '../models/language-change.interface';
import { LanguageChangeAction } from '../actions/language-change.action';

const STATE_TOKEN = new StateToken<ILanguageChange>('languages');

@State<ILanguageChange>({
    name: STATE_TOKEN,
    defaults: {
        language: 'en',
    }
})
@Injectable()
export class LanguageChangeState {

    constructor () {}

    @Action(LanguageChangeAction)
    updateProfile(ctx: StateContext<ILanguageChange>, action: LanguageChangeAction): void {
        ctx.setState({
            ...action.control
        });
    }
}
