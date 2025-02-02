import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalComponent } from './modal.component';
import { OverlayModule } from '@angular/cdk/overlay';
import { ModalService } from './services/modal.component.service';
import { PortalModule } from '@angular/cdk/portal';
import * as i0 from "@angular/core";
export class ModalModule {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.10", ngImport: i0, type: ModalModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "18.2.10", ngImport: i0, type: ModalModule, declarations: [ModalComponent], imports: [CommonModule,
            OverlayModule,
            PortalModule], exports: [ModalComponent] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "18.2.10", ngImport: i0, type: ModalModule, providers: [
            ModalService,
        ], imports: [CommonModule,
            OverlayModule,
            PortalModule] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.10", ngImport: i0, type: ModalModule, decorators: [{
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
                    ]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kYWwubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY29tcG9uZW50cy9zcmMvbGliL21vZGFsL21vZGFsLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDbkQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3JELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUNsRSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0scUJBQXFCLENBQUM7O0FBa0JuRCxNQUFNLE9BQU8sV0FBVzsrR0FBWCxXQUFXO2dIQUFYLFdBQVcsaUJBZHBCLGNBQWMsYUFNZCxZQUFZO1lBQ1osYUFBYTtZQUNiLFlBQVksYUFMWixjQUFjO2dIQVdMLFdBQVcsYUFKWDtZQUNULFlBQVk7U0FDYixZQU5DLFlBQVk7WUFDWixhQUFhO1lBQ2IsWUFBWTs7NEZBTUgsV0FBVztrQkFoQnZCLFFBQVE7bUJBQUM7b0JBQ1IsWUFBWSxFQUFFO3dCQUNaLGNBQWM7cUJBQ2Y7b0JBQ0QsT0FBTyxFQUFFO3dCQUNQLGNBQWM7cUJBQ2Y7b0JBQ0QsT0FBTyxFQUFFO3dCQUNQLFlBQVk7d0JBQ1osYUFBYTt3QkFDYixZQUFZO3FCQUNiO29CQUNELFNBQVMsRUFBRTt3QkFDVCxZQUFZO3FCQUNiO2lCQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgTW9kYWxDb21wb25lbnQgfSBmcm9tICcuL21vZGFsLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IE92ZXJsYXlNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jZGsvb3ZlcmxheSc7XHJcbmltcG9ydCB7IE1vZGFsU2VydmljZSB9IGZyb20gJy4vc2VydmljZXMvbW9kYWwuY29tcG9uZW50LnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBQb3J0YWxNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jZGsvcG9ydGFsJztcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgZGVjbGFyYXRpb25zOiBbXHJcbiAgICBNb2RhbENvbXBvbmVudFxyXG4gIF0sXHJcbiAgZXhwb3J0czogW1xyXG4gICAgTW9kYWxDb21wb25lbnQsXHJcbiAgXSxcclxuICBpbXBvcnRzOiBbXHJcbiAgICBDb21tb25Nb2R1bGUsXHJcbiAgICBPdmVybGF5TW9kdWxlLFxyXG4gICAgUG9ydGFsTW9kdWxlLFxyXG4gIF0sXHJcbiAgcHJvdmlkZXJzOiBbXHJcbiAgICBNb2RhbFNlcnZpY2UsXHJcbiAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTW9kYWxNb2R1bGUgeyB9XHJcbiJdfQ==