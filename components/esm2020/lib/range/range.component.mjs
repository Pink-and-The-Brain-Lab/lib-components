import { Component, EventEmitter, Input, Output } from '@angular/core';
import * as i0 from "@angular/core";
export class RangeComponent {
    constructor() {
        this.min = 0;
        this.max = 100;
        this.step = 1;
        this.selectedRange = new EventEmitter();
    }
    change(event) {
        const target = event.target;
        this.selectedRange.emit(target.value);
    }
}
RangeComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: RangeComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
RangeComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.1.2", type: RangeComponent, selector: "cdk-range", inputs: { min: "min", max: "max", step: "step" }, outputs: { selectedRange: "selectedRange" }, ngImport: i0, template: "<input type=\"range\" [min]=\"min\" [max]=\"max\" [step]=\"step\" value=\"0\" (change)=\"change($event)\" />", styles: ["input[type=range]{-webkit-appearance:none;appearance:none;background:transparent;cursor:pointer;width:100%}input[type=range]:focus{outline:none}input[type=range]::-webkit-slider-runnable-track{background-color:#4e5463;border-radius:.5em;height:.25em}input[type=range]::-webkit-slider-thumb{-webkit-appearance:none;appearance:none;margin-top:-2px;background-color:#b3b6bc;height:.5em;width:.5em;border-radius:50%}input[type=range]::-moz-range-track{background-color:#4e5463;border-radius:.5em;height:.5em}input[type=range]::-moz-range-thumb{border:none;margin-top:-2px;background-color:#b3b6bc;height:.5em;width:.5em;border-radius:50%}\n"] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: RangeComponent, decorators: [{
            type: Component,
            args: [{ selector: 'cdk-range', template: "<input type=\"range\" [min]=\"min\" [max]=\"max\" [step]=\"step\" value=\"0\" (change)=\"change($event)\" />", styles: ["input[type=range]{-webkit-appearance:none;appearance:none;background:transparent;cursor:pointer;width:100%}input[type=range]:focus{outline:none}input[type=range]::-webkit-slider-runnable-track{background-color:#4e5463;border-radius:.5em;height:.25em}input[type=range]::-webkit-slider-thumb{-webkit-appearance:none;appearance:none;margin-top:-2px;background-color:#b3b6bc;height:.5em;width:.5em;border-radius:50%}input[type=range]::-moz-range-track{background-color:#4e5463;border-radius:.5em;height:.5em}input[type=range]::-moz-range-thumb{border:none;margin-top:-2px;background-color:#b3b6bc;height:.5em;width:.5em;border-radius:50%}\n"] }]
        }], propDecorators: { min: [{
                type: Input
            }], max: [{
                type: Input
            }], step: [{
                type: Input
            }], selectedRange: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmFuZ2UuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY29tcG9uZW50cy9zcmMvbGliL3JhbmdlL3JhbmdlLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NvbXBvbmVudHMvc3JjL2xpYi9yYW5nZS9yYW5nZS5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDOztBQU92RSxNQUFNLE9BQU8sY0FBYztJQUwzQjtRQU1XLFFBQUcsR0FBRyxDQUFDLENBQUM7UUFDUixRQUFHLEdBQUcsR0FBRyxDQUFDO1FBQ1YsU0FBSSxHQUFHLENBQUMsQ0FBQztRQUNSLGtCQUFhLEdBQUcsSUFBSSxZQUFZLEVBQVUsQ0FBQztLQU10RDtJQUpDLE1BQU0sQ0FBQyxLQUFZO1FBQ2pCLE1BQU0sTUFBTSxHQUFHLEtBQUssQ0FBQyxNQUEwQixDQUFDO1FBQ2hELElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQTtJQUN2QyxDQUFDOzsyR0FUVSxjQUFjOytGQUFkLGNBQWMsZ0pDUDNCLDhHQUFnRzsyRkRPbkYsY0FBYztrQkFMMUIsU0FBUzsrQkFDRSxXQUFXOzhCQUtaLEdBQUc7c0JBQVgsS0FBSztnQkFDRyxHQUFHO3NCQUFYLEtBQUs7Z0JBQ0csSUFBSTtzQkFBWixLQUFLO2dCQUNJLGFBQWE7c0JBQXRCLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdjZGstcmFuZ2UnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9yYW5nZS5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vcmFuZ2UuY29tcG9uZW50LnNjc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgUmFuZ2VDb21wb25lbnQge1xyXG4gIEBJbnB1dCgpIG1pbiA9IDA7XHJcbiAgQElucHV0KCkgbWF4ID0gMTAwO1xyXG4gIEBJbnB1dCgpIHN0ZXAgPSAxO1xyXG4gIEBPdXRwdXQoKSBzZWxlY3RlZFJhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmc+KCk7XHJcblxyXG4gIGNoYW5nZShldmVudDogRXZlbnQpIHtcclxuICAgIGNvbnN0IHRhcmdldCA9IGV2ZW50LnRhcmdldCBhcyBIVE1MSW5wdXRFbGVtZW50O1xyXG4gICAgdGhpcy5zZWxlY3RlZFJhbmdlLmVtaXQodGFyZ2V0LnZhbHVlKVxyXG4gIH1cclxufVxyXG4iLCI8aW5wdXQgdHlwZT1cInJhbmdlXCIgW21pbl09XCJtaW5cIiBbbWF4XT1cIm1heFwiIFtzdGVwXT1cInN0ZXBcIiB2YWx1ZT1cIjBcIiAoY2hhbmdlKT1cImNoYW5nZSgkZXZlbnQpXCIgLz4iXX0=