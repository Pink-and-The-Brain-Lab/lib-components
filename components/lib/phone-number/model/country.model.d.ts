export declare class Country {
    name: string;
    dial_code: string;
    code: string;
    latitude: number;
    longitude: number;
    constructor(name?: string, dial_code?: string, code?: string, latitude?: number, longitude?: number);
    get flag(): string;
}
