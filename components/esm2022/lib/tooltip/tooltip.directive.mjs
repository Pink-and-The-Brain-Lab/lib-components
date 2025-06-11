import { Directive, HostListener, Input } from '@angular/core';
import { getPositionRoles } from './tooltip-position';
import { TooltipComponent } from './tooltip.component';
import { ComponentPortal } from '@angular/cdk/portal';
import * as i0 from "@angular/core";
import * as i1 from "@angular/cdk/overlay";
export class TooltipDirective {
    constructor(overlay, overlayPositionBuilder, elementRef) {
        this.overlay = overlay;
        this.overlayPositionBuilder = overlayPositionBuilder;
        this.elementRef = elementRef;
        this.text = "";
        this.hideTooltip = false;
        this.placement = "auto";
        this.noMax = false;
    }
    show() {
        if (this.hideTooltip || !this.text.length || !this.text.trim().length) {
            return;
        }
        const positionStrategy = this.overlayPositionBuilder
            .flexibleConnectedTo(this.elementRef)
            .withPositions(getPositionRoles(this.placement))
            .withGrowAfterOpen(true);
        this.overlayRef = this.overlay.create({ positionStrategy });
        const tooltipRef = this.overlayRef.attach(new ComponentPortal(TooltipComponent));
        positionStrategy.positionChanges.subscribe(p => {
            tooltipRef.instance.placement = p.connectionPair.panelClass;
            tooltipRef.instance.noMax = this.noMax;
            tooltipRef.changeDetectorRef.detectChanges();
        });
        tooltipRef.instance.text = this.text;
    }
    hide() {
        if (this.overlayRef) {
            this.overlayRef.detach();
            this.overlayRef.dispose();
            this.overlayRef = undefined;
        }
    }
    ngOnDestroy() {
        if (this.overlayRef) {
            this.overlayRef.detach();
            this.overlayRef.dispose();
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.10", ngImport: i0, type: TooltipDirective, deps: [{ token: i1.Overlay }, { token: i1.OverlayPositionBuilder }, { token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "18.2.10", type: TooltipDirective, selector: "[cdkTooltip]", inputs: { text: ["cdkTooltip", "text"], hideTooltip: "hideTooltip", placement: "placement", noMax: "noMax" }, host: { listeners: { "mouseenter": "show()", "mouseleave": "hide()" } }, ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.10", ngImport: i0, type: TooltipDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[cdkTooltip]'
                }]
        }], ctorParameters: () => [{ type: i1.Overlay }, { type: i1.OverlayPositionBuilder }, { type: i0.ElementRef }], propDecorators: { text: [{
                type: Input,
                args: ["cdkTooltip"]
            }], hideTooltip: [{
                type: Input
            }], placement: [{
                type: Input
            }], noMax: [{
                type: Input
            }], show: [{
                type: HostListener,
                args: ["mouseenter"]
            }], hide: [{
                type: HostListener,
                args: ["mouseleave"]
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9vbHRpcC5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jb21wb25lbnRzL3NyYy9saWIvdG9vbHRpcC90b29sdGlwLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQWdCLFNBQVMsRUFBYyxZQUFZLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBR3pGLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ3RELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQzs7O0FBS3RELE1BQU0sT0FBTyxnQkFBZ0I7SUFRM0IsWUFDVSxPQUFnQixFQUNoQixzQkFBOEMsRUFDOUMsVUFBc0I7UUFGdEIsWUFBTyxHQUFQLE9BQU8sQ0FBUztRQUNoQiwyQkFBc0IsR0FBdEIsc0JBQXNCLENBQXdCO1FBQzlDLGVBQVUsR0FBVixVQUFVLENBQVk7UUFWWCxTQUFJLEdBQUcsRUFBRSxDQUFDO1FBQ3RCLGdCQUFXLEdBQUcsS0FBSyxDQUFDO1FBQ3BCLGNBQVMsR0FBc0IsTUFBTSxDQUFDO1FBQ3RDLFVBQUssR0FBRyxLQUFLLENBQUM7SUFRcEIsQ0FBQztJQUdKLElBQUk7UUFDRixJQUFJLElBQUksQ0FBQyxXQUFXLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsTUFBTSxFQUFFLENBQUM7WUFDdEUsT0FBTztRQUNULENBQUM7UUFFRCxNQUFNLGdCQUFnQixHQUFHLElBQUksQ0FBQyxzQkFBc0I7YUFDakQsbUJBQW1CLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQzthQUNwQyxhQUFhLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO2FBQy9DLGlCQUFpQixDQUFDLElBQUksQ0FBQyxDQUFDO1FBRTNCLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsRUFBRSxnQkFBZ0IsRUFBRSxDQUFDLENBQUM7UUFFNUQsTUFBTSxVQUFVLEdBQ2QsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsSUFBSSxlQUFlLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDO1FBRWhFLGdCQUFnQixDQUFDLGVBQWUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLEVBQUU7WUFDN0MsVUFBVSxDQUFDLFFBQVEsQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxVQUFpQixDQUFDO1lBQ25FLFVBQVUsQ0FBQyxRQUFRLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7WUFDdkMsVUFBVSxDQUFDLGlCQUFpQixDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQy9DLENBQUMsQ0FBQyxDQUFDO1FBRUgsVUFBVSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztJQUN2QyxDQUFDO0lBR0QsSUFBSTtRQUNGLElBQUksSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1lBQ3BCLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxFQUFFLENBQUM7WUFDekIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUMxQixJQUFJLENBQUMsVUFBVSxHQUFHLFNBQWdCLENBQUM7UUFDckMsQ0FBQztJQUNILENBQUM7SUFFRCxXQUFXO1FBQ1QsSUFBSSxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7WUFDcEIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEVBQUUsQ0FBQztZQUN6QixJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQzVCLENBQUM7SUFDSCxDQUFDOytHQXJEVSxnQkFBZ0I7bUdBQWhCLGdCQUFnQjs7NEZBQWhCLGdCQUFnQjtrQkFINUIsU0FBUzttQkFBQztvQkFDVCxRQUFRLEVBQUUsY0FBYztpQkFDekI7MElBRXNCLElBQUk7c0JBQXhCLEtBQUs7dUJBQUMsWUFBWTtnQkFDVixXQUFXO3NCQUFuQixLQUFLO2dCQUNHLFNBQVM7c0JBQWpCLEtBQUs7Z0JBQ0csS0FBSztzQkFBYixLQUFLO2dCQVdOLElBQUk7c0JBREgsWUFBWTt1QkFBQyxZQUFZO2dCQTBCMUIsSUFBSTtzQkFESCxZQUFZO3VCQUFDLFlBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnRSZWYsIERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgSG9zdExpc3RlbmVyLCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBUb29sdGlwZVBsYWNlbWVudCB9IGZyb20gJy4vdG9vbHRpcC1wbGFjZW1lbnQudHlwZSc7XHJcbmltcG9ydCB7IE92ZXJsYXksIE92ZXJsYXlQb3NpdGlvbkJ1aWxkZXIsIE92ZXJsYXlSZWYgfSBmcm9tICdAYW5ndWxhci9jZGsvb3ZlcmxheSc7XHJcbmltcG9ydCB7IGdldFBvc2l0aW9uUm9sZXMgfSBmcm9tICcuL3Rvb2x0aXAtcG9zaXRpb24nO1xyXG5pbXBvcnQgeyBUb29sdGlwQ29tcG9uZW50IH0gZnJvbSAnLi90b29sdGlwLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IENvbXBvbmVudFBvcnRhbCB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9wb3J0YWwnO1xyXG5cclxuQERpcmVjdGl2ZSh7XHJcbiAgc2VsZWN0b3I6ICdbY2RrVG9vbHRpcF0nXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBUb29sdGlwRGlyZWN0aXZlIHtcclxuICBASW5wdXQoXCJjZGtUb29sdGlwXCIpIHRleHQgPSBcIlwiO1xyXG4gIEBJbnB1dCgpIGhpZGVUb29sdGlwID0gZmFsc2U7XHJcbiAgQElucHV0KCkgcGxhY2VtZW50OiBUb29sdGlwZVBsYWNlbWVudCA9IFwiYXV0b1wiO1xyXG4gIEBJbnB1dCgpIG5vTWF4ID0gZmFsc2U7XHJcblxyXG4gIHByaXZhdGUgb3ZlcmxheVJlZiE6IE92ZXJsYXlSZWY7XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSBvdmVybGF5OiBPdmVybGF5LFxyXG4gICAgcHJpdmF0ZSBvdmVybGF5UG9zaXRpb25CdWlsZGVyOiBPdmVybGF5UG9zaXRpb25CdWlsZGVyLFxyXG4gICAgcHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxyXG4gICkge31cclxuXHJcbiAgQEhvc3RMaXN0ZW5lcihcIm1vdXNlZW50ZXJcIilcclxuICBzaG93KCkge1xyXG4gICAgaWYgKHRoaXMuaGlkZVRvb2x0aXAgfHwgIXRoaXMudGV4dC5sZW5ndGggfHwgIXRoaXMudGV4dC50cmltKCkubGVuZ3RoKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBwb3NpdGlvblN0cmF0ZWd5ID0gdGhpcy5vdmVybGF5UG9zaXRpb25CdWlsZGVyXHJcbiAgICAgIC5mbGV4aWJsZUNvbm5lY3RlZFRvKHRoaXMuZWxlbWVudFJlZilcclxuICAgICAgLndpdGhQb3NpdGlvbnMoZ2V0UG9zaXRpb25Sb2xlcyh0aGlzLnBsYWNlbWVudCkpXHJcbiAgICAgIC53aXRoR3Jvd0FmdGVyT3Blbih0cnVlKTtcclxuXHJcbiAgICB0aGlzLm92ZXJsYXlSZWYgPSB0aGlzLm92ZXJsYXkuY3JlYXRlKHsgcG9zaXRpb25TdHJhdGVneSB9KTtcclxuXHJcbiAgICBjb25zdCB0b29sdGlwUmVmOiBDb21wb25lbnRSZWY8VG9vbHRpcENvbXBvbmVudD4gPVxyXG4gICAgICB0aGlzLm92ZXJsYXlSZWYuYXR0YWNoKG5ldyBDb21wb25lbnRQb3J0YWwoVG9vbHRpcENvbXBvbmVudCkpO1xyXG5cclxuICAgIHBvc2l0aW9uU3RyYXRlZ3kucG9zaXRpb25DaGFuZ2VzLnN1YnNjcmliZShwID0+IHtcclxuICAgICAgdG9vbHRpcFJlZi5pbnN0YW5jZS5wbGFjZW1lbnQgPSBwLmNvbm5lY3Rpb25QYWlyLnBhbmVsQ2xhc3MgYXMgYW55O1xyXG4gICAgICB0b29sdGlwUmVmLmluc3RhbmNlLm5vTWF4ID0gdGhpcy5ub01heDtcclxuICAgICAgdG9vbHRpcFJlZi5jaGFuZ2VEZXRlY3RvclJlZi5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICB0b29sdGlwUmVmLmluc3RhbmNlLnRleHQgPSB0aGlzLnRleHQ7XHJcbiAgfVxyXG5cclxuICBASG9zdExpc3RlbmVyKFwibW91c2VsZWF2ZVwiKVxyXG4gIGhpZGUoKSB7XHJcbiAgICBpZiAodGhpcy5vdmVybGF5UmVmKSB7XHJcbiAgICAgIHRoaXMub3ZlcmxheVJlZi5kZXRhY2goKTtcclxuICAgICAgdGhpcy5vdmVybGF5UmVmLmRpc3Bvc2UoKTtcclxuICAgICAgdGhpcy5vdmVybGF5UmVmID0gdW5kZWZpbmVkIGFzIGFueTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCkge1xyXG4gICAgaWYgKHRoaXMub3ZlcmxheVJlZikge1xyXG4gICAgICB0aGlzLm92ZXJsYXlSZWYuZGV0YWNoKCk7XHJcbiAgICAgIHRoaXMub3ZlcmxheVJlZi5kaXNwb3NlKCk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ==