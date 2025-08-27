
export class Country {
    name: string;
    dial_code: string;
    code: string;
    latitude: number;
    longitude: number;

    constructor(name = '', dial_code = '', code = '', latitude = 0, longitude = 0) {
        this.name = name;
        this.dial_code = dial_code;
        this.code = code;
        this.latitude = latitude;
        this.longitude = longitude;
    }

    get flag(): string {
        return this.code.toLowerCase();
    }

}