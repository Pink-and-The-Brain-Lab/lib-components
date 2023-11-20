import { Directive, Input } from '@angular/core';
import * as i0 from "@angular/core";
export class LoadingButtonDirective {
    set cdkLoadingButton(value) {
        this.loading = value;
    }
    constructor(element, renderer) {
        this.element = element;
        this.renderer = renderer;
        this.loading = false;
    }
    ngOnChanges({ cdkLoadingButton }) {
        if (cdkLoadingButton.currentValue !== cdkLoadingButton.previousValue)
            this.updateButton();
    }
    updateButton() {
        if (this.loading) {
            this.element.nativeElement.blur();
            this.renderer.setStyle(this.element.nativeElement, "pointer-events", "none");
        }
        else {
            this.renderer.removeStyle(this.element.nativeElement, "pointer-events");
        }
    }
}
LoadingButtonDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: LoadingButtonDirective, deps: [{ token: i0.ElementRef }, { token: i0.Renderer2 }], target: i0.ɵɵFactoryTarget.Directive });
LoadingButtonDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "15.1.2", type: LoadingButtonDirective, selector: "[cdkLoadingButton]", inputs: { cdkLoadingButton: "cdkLoadingButton" }, usesOnChanges: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: LoadingButtonDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[cdkLoadingButton]'
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: i0.Renderer2 }]; }, propDecorators: { cdkLoadingButton: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9hZGluZy1idXR0b24uZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY29tcG9uZW50cy9zcmMvbGliL2xvYWRpbmctYnV0dG9uL2xvYWRpbmctYnV0dG9uLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFjLEtBQUssRUFBdUMsTUFBTSxlQUFlLENBQUM7O0FBS2xHLE1BQU0sT0FBTyxzQkFBc0I7SUFJakMsSUFBYSxnQkFBZ0IsQ0FBQyxLQUFjO1FBQzFDLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO0lBQ3ZCLENBQUM7SUFFRCxZQUNVLE9BQW1CLEVBQ25CLFFBQW1CO1FBRG5CLFlBQU8sR0FBUCxPQUFPLENBQVk7UUFDbkIsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQVI3QixZQUFPLEdBQUcsS0FBSyxDQUFDO0lBU1osQ0FBQztJQUVMLFdBQVcsQ0FBQyxFQUFFLGdCQUFnQixFQUFpQjtRQUM3QyxJQUFJLGdCQUFnQixDQUFDLFlBQVksS0FBSyxnQkFBZ0IsQ0FBQyxhQUFhO1lBQ2xFLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUN4QixDQUFDO0lBRUQsWUFBWTtRQUNWLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUNoQixJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztZQUNsQyxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLENBQUMsQ0FBQztTQUM5RTthQUFNO1lBQ0wsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLEVBQUUsZ0JBQWdCLENBQUMsQ0FBQztTQUN6RTtJQUNILENBQUM7O21IQXpCVSxzQkFBc0I7dUdBQXRCLHNCQUFzQjsyRkFBdEIsc0JBQXNCO2tCQUhsQyxTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSxvQkFBb0I7aUJBQy9CO3lIQUtjLGdCQUFnQjtzQkFBNUIsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgSW5wdXQsIE9uQ2hhbmdlcywgUmVuZGVyZXIyLCBTaW1wbGVDaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5ARGlyZWN0aXZlKHtcclxuICBzZWxlY3RvcjogJ1tjZGtMb2FkaW5nQnV0dG9uXSdcclxufSlcclxuZXhwb3J0IGNsYXNzIExvYWRpbmdCdXR0b25EaXJlY3RpdmUgaW1wbGVtZW50cyBPbkNoYW5nZXMge1xyXG5cclxuICBsb2FkaW5nID0gZmFsc2U7XHJcblxyXG4gIEBJbnB1dCgpIHNldCBjZGtMb2FkaW5nQnV0dG9uKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICB0aGlzLmxvYWRpbmcgPSB2YWx1ZTtcclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSBlbGVtZW50OiBFbGVtZW50UmVmLFxyXG4gICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLFxyXG4gICkgeyB9XHJcblxyXG4gIG5nT25DaGFuZ2VzKHsgY2RrTG9hZGluZ0J1dHRvbiB9OiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XHJcbiAgICBpZiAoY2RrTG9hZGluZ0J1dHRvbi5jdXJyZW50VmFsdWUgIT09IGNka0xvYWRpbmdCdXR0b24ucHJldmlvdXNWYWx1ZSlcclxuICAgICAgdGhpcy51cGRhdGVCdXR0b24oKTtcclxuICB9XHJcblxyXG4gIHVwZGF0ZUJ1dHRvbigpIHtcclxuICAgIGlmICh0aGlzLmxvYWRpbmcpIHtcclxuICAgICAgdGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQuYmx1cigpO1xyXG4gICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50LCBcInBvaW50ZXItZXZlbnRzXCIsIFwibm9uZVwiKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlU3R5bGUodGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQsIFwicG9pbnRlci1ldmVudHNcIik7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxufVxyXG4iXX0=