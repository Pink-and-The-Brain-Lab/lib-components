import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { convertoToBlobURL } from '../utils/convert-file';
import * as i0 from "@angular/core";
export class ChoseImageComponent {
    constructor() {
        this.buttonText = 'Choose Image';
        this.aditionalText = 'or choose a color below';
        this.imageFile = new EventEmitter();
        this.inputFile = {};
    }
    selectFile() {
        this.inputFile.nativeElement.click();
    }
    getFile(event) {
        const target = event.target;
        if (target.files?.length) {
            const image = target.files[0];
            convertoToBlobURL(image).then(response => this.imageFile.emit(response));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hvc2UtaW1hZ2UuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY29tcG9uZW50cy9zcmMvbGliL2Nob3NlLWltYWdlL2Nob3NlLWltYWdlLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NvbXBvbmVudHMvc3JjL2xpYi9jaG9zZS1pbWFnZS9jaG9zZS1pbWFnZS5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFjLFlBQVksRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM5RixPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQzs7QUFPMUQsTUFBTSxPQUFPLG1CQUFtQjtJQUxoQztRQU9XLGVBQVUsR0FBRyxjQUFjLENBQUM7UUFDNUIsa0JBQWEsR0FBRyx5QkFBeUIsQ0FBQztRQUN6QyxjQUFTLEdBQUcsSUFBSSxZQUFZLEVBQVUsQ0FBQztRQUN6QixjQUFTLEdBQWUsRUFBZ0IsQ0FBQztLQWdCbEU7SUFkQyxVQUFVO1FBQ1IsSUFBSSxDQUFDLFNBQVMsQ0FBQyxhQUFhLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDdkMsQ0FBQztJQUVELE9BQU8sQ0FBQyxLQUFZO1FBQ2xCLE1BQU0sTUFBTSxHQUFHLEtBQUssQ0FBQyxNQUEwQixDQUFDO1FBQ2hELElBQUksTUFBTSxDQUFDLEtBQUssRUFBRSxNQUFNLEVBQUU7WUFDeEIsTUFBTSxLQUFLLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUM5QixpQkFBaUIsQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQzNCLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsUUFBa0IsQ0FBQyxDQUNwRCxDQUFDO1NBQ0g7SUFDSCxDQUFDOztnSEFuQlUsbUJBQW1CO29HQUFuQixtQkFBbUIsMFFDUmhDLGtVQUlNOzJGRElPLG1CQUFtQjtrQkFML0IsU0FBUzsrQkFDRSxpQkFBaUI7OEJBTWxCLFVBQVU7c0JBQWxCLEtBQUs7Z0JBQ0csYUFBYTtzQkFBckIsS0FBSztnQkFDSSxTQUFTO3NCQUFsQixNQUFNO2dCQUNpQixTQUFTO3NCQUFoQyxTQUFTO3VCQUFDLFdBQVciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEVsZW1lbnRSZWYsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE91dHB1dCwgVmlld0NoaWxkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IGNvbnZlcnRvVG9CbG9iVVJMIH0gZnJvbSAnLi4vdXRpbHMvY29udmVydC1maWxlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnY2RrLWNob3NlLWltYWdlJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vY2hvc2UtaW1hZ2UuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL2Nob3NlLWltYWdlLmNvbXBvbmVudC5zY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIENob3NlSW1hZ2VDb21wb25lbnQge1xyXG5cclxuICBASW5wdXQoKSBidXR0b25UZXh0ID0gJ0Nob29zZSBJbWFnZSc7XHJcbiAgQElucHV0KCkgYWRpdGlvbmFsVGV4dCA9ICdvciBjaG9vc2UgYSBjb2xvciBiZWxvdyc7XHJcbiAgQE91dHB1dCgpIGltYWdlRmlsZSA9IG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nPigpO1xyXG4gIEBWaWV3Q2hpbGQoJ2lucHV0RmlsZScpIGlucHV0RmlsZTogRWxlbWVudFJlZiA9IHt9IGFzIEVsZW1lbnRSZWY7XHJcblxyXG4gIHNlbGVjdEZpbGUoKSB7XHJcbiAgICB0aGlzLmlucHV0RmlsZS5uYXRpdmVFbGVtZW50LmNsaWNrKCk7XHJcbiAgfVxyXG5cclxuICBnZXRGaWxlKGV2ZW50OiBFdmVudCkge1xyXG4gICAgY29uc3QgdGFyZ2V0ID0gZXZlbnQudGFyZ2V0IGFzIEhUTUxJbnB1dEVsZW1lbnQ7XHJcbiAgICBpZiAodGFyZ2V0LmZpbGVzPy5sZW5ndGgpIHtcclxuICAgICAgY29uc3QgaW1hZ2UgPSB0YXJnZXQuZmlsZXNbMF07XHJcbiAgICAgIGNvbnZlcnRvVG9CbG9iVVJMKGltYWdlKS50aGVuKFxyXG4gICAgICAgIHJlc3BvbnNlID0+IHRoaXMuaW1hZ2VGaWxlLmVtaXQocmVzcG9uc2UgYXMgc3RyaW5nKVxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbn1cclxuIiwiPGRpdiBjbGFzcz1cImQtZmxleCBtdC00IGFsaWduLWl0ZW1zLWNlbnRlclwiPlxyXG4gICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gYnRuLW91dGxpbmUtc2Vjb25kYXJ5XCIgKGNsaWNrKT1cInNlbGVjdEZpbGUoKVwiPnt7IGJ1dHRvblRleHQgfX08L2J1dHRvbj5cclxuICAgIDxwIGNsYXNzPVwibXMtM1wiPnt7IGFkaXRpb25hbFRleHQgfX08L3A+XHJcbiAgICA8aW5wdXQgdHlwZT1cImZpbGVcIiBhY2NlcHQ9XCJpbWFnZS8qXCIgaGlkZGVuICNpbnB1dEZpbGUgKGNoYW5nZSk9XCJnZXRGaWxlKCRldmVudClcIiAvPlxyXG48L2Rpdj4iXX0=