import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PopoverDirective } from './popover.directive';
import { FullscreenOverlayContainer, OverlayContainer, OverlayModule } from '@angular/cdk/overlay';
import * as i0 from "@angular/core";
export class PopoverModule {
}
PopoverModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: PopoverModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
PopoverModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "15.1.2", ngImport: i0, type: PopoverModule, declarations: [PopoverDirective], imports: [CommonModule, OverlayModule], exports: [PopoverDirective] });
PopoverModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: PopoverModule, providers: [{
            provide: OverlayContainer,
            useClass: FullscreenOverlayContainer,
        }], imports: [CommonModule, OverlayModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: PopoverModule, decorators: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9wb3Zlci5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jb21wb25lbnRzL3NyYy9saWIvcG9wb3Zlci9wb3BvdmVyLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUN2RCxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsZ0JBQWdCLEVBQUUsYUFBYSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7O0FBYW5HLE1BQU0sT0FBTyxhQUFhOzswR0FBYixhQUFhOzJHQUFiLGFBQWEsaUJBVHRCLGdCQUFnQixhQUdSLFlBQVksRUFBRSxhQUFhLGFBRDNCLGdCQUFnQjsyR0FPZixhQUFhLGFBTGIsQ0FBQztZQUNWLE9BQU8sRUFBRSxnQkFBZ0I7WUFDekIsUUFBUSxFQUFFLDBCQUEwQjtTQUNyQyxDQUFDLFlBSlEsWUFBWSxFQUFFLGFBQWE7MkZBTTFCLGFBQWE7a0JBWHpCLFFBQVE7bUJBQUM7b0JBQ1IsWUFBWSxFQUFFO3dCQUNaLGdCQUFnQjtxQkFDakI7b0JBQ0QsT0FBTyxFQUFFLENBQUMsZ0JBQWdCLENBQUM7b0JBQzNCLE9BQU8sRUFBRSxDQUFDLFlBQVksRUFBRSxhQUFhLENBQUM7b0JBQ3RDLFNBQVMsRUFBRSxDQUFDOzRCQUNWLE9BQU8sRUFBRSxnQkFBZ0I7NEJBQ3pCLFFBQVEsRUFBRSwwQkFBMEI7eUJBQ3JDLENBQUM7aUJBQ0giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBQb3BvdmVyRGlyZWN0aXZlIH0gZnJvbSAnLi9wb3BvdmVyLmRpcmVjdGl2ZSc7XHJcbmltcG9ydCB7IEZ1bGxzY3JlZW5PdmVybGF5Q29udGFpbmVyLCBPdmVybGF5Q29udGFpbmVyLCBPdmVybGF5TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL292ZXJsYXknO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICBkZWNsYXJhdGlvbnM6IFtcclxuICAgIFBvcG92ZXJEaXJlY3RpdmVcclxuICBdLFxyXG4gIGV4cG9ydHM6IFtQb3BvdmVyRGlyZWN0aXZlXSxcclxuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBPdmVybGF5TW9kdWxlXSxcclxuICBwcm92aWRlcnM6IFt7XHJcbiAgICBwcm92aWRlOiBPdmVybGF5Q29udGFpbmVyLFxyXG4gICAgdXNlQ2xhc3M6IEZ1bGxzY3JlZW5PdmVybGF5Q29udGFpbmVyLFxyXG4gIH1dXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBQb3BvdmVyTW9kdWxlIHsgfVxyXG4iXX0=