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
            this.fileConversor.convertoToBlobURL(image).then(response => this.imageFile.emit(response));
        }
    }
}
ChoseImageComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: ChoseImageComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
ChoseImageComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.1.2", type: ChoseImageComponent, selector: "cdk-chose-image", inputs: { buttonText: "buttonText", aditionalText: "aditionalText" }, outputs: { imageFile: "imageFile" }, viewQueries: [{ propertyName: "inputFile", first: true, predicate: ["inputFile"], descendants: true }], ngImport: i0, template: "<div class=\"d-flex mt-4 align-items-center\">\r\n    <button type=\"button\" class=\"btn btn-outline-secondary\" (click)=\"selectFile()\">{{ buttonText }}</button>\r\n    <p class=\"ms-3\">{{ aditionalText }}</p>\r\n    <input type=\"file\" accept=\"image/*\" hidden #inputFile (change)=\"getFile($event)\" />\r\n</div>", styles: ["p{font-weight:600;font-size:.875em;color:var(--emphasis-medium);margin:0}\n"] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: ChoseImageComponent, decorators: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hvc2UtaW1hZ2UuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY29tcG9uZW50cy9zcmMvbGliL2Nob3NlLWltYWdlL2Nob3NlLWltYWdlLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NvbXBvbmVudHMvc3JjL2xpYi9jaG9zZS1pbWFnZS9jaG9zZS1pbWFnZS5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFjLFlBQVksRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDdEcsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHVCQUF1QixDQUFDOztBQU90RCxNQUFNLE9BQU8sbUJBQW1CO0lBTGhDO1FBT1csZUFBVSxHQUFHLGNBQWMsQ0FBQztRQUM1QixrQkFBYSxHQUFHLHlCQUF5QixDQUFDO1FBQ3pDLGNBQVMsR0FBRyxJQUFJLFlBQVksRUFBVSxDQUFDO1FBQ3pCLGNBQVMsR0FBZSxFQUFnQixDQUFDO1FBRWhELGtCQUFhLEdBQUcsTUFBTSxDQUFDLGFBQWEsQ0FBQyxDQUFDO0tBZ0J4RDtJQWRDLFVBQVU7UUFDUixJQUFJLENBQUMsU0FBUyxDQUFDLGFBQWEsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUN2QyxDQUFDO0lBRUQsT0FBTyxDQUFDLEtBQVk7UUFDbEIsTUFBTSxNQUFNLEdBQUcsS0FBSyxDQUFDLE1BQTBCLENBQUM7UUFDaEQsSUFBSSxNQUFNLENBQUMsS0FBSyxFQUFFLE1BQU0sRUFBRTtZQUN4QixNQUFNLEtBQUssR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzlCLElBQUksQ0FBQyxhQUFhLENBQUMsaUJBQWlCLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxDQUM5QyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFFBQWtCLENBQUMsQ0FDcEQsQ0FBQztTQUNIO0lBQ0gsQ0FBQzs7Z0hBckJVLG1CQUFtQjtvR0FBbkIsbUJBQW1CLDBRQ1JoQyxrVUFJTTsyRkRJTyxtQkFBbUI7a0JBTC9CLFNBQVM7K0JBQ0UsaUJBQWlCOzhCQU1sQixVQUFVO3NCQUFsQixLQUFLO2dCQUNHLGFBQWE7c0JBQXJCLEtBQUs7Z0JBQ0ksU0FBUztzQkFBbEIsTUFBTTtnQkFDaUIsU0FBUztzQkFBaEMsU0FBUzt1QkFBQyxXQUFXIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBFdmVudEVtaXR0ZXIsIElucHV0LCBPdXRwdXQsIFZpZXdDaGlsZCwgaW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEZpbGVDb252ZXJzb3IgfSBmcm9tICcuLi91dGlscy9jb252ZXJ0LWZpbGUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdjZGstY2hvc2UtaW1hZ2UnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9jaG9zZS1pbWFnZS5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vY2hvc2UtaW1hZ2UuY29tcG9uZW50LnNjc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ2hvc2VJbWFnZUNvbXBvbmVudCB7XHJcblxyXG4gIEBJbnB1dCgpIGJ1dHRvblRleHQgPSAnQ2hvb3NlIEltYWdlJztcclxuICBASW5wdXQoKSBhZGl0aW9uYWxUZXh0ID0gJ29yIGNob29zZSBhIGNvbG9yIGJlbG93JztcclxuICBAT3V0cHV0KCkgaW1hZ2VGaWxlID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmc+KCk7XHJcbiAgQFZpZXdDaGlsZCgnaW5wdXRGaWxlJykgaW5wdXRGaWxlOiBFbGVtZW50UmVmID0ge30gYXMgRWxlbWVudFJlZjtcclxuXHJcbiAgcHJpdmF0ZSByZWFkb25seSBmaWxlQ29udmVyc29yID0gaW5qZWN0KEZpbGVDb252ZXJzb3IpO1xyXG5cclxuICBzZWxlY3RGaWxlKCkge1xyXG4gICAgdGhpcy5pbnB1dEZpbGUubmF0aXZlRWxlbWVudC5jbGljaygpO1xyXG4gIH1cclxuXHJcbiAgZ2V0RmlsZShldmVudDogRXZlbnQpIHtcclxuICAgIGNvbnN0IHRhcmdldCA9IGV2ZW50LnRhcmdldCBhcyBIVE1MSW5wdXRFbGVtZW50O1xyXG4gICAgaWYgKHRhcmdldC5maWxlcz8ubGVuZ3RoKSB7XHJcbiAgICAgIGNvbnN0IGltYWdlID0gdGFyZ2V0LmZpbGVzWzBdO1xyXG4gICAgICB0aGlzLmZpbGVDb252ZXJzb3IuY29udmVydG9Ub0Jsb2JVUkwoaW1hZ2UpLnRoZW4oXHJcbiAgICAgICAgcmVzcG9uc2UgPT4gdGhpcy5pbWFnZUZpbGUuZW1pdChyZXNwb25zZSBhcyBzdHJpbmcpXHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxufVxyXG4iLCI8ZGl2IGNsYXNzPVwiZC1mbGV4IG10LTQgYWxpZ24taXRlbXMtY2VudGVyXCI+XHJcbiAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBidG4tb3V0bGluZS1zZWNvbmRhcnlcIiAoY2xpY2spPVwic2VsZWN0RmlsZSgpXCI+e3sgYnV0dG9uVGV4dCB9fTwvYnV0dG9uPlxyXG4gICAgPHAgY2xhc3M9XCJtcy0zXCI+e3sgYWRpdGlvbmFsVGV4dCB9fTwvcD5cclxuICAgIDxpbnB1dCB0eXBlPVwiZmlsZVwiIGFjY2VwdD1cImltYWdlLypcIiBoaWRkZW4gI2lucHV0RmlsZSAoY2hhbmdlKT1cImdldEZpbGUoJGV2ZW50KVwiIC8+XHJcbjwvZGl2PiJdfQ==