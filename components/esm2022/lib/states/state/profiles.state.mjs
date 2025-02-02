import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { Action, State, StateToken } from "@ngxs/store";
import { ProfileAction } from '../actions/profile.action';
import * as i0 from "@angular/core";
const STATE_TOKEN = new StateToken('profiles');
let ProfilesState = class ProfilesState {
    constructor() { }
    profiles(ctx, action) {
        ctx.setState(action.profiles);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.10", ngImport: i0, type: ProfilesState, deps: [], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "18.2.10", ngImport: i0, type: ProfilesState }); }
};
__decorate([
    Action(ProfileAction)
], ProfilesState.prototype, "profiles", null);
ProfilesState = __decorate([
    State({
        name: STATE_TOKEN,
        defaults: []
    })
], ProfilesState);
export { ProfilesState };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.10", ngImport: i0, type: ProfilesState, decorators: [{
            type: Injectable
        }], ctorParameters: () => [], propDecorators: { profiles: [] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZmlsZXMuc3RhdGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jb21wb25lbnRzL3NyYy9saWIvc3RhdGVzL3N0YXRlL3Byb2ZpbGVzLnN0YXRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFnQixVQUFVLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFDdEUsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDJCQUEyQixDQUFDOztBQUcxRCxNQUFNLFdBQVcsR0FBRyxJQUFJLFVBQVUsQ0FBVyxVQUFVLENBQUMsQ0FBQztBQU9sRCxJQUFNLGFBQWEsR0FBbkIsTUFBTSxhQUFhO0lBRXRCLGdCQUFnQixDQUFDO0lBR2pCLFFBQVEsQ0FBQyxHQUE2QixFQUFFLE1BQXFCO1FBQ3pELEdBQUcsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ2xDLENBQUM7K0dBUFEsYUFBYTttSEFBYixhQUFhOztBQUt0QjtJQURDLE1BQU0sQ0FBQyxhQUFhLENBQUM7NkNBR3JCO0FBUFEsYUFBYTtJQUx6QixLQUFLLENBQWE7UUFDZixJQUFJLEVBQUUsV0FBVztRQUNqQixRQUFRLEVBQUUsRUFBRTtLQUNmLENBQUM7R0FFVyxhQUFhLENBUXpCOzs0RkFSWSxhQUFhO2tCQUR6QixVQUFVO3dEQU1QLFFBQVEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEFjdGlvbiwgU3RhdGUsIFN0YXRlQ29udGV4dCwgU3RhdGVUb2tlbiB9IGZyb20gXCJAbmd4cy9zdG9yZVwiO1xyXG5pbXBvcnQgeyBQcm9maWxlQWN0aW9uIH0gZnJvbSAnLi4vYWN0aW9ucy9wcm9maWxlLmFjdGlvbic7XHJcbmltcG9ydCB7IElQcm9maWxlIH0gZnJvbSAnLi4vbW9kZWxzL3Byb2ZpbGUuaW50ZXJmYWNlJztcclxuXHJcbmNvbnN0IFNUQVRFX1RPS0VOID0gbmV3IFN0YXRlVG9rZW48SVByb2ZpbGU+KCdwcm9maWxlcycpO1xyXG5cclxuQFN0YXRlPElQcm9maWxlW10+KHtcclxuICAgIG5hbWU6IFNUQVRFX1RPS0VOLFxyXG4gICAgZGVmYXVsdHM6IFtdXHJcbn0pXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIFByb2ZpbGVzU3RhdGUge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yICgpIHt9XHJcblxyXG4gICAgQEFjdGlvbihQcm9maWxlQWN0aW9uKVxyXG4gICAgcHJvZmlsZXMoY3R4OiBTdGF0ZUNvbnRleHQ8SVByb2ZpbGVbXT4sIGFjdGlvbjogUHJvZmlsZUFjdGlvbik6IHZvaWQge1xyXG4gICAgICAgIGN0eC5zZXRTdGF0ZShhY3Rpb24ucHJvZmlsZXMpO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==