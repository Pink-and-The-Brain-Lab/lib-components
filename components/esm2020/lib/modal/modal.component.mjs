import { Component, Inject, Injector, ViewChild, ViewContainerRef } from '@angular/core';
import { OVERLAY_DATA } from './interfaces/overlay-data.const';
import { Subject } from 'rxjs';
import { IMAGE_DATA } from './interfaces/image-data.const';
import { MODAL_SERVICE_DATA } from './interfaces/modal-service-data.const';
import * as i0 from "@angular/core";
import * as i1 from "./modal-overlay-ref";
import * as i2 from "./services/modal.component.service";
import * as i3 from "@angular/common";
export class ModalComponent {
    constructor(dialogRef, modalData, cdref, modalService) {
        this.dialogRef = dialogRef;
        this.modalData = modalData;
        this.cdref = cdref;
        this.modalService = modalService;
        this.destroy$ = new Subject();
        this.resultData = {};
        this.modalService.componentResultData.subscribe((data) => this.resultData = data);
    }
    ngAfterViewInit() {
        const injector = this.createInjector();
        this.modalContainer.createComponent(this.modalData.component, {
            injector
        });
    }
    ngAfterViewChecked() {
        this.cdref.detectChanges();
    }
    ngOnDestroy() {
        this.destroy$.next(true);
        this.destroy$.unsubscribe();
    }
    accept() {
        this.dialogRef.accept(this.resultData);
    }
    decline() {
        this.dialogRef.decline();
    }
    close() {
        this.dialogRef.close();
    }
    createInjector() {
        return Injector.create({
            providers: [
                { provide: IMAGE_DATA, useValue: this.modalData.data },
                { provide: MODAL_SERVICE_DATA, useValue: this.modalService },
            ],
        });
    }
}
ModalComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: ModalComponent, deps: [{ token: i1.ModalOverlayRef }, { token: OVERLAY_DATA }, { token: i0.ChangeDetectorRef }, { token: i2.ModalService }], target: i0.ɵɵFactoryTarget.Component });
ModalComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.1.2", type: ModalComponent, selector: "cdk-modal", viewQueries: [{ propertyName: "modalContainer", first: true, predicate: ["modalContainer"], descendants: true, read: ViewContainerRef }], ngImport: i0, template: "<div class=\"content p-4\">\r\n    <header class=\"d-flex justify-content-between align-items-center mb-4\">\r\n        <h2>{{ modalData.title }}</h2>\r\n        <button type=\"button\" class=\"close\" *ngIf=\"modalData.showCloseButton\" (click)=\"close()\"><i class=\"bi bi-x-lg\"></i></button>\r\n    </header>\r\n\r\n    <ng-template #modalContainer></ng-template>\r\n    \r\n    <footer class=\"d-flex justify-content-end align-items-center mt-4\">\r\n        <button type=\"button\" class=\"btn btn-outline-secondary me-2\" *ngIf=\"modalData.declineButtonLabel?.length\" (click)=\"decline()\">{{ modalData.declineButtonLabel }}</button>\r\n        <button type=\"button\" class=\"btn btn-primary\" *ngIf=\"modalData.acceptButtonLabel?.length\" (click)=\"accept()\">{{ modalData.acceptButtonLabel }}</button>\r\n    </footer>\r\n</div>", styles: [".content{background-color:#343945;width:350px;border-radius:4px;box-shadow:0 4px 12px #0000004d}.content h2{font-weight:700;font-size:1em;line-height:1.25em;margin:0;color:#dfdfdf}.content .close{border:0;color:#dfdfdf;background-color:transparent}\n"], dependencies: [{ kind: "directive", type: i3.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: ModalComponent, decorators: [{
            type: Component,
            args: [{ selector: 'cdk-modal', template: "<div class=\"content p-4\">\r\n    <header class=\"d-flex justify-content-between align-items-center mb-4\">\r\n        <h2>{{ modalData.title }}</h2>\r\n        <button type=\"button\" class=\"close\" *ngIf=\"modalData.showCloseButton\" (click)=\"close()\"><i class=\"bi bi-x-lg\"></i></button>\r\n    </header>\r\n\r\n    <ng-template #modalContainer></ng-template>\r\n    \r\n    <footer class=\"d-flex justify-content-end align-items-center mt-4\">\r\n        <button type=\"button\" class=\"btn btn-outline-secondary me-2\" *ngIf=\"modalData.declineButtonLabel?.length\" (click)=\"decline()\">{{ modalData.declineButtonLabel }}</button>\r\n        <button type=\"button\" class=\"btn btn-primary\" *ngIf=\"modalData.acceptButtonLabel?.length\" (click)=\"accept()\">{{ modalData.acceptButtonLabel }}</button>\r\n    </footer>\r\n</div>", styles: [".content{background-color:#343945;width:350px;border-radius:4px;box-shadow:0 4px 12px #0000004d}.content h2{font-weight:700;font-size:1em;line-height:1.25em;margin:0;color:#dfdfdf}.content .close{border:0;color:#dfdfdf;background-color:transparent}\n"] }]
        }], ctorParameters: function () { return [{ type: i1.ModalOverlayRef }, { type: undefined, decorators: [{
                    type: Inject,
                    args: [OVERLAY_DATA]
                }] }, { type: i0.ChangeDetectorRef }, { type: i2.ModalService }]; }, propDecorators: { modalContainer: [{
                type: ViewChild,
                args: ['modalContainer', { read: ViewContainerRef, static: false }]
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kYWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY29tcG9uZW50cy9zcmMvbGliL21vZGFsL21vZGFsLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NvbXBvbmVudHMvc3JjL2xpYi9tb2RhbC9tb2RhbC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQXNELFNBQVMsRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFtQixTQUFTLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFOUosT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBRy9ELE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDL0IsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQzNELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHVDQUF1QyxDQUFDOzs7OztBQU8zRSxNQUFNLE9BQU8sY0FBYztJQU96QixZQUNTLFNBQTZCLEVBQ1AsU0FBNkIsRUFDbEQsS0FBd0IsRUFDeEIsWUFBZ0M7UUFIakMsY0FBUyxHQUFULFNBQVMsQ0FBb0I7UUFDUCxjQUFTLEdBQVQsU0FBUyxDQUFvQjtRQUNsRCxVQUFLLEdBQUwsS0FBSyxDQUFtQjtRQUN4QixpQkFBWSxHQUFaLFlBQVksQ0FBb0I7UUFUbEMsYUFBUSxHQUFHLElBQUksT0FBTyxFQUFXLENBQUM7UUFHbEMsZUFBVSxHQUFNLEVBQU8sQ0FBQztRQVE5QixJQUFJLENBQUMsWUFBWSxDQUFDLG1CQUFtQixDQUFDLFNBQVMsQ0FBQyxDQUFDLElBQU8sRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsQ0FBQztJQUN2RixDQUFDO0lBRUQsZUFBZTtRQUNiLE1BQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQTtRQUN0QyxJQUFJLENBQUMsY0FBYyxDQUFDLGVBQWUsQ0FBSSxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQW9CLEVBQUU7WUFDMUUsUUFBUTtTQUNULENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCxrQkFBa0I7UUFDaEIsSUFBSSxDQUFDLEtBQUssQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUM3QixDQUFDO0lBRUQsV0FBVztRQUNULElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3pCLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDOUIsQ0FBQztJQUVELE1BQU07UUFDSixJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDekMsQ0FBQztJQUVELE9BQU87UUFDTCxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQzNCLENBQUM7SUFFRCxLQUFLO1FBQ0gsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUN6QixDQUFDO0lBRU8sY0FBYztRQUNwQixPQUFPLFFBQVEsQ0FBQyxNQUFNLENBQUM7WUFDckIsU0FBUyxFQUFFO2dCQUNULEVBQUUsT0FBTyxFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUU7Z0JBQ3RELEVBQUUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLFFBQVEsRUFBRSxJQUFJLENBQUMsWUFBWSxFQUFFO2FBQzdEO1NBQ0YsQ0FBQyxDQUFDO0lBQ0wsQ0FBQzs7MkdBbkRVLGNBQWMsaURBU2YsWUFBWTsrRkFUWCxjQUFjLDhJQUdZLGdCQUFnQiw2QkNqQnZELHkwQkFZTTsyRkRFTyxjQUFjO2tCQUwxQixTQUFTOytCQUNFLFdBQVc7OzBCQWFsQixNQUFNOzJCQUFDLFlBQVk7dUdBTGQsY0FBYztzQkFEckIsU0FBUzt1QkFBQyxnQkFBZ0IsRUFBRSxFQUFFLElBQUksRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWZ0ZXJWaWV3Q2hlY2tlZCwgQWZ0ZXJWaWV3SW5pdCwgQ2hhbmdlRGV0ZWN0b3JSZWYsIENvbXBvbmVudCwgSW5qZWN0LCBJbmplY3RvciwgT25EZXN0cm95LCBUeXBlLCBWaWV3Q2hpbGQsIFZpZXdDb250YWluZXJSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgSU1vZGFsQ29uZmlnIH0gZnJvbSAnLi9pbnRlcmZhY2VzL21vZGFsLWRhdGEuaW50ZXJmYWNlJztcclxuaW1wb3J0IHsgT1ZFUkxBWV9EQVRBIH0gZnJvbSAnLi9pbnRlcmZhY2VzL292ZXJsYXktZGF0YS5jb25zdCc7XHJcbmltcG9ydCB7IE1vZGFsT3ZlcmxheVJlZiB9IGZyb20gJy4vbW9kYWwtb3ZlcmxheS1yZWYnO1xyXG5pbXBvcnQgeyBNb2RhbFNlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2VzL21vZGFsLmNvbXBvbmVudC5zZXJ2aWNlJztcclxuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBJTUFHRV9EQVRBIH0gZnJvbSAnLi9pbnRlcmZhY2VzL2ltYWdlLWRhdGEuY29uc3QnO1xyXG5pbXBvcnQgeyBNT0RBTF9TRVJWSUNFX0RBVEEgfSBmcm9tICcuL2ludGVyZmFjZXMvbW9kYWwtc2VydmljZS1kYXRhLmNvbnN0JztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnY2RrLW1vZGFsJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vbW9kYWwuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL21vZGFsLmNvbXBvbmVudC5zY3NzJ10sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBNb2RhbENvbXBvbmVudDxULCBLPiBpbXBsZW1lbnRzIEFmdGVyVmlld0NoZWNrZWQsIEFmdGVyVmlld0luaXQsIE9uRGVzdHJveSB7XHJcblxyXG4gIHByaXZhdGUgZGVzdHJveSQgPSBuZXcgU3ViamVjdDxib29sZWFuPigpO1xyXG4gIEBWaWV3Q2hpbGQoJ21vZGFsQ29udGFpbmVyJywgeyByZWFkOiBWaWV3Q29udGFpbmVyUmVmLCBzdGF0aWM6IGZhbHNlIH0pXHJcbiAgcHJpdmF0ZSBtb2RhbENvbnRhaW5lciE6IFZpZXdDb250YWluZXJSZWY7XHJcbiAgcHJpdmF0ZSByZXN1bHREYXRhOiBUID0ge30gYXMgVDtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwdWJsaWMgZGlhbG9nUmVmOiBNb2RhbE92ZXJsYXlSZWY8VD4sXHJcbiAgICBASW5qZWN0KE9WRVJMQVlfREFUQSkgcHVibGljIG1vZGFsRGF0YTogSU1vZGFsQ29uZmlnPFQsIEs+LFxyXG4gICAgcHJpdmF0ZSBjZHJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgICBwcml2YXRlIG1vZGFsU2VydmljZTogTW9kYWxTZXJ2aWNlPFQsIEs+XHJcbiAgKSB7XHJcbiAgICB0aGlzLm1vZGFsU2VydmljZS5jb21wb25lbnRSZXN1bHREYXRhLnN1YnNjcmliZSgoZGF0YTogVCkgPT4gdGhpcy5yZXN1bHREYXRhID0gZGF0YSk7XHJcbiAgfVxyXG5cclxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XHJcbiAgICBjb25zdCBpbmplY3RvciA9IHRoaXMuY3JlYXRlSW5qZWN0b3IoKVxyXG4gICAgdGhpcy5tb2RhbENvbnRhaW5lci5jcmVhdGVDb21wb25lbnQ8Sz4odGhpcy5tb2RhbERhdGEuY29tcG9uZW50IGFzIFR5cGU8Sz4sIHtcclxuICAgICAgaW5qZWN0b3JcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgbmdBZnRlclZpZXdDaGVja2VkKCkge1xyXG4gICAgdGhpcy5jZHJlZi5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcclxuICAgIHRoaXMuZGVzdHJveSQubmV4dCh0cnVlKTtcclxuICAgIHRoaXMuZGVzdHJveSQudW5zdWJzY3JpYmUoKTtcclxuICB9XHJcblxyXG4gIGFjY2VwdCgpIHtcclxuICAgIHRoaXMuZGlhbG9nUmVmLmFjY2VwdCh0aGlzLnJlc3VsdERhdGEpO1xyXG4gIH1cclxuXHJcbiAgZGVjbGluZSgpIHtcclxuICAgIHRoaXMuZGlhbG9nUmVmLmRlY2xpbmUoKTtcclxuICB9XHJcblxyXG4gIGNsb3NlKCkge1xyXG4gICAgdGhpcy5kaWFsb2dSZWYuY2xvc2UoKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgY3JlYXRlSW5qZWN0b3IoKTogSW5qZWN0b3Ige1xyXG4gICAgcmV0dXJuIEluamVjdG9yLmNyZWF0ZSh7XHJcbiAgICAgIHByb3ZpZGVyczogW1xyXG4gICAgICAgIHsgcHJvdmlkZTogSU1BR0VfREFUQSwgdXNlVmFsdWU6IHRoaXMubW9kYWxEYXRhLmRhdGEgfSxcclxuICAgICAgICB7IHByb3ZpZGU6IE1PREFMX1NFUlZJQ0VfREFUQSwgdXNlVmFsdWU6IHRoaXMubW9kYWxTZXJ2aWNlIH0sXHJcbiAgICAgIF0sXHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuIiwiPGRpdiBjbGFzcz1cImNvbnRlbnQgcC00XCI+XHJcbiAgICA8aGVhZGVyIGNsYXNzPVwiZC1mbGV4IGp1c3RpZnktY29udGVudC1iZXR3ZWVuIGFsaWduLWl0ZW1zLWNlbnRlciBtYi00XCI+XHJcbiAgICAgICAgPGgyPnt7IG1vZGFsRGF0YS50aXRsZSB9fTwvaDI+XHJcbiAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJjbG9zZVwiICpuZ0lmPVwibW9kYWxEYXRhLnNob3dDbG9zZUJ1dHRvblwiIChjbGljayk9XCJjbG9zZSgpXCI+PGkgY2xhc3M9XCJiaSBiaS14LWxnXCI+PC9pPjwvYnV0dG9uPlxyXG4gICAgPC9oZWFkZXI+XHJcblxyXG4gICAgPG5nLXRlbXBsYXRlICNtb2RhbENvbnRhaW5lcj48L25nLXRlbXBsYXRlPlxyXG4gICAgXHJcbiAgICA8Zm9vdGVyIGNsYXNzPVwiZC1mbGV4IGp1c3RpZnktY29udGVudC1lbmQgYWxpZ24taXRlbXMtY2VudGVyIG10LTRcIj5cclxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBidG4tb3V0bGluZS1zZWNvbmRhcnkgbWUtMlwiICpuZ0lmPVwibW9kYWxEYXRhLmRlY2xpbmVCdXR0b25MYWJlbD8ubGVuZ3RoXCIgKGNsaWNrKT1cImRlY2xpbmUoKVwiPnt7IG1vZGFsRGF0YS5kZWNsaW5lQnV0dG9uTGFiZWwgfX08L2J1dHRvbj5cclxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBidG4tcHJpbWFyeVwiICpuZ0lmPVwibW9kYWxEYXRhLmFjY2VwdEJ1dHRvbkxhYmVsPy5sZW5ndGhcIiAoY2xpY2spPVwiYWNjZXB0KClcIj57eyBtb2RhbERhdGEuYWNjZXB0QnV0dG9uTGFiZWwgfX08L2J1dHRvbj5cclxuICAgIDwvZm9vdGVyPlxyXG48L2Rpdj4iXX0=