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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9jYWwtc3RvcmFnZS1tYW5hZ2VyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY29tcG9uZW50cy9zcmMvbGliL3V0aWxzL2xvY2FsLXN0b3JhZ2UtbWFuYWdlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBYyxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7O0FBSzNDLE1BQU0sT0FBTyxtQkFBbUI7SUFIaEM7UUFLWSxlQUFVLEdBQUcsSUFBSSxPQUFPLEVBQVUsQ0FBQztLQWdDOUM7SUE5QkcsWUFBWTtRQUNSLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUMxQyxDQUFDO0lBRUQsR0FBRyxDQUFJLElBQVksRUFBRSxLQUFRO1FBQ3pCLE1BQU0sYUFBYSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDOUMsTUFBTSxhQUFhLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUM1QyxNQUFNLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxJQUFJLGFBQWEsRUFBRSxFQUFFLGFBQWEsQ0FBQyxDQUFDO1FBQ2hFLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ3BDLENBQUM7SUFFRCxHQUFHLENBQUksSUFBWTtRQUNmLE1BQU0sYUFBYSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDOUMsTUFBTSxLQUFLLEdBQUcsTUFBTSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsSUFBSSxhQUFhLEVBQUUsQ0FBQyxDQUFDO1FBQy9ELElBQUksQ0FBQyxDQUFDLEtBQUssRUFBRTtZQUNULE1BQU0sV0FBVyxHQUFNLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDekMsT0FBTyxXQUFXLENBQUM7U0FDdEI7UUFDRCxPQUFPLElBQUksQ0FBQztJQUNoQixDQUFDO0lBRUQsTUFBTSxDQUFDLElBQVk7UUFDZixNQUFNLGFBQWEsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzlDLE1BQU0sQ0FBQyxZQUFZLENBQUMsVUFBVSxDQUFDLElBQUksYUFBYSxFQUFFLENBQUMsQ0FBQztRQUNwRCxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUNwQyxDQUFDO0lBRU8sWUFBWSxDQUFDLElBQVk7UUFDN0IsT0FBTyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxHQUFHLENBQUMsQ0FBQyxPQUFPLENBQUMsV0FBVyxFQUFFLEVBQUUsQ0FBQyxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ25GLENBQUM7O2dIQWpDUSxtQkFBbUI7b0hBQW5CLG1CQUFtQixjQUZoQixNQUFNOzJGQUVULG1CQUFtQjtrQkFIL0IsVUFBVTttQkFBQztvQkFDUixVQUFVLEVBQUUsTUFBTTtpQkFDckIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgU3ViamVjdCB9IGZyb20gXCJyeGpzXCI7XHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcbiAgICBwcm92aWRlZEluOiAncm9vdCdcclxufSlcclxuZXhwb3J0IGNsYXNzIExvY2FsU3RvcmFnZU1hbmFnZXIge1xyXG5cclxuICAgIHByaXZhdGUgc3RvcmFnZVN1YiA9IG5ldyBTdWJqZWN0PHN0cmluZz4oKTtcclxuXHJcbiAgICB3YXRjaFN0b3JhZ2UoKTogT2JzZXJ2YWJsZTxzdHJpbmc+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5zdG9yYWdlU3ViLmFzT2JzZXJ2YWJsZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHNldDxUPihuYW1lOiBzdHJpbmcsIHZhbHVlOiBUKTogdm9pZCB7XHJcbiAgICAgICAgY29uc3Qgc2FuaXRpemVkTmFtZSA9IHRoaXMuc2FuaXRpemVOYW1lKG5hbWUpO1xyXG4gICAgICAgIGNvbnN0IHN0cmluZ2Z5VmFsdWUgPSBKU09OLnN0cmluZ2lmeSh2YWx1ZSk7XHJcbiAgICAgICAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKGAjJHtzYW5pdGl6ZWROYW1lfWAsIHN0cmluZ2Z5VmFsdWUpO1xyXG4gICAgICAgIHRoaXMuc3RvcmFnZVN1Yi5uZXh0KCdjaGFuZ2VkJyk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGdldDxUPihuYW1lOiBzdHJpbmcpOiBUIHwgbnVsbCB7XHJcbiAgICAgICAgY29uc3Qgc2FuaXRpemVkTmFtZSA9IHRoaXMuc2FuaXRpemVOYW1lKG5hbWUpO1xyXG4gICAgICAgIGNvbnN0IHZhbHVlID0gd2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKGAjJHtzYW5pdGl6ZWROYW1lfWApO1xyXG4gICAgICAgIGlmICghIXZhbHVlKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHBhcnNlZFZhbHVlOiBUID0gSlNPTi5wYXJzZSh2YWx1ZSk7XHJcbiAgICAgICAgICAgIHJldHVybiBwYXJzZWRWYWx1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHJlbW92ZShuYW1lOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgICAgICBjb25zdCBzYW5pdGl6ZWROYW1lID0gdGhpcy5zYW5pdGl6ZU5hbWUobmFtZSk7XHJcbiAgICAgICAgd2luZG93LmxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKGAjJHtzYW5pdGl6ZWROYW1lfWApO1xyXG4gICAgICAgIHRoaXMuc3RvcmFnZVN1Yi5uZXh0KCdjaGFuZ2VkJyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzYW5pdGl6ZU5hbWUobmFtZTogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gbmFtZS50cmltKCkucmVwbGFjZSgvXFxzL2dpLCAnXycpLnJlcGxhY2UoL1teXFx3XFxzXS9naSwgJycpLnRvVXBwZXJDYXNlKCk7XHJcbiAgICB9XHJcbn0iXX0=