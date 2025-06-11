import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PopoverDirective } from './popover.directive';
import { FullscreenOverlayContainer, OverlayContainer, OverlayModule } from '@angular/cdk/overlay';
import * as i0 from "@angular/core";
export class PopoverModule {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.10", ngImport: i0, type: PopoverModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "18.2.10", ngImport: i0, type: PopoverModule, declarations: [PopoverDirective], imports: [CommonModule, OverlayModule], exports: [PopoverDirective] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "18.2.10", ngImport: i0, type: PopoverModule, providers: [{
                provide: OverlayContainer,
                useClass: FullscreenOverlayContainer,
            }], imports: [CommonModule, OverlayModule] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.10", ngImport: i0, type: PopoverModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        PopoverDirective
                    ],
                    exports: [PopoverDirective],
                    imports: [CommonModule, OverlayModule],
                    providers: [{
                            provide: OverlayContainer,
                            useClass: FullscreenOverlayContainer,
                        }]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9wb3Zlci5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jb21wb25lbnRzL3NyYy9saWIvcG9wb3Zlci9wb3BvdmVyLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUN2RCxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsZ0JBQWdCLEVBQUUsYUFBYSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7O0FBYW5HLE1BQU0sT0FBTyxhQUFhOytHQUFiLGFBQWE7Z0hBQWIsYUFBYSxpQkFUdEIsZ0JBQWdCLGFBR1IsWUFBWSxFQUFFLGFBQWEsYUFEM0IsZ0JBQWdCO2dIQU9mLGFBQWEsYUFMYixDQUFDO2dCQUNWLE9BQU8sRUFBRSxnQkFBZ0I7Z0JBQ3pCLFFBQVEsRUFBRSwwQkFBMEI7YUFDckMsQ0FBQyxZQUpRLFlBQVksRUFBRSxhQUFhOzs0RkFNMUIsYUFBYTtrQkFYekIsUUFBUTttQkFBQztvQkFDUixZQUFZLEVBQUU7d0JBQ1osZ0JBQWdCO3FCQUNqQjtvQkFDRCxPQUFPLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQztvQkFDM0IsT0FBTyxFQUFFLENBQUMsWUFBWSxFQUFFLGFBQWEsQ0FBQztvQkFDdEMsU0FBUyxFQUFFLENBQUM7NEJBQ1YsT0FBTyxFQUFFLGdCQUFnQjs0QkFDekIsUUFBUSxFQUFFLDBCQUEwQjt5QkFDckMsQ0FBQztpQkFDSCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IFBvcG92ZXJEaXJlY3RpdmUgfSBmcm9tICcuL3BvcG92ZXIuZGlyZWN0aXZlJztcclxuaW1wb3J0IHsgRnVsbHNjcmVlbk92ZXJsYXlDb250YWluZXIsIE92ZXJsYXlDb250YWluZXIsIE92ZXJsYXlNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jZGsvb3ZlcmxheSc7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGRlY2xhcmF0aW9uczogW1xyXG4gICAgUG9wb3ZlckRpcmVjdGl2ZVxyXG4gIF0sXHJcbiAgZXhwb3J0czogW1BvcG92ZXJEaXJlY3RpdmVdLFxyXG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGUsIE92ZXJsYXlNb2R1bGVdLFxyXG4gIHByb3ZpZGVyczogW3tcclxuICAgIHByb3ZpZGU6IE92ZXJsYXlDb250YWluZXIsXHJcbiAgICB1c2VDbGFzczogRnVsbHNjcmVlbk92ZXJsYXlDb250YWluZXIsXHJcbiAgfV1cclxufSlcclxuZXhwb3J0IGNsYXNzIFBvcG92ZXJNb2R1bGUgeyB9XHJcbiJdfQ==