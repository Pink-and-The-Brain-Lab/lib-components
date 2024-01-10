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
        const newCssLinkElement = this.document.createElement('link');
        newCssLinkElement.id = 'client-theme';
        newCssLinkElement.type = 'text/css';
        newCssLinkElement.rel = 'stylesheet';
        newCssLinkElement.href = cssFileTheme;
        this.document.head?.appendChild(newCssLinkElement);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhlbWUtY2hhbmdlci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY29tcG9uZW50cy9zcmMvbGliL3NlcnZpY2VzL3RoZW1lLWNoYW5nZXIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDM0MsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7O0FBTW5ELE1BQU0sT0FBTyxtQkFBbUI7SUFIaEM7UUFLcUIsYUFBUSxHQUFHLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQztLQWtCaEQ7SUFoQlUsU0FBUyxDQUFDLEtBQVk7UUFDekIsTUFBTSxZQUFZLEdBQUcsR0FBRyxLQUFLLE1BQU0sQ0FBQztRQUNwQyxNQUFNLGNBQWMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLGNBQWMsQ0FBQyxjQUFjLENBQW9CLENBQUM7UUFFdkYsSUFBSSxjQUFjLEVBQUU7WUFDaEIsY0FBYyxDQUFDLElBQUksR0FBRyxZQUFZLENBQUM7WUFDbkMsT0FBTztTQUNWO1FBRUQsTUFBTSxpQkFBaUIsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUM5RCxpQkFBaUIsQ0FBQyxFQUFFLEdBQUcsY0FBYyxDQUFDO1FBQ3RDLGlCQUFpQixDQUFDLElBQUksR0FBRyxVQUFVLENBQUM7UUFDcEMsaUJBQWlCLENBQUMsR0FBRyxHQUFHLFlBQVksQ0FBQztRQUNyQyxpQkFBaUIsQ0FBQyxJQUFJLEdBQUcsWUFBc0IsQ0FBQztRQUNoRCxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxXQUFXLENBQUMsaUJBQWlCLENBQUMsQ0FBQztJQUN2RCxDQUFDOztnSEFuQlEsbUJBQW1CO29IQUFuQixtQkFBbUIsY0FGaEIsTUFBTTsyRkFFVCxtQkFBbUI7a0JBSC9CLFVBQVU7bUJBQUM7b0JBQ1IsVUFBVSxFQUFFLE1BQU07aUJBQ3JCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRE9DVU1FTlQgfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uXCI7XHJcbmltcG9ydCB7IEluamVjdGFibGUsIGluamVjdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IFRoZW1lIH0gZnJvbSBcIi4uLy4uL3B1YmxpYy1hcGlcIjtcclxuXHJcbkBJbmplY3RhYmxlKHtcclxuICAgIHByb3ZpZGVkSW46ICdyb290J1xyXG59KVxyXG5leHBvcnQgY2xhc3MgVGhlbWVDaGFuZ2VyU2VydmljZSB7XHJcblxyXG4gICAgcHJpdmF0ZSByZWFkb25seSBkb2N1bWVudCA9IGluamVjdChET0NVTUVOVCk7XHJcblxyXG4gICAgcHVibGljIGxvYWRUaGVtZSh0aGVtZTogVGhlbWUpIHtcclxuICAgICAgICBjb25zdCBjc3NGaWxlVGhlbWUgPSBgJHt0aGVtZX0uY3NzYDtcclxuICAgICAgICBjb25zdCBjc3NMaW5rRWxlbWVudCA9IHRoaXMuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NsaWVudC10aGVtZScpIGFzIEhUTUxMaW5rRWxlbWVudDtcclxuXHJcbiAgICAgICAgaWYgKGNzc0xpbmtFbGVtZW50KSB7XHJcbiAgICAgICAgICAgIGNzc0xpbmtFbGVtZW50LmhyZWYgPSBjc3NGaWxlVGhlbWU7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IG5ld0Nzc0xpbmtFbGVtZW50ID0gdGhpcy5kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaW5rJyk7XHJcbiAgICAgICAgbmV3Q3NzTGlua0VsZW1lbnQuaWQgPSAnY2xpZW50LXRoZW1lJztcclxuICAgICAgICBuZXdDc3NMaW5rRWxlbWVudC50eXBlID0gJ3RleHQvY3NzJztcclxuICAgICAgICBuZXdDc3NMaW5rRWxlbWVudC5yZWwgPSAnc3R5bGVzaGVldCc7XHJcbiAgICAgICAgbmV3Q3NzTGlua0VsZW1lbnQuaHJlZiA9IGNzc0ZpbGVUaGVtZSBhcyBzdHJpbmc7XHJcbiAgICAgICAgdGhpcy5kb2N1bWVudC5oZWFkPy5hcHBlbmRDaGlsZChuZXdDc3NMaW5rRWxlbWVudCk7XHJcbiAgICB9XHJcbn0iXX0=