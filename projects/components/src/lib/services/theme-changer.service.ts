import { DOCUMENT } from "@angular/common";
import { Injectable, inject } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class ThemeChangerService {

    private readonly document = inject(DOCUMENT);

    public loadTheme(theme: string) {
        const cssFileTheme = `${theme}.css`;
        const cssLinkElement = this.document.getElementById('client-theme') as HTMLLinkElement;

        if (cssLinkElement) {
            cssLinkElement.href = cssFileTheme;
            return;
        }

        const headElement = this.document.getElementsByTagName('head')[0];
        const newCssLinkElement = this.document.createElement('link');
        newCssLinkElement.id = 'client-theme';
        newCssLinkElement.type = 'text/css';
        newCssLinkElement.rel = 'stylesheet';
        newCssLinkElement.href = cssFileTheme as string;
        headElement.appendChild(newCssLinkElement);
    }
}