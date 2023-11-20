import { Directive, Host, Optional } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
export class InputValidationDirective {
    constructor(formControl, element, renderer) {
        this.formControl = formControl;
        this.element = element;
        this.renderer = renderer;
        this.destroy$ = new Subject();
        this.responseMap = {
            'INVALID': this.setErrorClass,
            'VALID': this.setSuccessClass,
        };
    }
    ngOnInit() {
        this.formControl.control.statusChanges
            .pipe(takeUntil(this.destroy$))
            .subscribe((response) => {
            this.responseMap[response](this.element.nativeElement, this.renderer);
            this.hasValue(this.element.nativeElement, this.renderer);
        });
    }
    setErrorClass(element, renderer) {
        renderer.removeClass(element, 'success');
        renderer.addClass(element, 'invalid');
    }
    setSuccessClass(element, renderer) {
        renderer.removeClass(element, 'invalid');
        renderer.addClass(element, 'success');
    }
    hasValue(element, renderer) {
        const hasValue = !!this.element.nativeElement.value.length;
        if (hasValue) {
            renderer.addClass(element, 'not-empty');
            return;
        }
        renderer.removeClass(element, 'not-empty');
    }
    ngOnDestroy() {
        this.destroy$.next(true);
        this.destroy$.unsubscribe();
    }
}
InputValidationDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: InputValidationDirective, deps: [{ token: i1.FormControlName, host: true, optional: true }, { token: i0.ElementRef }, { token: i0.Renderer2 }], target: i0.ɵɵFactoryTarget.Directive });
InputValidationDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "15.1.2", type: InputValidationDirective, selector: "[cdkInputValidation]", ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: InputValidationDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[cdkInputValidation]'
                }]
        }], ctorParameters: function () { return [{ type: i1.FormControlName, decorators: [{
                    type: Host
                }, {
                    type: Optional
                }] }, { type: i0.ElementRef }, { type: i0.Renderer2 }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQtdmFsaWRhdGlvbi5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jb21wb25lbnRzL3NyYy9saWIvaW5wdXQtdmFsaWRhdGlvbi9pbnB1dC12YWxpZGF0aW9uLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFjLElBQUksRUFBcUIsUUFBUSxFQUFhLE1BQU0sZUFBZSxDQUFDO0FBRXBHLE9BQU8sRUFBRSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sTUFBTSxDQUFDOzs7QUFNMUMsTUFBTSxPQUFPLHdCQUF3QjtJQVFuQyxZQUM4QixXQUE0QixFQUNoRCxPQUFtQixFQUNuQixRQUFtQjtRQUZDLGdCQUFXLEdBQVgsV0FBVyxDQUFpQjtRQUNoRCxZQUFPLEdBQVAsT0FBTyxDQUFZO1FBQ25CLGFBQVEsR0FBUixRQUFRLENBQVc7UUFWckIsYUFBUSxHQUFHLElBQUksT0FBTyxFQUFXLENBQUM7UUFFekIsZ0JBQVcsR0FBcUI7WUFDL0MsU0FBUyxFQUFFLElBQUksQ0FBQyxhQUFhO1lBQzdCLE9BQU8sRUFBRSxJQUFJLENBQUMsZUFBZTtTQUM5QixDQUFBO0lBTUcsQ0FBQztJQUVMLFFBQVE7UUFDTixJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxhQUFhO2FBQ3JDLElBQUksQ0FDSCxTQUFTLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUN6QjthQUNBLFNBQVMsQ0FDUixDQUFDLFFBQWdCLEVBQUUsRUFBRTtZQUNuQixJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQTtZQUNyRSxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUMzRCxDQUFDLENBQ0YsQ0FBQztJQUNKLENBQUM7SUFFRCxhQUFhLENBQUMsT0FBbUIsRUFBRSxRQUFtQjtRQUNwRCxRQUFRLENBQUMsV0FBVyxDQUFDLE9BQU8sRUFBRSxTQUFTLENBQUMsQ0FBQztRQUN6QyxRQUFRLENBQUMsUUFBUSxDQUFDLE9BQU8sRUFBRSxTQUFTLENBQUMsQ0FBQztJQUN4QyxDQUFDO0lBRUQsZUFBZSxDQUFDLE9BQW1CLEVBQUUsUUFBbUI7UUFDdEQsUUFBUSxDQUFDLFdBQVcsQ0FBQyxPQUFPLEVBQUUsU0FBUyxDQUFDLENBQUM7UUFDekMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxPQUFPLEVBQUUsU0FBUyxDQUFDLENBQUM7SUFDeEMsQ0FBQztJQUVELFFBQVEsQ0FBQyxPQUFtQixFQUFFLFFBQW1CO1FBQy9DLE1BQU0sUUFBUSxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDO1FBRTNELElBQUksUUFBUSxFQUFFO1lBQ1osUUFBUSxDQUFDLFFBQVEsQ0FBQyxPQUFPLEVBQUUsV0FBVyxDQUFDLENBQUM7WUFDeEMsT0FBTztTQUNSO1FBRUQsUUFBUSxDQUFDLFdBQVcsQ0FBQyxPQUFPLEVBQUUsV0FBVyxDQUFDLENBQUM7SUFDN0MsQ0FBQztJQUVELFdBQVc7UUFDVCxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN6QixJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQzlCLENBQUM7O3FIQW5EVSx3QkFBd0I7eUdBQXhCLHdCQUF3QjsyRkFBeEIsd0JBQXdCO2tCQUhwQyxTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSxzQkFBc0I7aUJBQ2pDOzswQkFVSSxJQUFJOzswQkFBSSxRQUFRIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBIb3N0LCBPbkRlc3Ryb3ksIE9uSW5pdCwgT3B0aW9uYWwsIFJlbmRlcmVyMiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBGb3JtQ29udHJvbE5hbWUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IFN1YmplY3QsIHRha2VVbnRpbCB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBJSW5wdXRWYWxpZGF0aW9uIH0gZnJvbSAnLi9pbnB1dC12YWxpZGF0aW9uLm1vZGVsJztcclxuXHJcbkBEaXJlY3RpdmUoe1xyXG4gIHNlbGVjdG9yOiAnW2Nka0lucHV0VmFsaWRhdGlvbl0nXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBJbnB1dFZhbGlkYXRpb25EaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XHJcbiAgcHJpdmF0ZSBkZXN0cm95JCA9IG5ldyBTdWJqZWN0PGJvb2xlYW4+KCk7XHJcblxyXG4gIHByaXZhdGUgcmVhZG9ubHkgcmVzcG9uc2VNYXA6IElJbnB1dFZhbGlkYXRpb24gPSB7XHJcbiAgICAnSU5WQUxJRCc6IHRoaXMuc2V0RXJyb3JDbGFzcyxcclxuICAgICdWQUxJRCc6IHRoaXMuc2V0U3VjY2Vzc0NsYXNzLFxyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBASG9zdCgpIEBPcHRpb25hbCgpIHByaXZhdGUgZm9ybUNvbnRyb2w6IEZvcm1Db250cm9sTmFtZSxcclxuICAgIHByaXZhdGUgZWxlbWVudDogRWxlbWVudFJlZixcclxuICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMixcclxuICApIHsgfVxyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgIHRoaXMuZm9ybUNvbnRyb2wuY29udHJvbC5zdGF0dXNDaGFuZ2VzXHJcbiAgICAucGlwZShcclxuICAgICAgdGFrZVVudGlsKHRoaXMuZGVzdHJveSQpXHJcbiAgICApXHJcbiAgICAuc3Vic2NyaWJlKFxyXG4gICAgICAocmVzcG9uc2U6IHN0cmluZykgPT4ge1xyXG4gICAgICAgIHRoaXMucmVzcG9uc2VNYXBbcmVzcG9uc2VdKHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50LCB0aGlzLnJlbmRlcmVyKVxyXG4gICAgICAgIHRoaXMuaGFzVmFsdWUodGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQsIHRoaXMucmVuZGVyZXIpO1xyXG4gICAgICB9XHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgc2V0RXJyb3JDbGFzcyhlbGVtZW50OiBFbGVtZW50UmVmLCByZW5kZXJlcjogUmVuZGVyZXIyKTogdm9pZCB7XHJcbiAgICByZW5kZXJlci5yZW1vdmVDbGFzcyhlbGVtZW50LCAnc3VjY2VzcycpO1xyXG4gICAgcmVuZGVyZXIuYWRkQ2xhc3MoZWxlbWVudCwgJ2ludmFsaWQnKTtcclxuICB9XHJcblxyXG4gIHNldFN1Y2Nlc3NDbGFzcyhlbGVtZW50OiBFbGVtZW50UmVmLCByZW5kZXJlcjogUmVuZGVyZXIyKTogdm9pZCB7XHJcbiAgICByZW5kZXJlci5yZW1vdmVDbGFzcyhlbGVtZW50LCAnaW52YWxpZCcpO1xyXG4gICAgcmVuZGVyZXIuYWRkQ2xhc3MoZWxlbWVudCwgJ3N1Y2Nlc3MnKTtcclxuICB9XHJcblxyXG4gIGhhc1ZhbHVlKGVsZW1lbnQ6IEVsZW1lbnRSZWYsIHJlbmRlcmVyOiBSZW5kZXJlcjIpOiB2b2lkIHtcclxuICAgIGNvbnN0IGhhc1ZhbHVlID0gISF0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudC52YWx1ZS5sZW5ndGg7XHJcblxyXG4gICAgaWYgKGhhc1ZhbHVlKSB7XHJcbiAgICAgIHJlbmRlcmVyLmFkZENsYXNzKGVsZW1lbnQsICdub3QtZW1wdHknKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcmVyLnJlbW92ZUNsYXNzKGVsZW1lbnQsICdub3QtZW1wdHknKTtcclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xyXG4gICAgdGhpcy5kZXN0cm95JC5uZXh0KHRydWUpO1xyXG4gICAgdGhpcy5kZXN0cm95JC51bnN1YnNjcmliZSgpO1xyXG4gIH1cclxuXHJcbn1cclxuIl19