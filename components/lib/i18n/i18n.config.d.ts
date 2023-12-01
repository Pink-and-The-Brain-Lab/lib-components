import { HttpClient } from "@angular/common/http";
import { TranslateLoader } from "@ngx-translate/core";
import { TranslateHttpLoader } from "@ngx-translate/http-loader";
export declare function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader;
export declare const I18N_CONFIG: {
    defaultLanguage: string;
    loader: {
        provide: typeof TranslateLoader;
        useFactory: typeof HttpLoaderFactory;
        deps: (typeof HttpClient)[];
    };
};
