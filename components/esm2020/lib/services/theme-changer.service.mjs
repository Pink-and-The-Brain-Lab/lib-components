import { DOCUMENT } from "@angular/common";
import { Injectable, inject } from "@angular/core";
import * as i0 from "@angular/core";
export class ThemeChangerService {
    constructor() {
        this.document = inject(DOCUMENT);
    }
    loadTheme(theme) {
        const cssFileTheme = `${theme}.css`;
        const cssLinkElement = this.document.getElementById('client-theme');
        if (cssLinkElement) {
            cssLinkElement.href = cssFileTheme;
            return;
        }
        const headElement = this.document.getElementsByTagName('head')[0];
        const newCssLinkElement = this.document.createElement('link');
        newCssLinkElement.id = 'client-theme';
        newCssLinkElement.type = 'text/css';
        newCssLinkElement.rel = 'stylesheet';
        newCssLinkElement.href = cssFileTheme;
        headElement.appendChild(newCssLinkElement);
    }
}
ThemeChangerService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: ThemeChangerService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
ThemeChangerService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: ThemeChangerService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: ThemeChangerService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhlbWUtY2hhbmdlci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY29tcG9uZW50cy9zcmMvbGliL3NlcnZpY2VzL3RoZW1lLWNoYW5nZXIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDM0MsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7O0FBS25ELE1BQU0sT0FBTyxtQkFBbUI7SUFIaEM7UUFLcUIsYUFBUSxHQUFHLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQztLQW1CaEQ7SUFqQlUsU0FBUyxDQUFDLEtBQWE7UUFDMUIsTUFBTSxZQUFZLEdBQUcsR0FBRyxLQUFLLE1BQU0sQ0FBQztRQUNwQyxNQUFNLGNBQWMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLGNBQWMsQ0FBQyxjQUFjLENBQW9CLENBQUM7UUFFdkYsSUFBSSxjQUFjLEVBQUU7WUFDaEIsY0FBYyxDQUFDLElBQUksR0FBRyxZQUFZLENBQUM7WUFDbkMsT0FBTztTQUNWO1FBRUQsTUFBTSxXQUFXLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxvQkFBb0IsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNsRSxNQUFNLGlCQUFpQixHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzlELGlCQUFpQixDQUFDLEVBQUUsR0FBRyxjQUFjLENBQUM7UUFDdEMsaUJBQWlCLENBQUMsSUFBSSxHQUFHLFVBQVUsQ0FBQztRQUNwQyxpQkFBaUIsQ0FBQyxHQUFHLEdBQUcsWUFBWSxDQUFDO1FBQ3JDLGlCQUFpQixDQUFDLElBQUksR0FBRyxZQUFzQixDQUFDO1FBQ2hELFdBQVcsQ0FBQyxXQUFXLENBQUMsaUJBQWlCLENBQUMsQ0FBQztJQUMvQyxDQUFDOztnSEFwQlEsbUJBQW1CO29IQUFuQixtQkFBbUIsY0FGaEIsTUFBTTsyRkFFVCxtQkFBbUI7a0JBSC9CLFVBQVU7bUJBQUM7b0JBQ1IsVUFBVSxFQUFFLE1BQU07aUJBQ3JCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRE9DVU1FTlQgfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uXCI7XHJcbmltcG9ydCB7IEluamVjdGFibGUsIGluamVjdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcbiAgICBwcm92aWRlZEluOiAncm9vdCdcclxufSlcclxuZXhwb3J0IGNsYXNzIFRoZW1lQ2hhbmdlclNlcnZpY2Uge1xyXG5cclxuICAgIHByaXZhdGUgcmVhZG9ubHkgZG9jdW1lbnQgPSBpbmplY3QoRE9DVU1FTlQpO1xyXG5cclxuICAgIHB1YmxpYyBsb2FkVGhlbWUodGhlbWU6IHN0cmluZykge1xyXG4gICAgICAgIGNvbnN0IGNzc0ZpbGVUaGVtZSA9IGAke3RoZW1lfS5jc3NgO1xyXG4gICAgICAgIGNvbnN0IGNzc0xpbmtFbGVtZW50ID0gdGhpcy5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2xpZW50LXRoZW1lJykgYXMgSFRNTExpbmtFbGVtZW50O1xyXG5cclxuICAgICAgICBpZiAoY3NzTGlua0VsZW1lbnQpIHtcclxuICAgICAgICAgICAgY3NzTGlua0VsZW1lbnQuaHJlZiA9IGNzc0ZpbGVUaGVtZTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgaGVhZEVsZW1lbnQgPSB0aGlzLmRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdoZWFkJylbMF07XHJcbiAgICAgICAgY29uc3QgbmV3Q3NzTGlua0VsZW1lbnQgPSB0aGlzLmRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpbmsnKTtcclxuICAgICAgICBuZXdDc3NMaW5rRWxlbWVudC5pZCA9ICdjbGllbnQtdGhlbWUnO1xyXG4gICAgICAgIG5ld0Nzc0xpbmtFbGVtZW50LnR5cGUgPSAndGV4dC9jc3MnO1xyXG4gICAgICAgIG5ld0Nzc0xpbmtFbGVtZW50LnJlbCA9ICdzdHlsZXNoZWV0JztcclxuICAgICAgICBuZXdDc3NMaW5rRWxlbWVudC5ocmVmID0gY3NzRmlsZVRoZW1lIGFzIHN0cmluZztcclxuICAgICAgICBoZWFkRWxlbWVudC5hcHBlbmRDaGlsZChuZXdDc3NMaW5rRWxlbWVudCk7XHJcbiAgICB9XHJcbn0iXX0=