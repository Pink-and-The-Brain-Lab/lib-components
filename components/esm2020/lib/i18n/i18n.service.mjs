import { Injectable } from '@angular/core';
import { forkJoin, Subject } from 'rxjs';
import * as i0 from "@angular/core";
import * as i1 from "@ngx-translate/core";
export class I18nService {
    constructor(translateService) {
        this.translateService = translateService;
        this.languageOptions = new Subject();
        this.observerLangChange();
        this.languageOptions
            .subscribe((response) => console.log('languageOptions: ', response));
    }
    observerLangChange() {
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
    buildLanguageOptions(from) {
        console.log(`buildLanguageOptions from ${from}`);
        const ENGLISH = this.translateService.get('ENGLISH');
        const PORTUGUESE = this.translateService.get('PORTUGUESE');
        const SPANISH = this.translateService.get('SPANISH');
        const FRENCH = this.translateService.get('FRENCH');
        forkJoin([
            ENGLISH,
            PORTUGUESE,
            SPANISH,
            FRENCH
        ]).subscribe(_response => {
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
        });
    }
    changeLanguage(language) {
        this.translateService.use(language.value);
    }
}
I18nService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: I18nService, deps: [{ token: i1.TranslateService }], target: i0.ɵɵFactoryTarget.Injectable });
I18nService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: I18nService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: I18nService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return [{ type: i1.TranslateService }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaTE4bi5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY29tcG9uZW50cy9zcmMvbGliL2kxOG4vaTE4bi5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7OztBQU16QyxNQUFNLE9BQU8sV0FBVztJQUd0QixZQUNTLGdCQUFrQztRQUFsQyxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBSDNDLG9CQUFlLEdBQUcsSUFBSSxPQUFPLEVBQXFCLENBQUM7UUFLakQsSUFBSSxDQUFDLGtCQUFrQixFQUFFLENBQUM7UUFFMUIsSUFBSSxDQUFDLGVBQWU7YUFDakIsU0FBUyxDQUNSLENBQUMsUUFBUSxFQUFFLEVBQUUsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLG1CQUFtQixFQUFFLFFBQVEsQ0FBQyxDQUN6RCxDQUFDO0lBQ04sQ0FBQztJQUVPLGtCQUFrQjtRQUN4QixJQUFJLENBQUMsZ0JBQWdCLENBQUMsWUFBWTthQUMvQixTQUFTLENBQUMsR0FBRyxFQUFFO1lBQ2QsSUFBSSxDQUFDLG9CQUFvQixDQUFDLG9CQUFvQixDQUFDLENBQUM7UUFDbEQsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRUQsS0FBSztRQUNILElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBQ3pELElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDM0MsSUFBSSxDQUFDLG9CQUFvQixDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ3JDLENBQUM7SUFFTyxvQkFBb0IsQ0FBQyxJQUFZO1FBQ3ZDLE9BQU8sQ0FBQyxHQUFHLENBQUMsNkJBQTZCLElBQUksRUFBRSxDQUFDLENBQUE7UUFDaEQsTUFBTSxPQUFPLEdBQUksSUFBSSxDQUFDLGdCQUFnQixDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUN0RCxNQUFNLFVBQVUsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQzNELE1BQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDckQsTUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUVuRCxRQUFRLENBQUM7WUFDUCxPQUFPO1lBQ1AsVUFBVTtZQUNWLE9BQU87WUFDUCxNQUFNO1NBQ1AsQ0FBQyxDQUFDLFNBQVMsQ0FDVixTQUFTLENBQUMsRUFBRTtZQUNWLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLENBQUM7b0JBQ3pCLEtBQUssRUFBRSxJQUFJO29CQUNYLEtBQUssRUFBRSxTQUFTLENBQUMsQ0FBQyxDQUFDO2lCQUNwQixFQUFFO29CQUNELEtBQUssRUFBRSxJQUFJO29CQUNYLEtBQUssRUFBRSxTQUFTLENBQUMsQ0FBQyxDQUFDO2lCQUNwQixFQUFFO29CQUNELEtBQUssRUFBRSxJQUFJO29CQUNYLEtBQUssRUFBRSxTQUFTLENBQUMsQ0FBQyxDQUFDO2lCQUNwQixFQUFFO29CQUNELEtBQUssRUFBRSxJQUFJO29CQUNYLEtBQUssRUFBRSxTQUFTLENBQUMsQ0FBQyxDQUFDO2lCQUNwQixDQUFDLENBQUMsQ0FBQztRQUNOLENBQUMsQ0FDRixDQUFDO0lBQ0osQ0FBQztJQUVELGNBQWMsQ0FBQyxRQUF5QjtRQUN0QyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUM1QyxDQUFDOzt3R0E1RFUsV0FBVzs0R0FBWCxXQUFXLGNBRlYsTUFBTTsyRkFFUCxXQUFXO2tCQUh2QixVQUFVO21CQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFRyYW5zbGF0ZVNlcnZpY2UgfSBmcm9tICdAbmd4LXRyYW5zbGF0ZS9jb3JlJztcbmltcG9ydCB7IGZvcmtKb2luLCBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBJTGFuZ3VhZ2VPcHRpb24gfSBmcm9tICcuL21vZGVscy9sYW5ndWFnZS1vcHRpb24ubW9kZWwnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBJMThuU2VydmljZSB7XG4gIGxhbmd1YWdlT3B0aW9ucyA9IG5ldyBTdWJqZWN0PElMYW5ndWFnZU9wdGlvbltdPigpO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyB0cmFuc2xhdGVTZXJ2aWNlOiBUcmFuc2xhdGVTZXJ2aWNlLFxuICApIHtcbiAgICB0aGlzLm9ic2VydmVyTGFuZ0NoYW5nZSgpO1xuXG4gICAgdGhpcy5sYW5ndWFnZU9wdGlvbnNcbiAgICAgIC5zdWJzY3JpYmUoXG4gICAgICAgIChyZXNwb25zZSkgPT4gY29uc29sZS5sb2coJ2xhbmd1YWdlT3B0aW9uczogJywgcmVzcG9uc2UpXG4gICAgICApO1xuICB9XG5cbiAgcHJpdmF0ZSBvYnNlcnZlckxhbmdDaGFuZ2UoKSB7XG4gICAgdGhpcy50cmFuc2xhdGVTZXJ2aWNlLm9uTGFuZ0NoYW5nZVxuICAgICAgLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAgIHRoaXMuYnVpbGRMYW5ndWFnZU9wdGlvbnMoJ29ic2VydmVyTGFuZ0NoYW5nZScpO1xuICAgICAgfSk7XG4gIH1cblxuICBzdGFydCgpIHtcbiAgICB0aGlzLnRyYW5zbGF0ZVNlcnZpY2UuYWRkTGFuZ3MoWydlbicsICdwdCcsICdlcycsICdmciddKTtcbiAgICB0aGlzLnRyYW5zbGF0ZVNlcnZpY2Uuc2V0RGVmYXVsdExhbmcoJ2VuJyk7XG4gICAgdGhpcy5idWlsZExhbmd1YWdlT3B0aW9ucygnc3RhcnQnKTtcbiAgfVxuXG4gIHByaXZhdGUgYnVpbGRMYW5ndWFnZU9wdGlvbnMoZnJvbTogc3RyaW5nKSB7XG4gICAgY29uc29sZS5sb2coYGJ1aWxkTGFuZ3VhZ2VPcHRpb25zIGZyb20gJHtmcm9tfWApXG4gICAgY29uc3QgRU5HTElTSCA9ICB0aGlzLnRyYW5zbGF0ZVNlcnZpY2UuZ2V0KCdFTkdMSVNIJyk7XG4gICAgY29uc3QgUE9SVFVHVUVTRSA9IHRoaXMudHJhbnNsYXRlU2VydmljZS5nZXQoJ1BPUlRVR1VFU0UnKTtcbiAgICBjb25zdCBTUEFOSVNIID0gdGhpcy50cmFuc2xhdGVTZXJ2aWNlLmdldCgnU1BBTklTSCcpO1xuICAgIGNvbnN0IEZSRU5DSCA9IHRoaXMudHJhbnNsYXRlU2VydmljZS5nZXQoJ0ZSRU5DSCcpO1xuXG4gICAgZm9ya0pvaW4oW1xuICAgICAgRU5HTElTSCxcbiAgICAgIFBPUlRVR1VFU0UsXG4gICAgICBTUEFOSVNILFxuICAgICAgRlJFTkNIXG4gICAgXSkuc3Vic2NyaWJlKFxuICAgICAgX3Jlc3BvbnNlID0+IHtcbiAgICAgICAgdGhpcy5sYW5ndWFnZU9wdGlvbnMubmV4dChbe1xuICAgICAgICAgIHZhbHVlOiAnZW4nLFxuICAgICAgICAgIGxhYmVsOiBfcmVzcG9uc2VbMF0sXG4gICAgICAgIH0sIHtcbiAgICAgICAgICB2YWx1ZTogJ3B0JyxcbiAgICAgICAgICBsYWJlbDogX3Jlc3BvbnNlWzFdLFxuICAgICAgICB9LCB7XG4gICAgICAgICAgdmFsdWU6ICdlcycsXG4gICAgICAgICAgbGFiZWw6IF9yZXNwb25zZVsyXSxcbiAgICAgICAgfSwge1xuICAgICAgICAgIHZhbHVlOiAnZnInLFxuICAgICAgICAgIGxhYmVsOiBfcmVzcG9uc2VbM10sXG4gICAgICAgIH1dKTtcbiAgICAgIH1cbiAgICApO1xuICB9XG5cbiAgY2hhbmdlTGFuZ3VhZ2UobGFuZ3VhZ2U6IElMYW5ndWFnZU9wdGlvbikge1xuICAgIHRoaXMudHJhbnNsYXRlU2VydmljZS51c2UobGFuZ3VhZ2UudmFsdWUpO1xuICB9XG59XG4iXX0=