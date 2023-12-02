import { Injectable } from '@angular/core';
import { forkJoin, Subject } from 'rxjs';
import * as i0 from "@angular/core";
import * as i1 from "@ngx-translate/core";
export class I18nService {
    constructor(translateService) {
        this.translateService = translateService;
        this.languageOptions = new Subject();
        this.observerLangChange();
    }
    observerLangChange() {
        this.translateService.onLangChange
            .subscribe(() => {
            this.buildLanguageOptions();
        });
    }
    start() {
        this.translateService.addLangs(['en', 'pt', 'es', 'fr']);
        this.translateService.setDefaultLang('en');
        this.buildLanguageOptions();
    }
    buildLanguageOptions() {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaTE4bi5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY29tcG9uZW50cy9zcmMvbGliL2kxOG4vaTE4bi5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7OztBQU16QyxNQUFNLE9BQU8sV0FBVztJQUd0QixZQUNTLGdCQUFrQztRQUFsQyxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBSDNDLG9CQUFlLEdBQUcsSUFBSSxPQUFPLEVBQXFCLENBQUM7UUFLakQsSUFBSSxDQUFDLGtCQUFrQixFQUFFLENBQUM7SUFDNUIsQ0FBQztJQUVPLGtCQUFrQjtRQUN4QixJQUFJLENBQUMsZ0JBQWdCLENBQUMsWUFBWTthQUMvQixTQUFTLENBQUMsR0FBRyxFQUFFO1lBQ2QsSUFBSSxDQUFDLG9CQUFvQixFQUFFLENBQUM7UUFDOUIsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRUQsS0FBSztRQUNILElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBQ3pELElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDM0MsSUFBSSxDQUFDLG9CQUFvQixFQUFFLENBQUM7SUFDOUIsQ0FBQztJQUVPLG9CQUFvQjtRQUMxQixNQUFNLE9BQU8sR0FBSSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ3RELE1BQU0sVUFBVSxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDM0QsTUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUNyRCxNQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBRW5ELFFBQVEsQ0FBQztZQUNQLE9BQU87WUFDUCxVQUFVO1lBQ1YsT0FBTztZQUNQLE1BQU07U0FDUCxDQUFDLENBQUMsU0FBUyxDQUNWLFNBQVMsQ0FBQyxFQUFFO1lBQ1YsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsQ0FBQztvQkFDekIsS0FBSyxFQUFFLElBQUk7b0JBQ1gsS0FBSyxFQUFFLFNBQVMsQ0FBQyxDQUFDLENBQUM7aUJBQ3BCLEVBQUU7b0JBQ0QsS0FBSyxFQUFFLElBQUk7b0JBQ1gsS0FBSyxFQUFFLFNBQVMsQ0FBQyxDQUFDLENBQUM7aUJBQ3BCLEVBQUU7b0JBQ0QsS0FBSyxFQUFFLElBQUk7b0JBQ1gsS0FBSyxFQUFFLFNBQVMsQ0FBQyxDQUFDLENBQUM7aUJBQ3BCLEVBQUU7b0JBQ0QsS0FBSyxFQUFFLElBQUk7b0JBQ1gsS0FBSyxFQUFFLFNBQVMsQ0FBQyxDQUFDLENBQUM7aUJBQ3BCLENBQUMsQ0FBQyxDQUFDO1FBQ04sQ0FBQyxDQUNGLENBQUM7SUFDSixDQUFDO0lBRUQsY0FBYyxDQUFDLFFBQXlCO1FBQ3RDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzVDLENBQUM7O3dHQXREVSxXQUFXOzRHQUFYLFdBQVcsY0FGVixNQUFNOzJGQUVQLFdBQVc7a0JBSHZCLFVBQVU7bUJBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgVHJhbnNsYXRlU2VydmljZSB9IGZyb20gJ0BuZ3gtdHJhbnNsYXRlL2NvcmUnO1xuaW1wb3J0IHsgZm9ya0pvaW4sIFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IElMYW5ndWFnZU9wdGlvbiB9IGZyb20gJy4vbW9kZWxzL2xhbmd1YWdlLW9wdGlvbi5tb2RlbCc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIEkxOG5TZXJ2aWNlIHtcbiAgbGFuZ3VhZ2VPcHRpb25zID0gbmV3IFN1YmplY3Q8SUxhbmd1YWdlT3B0aW9uW10+KCk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIHRyYW5zbGF0ZVNlcnZpY2U6IFRyYW5zbGF0ZVNlcnZpY2UsXG4gICkge1xuICAgIHRoaXMub2JzZXJ2ZXJMYW5nQ2hhbmdlKCk7XG4gIH1cblxuICBwcml2YXRlIG9ic2VydmVyTGFuZ0NoYW5nZSgpIHtcbiAgICB0aGlzLnRyYW5zbGF0ZVNlcnZpY2Uub25MYW5nQ2hhbmdlXG4gICAgICAuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgICAgdGhpcy5idWlsZExhbmd1YWdlT3B0aW9ucygpO1xuICAgICAgfSk7XG4gIH1cblxuICBzdGFydCgpIHtcbiAgICB0aGlzLnRyYW5zbGF0ZVNlcnZpY2UuYWRkTGFuZ3MoWydlbicsICdwdCcsICdlcycsICdmciddKTtcbiAgICB0aGlzLnRyYW5zbGF0ZVNlcnZpY2Uuc2V0RGVmYXVsdExhbmcoJ2VuJyk7XG4gICAgdGhpcy5idWlsZExhbmd1YWdlT3B0aW9ucygpO1xuICB9XG5cbiAgcHJpdmF0ZSBidWlsZExhbmd1YWdlT3B0aW9ucygpIHtcbiAgICBjb25zdCBFTkdMSVNIID0gIHRoaXMudHJhbnNsYXRlU2VydmljZS5nZXQoJ0VOR0xJU0gnKTtcbiAgICBjb25zdCBQT1JUVUdVRVNFID0gdGhpcy50cmFuc2xhdGVTZXJ2aWNlLmdldCgnUE9SVFVHVUVTRScpO1xuICAgIGNvbnN0IFNQQU5JU0ggPSB0aGlzLnRyYW5zbGF0ZVNlcnZpY2UuZ2V0KCdTUEFOSVNIJyk7XG4gICAgY29uc3QgRlJFTkNIID0gdGhpcy50cmFuc2xhdGVTZXJ2aWNlLmdldCgnRlJFTkNIJyk7XG5cbiAgICBmb3JrSm9pbihbXG4gICAgICBFTkdMSVNILFxuICAgICAgUE9SVFVHVUVTRSxcbiAgICAgIFNQQU5JU0gsXG4gICAgICBGUkVOQ0hcbiAgICBdKS5zdWJzY3JpYmUoXG4gICAgICBfcmVzcG9uc2UgPT4ge1xuICAgICAgICB0aGlzLmxhbmd1YWdlT3B0aW9ucy5uZXh0KFt7XG4gICAgICAgICAgdmFsdWU6ICdlbicsXG4gICAgICAgICAgbGFiZWw6IF9yZXNwb25zZVswXSxcbiAgICAgICAgfSwge1xuICAgICAgICAgIHZhbHVlOiAncHQnLFxuICAgICAgICAgIGxhYmVsOiBfcmVzcG9uc2VbMV0sXG4gICAgICAgIH0sIHtcbiAgICAgICAgICB2YWx1ZTogJ2VzJyxcbiAgICAgICAgICBsYWJlbDogX3Jlc3BvbnNlWzJdLFxuICAgICAgICB9LCB7XG4gICAgICAgICAgdmFsdWU6ICdmcicsXG4gICAgICAgICAgbGFiZWw6IF9yZXNwb25zZVszXSxcbiAgICAgICAgfV0pO1xuICAgICAgfVxuICAgICk7XG4gIH1cblxuICBjaGFuZ2VMYW5ndWFnZShsYW5ndWFnZTogSUxhbmd1YWdlT3B0aW9uKSB7XG4gICAgdGhpcy50cmFuc2xhdGVTZXJ2aWNlLnVzZShsYW5ndWFnZS52YWx1ZSk7XG4gIH1cbn1cbiJdfQ==