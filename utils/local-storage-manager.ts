export abstract class LocalStorageManager {

    static set<T>(name: string, value: T): void {
        LocalStorageManager.remove(name);
        const sanitizedName = LocalStorageManager.sanitizeName(name);
        const stringfyValue = JSON.stringify(value);
        window.localStorage.setItem(`#${sanitizedName}`, stringfyValue);
    }
    
    static get<T>(name: string): T | null {
        const sanitizedName = LocalStorageManager.sanitizeName(name);
        const value = window.localStorage.getItem(`#${sanitizedName}`);
        if (!!value) {
            const parsedValue: T = JSON.parse(value);
            return parsedValue;
        }
        return null;
    }
    
    static remove(name: string): void {
        const sanitizedName = LocalStorageManager.sanitizeName(name);
        window.localStorage.removeItem(`#${sanitizedName}`);
    }

    static sanitizeName(name: string): string {
        return name.trim().replace(/\s/gi, '_').replace(/[^\w\s]/gi, '').toUpperCase();
    }
}