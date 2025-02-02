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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.10", ngImport: i0, type: InputValidationDirective, deps: [{ token: i1.FormControlName, host: true, optional: true }, { token: i0.ElementRef }, { token: i0.Renderer2 }], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "18.2.10", type: InputValidationDirective, selector: "[cdkInputValidation]", ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.10", ngImport: i0, type: InputValidationDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[cdkInputValidation]'
                }]
        }], ctorParameters: () => [{ type: i1.FormControlName, decorators: [{
                    type: Host
                }, {
                    type: Optional
                }] }, { type: i0.ElementRef }, { type: i0.Renderer2 }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQtdmFsaWRhdGlvbi5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jb21wb25lbnRzL3NyYy9saWIvaW5wdXQtdmFsaWRhdGlvbi9pbnB1dC12YWxpZGF0aW9uLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFjLElBQUksRUFBcUIsUUFBUSxFQUFhLE1BQU0sZUFBZSxDQUFDO0FBRXBHLE9BQU8sRUFBRSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sTUFBTSxDQUFDOzs7QUFNMUMsTUFBTSxPQUFPLHdCQUF3QjtJQVFuQyxZQUM4QixXQUE0QixFQUNoRCxPQUFtQixFQUNuQixRQUFtQjtRQUZDLGdCQUFXLEdBQVgsV0FBVyxDQUFpQjtRQUNoRCxZQUFPLEdBQVAsT0FBTyxDQUFZO1FBQ25CLGFBQVEsR0FBUixRQUFRLENBQVc7UUFWckIsYUFBUSxHQUFHLElBQUksT0FBTyxFQUFXLENBQUM7UUFFekIsZ0JBQVcsR0FBcUI7WUFDL0MsU0FBUyxFQUFFLElBQUksQ0FBQyxhQUFhO1lBQzdCLE9BQU8sRUFBRSxJQUFJLENBQUMsZUFBZTtTQUM5QixDQUFBO0lBTUcsQ0FBQztJQUVMLFFBQVE7UUFDTixJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxhQUFhO2FBQ3JDLElBQUksQ0FDSCxTQUFTLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUN6QjthQUNBLFNBQVMsQ0FDUixDQUFDLFFBQWdCLEVBQUUsRUFBRTtZQUNuQixJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQTtZQUNyRSxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUMzRCxDQUFDLENBQ0YsQ0FBQztJQUNKLENBQUM7SUFFRCxhQUFhLENBQUMsT0FBbUIsRUFBRSxRQUFtQjtRQUNwRCxRQUFRLENBQUMsV0FBVyxDQUFDLE9BQU8sRUFBRSxTQUFTLENBQUMsQ0FBQztRQUN6QyxRQUFRLENBQUMsUUFBUSxDQUFDLE9BQU8sRUFBRSxTQUFTLENBQUMsQ0FBQztJQUN4QyxDQUFDO0lBRUQsZUFBZSxDQUFDLE9BQW1CLEVBQUUsUUFBbUI7UUFDdEQsUUFBUSxDQUFDLFdBQVcsQ0FBQyxPQUFPLEVBQUUsU0FBUyxDQUFDLENBQUM7UUFDekMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxPQUFPLEVBQUUsU0FBUyxDQUFDLENBQUM7SUFDeEMsQ0FBQztJQUVELFFBQVEsQ0FBQyxPQUFtQixFQUFFLFFBQW1CO1FBQy9DLE1BQU0sUUFBUSxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDO1FBRTNELElBQUksUUFBUSxFQUFFLENBQUM7WUFDYixRQUFRLENBQUMsUUFBUSxDQUFDLE9BQU8sRUFBRSxXQUFXLENBQUMsQ0FBQztZQUN4QyxPQUFPO1FBQ1QsQ0FBQztRQUVELFFBQVEsQ0FBQyxXQUFXLENBQUMsT0FBTyxFQUFFLFdBQVcsQ0FBQyxDQUFDO0lBQzdDLENBQUM7SUFFRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDekIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUM5QixDQUFDOytHQW5EVSx3QkFBd0I7bUdBQXhCLHdCQUF3Qjs7NEZBQXhCLHdCQUF3QjtrQkFIcEMsU0FBUzttQkFBQztvQkFDVCxRQUFRLEVBQUUsc0JBQXNCO2lCQUNqQzs7MEJBVUksSUFBSTs7MEJBQUksUUFBUSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgSG9zdCwgT25EZXN0cm95LCBPbkluaXQsIE9wdGlvbmFsLCBSZW5kZXJlcjIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRm9ybUNvbnRyb2xOYW1lIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBTdWJqZWN0LCB0YWtlVW50aWwgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgSUlucHV0VmFsaWRhdGlvbiB9IGZyb20gJy4vaW5wdXQtdmFsaWRhdGlvbi5tb2RlbCc7XHJcblxyXG5ARGlyZWN0aXZlKHtcclxuICBzZWxlY3RvcjogJ1tjZGtJbnB1dFZhbGlkYXRpb25dJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgSW5wdXRWYWxpZGF0aW9uRGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xyXG4gIHByaXZhdGUgZGVzdHJveSQgPSBuZXcgU3ViamVjdDxib29sZWFuPigpO1xyXG5cclxuICBwcml2YXRlIHJlYWRvbmx5IHJlc3BvbnNlTWFwOiBJSW5wdXRWYWxpZGF0aW9uID0ge1xyXG4gICAgJ0lOVkFMSUQnOiB0aGlzLnNldEVycm9yQ2xhc3MsXHJcbiAgICAnVkFMSUQnOiB0aGlzLnNldFN1Y2Nlc3NDbGFzcyxcclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgQEhvc3QoKSBAT3B0aW9uYWwoKSBwcml2YXRlIGZvcm1Db250cm9sOiBGb3JtQ29udHJvbE5hbWUsXHJcbiAgICBwcml2YXRlIGVsZW1lbnQ6IEVsZW1lbnRSZWYsXHJcbiAgICBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsXHJcbiAgKSB7IH1cclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLmZvcm1Db250cm9sLmNvbnRyb2wuc3RhdHVzQ2hhbmdlc1xyXG4gICAgLnBpcGUoXHJcbiAgICAgIHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKVxyXG4gICAgKVxyXG4gICAgLnN1YnNjcmliZShcclxuICAgICAgKHJlc3BvbnNlOiBzdHJpbmcpID0+IHtcclxuICAgICAgICB0aGlzLnJlc3BvbnNlTWFwW3Jlc3BvbnNlXSh0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudCwgdGhpcy5yZW5kZXJlcilcclxuICAgICAgICB0aGlzLmhhc1ZhbHVlKHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50LCB0aGlzLnJlbmRlcmVyKTtcclxuICAgICAgfVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHNldEVycm9yQ2xhc3MoZWxlbWVudDogRWxlbWVudFJlZiwgcmVuZGVyZXI6IFJlbmRlcmVyMik6IHZvaWQge1xyXG4gICAgcmVuZGVyZXIucmVtb3ZlQ2xhc3MoZWxlbWVudCwgJ3N1Y2Nlc3MnKTtcclxuICAgIHJlbmRlcmVyLmFkZENsYXNzKGVsZW1lbnQsICdpbnZhbGlkJyk7XHJcbiAgfVxyXG5cclxuICBzZXRTdWNjZXNzQ2xhc3MoZWxlbWVudDogRWxlbWVudFJlZiwgcmVuZGVyZXI6IFJlbmRlcmVyMik6IHZvaWQge1xyXG4gICAgcmVuZGVyZXIucmVtb3ZlQ2xhc3MoZWxlbWVudCwgJ2ludmFsaWQnKTtcclxuICAgIHJlbmRlcmVyLmFkZENsYXNzKGVsZW1lbnQsICdzdWNjZXNzJyk7XHJcbiAgfVxyXG5cclxuICBoYXNWYWx1ZShlbGVtZW50OiBFbGVtZW50UmVmLCByZW5kZXJlcjogUmVuZGVyZXIyKTogdm9pZCB7XHJcbiAgICBjb25zdCBoYXNWYWx1ZSA9ICEhdGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQudmFsdWUubGVuZ3RoO1xyXG5cclxuICAgIGlmIChoYXNWYWx1ZSkge1xyXG4gICAgICByZW5kZXJlci5hZGRDbGFzcyhlbGVtZW50LCAnbm90LWVtcHR5Jyk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXJlci5yZW1vdmVDbGFzcyhlbGVtZW50LCAnbm90LWVtcHR5Jyk7XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcclxuICAgIHRoaXMuZGVzdHJveSQubmV4dCh0cnVlKTtcclxuICAgIHRoaXMuZGVzdHJveSQudW5zdWJzY3JpYmUoKTtcclxuICB9XHJcblxyXG59XHJcbiJdfQ==