import { ILanguageChange } from "../models/language-change.interface";

export class LanguageChangeAction {
    static readonly type = '[Dashboard] LanguageChange';
    constructor (public control: ILanguageChange) {}
}
