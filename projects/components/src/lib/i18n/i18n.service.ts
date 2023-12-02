import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { forkJoin, Subject } from 'rxjs';
import { ILanguageOption } from './models/language-option.model';

@Injectable({
  providedIn: 'root'
})
export class I18nService {
  languageOptions = new Subject<ILanguageOption[]>();

  constructor(
    public translateService: TranslateService,
  ) {
    this.observerLangChange();

    this.languageOptions
      .subscribe(
        (response) => console.log('languageOptions: ', response)
      );
  }

  private observerLangChange() {
    this.translateService.onLangChange
      .subscribe(() => {
        this.buildLanguageOptions('observerLangChange');
      });
  }

  start() {
    this.translateService.addLangs(['en', 'pt', 'es', 'fr']);
    this.translateService.setDefaultLang('en');
    this.buildLanguageOptions('start');
  }

  private buildLanguageOptions(from: string) {
    console.log(`buildLanguageOptions from ${from}`)
    const ENGLISH =  this.translateService.get('ENGLISH');
    const PORTUGUESE = this.translateService.get('PORTUGUESE');
    const SPANISH = this.translateService.get('SPANISH');
    const FRENCH = this.translateService.get('FRENCH');

    forkJoin([
      ENGLISH,
      PORTUGUESE,
      SPANISH,
      FRENCH
    ]).subscribe(
      _response => {
        console.log(`languages: ${_response}`)
        this.languageOptions.next([{
          value: 'en',
          label: _response[0],
        }, {
          value: 'pt',
          label: _response[1],
        }, {
          value: 'es',
          label: _response[2],
        }, {
          value: 'fr',
          label: _response[3],
        }]);
      }
    );
  }

  changeLanguage(language: ILanguageOption) {
    this.translateService.use(language.value);
  }
}
