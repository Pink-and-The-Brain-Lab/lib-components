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
        this.createOverlay(config);
    }
    createOverlay(config) {
        this.overlayRef = this.overlay.create(config);
        const component = new TemplatePortal(this.template, this.viewContainerRef);
        this.overlayRef.attach(component);
        this.overlayRef.backdropClick().subscribe(event => {
            this.cdkPopover = false;
            this.close(event);
        });
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.10", ngImport: i0, type: PopoverDirective, deps: [{ token: i1.Overlay }, { token: i0.TemplateRef }, { token: i0.ViewContainerRef }], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "18.2.10", type: PopoverDirective, selector: "[cdkPopover]", inputs: { cdkPopover: "cdkPopover", target: ["cdkPopoverTarget", "target"], positions: ["cdkPopoverPositions", "positions"], isFullscreen: ["cdkPopoverFullScreen", "isFullscreen"], close: ["cdkPopoverClose", "close"] }, ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.10", ngImport: i0, type: PopoverDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[cdkPopover]'
                }]
        }], ctorParameters: () => [{ type: i1.Overlay }, { type: i0.TemplateRef }, { type: i0.ViewContainerRef }], propDecorators: { cdkPopover: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9wb3Zlci5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jb21wb25lbnRzL3NyYy9saWIvcG9wb3Zlci9wb3BvdmVyLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQThCLGFBQWEsRUFBYyxNQUFNLHNCQUFzQixDQUFDO0FBQzdGLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUNyRCxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQWlDLE1BQU0sZUFBZSxDQUFDO0FBQzFGLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHFCQUFxQixDQUFDOzs7QUFNdkQsTUFBTSxPQUFPLGdCQUFnQjtJQU0zQixJQUF5QixVQUFVLENBQUMsS0FBYztRQUNoRCxJQUFJLEtBQUs7WUFBRSxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7YUFDbEIsSUFBSSxJQUFJLENBQUMsVUFBVTtZQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxFQUFFLENBQUM7SUFFdEQsQ0FBQztJQUVELElBQStCLE1BQU0sQ0FBQyxLQUFrQjtRQUN0RCxJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztJQUN2QixDQUFDO0lBRUQsSUFBOEMsU0FBUyxDQUFDLEtBQXFCO1FBQzNFLElBQUksQ0FBQyxTQUFTLEdBQUcsZ0JBQWdCLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3ZELENBQUM7SUFFRCxJQUErQyxZQUFZLENBQUMsS0FBYztRQUN4RSxJQUFJLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQztJQUM3QixDQUFDO0lBS0QsWUFDVSxPQUFnQixFQUNoQixRQUE2QixFQUM3QixnQkFBa0M7UUFGbEMsWUFBTyxHQUFQLE9BQU8sQ0FBUztRQUNoQixhQUFRLEdBQVIsUUFBUSxDQUFxQjtRQUM3QixxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBM0JwQyxjQUFTLEdBQXNCLGdCQUFnQixDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNwRSxrQkFBYSxHQUFHLEtBQUssQ0FBQztJQTJCM0IsQ0FBQztJQUVKLElBQUk7UUFDRixNQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBRSxDQUFDLG1CQUFtQixDQUMxRCxJQUFJLENBQUMsT0FBTyxDQUNiLENBQUMsYUFBYSxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7UUFDbEMsTUFBTSxNQUFNLEdBQUcsSUFBSSxhQUFhLENBQUM7WUFDL0IsV0FBVyxFQUFFLElBQUk7WUFDakIsYUFBYSxFQUFFLGtDQUFrQztZQUNqRCxjQUFjLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUU7WUFDckQsZ0JBQWdCLEVBQUUsUUFBUTtZQUMxQixTQUFTLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxLQUFLO1lBQzlDLE1BQU0sRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLE1BQU07WUFDNUMsS0FBSyxFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsTUFBTTtZQUMzQyxtQkFBbUIsRUFBRSxJQUFJO1NBQzFCLENBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDN0IsQ0FBQztJQUVPLGFBQWEsQ0FBQyxNQUFxQjtRQUN6QyxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzlDLE1BQU0sU0FBUyxHQUFHLElBQUksY0FBYyxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUM7UUFDM0UsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDbEMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUUsQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFDaEQsSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7WUFDeEIsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNwQixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7K0dBMURVLGdCQUFnQjttR0FBaEIsZ0JBQWdCOzs0RkFBaEIsZ0JBQWdCO2tCQUg1QixTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSxjQUFjO2lCQUN6QjtxSUFPMEIsVUFBVTtzQkFBbEMsS0FBSzt1QkFBQyxZQUFZO2dCQU1ZLE1BQU07c0JBQXBDLEtBQUs7dUJBQUMsa0JBQWtCO2dCQUlxQixTQUFTO3NCQUF0RCxRQUFROztzQkFBSSxLQUFLO3VCQUFDLHFCQUFxQjtnQkFJTyxZQUFZO3NCQUExRCxRQUFROztzQkFBSSxLQUFLO3VCQUFDLHNCQUFzQjtnQkFLZixLQUFLO3NCQUE5QixLQUFLO3VCQUFDLGlCQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbm5lY3RlZFBvc2l0aW9uLCBPdmVybGF5LCBPdmVybGF5Q29uZmlnLCBPdmVybGF5UmVmIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL292ZXJsYXknO1xyXG5pbXBvcnQgeyBUZW1wbGF0ZVBvcnRhbCB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9wb3J0YWwnO1xyXG5pbXBvcnQgeyBEaXJlY3RpdmUsIElucHV0LCBPcHRpb25hbCwgVGVtcGxhdGVSZWYsIFZpZXdDb250YWluZXJSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUG9wb3ZlclBvc2l0aW9ucyB9IGZyb20gJy4vcG9wb3Zlci1wb3NpdGlvbnMnO1xyXG5pbXBvcnQgeyBQb3NpdGlvbk9wdGlvbiB9IGZyb20gJy4vcG9wb3Zlci1wb3NpdGlvbnMubWFwJztcclxuXHJcbkBEaXJlY3RpdmUoe1xyXG4gIHNlbGVjdG9yOiAnW2Nka1BvcG92ZXJdJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgUG9wb3ZlckRpcmVjdGl2ZSB7XHJcbiAgcHJpdmF0ZSBvdmVybGF5UmVmITogT3ZlcmxheVJlZjtcclxuICBwcml2YXRlIF90YXJnZXQhOiBIVE1MRWxlbWVudDtcclxuICBwcml2YXRlIF9wb3NpdG9uczogQ29ubmVjdGVkUG9zaXRpb24gPSBQb3BvdmVyUG9zaXRpb25zLmdldFBvc2l0aW9uKCdFQlNCJyk7XHJcbiAgcHJpdmF0ZSBfaXNGdWxsU2NyZWVuID0gZmFsc2U7XHJcbiAgXHJcbiAgQElucHV0KCdjZGtQb3BvdmVyJykgc2V0IGNka1BvcG92ZXIodmFsdWU6IGJvb2xlYW4pIHtcclxuICAgIGlmICh2YWx1ZSkgdGhpcy5vcGVuKCk7XHJcbiAgICBlbHNlIGlmICh0aGlzLm92ZXJsYXlSZWYpIHRoaXMub3ZlcmxheVJlZi5kaXNwb3NlKCk7XHJcbiAgICBcclxuICB9XHJcblxyXG4gIEBJbnB1dCgnY2RrUG9wb3ZlclRhcmdldCcpIHNldCB0YXJnZXQodmFsdWU6IEhUTUxFbGVtZW50KSB7XHJcbiAgICB0aGlzLl90YXJnZXQgPSB2YWx1ZTtcclxuICB9XHJcblxyXG4gIEBPcHRpb25hbCgpIEBJbnB1dCgnY2RrUG9wb3ZlclBvc2l0aW9ucycpIHNldCBwb3NpdGlvbnModmFsdWU6IFBvc2l0aW9uT3B0aW9uKSB7XHJcbiAgICB0aGlzLl9wb3NpdG9ucyA9IFBvcG92ZXJQb3NpdGlvbnMuZ2V0UG9zaXRpb24odmFsdWUpO1xyXG4gIH1cclxuXHJcbiAgQE9wdGlvbmFsKCkgQElucHV0KCdjZGtQb3BvdmVyRnVsbFNjcmVlbicpIHNldCBpc0Z1bGxzY3JlZW4odmFsdWU6IGJvb2xlYW4pIHtcclxuICAgIHRoaXMuX2lzRnVsbFNjcmVlbiA9IHZhbHVlO1xyXG4gIH1cclxuXHJcbiAgLy8gQHRzLWlnbm9yZVxyXG4gIEBJbnB1dCgnY2RrUG9wb3ZlckNsb3NlJykgY2xvc2U6IChldmVudDogTW91c2VFdmVudCkgPT4gdm9pZDtcclxuXHJcbiAgY29uc3RydWN0b3IgKFxyXG4gICAgcHJpdmF0ZSBvdmVybGF5OiBPdmVybGF5LFxyXG4gICAgcHJpdmF0ZSB0ZW1wbGF0ZTogVGVtcGxhdGVSZWY8b2JqZWN0PixcclxuICAgIHByaXZhdGUgdmlld0NvbnRhaW5lclJlZjogVmlld0NvbnRhaW5lclJlZixcclxuICApIHt9XHJcblxyXG4gIG9wZW4oKSB7XHJcbiAgICBjb25zdCBwb3NpdGlvbiA9IHRoaXMub3ZlcmxheS5wb3NpdGlvbigpLmZsZXhpYmxlQ29ubmVjdGVkVG8oXHJcbiAgICAgIHRoaXMuX3RhcmdldCxcclxuICAgICkud2l0aFBvc2l0aW9ucyhbdGhpcy5fcG9zaXRvbnNdKTtcclxuICAgIGNvbnN0IGNvbmZpZyA9IG5ldyBPdmVybGF5Q29uZmlnKHtcclxuICAgICAgaGFzQmFja2Ryb3A6IHRydWUsXHJcbiAgICAgIGJhY2tkcm9wQ2xhc3M6ICdjZGstb3ZlcmxheS10cmFuc3BhcmVudC1iYWNrZHJvcCcsXHJcbiAgICAgIHNjcm9sbFN0cmF0ZWd5OiB0aGlzLm92ZXJsYXkuc2Nyb2xsU3RyYXRlZ2llcy5ibG9jaygpLFxyXG4gICAgICBwb3NpdGlvblN0cmF0ZWd5OiBwb3NpdGlvbixcclxuICAgICAgbWF4SGVpZ2h0OiB0aGlzLl9pc0Z1bGxTY3JlZW4gPyAnYXV0bycgOiAnOTUlJyxcclxuICAgICAgaGVpZ2h0OiB0aGlzLl9pc0Z1bGxTY3JlZW4gPyAnMTAwJScgOiAnYXV0bycsXHJcbiAgICAgIHdpZHRoOiB0aGlzLl9pc0Z1bGxTY3JlZW4gPyAnMTAwJScgOiAnYXV0bycsXHJcbiAgICAgIGRpc3Bvc2VPbk5hdmlnYXRpb246IHRydWUsXHJcbiAgICB9KTtcclxuICAgIHRoaXMuY3JlYXRlT3ZlcmxheShjb25maWcpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBjcmVhdGVPdmVybGF5KGNvbmZpZzogT3ZlcmxheUNvbmZpZykge1xyXG4gICAgdGhpcy5vdmVybGF5UmVmID0gdGhpcy5vdmVybGF5LmNyZWF0ZShjb25maWcpO1xyXG4gICAgY29uc3QgY29tcG9uZW50ID0gbmV3IFRlbXBsYXRlUG9ydGFsKHRoaXMudGVtcGxhdGUsIHRoaXMudmlld0NvbnRhaW5lclJlZik7XHJcbiAgICB0aGlzLm92ZXJsYXlSZWYuYXR0YWNoKGNvbXBvbmVudCk7XHJcbiAgICB0aGlzLm92ZXJsYXlSZWYuYmFja2Ryb3BDbGljaygpLnN1YnNjcmliZShldmVudCA9PiB7XHJcbiAgICAgIHRoaXMuY2RrUG9wb3ZlciA9IGZhbHNlO1xyXG4gICAgICB0aGlzLmNsb3NlKGV2ZW50KTtcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG4iXX0=