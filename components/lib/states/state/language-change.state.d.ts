import { StateContext } from "@ngxs/store";
import { ILanguageChange } from '../models/language-change.interface';
import { LanguageChangeAction } from '../actions/language-change.action';
import * as i0 from "@angular/core";
export declare class LanguageChangeState {
    constructor();
    updateProfile(ctx: StateContext<ILanguageChange>, action: LanguageChangeAction): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<LanguageChangeState, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<LanguageChangeState>;
}
