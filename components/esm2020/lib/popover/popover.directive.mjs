import { OverlayConfig } from '@angular/cdk/overlay';
import { TemplatePortal } from '@angular/cdk/portal';
import { Directive, Input, Optional } from '@angular/core';
import { PopoverPositions } from './popover-positions';
import * as i0 from "@angular/core";
import * as i1 from "@angular/cdk/overlay";
export class PopoverDirective {
    set cdkPopover(value) {
        if (value)
            this.open();
        else if (this.overlayRef)
            this.overlayRef.dispose();
    }
    set target(value) {
        this._target = value;
    }
    set positions(value) {
        this._positons = PopoverPositions.getPosition(value);
    }
    set isFullscreen(value) {
        this._isFullScreen = value;
    }
    constructor(overlay, template, viewContainerRef) {
        this.overlay = overlay;
        this.template = template;
        this.viewContainerRef = viewContainerRef;
        this._positons = PopoverPositions.getPosition('EBSB');
        this._isFullScreen = false;
    }
    open() {
        const position = this.overlay.position().flexibleConnectedTo(this._target).withPositions([this._positons]);
        const config = new OverlayConfig({
            hasBackdrop: true,
            backdropClass: 'cdk-overlay-transparent-backdrop',
            scrollStrategy: this.overlay.scrollStrategies.block(),
            positionStrategy: position,
            maxHeight: this._isFullScreen ? 'auto' : '95%',
            height: this._isFullScreen ? '100%' : 'auto',
            width: this._isFullScreen ? '100%' : 'auto',
            disposeOnNavigation: true,
        });
        this.overlayRef = this.overlay.create(config);
        const component = new TemplatePortal(this.template, this.viewContainerRef);
        this.overlayRef.attach(component);
        this.overlayRef.backdropClick().subscribe(event => {
            this.cdkPopover = false;
            this.close(event);
        });
    }
}
PopoverDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: PopoverDirective, deps: [{ token: i1.Overlay }, { token: i0.TemplateRef }, { token: i0.ViewContainerRef }], target: i0.ɵɵFactoryTarget.Directive });
PopoverDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "15.1.2", type: PopoverDirective, selector: "[cdkPopover]", inputs: { cdkPopover: "cdkPopover", target: ["cdkPopoverTarget", "target"], positions: ["cdkPopoverPositions", "positions"], isFullscreen: ["cdkPopoverFullScreen", "isFullscreen"], close: ["cdkPopoverClose", "close"] }, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: PopoverDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[cdkPopover]'
                }]
        }], ctorParameters: function () { return [{ type: i1.Overlay }, { type: i0.TemplateRef }, { type: i0.ViewContainerRef }]; }, propDecorators: { cdkPopover: [{
                type: Input,
                args: ['cdkPopover']
            }], target: [{
                type: Input,
                args: ['cdkPopoverTarget']
            }], positions: [{
                type: Optional
            }, {
                type: Input,
                args: ['cdkPopoverPositions']
            }], isFullscreen: [{
                type: Optional
            }, {
                type: Input,
                args: ['cdkPopoverFullScreen']
            }], close: [{
                type: Input,
                args: ['cdkPopoverClose']
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9wb3Zlci5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jb21wb25lbnRzL3NyYy9saWIvcG9wb3Zlci9wb3BvdmVyLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQThCLGFBQWEsRUFBYyxNQUFNLHNCQUFzQixDQUFDO0FBQzdGLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUNyRCxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQWlDLE1BQU0sZUFBZSxDQUFDO0FBQzFGLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHFCQUFxQixDQUFDOzs7QUFNdkQsTUFBTSxPQUFPLGdCQUFnQjtJQVMzQixJQUF5QixVQUFVLENBQUMsS0FBYztRQUNoRCxJQUFJLEtBQUs7WUFBRSxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7YUFDbEIsSUFBSSxJQUFJLENBQUMsVUFBVTtZQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxFQUFFLENBQUM7SUFFdEQsQ0FBQztJQUVELElBQStCLE1BQU0sQ0FBQyxLQUFrQjtRQUN0RCxJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztJQUN2QixDQUFDO0lBRUQsSUFBOEMsU0FBUyxDQUFDLEtBQXFCO1FBQzNFLElBQUksQ0FBQyxTQUFTLEdBQUcsZ0JBQWdCLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3ZELENBQUM7SUFFRCxJQUErQyxZQUFZLENBQUMsS0FBYztRQUN4RSxJQUFJLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQztJQUM3QixDQUFDO0lBS0QsWUFDVSxPQUFnQixFQUNoQixRQUE2QixFQUM3QixnQkFBa0M7UUFGbEMsWUFBTyxHQUFQLE9BQU8sQ0FBUztRQUNoQixhQUFRLEdBQVIsUUFBUSxDQUFxQjtRQUM3QixxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBM0JwQyxjQUFTLEdBQXNCLGdCQUFnQixDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNwRSxrQkFBYSxHQUFHLEtBQUssQ0FBQztJQTJCM0IsQ0FBQztJQUVKLElBQUk7UUFDRixNQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBRSxDQUFDLG1CQUFtQixDQUMxRCxJQUFJLENBQUMsT0FBTyxDQUNiLENBQUMsYUFBYSxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7UUFDbEMsTUFBTSxNQUFNLEdBQUcsSUFBSSxhQUFhLENBQUM7WUFDL0IsV0FBVyxFQUFFLElBQUk7WUFDakIsYUFBYSxFQUFFLGtDQUFrQztZQUNqRCxjQUFjLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUU7WUFDckQsZ0JBQWdCLEVBQUUsUUFBUTtZQUMxQixTQUFTLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxLQUFLO1lBQzlDLE1BQU0sRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLE1BQU07WUFDNUMsS0FBSyxFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsTUFBTTtZQUMzQyxtQkFBbUIsRUFBRSxJQUFJO1NBQzFCLENBQUMsQ0FBQztRQUVILElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDOUMsTUFBTSxTQUFTLEdBQUcsSUFBSSxjQUFjLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztRQUMzRSxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUVsQyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUNoRCxJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQztZQUN4QixJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3BCLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQzs7NkdBM0RVLGdCQUFnQjtpR0FBaEIsZ0JBQWdCOzJGQUFoQixnQkFBZ0I7a0JBSDVCLFNBQVM7bUJBQUM7b0JBQ1QsUUFBUSxFQUFFLGNBQWM7aUJBQ3pCO3VKQVUwQixVQUFVO3NCQUFsQyxLQUFLO3VCQUFDLFlBQVk7Z0JBTVksTUFBTTtzQkFBcEMsS0FBSzt1QkFBQyxrQkFBa0I7Z0JBSXFCLFNBQVM7c0JBQXRELFFBQVE7O3NCQUFJLEtBQUs7dUJBQUMscUJBQXFCO2dCQUlPLFlBQVk7c0JBQTFELFFBQVE7O3NCQUFJLEtBQUs7dUJBQUMsc0JBQXNCO2dCQUtmLEtBQUs7c0JBQTlCLEtBQUs7dUJBQUMsaUJBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29ubmVjdGVkUG9zaXRpb24sIE92ZXJsYXksIE92ZXJsYXlDb25maWcsIE92ZXJsYXlSZWYgfSBmcm9tICdAYW5ndWxhci9jZGsvb3ZlcmxheSc7XHJcbmltcG9ydCB7IFRlbXBsYXRlUG9ydGFsIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3BvcnRhbCc7XHJcbmltcG9ydCB7IERpcmVjdGl2ZSwgSW5wdXQsIE9wdGlvbmFsLCBUZW1wbGF0ZVJlZiwgVmlld0NvbnRhaW5lclJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBQb3BvdmVyUG9zaXRpb25zIH0gZnJvbSAnLi9wb3BvdmVyLXBvc2l0aW9ucyc7XHJcbmltcG9ydCB7IFBvc2l0aW9uT3B0aW9uIH0gZnJvbSAnLi9wb3BvdmVyLXBvc2l0aW9ucy5tYXAnO1xyXG5cclxuQERpcmVjdGl2ZSh7XHJcbiAgc2VsZWN0b3I6ICdbY2RrUG9wb3Zlcl0nXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBQb3BvdmVyRGlyZWN0aXZlIHtcclxuICBcclxuICAvLyBAdHMtaWdub3JlXHJcbiAgcHJpdmF0ZSBvdmVybGF5UmVmOiBPdmVybGF5UmVmO1xyXG4gIC8vIEB0cy1pZ25vcmVcclxuICBwcml2YXRlIF90YXJnZXQ6IEhUTUxFbGVtZW50O1xyXG4gIHByaXZhdGUgX3Bvc2l0b25zOiBDb25uZWN0ZWRQb3NpdGlvbiA9IFBvcG92ZXJQb3NpdGlvbnMuZ2V0UG9zaXRpb24oJ0VCU0InKTtcclxuICBwcml2YXRlIF9pc0Z1bGxTY3JlZW4gPSBmYWxzZTtcclxuICBcclxuICBASW5wdXQoJ2Nka1BvcG92ZXInKSBzZXQgY2RrUG9wb3Zlcih2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgaWYgKHZhbHVlKSB0aGlzLm9wZW4oKTtcclxuICAgIGVsc2UgaWYgKHRoaXMub3ZlcmxheVJlZikgdGhpcy5vdmVybGF5UmVmLmRpc3Bvc2UoKTtcclxuICAgIFxyXG4gIH1cclxuXHJcbiAgQElucHV0KCdjZGtQb3BvdmVyVGFyZ2V0Jykgc2V0IHRhcmdldCh2YWx1ZTogSFRNTEVsZW1lbnQpIHtcclxuICAgIHRoaXMuX3RhcmdldCA9IHZhbHVlO1xyXG4gIH1cclxuXHJcbiAgQE9wdGlvbmFsKCkgQElucHV0KCdjZGtQb3BvdmVyUG9zaXRpb25zJykgc2V0IHBvc2l0aW9ucyh2YWx1ZTogUG9zaXRpb25PcHRpb24pIHtcclxuICAgIHRoaXMuX3Bvc2l0b25zID0gUG9wb3ZlclBvc2l0aW9ucy5nZXRQb3NpdGlvbih2YWx1ZSk7XHJcbiAgfVxyXG5cclxuICBAT3B0aW9uYWwoKSBASW5wdXQoJ2Nka1BvcG92ZXJGdWxsU2NyZWVuJykgc2V0IGlzRnVsbHNjcmVlbih2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgdGhpcy5faXNGdWxsU2NyZWVuID0gdmFsdWU7XHJcbiAgfVxyXG5cclxuICAvLyBAdHMtaWdub3JlXHJcbiAgQElucHV0KCdjZGtQb3BvdmVyQ2xvc2UnKSBjbG9zZTogKGV2ZW50OiBNb3VzZUV2ZW50KSA9PiB2b2lkO1xyXG5cclxuICBjb25zdHJ1Y3RvciAoXHJcbiAgICBwcml2YXRlIG92ZXJsYXk6IE92ZXJsYXksXHJcbiAgICBwcml2YXRlIHRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxvYmplY3Q+LFxyXG4gICAgcHJpdmF0ZSB2aWV3Q29udGFpbmVyUmVmOiBWaWV3Q29udGFpbmVyUmVmLFxyXG4gICkge31cclxuXHJcbiAgb3BlbigpIHtcclxuICAgIGNvbnN0IHBvc2l0aW9uID0gdGhpcy5vdmVybGF5LnBvc2l0aW9uKCkuZmxleGlibGVDb25uZWN0ZWRUbyhcclxuICAgICAgdGhpcy5fdGFyZ2V0LFxyXG4gICAgKS53aXRoUG9zaXRpb25zKFt0aGlzLl9wb3NpdG9uc10pO1xyXG4gICAgY29uc3QgY29uZmlnID0gbmV3IE92ZXJsYXlDb25maWcoe1xyXG4gICAgICBoYXNCYWNrZHJvcDogdHJ1ZSxcclxuICAgICAgYmFja2Ryb3BDbGFzczogJ2Nkay1vdmVybGF5LXRyYW5zcGFyZW50LWJhY2tkcm9wJyxcclxuICAgICAgc2Nyb2xsU3RyYXRlZ3k6IHRoaXMub3ZlcmxheS5zY3JvbGxTdHJhdGVnaWVzLmJsb2NrKCksXHJcbiAgICAgIHBvc2l0aW9uU3RyYXRlZ3k6IHBvc2l0aW9uLFxyXG4gICAgICBtYXhIZWlnaHQ6IHRoaXMuX2lzRnVsbFNjcmVlbiA/ICdhdXRvJyA6ICc5NSUnLFxyXG4gICAgICBoZWlnaHQ6IHRoaXMuX2lzRnVsbFNjcmVlbiA/ICcxMDAlJyA6ICdhdXRvJyxcclxuICAgICAgd2lkdGg6IHRoaXMuX2lzRnVsbFNjcmVlbiA/ICcxMDAlJyA6ICdhdXRvJyxcclxuICAgICAgZGlzcG9zZU9uTmF2aWdhdGlvbjogdHJ1ZSxcclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMub3ZlcmxheVJlZiA9IHRoaXMub3ZlcmxheS5jcmVhdGUoY29uZmlnKTtcclxuICAgIGNvbnN0IGNvbXBvbmVudCA9IG5ldyBUZW1wbGF0ZVBvcnRhbCh0aGlzLnRlbXBsYXRlLCB0aGlzLnZpZXdDb250YWluZXJSZWYpO1xyXG4gICAgdGhpcy5vdmVybGF5UmVmLmF0dGFjaChjb21wb25lbnQpO1xyXG5cclxuICAgIHRoaXMub3ZlcmxheVJlZi5iYWNrZHJvcENsaWNrKCkuc3Vic2NyaWJlKGV2ZW50ID0+IHtcclxuICAgICAgdGhpcy5jZGtQb3BvdmVyID0gZmFsc2U7XHJcbiAgICAgIHRoaXMuY2xvc2UoZXZlbnQpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==