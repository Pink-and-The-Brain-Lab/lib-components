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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.10", ngImport: i0, type: LocalStorageManager, deps: [], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "18.2.10", ngImport: i0, type: LocalStorageManager, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.10", ngImport: i0, type: LocalStorageManager, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9jYWwtc3RvcmFnZS1tYW5hZ2VyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY29tcG9uZW50cy9zcmMvbGliL3V0aWxzL2xvY2FsLXN0b3JhZ2UtbWFuYWdlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBYyxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7O0FBSzNDLE1BQU0sT0FBTyxtQkFBbUI7SUFIaEM7UUFLWSxlQUFVLEdBQUcsSUFBSSxPQUFPLEVBQVUsQ0FBQztLQWdDOUM7SUE5QkcsWUFBWTtRQUNSLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUMxQyxDQUFDO0lBRUQsR0FBRyxDQUFJLElBQVksRUFBRSxLQUFRO1FBQ3pCLE1BQU0sYUFBYSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDOUMsTUFBTSxhQUFhLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUM1QyxNQUFNLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxJQUFJLGFBQWEsRUFBRSxFQUFFLGFBQWEsQ0FBQyxDQUFDO1FBQ2hFLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ3BDLENBQUM7SUFFRCxHQUFHLENBQUksSUFBWTtRQUNmLE1BQU0sYUFBYSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDOUMsTUFBTSxLQUFLLEdBQUcsTUFBTSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsSUFBSSxhQUFhLEVBQUUsQ0FBQyxDQUFDO1FBQy9ELElBQUksQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO1lBQ1YsTUFBTSxXQUFXLEdBQU0sSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUN6QyxPQUFPLFdBQVcsQ0FBQztRQUN2QixDQUFDO1FBQ0QsT0FBTyxJQUFJLENBQUM7SUFDaEIsQ0FBQztJQUVELE1BQU0sQ0FBQyxJQUFZO1FBQ2YsTUFBTSxhQUFhLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUM5QyxNQUFNLENBQUMsWUFBWSxDQUFDLFVBQVUsQ0FBQyxJQUFJLGFBQWEsRUFBRSxDQUFDLENBQUM7UUFDcEQsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDcEMsQ0FBQztJQUVPLFlBQVksQ0FBQyxJQUFZO1FBQzdCLE9BQU8sSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsR0FBRyxDQUFDLENBQUMsT0FBTyxDQUFDLFdBQVcsRUFBRSxFQUFFLENBQUMsQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUNuRixDQUFDOytHQWpDUSxtQkFBbUI7bUhBQW5CLG1CQUFtQixjQUZoQixNQUFNOzs0RkFFVCxtQkFBbUI7a0JBSC9CLFVBQVU7bUJBQUM7b0JBQ1IsVUFBVSxFQUFFLE1BQU07aUJBQ3JCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUsIFN1YmplY3QgfSBmcm9tIFwicnhqc1wiO1xyXG5cclxuQEluamVjdGFibGUoe1xyXG4gICAgcHJvdmlkZWRJbjogJ3Jvb3QnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBMb2NhbFN0b3JhZ2VNYW5hZ2VyIHtcclxuXHJcbiAgICBwcml2YXRlIHN0b3JhZ2VTdWIgPSBuZXcgU3ViamVjdDxzdHJpbmc+KCk7XHJcblxyXG4gICAgd2F0Y2hTdG9yYWdlKCk6IE9ic2VydmFibGU8c3RyaW5nPiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RvcmFnZVN1Yi5hc09ic2VydmFibGUoKTtcclxuICAgIH1cclxuXHJcbiAgICBzZXQ8VD4obmFtZTogc3RyaW5nLCB2YWx1ZTogVCk6IHZvaWQge1xyXG4gICAgICAgIGNvbnN0IHNhbml0aXplZE5hbWUgPSB0aGlzLnNhbml0aXplTmFtZShuYW1lKTtcclxuICAgICAgICBjb25zdCBzdHJpbmdmeVZhbHVlID0gSlNPTi5zdHJpbmdpZnkodmFsdWUpO1xyXG4gICAgICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShgIyR7c2FuaXRpemVkTmFtZX1gLCBzdHJpbmdmeVZhbHVlKTtcclxuICAgICAgICB0aGlzLnN0b3JhZ2VTdWIubmV4dCgnY2hhbmdlZCcpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBnZXQ8VD4obmFtZTogc3RyaW5nKTogVCB8IG51bGwge1xyXG4gICAgICAgIGNvbnN0IHNhbml0aXplZE5hbWUgPSB0aGlzLnNhbml0aXplTmFtZShuYW1lKTtcclxuICAgICAgICBjb25zdCB2YWx1ZSA9IHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShgIyR7c2FuaXRpemVkTmFtZX1gKTtcclxuICAgICAgICBpZiAoISF2YWx1ZSkge1xyXG4gICAgICAgICAgICBjb25zdCBwYXJzZWRWYWx1ZTogVCA9IEpTT04ucGFyc2UodmFsdWUpO1xyXG4gICAgICAgICAgICByZXR1cm4gcGFyc2VkVmFsdWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICByZW1vdmUobmFtZTogc3RyaW5nKTogdm9pZCB7XHJcbiAgICAgICAgY29uc3Qgc2FuaXRpemVkTmFtZSA9IHRoaXMuc2FuaXRpemVOYW1lKG5hbWUpO1xyXG4gICAgICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShgIyR7c2FuaXRpemVkTmFtZX1gKTtcclxuICAgICAgICB0aGlzLnN0b3JhZ2VTdWIubmV4dCgnY2hhbmdlZCcpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc2FuaXRpemVOYW1lKG5hbWU6IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIG5hbWUudHJpbSgpLnJlcGxhY2UoL1xccy9naSwgJ18nKS5yZXBsYWNlKC9bXlxcd1xcc10vZ2ksICcnKS50b1VwcGVyQ2FzZSgpO1xyXG4gICAgfVxyXG59Il19