import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { Action, Selector, State, StateToken } from "@ngxs/store";
import { DashboardVisualizationControlAction } from '../actions/dashboard-visualization-control.action';
import * as i0 from "@angular/core";
const STATE_TOKEN = new StateToken('dashboard');
let DashboardVisualizationControlState = class DashboardVisualizationControlState {
    constructor() { }
    updateProfile(ctx, action) {
        ctx.setState({
            ...action.control
        });
    }
    static showDashboard(state) {
        return state;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.10", ngImport: i0, type: DashboardVisualizationControlState, deps: [], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "18.2.10", ngImport: i0, type: DashboardVisualizationControlState }); }
};
__decorate([
    Action(DashboardVisualizationControlAction)
], DashboardVisualizationControlState.prototype, "updateProfile", null);
__decorate([
    Selector()
], DashboardVisualizationControlState, "showDashboard", null);
DashboardVisualizationControlState = __decorate([
    State({
        name: STATE_TOKEN,
        defaults: {
            showDashboard: true,
        }
    })
], DashboardVisualizationControlState);
export { DashboardVisualizationControlState };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.10", ngImport: i0, type: DashboardVisualizationControlState, decorators: [{
            type: Injectable
        }], ctorParameters: () => [], propDecorators: { updateProfile: [] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGFzaGJvYXJkLXZpc3VhbGl6YXRpb24tY29udHJvbC5zdGF0ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NvbXBvbmVudHMvc3JjL2xpYi9zdGF0ZXMvc3RhdGUvZGFzaGJvYXJkLXZpc3VhbGl6YXRpb24tY29udHJvbC5zdGF0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQWdCLFVBQVUsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUVoRixPQUFPLEVBQUUsbUNBQW1DLEVBQUUsTUFBTSxtREFBbUQsQ0FBQzs7QUFFeEcsTUFBTSxXQUFXLEdBQUcsSUFBSSxVQUFVLENBQWlDLFdBQVcsQ0FBQyxDQUFDO0FBU3pFLElBQU0sa0NBQWtDLEdBQXhDLE1BQU0sa0NBQWtDO0lBRTNDLGdCQUFnQixDQUFDO0lBR2pCLGFBQWEsQ0FBQyxHQUFpRCxFQUFFLE1BQTJDO1FBQ3hHLEdBQUcsQ0FBQyxRQUFRLENBQUM7WUFDVCxHQUFHLE1BQU0sQ0FBQyxPQUFPO1NBQ3BCLENBQUMsQ0FBQztJQUNQLENBQUM7SUFHTSxBQUFQLE1BQU0sQ0FBQyxhQUFhLENBQUMsS0FBcUM7UUFDdEQsT0FBTyxLQUFLLENBQUM7SUFDakIsQ0FBQzsrR0FkUSxrQ0FBa0M7bUhBQWxDLGtDQUFrQzs7QUFLM0M7SUFEQyxNQUFNLENBQUMsbUNBQW1DLENBQUM7dUVBSzNDO0FBR007SUFETixRQUFRLEVBQUU7NkRBR1Y7QUFkUSxrQ0FBa0M7SUFQOUMsS0FBSyxDQUFpQztRQUNuQyxJQUFJLEVBQUUsV0FBVztRQUNqQixRQUFRLEVBQUU7WUFDTixhQUFhLEVBQUUsSUFBSTtTQUN0QjtLQUNKLENBQUM7R0FFVyxrQ0FBa0MsQ0FlOUM7OzRGQWZZLGtDQUFrQztrQkFEOUMsVUFBVTt3REFNUCxhQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBBY3Rpb24sIFNlbGVjdG9yLCBTdGF0ZSwgU3RhdGVDb250ZXh0LCBTdGF0ZVRva2VuIH0gZnJvbSBcIkBuZ3hzL3N0b3JlXCI7XHJcbmltcG9ydCB7IElEYXNoYm9hcmRWaXN1YWxpemF0aW9uQ29udHJvbCB9IGZyb20gJy4uL21vZGVscy9kYXNoYm9hcmQtdmlzdWFsaXphdGlvbi1jb250cm9sLmludGVyZmFjZSc7XHJcbmltcG9ydCB7IERhc2hib2FyZFZpc3VhbGl6YXRpb25Db250cm9sQWN0aW9uIH0gZnJvbSAnLi4vYWN0aW9ucy9kYXNoYm9hcmQtdmlzdWFsaXphdGlvbi1jb250cm9sLmFjdGlvbic7XHJcblxyXG5jb25zdCBTVEFURV9UT0tFTiA9IG5ldyBTdGF0ZVRva2VuPElEYXNoYm9hcmRWaXN1YWxpemF0aW9uQ29udHJvbD4oJ2Rhc2hib2FyZCcpO1xyXG5cclxuQFN0YXRlPElEYXNoYm9hcmRWaXN1YWxpemF0aW9uQ29udHJvbD4oe1xyXG4gICAgbmFtZTogU1RBVEVfVE9LRU4sXHJcbiAgICBkZWZhdWx0czoge1xyXG4gICAgICAgIHNob3dEYXNoYm9hcmQ6IHRydWUsXHJcbiAgICB9XHJcbn0pXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIERhc2hib2FyZFZpc3VhbGl6YXRpb25Db250cm9sU3RhdGUge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yICgpIHt9XHJcblxyXG4gICAgQEFjdGlvbihEYXNoYm9hcmRWaXN1YWxpemF0aW9uQ29udHJvbEFjdGlvbilcclxuICAgIHVwZGF0ZVByb2ZpbGUoY3R4OiBTdGF0ZUNvbnRleHQ8SURhc2hib2FyZFZpc3VhbGl6YXRpb25Db250cm9sPiwgYWN0aW9uOiBEYXNoYm9hcmRWaXN1YWxpemF0aW9uQ29udHJvbEFjdGlvbik6IHZvaWQge1xyXG4gICAgICAgIGN0eC5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIC4uLmFjdGlvbi5jb250cm9sXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgQFNlbGVjdG9yKClcclxuICAgIHN0YXRpYyBzaG93RGFzaGJvYXJkKHN0YXRlOiBJRGFzaGJvYXJkVmlzdWFsaXphdGlvbkNvbnRyb2wpOiBJRGFzaGJvYXJkVmlzdWFsaXphdGlvbkNvbnRyb2wge1xyXG4gICAgICAgIHJldHVybiBzdGF0ZTtcclxuICAgIH1cclxufVxyXG4iXX0=