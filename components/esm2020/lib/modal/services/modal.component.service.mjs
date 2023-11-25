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
}
ModalService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: ModalService, deps: [{ token: i1.Overlay }], target: i0.ɵɵFactoryTarget.Injectable });
ModalService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: ModalService });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: ModalService, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return [{ type: i1.Overlay }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kYWwuY29tcG9uZW50LnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jb21wb25lbnRzL3NyYy9saWIvbW9kYWwvc2VydmljZXMvbW9kYWwuY29tcG9uZW50LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFXLGFBQWEsRUFBYyxNQUFNLHNCQUFzQixDQUFDO0FBQzFFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUN0RCxPQUFPLEVBQWdCLFVBQVUsRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFbkUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQ2hFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUN2RCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDcEQsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQzs7O0FBRy9CLE1BQU0sT0FBTyxZQUFZO0lBYXZCLFlBQW9CLE9BQWdCO1FBQWhCLFlBQU8sR0FBUCxPQUFPLENBQVM7UUFabkIsbUJBQWMsR0FBdUI7WUFDcEQsV0FBVyxFQUFFLElBQUk7WUFDakIsYUFBYSxFQUFFLDJCQUEyQjtZQUMxQyxVQUFVLEVBQUUsOEJBQThCO1lBQzFDLFFBQVEsRUFBRSxNQUFNO1lBQ2hCLG1CQUFtQixFQUFFLElBQUk7WUFDekIsZUFBZSxFQUFFLElBQUk7U0FDdEIsQ0FBQztRQUVGLHdCQUFtQixHQUFHLElBQUksT0FBTyxFQUFLLENBQUM7SUFHQSxDQUFDO0lBRWhDLGdCQUFnQixDQUFDLE1BQTBCO1FBQ2pELE1BQU0sZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLE9BQU87YUFDbEMsUUFBUSxFQUFFO2FBQ1YsTUFBTSxFQUFFO2FBQ1Isa0JBQWtCLEVBQUU7YUFDcEIsZ0JBQWdCLEVBQUUsQ0FBQztRQUV0QixNQUFNLGFBQWEsR0FBRyxJQUFJLGFBQWEsQ0FBQztZQUN0QyxjQUFjLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUU7WUFDckQsR0FBRyxNQUFNO1lBQ1QsZ0JBQWdCO1NBQ2pCLENBQUMsQ0FBQztRQUVILE9BQU8sYUFBYSxDQUFDO0lBQ3ZCLENBQUM7SUFFTyxhQUFhLENBQUMsTUFBMEI7UUFDOUMsTUFBTSxhQUFhLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3BELE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDNUMsQ0FBQztJQUVPLGNBQWMsQ0FDcEIsTUFBMEIsRUFDMUIsU0FBNkI7UUFFN0IsT0FBTyxRQUFRLENBQUMsTUFBTSxDQUFDO1lBQ3JCLFNBQVMsRUFBRTtnQkFDVCxFQUFFLE9BQU8sRUFBRSxlQUFlLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBRTtnQkFDakQsRUFBRSxPQUFPLEVBQUUsWUFBWSxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUU7YUFDNUM7U0FDRixDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsSUFBSSxDQUFDLFdBQStCO1FBQ2xDLE1BQU0sWUFBWSxHQUFHLEVBQUUsR0FBRyxJQUFJLENBQUMsY0FBYyxFQUFFLEdBQUcsV0FBVyxFQUFFLENBQUM7UUFDaEUsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQ25ELE1BQU0sU0FBUyxHQUFHLElBQUksZUFBZSxDQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUMxRCxNQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLFlBQVksRUFBRSxTQUFTLENBQUMsQ0FBQztRQUM5RCxNQUFNLE1BQU0sR0FBRyxJQUFJLGVBQWUsQ0FDaEMsY0FBYyxFQUNkLElBQUksRUFDSixRQUFRLENBQ1QsQ0FBQztRQUNGLE1BQU0sWUFBWSxHQUNoQixJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBdUIsTUFBTSxDQUFDLENBQUM7UUFDdkQsSUFBSSxDQUFDLG1CQUFtQixDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQ3ZDLFlBQVksQ0FBQyxRQUFRLENBQUM7UUFDdEIsT0FBTyxTQUFTLENBQUM7SUFDbkIsQ0FBQztJQUVELG1CQUFtQixDQUFDLFdBQStCO1FBQ2pELElBQUksV0FBVyxFQUFFLG1CQUFtQixFQUFFO1lBQ3BDLElBQUksQ0FBQyxVQUFVLEVBQUUsYUFBYSxFQUFFLENBQUMsU0FBUyxDQUFDLEdBQUcsRUFBRTtnQkFDOUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxPQUFPLEVBQUUsQ0FBQztZQUM3QixDQUFDLENBQUMsQ0FBQztTQUNKO0lBQ0gsQ0FBQztJQUVELHNCQUFzQixDQUFDLElBQU87UUFDNUIsSUFBSSxDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN0QyxDQUFDOzt5R0EzRVUsWUFBWTs2R0FBWixZQUFZOzJGQUFaLFlBQVk7a0JBRHhCLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBPdmVybGF5LCBPdmVybGF5Q29uZmlnLCBPdmVybGF5UmVmIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL292ZXJsYXknO1xyXG5pbXBvcnQgeyBDb21wb25lbnRQb3J0YWwgfSBmcm9tICdAYW5ndWxhci9jZGsvcG9ydGFsJztcclxuaW1wb3J0IHsgQ29tcG9uZW50UmVmLCBJbmplY3RhYmxlLCBJbmplY3RvciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBJTW9kYWxDb25maWcgfSBmcm9tICcuLi9pbnRlcmZhY2VzL21vZGFsLWRhdGEuaW50ZXJmYWNlJztcclxuaW1wb3J0IHsgT1ZFUkxBWV9EQVRBIH0gZnJvbSAnLi4vaW50ZXJmYWNlcy9vdmVybGF5LWRhdGEuY29uc3QnO1xyXG5pbXBvcnQgeyBNb2RhbE92ZXJsYXlSZWYgfSBmcm9tICcuLi9tb2RhbC1vdmVybGF5LXJlZic7XHJcbmltcG9ydCB7IE1vZGFsQ29tcG9uZW50IH0gZnJvbSAnLi4vbW9kYWwuY29tcG9uZW50JztcclxuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgTW9kYWxTZXJ2aWNlPFQsIEs+IHtcclxuICBwcml2YXRlIHJlYWRvbmx5IE9WRVJMQVlfQ09ORklHOiBJTW9kYWxDb25maWc8VCwgSz4gPSB7XHJcbiAgICBoYXNCYWNrZHJvcDogdHJ1ZSxcclxuICAgIGJhY2tkcm9wQ2xhc3M6ICdjZGstb3ZlcmxheS1kYXJrLWJhY2tkcm9wJyxcclxuICAgIHBhbmVsQ2xhc3M6ICd0bS1maWxlLXByZXZpZXctZGlhbG9nLXBhbmVsJyxcclxuICAgIG1heFdpZHRoOiAnMTAwJScsXHJcbiAgICBjbGlja091dHNpZGVUb0Nsb3NlOiB0cnVlLFxyXG4gICAgc2hvd0Nsb3NlQnV0dG9uOiB0cnVlLFxyXG4gIH07XHJcblxyXG4gIGNvbXBvbmVudFJlc3VsdERhdGEgPSBuZXcgU3ViamVjdDxUPigpO1xyXG4gIHByaXZhdGUgb3ZlcmxheVJlZiE6IE92ZXJsYXlSZWY7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgb3ZlcmxheTogT3ZlcmxheSkge31cclxuXHJcbiAgcHJpdmF0ZSBnZXRPdmVybGF5Q29uZmlnKGNvbmZpZzogSU1vZGFsQ29uZmlnPFQsIEs+KTogT3ZlcmxheUNvbmZpZyB7XHJcbiAgICBjb25zdCBwb3NpdGlvblN0cmF0ZWd5ID0gdGhpcy5vdmVybGF5XHJcbiAgICAgIC5wb3NpdGlvbigpXHJcbiAgICAgIC5nbG9iYWwoKVxyXG4gICAgICAuY2VudGVySG9yaXpvbnRhbGx5KClcclxuICAgICAgLmNlbnRlclZlcnRpY2FsbHkoKTtcclxuXHJcbiAgICBjb25zdCBvdmVybGF5Q29uZmlnID0gbmV3IE92ZXJsYXlDb25maWcoe1xyXG4gICAgICBzY3JvbGxTdHJhdGVneTogdGhpcy5vdmVybGF5LnNjcm9sbFN0cmF0ZWdpZXMuYmxvY2soKSxcclxuICAgICAgLi4uY29uZmlnLFxyXG4gICAgICBwb3NpdGlvblN0cmF0ZWd5LFxyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIG92ZXJsYXlDb25maWc7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGNyZWF0ZU92ZXJsYXkoY29uZmlnOiBJTW9kYWxDb25maWc8VCwgSz4pIHtcclxuICAgIGNvbnN0IG92ZXJsYXlDb25maWcgPSB0aGlzLmdldE92ZXJsYXlDb25maWcoY29uZmlnKTtcclxuICAgIHJldHVybiB0aGlzLm92ZXJsYXkuY3JlYXRlKG92ZXJsYXlDb25maWcpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBjcmVhdGVJbmplY3RvcihcclxuICAgIGNvbmZpZzogSU1vZGFsQ29uZmlnPFQsIEs+LFxyXG4gICAgZGlhbG9nUmVmOiBNb2RhbE92ZXJsYXlSZWY8VD5cclxuICApOiBJbmplY3RvciB7XHJcbiAgICByZXR1cm4gSW5qZWN0b3IuY3JlYXRlKHtcclxuICAgICAgcHJvdmlkZXJzOiBbXHJcbiAgICAgICAgeyBwcm92aWRlOiBNb2RhbE92ZXJsYXlSZWYsIHVzZVZhbHVlOiBkaWFsb2dSZWYgfSxcclxuICAgICAgICB7IHByb3ZpZGU6IE9WRVJMQVlfREFUQSwgdXNlVmFsdWU6IGNvbmZpZyB9LFxyXG4gICAgICBdLFxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBvcGVuKG1vZGFsQ29uZmlnOiBJTW9kYWxDb25maWc8VCwgSz4pOiBNb2RhbE92ZXJsYXlSZWY8VD4ge1xyXG4gICAgY29uc3QgZGlhbG9nQ29uZmlnID0geyAuLi50aGlzLk9WRVJMQVlfQ09ORklHLCAuLi5tb2RhbENvbmZpZyB9O1xyXG4gICAgdGhpcy5vdmVybGF5UmVmID0gdGhpcy5jcmVhdGVPdmVybGF5KGRpYWxvZ0NvbmZpZyk7XHJcbiAgICBjb25zdCBkaWFsb2dSZWYgPSBuZXcgTW9kYWxPdmVybGF5UmVmPFQ+KHRoaXMub3ZlcmxheVJlZik7XHJcbiAgICBjb25zdCBpbmplY3RvciA9IHRoaXMuY3JlYXRlSW5qZWN0b3IoZGlhbG9nQ29uZmlnLCBkaWFsb2dSZWYpO1xyXG4gICAgY29uc3QgcG9ydGFsID0gbmV3IENvbXBvbmVudFBvcnRhbDxNb2RhbENvbXBvbmVudDxULCBLPj4oXHJcbiAgICAgIE1vZGFsQ29tcG9uZW50LFxyXG4gICAgICBudWxsLFxyXG4gICAgICBpbmplY3RvclxyXG4gICAgKTtcclxuICAgIGNvbnN0IGNvbnRhaW5lclJlZjogQ29tcG9uZW50UmVmPE1vZGFsQ29tcG9uZW50PFQsIEs+PiA9XHJcbiAgICAgIHRoaXMub3ZlcmxheVJlZi5hdHRhY2g8TW9kYWxDb21wb25lbnQ8VCwgSz4+KHBvcnRhbCk7XHJcbiAgICB0aGlzLmxpc3RlbkJhY2tkcm9wQ2xpY2soZGlhbG9nQ29uZmlnKTtcclxuICAgIGNvbnRhaW5lclJlZi5pbnN0YW5jZTtcclxuICAgIHJldHVybiBkaWFsb2dSZWY7XHJcbiAgfVxyXG5cclxuICBsaXN0ZW5CYWNrZHJvcENsaWNrKG1vZGFsQ29uZmlnOiBJTW9kYWxDb25maWc8VCwgSz4pIHtcclxuICAgIGlmIChtb2RhbENvbmZpZz8uY2xpY2tPdXRzaWRlVG9DbG9zZSkge1xyXG4gICAgICB0aGlzLm92ZXJsYXlSZWY/LmJhY2tkcm9wQ2xpY2soKS5zdWJzY3JpYmUoKCkgPT4ge1xyXG4gICAgICAgIHRoaXMub3ZlcmxheVJlZj8uZGlzcG9zZSgpO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdldENvbXBvbmVudFJlc3VsdERhdGEoZGF0YTogVCkge1xyXG4gICAgdGhpcy5jb21wb25lbnRSZXN1bHREYXRhLm5leHQoZGF0YSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==