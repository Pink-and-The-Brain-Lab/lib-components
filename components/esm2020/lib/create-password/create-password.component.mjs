import { Component, EventEmitter, Output, } from '@angular/core';
import { FormControl, FormGroup, Validators, } from '@angular/forms';
import { Subject, takeUntil } from 'rxjs';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "../input-validation/input-validation.directive";
import * as i3 from "@angular/forms";
import * as i4 from "../password-validation/password-validation.directive";
import * as i5 from "@ngx-translate/core";
export class CreatePasswordComponent {
    constructor() {
        this.destroy$ = new Subject();
        this.passwordValidation = new EventEmitter();
        this.submitEvent = new EventEmitter();
        this.passwordEvent = new EventEmitter();
        this.inputConfig = ['password', 'password'];
        this.isPasswordValid = false;
        this.passwordsAreEquals = () => {
            return () => {
                return this.password?.value === this.confirmPassword?.value
                    ? null
                    : { passwordsDiferent: true };
            };
        };
        this.form = new FormGroup({
            password: new FormControl('', [Validators.required]),
            confirmPassword: new FormControl('', [
                Validators.required,
                this.passwordsAreEquals(),
            ]),
        });
    }
    ngOnInit() {
        this.watchInputValuesChanges();
    }
    ngOnDestroy() {
        this.destroy$.next(true);
        this.destroy$.unsubscribe();
    }
    watchInputValuesChanges() {
        this.form.valueChanges.pipe(takeUntil(this.destroy$)).subscribe(() => {
            this.passwordValidation.emit(this._passwordValidation);
            if (!this._passwordValidation)
                return;
            this.passwordEvent.emit({
                password: this.password?.value,
                confirmPassword: this.confirmPassword?.value,
            });
        });
    }
    validatePassword(value) {
        this.isPasswordValid = value;
    }
    get password() {
        return this.form?.get('password');
    }
    get confirmPassword() {
        return this.form?.get('confirmPassword');
    }
    get _passwordValidation() {
        const arePassValid = !!this.password?.valid && !!this.confirmPassword?.valid;
        const arePassEquals = this.password?.value === this.confirmPassword?.value;
        return this.isPasswordValid && arePassValid && arePassEquals;
    }
    togglePasswordVisibility(index, type) {
        this.inputConfig[index] = type;
    }
    submit() {
        if (!this._passwordValidation)
            return;
        this.submitEvent.emit();
    }
}
CreatePasswordComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: CreatePasswordComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
CreatePasswordComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.1.2", type: CreatePasswordComponent, selector: "cdk-create-password", outputs: { passwordValidation: "passwordValidation", submitEvent: "submitEvent", passwordEvent: "passwordEvent" }, ngImport: i0, template: "<form [formGroup]=\"form\" class=\"d-flex flex-column\" (submit)=\"submit()\">\r\n    <div class=\"row-form right-icon w-100\">\r\n        <input [type]=\"inputConfig[0]\" cdkInputValidation formControlName=\"password\" />\r\n        <label>{{ 'PASSWORD' | translate }}</label>\r\n        <i class=\"bi bi-eye\" *ngIf=\"inputConfig[0] !== 'password'\" (click)=\"togglePasswordVisibility(0, 'password')\"></i>\r\n        <i class=\"bi bi-eye-slash\" *ngIf=\"inputConfig[0] === 'password'\" (click)=\"togglePasswordVisibility(0, 'text')\"></i>\r\n\r\n        <small *ngIf=\"password && password.touched && password.errors\">\r\n            <span *ngIf=\"password && password.errors['required']\">{{ 'PASSWORD_REQUIRED' | translate }}</span>\r\n        </small>\r\n    </div>\r\n\r\n    <p\r\n        class=\"mt-4 mb-0\"\r\n        [cdkPasswordValidation]=\"password?.value\"\r\n        (isValid)=\"validatePassword($event)\"\r\n    >\r\n        {{ 'AT_LEAST' | translate }} \r\n        <span>8 {{ 'CHARACTERS' | translate }}</span>, \r\n        {{ 'INCLUDING_A' | translate }} \r\n        <span>{{ 'NUMBER' | translate }}</span> \r\n        {{ 'AND_A' | translate }} \r\n        <span>{{ 'LETTER' | translate }}</span>\r\n    </p>\r\n\r\n    <div class=\"row-form right-icon w-100\">\r\n        <input [type]=\"inputConfig[1]\" cdkInputValidation formControlName=\"confirmPassword\" />\r\n        <label>{{ 'CONFIRM_PASSWORD' | translate }}</label>\r\n        <i class=\"bi bi-eye\" *ngIf=\"inputConfig[1] !== 'password'\" (click)=\"togglePasswordVisibility(1, 'password')\"></i>\r\n        <i class=\"bi bi-eye-slash\" *ngIf=\"inputConfig[1] === 'password'\" (click)=\"togglePasswordVisibility(1, 'text')\"></i>\r\n\r\n        <small *ngIf=\"confirmPassword && confirmPassword.touched && confirmPassword.errors\">\r\n            <span *ngIf=\"confirmPassword && confirmPassword.errors['required']\">{{ 'FORM_VALIDATIONS.PASSWORD_CONFIRMATION_REQUIRED' | translate }}</span>\r\n            <span *ngIf=\"password && confirmPassword.errors['passwordsDiferent']\">{{ 'FORM_VALIDATIONS.PASSWORD_CONFIRMATION_NEED_TO_BE_EQUALS' | translate }}</span>\r\n        </small>\r\n    </div>\r\n\r\n    <button type=\"submit\" hidden></button>\r\n</form>", styles: ["p{color:var(--emphasis-low);font-size:.875em}i{color:var(--emphasis-low);cursor:pointer}\n"], dependencies: [{ kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i2.InputValidationDirective, selector: "[cdkInputValidation]" }, { kind: "directive", type: i3.ɵNgNoValidate, selector: "form:not([ngNoForm]):not([ngNativeValidate])" }, { kind: "directive", type: i3.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i3.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i3.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { kind: "directive", type: i3.FormGroupDirective, selector: "[formGroup]", inputs: ["formGroup"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { kind: "directive", type: i3.FormControlName, selector: "[formControlName]", inputs: ["formControlName", "disabled", "ngModel"], outputs: ["ngModelChange"] }, { kind: "directive", type: i4.PasswordValidationDirective, selector: "[cdkPasswordValidation]", inputs: ["cdkPasswordValidation"], outputs: ["isValid"] }, { kind: "pipe", type: i5.TranslatePipe, name: "translate" }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: CreatePasswordComponent, decorators: [{
            type: Component,
            args: [{ selector: 'cdk-create-password', template: "<form [formGroup]=\"form\" class=\"d-flex flex-column\" (submit)=\"submit()\">\r\n    <div class=\"row-form right-icon w-100\">\r\n        <input [type]=\"inputConfig[0]\" cdkInputValidation formControlName=\"password\" />\r\n        <label>{{ 'PASSWORD' | translate }}</label>\r\n        <i class=\"bi bi-eye\" *ngIf=\"inputConfig[0] !== 'password'\" (click)=\"togglePasswordVisibility(0, 'password')\"></i>\r\n        <i class=\"bi bi-eye-slash\" *ngIf=\"inputConfig[0] === 'password'\" (click)=\"togglePasswordVisibility(0, 'text')\"></i>\r\n\r\n        <small *ngIf=\"password && password.touched && password.errors\">\r\n            <span *ngIf=\"password && password.errors['required']\">{{ 'PASSWORD_REQUIRED' | translate }}</span>\r\n        </small>\r\n    </div>\r\n\r\n    <p\r\n        class=\"mt-4 mb-0\"\r\n        [cdkPasswordValidation]=\"password?.value\"\r\n        (isValid)=\"validatePassword($event)\"\r\n    >\r\n        {{ 'AT_LEAST' | translate }} \r\n        <span>8 {{ 'CHARACTERS' | translate }}</span>, \r\n        {{ 'INCLUDING_A' | translate }} \r\n        <span>{{ 'NUMBER' | translate }}</span> \r\n        {{ 'AND_A' | translate }} \r\n        <span>{{ 'LETTER' | translate }}</span>\r\n    </p>\r\n\r\n    <div class=\"row-form right-icon w-100\">\r\n        <input [type]=\"inputConfig[1]\" cdkInputValidation formControlName=\"confirmPassword\" />\r\n        <label>{{ 'CONFIRM_PASSWORD' | translate }}</label>\r\n        <i class=\"bi bi-eye\" *ngIf=\"inputConfig[1] !== 'password'\" (click)=\"togglePasswordVisibility(1, 'password')\"></i>\r\n        <i class=\"bi bi-eye-slash\" *ngIf=\"inputConfig[1] === 'password'\" (click)=\"togglePasswordVisibility(1, 'text')\"></i>\r\n\r\n        <small *ngIf=\"confirmPassword && confirmPassword.touched && confirmPassword.errors\">\r\n            <span *ngIf=\"confirmPassword && confirmPassword.errors['required']\">{{ 'FORM_VALIDATIONS.PASSWORD_CONFIRMATION_REQUIRED' | translate }}</span>\r\n            <span *ngIf=\"password && confirmPassword.errors['passwordsDiferent']\">{{ 'FORM_VALIDATIONS.PASSWORD_CONFIRMATION_NEED_TO_BE_EQUALS' | translate }}</span>\r\n        </small>\r\n    </div>\r\n\r\n    <button type=\"submit\" hidden></button>\r\n</form>", styles: ["p{color:var(--emphasis-low);font-size:.875em}i{color:var(--emphasis-low);cursor:pointer}\n"] }]
        }], propDecorators: { passwordValidation: [{
                type: Output
            }], submitEvent: [{
                type: Output
            }], passwordEvent: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlYXRlLXBhc3N3b3JkLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NvbXBvbmVudHMvc3JjL2xpYi9jcmVhdGUtcGFzc3dvcmQvY3JlYXRlLXBhc3N3b3JkLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NvbXBvbmVudHMvc3JjL2xpYi9jcmVhdGUtcGFzc3dvcmQvY3JlYXRlLXBhc3N3b3JkLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsWUFBWSxFQUdaLE1BQU0sR0FFUCxNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBRUwsV0FBVyxFQUNYLFNBQVMsRUFHVCxVQUFVLEdBQ1gsTUFBTSxnQkFBZ0IsQ0FBQztBQUN4QixPQUFPLEVBQUUsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLE1BQU0sQ0FBQzs7Ozs7OztBQVUxQyxNQUFNLE9BQU8sdUJBQXVCO0lBTHBDO1FBTVUsYUFBUSxHQUFHLElBQUksT0FBTyxFQUFXLENBQUM7UUFDaEMsdUJBQWtCLEdBQUcsSUFBSSxZQUFZLEVBQVcsQ0FBQztRQUNqRCxnQkFBVyxHQUFHLElBQUksWUFBWSxFQUFRLENBQUM7UUFDdkMsa0JBQWEsR0FBRyxJQUFJLFlBQVksRUFBa0IsQ0FBQztRQUM3RCxnQkFBVyxHQUFnQixDQUFDLFVBQVUsRUFBRSxVQUFVLENBQUMsQ0FBQztRQUNwRCxvQkFBZSxHQUFHLEtBQUssQ0FBQztRQUV4Qix1QkFBa0IsR0FBRyxHQUFnQixFQUFFO1lBQ3JDLE9BQU8sR0FBNEIsRUFBRTtnQkFDbkMsT0FBTyxJQUFJLENBQUMsUUFBUSxFQUFFLEtBQUssS0FBSyxJQUFJLENBQUMsZUFBZSxFQUFFLEtBQUs7b0JBQ3pELENBQUMsQ0FBQyxJQUFJO29CQUNOLENBQUMsQ0FBQyxFQUFFLGlCQUFpQixFQUFFLElBQUksRUFBRSxDQUFDO1lBQ2xDLENBQUMsQ0FBQztRQUNKLENBQUMsQ0FBQztRQUVGLFNBQUksR0FBRyxJQUFJLFNBQVMsQ0FBQztZQUNuQixRQUFRLEVBQUUsSUFBSSxXQUFXLENBQUMsRUFBRSxFQUFFLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQ3BELGVBQWUsRUFBRSxJQUFJLFdBQVcsQ0FBQyxFQUFFLEVBQUU7Z0JBQ25DLFVBQVUsQ0FBQyxRQUFRO2dCQUNuQixJQUFJLENBQUMsa0JBQWtCLEVBQUU7YUFDMUIsQ0FBQztTQUNILENBQUMsQ0FBQztLQWlESjtJQS9DQyxRQUFRO1FBQ04sSUFBSSxDQUFDLHVCQUF1QixFQUFFLENBQUM7SUFDakMsQ0FBQztJQUVELFdBQVc7UUFDVCxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN6QixJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQzlCLENBQUM7SUFFTyx1QkFBdUI7UUFDN0IsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsR0FBRyxFQUFFO1lBQ25FLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLENBQUM7WUFDdkQsSUFBSSxDQUFDLElBQUksQ0FBQyxtQkFBbUI7Z0JBQUUsT0FBTztZQUN0QyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQztnQkFDdEIsUUFBUSxFQUFFLElBQUksQ0FBQyxRQUFRLEVBQUUsS0FBSztnQkFDOUIsZUFBZSxFQUFFLElBQUksQ0FBQyxlQUFlLEVBQUUsS0FBSzthQUM3QyxDQUFDLENBQUM7UUFDTCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCxnQkFBZ0IsQ0FBQyxLQUFjO1FBQzdCLElBQUksQ0FBQyxlQUFlLEdBQUcsS0FBSyxDQUFDO0lBQy9CLENBQUM7SUFFRCxJQUFJLFFBQVE7UUFDVixPQUFPLElBQUksQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQ3BDLENBQUM7SUFFRCxJQUFJLGVBQWU7UUFDakIsT0FBTyxJQUFJLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO0lBQzNDLENBQUM7SUFFRCxJQUFJLG1CQUFtQjtRQUNyQixNQUFNLFlBQVksR0FDaEIsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsS0FBSyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsZUFBZSxFQUFFLEtBQUssQ0FBQztRQUMxRCxNQUFNLGFBQWEsR0FBRyxJQUFJLENBQUMsUUFBUSxFQUFFLEtBQUssS0FBSyxJQUFJLENBQUMsZUFBZSxFQUFFLEtBQUssQ0FBQztRQUMzRSxPQUFPLElBQUksQ0FBQyxlQUFlLElBQUksWUFBWSxJQUFJLGFBQWEsQ0FBQztJQUMvRCxDQUFDO0lBRUQsd0JBQXdCLENBQUMsS0FBYSxFQUFFLElBQWU7UUFDckQsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsR0FBRyxJQUFJLENBQUM7SUFDakMsQ0FBQztJQUVELE1BQU07UUFDSixJQUFJLENBQUMsSUFBSSxDQUFDLG1CQUFtQjtZQUFFLE9BQU87UUFDdEMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUMxQixDQUFDOztvSEF0RVUsdUJBQXVCO3dHQUF2Qix1QkFBdUIsOEtDMUJwQyxrc0VBc0NPOzJGRFpNLHVCQUF1QjtrQkFMbkMsU0FBUzsrQkFDRSxxQkFBcUI7OEJBTXJCLGtCQUFrQjtzQkFBM0IsTUFBTTtnQkFDRyxXQUFXO3NCQUFwQixNQUFNO2dCQUNHLGFBQWE7c0JBQXRCLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIENvbXBvbmVudCxcclxuICBFdmVudEVtaXR0ZXIsXHJcbiAgT25EZXN0cm95LFxyXG4gIE9uSW5pdCxcclxuICBPdXRwdXQsXHJcbiAgaW5qZWN0LFxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge1xyXG4gIEFic3RyYWN0Q29udHJvbCxcclxuICBGb3JtQ29udHJvbCxcclxuICBGb3JtR3JvdXAsXHJcbiAgVmFsaWRhdGlvbkVycm9ycyxcclxuICBWYWxpZGF0b3JGbixcclxuICBWYWxpZGF0b3JzLFxyXG59IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHsgU3ViamVjdCwgdGFrZVVudGlsIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IElucHV0VHlwZSB9IGZyb20gJy4vbW9kZWxzL2lucHV0LXR5cGUnO1xyXG5pbXBvcnQgeyBJUGFzc3dvcmRFdmVudCB9IGZyb20gJy4vbW9kZWxzL3Bhc3N3b3JkLWV2ZW50JztcclxuaW1wb3J0IHsgVHJhbnNsYXRlU2VydmljZSB9IGZyb20gJ0BuZ3gtdHJhbnNsYXRlL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdjZGstY3JlYXRlLXBhc3N3b3JkJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vY3JlYXRlLXBhc3N3b3JkLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9jcmVhdGUtcGFzc3dvcmQuY29tcG9uZW50LnNjc3MnXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIENyZWF0ZVBhc3N3b3JkQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xyXG4gIHByaXZhdGUgZGVzdHJveSQgPSBuZXcgU3ViamVjdDxib29sZWFuPigpO1xyXG4gIEBPdXRwdXQoKSBwYXNzd29yZFZhbGlkYXRpb24gPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XHJcbiAgQE91dHB1dCgpIHN1Ym1pdEV2ZW50ID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xyXG4gIEBPdXRwdXQoKSBwYXNzd29yZEV2ZW50ID0gbmV3IEV2ZW50RW1pdHRlcjxJUGFzc3dvcmRFdmVudD4oKTtcclxuICBpbnB1dENvbmZpZzogSW5wdXRUeXBlW10gPSBbJ3Bhc3N3b3JkJywgJ3Bhc3N3b3JkJ107XHJcbiAgaXNQYXNzd29yZFZhbGlkID0gZmFsc2U7XHJcblxyXG4gIHBhc3N3b3Jkc0FyZUVxdWFscyA9ICgpOiBWYWxpZGF0b3JGbiA9PiB7XHJcbiAgICByZXR1cm4gKCk6IFZhbGlkYXRpb25FcnJvcnMgfCBudWxsID0+IHtcclxuICAgICAgcmV0dXJuIHRoaXMucGFzc3dvcmQ/LnZhbHVlID09PSB0aGlzLmNvbmZpcm1QYXNzd29yZD8udmFsdWVcclxuICAgICAgICA/IG51bGxcclxuICAgICAgICA6IHsgcGFzc3dvcmRzRGlmZXJlbnQ6IHRydWUgfTtcclxuICAgIH07XHJcbiAgfTtcclxuXHJcbiAgZm9ybSA9IG5ldyBGb3JtR3JvdXAoe1xyXG4gICAgcGFzc3dvcmQ6IG5ldyBGb3JtQ29udHJvbCgnJywgW1ZhbGlkYXRvcnMucmVxdWlyZWRdKSxcclxuICAgIGNvbmZpcm1QYXNzd29yZDogbmV3IEZvcm1Db250cm9sKCcnLCBbXHJcbiAgICAgIFZhbGlkYXRvcnMucmVxdWlyZWQsXHJcbiAgICAgIHRoaXMucGFzc3dvcmRzQXJlRXF1YWxzKCksXHJcbiAgICBdKSxcclxuICB9KTtcclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLndhdGNoSW5wdXRWYWx1ZXNDaGFuZ2VzKCk7XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcclxuICAgIHRoaXMuZGVzdHJveSQubmV4dCh0cnVlKTtcclxuICAgIHRoaXMuZGVzdHJveSQudW5zdWJzY3JpYmUoKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgd2F0Y2hJbnB1dFZhbHVlc0NoYW5nZXMoKSB7XHJcbiAgICB0aGlzLmZvcm0udmFsdWVDaGFuZ2VzLnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveSQpKS5zdWJzY3JpYmUoKCkgPT4ge1xyXG4gICAgICB0aGlzLnBhc3N3b3JkVmFsaWRhdGlvbi5lbWl0KHRoaXMuX3Bhc3N3b3JkVmFsaWRhdGlvbik7XHJcbiAgICAgIGlmICghdGhpcy5fcGFzc3dvcmRWYWxpZGF0aW9uKSByZXR1cm47XHJcbiAgICAgIHRoaXMucGFzc3dvcmRFdmVudC5lbWl0KHtcclxuICAgICAgICBwYXNzd29yZDogdGhpcy5wYXNzd29yZD8udmFsdWUsXHJcbiAgICAgICAgY29uZmlybVBhc3N3b3JkOiB0aGlzLmNvbmZpcm1QYXNzd29yZD8udmFsdWUsXHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICB2YWxpZGF0ZVBhc3N3b3JkKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICB0aGlzLmlzUGFzc3dvcmRWYWxpZCA9IHZhbHVlO1xyXG4gIH1cclxuXHJcbiAgZ2V0IHBhc3N3b3JkKCk6IEFic3RyYWN0Q29udHJvbCB8IG51bGwge1xyXG4gICAgcmV0dXJuIHRoaXMuZm9ybT8uZ2V0KCdwYXNzd29yZCcpO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGNvbmZpcm1QYXNzd29yZCgpOiBBYnN0cmFjdENvbnRyb2wgfCBudWxsIHtcclxuICAgIHJldHVybiB0aGlzLmZvcm0/LmdldCgnY29uZmlybVBhc3N3b3JkJyk7XHJcbiAgfVxyXG5cclxuICBnZXQgX3Bhc3N3b3JkVmFsaWRhdGlvbigpOiBib29sZWFuIHtcclxuICAgIGNvbnN0IGFyZVBhc3NWYWxpZCA9XHJcbiAgICAgICEhdGhpcy5wYXNzd29yZD8udmFsaWQgJiYgISF0aGlzLmNvbmZpcm1QYXNzd29yZD8udmFsaWQ7XHJcbiAgICBjb25zdCBhcmVQYXNzRXF1YWxzID0gdGhpcy5wYXNzd29yZD8udmFsdWUgPT09IHRoaXMuY29uZmlybVBhc3N3b3JkPy52YWx1ZTtcclxuICAgIHJldHVybiB0aGlzLmlzUGFzc3dvcmRWYWxpZCAmJiBhcmVQYXNzVmFsaWQgJiYgYXJlUGFzc0VxdWFscztcclxuICB9XHJcblxyXG4gIHRvZ2dsZVBhc3N3b3JkVmlzaWJpbGl0eShpbmRleDogbnVtYmVyLCB0eXBlOiBJbnB1dFR5cGUpIHtcclxuICAgIHRoaXMuaW5wdXRDb25maWdbaW5kZXhdID0gdHlwZTtcclxuICB9XHJcblxyXG4gIHN1Ym1pdCgpIHtcclxuICAgIGlmICghdGhpcy5fcGFzc3dvcmRWYWxpZGF0aW9uKSByZXR1cm47XHJcbiAgICB0aGlzLnN1Ym1pdEV2ZW50LmVtaXQoKTtcclxuICB9XHJcbn1cclxuIiwiPGZvcm0gW2Zvcm1Hcm91cF09XCJmb3JtXCIgY2xhc3M9XCJkLWZsZXggZmxleC1jb2x1bW5cIiAoc3VibWl0KT1cInN1Ym1pdCgpXCI+XHJcbiAgICA8ZGl2IGNsYXNzPVwicm93LWZvcm0gcmlnaHQtaWNvbiB3LTEwMFwiPlxyXG4gICAgICAgIDxpbnB1dCBbdHlwZV09XCJpbnB1dENvbmZpZ1swXVwiIGNka0lucHV0VmFsaWRhdGlvbiBmb3JtQ29udHJvbE5hbWU9XCJwYXNzd29yZFwiIC8+XHJcbiAgICAgICAgPGxhYmVsPnt7ICdQQVNTV09SRCcgfCB0cmFuc2xhdGUgfX08L2xhYmVsPlxyXG4gICAgICAgIDxpIGNsYXNzPVwiYmkgYmktZXllXCIgKm5nSWY9XCJpbnB1dENvbmZpZ1swXSAhPT0gJ3Bhc3N3b3JkJ1wiIChjbGljayk9XCJ0b2dnbGVQYXNzd29yZFZpc2liaWxpdHkoMCwgJ3Bhc3N3b3JkJylcIj48L2k+XHJcbiAgICAgICAgPGkgY2xhc3M9XCJiaSBiaS1leWUtc2xhc2hcIiAqbmdJZj1cImlucHV0Q29uZmlnWzBdID09PSAncGFzc3dvcmQnXCIgKGNsaWNrKT1cInRvZ2dsZVBhc3N3b3JkVmlzaWJpbGl0eSgwLCAndGV4dCcpXCI+PC9pPlxyXG5cclxuICAgICAgICA8c21hbGwgKm5nSWY9XCJwYXNzd29yZCAmJiBwYXNzd29yZC50b3VjaGVkICYmIHBhc3N3b3JkLmVycm9yc1wiPlxyXG4gICAgICAgICAgICA8c3BhbiAqbmdJZj1cInBhc3N3b3JkICYmIHBhc3N3b3JkLmVycm9yc1sncmVxdWlyZWQnXVwiPnt7ICdQQVNTV09SRF9SRVFVSVJFRCcgfCB0cmFuc2xhdGUgfX08L3NwYW4+XHJcbiAgICAgICAgPC9zbWFsbD5cclxuICAgIDwvZGl2PlxyXG5cclxuICAgIDxwXHJcbiAgICAgICAgY2xhc3M9XCJtdC00IG1iLTBcIlxyXG4gICAgICAgIFtjZGtQYXNzd29yZFZhbGlkYXRpb25dPVwicGFzc3dvcmQ/LnZhbHVlXCJcclxuICAgICAgICAoaXNWYWxpZCk9XCJ2YWxpZGF0ZVBhc3N3b3JkKCRldmVudClcIlxyXG4gICAgPlxyXG4gICAgICAgIHt7ICdBVF9MRUFTVCcgfCB0cmFuc2xhdGUgfX0gXHJcbiAgICAgICAgPHNwYW4+OCB7eyAnQ0hBUkFDVEVSUycgfCB0cmFuc2xhdGUgfX08L3NwYW4+LCBcclxuICAgICAgICB7eyAnSU5DTFVESU5HX0EnIHwgdHJhbnNsYXRlIH19IFxyXG4gICAgICAgIDxzcGFuPnt7ICdOVU1CRVInIHwgdHJhbnNsYXRlIH19PC9zcGFuPiBcclxuICAgICAgICB7eyAnQU5EX0EnIHwgdHJhbnNsYXRlIH19IFxyXG4gICAgICAgIDxzcGFuPnt7ICdMRVRURVInIHwgdHJhbnNsYXRlIH19PC9zcGFuPlxyXG4gICAgPC9wPlxyXG5cclxuICAgIDxkaXYgY2xhc3M9XCJyb3ctZm9ybSByaWdodC1pY29uIHctMTAwXCI+XHJcbiAgICAgICAgPGlucHV0IFt0eXBlXT1cImlucHV0Q29uZmlnWzFdXCIgY2RrSW5wdXRWYWxpZGF0aW9uIGZvcm1Db250cm9sTmFtZT1cImNvbmZpcm1QYXNzd29yZFwiIC8+XHJcbiAgICAgICAgPGxhYmVsPnt7ICdDT05GSVJNX1BBU1NXT1JEJyB8IHRyYW5zbGF0ZSB9fTwvbGFiZWw+XHJcbiAgICAgICAgPGkgY2xhc3M9XCJiaSBiaS1leWVcIiAqbmdJZj1cImlucHV0Q29uZmlnWzFdICE9PSAncGFzc3dvcmQnXCIgKGNsaWNrKT1cInRvZ2dsZVBhc3N3b3JkVmlzaWJpbGl0eSgxLCAncGFzc3dvcmQnKVwiPjwvaT5cclxuICAgICAgICA8aSBjbGFzcz1cImJpIGJpLWV5ZS1zbGFzaFwiICpuZ0lmPVwiaW5wdXRDb25maWdbMV0gPT09ICdwYXNzd29yZCdcIiAoY2xpY2spPVwidG9nZ2xlUGFzc3dvcmRWaXNpYmlsaXR5KDEsICd0ZXh0JylcIj48L2k+XHJcblxyXG4gICAgICAgIDxzbWFsbCAqbmdJZj1cImNvbmZpcm1QYXNzd29yZCAmJiBjb25maXJtUGFzc3dvcmQudG91Y2hlZCAmJiBjb25maXJtUGFzc3dvcmQuZXJyb3JzXCI+XHJcbiAgICAgICAgICAgIDxzcGFuICpuZ0lmPVwiY29uZmlybVBhc3N3b3JkICYmIGNvbmZpcm1QYXNzd29yZC5lcnJvcnNbJ3JlcXVpcmVkJ11cIj57eyAnRk9STV9WQUxJREFUSU9OUy5QQVNTV09SRF9DT05GSVJNQVRJT05fUkVRVUlSRUQnIHwgdHJhbnNsYXRlIH19PC9zcGFuPlxyXG4gICAgICAgICAgICA8c3BhbiAqbmdJZj1cInBhc3N3b3JkICYmIGNvbmZpcm1QYXNzd29yZC5lcnJvcnNbJ3Bhc3N3b3Jkc0RpZmVyZW50J11cIj57eyAnRk9STV9WQUxJREFUSU9OUy5QQVNTV09SRF9DT05GSVJNQVRJT05fTkVFRF9UT19CRV9FUVVBTFMnIHwgdHJhbnNsYXRlIH19PC9zcGFuPlxyXG4gICAgICAgIDwvc21hbGw+XHJcbiAgICA8L2Rpdj5cclxuXHJcbiAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBoaWRkZW4+PC9idXR0b24+XHJcbjwvZm9ybT4iXX0=