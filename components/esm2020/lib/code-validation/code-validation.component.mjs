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
        this.backspaceControl = 0;
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
                this.backspaceControl = 0;
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
        this.backspaceControl++;
        if (this.backspaceControl < 2)
            return;
        this.setInputFocus(this.focusedInput - 1);
        this.backspaceControl = 0;
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
CodeValidationComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.1.2", type: CodeValidationComponent, selector: "cdk-code-validation", inputs: { isLoading: "isLoading" }, outputs: { validate: "validate" }, host: { listeners: { "document:keyup": "onKeyDownHandler($event)", "paste": "onPaste($event)" } }, viewQueries: [{ propertyName: "inputs", predicate: ["input"], descendants: true }], ngImport: i0, template: "<form [formGroup]=\"formGroup\" class=\"d-flex flex-column\" (submit)=\"validateCode()\">\r\n    <div class=\"d-flex align-items-center\">\r\n        <input #input type=\"text\" maxlength=\"1\" formControlName=\"_0\" (focus)=\"setFocusedElement(0)\" class=\"me-1\" />\r\n        <input #input type=\"text\" maxlength=\"1\" formControlName=\"_1\" (focus)=\"setFocusedElement(1)\" class=\"me-1 ms-1\" />\r\n        <input #input type=\"text\" maxlength=\"1\" formControlName=\"_2\" (focus)=\"setFocusedElement(2)\" class=\"me-1 ms-1\" />\r\n        <span class=\"me-1 ms-1\"></span>\r\n        <input #input type=\"text\" maxlength=\"1\" formControlName=\"_3\" (focus)=\"setFocusedElement(3)\" class=\"me-1 ms-1\" />\r\n        <input #input type=\"text\" maxlength=\"1\" formControlName=\"_4\" (focus)=\"setFocusedElement(4)\" class=\"me-1 ms-1\" />\r\n        <input #input type=\"text\" maxlength=\"1\" formControlName=\"_5\" (focus)=\"setFocusedElement(5)\" class=\"ms-1\" />\r\n    </div>\r\n\r\n    <div class=\"d-flex mt-2\">\r\n        <button\r\n            type=\"submit\"\r\n            class=\"btn btn-primary w-100\"\r\n            [disabled]=\"formGroup.invalid\"\r\n            [cdkLoadingButton]=\"isLoading\"\r\n        >\r\n            <cdk-spinner>Validate Code</cdk-spinner>\r\n        </button>\r\n    </div>\r\n</form>", styles: [":host{display:inline-block}input{padding:10px;width:37px;height:48px;border:1px solid var(--border);border-radius:4px;font-weight:400;font-size:1.25em;line-height:1.5em;text-align:center;color:var(--emphasis-high);background-color:var(--surface-5);text-transform:uppercase}span{width:8px;height:1px;display:block;background-color:var(--support-9)}\n"], dependencies: [{ kind: "directive", type: i1.ɵNgNoValidate, selector: "form:not([ngNoForm]):not([ngNativeValidate])" }, { kind: "directive", type: i1.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i1.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i1.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { kind: "directive", type: i1.MaxLengthValidator, selector: "[maxlength][formControlName],[maxlength][formControl],[maxlength][ngModel]", inputs: ["maxlength"] }, { kind: "directive", type: i1.FormGroupDirective, selector: "[formGroup]", inputs: ["formGroup"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { kind: "directive", type: i1.FormControlName, selector: "[formControlName]", inputs: ["formControlName", "disabled", "ngModel"], outputs: ["ngModelChange"] }, { kind: "component", type: i2.SpinnerComponent, selector: "cdk-spinner" }, { kind: "directive", type: i3.LoadingButtonDirective, selector: "[cdkLoadingButton]", inputs: ["cdkLoadingButton"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: CodeValidationComponent, decorators: [{
            type: Component,
            args: [{ selector: 'cdk-code-validation', template: "<form [formGroup]=\"formGroup\" class=\"d-flex flex-column\" (submit)=\"validateCode()\">\r\n    <div class=\"d-flex align-items-center\">\r\n        <input #input type=\"text\" maxlength=\"1\" formControlName=\"_0\" (focus)=\"setFocusedElement(0)\" class=\"me-1\" />\r\n        <input #input type=\"text\" maxlength=\"1\" formControlName=\"_1\" (focus)=\"setFocusedElement(1)\" class=\"me-1 ms-1\" />\r\n        <input #input type=\"text\" maxlength=\"1\" formControlName=\"_2\" (focus)=\"setFocusedElement(2)\" class=\"me-1 ms-1\" />\r\n        <span class=\"me-1 ms-1\"></span>\r\n        <input #input type=\"text\" maxlength=\"1\" formControlName=\"_3\" (focus)=\"setFocusedElement(3)\" class=\"me-1 ms-1\" />\r\n        <input #input type=\"text\" maxlength=\"1\" formControlName=\"_4\" (focus)=\"setFocusedElement(4)\" class=\"me-1 ms-1\" />\r\n        <input #input type=\"text\" maxlength=\"1\" formControlName=\"_5\" (focus)=\"setFocusedElement(5)\" class=\"ms-1\" />\r\n    </div>\r\n\r\n    <div class=\"d-flex mt-2\">\r\n        <button\r\n            type=\"submit\"\r\n            class=\"btn btn-primary w-100\"\r\n            [disabled]=\"formGroup.invalid\"\r\n            [cdkLoadingButton]=\"isLoading\"\r\n        >\r\n            <cdk-spinner>Validate Code</cdk-spinner>\r\n        </button>\r\n    </div>\r\n</form>", styles: [":host{display:inline-block}input{padding:10px;width:37px;height:48px;border:1px solid var(--border);border-radius:4px;font-weight:400;font-size:1.25em;line-height:1.5em;text-align:center;color:var(--emphasis-high);background-color:var(--surface-5);text-transform:uppercase}span{width:8px;height:1px;display:block;background-color:var(--support-9)}\n"] }]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29kZS12YWxpZGF0aW9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NvbXBvbmVudHMvc3JjL2xpYi9jb2RlLXZhbGlkYXRpb24vY29kZS12YWxpZGF0aW9uLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NvbXBvbmVudHMvc3JjL2xpYi9jb2RlLXZhbGlkYXRpb24vY29kZS12YWxpZGF0aW9uLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFFTCxTQUFTLEVBRVQsWUFBWSxFQUNaLFlBQVksRUFDWixLQUFLLEVBR0wsTUFBTSxFQUNOLFNBQVMsRUFDVCxZQUFZLEdBQ2IsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLFdBQVcsRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDcEUsT0FBTyxFQUFFLEdBQUcsRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFFLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxNQUFNLENBQUM7Ozs7O0FBUXBFLE1BQU0sT0FBTyx1QkFBdUI7SUFtQmxDO1FBaEJ1QixXQUFNLEdBQUcsSUFBSSxTQUFTLEVBQWMsQ0FBQztRQUNuRCxjQUFTLEdBQUcsS0FBSyxDQUFDO1FBQ2pCLGFBQVEsR0FBRyxJQUFJLFlBQVksRUFBVSxDQUFDO1FBRXhDLGFBQVEsR0FBRyxJQUFJLE9BQU8sRUFBUSxDQUFDO1FBQy9CLGlCQUFZLEdBQUcsQ0FBQyxDQUFDO1FBQ2pCLHFCQUFnQixHQUFHLENBQUMsQ0FBQztRQUM3QixjQUFTLEdBQUcsSUFBSSxTQUFTLENBQUM7WUFDeEIsRUFBRSxFQUFFLElBQUksV0FBVyxDQUFDLEVBQUUsRUFBRSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUM5QyxFQUFFLEVBQUUsSUFBSSxXQUFXLENBQUMsRUFBRSxFQUFFLENBQUMs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QjswRUFPUixNQUFNO3NCQUE1QixZQUFZO3VCQUFDLE9BQU87Z0JBQ1osU0FBUztzQkFBakIsS0FBSztnQkFDSSxRQUFRO3NCQUFqQixNQUFNO2dCQTRFUCxnQkFBZ0I7c0JBRGYsWUFBWTt1QkFBQyxnQkFBZ0IsRUFBRSxDQUFDLFFBQVEsQ0FBQztnQkFRMUMsT0FBTztzQkFETixZQUFZO3VCQUFDLE9BQU8sRUFBRSxDQUFDLFFBQVEsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgQWZ0ZXJWaWV3SW5pdCxcclxuICBDb21wb25lbnQsXHJcbiAgRWxlbWVudFJlZixcclxuICBFdmVudEVtaXR0ZXIsXHJcbiAgSG9zdExpc3RlbmVyLFxyXG4gIElucHV0LFxyXG4gIE9uRGVzdHJveSxcclxuICBPbkluaXQsXHJcbiAgT3V0cHV0LFxyXG4gIFF1ZXJ5TGlzdCxcclxuICBWaWV3Q2hpbGRyZW4sXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEZvcm1Db250cm9sLCBGb3JtR3JvdXAsIFZhbGlkYXRvcnMgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IG1hcCwgcGFpcndpc2UsIHN0YXJ0V2l0aCwgU3ViamVjdCwgdGFrZVVudGlsIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IElGb3JtVmFsdWVDaGFuZ2VkIH0gZnJvbSAnLi9tb2RlbHMvZm9ybS12YWx1ZS1jaGFuZ2VkLm1vZGVsJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnY2RrLWNvZGUtdmFsaWRhdGlvbicsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2NvZGUtdmFsaWRhdGlvbi5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vY29kZS12YWxpZGF0aW9uLmNvbXBvbmVudC5zY3NzJ10sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDb2RlVmFsaWRhdGlvbkNvbXBvbmVudFxyXG4gIGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3ksIEFmdGVyVmlld0luaXRcclxue1xyXG4gIEBWaWV3Q2hpbGRyZW4oJ2lucHV0JykgaW5wdXRzID0gbmV3IFF1ZXJ5TGlzdDxFbGVtZW50UmVmPigpO1xyXG4gIEBJbnB1dCgpIGlzTG9hZGluZyA9IGZhbHNlO1xyXG4gIEBPdXRwdXQoKSB2YWxpZGF0ZSA9IG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nPigpO1xyXG5cclxuICBwcml2YXRlIGRlc3Ryb3kkID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcclxuICBwcml2YXRlIGZvY3VzZWRJbnB1dCA9IDA7XHJcbiAgcHJpdmF0ZSBiYWNrc3BhY2VDb250cm9sID0gMDtcclxuICBmb3JtR3JvdXAgPSBuZXcgRm9ybUdyb3VwKHtcclxuICAgIF8wOiBuZXcgRm9ybUNvbnRyb2woJycsIFtWYWxpZGF0b3JzLnJlcXVpcmVkXSksXHJcbiAgICBfMTogbmV3IEZvcm1Db250cm9sKCcnLCBbVmFsaWRhdG9ycy5yZXF1aXJlZF0pLFxyXG4gICAgXzI6IG5ldyBGb3JtQ29udHJvbCgnJywgW1ZhbGlkYXRvcnMucmVxdWlyZWRdKSxcclxuICAgIF8zOiBuZXcgRm9ybUNvbnRyb2woJycsIFtWYWxpZGF0b3JzLnJlcXVpcmVkXSksXHJcbiAgICBfNDogbmV3IEZvcm1Db250cm9sKCcnLCBbVmFsaWRhdG9ycy5yZXF1aXJlZF0pLFxyXG4gICAgXzU6IG5ldyBGb3JtQ29udHJvbCgnJywgW1ZhbGlkYXRvcnMucmVxdWlyZWRdKSxcclxuICB9KTtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7fVxyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgIHRoaXMuZm9ybUdyb3VwLnZhbHVlQ2hhbmdlc1xyXG4gICAgICAucGlwZShcclxuICAgICAgICB0YWtlVW50aWwodGhpcy5kZXN0cm95JCksXHJcbiAgICAgICAgc3RhcnRXaXRoKG51bGwpLFxyXG4gICAgICAgIHBhaXJ3aXNlKCksXHJcbiAgICAgICAgbWFwKChbb2xkU3RhdGUsIG5ld1N0YXRlXTogYW55KSA9PiB7XHJcbiAgICAgICAgICBjb25zdCBjaGFuZ2VzOiBJRm9ybVZhbHVlQ2hhbmdlZCA9IHtcclxuICAgICAgICAgICAgY2hhbmdlZEtleTogJ18wJyxcclxuICAgICAgICAgICAgaXNBZGRpbmc6IHRydWUsXHJcbiAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgIGlmICghb2xkU3RhdGUpIHJldHVybiBjaGFuZ2VzO1xyXG5cclxuICAgICAgICAgIGZvciAobGV0IGtleSBpbiBuZXdTdGF0ZSkge1xyXG4gICAgICAgICAgICBpZiAob2xkU3RhdGVba2V5XSAhPT0gbmV3U3RhdGVba2V5XSkge1xyXG4gICAgICAgICAgICAgIGNoYW5nZXMuY2hhbmdlZEtleSA9IGtleTtcclxuICAgICAgICAgICAgICBjaGFuZ2VzLmlzQWRkaW5nID0gIW9sZFN0YXRlW2tleV0ubGVuZ3RoO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgcmV0dXJuIGNoYW5nZXM7XHJcbiAgICAgICAgfSlcclxuICAgICAgKVxyXG4gICAgICAuc3Vic2NyaWJlKCh2YWx1ZSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHBhcnNlZElucHV0Q2hhbmdlZCA9IHBhcnNlSW50KFxyXG4gICAgICAgICAgdmFsdWUuY2hhbmdlZEtleS5yZXBsYWNlKC9fL2dpLCAnJylcclxuICAgICAgICApO1xyXG4gICAgICAgIGlmICh2YWx1ZS5pc0FkZGluZykge1xyXG4gICAgICAgICAgdGhpcy5zZXRJbnB1dEZvY3VzKHBhcnNlZElucHV0Q2hhbmdlZCArIDEpO1xyXG4gICAgICAgICAgdGhpcy5iYWNrc3BhY2VDb250cm9sID0gMDtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICB0aGlzLmRlc3Ryb3kkLm5leHQoKTtcclxuICAgIHRoaXMuZGVzdHJveSQudW5zdWJzY3JpYmUoKTtcclxuICB9XHJcblxyXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcclxuICAgIHRoaXMuc2V0SW5wdXRGb2N1cygwKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgc2V0SW5wdXRGb2N1cyhpbmRleDogbnVtYmVyKTogdm9pZCB7XHJcbiAgICB0aGlzLmlucHV0cy5nZXQoaW5kZXgpPy5uYXRpdmVFbGVtZW50LmZvY3VzKCk7XHJcbiAgfVxyXG5cclxuICBzZXRGb2N1c2VkRWxlbWVudChpbmRleDogbnVtYmVyKTogdm9pZCB7XHJcbiAgICB0aGlzLmZvY3VzZWRJbnB1dCA9IGluZGV4O1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBiYWNrVG9QcmV2aW91c0lucHV0KCkge1xyXG4gICAgdGhpcy5iYWNrc3BhY2VDb250cm9sKys7XHJcbiAgICBpZiAodGhpcy5iYWNrc3BhY2VDb250cm9sIDwgMikgcmV0dXJuO1xyXG4gICAgdGhpcy5zZXRJbnB1dEZvY3VzKHRoaXMuZm9jdXNlZElucHV0IC0gMSk7XHJcbiAgICB0aGlzLmJhY2tzcGFjZUNvbnRyb2wgPSAwO1xyXG4gIH1cclxuXHJcbiAgQEhvc3RMaXN0ZW5lcignZG9jdW1lbnQ6a2V5dXAnLCBbJyRldmVudCddKVxyXG4gIG9uS2V5RG93bkhhbmRsZXIoZXZlbnQ6IEtleWJvYXJkRXZlbnQpOiB2b2lkIHtcclxuICAgIGlmIChldmVudC5rZXkgPT09ICdCYWNrc3BhY2UnKSB7XHJcbiAgICAgIHRoaXMuYmFja1RvUHJldmlvdXNJbnB1dCgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgQEhvc3RMaXN0ZW5lcigncGFzdGUnLCBbJyRldmVudCddKVxyXG4gIG9uUGFzdGUoZXZlbnQ6IENsaXBib2FyZEV2ZW50KTogdm9pZCB7XHJcbiAgICBjb25zdCBjbGlwYm9hcmREYXRhID0gZXZlbnQuY2xpcGJvYXJkRGF0YTtcclxuICAgIGNvbnN0IHBhc3RlZFRleHQgPSBjbGlwYm9hcmREYXRhPy5nZXREYXRhKCd0ZXh0Jyk7XHJcbiAgICB0aGlzLmlucHV0UGFzdGVkQ29kZShwYXN0ZWRUZXh0IHx8ICcnKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgaW5wdXRQYXN0ZWRDb2RlKGNvZGU6IHN0cmluZykge1xyXG4gICAgdGhpcy5mb3JtR3JvdXAucGF0Y2hWYWx1ZSh7XHJcbiAgICAgICdfMCc6IGNvZGVbMF0sXHJcbiAgICAgICdfMSc6IGNvZGVbMV0sXHJcbiAgICAgICdfMic6IGNvZGVbMl0sXHJcbiAgICAgICdfMyc6IGNvZGVbM10sXHJcbiAgICAgICdfNCc6IGNvZGVbNF0sXHJcbiAgICAgICdfNSc6IGNvZGVbNV0sXHJcbiAgICB9KTtcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICB0aGlzLnNldElucHV0Rm9jdXMoNSk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHZhbGlkYXRlQ29kZSgpIHtcclxuICAgIGNvbnN0IGNvZGUgPSBPYmplY3QudmFsdWVzKHRoaXMuZm9ybUdyb3VwLnZhbHVlKS5yZWR1Y2UoKGFjYzogc3RyaW5nLCBpKSA9PiBhY2MgKz0gaSwgJycpO1xyXG4gICAgdGhpcy52YWxpZGF0ZS5lbWl0KGNvZGUpO1xyXG4gIH1cclxufVxyXG4iLCI8Zm9ybSBbZm9ybUdyb3VwXT1cImZvcm1Hcm91cFwiIGNsYXNzPVwiZC1mbGV4IGZsZXgtY29sdW1uXCIgKHN1Ym1pdCk9XCJ2YWxpZGF0ZUNvZGUoKVwiPlxyXG4gICAgPGRpdiBjbGFzcz1cImQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICA8aW5wdXQgI2lucHV0IHR5cGU9XCJ0ZXh0XCIgbWF4bGVuZ3RoPVwiMVwiIGZvcm1Db250cm9sTmFtZT1cIl8wXCIgKGZvY3VzKT1cInNldEZvY3VzZWRFbGVtZW50KDApXCIgY2xhc3M9XCJtZS0xXCIgLz5cclxuICAgICAgICA8aW5wdXQgI2lucHV0IHR5cGU9XCJ0ZXh0XCIgbWF4bGVuZ3RoPVwiMVwiIGZvcm1Db250cm9sTmFtZT1cIl8xXCIgKGZvY3VzKT1cInNldEZvY3VzZWRFbGVtZW50KDEpXCIgY2xhc3M9XCJtZS0xIG1zLTFcIiAvPlxyXG4gICAgICAgIDxpbnB1dCAjaW5wdXQgdHlwZT1cInRleHRcIiBtYXhsZW5ndGg9XCIxXCIgZm9ybUNvbnRyb2xOYW1lPVwiXzJcIiAoZm9jdXMpPVwic2V0Rm9jdXNlZEVsZW1lbnQoMilcIiBjbGFzcz1cIm1lLTEgbXMtMVwiIC8+XHJcbiAgICAgICAgPHNwYW4gY2xhc3M9XCJtZS0xIG1zLTFcIj48L3NwYW4+XHJcbiAgICAgICAgPGlucHV0ICNpbnB1dCB0eXBlPVwidGV4dFwiIG1heGxlbmd0aD1cIjFcIiBmb3JtQ29udHJvbE5hbWU9XCJfM1wiIChmb2N1cyk9XCJzZXRGb2N1c2VkRWxlbWVudCgzKVwiIGNsYXNzPVwibWUtMSBtcy0xXCIgLz5cclxuICAgICAgICA8aW5wdXQgI2lucHV0IHR5cGU9XCJ0ZXh0XCIgbWF4bGVuZ3RoPVwiMVwiIGZvcm1Db250cm9sTmFtZT1cIl80XCIgKGZvY3VzKT1cInNldEZvY3VzZWRFbGVtZW50KDQpXCIgY2xhc3M9XCJtZS0xIG1zLTFcIiAvPlxyXG4gICAgICAgIDxpbnB1dCAjaW5wdXQgdHlwZT1cInRleHRcIiBtYXhsZW5ndGg9XCIxXCIgZm9ybUNvbnRyb2xOYW1lPVwiXzVcIiAoZm9jdXMpPVwic2V0Rm9jdXNlZEVsZW1lbnQoNSlcIiBjbGFzcz1cIm1zLTFcIiAvPlxyXG4gICAgPC9kaXY+XHJcblxyXG4gICAgPGRpdiBjbGFzcz1cImQtZmxleCBtdC0yXCI+XHJcbiAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcclxuICAgICAgICAgICAgY2xhc3M9XCJidG4gYnRuLXByaW1hcnkgdy0xMDBcIlxyXG4gICAgICAgICAgICBbZGlzYWJsZWRdPVwiZm9ybUdyb3VwLmludmFsaWRcIlxyXG4gICAgICAgICAgICBbY2RrTG9hZGluZ0J1dHRvbl09XCJpc0xvYWRpbmdcIlxyXG4gICAgICAgID5cclxuICAgICAgICAgICAgPGNkay1zcGlubmVyPlZhbGlkYXRlIENvZGU8L2Nkay1zcGlubmVyPlxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgPC9kaXY+XHJcbjwvZm9ybT4iXX0=