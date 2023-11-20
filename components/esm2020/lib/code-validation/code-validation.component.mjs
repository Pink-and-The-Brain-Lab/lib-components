import { Component, EventEmitter, HostListener, Input, Output, QueryList, ViewChildren, } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { map, pairwise, startWith, Subject, takeUntil } from 'rxjs';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
import * as i2 from "../spinner/spinner.component";
import * as i3 from "../loading-button/loading-button.directive";
export class CodeValidationComponent {
    constructor() {
        this.inputs = new QueryList();
        this.isLoading = false;
        this.validate = new EventEmitter();
        this.destroy$ = new Subject();
        this.focusedInput = 0;
        this.formGroup = new FormGroup({
            _0: new FormControl('', [Validators.required]),
            _1: new FormControl('', [Validators.required]),
            _2: new FormControl('', [Validators.required]),
            _3: new FormControl('', [Validators.required]),
            _4: new FormControl('', [Validators.required]),
            _5: new FormControl('', [Validators.required]),
        });
    }
    ngOnInit() {
        this.formGroup.valueChanges
            .pipe(takeUntil(this.destroy$), startWith(null), pairwise(), map(([oldState, newState]) => {
            const changes = {
                changedKey: '_0',
                isAdding: true,
            };
            if (!oldState)
                return changes;
            for (let key in newState) {
                if (oldState[key] !== newState[key]) {
                    changes.changedKey = key;
                    changes.isAdding = !oldState[key].length;
                }
            }
            return changes;
        }))
            .subscribe((value) => {
            const parsedInputChanged = parseInt(value.changedKey.replace(/_/gi, ''));
            if (value.isAdding) {
                this.setInputFocus(parsedInputChanged + 1);
            }
            else {
                this.setInputFocus(parsedInputChanged - 1);
            }
        });
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.unsubscribe();
    }
    ngAfterViewInit() {
        this.setInputFocus(0);
    }
    setInputFocus(index) {
        this.inputs.get(index)?.nativeElement.focus();
    }
    setFocusedElement(index) {
        this.focusedInput = index;
    }
    backToPreviousInput() {
        const inputValue = '' + this.formGroup.get(`_${this.focusedInput}`)?.value;
        if (inputValue?.length)
            return;
        this.setInputFocus(this.focusedInput - 1);
    }
    onKeyDownHandler(event) {
        if (event.key === 'Backspace') {
            this.backToPreviousInput();
        }
    }
    onPaste(event) {
        const clipboardData = event.clipboardData;
        const pastedText = clipboardData?.getData('text');
        this.inputPastedCode(pastedText || '');
    }
    inputPastedCode(code) {
        this.formGroup.patchValue({
            '_0': code[0],
            '_1': code[1],
            '_2': code[2],
            '_3': code[3],
            '_4': code[4],
            '_5': code[5],
        });
        setTimeout(() => {
            this.setInputFocus(5);
        });
    }
    validateCode() {
        const code = Object.values(this.formGroup.value).reduce((acc, i) => acc += i, '');
        this.validate.emit(code);
    }
}
CodeValidationComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: CodeValidationComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
CodeValidationComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.1.2", type: CodeValidationComponent, selector: "cdk-code-validation", inputs: { isLoading: "isLoading" }, outputs: { validate: "validate" }, host: { listeners: { "document:keyup": "onKeyDownHandler($event)", "paste": "onPaste($event)" } }, viewQueries: [{ propertyName: "inputs", predicate: ["input"], descendants: true }], ngImport: i0, template: "<form [formGroup]=\"formGroup\" class=\"d-flex flex-column\" (submit)=\"validateCode()\">\r\n    <div class=\"d-flex align-items-center\">\r\n        <input #input type=\"text\" maxlength=\"1\" formControlName=\"_0\" (focus)=\"setFocusedElement(0)\" class=\"me-1\" />\r\n        <input #input type=\"text\" maxlength=\"1\" formControlName=\"_1\" (focus)=\"setFocusedElement(1)\" class=\"me-1 ms-1\" />\r\n        <input #input type=\"text\" maxlength=\"1\" formControlName=\"_2\" (focus)=\"setFocusedElement(2)\" class=\"me-1 ms-1\" />\r\n        <span class=\"me-1 ms-1\"></span>\r\n        <input #input type=\"text\" maxlength=\"1\" formControlName=\"_3\" (focus)=\"setFocusedElement(3)\" class=\"me-1 ms-1\" />\r\n        <input #input type=\"text\" maxlength=\"1\" formControlName=\"_4\" (focus)=\"setFocusedElement(4)\" class=\"me-1 ms-1\" />\r\n        <input #input type=\"text\" maxlength=\"1\" formControlName=\"_5\" (focus)=\"setFocusedElement(5)\" class=\"ms-1\" />\r\n    </div>\r\n\r\n    <div class=\"d-flex mt-2\">\r\n        <button\r\n            type=\"submit\"\r\n            class=\"btn btn-primary w-100\"\r\n            [disabled]=\"formGroup.invalid\"\r\n            [cdkLoadingButton]=\"isLoading\"\r\n        >\r\n            <cdk-spinner>Validate Code</cdk-spinner>\r\n        </button>\r\n    </div>\r\n</form>", styles: [":host{display:inline-block}input{padding:10px;width:37px;height:48px;border:1px solid #313643;border-radius:4px;font-weight:400;font-size:1.25em;line-height:1.5em;text-align:center;color:#dfdfdf;background-color:#1b1c20;text-transform:uppercase}span{width:8px;height:1px;display:block;background-color:#6f788c}\n"], dependencies: [{ kind: "directive", type: i1.ɵNgNoValidate, selector: "form:not([ngNoForm]):not([ngNativeValidate])" }, { kind: "directive", type: i1.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i1.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i1.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { kind: "directive", type: i1.MaxLengthValidator, selector: "[maxlength][formControlName],[maxlength][formControl],[maxlength][ngModel]", inputs: ["maxlength"] }, { kind: "directive", type: i1.FormGroupDirective, selector: "[formGroup]", inputs: ["formGroup"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { kind: "directive", type: i1.FormControlName, selector: "[formControlName]", inputs: ["formControlName", "disabled", "ngModel"], outputs: ["ngModelChange"] }, { kind: "component", type: i2.SpinnerComponent, selector: "cdk-spinner" }, { kind: "directive", type: i3.LoadingButtonDirective, selector: "[cdkLoadingButton]", inputs: ["cdkLoadingButton"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: CodeValidationComponent, decorators: [{
            type: Component,
            args: [{ selector: 'cdk-code-validation', template: "<form [formGroup]=\"formGroup\" class=\"d-flex flex-column\" (submit)=\"validateCode()\">\r\n    <div class=\"d-flex align-items-center\">\r\n        <input #input type=\"text\" maxlength=\"1\" formControlName=\"_0\" (focus)=\"setFocusedElement(0)\" class=\"me-1\" />\r\n        <input #input type=\"text\" maxlength=\"1\" formControlName=\"_1\" (focus)=\"setFocusedElement(1)\" class=\"me-1 ms-1\" />\r\n        <input #input type=\"text\" maxlength=\"1\" formControlName=\"_2\" (focus)=\"setFocusedElement(2)\" class=\"me-1 ms-1\" />\r\n        <span class=\"me-1 ms-1\"></span>\r\n        <input #input type=\"text\" maxlength=\"1\" formControlName=\"_3\" (focus)=\"setFocusedElement(3)\" class=\"me-1 ms-1\" />\r\n        <input #input type=\"text\" maxlength=\"1\" formControlName=\"_4\" (focus)=\"setFocusedElement(4)\" class=\"me-1 ms-1\" />\r\n        <input #input type=\"text\" maxlength=\"1\" formControlName=\"_5\" (focus)=\"setFocusedElement(5)\" class=\"ms-1\" />\r\n    </div>\r\n\r\n    <div class=\"d-flex mt-2\">\r\n        <button\r\n            type=\"submit\"\r\n            class=\"btn btn-primary w-100\"\r\n            [disabled]=\"formGroup.invalid\"\r\n            [cdkLoadingButton]=\"isLoading\"\r\n        >\r\n            <cdk-spinner>Validate Code</cdk-spinner>\r\n        </button>\r\n    </div>\r\n</form>", styles: [":host{display:inline-block}input{padding:10px;width:37px;height:48px;border:1px solid #313643;border-radius:4px;font-weight:400;font-size:1.25em;line-height:1.5em;text-align:center;color:#dfdfdf;background-color:#1b1c20;text-transform:uppercase}span{width:8px;height:1px;display:block;background-color:#6f788c}\n"] }]
        }], ctorParameters: function () { return []; }, propDecorators: { inputs: [{
                type: ViewChildren,
                args: ['input']
            }], isLoading: [{
                type: Input
            }], validate: [{
                type: Output
            }], onKeyDownHandler: [{
                type: HostListener,
                args: ['document:keyup', ['$event']]
            }], onPaste: [{
                type: HostListener,
                args: ['paste', ['$event']]
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29kZS12YWxpZGF0aW9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NvbXBvbmVudHMvc3JjL2xpYi9jb2RlLXZhbGlkYXRpb24vY29kZS12YWxpZGF0aW9uLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NvbXBvbmVudHMvc3JjL2xpYi9jb2RlLXZhbGlkYXRpb24vY29kZS12YWxpZGF0aW9uLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFFTCxTQUFTLEVBRVQsWUFBWSxFQUNaLFlBQVksRUFDWixLQUFLLEVBR0wsTUFBTSxFQUNOLFNBQVMsRUFDVCxZQUFZLEdBQ2IsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLFdBQVcsRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDcEUsT0FBTyxFQUFFLEdBQUcsRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFFLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxNQUFNLENBQUM7Ozs7O0FBUXBFLE1BQU0sT0FBTyx1QkFBdUI7SUFrQmxDO1FBZnVCLFdBQU0sR0FBRyxJQUFJLFNBQVMsRUFBYyxDQUFDO1FBQ25ELGNBQVMsR0FBRyxLQUFLLENBQUM7UUFDakIsYUFBUSxHQUFHLElBQUksWUFBWSxFQUFVLENBQUM7UUFFeEMsYUFBUSxHQUFHLElBQUksT0FBTyxFQUFRLENBQUM7UUFDL0IsaUJBQVksR0FBRyxDQUFDLENBQUM7UUFDekIsY0FBUyxHQUFHLElBQUksU0FBUyxDQUFDO1lBQ3hCLEVBQUUsRUFBRSxJQUFJLFdBQVcsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDOUMsRUFBRSxFQUFFLElBQUksV0FBVyxDQUFDLEVBQUUsRUFBRSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUM5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TG5DLFNBQVM7K0JBQ0UscUJBQXFCOzBFQU9SLE1BQU07c0JBQTVCLFlBQVk7dUJBQUMsT0FBTztnQkFDWixTQUFTO3NCQUFqQixLQUFLO2dCQUNJLFFBQVE7c0JBQWpCLE1BQU07Z0JBMkVQLGdCQUFnQjtzQkFEZixZQUFZO3VCQUFDLGdCQUFnQixFQUFFLENBQUMsUUFBUSxDQUFDO2dCQVExQyxPQUFPO3NCQUROLFlBQVk7dUJBQUMsT0FBTyxFQUFFLENBQUMsUUFBUSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBBZnRlclZpZXdJbml0LFxyXG4gIENvbXBvbmVudCxcclxuICBFbGVtZW50UmVmLFxyXG4gIEV2ZW50RW1pdHRlcixcclxuICBIb3N0TGlzdGVuZXIsXHJcbiAgSW5wdXQsXHJcbiAgT25EZXN0cm95LFxyXG4gIE9uSW5pdCxcclxuICBPdXRwdXQsXHJcbiAgUXVlcnlMaXN0LFxyXG4gIFZpZXdDaGlsZHJlbixcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRm9ybUNvbnRyb2wsIEZvcm1Hcm91cCwgVmFsaWRhdG9ycyB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHsgbWFwLCBwYWlyd2lzZSwgc3RhcnRXaXRoLCBTdWJqZWN0LCB0YWtlVW50aWwgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgSUZvcm1WYWx1ZUNoYW5nZWQgfSBmcm9tICcuL21vZGVscy9mb3JtLXZhbHVlLWNoYW5nZWQubW9kZWwnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdjZGstY29kZS12YWxpZGF0aW9uJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vY29kZS12YWxpZGF0aW9uLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9jb2RlLXZhbGlkYXRpb24uY29tcG9uZW50LnNjc3MnXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIENvZGVWYWxpZGF0aW9uQ29tcG9uZW50XHJcbiAgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSwgQWZ0ZXJWaWV3SW5pdFxyXG57XHJcbiAgQFZpZXdDaGlsZHJlbignaW5wdXQnKSBpbnB1dHMgPSBuZXcgUXVlcnlMaXN0PEVsZW1lbnRSZWY+KCk7XHJcbiAgQElucHV0KCkgaXNMb2FkaW5nID0gZmFsc2U7XHJcbiAgQE91dHB1dCgpIHZhbGlkYXRlID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmc+KCk7XHJcblxyXG4gIHByaXZhdGUgZGVzdHJveSQgPSBuZXcgU3ViamVjdDx2b2lkPigpO1xyXG4gIHByaXZhdGUgZm9jdXNlZElucHV0ID0gMDtcclxuICBmb3JtR3JvdXAgPSBuZXcgRm9ybUdyb3VwKHtcclxuICAgIF8wOiBuZXcgRm9ybUNvbnRyb2woJycsIFtWYWxpZGF0b3JzLnJlcXVpcmVkXSksXHJcbiAgICBfMTogbmV3IEZvcm1Db250cm9sKCcnLCBbVmFsaWRhdG9ycy5yZXF1aXJlZF0pLFxyXG4gICAgXzI6IG5ldyBGb3JtQ29udHJvbCgnJywgW1ZhbGlkYXRvcnMucmVxdWlyZWRdKSxcclxuICAgIF8zOiBuZXcgRm9ybUNvbnRyb2woJycsIFtWYWxpZGF0b3JzLnJlcXVpcmVkXSksXHJcbiAgICBfNDogbmV3IEZvcm1Db250cm9sKCcnLCBbVmFsaWRhdG9ycy5yZXF1aXJlZF0pLFxyXG4gICAgXzU6IG5ldyBGb3JtQ29udHJvbCgnJywgW1ZhbGlkYXRvcnMucmVxdWlyZWRdKSxcclxuICB9KTtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7fVxyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgIHRoaXMuZm9ybUdyb3VwLnZhbHVlQ2hhbmdlc1xyXG4gICAgICAucGlwZShcclxuICAgICAgICB0YWtlVW50aWwodGhpcy5kZXN0cm95JCksXHJcbiAgICAgICAgc3RhcnRXaXRoKG51bGwpLFxyXG4gICAgICAgIHBhaXJ3aXNlKCksXHJcbiAgICAgICAgbWFwKChbb2xkU3RhdGUsIG5ld1N0YXRlXTogYW55KSA9PiB7XHJcbiAgICAgICAgICBjb25zdCBjaGFuZ2VzOiBJRm9ybVZhbHVlQ2hhbmdlZCA9IHtcclxuICAgICAgICAgICAgY2hhbmdlZEtleTogJ18wJyxcclxuICAgICAgICAgICAgaXNBZGRpbmc6IHRydWUsXHJcbiAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgIGlmICghb2xkU3RhdGUpIHJldHVybiBjaGFuZ2VzO1xyXG5cclxuICAgICAgICAgIGZvciAobGV0IGtleSBpbiBuZXdTdGF0ZSkge1xyXG4gICAgICAgICAgICBpZiAob2xkU3RhdGVba2V5XSAhPT0gbmV3U3RhdGVba2V5XSkge1xyXG4gICAgICAgICAgICAgIGNoYW5nZXMuY2hhbmdlZEtleSA9IGtleTtcclxuICAgICAgICAgICAgICBjaGFuZ2VzLmlzQWRkaW5nID0gIW9sZFN0YXRlW2tleV0ubGVuZ3RoO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgcmV0dXJuIGNoYW5nZXM7XHJcbiAgICAgICAgfSlcclxuICAgICAgKVxyXG4gICAgICAuc3Vic2NyaWJlKCh2YWx1ZSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHBhcnNlZElucHV0Q2hhbmdlZCA9IHBhcnNlSW50KFxyXG4gICAgICAgICAgdmFsdWUuY2hhbmdlZEtleS5yZXBsYWNlKC9fL2dpLCAnJylcclxuICAgICAgICApO1xyXG4gICAgICAgIGlmICh2YWx1ZS5pc0FkZGluZykge1xyXG4gICAgICAgICAgdGhpcy5zZXRJbnB1dEZvY3VzKHBhcnNlZElucHV0Q2hhbmdlZCArIDEpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB0aGlzLnNldElucHV0Rm9jdXMocGFyc2VkSW5wdXRDaGFuZ2VkIC0gMSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xyXG4gICAgdGhpcy5kZXN0cm95JC5uZXh0KCk7XHJcbiAgICB0aGlzLmRlc3Ryb3kkLnVuc3Vic2NyaWJlKCk7XHJcbiAgfVxyXG5cclxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLnNldElucHV0Rm9jdXMoMCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHNldElucHV0Rm9jdXMoaW5kZXg6IG51bWJlcik6IHZvaWQge1xyXG4gICAgdGhpcy5pbnB1dHMuZ2V0KGluZGV4KT8ubmF0aXZlRWxlbWVudC5mb2N1cygpO1xyXG4gIH1cclxuXHJcbiAgc2V0Rm9jdXNlZEVsZW1lbnQoaW5kZXg6IG51bWJlcik6IHZvaWQge1xyXG4gICAgdGhpcy5mb2N1c2VkSW5wdXQgPSBpbmRleDtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgYmFja1RvUHJldmlvdXNJbnB1dCgpIHtcclxuICAgIGNvbnN0IGlucHV0VmFsdWUgPSAnJyArIHRoaXMuZm9ybUdyb3VwLmdldChgXyR7dGhpcy5mb2N1c2VkSW5wdXR9YCk/LnZhbHVlO1xyXG4gICAgaWYgKGlucHV0VmFsdWU/Lmxlbmd0aCkgcmV0dXJuO1xyXG4gICAgdGhpcy5zZXRJbnB1dEZvY3VzKHRoaXMuZm9jdXNlZElucHV0IC0gMSk7XHJcbiAgfVxyXG5cclxuICBASG9zdExpc3RlbmVyKCdkb2N1bWVudDprZXl1cCcsIFsnJGV2ZW50J10pXHJcbiAgb25LZXlEb3duSGFuZGxlcihldmVudDogS2V5Ym9hcmRFdmVudCk6IHZvaWQge1xyXG4gICAgaWYgKGV2ZW50LmtleSA9PT0gJ0JhY2tzcGFjZScpIHtcclxuICAgICAgdGhpcy5iYWNrVG9QcmV2aW91c0lucHV0KCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBASG9zdExpc3RlbmVyKCdwYXN0ZScsIFsnJGV2ZW50J10pXHJcbiAgb25QYXN0ZShldmVudDogQ2xpcGJvYXJkRXZlbnQpOiB2b2lkIHtcclxuICAgIGNvbnN0IGNsaXBib2FyZERhdGEgPSBldmVudC5jbGlwYm9hcmREYXRhO1xyXG4gICAgY29uc3QgcGFzdGVkVGV4dCA9IGNsaXBib2FyZERhdGE/LmdldERhdGEoJ3RleHQnKTtcclxuICAgIHRoaXMuaW5wdXRQYXN0ZWRDb2RlKHBhc3RlZFRleHQgfHwgJycpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBpbnB1dFBhc3RlZENvZGUoY29kZTogc3RyaW5nKSB7XHJcbiAgICB0aGlzLmZvcm1Hcm91cC5wYXRjaFZhbHVlKHtcclxuICAgICAgJ18wJzogY29kZVswXSxcclxuICAgICAgJ18xJzogY29kZVsxXSxcclxuICAgICAgJ18yJzogY29kZVsyXSxcclxuICAgICAgJ18zJzogY29kZVszXSxcclxuICAgICAgJ180JzogY29kZVs0XSxcclxuICAgICAgJ181JzogY29kZVs1XSxcclxuICAgIH0pO1xyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIHRoaXMuc2V0SW5wdXRGb2N1cyg1KTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgdmFsaWRhdGVDb2RlKCkge1xyXG4gICAgY29uc3QgY29kZSA9IE9iamVjdC52YWx1ZXModGhpcy5mb3JtR3JvdXAudmFsdWUpLnJlZHVjZSgoYWNjOiBzdHJpbmcsIGkpID0+IGFjYyArPSBpLCAnJyk7XHJcbiAgICB0aGlzLnZhbGlkYXRlLmVtaXQoY29kZSk7XHJcbiAgfVxyXG59XHJcbiIsIjxmb3JtIFtmb3JtR3JvdXBdPVwiZm9ybUdyb3VwXCIgY2xhc3M9XCJkLWZsZXggZmxleC1jb2x1bW5cIiAoc3VibWl0KT1cInZhbGlkYXRlQ29kZSgpXCI+XHJcbiAgICA8ZGl2IGNsYXNzPVwiZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgIDxpbnB1dCAjaW5wdXQgdHlwZT1cInRleHRcIiBtYXhsZW5ndGg9XCIxXCIgZm9ybUNvbnRyb2xOYW1lPVwiXzBcIiAoZm9jdXMpPVwic2V0Rm9jdXNlZEVsZW1lbnQoMClcIiBjbGFzcz1cIm1lLTFcIiAvPlxyXG4gICAgICAgIDxpbnB1dCAjaW5wdXQgdHlwZT1cInRleHRcIiBtYXhsZW5ndGg9XCIxXCIgZm9ybUNvbnRyb2xOYW1lPVwiXzFcIiAoZm9jdXMpPVwic2V0Rm9jdXNlZEVsZW1lbnQoMSlcIiBjbGFzcz1cIm1lLTEgbXMtMVwiIC8+XHJcbiAgICAgICAgPGlucHV0ICNpbnB1dCB0eXBlPVwidGV4dFwiIG1heGxlbmd0aD1cIjFcIiBmb3JtQ29udHJvbE5hbWU9XCJfMlwiIChmb2N1cyk9XCJzZXRGb2N1c2VkRWxlbWVudCgyKVwiIGNsYXNzPVwibWUtMSBtcy0xXCIgLz5cclxuICAgICAgICA8c3BhbiBjbGFzcz1cIm1lLTEgbXMtMVwiPjwvc3Bhbj5cclxuICAgICAgICA8aW5wdXQgI2lucHV0IHR5cGU9XCJ0ZXh0XCIgbWF4bGVuZ3RoPVwiMVwiIGZvcm1Db250cm9sTmFtZT1cIl8zXCIgKGZvY3VzKT1cInNldEZvY3VzZWRFbGVtZW50KDMpXCIgY2xhc3M9XCJtZS0xIG1zLTFcIiAvPlxyXG4gICAgICAgIDxpbnB1dCAjaW5wdXQgdHlwZT1cInRleHRcIiBtYXhsZW5ndGg9XCIxXCIgZm9ybUNvbnRyb2xOYW1lPVwiXzRcIiAoZm9jdXMpPVwic2V0Rm9jdXNlZEVsZW1lbnQoNClcIiBjbGFzcz1cIm1lLTEgbXMtMVwiIC8+XHJcbiAgICAgICAgPGlucHV0ICNpbnB1dCB0eXBlPVwidGV4dFwiIG1heGxlbmd0aD1cIjFcIiBmb3JtQ29udHJvbE5hbWU9XCJfNVwiIChmb2N1cyk9XCJzZXRGb2N1c2VkRWxlbWVudCg1KVwiIGNsYXNzPVwibXMtMVwiIC8+XHJcbiAgICA8L2Rpdj5cclxuXHJcbiAgICA8ZGl2IGNsYXNzPVwiZC1mbGV4IG10LTJcIj5cclxuICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxyXG4gICAgICAgICAgICBjbGFzcz1cImJ0biBidG4tcHJpbWFyeSB3LTEwMFwiXHJcbiAgICAgICAgICAgIFtkaXNhYmxlZF09XCJmb3JtR3JvdXAuaW52YWxpZFwiXHJcbiAgICAgICAgICAgIFtjZGtMb2FkaW5nQnV0dG9uXT1cImlzTG9hZGluZ1wiXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgICA8Y2RrLXNwaW5uZXI+VmFsaWRhdGUgQ29kZTwvY2RrLXNwaW5uZXI+XHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICA8L2Rpdj5cclxuPC9mb3JtPiJdfQ==