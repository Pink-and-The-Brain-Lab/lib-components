import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { Action, State, StateToken } from "@ngxs/store";
import { LanguageChangeAction } from '../actions/language-change.action';
import * as i0 from "@angular/core";
const STATE_TOKEN = new StateToken('languages');
let LanguageChangeState = class LanguageChangeState {
    constructor() { }
    updateProfile(ctx, action) {
        ctx.setState({
            ...action.control
        });
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.10", ngImport: i0, type: LanguageChangeState, deps: [], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "18.2.10", ngImport: i0, type: LanguageChangeState }); }
};
__decorate([
    Action(LanguageChangeAction)
], LanguageChangeState.prototype, "updateProfile", null);
LanguageChangeState = __decorate([
    State({
        name: STATE_TOKEN,
        defaults: {
            language: 'en',
        }
    })
], LanguageChangeState);
export { LanguageChangeState };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.10", ngImport: i0, type: LanguageChangeState, decorators: [{
            type: Injectable
        }], ctorParameters: () => [], propDecorators: { updateProfile: [] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGFuZ3VhZ2UtY2hhbmdlLnN0YXRlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY29tcG9uZW50cy9zcmMvbGliL3N0YXRlcy9zdGF0ZS9sYW5ndWFnZS1jaGFuZ2Uuc3RhdGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQWdCLFVBQVUsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUV0RSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQzs7QUFFekUsTUFBTSxXQUFXLEdBQUcsSUFBSSxVQUFVLENBQWtCLFdBQVcsQ0FBQyxDQUFDO0FBUzFELElBQU0sbUJBQW1CLEdBQXpCLE1BQU0sbUJBQW1CO0lBRTVCLGdCQUFnQixDQUFDO0lBR2pCLGFBQWEsQ0FBQyxHQUFrQyxFQUFFLE1BQTRCO1FBQzFFLEdBQUcsQ0FBQyxRQUFRLENBQUM7WUFDVCxHQUFHLE1BQU0sQ0FBQyxPQUFPO1NBQ3BCLENBQUMsQ0FBQztJQUNQLENBQUM7K0dBVFEsbUJBQW1CO21IQUFuQixtQkFBbUI7O0FBSzVCO0lBREMsTUFBTSxDQUFDLG9CQUFvQixDQUFDO3dEQUs1QjtBQVRRLG1CQUFtQjtJQVAvQixLQUFLLENBQWtCO1FBQ3BCLElBQUksRUFBRSxXQUFXO1FBQ2pCLFFBQVEsRUFBRTtZQUNOLFFBQVEsRUFBRSxJQUFJO1NBQ2pCO0tBQ0osQ0FBQztHQUVXLG1CQUFtQixDQVUvQjs7NEZBVlksbUJBQW1CO2tCQUQvQixVQUFVO3dEQU1QLGFBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEFjdGlvbiwgU3RhdGUsIFN0YXRlQ29udGV4dCwgU3RhdGVUb2tlbiB9IGZyb20gXCJAbmd4cy9zdG9yZVwiO1xyXG5pbXBvcnQgeyBJTGFuZ3VhZ2VDaGFuZ2UgfSBmcm9tICcuLi9tb2RlbHMvbGFuZ3VhZ2UtY2hhbmdlLmludGVyZmFjZSc7XHJcbmltcG9ydCB7IExhbmd1YWdlQ2hhbmdlQWN0aW9uIH0gZnJvbSAnLi4vYWN0aW9ucy9sYW5ndWFnZS1jaGFuZ2UuYWN0aW9uJztcclxuXHJcbmNvbnN0IFNUQVRFX1RPS0VOID0gbmV3IFN0YXRlVG9rZW48SUxhbmd1YWdlQ2hhbmdlPignbGFuZ3VhZ2VzJyk7XHJcblxyXG5AU3RhdGU8SUxhbmd1YWdlQ2hhbmdlPih7XHJcbiAgICBuYW1lOiBTVEFURV9UT0tFTixcclxuICAgIGRlZmF1bHRzOiB7XHJcbiAgICAgICAgbGFuZ3VhZ2U6ICdlbicsXHJcbiAgICB9XHJcbn0pXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIExhbmd1YWdlQ2hhbmdlU3RhdGUge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yICgpIHt9XHJcblxyXG4gICAgQEFjdGlvbihMYW5ndWFnZUNoYW5nZUFjdGlvbilcclxuICAgIHVwZGF0ZVByb2ZpbGUoY3R4OiBTdGF0ZUNvbnRleHQ8SUxhbmd1YWdlQ2hhbmdlPiwgYWN0aW9uOiBMYW5ndWFnZUNoYW5nZUFjdGlvbik6IHZvaWQge1xyXG4gICAgICAgIGN0eC5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIC4uLmFjdGlvbi5jb250cm9sXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuIl19