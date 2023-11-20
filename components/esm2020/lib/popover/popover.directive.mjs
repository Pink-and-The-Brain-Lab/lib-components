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
    constructor(overlay, template, viewContainerRef) {
        this.overlay = overlay;
        this.template = template;
        this.viewContainerRef = viewContainerRef;
        this._positons = PopoverPositions.getPosition('EBSB');
    }
    open() {
        const position = this.overlay.position().flexibleConnectedTo(this._target).withPositions([this._positons]);
        const config = new OverlayConfig({
            hasBackdrop: true,
            backdropClass: 'cdk-overlay-transparent-backdrop',
            scrollStrategy: this.overlay.scrollStrategies.block(),
            positionStrategy: position,
            maxHeight: '95%',
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
PopoverDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "15.1.2", type: PopoverDirective, selector: "[cdkPopover]", inputs: { cdkPopover: "cdkPopover", target: ["cdkPopoverTarget", "target"], positions: ["cdkPopoverPositions", "positions"], close: ["cdkPopoverClose", "close"] }, ngImport: i0 });
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
            }], close: [{
                type: Input,
                args: ['cdkPopoverClose']
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9wb3Zlci5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jb21wb25lbnRzL3NyYy9saWIvcG9wb3Zlci9wb3BvdmVyLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQThCLGFBQWEsRUFBYyxNQUFNLHNCQUFzQixDQUFDO0FBQzdGLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUNyRCxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQWlDLE1BQU0sZUFBZSxDQUFDO0FBQzFGLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHFCQUFxQixDQUFDOzs7QUFNdkQsTUFBTSxPQUFPLGdCQUFnQjtJQVEzQixJQUF5QixVQUFVLENBQUMsS0FBYztRQUNoRCxJQUFJLEtBQUs7WUFBRSxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7YUFDbEIsSUFBSSxJQUFJLENBQUMsVUFBVTtZQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxFQUFFLENBQUM7SUFFdEQsQ0FBQztJQUVELElBQStCLE1BQU0sQ0FBQyxLQUFrQjtRQUN0RCxJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztJQUN2QixDQUFDO0lBRUQsSUFBOEMsU0FBUyxDQUFDLEtBQXFCO1FBQzNFLElBQUksQ0FBQyxTQUFTLEdBQUcsZ0JBQWdCLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3ZELENBQUM7SUFLRCxZQUNVLE9BQWdCLEVBQ2hCLFFBQTZCLEVBQzdCLGdCQUFrQztRQUZsQyxZQUFPLEdBQVAsT0FBTyxDQUFTO1FBQ2hCLGFBQVEsR0FBUixRQUFRLENBQXFCO1FBQzdCLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUF0QnBDLGNBQVMsR0FBc0IsZ0JBQWdCLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBdUJ6RSxDQUFDO0lBRUosSUFBSTtRQUNGLE1BQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxFQUFFLENBQUMsbUJBQW1CLENBQzFELElBQUksQ0FBQyxPQUFPLENBQ2IsQ0FBQyxhQUFhLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztRQUNsQyxNQUFNLE1BQU0sR0FBRyxJQUFJLGFBQWEsQ0FBQztZQUMvQixXQUFXLEVBQUUsSUFBSTtZQUNqQixhQUFhLEVBQUUsa0NBQWtDO1lBQ2pELGNBQWMsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLGdCQUFnQixDQUFDLEtBQUssRUFBRTtZQUNyRCxnQkFBZ0IsRUFBRSxRQUFRO1lBQzFCLFNBQVMsRUFBRSxLQUFLO1lBQ2hCLG1CQUFtQixFQUFFLElBQUk7U0FDMUIsQ0FBQyxDQUFDO1FBRUgsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUM5QyxNQUFNLFNBQVMsR0FBRyxJQUFJLGNBQWMsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1FBQzNFLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBRWxDLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUFFLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQ2hELElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO1lBQ3hCLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDcEIsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDOzs2R0FwRFUsZ0JBQWdCO2lHQUFoQixnQkFBZ0I7MkZBQWhCLGdCQUFnQjtrQkFINUIsU0FBUzttQkFBQztvQkFDVCxRQUFRLEVBQUUsY0FBYztpQkFDekI7dUpBUzBCLFVBQVU7c0JBQWxDLEtBQUs7dUJBQUMsWUFBWTtnQkFNWSxNQUFNO3NCQUFwQyxLQUFLO3VCQUFDLGtCQUFrQjtnQkFJcUIsU0FBUztzQkFBdEQsUUFBUTs7c0JBQUksS0FBSzt1QkFBQyxxQkFBcUI7Z0JBS2QsS0FBSztzQkFBOUIsS0FBSzt1QkFBQyxpQkFBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb25uZWN0ZWRQb3NpdGlvbiwgT3ZlcmxheSwgT3ZlcmxheUNvbmZpZywgT3ZlcmxheVJlZiB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9vdmVybGF5JztcclxuaW1wb3J0IHsgVGVtcGxhdGVQb3J0YWwgfSBmcm9tICdAYW5ndWxhci9jZGsvcG9ydGFsJztcclxuaW1wb3J0IHsgRGlyZWN0aXZlLCBJbnB1dCwgT3B0aW9uYWwsIFRlbXBsYXRlUmVmLCBWaWV3Q29udGFpbmVyUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFBvcG92ZXJQb3NpdGlvbnMgfSBmcm9tICcuL3BvcG92ZXItcG9zaXRpb25zJztcclxuaW1wb3J0IHsgUG9zaXRpb25PcHRpb24gfSBmcm9tICcuL3BvcG92ZXItcG9zaXRpb25zLm1hcCc7XHJcblxyXG5ARGlyZWN0aXZlKHtcclxuICBzZWxlY3RvcjogJ1tjZGtQb3BvdmVyXSdcclxufSlcclxuZXhwb3J0IGNsYXNzIFBvcG92ZXJEaXJlY3RpdmUge1xyXG4gIFxyXG4gIC8vIEB0cy1pZ25vcmVcclxuICBwcml2YXRlIG92ZXJsYXlSZWY6IE92ZXJsYXlSZWY7XHJcbiAgLy8gQHRzLWlnbm9yZVxyXG4gIHByaXZhdGUgX3RhcmdldDogSFRNTEVsZW1lbnQ7XHJcbiAgcHJpdmF0ZSBfcG9zaXRvbnM6IENvbm5lY3RlZFBvc2l0aW9uID0gUG9wb3ZlclBvc2l0aW9ucy5nZXRQb3NpdGlvbignRUJTQicpO1xyXG4gIFxyXG4gIEBJbnB1dCgnY2RrUG9wb3ZlcicpIHNldCBjZGtQb3BvdmVyKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICBpZiAodmFsdWUpIHRoaXMub3BlbigpO1xyXG4gICAgZWxzZSBpZiAodGhpcy5vdmVybGF5UmVmKSB0aGlzLm92ZXJsYXlSZWYuZGlzcG9zZSgpO1xyXG4gICAgXHJcbiAgfVxyXG5cclxuICBASW5wdXQoJ2Nka1BvcG92ZXJUYXJnZXQnKSBzZXQgdGFyZ2V0KHZhbHVlOiBIVE1MRWxlbWVudCkge1xyXG4gICAgdGhpcy5fdGFyZ2V0ID0gdmFsdWU7XHJcbiAgfVxyXG5cclxuICBAT3B0aW9uYWwoKSBASW5wdXQoJ2Nka1BvcG92ZXJQb3NpdGlvbnMnKSBzZXQgcG9zaXRpb25zKHZhbHVlOiBQb3NpdGlvbk9wdGlvbikge1xyXG4gICAgdGhpcy5fcG9zaXRvbnMgPSBQb3BvdmVyUG9zaXRpb25zLmdldFBvc2l0aW9uKHZhbHVlKTtcclxuICB9XHJcblxyXG4gIC8vIEB0cy1pZ25vcmVcclxuICBASW5wdXQoJ2Nka1BvcG92ZXJDbG9zZScpIGNsb3NlOiAoZXZlbnQ6IE1vdXNlRXZlbnQpID0+IHZvaWQ7XHJcblxyXG4gIGNvbnN0cnVjdG9yIChcclxuICAgIHByaXZhdGUgb3ZlcmxheTogT3ZlcmxheSxcclxuICAgIHByaXZhdGUgdGVtcGxhdGU6IFRlbXBsYXRlUmVmPG9iamVjdD4sXHJcbiAgICBwcml2YXRlIHZpZXdDb250YWluZXJSZWY6IFZpZXdDb250YWluZXJSZWYsXHJcbiAgKSB7fVxyXG5cclxuICBvcGVuKCkge1xyXG4gICAgY29uc3QgcG9zaXRpb24gPSB0aGlzLm92ZXJsYXkucG9zaXRpb24oKS5mbGV4aWJsZUNvbm5lY3RlZFRvKFxyXG4gICAgICB0aGlzLl90YXJnZXQsXHJcbiAgICApLndpdGhQb3NpdGlvbnMoW3RoaXMuX3Bvc2l0b25zXSk7XHJcbiAgICBjb25zdCBjb25maWcgPSBuZXcgT3ZlcmxheUNvbmZpZyh7XHJcbiAgICAgIGhhc0JhY2tkcm9wOiB0cnVlLFxyXG4gICAgICBiYWNrZHJvcENsYXNzOiAnY2RrLW92ZXJsYXktdHJhbnNwYXJlbnQtYmFja2Ryb3AnLFxyXG4gICAgICBzY3JvbGxTdHJhdGVneTogdGhpcy5vdmVybGF5LnNjcm9sbFN0cmF0ZWdpZXMuYmxvY2soKSxcclxuICAgICAgcG9zaXRpb25TdHJhdGVneTogcG9zaXRpb24sXHJcbiAgICAgIG1heEhlaWdodDogJzk1JScsXHJcbiAgICAgIGRpc3Bvc2VPbk5hdmlnYXRpb246IHRydWUsXHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLm92ZXJsYXlSZWYgPSB0aGlzLm92ZXJsYXkuY3JlYXRlKGNvbmZpZyk7XHJcbiAgICBjb25zdCBjb21wb25lbnQgPSBuZXcgVGVtcGxhdGVQb3J0YWwodGhpcy50ZW1wbGF0ZSwgdGhpcy52aWV3Q29udGFpbmVyUmVmKTtcclxuICAgIHRoaXMub3ZlcmxheVJlZi5hdHRhY2goY29tcG9uZW50KTtcclxuXHJcbiAgICB0aGlzLm92ZXJsYXlSZWYuYmFja2Ryb3BDbGljaygpLnN1YnNjcmliZShldmVudCA9PiB7XHJcbiAgICAgIHRoaXMuY2RrUG9wb3ZlciA9IGZhbHNlO1xyXG4gICAgICB0aGlzLmNsb3NlKGV2ZW50KTtcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG4iXX0=