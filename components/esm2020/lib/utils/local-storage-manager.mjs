import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import * as i0 from "@angular/core";
export class LocalStorageManager {
    constructor() {
        this.storageSub = new Subject();
    }
    watchStorage() {
        return this.storageSub.asObservable();
    }
    set(name, value) {
        const sanitizedName = this.sanitizeName(name);
        const stringfyValue = JSON.stringify(value);
        window.localStorage.setItem(`#${sanitizedName}`, stringfyValue);
        this.storageSub.next('changed');
    }
    get(name) {
        const sanitizedName = this.sanitizeName(name);
        const value = window.localStorage.getItem(`#${sanitizedName}`);
        if (!!value) {
            const parsedValue = JSON.parse(value);
            return parsedValue;
        }
        return null;
    }
    remove(name) {
        const sanitizedName = this.sanitizeName(name);
        window.localStorage.removeItem(`#${sanitizedName}`);
        this.storageSub.next('changed');
    }
    sanitizeName(name) {
        return name.trim().replace(/\s/gi, '_').replace(/[^\w\s]/gi, '').toUpperCase();
    }
}
LocalStorageManager.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: LocalStorageManager, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
LocalStorageManager.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: LocalStorageManager, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: LocalStorageManager, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9jYWwtc3RvcmFnZS1tYW5hZ2VyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY29tcG9uZW50cy9zcmMvbGliL3V0aWxzL2xvY2FsLXN0b3JhZ2UtbWFuYWdlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBYyxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7O0FBSzNDLE1BQU0sT0FBZ0IsbUJBQW1CO0lBSHpDO1FBS1ksZUFBVSxHQUFHLElBQUksT0FBTyxFQUFVLENBQUM7S0FnQzlDO0lBOUJHLFlBQVk7UUFDUixPQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDMUMsQ0FBQztJQUVELEdBQUcsQ0FBSSxJQUFZLEVBQUUsS0FBUTtRQUN6QixNQUFNLGFBQWEsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzlDLE1BQU0sYUFBYSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDNUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsSUFBSSxhQUFhLEVBQUUsRUFBRSxhQUFhLENBQUMsQ0FBQztRQUNoRSxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUNwQyxDQUFDO0lBRUQsR0FBRyxDQUFJLElBQVk7UUFDZixNQUFNLGFBQWEsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzlDLE1BQU0sS0FBSyxHQUFHLE1BQU0sQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLElBQUksYUFBYSxFQUFFLENBQUMsQ0FBQztRQUMvRCxJQUFJLENBQUMsQ0FBQyxLQUFLLEVBQUU7WUFDVCxNQUFNLFdBQVcsR0FBTSxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ3pDLE9BQU8sV0FBVyxDQUFDO1NBQ3RCO1FBQ0QsT0FBTyxJQUFJLENBQUM7SUFDaEIsQ0FBQztJQUVELE1BQU0sQ0FBQyxJQUFZO1FBQ2YsTUFBTSxhQUFhLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUM5QyxNQUFNLENBQUMsWUFBWSxDQUFDLFVBQVUsQ0FBQyxJQUFJLGFBQWEsRUFBRSxDQUFDLENBQUM7UUFDcEQsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDcEMsQ0FBQztJQUVPLFlBQVksQ0FBQyxJQUFZO1FBQzdCLE9BQU8sSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsR0FBRyxDQUFDLENBQUMsT0FBTyxDQUFDLFdBQVcsRUFBRSxFQUFFLENBQUMsQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUNuRixDQUFDOztnSEFqQ2lCLG1CQUFtQjtvSEFBbkIsbUJBQW1CLGNBRnpCLE1BQU07MkZBRUEsbUJBQW1CO2tCQUh4QyxVQUFVO21CQUFDO29CQUNSLFVBQVUsRUFBRSxNQUFNO2lCQUNyQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBTdWJqZWN0IH0gZnJvbSBcInJ4anNcIjtcclxuXHJcbkBJbmplY3RhYmxlKHtcclxuICAgIHByb3ZpZGVkSW46ICdyb290J1xyXG59KVxyXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgTG9jYWxTdG9yYWdlTWFuYWdlciB7XHJcblxyXG4gICAgcHJpdmF0ZSBzdG9yYWdlU3ViID0gbmV3IFN1YmplY3Q8c3RyaW5nPigpO1xyXG5cclxuICAgIHdhdGNoU3RvcmFnZSgpOiBPYnNlcnZhYmxlPHN0cmluZz4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnN0b3JhZ2VTdWIuYXNPYnNlcnZhYmxlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0PFQ+KG5hbWU6IHN0cmluZywgdmFsdWU6IFQpOiB2b2lkIHtcclxuICAgICAgICBjb25zdCBzYW5pdGl6ZWROYW1lID0gdGhpcy5zYW5pdGl6ZU5hbWUobmFtZSk7XHJcbiAgICAgICAgY29uc3Qgc3RyaW5nZnlWYWx1ZSA9IEpTT04uc3RyaW5naWZ5KHZhbHVlKTtcclxuICAgICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oYCMke3Nhbml0aXplZE5hbWV9YCwgc3RyaW5nZnlWYWx1ZSk7XHJcbiAgICAgICAgdGhpcy5zdG9yYWdlU3ViLm5leHQoJ2NoYW5nZWQnKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgZ2V0PFQ+KG5hbWU6IHN0cmluZyk6IFQgfCBudWxsIHtcclxuICAgICAgICBjb25zdCBzYW5pdGl6ZWROYW1lID0gdGhpcy5zYW5pdGl6ZU5hbWUobmFtZSk7XHJcbiAgICAgICAgY29uc3QgdmFsdWUgPSB3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oYCMke3Nhbml0aXplZE5hbWV9YCk7XHJcbiAgICAgICAgaWYgKCEhdmFsdWUpIHtcclxuICAgICAgICAgICAgY29uc3QgcGFyc2VkVmFsdWU6IFQgPSBKU09OLnBhcnNlKHZhbHVlKTtcclxuICAgICAgICAgICAgcmV0dXJuIHBhcnNlZFZhbHVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgcmVtb3ZlKG5hbWU6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgICAgIGNvbnN0IHNhbml0aXplZE5hbWUgPSB0aGlzLnNhbml0aXplTmFtZShuYW1lKTtcclxuICAgICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oYCMke3Nhbml0aXplZE5hbWV9YCk7XHJcbiAgICAgICAgdGhpcy5zdG9yYWdlU3ViLm5leHQoJ2NoYW5nZWQnKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHNhbml0aXplTmFtZShuYW1lOiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiBuYW1lLnRyaW0oKS5yZXBsYWNlKC9cXHMvZ2ksICdfJykucmVwbGFjZSgvW15cXHdcXHNdL2dpLCAnJykudG9VcHBlckNhc2UoKTtcclxuICAgIH1cclxufSJdfQ==