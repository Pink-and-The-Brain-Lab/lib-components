import { Component, EventEmitter, Input, Output, ViewChild, inject } from '@angular/core';
import { FileConversor } from '../utils/convert-file';
import * as i0 from "@angular/core";
export class ChoseImageComponent {
    constructor() {
        this.buttonText = 'Choose Image';
        this.aditionalText = 'or choose a color below';
        this.imageFile = new EventEmitter();
        this.inputFile = {};
        this.fileConversor = inject(FileConversor);
    }
    selectFile() {
        this.inputFile.nativeElement.click();
    }
    getFile(event) {
        const target = event.target;
        if (target.files?.length) {
            const image = target.files[0];
            this.fileConversor.convertoToBlobURL(image).then(response => this.imageFile.emit({
                file: image,
                blobUrl: response
            }));
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.10", ngImport: i0, type: ChoseImageComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.10", type: ChoseImageComponent, selector: "cdk-chose-image", inputs: { buttonText: "buttonText", aditionalText: "aditionalText" }, outputs: { imageFile: "imageFile" }, viewQueries: [{ propertyName: "inputFile", first: true, predicate: ["inputFile"], descendants: true }], ngImport: i0, template: "<div class=\"d-flex mt-4 align-items-center\">\r\n    <button type=\"button\" class=\"btn btn-outline-secondary\" (click)=\"selectFile()\">{{ buttonText }}</button>\r\n    <p class=\"ms-3\">{{ aditionalText }}</p>\r\n    <input type=\"file\" accept=\"image/*\" hidden #inputFile (change)=\"getFile($event)\" />\r\n</div>", styles: ["p{font-weight:600;font-size:.875em;color:var(--emphasis-medium);margin:0}\n"] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.10", ngImport: i0, type: ChoseImageComponent, decorators: [{
            type: Component,
            args: [{ selector: 'cdk-chose-image', template: "<div class=\"d-flex mt-4 align-items-center\">\r\n    <button type=\"button\" class=\"btn btn-outline-secondary\" (click)=\"selectFile()\">{{ buttonText }}</button>\r\n    <p class=\"ms-3\">{{ aditionalText }}</p>\r\n    <input type=\"file\" accept=\"image/*\" hidden #inputFile (change)=\"getFile($event)\" />\r\n</div>", styles: ["p{font-weight:600;font-size:.875em;color:var(--emphasis-medium);margin:0}\n"] }]
        }], propDecorators: { buttonText: [{
                type: Input
            }], aditionalText: [{
                type: Input
            }], imageFile: [{
                type: Output
            }], inputFile: [{
                type: ViewChild,
                args: ['inputFile']
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hvc2UtaW1hZ2UuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY29tcG9uZW50cy9zcmMvbGliL2Nob3NlLWltYWdlL2Nob3NlLWltYWdlLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NvbXBvbmVudHMvc3JjL2xpYi9jaG9zZS1pbWFnZS9jaG9zZS1pbWFnZS5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFjLFlBQVksRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDdEcsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHVCQUF1QixDQUFDOztBQVF0RCxNQUFNLE9BQU8sbUJBQW1CO0lBTGhDO1FBT1csZUFBVSxHQUFHLGNBQWMsQ0FBQztRQUM1QixrQkFBYSxHQUFHLHlCQUF5QixDQUFDO1FBQ3pDLGNBQVMsR0FBRyxJQUFJLFlBQVksRUFBZ0IsQ0FBQztRQUMvQixjQUFTLEdBQWUsRUFBZ0IsQ0FBQztRQUVoRCxrQkFBYSxHQUFHLE1BQU0sQ0FBQyxhQUFhLENBQUMsQ0FBQztLQW1CeEQ7SUFqQkMsVUFBVTtRQUNSLElBQUksQ0FBQyxTQUFTLENBQUMsYUFBYSxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ3ZDLENBQUM7SUFFRCxPQUFPLENBQUMsS0FBWTtRQUNsQixNQUFNLE1BQU0sR0FBRyxLQUFLLENBQUMsTUFBMEIsQ0FBQztRQUNoRCxJQUFJLE1BQU0sQ0FBQyxLQUFLLEVBQUUsTUFBTSxFQUFFLENBQUM7WUFDekIsTUFBTSxLQUFLLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUM5QixJQUFJLENBQUMsYUFBYSxDQUFDLGlCQUFpQixDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksQ0FDOUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQztnQkFDOUIsSUFBSSxFQUFFLEtBQUs7Z0JBQ1gsT0FBTyxFQUFFLFFBQWtCO2FBQzVCLENBQUMsQ0FDSCxDQUFDO1FBQ0osQ0FBQztJQUNILENBQUM7K0dBeEJVLG1CQUFtQjttR0FBbkIsbUJBQW1CLDBRQ1RoQyxrVUFJTTs7NEZES08sbUJBQW1CO2tCQUwvQixTQUFTOytCQUNFLGlCQUFpQjs4QkFNbEIsVUFBVTtzQkFBbEIsS0FBSztnQkFDRyxhQUFhO3NCQUFyQixLQUFLO2dCQUNJLFNBQVM7c0JBQWxCLE1BQU07Z0JBQ2lCLFNBQVM7c0JBQWhDLFNBQVM7dUJBQUMsV0FBVyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRWxlbWVudFJlZiwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT3V0cHV0LCBWaWV3Q2hpbGQsIGluamVjdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBGaWxlQ29udmVyc29yIH0gZnJvbSAnLi4vdXRpbHMvY29udmVydC1maWxlJztcclxuaW1wb3J0IHsgSUltYWdlVXBsb2FkIH0gZnJvbSAnLi9tb2RlbHMvaW1hZ2UtdXBsb2FkLmludGVyZmFjZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2Nkay1jaG9zZS1pbWFnZScsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2Nob3NlLWltYWdlLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9jaG9zZS1pbWFnZS5jb21wb25lbnQuc2NzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDaG9zZUltYWdlQ29tcG9uZW50IHtcclxuXHJcbiAgQElucHV0KCkgYnV0dG9uVGV4dCA9ICdDaG9vc2UgSW1hZ2UnO1xyXG4gIEBJbnB1dCgpIGFkaXRpb25hbFRleHQgPSAnb3IgY2hvb3NlIGEgY29sb3IgYmVsb3cnO1xyXG4gIEBPdXRwdXQoKSBpbWFnZUZpbGUgPSBuZXcgRXZlbnRFbWl0dGVyPElJbWFnZVVwbG9hZD4oKTtcclxuICBAVmlld0NoaWxkKCdpbnB1dEZpbGUnKSBpbnB1dEZpbGU6IEVsZW1lbnRSZWYgPSB7fSBhcyBFbGVtZW50UmVmO1xyXG5cclxuICBwcml2YXRlIHJlYWRvbmx5IGZpbGVDb252ZXJzb3IgPSBpbmplY3QoRmlsZUNvbnZlcnNvcik7XHJcblxyXG4gIHNlbGVjdEZpbGUoKSB7XHJcbiAgICB0aGlzLmlucHV0RmlsZS5uYXRpdmVFbGVtZW50LmNsaWNrKCk7XHJcbiAgfVxyXG5cclxuICBnZXRGaWxlKGV2ZW50OiBFdmVudCkge1xyXG4gICAgY29uc3QgdGFyZ2V0ID0gZXZlbnQudGFyZ2V0IGFzIEhUTUxJbnB1dEVsZW1lbnQ7XHJcbiAgICBpZiAodGFyZ2V0LmZpbGVzPy5sZW5ndGgpIHtcclxuICAgICAgY29uc3QgaW1hZ2UgPSB0YXJnZXQuZmlsZXNbMF07XHJcbiAgICAgIHRoaXMuZmlsZUNvbnZlcnNvci5jb252ZXJ0b1RvQmxvYlVSTChpbWFnZSkudGhlbihcclxuICAgICAgICByZXNwb25zZSA9PiB0aGlzLmltYWdlRmlsZS5lbWl0KHtcclxuICAgICAgICAgIGZpbGU6IGltYWdlLFxyXG4gICAgICAgICAgYmxvYlVybDogcmVzcG9uc2UgYXMgc3RyaW5nXHJcbiAgICAgICAgfSlcclxuICAgICAgKTtcclxuICAgIH1cclxuICB9XHJcblxyXG59XHJcbiIsIjxkaXYgY2xhc3M9XCJkLWZsZXggbXQtNCBhbGlnbi1pdGVtcy1jZW50ZXJcIj5cclxuICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIGJ0bi1vdXRsaW5lLXNlY29uZGFyeVwiIChjbGljayk9XCJzZWxlY3RGaWxlKClcIj57eyBidXR0b25UZXh0IH19PC9idXR0b24+XHJcbiAgICA8cCBjbGFzcz1cIm1zLTNcIj57eyBhZGl0aW9uYWxUZXh0IH19PC9wPlxyXG4gICAgPGlucHV0IHR5cGU9XCJmaWxlXCIgYWNjZXB0PVwiaW1hZ2UvKlwiIGhpZGRlbiAjaW5wdXRGaWxlIChjaGFuZ2UpPVwiZ2V0RmlsZSgkZXZlbnQpXCIgLz5cclxuPC9kaXY+Il19