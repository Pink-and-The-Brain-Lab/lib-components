import { DOCUMENT } from "@angular/common";
import { Injectable, inject } from "@angular/core";
import { LocalStorageManager, Storage, Theme } from "../../index";

@Injectable({
    providedIn: 'root'
})
export class ThemeChangerService {

    private readonly document = inject(DOCUMENT);
    private readonly localStorageManager = inject(LocalStorageManager);

    public loadTheme(theme: Theme) {
        const cssFileTheme = `${theme}.css`;
        const cssLinkElement = this.document.getElementById('client-theme') as HTMLLinkElement;
        this.localStorageManager.set<Theme>(Storage.SELECTED_THEME, theme);

        if (cssLinkElement) {
            cssLinkElement.href = cssFileTheme;
            return;
        }

        const newCssLinkElement = this.document.createElement('link');
        newCssLinkElement.id = 'client-theme';
        newCssLinkElement.type = 'text/css';
        newCssLinkElement.rel = 'stylesheet';
        newCssLinkElement.href = cssFileTheme as string;
        this.document.head?.appendChild(newCssLinkElement);
    }
}