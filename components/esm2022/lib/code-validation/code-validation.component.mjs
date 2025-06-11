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
        const clipboardData = event?.clipboardData;
        const pastedText = clipboardData?.getData('text');
        if (!pastedText)
            return;
        this.inputPastedCode(pastedText);
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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.10", ngImport: i0, type: CodeValidationComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.10", type: CodeValidationComponent, selector: "cdk-code-validation", inputs: { isLoading: "isLoading" }, outputs: { validate: "validate" }, host: { listeners: { "document:keyup": "onKeyDownHandler($event)", "paste": "onPaste($event)" } }, viewQueries: [{ propertyName: "inputs", predicate: ["input"], descendants: true }], ngImport: i0, template: "<form [formGroup]=\"formGroup\" class=\"d-flex flex-column\" (submit)=\"validateCode()\">\r\n    <div class=\"d-flex align-items-center\">\r\n        <input #input type=\"text\" maxlength=\"1\" formControlName=\"_0\" (focus)=\"setFocusedElement(0)\" class=\"me-1\" />\r\n        <input #input type=\"text\" maxlength=\"1\" formControlName=\"_1\" (focus)=\"setFocusedElement(1)\" class=\"me-1 ms-1\" />\r\n        <input #input type=\"text\" maxlength=\"1\" formControlName=\"_2\" (focus)=\"setFocusedElement(2)\" class=\"me-1 ms-1\" />\r\n        <span class=\"me-1 ms-1\"></span>\r\n        <input #input type=\"text\" maxlength=\"1\" formControlName=\"_3\" (focus)=\"setFocusedElement(3)\" class=\"me-1 ms-1\" />\r\n        <input #input type=\"text\" maxlength=\"1\" formControlName=\"_4\" (focus)=\"setFocusedElement(4)\" class=\"me-1 ms-1\" />\r\n        <input #input type=\"text\" maxlength=\"1\" formControlName=\"_5\" (focus)=\"setFocusedElement(5)\" class=\"ms-1\" />\r\n    </div>\r\n\r\n    <div class=\"d-flex mt-2\">\r\n        <button\r\n            type=\"submit\"\r\n            class=\"btn btn-primary w-100\"\r\n            [disabled]=\"formGroup.invalid\"\r\n            [cdkLoadingButton]=\"isLoading\"\r\n        >\r\n            <cdk-spinner>Validate Code</cdk-spinner>\r\n        </button>\r\n    </div>\r\n</form>", styles: [":host{display:inline-block}input{padding:10px;width:37px;height:48px;border:1px solid var(--border);border-radius:4px;font-weight:400;font-size:1.25em;line-height:1.5em;text-align:center;color:var(--emphasis-high);background-color:var(--surface-5);text-transform:uppercase}span{width:8px;height:1px;display:block;background-color:var(--support-9)}\n"], dependencies: [{ kind: "directive", type: i1.ɵNgNoValidate, selector: "form:not([ngNoForm]):not([ngNativeValidate])" }, { kind: "directive", type: i1.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i1.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i1.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { kind: "directive", type: i1.MaxLengthValidator, selector: "[maxlength][formControlName],[maxlength][formControl],[maxlength][ngModel]", inputs: ["maxlength"] }, { kind: "directive", type: i1.FormGroupDirective, selector: "[formGroup]", inputs: ["formGroup"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { kind: "directive", type: i1.FormControlName, selector: "[formControlName]", inputs: ["formControlName", "disabled", "ngModel"], outputs: ["ngModelChange"] }, { kind: "component", type: i2.SpinnerComponent, selector: "cdk-spinner" }, { kind: "directive", type: i3.LoadingButtonDirective, selector: "[cdkLoadingButton]", inputs: ["cdkLoadingButton"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.10", ngImport: i0, type: CodeValidationComponent, decorators: [{
            type: Component,
            args: [{ selector: 'cdk-code-validation', template: "<form [formGroup]=\"formGroup\" class=\"d-flex flex-column\" (submit)=\"validateCode()\">\r\n    <div class=\"d-flex align-items-center\">\r\n        <input #input type=\"text\" maxlength=\"1\" formControlName=\"_0\" (focus)=\"setFocusedElement(0)\" class=\"me-1\" />\r\n        <input #input type=\"text\" maxlength=\"1\" formControlName=\"_1\" (focus)=\"setFocusedElement(1)\" class=\"me-1 ms-1\" />\r\n        <input #input type=\"text\" maxlength=\"1\" formControlName=\"_2\" (focus)=\"setFocusedElement(2)\" class=\"me-1 ms-1\" />\r\n        <span class=\"me-1 ms-1\"></span>\r\n        <input #input type=\"text\" maxlength=\"1\" formControlName=\"_3\" (focus)=\"setFocusedElement(3)\" class=\"me-1 ms-1\" />\r\n        <input #input type=\"text\" maxlength=\"1\" formControlName=\"_4\" (focus)=\"setFocusedElement(4)\" class=\"me-1 ms-1\" />\r\n        <input #input type=\"text\" maxlength=\"1\" formControlName=\"_5\" (focus)=\"setFocusedElement(5)\" class=\"ms-1\" />\r\n    </div>\r\n\r\n    <div class=\"d-flex mt-2\">\r\n        <button\r\n            type=\"submit\"\r\n            class=\"btn btn-primary w-100\"\r\n            [disabled]=\"formGroup.invalid\"\r\n            [cdkLoadingButton]=\"isLoading\"\r\n        >\r\n            <cdk-spinner>Validate Code</cdk-spinner>\r\n        </button>\r\n    </div>\r\n</form>", styles: [":host{display:inline-block}input{padding:10px;width:37px;height:48px;border:1px solid var(--border);border-radius:4px;font-weight:400;font-size:1.25em;line-height:1.5em;text-align:center;color:var(--emphasis-high);background-color:var(--surface-5);text-transform:uppercase}span{width:8px;height:1px;display:block;background-color:var(--support-9)}\n"] }]
        }], ctorParameters: () => [], propDecorators: { inputs: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29kZS12YWxpZGF0aW9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NvbXBvbmVudHMvc3JjL2xpYi9jb2RlLXZhbGlkYXRpb24vY29kZS12YWxpZGF0aW9uLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NvbXBvbmVudHMvc3JjL2xpYi9jb2RlLXZhbGlkYXRpb24vY29kZS12YWxpZGF0aW9uLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFFTCxTQUFTLEVBRVQsWUFBWSxFQUNaLFlBQVksRUFDWixLQUFLLEVBR0wsTUFBTSxFQUNOLFNBQVMsRUFDVCxZQUFZLEdBQ2IsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLFdBQVcsRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDcEUsT0FBTyxFQUFFLEdBQUcsRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFFLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxNQUFNLENBQUM7Ozs7O0FBUXBFLE1BQU0sT0FBTyx1QkFBdUI7SUFtQmxDO1FBaEJ1QixXQUFNLEdBQUcsSUFBSSxTQUFTLEVBQWMsQ0FBQztRQUNuRCxjQUFTLEdBQUcsS0FBSyxDQUFDO1FBQ2pCLGFBQVEsR0FBRyxJQUFJLFlBQVksRUFBVSxDQUFDO1FBRXhDLGFBQVEsR0FBRyxJQUFJLE9BQU8sRUFBUSxDQUFDO1FBQy9CLGlCQUFZLEdBQUcsQ0FBQyxDQUFDO1FBQ2pCLHFCQUFnQixHQUFHLENBQUMsQ0FBQztRQUM3QixjQUFTLEdBQUcsSUFBSSxTQUFTLENBQUM7WUFDeEIsRUFBRSxFQUFFLElBQUksV0FBVyxDQUFDLEVBQUUsRUFBRSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUM5QyxFQUFFLEVBQUUsSUFBSSxXQUFXLENBQUMsRUFBRSxFQUFFLENBQUMs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LHVCQUF1Qix5VEN0QnBDLDR6Q0FxQk87OzRGRENNLHVCQUF1QjtrQkFMbkMsU0FBUzsrQkFDRSxxQkFBcUI7d0RBT1IsTUFBTTtzQkFBNUIsWUFBWTt1QkFBQyxPQUFPO2dCQUNaLFNBQVM7c0JBQWpCLEtBQUs7Z0JBQ0ksUUFBUTtzQkFBakIsTUFBTTtnQkE0RVAsZ0JBQWdCO3NCQURmLFlBQVk7dUJBQUMsZ0JBQWdCLEVBQUUsQ0FBQyxRQUFRLENBQUM7Z0JBUTFDLE9BQU87c0JBRE4sWUFBWTt1QkFBQyxPQUFPLEVBQUUsQ0FBQyxRQUFRLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIEFmdGVyVmlld0luaXQsXHJcbiAgQ29tcG9uZW50LFxyXG4gIEVsZW1lbnRSZWYsXHJcbiAgRXZlbnRFbWl0dGVyLFxyXG4gIEhvc3RMaXN0ZW5lcixcclxuICBJbnB1dCxcclxuICBPbkRlc3Ryb3ksXHJcbiAgT25Jbml0LFxyXG4gIE91dHB1dCxcclxuICBRdWVyeUxpc3QsXHJcbiAgVmlld0NoaWxkcmVuLFxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBGb3JtQ29udHJvbCwgRm9ybUdyb3VwLCBWYWxpZGF0b3JzIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBtYXAsIHBhaXJ3aXNlLCBzdGFydFdpdGgsIFN1YmplY3QsIHRha2VVbnRpbCB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBJRm9ybVZhbHVlQ2hhbmdlZCB9IGZyb20gJy4vbW9kZWxzL2Zvcm0tdmFsdWUtY2hhbmdlZC5tb2RlbCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2Nkay1jb2RlLXZhbGlkYXRpb24nLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9jb2RlLXZhbGlkYXRpb24uY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL2NvZGUtdmFsaWRhdGlvbi5jb21wb25lbnQuc2NzcyddLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ29kZVZhbGlkYXRpb25Db21wb25lbnRcclxuICBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95LCBBZnRlclZpZXdJbml0XHJcbntcclxuICBAVmlld0NoaWxkcmVuKCdpbnB1dCcpIGlucHV0cyA9IG5ldyBRdWVyeUxpc3Q8RWxlbWVudFJlZj4oKTtcclxuICBASW5wdXQoKSBpc0xvYWRpbmcgPSBmYWxzZTtcclxuICBAT3V0cHV0KCkgdmFsaWRhdGUgPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZz4oKTtcclxuXHJcbiAgcHJpdmF0ZSBkZXN0cm95JCA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XHJcbiAgcHJpdmF0ZSBmb2N1c2VkSW5wdXQgPSAwO1xyXG4gIHByaXZhdGUgYmFja3NwYWNlQ29udHJvbCA9IDA7XHJcbiAgZm9ybUdyb3VwID0gbmV3IEZvcm1Hcm91cCh7XHJcbiAgICBfMDogbmV3IEZvcm1Db250cm9sKCcnLCBbVmFsaWRhdG9ycy5yZXF1aXJlZF0pLFxyXG4gICAgXzE6IG5ldyBGb3JtQ29udHJvbCgnJywgW1ZhbGlkYXRvcnMucmVxdWlyZWRdKSxcclxuICAgIF8yOiBuZXcgRm9ybUNvbnRyb2woJycsIFtWYWxpZGF0b3JzLnJlcXVpcmVkXSksXHJcbiAgICBfMzogbmV3IEZvcm1Db250cm9sKCcnLCBbVmFsaWRhdG9ycy5yZXF1aXJlZF0pLFxyXG4gICAgXzQ6IG5ldyBGb3JtQ29udHJvbCgnJywgW1ZhbGlkYXRvcnMucmVxdWlyZWRdKSxcclxuICAgIF81OiBuZXcgRm9ybUNvbnRyb2woJycsIFtWYWxpZGF0b3JzLnJlcXVpcmVkXSksXHJcbiAgfSk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkge31cclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLmZvcm1Hcm91cC52YWx1ZUNoYW5nZXNcclxuICAgICAgLnBpcGUoXHJcbiAgICAgICAgdGFrZVVudGlsKHRoaXMuZGVzdHJveSQpLFxyXG4gICAgICAgIHN0YXJ0V2l0aChudWxsKSxcclxuICAgICAgICBwYWlyd2lzZSgpLFxyXG4gICAgICAgIG1hcCgoW29sZFN0YXRlLCBuZXdTdGF0ZV06IGFueSkgPT4ge1xyXG4gICAgICAgICAgY29uc3QgY2hhbmdlczogSUZvcm1WYWx1ZUNoYW5nZWQgPSB7XHJcbiAgICAgICAgICAgIGNoYW5nZWRLZXk6ICdfMCcsXHJcbiAgICAgICAgICAgIGlzQWRkaW5nOiB0cnVlLFxyXG4gICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICBpZiAoIW9sZFN0YXRlKSByZXR1cm4gY2hhbmdlcztcclxuXHJcbiAgICAgICAgICBmb3IgKGxldCBrZXkgaW4gbmV3U3RhdGUpIHtcclxuICAgICAgICAgICAgaWYgKG9sZFN0YXRlW2tleV0gIT09IG5ld1N0YXRlW2tleV0pIHtcclxuICAgICAgICAgICAgICBjaGFuZ2VzLmNoYW5nZWRLZXkgPSBrZXk7XHJcbiAgICAgICAgICAgICAgY2hhbmdlcy5pc0FkZGluZyA9ICFvbGRTdGF0ZVtrZXldLmxlbmd0aDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIHJldHVybiBjaGFuZ2VzO1xyXG4gICAgICAgIH0pXHJcbiAgICAgIClcclxuICAgICAgLnN1YnNjcmliZSgodmFsdWUpID0+IHtcclxuICAgICAgICBjb25zdCBwYXJzZWRJbnB1dENoYW5nZWQgPSBwYXJzZUludChcclxuICAgICAgICAgIHZhbHVlLmNoYW5nZWRLZXkucmVwbGFjZSgvXy9naSwgJycpXHJcbiAgICAgICAgKTtcclxuICAgICAgICBpZiAodmFsdWUuaXNBZGRpbmcpIHtcclxuICAgICAgICAgIHRoaXMuc2V0SW5wdXRGb2N1cyhwYXJzZWRJbnB1dENoYW5nZWQgKyAxKTtcclxuICAgICAgICAgIHRoaXMuYmFja3NwYWNlQ29udHJvbCA9IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xyXG4gICAgdGhpcy5kZXN0cm95JC5uZXh0KCk7XHJcbiAgICB0aGlzLmRlc3Ryb3kkLnVuc3Vic2NyaWJlKCk7XHJcbiAgfVxyXG5cclxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLnNldElucHV0Rm9jdXMoMCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHNldElucHV0Rm9jdXMoaW5kZXg6IG51bWJlcik6IHZvaWQge1xyXG4gICAgdGhpcy5pbnB1dHMuZ2V0KGluZGV4KT8ubmF0aXZlRWxlbWVudC5mb2N1cygpO1xyXG4gIH1cclxuXHJcbiAgc2V0Rm9jdXNlZEVsZW1lbnQoaW5kZXg6IG51bWJlcik6IHZvaWQge1xyXG4gICAgdGhpcy5mb2N1c2VkSW5wdXQgPSBpbmRleDtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgYmFja1RvUHJldmlvdXNJbnB1dCgpIHtcclxuICAgIHRoaXMuYmFja3NwYWNlQ29udHJvbCsrO1xyXG4gICAgaWYgKHRoaXMuYmFja3NwYWNlQ29udHJvbCA8IDIpIHJldHVybjtcclxuICAgIHRoaXMuc2V0SW5wdXRGb2N1cyh0aGlzLmZvY3VzZWRJbnB1dCAtIDEpO1xyXG4gICAgdGhpcy5iYWNrc3BhY2VDb250cm9sID0gMDtcclxuICB9XHJcblxyXG4gIEBIb3N0TGlzdGVuZXIoJ2RvY3VtZW50OmtleXVwJywgWyckZXZlbnQnXSlcclxuICBvbktleURvd25IYW5kbGVyKGV2ZW50OiBLZXlib2FyZEV2ZW50KTogdm9pZCB7XHJcbiAgICBpZiAoZXZlbnQua2V5ID09PSAnQmFja3NwYWNlJykge1xyXG4gICAgICB0aGlzLmJhY2tUb1ByZXZpb3VzSW5wdXQoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIEBIb3N0TGlzdGVuZXIoJ3Bhc3RlJywgWyckZXZlbnQnXSlcclxuICBvblBhc3RlKGV2ZW50OiBDbGlwYm9hcmRFdmVudCk6IHZvaWQge1xyXG4gICAgY29uc3QgY2xpcGJvYXJkRGF0YSA9IGV2ZW50Py5jbGlwYm9hcmREYXRhO1xyXG4gICAgY29uc3QgcGFzdGVkVGV4dCA9IGNsaXBib2FyZERhdGE/LmdldERhdGEoJ3RleHQnKTtcclxuICAgIGlmICghcGFzdGVkVGV4dCkgcmV0dXJuO1xyXG4gICAgdGhpcy5pbnB1dFBhc3RlZENvZGUocGFzdGVkVGV4dCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGlucHV0UGFzdGVkQ29kZShjb2RlOiBzdHJpbmcpIHtcclxuICAgIHRoaXMuZm9ybUdyb3VwLnBhdGNoVmFsdWUoe1xyXG4gICAgICAnXzAnOiBjb2RlWzBdLFxyXG4gICAgICAnXzEnOiBjb2RlWzFdLFxyXG4gICAgICAnXzInOiBjb2RlWzJdLFxyXG4gICAgICAnXzMnOiBjb2RlWzNdLFxyXG4gICAgICAnXzQnOiBjb2RlWzRdLFxyXG4gICAgICAnXzUnOiBjb2RlWzVdLFxyXG4gICAgfSk7XHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgdGhpcy5zZXRJbnB1dEZvY3VzKDUpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICB2YWxpZGF0ZUNvZGUoKSB7XHJcbiAgICBjb25zdCBjb2RlID0gT2JqZWN0LnZhbHVlcyh0aGlzLmZvcm1Hcm91cC52YWx1ZSkucmVkdWNlKChhY2M6IHN0cmluZywgaSkgPT4gYWNjICs9IGksICcnKTtcclxuICAgIHRoaXMudmFsaWRhdGUuZW1pdChjb2RlKTtcclxuICB9XHJcbn1cclxuIiwiPGZvcm0gW2Zvcm1Hcm91cF09XCJmb3JtR3JvdXBcIiBjbGFzcz1cImQtZmxleCBmbGV4LWNvbHVtblwiIChzdWJtaXQpPVwidmFsaWRhdGVDb2RlKClcIj5cclxuICAgIDxkaXYgY2xhc3M9XCJkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyXCI+XHJcbiAgICAgICAgPGlucHV0ICNpbnB1dCB0eXBlPVwidGV4dFwiIG1heGxlbmd0aD1cIjFcIiBmb3JtQ29udHJvbE5hbWU9XCJfMFwiIChmb2N1cyk9XCJzZXRGb2N1c2VkRWxlbWVudCgwKVwiIGNsYXNzPVwibWUtMVwiIC8+XHJcbiAgICAgICAgPGlucHV0ICNpbnB1dCB0eXBlPVwidGV4dFwiIG1heGxlbmd0aD1cIjFcIiBmb3JtQ29udHJvbE5hbWU9XCJfMVwiIChmb2N1cyk9XCJzZXRGb2N1c2VkRWxlbWVudCgxKVwiIGNsYXNzPVwibWUtMSBtcy0xXCIgLz5cclxuICAgICAgICA8aW5wdXQgI2lucHV0IHR5cGU9XCJ0ZXh0XCIgbWF4bGVuZ3RoPVwiMVwiIGZvcm1Db250cm9sTmFtZT1cIl8yXCIgKGZvY3VzKT1cInNldEZvY3VzZWRFbGVtZW50KDIpXCIgY2xhc3M9XCJtZS0xIG1zLTFcIiAvPlxyXG4gICAgICAgIDxzcGFuIGNsYXNzPVwibWUtMSBtcy0xXCI+PC9zcGFuPlxyXG4gICAgICAgIDxpbnB1dCAjaW5wdXQgdHlwZT1cInRleHRcIiBtYXhsZW5ndGg9XCIxXCIgZm9ybUNvbnRyb2xOYW1lPVwiXzNcIiAoZm9jdXMpPVwic2V0Rm9jdXNlZEVsZW1lbnQoMylcIiBjbGFzcz1cIm1lLTEgbXMtMVwiIC8+XHJcbiAgICAgICAgPGlucHV0ICNpbnB1dCB0eXBlPVwidGV4dFwiIG1heGxlbmd0aD1cIjFcIiBmb3JtQ29udHJvbE5hbWU9XCJfNFwiIChmb2N1cyk9XCJzZXRGb2N1c2VkRWxlbWVudCg0KVwiIGNsYXNzPVwibWUtMSBtcy0xXCIgLz5cclxuICAgICAgICA8aW5wdXQgI2lucHV0IHR5cGU9XCJ0ZXh0XCIgbWF4bGVuZ3RoPVwiMVwiIGZvcm1Db250cm9sTmFtZT1cIl81XCIgKGZvY3VzKT1cInNldEZvY3VzZWRFbGVtZW50KDUpXCIgY2xhc3M9XCJtcy0xXCIgLz5cclxuICAgIDwvZGl2PlxyXG5cclxuICAgIDxkaXYgY2xhc3M9XCJkLWZsZXggbXQtMlwiPlxyXG4gICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXHJcbiAgICAgICAgICAgIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5IHctMTAwXCJcclxuICAgICAgICAgICAgW2Rpc2FibGVkXT1cImZvcm1Hcm91cC5pbnZhbGlkXCJcclxuICAgICAgICAgICAgW2Nka0xvYWRpbmdCdXR0b25dPVwiaXNMb2FkaW5nXCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICAgIDxjZGstc3Bpbm5lcj5WYWxpZGF0ZSBDb2RlPC9jZGstc3Bpbm5lcj5cclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgIDwvZGl2PlxyXG48L2Zvcm0+Il19