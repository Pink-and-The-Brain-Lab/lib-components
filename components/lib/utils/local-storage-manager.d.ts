export declare abstract class LocalStorageManager {
    static set<T>(name: string, value: T): void;
    static get<T>(name: string): T | null;
    static remove(name: string): void;
    static sanitizeName(name: string): string;
}
