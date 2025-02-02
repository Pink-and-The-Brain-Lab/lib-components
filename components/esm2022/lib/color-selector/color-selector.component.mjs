import { Component, EventEmitter, Output } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
export class ColorSelectorComponent {
    constructor() {
        this.colorChanged = new EventEmitter();
        this.selectedColor = '#7A87CC';
        this.options1 = [
            '#7A87CC',
            '#9D7CDC',
            '#BA69C9',
            '#F06291',
            '#E9787A',
            '#FF8D5B',
            '#FFA826',
            '#F3D457',
        ];
        this.options2 = [
            '#C7D048',
            '#9CCB63',
            '#72C392',
            '#4FCFD7',
            '#7CDFE6',
            '#5CB1FF',
            '#43C0FF',
            '#8D6E62',
        ];
    }
    ngOnInit() {
        this.selectColor(this.selectedColor);
    }
    selectColor(color) {
        this.selectedColor = color;
        this.colorChanged.emit(color);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.10", ngImport: i0, type: ColorSelectorComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.10", type: ColorSelectorComponent, selector: "cdk-color-selector", outputs: { colorChanged: "colorChanged" }, ngImport: i0, template: "<div class=\"d-flex align-items-center justify-content-between mt-4\">\r\n    <span\r\n        *ngFor=\"let item of options1\"\r\n        class=\"d-flex justify-content-center align-items-center\"\r\n        [style.backgroundColor]=\"item\"\r\n        (click)=\"selectColor(item)\"\r\n    >\r\n        <i class=\"bi bi-check-lg\" *ngIf=\"selectedColor === item\"></i>\r\n    </span>\r\n</div>\r\n\r\n<div class=\"d-flex align-items-center justify-content-between mt-4\">\r\n    <span\r\n        *ngFor=\"let item of options2\"\r\n        class=\"d-flex justify-content-center align-items-center\"\r\n        [style.backgroundColor]=\"item\"\r\n        (click)=\"selectColor(item)\"\r\n    >\r\n        <i class=\"bi bi-check-lg\" *ngIf=\"selectedColor === item\"></i>\r\n    </span>\r\n</div>", styles: ["span{width:28px;height:28px;border-radius:50%;cursor:pointer}span i{color:#fff}\n"], dependencies: [{ kind: "directive", type: i1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.10", ngImport: i0, type: ColorSelectorComponent, decorators: [{
            type: Component,
            args: [{ selector: 'cdk-color-selector', template: "<div class=\"d-flex align-items-center justify-content-between mt-4\">\r\n    <span\r\n        *ngFor=\"let item of options1\"\r\n        class=\"d-flex justify-content-center align-items-center\"\r\n        [style.backgroundColor]=\"item\"\r\n        (click)=\"selectColor(item)\"\r\n    >\r\n        <i class=\"bi bi-check-lg\" *ngIf=\"selectedColor === item\"></i>\r\n    </span>\r\n</div>\r\n\r\n<div class=\"d-flex align-items-center justify-content-between mt-4\">\r\n    <span\r\n        *ngFor=\"let item of options2\"\r\n        class=\"d-flex justify-content-center align-items-center\"\r\n        [style.backgroundColor]=\"item\"\r\n        (click)=\"selectColor(item)\"\r\n    >\r\n        <i class=\"bi bi-check-lg\" *ngIf=\"selectedColor === item\"></i>\r\n    </span>\r\n</div>", styles: ["span{width:28px;height:28px;border-radius:50%;cursor:pointer}span i{color:#fff}\n"] }]
        }], propDecorators: { colorChanged: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29sb3Itc2VsZWN0b3IuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY29tcG9uZW50cy9zcmMvbGliL2NvbG9yLXNlbGVjdG9yL2NvbG9yLXNlbGVjdG9yLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NvbXBvbmVudHMvc3JjL2xpYi9jb2xvci1zZWxlY3Rvci9jb2xvci1zZWxlY3Rvci5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBVSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7OztBQU94RSxNQUFNLE9BQU8sc0JBQXNCO0lBTG5DO1FBTVksaUJBQVksR0FBRyxJQUFJLFlBQVksRUFBVSxDQUFDO1FBQ3BELGtCQUFhLEdBQUcsU0FBUyxDQUFDO1FBRTFCLGFBQVEsR0FBRztZQUNULFNBQVM7WUFDVCxTQUFTO1lBQ1QsU0FBUztZQUNULFNBQVM7WUFDVCxTQUFTO1lBQ1QsU0FBUztZQUNULFNBQVM7WUFDVCxTQUFTO1NBQ1YsQ0FBQztRQUVGLGFBQVEsR0FBRztZQUNULFNBQVM7WUFDVCxTQUFTO1lBQ1QsU0FBUztZQUNULFNBQVM7WUFDVCxTQUFTO1lBQ1QsU0FBUztZQUNULFNBQVM7WUFDVCxTQUFTO1NBQ1YsQ0FBQztLQVVIO0lBUkMsUUFBUTtRQUNOLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7SUFFRCxXQUFXLENBQUMsS0FBYTtRQUN2QixJQUFJLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQztRQUMzQixJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNoQyxDQUFDOytHQWpDVSxzQkFBc0I7bUdBQXRCLHNCQUFzQixxR0NQbkMsMHhCQW9CTTs7NEZEYk8sc0JBQXNCO2tCQUxsQyxTQUFTOytCQUNFLG9CQUFvQjs4QkFLcEIsWUFBWTtzQkFBckIsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBPbkluaXQsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdjZGstY29sb3Itc2VsZWN0b3InLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9jb2xvci1zZWxlY3Rvci5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vY29sb3Itc2VsZWN0b3IuY29tcG9uZW50LnNjc3MnXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIENvbG9yU2VsZWN0b3JDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIEBPdXRwdXQoKSBjb2xvckNoYW5nZWQgPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZz4oKTtcclxuICBzZWxlY3RlZENvbG9yID0gJyM3QTg3Q0MnO1xyXG5cclxuICBvcHRpb25zMSA9IFtcclxuICAgICcjN0E4N0NDJyxcclxuICAgICcjOUQ3Q0RDJyxcclxuICAgICcjQkE2OUM5JyxcclxuICAgICcjRjA2MjkxJyxcclxuICAgICcjRTk3ODdBJyxcclxuICAgICcjRkY4RDVCJyxcclxuICAgICcjRkZBODI2JyxcclxuICAgICcjRjNENDU3JyxcclxuICBdO1xyXG5cclxuICBvcHRpb25zMiA9IFtcclxuICAgICcjQzdEMDQ4JyxcclxuICAgICcjOUNDQjYzJyxcclxuICAgICcjNzJDMzkyJyxcclxuICAgICcjNEZDRkQ3JyxcclxuICAgICcjN0NERkU2JyxcclxuICAgICcjNUNCMUZGJyxcclxuICAgICcjNDNDMEZGJyxcclxuICAgICcjOEQ2RTYyJyxcclxuICBdO1xyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgIHRoaXMuc2VsZWN0Q29sb3IodGhpcy5zZWxlY3RlZENvbG9yKTtcclxuICB9XHJcblxyXG4gIHNlbGVjdENvbG9yKGNvbG9yOiBzdHJpbmcpIHtcclxuICAgIHRoaXMuc2VsZWN0ZWRDb2xvciA9IGNvbG9yO1xyXG4gICAgdGhpcy5jb2xvckNoYW5nZWQuZW1pdChjb2xvcik7XHJcbiAgfVxyXG59XHJcbiIsIjxkaXYgY2xhc3M9XCJkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyIGp1c3RpZnktY29udGVudC1iZXR3ZWVuIG10LTRcIj5cclxuICAgIDxzcGFuXHJcbiAgICAgICAgKm5nRm9yPVwibGV0IGl0ZW0gb2Ygb3B0aW9uczFcIlxyXG4gICAgICAgIGNsYXNzPVwiZC1mbGV4IGp1c3RpZnktY29udGVudC1jZW50ZXIgYWxpZ24taXRlbXMtY2VudGVyXCJcclxuICAgICAgICBbc3R5bGUuYmFja2dyb3VuZENvbG9yXT1cIml0ZW1cIlxyXG4gICAgICAgIChjbGljayk9XCJzZWxlY3RDb2xvcihpdGVtKVwiXHJcbiAgICA+XHJcbiAgICAgICAgPGkgY2xhc3M9XCJiaSBiaS1jaGVjay1sZ1wiICpuZ0lmPVwic2VsZWN0ZWRDb2xvciA9PT0gaXRlbVwiPjwvaT5cclxuICAgIDwvc3Bhbj5cclxuPC9kaXY+XHJcblxyXG48ZGl2IGNsYXNzPVwiZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlbiBtdC00XCI+XHJcbiAgICA8c3BhblxyXG4gICAgICAgICpuZ0Zvcj1cImxldCBpdGVtIG9mIG9wdGlvbnMyXCJcclxuICAgICAgICBjbGFzcz1cImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIGFsaWduLWl0ZW1zLWNlbnRlclwiXHJcbiAgICAgICAgW3N0eWxlLmJhY2tncm91bmRDb2xvcl09XCJpdGVtXCJcclxuICAgICAgICAoY2xpY2spPVwic2VsZWN0Q29sb3IoaXRlbSlcIlxyXG4gICAgPlxyXG4gICAgICAgIDxpIGNsYXNzPVwiYmkgYmktY2hlY2stbGdcIiAqbmdJZj1cInNlbGVjdGVkQ29sb3IgPT09IGl0ZW1cIj48L2k+XHJcbiAgICA8L3NwYW4+XHJcbjwvZGl2PiJdfQ==