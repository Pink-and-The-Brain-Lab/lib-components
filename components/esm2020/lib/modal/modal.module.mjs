import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalComponent } from './modal.component';
import { OverlayModule } from '@angular/cdk/overlay';
import { ModalService } from './services/modal.component.service';
import { PortalModule } from '@angular/cdk/portal';
import * as i0 from "@angular/core";
export class ModalModule {
}
ModalModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: ModalModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
ModalModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "15.1.2", ngImport: i0, type: ModalModule, declarations: [ModalComponent], imports: [CommonModule,
        OverlayModule,
        PortalModule], exports: [ModalComponent] });
ModalModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: ModalModule, providers: [
        ModalService,
    ], imports: [CommonModule,
        OverlayModule,
        PortalModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: ModalModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        ModalComponent
                    ],
                    exports: [
                        ModalComponent,
                    ],
                    imports: [
                        CommonModule,
                        OverlayModule,
                        PortalModule,
                    ],
                    providers: [
                        ModalService,
                    ],
                    entryComponents: [
                        ModalComponent
                    ]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kYWwubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY29tcG9uZW50cy9zcmMvbGliL21vZGFsL21vZGFsLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDbkQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3JELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUNsRSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0scUJBQXFCLENBQUM7O0FBcUJuRCxNQUFNLE9BQU8sV0FBVzs7d0dBQVgsV0FBVzt5R0FBWCxXQUFXLGlCQWpCcEIsY0FBYyxhQU1kLFlBQVk7UUFDWixhQUFhO1FBQ2IsWUFBWSxhQUxaLGNBQWM7eUdBY0wsV0FBVyxhQVBYO1FBQ1QsWUFBWTtLQUNiLFlBTkMsWUFBWTtRQUNaLGFBQWE7UUFDYixZQUFZOzJGQVNILFdBQVc7a0JBbkJ2QixRQUFRO21CQUFDO29CQUNSLFlBQVksRUFBRTt3QkFDWixjQUFjO3FCQUNmO29CQUNELE9BQU8sRUFBRTt3QkFDUCxjQUFjO3FCQUNmO29CQUNELE9BQU8sRUFBRTt3QkFDUCxZQUFZO3dCQUNaLGFBQWE7d0JBQ2IsWUFBWTtxQkFDYjtvQkFDRCxTQUFTLEVBQUU7d0JBQ1QsWUFBWTtxQkFDYjtvQkFDRCxlQUFlLEVBQUU7d0JBQ2YsY0FBYztxQkFDZjtpQkFDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IE1vZGFsQ29tcG9uZW50IH0gZnJvbSAnLi9tb2RhbC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBPdmVybGF5TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL292ZXJsYXknO1xyXG5pbXBvcnQgeyBNb2RhbFNlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2VzL21vZGFsLmNvbXBvbmVudC5zZXJ2aWNlJztcclxuaW1wb3J0IHsgUG9ydGFsTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3BvcnRhbCc7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGRlY2xhcmF0aW9uczogW1xyXG4gICAgTW9kYWxDb21wb25lbnRcclxuICBdLFxyXG4gIGV4cG9ydHM6IFtcclxuICAgIE1vZGFsQ29tcG9uZW50LFxyXG4gIF0sXHJcbiAgaW1wb3J0czogW1xyXG4gICAgQ29tbW9uTW9kdWxlLFxyXG4gICAgT3ZlcmxheU1vZHVsZSxcclxuICAgIFBvcnRhbE1vZHVsZSxcclxuICBdLFxyXG4gIHByb3ZpZGVyczogW1xyXG4gICAgTW9kYWxTZXJ2aWNlLFxyXG4gIF0sXHJcbiAgZW50cnlDb21wb25lbnRzOiBbXHJcbiAgICBNb2RhbENvbXBvbmVudFxyXG4gIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIE1vZGFsTW9kdWxlIHsgfVxyXG4iXX0=