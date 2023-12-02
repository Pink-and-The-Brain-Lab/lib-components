import { TranslateService } from '@ngx-translate/core';
import { Subject } from 'rxjs';
import { ILanguageOption } from './models/language-option.model';
import * as i0 from "@angular/core";
export declare class I18nService {
    translateService: TranslateService;
    languageOptions: Subject<ILanguageOption[]>;
    constructor(translateService: TranslateService);
    private observerLangChange;
    start(): void;
    private buildLanguageOptions;
    changeLanguage(language: ILanguageOption): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<I18nService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<I18nService>;
}
