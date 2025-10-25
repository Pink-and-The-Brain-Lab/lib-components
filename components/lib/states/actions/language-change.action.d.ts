import { ILanguageChange } from "../models/language-change.interface";
export declare class LanguageChangeAction {
    control: ILanguageChange;
    static readonly type = "[Dashboard] LanguageChange";
    constructor(control: ILanguageChange);
}
