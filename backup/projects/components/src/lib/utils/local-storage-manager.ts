import { Injectable } from "@angular/core";
import { Observable, Subject } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class LocalStorageManager {

    private storageSub = new Subject<string>();

    watchStorage(): Observable<string> {
        return this.storageSub.asObservable();
    }

    set<T>(name: string, value: T): void {
        const sanitizedName = this.sanitizeName(name);
        const stringfyValue = JSON.stringify(value);
        window.localStorage.setItem(`#${sanitizedName}`, stringfyValue);
        this.storageSub.next('changed');
    }
    
    get<T>(name: string): T | null {
        const sanitizedName = this.sanitizeName(name);
        const value = window.localStorage.getItem(`#${sanitizedName}`);
        if (!!value) {
            const parsedValue: T = JSON.parse(value);
            return parsedValue;
        }
        return null;
    }
    
    remove(name: string): void {
        const sanitizedName = this.sanitizeName(name);
        window.localStorage.removeItem(`#${sanitizedName}`);
        this.storageSub.next('changed');
    }

    private sanitizeName(name: string): string {
        return name.trim().replace(/\s/gi, '_').replace(/[^\w\s]/gi, '').toUpperCase();
    }
}