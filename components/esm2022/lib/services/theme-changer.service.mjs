import { DOCUMENT } from "@angular/common";
import { Injectable, inject } from "@angular/core";
import { LocalStorageManager, Storage } from "../../public-api";
import * as i0 from "@angular/core";
export class ThemeChangerService {
    constructor() {
        this.document = inject(DOCUMENT);
        this.localStorageManager = inject(LocalStorageManager);
    }
    loadTheme(theme) {
        const cssFileTheme = `${theme}.css`;
        const cssLinkElement = this.document.getElementById('client-theme');
        this.localStorageManager.set(Storage.SELECTED_THEME, theme);
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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.10", ngImport: i0, type: ThemeChangerService, deps: [], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "18.2.10", ngImport: i0, type: ThemeChangerService, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.10", ngImport: i0, type: ThemeChangerService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhlbWUtY2hhbmdlci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY29tcG9uZW50cy9zcmMvbGliL3NlcnZpY2VzL3RoZW1lLWNoYW5nZXIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDM0MsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDbkQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE9BQU8sRUFBUyxNQUFNLGtCQUFrQixDQUFDOztBQUt2RSxNQUFNLE9BQU8sbUJBQW1CO0lBSGhDO1FBS3FCLGFBQVEsR0FBRyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDNUIsd0JBQW1CLEdBQUcsTUFBTSxDQUFDLG1CQUFtQixDQUFDLENBQUM7S0FtQnRFO0lBakJVLFNBQVMsQ0FBQyxLQUFZO1FBQ3pCLE1BQU0sWUFBWSxHQUFHLEdBQUcsS0FBSyxNQUFNLENBQUM7UUFDcEMsTUFBTSxjQUFjLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxjQUFjLENBQUMsY0FBYyxDQUFvQixDQUFDO1FBQ3ZGLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxHQUFHLENBQVEsT0FBTyxDQUFDLGNBQWMsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUVuRSxJQUFJLGNBQWMsRUFBRSxDQUFDO1lBQ2pCLGNBQWMsQ0FBQyxJQUFJLEdBQUcsWUFBWSxDQUFDO1lBQ25DLE9BQU87UUFDWCxDQUFDO1FBRUQsTUFBTSxpQkFBaUIsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUM5RCxpQkFBaUIsQ0FBQyxFQUFFLEdBQUcsY0FBYyxDQUFDO1FBQ3RDLGlCQUFpQixDQUFDLElBQUksR0FBRyxVQUFVLENBQUM7UUFDcEMsaUJBQWlCLENBQUMsR0FBRyxHQUFHLFlBQVksQ0FBQztRQUNyQyxpQkFBaUIsQ0FBQyxJQUFJLEdBQUcsWUFBc0IsQ0FBQztRQUNoRCxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxXQUFXLENBQUMsaUJBQWlCLENBQUMsQ0FBQztJQUN2RCxDQUFDOytHQXJCUSxtQkFBbUI7bUhBQW5CLG1CQUFtQixjQUZoQixNQUFNOzs0RkFFVCxtQkFBbUI7a0JBSC9CLFVBQVU7bUJBQUM7b0JBQ1IsVUFBVSxFQUFFLE1BQU07aUJBQ3JCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRE9DVU1FTlQgfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uXCI7XHJcbmltcG9ydCB7IEluamVjdGFibGUsIGluamVjdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IExvY2FsU3RvcmFnZU1hbmFnZXIsIFN0b3JhZ2UsIFRoZW1lIH0gZnJvbSBcIi4uLy4uL3B1YmxpYy1hcGlcIjtcclxuXHJcbkBJbmplY3RhYmxlKHtcclxuICAgIHByb3ZpZGVkSW46ICdyb290J1xyXG59KVxyXG5leHBvcnQgY2xhc3MgVGhlbWVDaGFuZ2VyU2VydmljZSB7XHJcblxyXG4gICAgcHJpdmF0ZSByZWFkb25seSBkb2N1bWVudCA9IGluamVjdChET0NVTUVOVCk7XHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IGxvY2FsU3RvcmFnZU1hbmFnZXIgPSBpbmplY3QoTG9jYWxTdG9yYWdlTWFuYWdlcik7XHJcblxyXG4gICAgcHVibGljIGxvYWRUaGVtZSh0aGVtZTogVGhlbWUpIHtcclxuICAgICAgICBjb25zdCBjc3NGaWxlVGhlbWUgPSBgJHt0aGVtZX0uY3NzYDtcclxuICAgICAgICBjb25zdCBjc3NMaW5rRWxlbWVudCA9IHRoaXMuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NsaWVudC10aGVtZScpIGFzIEhUTUxMaW5rRWxlbWVudDtcclxuICAgICAgICB0aGlzLmxvY2FsU3RvcmFnZU1hbmFnZXIuc2V0PFRoZW1lPihTdG9yYWdlLlNFTEVDVEVEX1RIRU1FLCB0aGVtZSk7XHJcblxyXG4gICAgICAgIGlmIChjc3NMaW5rRWxlbWVudCkge1xyXG4gICAgICAgICAgICBjc3NMaW5rRWxlbWVudC5ocmVmID0gY3NzRmlsZVRoZW1lO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBuZXdDc3NMaW5rRWxlbWVudCA9IHRoaXMuZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGluaycpO1xyXG4gICAgICAgIG5ld0Nzc0xpbmtFbGVtZW50LmlkID0gJ2NsaWVudC10aGVtZSc7XHJcbiAgICAgICAgbmV3Q3NzTGlua0VsZW1lbnQudHlwZSA9ICd0ZXh0L2Nzcyc7XHJcbiAgICAgICAgbmV3Q3NzTGlua0VsZW1lbnQucmVsID0gJ3N0eWxlc2hlZXQnO1xyXG4gICAgICAgIG5ld0Nzc0xpbmtFbGVtZW50LmhyZWYgPSBjc3NGaWxlVGhlbWUgYXMgc3RyaW5nO1xyXG4gICAgICAgIHRoaXMuZG9jdW1lbnQuaGVhZD8uYXBwZW5kQ2hpbGQobmV3Q3NzTGlua0VsZW1lbnQpO1xyXG4gICAgfVxyXG59Il19