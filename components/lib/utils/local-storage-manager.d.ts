import { Observable } from "rxjs";
import * as i0 from "@angular/core";
export declare class LocalStorageManager {
    private storageSub;
    watchStorage(): Observable<string>;
    set<T>(name: string, value: T): void;
    get<T>(name: string): T | null;
    remove(name: string): void;
    private sanitizeName;
    static ɵfac: i0.ɵɵFactoryDeclaration<LocalStorageManager, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<LocalStorageManager>;
}
