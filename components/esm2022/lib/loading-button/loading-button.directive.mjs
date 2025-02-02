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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.10", ngImport: i0, type: LoadingButtonDirective, deps: [{ token: i0.ElementRef }, { token: i0.Renderer2 }], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "18.2.10", type: LoadingButtonDirective, selector: "[cdkLoadingButton]", inputs: { cdkLoadingButton: "cdkLoadingButton" }, usesOnChanges: true, ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.10", ngImport: i0, type: LoadingButtonDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[cdkLoadingButton]'
                }]
        }], ctorParameters: () => [{ type: i0.ElementRef }, { type: i0.Renderer2 }], propDecorators: { cdkLoadingButton: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9hZGluZy1idXR0b24uZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY29tcG9uZW50cy9zcmMvbGliL2xvYWRpbmctYnV0dG9uL2xvYWRpbmctYnV0dG9uLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFjLEtBQUssRUFBdUMsTUFBTSxlQUFlLENBQUM7O0FBS2xHLE1BQU0sT0FBTyxzQkFBc0I7SUFJakMsSUFBYSxnQkFBZ0IsQ0FBQyxLQUFjO1FBQzFDLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO0lBQ3ZCLENBQUM7SUFFRCxZQUNVLE9BQW1CLEVBQ25CLFFBQW1CO1FBRG5CLFlBQU8sR0FBUCxPQUFPLENBQVk7UUFDbkIsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQVI3QixZQUFPLEdBQUcsS0FBSyxDQUFDO0lBU1osQ0FBQztJQUVMLFdBQVcsQ0FBQyxFQUFFLGdCQUFnQixFQUFpQjtRQUM3QyxJQUFJLGdCQUFnQixDQUFDLFlBQVksS0FBSyxnQkFBZ0IsQ0FBQyxhQUFhO1lBQ2xFLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUN4QixDQUFDO0lBRUQsWUFBWTtRQUNWLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQ2pCLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLElBQUksRUFBRSxDQUFDO1lBQ2xDLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxFQUFFLGdCQUFnQixFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBQy9FLENBQUM7YUFBTSxDQUFDO1lBQ04sSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLEVBQUUsZ0JBQWdCLENBQUMsQ0FBQztRQUMxRSxDQUFDO0lBQ0gsQ0FBQzsrR0F6QlUsc0JBQXNCO21HQUF0QixzQkFBc0I7OzRGQUF0QixzQkFBc0I7a0JBSGxDLFNBQVM7bUJBQUM7b0JBQ1QsUUFBUSxFQUFFLG9CQUFvQjtpQkFDL0I7dUdBS2MsZ0JBQWdCO3NCQUE1QixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBJbnB1dCwgT25DaGFuZ2VzLCBSZW5kZXJlcjIsIFNpbXBsZUNoYW5nZXMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBEaXJlY3RpdmUoe1xyXG4gIHNlbGVjdG9yOiAnW2Nka0xvYWRpbmdCdXR0b25dJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgTG9hZGluZ0J1dHRvbkRpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uQ2hhbmdlcyB7XHJcblxyXG4gIGxvYWRpbmcgPSBmYWxzZTtcclxuXHJcbiAgQElucHV0KCkgc2V0IGNka0xvYWRpbmdCdXR0b24odmFsdWU6IGJvb2xlYW4pIHtcclxuICAgIHRoaXMubG9hZGluZyA9IHZhbHVlO1xyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIGVsZW1lbnQ6IEVsZW1lbnRSZWYsXHJcbiAgICBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsXHJcbiAgKSB7IH1cclxuXHJcbiAgbmdPbkNoYW5nZXMoeyBjZGtMb2FkaW5nQnV0dG9uIH06IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcclxuICAgIGlmIChjZGtMb2FkaW5nQnV0dG9uLmN1cnJlbnRWYWx1ZSAhPT0gY2RrTG9hZGluZ0J1dHRvbi5wcmV2aW91c1ZhbHVlKVxyXG4gICAgICB0aGlzLnVwZGF0ZUJ1dHRvbigpO1xyXG4gIH1cclxuXHJcbiAgdXBkYXRlQnV0dG9uKCkge1xyXG4gICAgaWYgKHRoaXMubG9hZGluZykge1xyXG4gICAgICB0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudC5ibHVyKCk7XHJcbiAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQsIFwicG9pbnRlci1ldmVudHNcIiwgXCJub25lXCIpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5yZW5kZXJlci5yZW1vdmVTdHlsZSh0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudCwgXCJwb2ludGVyLWV2ZW50c1wiKTtcclxuICAgIH1cclxuICB9XHJcblxyXG59XHJcbiJdfQ==