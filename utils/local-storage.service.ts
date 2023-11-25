export abstract class LocalStorageService {

    static set<T>(name: string, value: T): void {
        const sanitizedName = LocalStorageService.sanitizeName(name);
        const stringfyValue = JSON.stringify(value);
        window.localStorage.setItem(`#${sanitizedName}`, stringfyValue);
    }
    
    static get<T>(name: string): T {
        const sanitizedName = LocalStorageService.sanitizeName(name);
        const value = window.localStorage.getItem(`#${sanitizedName}`) || '';
        const parsedValue: T = JSON.parse(value);
        return parsedValue;
    }
    
    static remove(name: string): void {
        const sanitizedName = LocalStorageService.sanitizeName(name);
        window.localStorage.removeItem(`#${sanitizedName}`);
    }

    static sanitizeName(name: string): string {
        return name.trim().replace(/\s/gi, '_').replace(/[^\w\s]/gi, '').toUpperCase();
    }
}