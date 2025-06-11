import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { Action, Selector, State, StateToken } from "@ngxs/store";
import { UpdateProfileAction } from '../actions/update-profile.action';
import { Theme } from '../../utils/enums/theme';
import * as i0 from "@angular/core";
const STATE_TOKEN = new StateToken('updateProfile');
let UpdateProfileState = class UpdateProfileState {
    constructor() { }
    updateProfile(ctx, action) {
        ctx.setState({
            ...action.profile
        });
    }
    static profile(state) {
        return state;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.10", ngImport: i0, type: UpdateProfileState, deps: [], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "18.2.10", ngImport: i0, type: UpdateProfileState }); }
};
__decorate([
    Action(UpdateProfileAction)
], UpdateProfileState.prototype, "updateProfile", null);
__decorate([
    Selector()
], UpdateProfileState, "profile", null);
UpdateProfileState = __decorate([
    State({
        name: STATE_TOKEN,
        defaults: {
            email: '',
            phoneNumber: '',
            phoneNumberValidated: false,
            image: '',
            color: '',
            userName: '',
            profileName: '',
            profileType: '',
            profilePolicy: '',
            theme: Theme.DARK,
        }
    })
], UpdateProfileState);
export { UpdateProfileState };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.10", ngImport: i0, type: UpdateProfileState, decorators: [{
            type: Injectable
        }], ctorParameters: () => [], propDecorators: { updateProfile: [] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBkYXRlLXByb2ZpbGUuc3RhdGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jb21wb25lbnRzL3NyYy9saWIvc3RhdGVzL3N0YXRlL3VwZGF0ZS1wcm9maWxlLnN0YXRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBZ0IsVUFBVSxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQ2hGLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQ3ZFLE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQzs7QUFHaEQsTUFBTSxXQUFXLEdBQUcsSUFBSSxVQUFVLENBQWlCLGVBQWUsQ0FBQyxDQUFDO0FBa0I3RCxJQUFNLGtCQUFrQixHQUF4QixNQUFNLGtCQUFrQjtJQUUzQixnQkFBZ0IsQ0FBQztJQUdqQixhQUFhLENBQUMsR0FBaUMsRUFBRSxNQUEyQjtRQUN4RSxHQUFHLENBQUMsUUFBUSxDQUFDO1lBQ1QsR0FBRyxNQUFNLENBQUMsT0FBTztTQUNwQixDQUFDLENBQUM7SUFDUCxDQUFDO0lBR00sQUFBUCxNQUFNLENBQUMsT0FBTyxDQUFDLEtBQXFCO1FBQ2hDLE9BQU8sS0FBSyxDQUFDO0lBQ2pCLENBQUM7K0dBZFEsa0JBQWtCO21IQUFsQixrQkFBa0I7O0FBSzNCO0lBREMsTUFBTSxDQUFDLG1CQUFtQixDQUFDO3VEQUszQjtBQUdNO0lBRE4sUUFBUSxFQUFFO3VDQUdWO0FBZFEsa0JBQWtCO0lBaEI5QixLQUFLLENBQWlCO1FBQ25CLElBQUksRUFBRSxXQUFXO1FBQ2pCLFFBQVEsRUFBRTtZQUNOLEtBQUssRUFBRSxFQUFFO1lBQ1QsV0FBVyxFQUFFLEVBQUU7WUFDZixvQkFBb0IsRUFBRSxLQUFLO1lBQzNCLEtBQUssRUFBRSxFQUFFO1lBQ1QsS0FBSyxFQUFFLEVBQUU7WUFDVCxRQUFRLEVBQUUsRUFBRTtZQUNaLFdBQVcsRUFBRSxFQUFFO1lBQ2YsV0FBVyxFQUFFLEVBQUU7WUFDZixhQUFhLEVBQUUsRUFBRTtZQUNqQixLQUFLLEVBQUUsS0FBSyxDQUFDLElBQUk7U0FDcEI7S0FDSixDQUFDO0dBRVcsa0JBQWtCLENBZTlCOzs0RkFmWSxrQkFBa0I7a0JBRDlCLFVBQVU7d0RBTVAsYUFBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQWN0aW9uLCBTZWxlY3RvciwgU3RhdGUsIFN0YXRlQ29udGV4dCwgU3RhdGVUb2tlbiB9IGZyb20gXCJAbmd4cy9zdG9yZVwiO1xyXG5pbXBvcnQgeyBVcGRhdGVQcm9maWxlQWN0aW9uIH0gZnJvbSAnLi4vYWN0aW9ucy91cGRhdGUtcHJvZmlsZS5hY3Rpb24nO1xyXG5pbXBvcnQgeyBUaGVtZSB9IGZyb20gJy4uLy4uL3V0aWxzL2VudW1zL3RoZW1lJztcclxuaW1wb3J0IHsgSVVwZGF0ZVByb2ZpbGUgfSBmcm9tICcuLi9tb2RlbHMvdXBkYXRlLXByb2ZpbGUuaW50ZXJmYWNlJztcclxuXHJcbmNvbnN0IFNUQVRFX1RPS0VOID0gbmV3IFN0YXRlVG9rZW48SVVwZGF0ZVByb2ZpbGU+KCd1cGRhdGVQcm9maWxlJyk7XHJcblxyXG5AU3RhdGU8SVVwZGF0ZVByb2ZpbGU+KHtcclxuICAgIG5hbWU6IFNUQVRFX1RPS0VOLFxyXG4gICAgZGVmYXVsdHM6IHtcclxuICAgICAgICBlbWFpbDogJycsXHJcbiAgICAgICAgcGhvbmVOdW1iZXI6ICcnLFxyXG4gICAgICAgIHBob25lTnVtYmVyVmFsaWRhdGVkOiBmYWxzZSxcclxuICAgICAgICBpbWFnZTogJycsXHJcbiAgICAgICAgY29sb3I6ICcnLFxyXG4gICAgICAgIHVzZXJOYW1lOiAnJyxcclxuICAgICAgICBwcm9maWxlTmFtZTogJycsXHJcbiAgICAgICAgcHJvZmlsZVR5cGU6ICcnLFxyXG4gICAgICAgIHByb2ZpbGVQb2xpY3k6ICcnLFxyXG4gICAgICAgIHRoZW1lOiBUaGVtZS5EQVJLLFxyXG4gICAgfVxyXG59KVxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBVcGRhdGVQcm9maWxlU3RhdGUge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yICgpIHt9XHJcblxyXG4gICAgQEFjdGlvbihVcGRhdGVQcm9maWxlQWN0aW9uKVxyXG4gICAgdXBkYXRlUHJvZmlsZShjdHg6IFN0YXRlQ29udGV4dDxJVXBkYXRlUHJvZmlsZT4sIGFjdGlvbjogVXBkYXRlUHJvZmlsZUFjdGlvbik6IHZvaWQge1xyXG4gICAgICAgIGN0eC5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIC4uLmFjdGlvbi5wcm9maWxlXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgQFNlbGVjdG9yKClcclxuICAgIHN0YXRpYyBwcm9maWxlKHN0YXRlOiBJVXBkYXRlUHJvZmlsZSk6IElVcGRhdGVQcm9maWxlIHtcclxuICAgICAgICByZXR1cm4gc3RhdGU7XHJcbiAgICB9XHJcbn0iXX0=