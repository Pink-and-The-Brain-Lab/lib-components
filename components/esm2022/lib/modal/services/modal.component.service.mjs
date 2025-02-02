import { OverlayConfig } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { Injectable, Injector } from '@angular/core';
import { OVERLAY_DATA } from '../interfaces/overlay-data.const';
import { ModalOverlayRef } from '../modal-overlay-ref';
import { ModalComponent } from '../modal.component';
import { Subject } from 'rxjs';
import * as i0 from "@angular/core";
import * as i1 from "@angular/cdk/overlay";
export class ModalService {
    constructor(overlay) {
        this.overlay = overlay;
        this.OVERLAY_CONFIG = {
            hasBackdrop: true,
            backdropClass: 'cdk-overlay-dark-backdrop',
            panelClass: 'tm-file-preview-dialog-panel',
            maxWidth: '100%',
            clickOutsideToClose: true,
            showCloseButton: true,
        };
        this.componentResultData = new Subject();
    }
    getOverlayConfig(config) {
        const positionStrategy = this.overlay
            .position()
            .global()
            .centerHorizontally()
            .centerVertically();
        const overlayConfig = new OverlayConfig({
            scrollStrategy: this.overlay.scrollStrategies.block(),
            ...config,
            positionStrategy,
        });
        return overlayConfig;
    }
    createOverlay(config) {
        const overlayConfig = this.getOverlayConfig(config);
        return this.overlay.create(overlayConfig);
    }
    createInjector(config, dialogRef) {
        return Injector.create({
            providers: [
                { provide: ModalOverlayRef, useValue: dialogRef },
                { provide: OVERLAY_DATA, useValue: config },
            ],
        });
    }
    open(modalConfig) {
        const dialogConfig = { ...this.OVERLAY_CONFIG, ...modalConfig };
        this.overlayRef = this.createOverlay(dialogConfig);
        const dialogRef = new ModalOverlayRef(this.overlayRef);
        const injector = this.createInjector(dialogConfig, dialogRef);
        const portal = new ComponentPortal(ModalComponent, null, injector);
        const containerRef = this.overlayRef.attach(portal);
        this.listenBackdropClick(dialogConfig);
        containerRef.instance;
        return dialogRef;
    }
    listenBackdropClick(modalConfig) {
        if (modalConfig?.clickOutsideToClose) {
            this.overlayRef?.backdropClick().subscribe(() => {
                this.overlayRef?.dispose();
            });
        }
    }
    getComponentResultData(data) {
        this.componentResultData.next(data);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.10", ngImport: i0, type: ModalService, deps: [{ token: i1.Overlay }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "18.2.10", ngImport: i0, type: ModalService }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.10", ngImport: i0, type: ModalService, decorators: [{
            type: Injectable
        }], ctorParameters: () => [{ type: i1.Overlay }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kYWwuY29tcG9uZW50LnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jb21wb25lbnRzL3NyYy9saWIvbW9kYWwvc2VydmljZXMvbW9kYWwuY29tcG9uZW50LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFXLGFBQWEsRUFBYyxNQUFNLHNCQUFzQixDQUFDO0FBQzFFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUN0RCxPQUFPLEVBQWdCLFVBQVUsRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFbkUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQ2hFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUN2RCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDcEQsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQzs7O0FBRy9CLE1BQU0sT0FBTyxZQUFZO0lBYXZCLFlBQW9CLE9BQWdCO1FBQWhCLFlBQU8sR0FBUCxPQUFPLENBQVM7UUFabkIsbUJBQWMsR0FBdUI7WUFDcEQsV0FBVyxFQUFFLElBQUk7WUFDakIsYUFBYSxFQUFFLDJCQUEyQjtZQUMxQyxVQUFVLEVBQUUsOEJBQThCO1lBQzFDLFFBQVEsRUFBRSxNQUFNO1lBQ2hCLG1CQUFtQixFQUFFLElBQUk7WUFDekIsZUFBZSxFQUFFLElBQUk7U0FDdEIsQ0FBQztRQUVGLHdCQUFtQixHQUFHLElBQUksT0FBTyxFQUFLLENBQUM7SUFHQSxDQUFDO0lBRWhDLGdCQUFnQixDQUFDLE1BQTBCO1FBQ2pELE1BQU0sZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLE9BQU87YUFDbEMsUUFBUSxFQUFFO2FBQ1YsTUFBTSxFQUFFO2FBQ1Isa0JBQWtCLEVBQUU7YUFDcEIsZ0JBQWdCLEVBQUUsQ0FBQztRQUV0QixNQUFNLGFBQWEsR0FBRyxJQUFJLGFBQWEsQ0FBQztZQUN0QyxjQUFjLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUU7WUFDckQsR0FBRyxNQUFNO1lBQ1QsZ0JBQWdCO1NBQ2pCLENBQUMsQ0FBQztRQUVILE9BQU8sYUFBYSxDQUFDO0lBQ3ZCLENBQUM7SUFFTyxhQUFhLENBQUMsTUFBMEI7UUFDOUMsTUFBTSxhQUFhLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3BELE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDNUMsQ0FBQztJQUVPLGNBQWMsQ0FDcEIsTUFBMEIsRUFDMUIsU0FBNkI7UUFFN0IsT0FBTyxRQUFRLENBQUMsTUFBTSxDQUFDO1lBQ3JCLFNBQVMsRUFBRTtnQkFDVCxFQUFFLE9BQU8sRUFBRSxlQUFlLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBRTtnQkFDakQsRUFBRSxPQUFPLEVBQUUsWUFBWSxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUU7YUFDNUM7U0FDRixDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsSUFBSSxDQUFDLFdBQStCO1FBQ2xDLE1BQU0sWUFBWSxHQUFHLEVBQUUsR0FBRyxJQUFJLENBQUMsY0FBYyxFQUFFLEdBQUcsV0FBVyxFQUFFLENBQUM7UUFDaEUsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQ25ELE1BQU0sU0FBUyxHQUFHLElBQUksZUFBZSxDQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUMxRCxNQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLFlBQVksRUFBRSxTQUFTLENBQUMsQ0FBQztRQUM5RCxNQUFNLE1BQU0sR0FBRyxJQUFJLGVBQWUsQ0FDaEMsY0FBYyxFQUNkLElBQUksRUFDSixRQUFRLENBQ1QsQ0FBQztRQUNGLE1BQU0sWUFBWSxHQUNoQixJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBdUIsTUFBTSxDQUFDLENBQUM7UUFDdkQsSUFBSSxDQUFDLG1CQUFtQixDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQ3ZDLFlBQVksQ0FBQyxRQUFRLENBQUM7UUFDdEIsT0FBTyxTQUFTLENBQUM7SUFDbkIsQ0FBQztJQUVELG1CQUFtQixDQUFDLFdBQStCO1FBQ2pELElBQUksV0FBVyxFQUFFLG1CQUFtQixFQUFFLENBQUM7WUFDckMsSUFBSSxDQUFDLFVBQVUsRUFBRSxhQUFhLEVBQUUsQ0FBQyxTQUFTLENBQUMsR0FBRyxFQUFFO2dCQUM5QyxJQUFJLENBQUMsVUFBVSxFQUFFLE9BQU8sRUFBRSxDQUFDO1lBQzdCLENBQUMsQ0FBQyxDQUFDO1FBQ0wsQ0FBQztJQUNILENBQUM7SUFFRCxzQkFBc0IsQ0FBQyxJQUFPO1FBQzVCLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDdEMsQ0FBQzsrR0EzRVUsWUFBWTttSEFBWixZQUFZOzs0RkFBWixZQUFZO2tCQUR4QixVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgT3ZlcmxheSwgT3ZlcmxheUNvbmZpZywgT3ZlcmxheVJlZiB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9vdmVybGF5JztcclxuaW1wb3J0IHsgQ29tcG9uZW50UG9ydGFsIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3BvcnRhbCc7XHJcbmltcG9ydCB7IENvbXBvbmVudFJlZiwgSW5qZWN0YWJsZSwgSW5qZWN0b3IgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgSU1vZGFsQ29uZmlnIH0gZnJvbSAnLi4vaW50ZXJmYWNlcy9tb2RhbC1kYXRhLmludGVyZmFjZSc7XHJcbmltcG9ydCB7IE9WRVJMQVlfREFUQSB9IGZyb20gJy4uL2ludGVyZmFjZXMvb3ZlcmxheS1kYXRhLmNvbnN0JztcclxuaW1wb3J0IHsgTW9kYWxPdmVybGF5UmVmIH0gZnJvbSAnLi4vbW9kYWwtb3ZlcmxheS1yZWYnO1xyXG5pbXBvcnQgeyBNb2RhbENvbXBvbmVudCB9IGZyb20gJy4uL21vZGFsLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIE1vZGFsU2VydmljZTxULCBLPiB7XHJcbiAgcHJpdmF0ZSByZWFkb25seSBPVkVSTEFZX0NPTkZJRzogSU1vZGFsQ29uZmlnPFQsIEs+ID0ge1xyXG4gICAgaGFzQmFja2Ryb3A6IHRydWUsXHJcbiAgICBiYWNrZHJvcENsYXNzOiAnY2RrLW92ZXJsYXktZGFyay1iYWNrZHJvcCcsXHJcbiAgICBwYW5lbENsYXNzOiAndG0tZmlsZS1wcmV2aWV3LWRpYWxvZy1wYW5lbCcsXHJcbiAgICBtYXhXaWR0aDogJzEwMCUnLFxyXG4gICAgY2xpY2tPdXRzaWRlVG9DbG9zZTogdHJ1ZSxcclxuICAgIHNob3dDbG9zZUJ1dHRvbjogdHJ1ZSxcclxuICB9O1xyXG5cclxuICBjb21wb25lbnRSZXN1bHREYXRhID0gbmV3IFN1YmplY3Q8VD4oKTtcclxuICBwcml2YXRlIG92ZXJsYXlSZWYhOiBPdmVybGF5UmVmO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIG92ZXJsYXk6IE92ZXJsYXkpIHt9XHJcblxyXG4gIHByaXZhdGUgZ2V0T3ZlcmxheUNvbmZpZyhjb25maWc6IElNb2RhbENvbmZpZzxULCBLPik6IE92ZXJsYXlDb25maWcge1xyXG4gICAgY29uc3QgcG9zaXRpb25TdHJhdGVneSA9IHRoaXMub3ZlcmxheVxyXG4gICAgICAucG9zaXRpb24oKVxyXG4gICAgICAuZ2xvYmFsKClcclxuICAgICAgLmNlbnRlckhvcml6b250YWxseSgpXHJcbiAgICAgIC5jZW50ZXJWZXJ0aWNhbGx5KCk7XHJcblxyXG4gICAgY29uc3Qgb3ZlcmxheUNvbmZpZyA9IG5ldyBPdmVybGF5Q29uZmlnKHtcclxuICAgICAgc2Nyb2xsU3RyYXRlZ3k6IHRoaXMub3ZlcmxheS5zY3JvbGxTdHJhdGVnaWVzLmJsb2NrKCksXHJcbiAgICAgIC4uLmNvbmZpZyxcclxuICAgICAgcG9zaXRpb25TdHJhdGVneSxcclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiBvdmVybGF5Q29uZmlnO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBjcmVhdGVPdmVybGF5KGNvbmZpZzogSU1vZGFsQ29uZmlnPFQsIEs+KSB7XHJcbiAgICBjb25zdCBvdmVybGF5Q29uZmlnID0gdGhpcy5nZXRPdmVybGF5Q29uZmlnKGNvbmZpZyk7XHJcbiAgICByZXR1cm4gdGhpcy5vdmVybGF5LmNyZWF0ZShvdmVybGF5Q29uZmlnKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgY3JlYXRlSW5qZWN0b3IoXHJcbiAgICBjb25maWc6IElNb2RhbENvbmZpZzxULCBLPixcclxuICAgIGRpYWxvZ1JlZjogTW9kYWxPdmVybGF5UmVmPFQ+XHJcbiAgKTogSW5qZWN0b3Ige1xyXG4gICAgcmV0dXJuIEluamVjdG9yLmNyZWF0ZSh7XHJcbiAgICAgIHByb3ZpZGVyczogW1xyXG4gICAgICAgIHsgcHJvdmlkZTogTW9kYWxPdmVybGF5UmVmLCB1c2VWYWx1ZTogZGlhbG9nUmVmIH0sXHJcbiAgICAgICAgeyBwcm92aWRlOiBPVkVSTEFZX0RBVEEsIHVzZVZhbHVlOiBjb25maWcgfSxcclxuICAgICAgXSxcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgb3Blbihtb2RhbENvbmZpZzogSU1vZGFsQ29uZmlnPFQsIEs+KTogTW9kYWxPdmVybGF5UmVmPFQ+IHtcclxuICAgIGNvbnN0IGRpYWxvZ0NvbmZpZyA9IHsgLi4udGhpcy5PVkVSTEFZX0NPTkZJRywgLi4ubW9kYWxDb25maWcgfTtcclxuICAgIHRoaXMub3ZlcmxheVJlZiA9IHRoaXMuY3JlYXRlT3ZlcmxheShkaWFsb2dDb25maWcpO1xyXG4gICAgY29uc3QgZGlhbG9nUmVmID0gbmV3IE1vZGFsT3ZlcmxheVJlZjxUPih0aGlzLm92ZXJsYXlSZWYpO1xyXG4gICAgY29uc3QgaW5qZWN0b3IgPSB0aGlzLmNyZWF0ZUluamVjdG9yKGRpYWxvZ0NvbmZpZywgZGlhbG9nUmVmKTtcclxuICAgIGNvbnN0IHBvcnRhbCA9IG5ldyBDb21wb25lbnRQb3J0YWw8TW9kYWxDb21wb25lbnQ8VCwgSz4+KFxyXG4gICAgICBNb2RhbENvbXBvbmVudCxcclxuICAgICAgbnVsbCxcclxuICAgICAgaW5qZWN0b3JcclxuICAgICk7XHJcbiAgICBjb25zdCBjb250YWluZXJSZWY6IENvbXBvbmVudFJlZjxNb2RhbENvbXBvbmVudDxULCBLPj4gPVxyXG4gICAgICB0aGlzLm92ZXJsYXlSZWYuYXR0YWNoPE1vZGFsQ29tcG9uZW50PFQsIEs+Pihwb3J0YWwpO1xyXG4gICAgdGhpcy5saXN0ZW5CYWNrZHJvcENsaWNrKGRpYWxvZ0NvbmZpZyk7XHJcbiAgICBjb250YWluZXJSZWYuaW5zdGFuY2U7XHJcbiAgICByZXR1cm4gZGlhbG9nUmVmO1xyXG4gIH1cclxuXHJcbiAgbGlzdGVuQmFja2Ryb3BDbGljayhtb2RhbENvbmZpZzogSU1vZGFsQ29uZmlnPFQsIEs+KSB7XHJcbiAgICBpZiAobW9kYWxDb25maWc/LmNsaWNrT3V0c2lkZVRvQ2xvc2UpIHtcclxuICAgICAgdGhpcy5vdmVybGF5UmVmPy5iYWNrZHJvcENsaWNrKCkuc3Vic2NyaWJlKCgpID0+IHtcclxuICAgICAgICB0aGlzLm92ZXJsYXlSZWY/LmRpc3Bvc2UoKTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBnZXRDb21wb25lbnRSZXN1bHREYXRhKGRhdGE6IFQpIHtcclxuICAgIHRoaXMuY29tcG9uZW50UmVzdWx0RGF0YS5uZXh0KGRhdGEpO1xyXG4gIH1cclxufVxyXG4iXX0=