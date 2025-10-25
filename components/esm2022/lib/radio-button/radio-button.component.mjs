import { Component, forwardRef, HostListener, Input } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
export class RadioButtonComponent {
    constructor() {
        this.disabled = false;
        this.name = '';
        this.position = 'start';
        this.id = `radio_${(Math.round(Math.random() * 1000000)).toString().padStart(10, '0')}`;
        this.onChange = new Function();
        this.onTouched = new Function();
    }
    registerOnChange(fn) {
        this.onChange = fn;
    }
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    writeValue(obj) {
        this.model = obj;
    }
    click(event) {
        event.stopPropagation();
        event.preventDefault();
        if (this.disabled)
            return;
        this.changed(this.value);
    }
    changed(value) {
        this.model = value;
        this.onChange(this.model);
        this.onTouched();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.10", ngImport: i0, type: RadioButtonComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.10", type: RadioButtonComponent, selector: "cdk-radio", inputs: { disabled: "disabled", value: "value", name: "name", position: "position" }, host: { listeners: { "click": "click($event)", "window:keydown.enter": "click($event)", "window:keydown.space": "click($event)" } }, providers: [{
                provide: NG_VALUE_ACCESSOR,
                useExisting: forwardRef(() => RadioButtonComponent),
                multi: true,
            }], ngImport: i0, template: "<label [attr.for]=\"id\" [class.reverse]=\"position === 'end'\">\r\n    <input\r\n        type=\"radio\"\r\n        [value]=\"value\"\r\n        [(ngModel)]=\"model\"\r\n        [disabled]=\"disabled\"\r\n        [name]=\"name\"\r\n        #ctrl=\"ngModel\"\r\n        [attr.id]=\"id\"\r\n    />\r\n    <span></span>\r\n    <p><ng-content></ng-content></p>\r\n</label>", styles: ["label{display:flex;width:100%;cursor:pointer;align-items:center;margin-bottom:8px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}label.reverse{flex-direction:row-reverse;justify-content:space-between}label.reverse span{margin-right:0}label input{position:absolute;opacity:0;cursor:pointer;width:0;height:0}label span{display:block;width:18px;height:18px;border:1px solid var(--surface-1);margin-right:8px;border-radius:50%}label p{font-weight:400;font-size:14px;color:var(--emphasis-low);margin:0!important}label:hover input~span{border:3px solid var(--st-aqua)}label input:checked~span{border:5px solid var(--st-blue);background-color:var(--white)}label input:checked~p{font-weight:600;font-size:14px;color:var(--emphasis-high)}\n"], dependencies: [{ kind: "directive", type: i1.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i1.RadioControlValueAccessor, selector: "input[type=radio][formControlName],input[type=radio][formControl],input[type=radio][ngModel]", inputs: ["name", "formControlName", "value"] }, { kind: "directive", type: i1.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i1.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.10", ngImport: i0, type: RadioButtonComponent, decorators: [{
            type: Component,
            args: [{ selector: 'cdk-radio', providers: [{
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef(() => RadioButtonComponent),
                            multi: true,
                        }], template: "<label [attr.for]=\"id\" [class.reverse]=\"position === 'end'\">\r\n    <input\r\n        type=\"radio\"\r\n        [value]=\"value\"\r\n        [(ngModel)]=\"model\"\r\n        [disabled]=\"disabled\"\r\n        [name]=\"name\"\r\n        #ctrl=\"ngModel\"\r\n        [attr.id]=\"id\"\r\n    />\r\n    <span></span>\r\n    <p><ng-content></ng-content></p>\r\n</label>", styles: ["label{display:flex;width:100%;cursor:pointer;align-items:center;margin-bottom:8px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}label.reverse{flex-direction:row-reverse;justify-content:space-between}label.reverse span{margin-right:0}label input{position:absolute;opacity:0;cursor:pointer;width:0;height:0}label span{display:block;width:18px;height:18px;border:1px solid var(--surface-1);margin-right:8px;border-radius:50%}label p{font-weight:400;font-size:14px;color:var(--emphasis-low);margin:0!important}label:hover input~span{border:3px solid var(--st-aqua)}label input:checked~span{border:5px solid var(--st-blue);background-color:var(--white)}label input:checked~p{font-weight:600;font-size:14px;color:var(--emphasis-high)}\n"] }]
        }], propDecorators: { disabled: [{
                type: Input
            }], value: [{
                type: Input
            }], name: [{
                type: Input
            }], position: [{
                type: Input
            }], click: [{
                type: HostListener,
                args: ['click', ['$event']]
            }, {
                type: HostListener,
                args: ['window:keydown.enter', ['$event']]
            }, {
                type: HostListener,
                args: ['window:keydown.space', ['$event']]
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmFkaW8tYnV0dG9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NvbXBvbmVudHMvc3JjL2xpYi9yYWRpby1idXR0b24vcmFkaW8tYnV0dG9uLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NvbXBvbmVudHMvc3JjL2xpYi9yYWRpby1idXR0b24vcmFkaW8tYnV0dG9uLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0UsT0FBTyxFQUF3QixpQkFBaUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDOzs7QUFZekUsTUFBTSxPQUFPLG9CQUFvQjtJQVZqQztRQVlXLGFBQVEsR0FBRyxLQUFLLENBQUM7UUFFakIsU0FBSSxHQUFHLEVBQUUsQ0FBQztRQUNWLGFBQVEsR0FBb0IsT0FBTyxDQUFDO1FBRTdDLE9BQUUsR0FBRyxTQUFTLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsT0FBTyxDQUFDLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxRQUFRLENBQUMsRUFBRSxFQUFFLEdBQUcsQ0FBQyxFQUFFLENBQUM7UUFDbkYsYUFBUSxHQUFhLElBQUksUUFBUSxFQUFFLENBQUM7UUFDcEMsY0FBUyxHQUFhLElBQUksUUFBUSxFQUFFLENBQUM7S0E4QnRDO0lBNUJDLGdCQUFnQixDQUFDLEVBQVk7UUFDM0IsSUFBSSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUM7SUFDckIsQ0FBQztJQUVELGlCQUFpQixDQUFDLEVBQVk7UUFDNUIsSUFBSSxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUM7SUFDdEIsQ0FBQztJQUVELFVBQVUsQ0FBQyxHQUFRO1FBQ2pCLElBQUksQ0FBQyxLQUFLLEdBQUcsR0FBRyxDQUFDO0lBQ25CLENBQUM7SUFLRCxLQUFLLENBQUMsS0FBaUI7UUFDckIsS0FBSyxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBQ3hCLEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUN2QixJQUFJLElBQUksQ0FBQyxRQUFRO1lBQUUsT0FBTztRQUMxQixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUMzQixDQUFDO0lBRUQsT0FBTyxDQUFDLEtBQVE7UUFDZCxJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNuQixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUMxQixJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDbkIsQ0FBQzsrR0FyQ1Usb0JBQW9CO21HQUFwQixvQkFBb0IsK1BBTnBCLENBQUM7Z0JBQ1YsT0FBTyxFQUFFLGlCQUFpQjtnQkFDMUIsV0FBVyxFQUFFLFVBQVUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxvQkFBb0IsQ0FBQztnQkFDbkQsS0FBSyxFQUFFLElBQUk7YUFDWixDQUFDLDBCQ1hKLGtYQVlROzs0RkRDSyxvQkFBb0I7a0JBVmhDLFNBQVM7K0JBQ0UsV0FBVyxhQUdWLENBQUM7NEJBQ1YsT0FBTyxFQUFFLGlCQUFpQjs0QkFDMUIsV0FBVyxFQUFFLFVBQVUsQ0FBQyxHQUFHLEVBQUUscUJBQXFCLENBQUM7NEJBQ25ELEtBQUssRUFBRSxJQUFJO3lCQUNaLENBQUM7OEJBSU8sUUFBUTtzQkFBaEIsS0FBSztnQkFDRyxLQUFLO3NCQUFiLEtBQUs7Z0JBQ0csSUFBSTtzQkFBWixLQUFLO2dCQUNHLFFBQVE7c0JBQWhCLEtBQUs7Z0JBcUJOLEtBQUs7c0JBSEosWUFBWTt1QkFBQyxPQUFPLEVBQUUsQ0FBQyxRQUFRLENBQUM7O3NCQUNoQyxZQUFZO3VCQUFDLHNCQUFzQixFQUFFLENBQUMsUUFBUSxDQUFDOztzQkFDL0MsWUFBWTt1QkFBQyxzQkFBc0IsRUFBRSxDQUFDLFFBQVEsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgZm9yd2FyZFJlZiwgSG9zdExpc3RlbmVyLCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb250cm9sVmFsdWVBY2Nlc3NvciwgTkdfVkFMVUVfQUNDRVNTT1IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2Nkay1yYWRpbycsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL3JhZGlvLWJ1dHRvbi5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vcmFkaW8tYnV0dG9uLmNvbXBvbmVudC5zY3NzJ10sXHJcbiAgcHJvdmlkZXJzOiBbe1xyXG4gICAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXHJcbiAgICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBSYWRpb0J1dHRvbkNvbXBvbmVudCksXHJcbiAgICBtdWx0aTogdHJ1ZSxcclxuICB9XVxyXG59KVxyXG5leHBvcnQgY2xhc3MgUmFkaW9CdXR0b25Db21wb25lbnQ8VD4gaW1wbGVtZW50cyBDb250cm9sVmFsdWVBY2Nlc3NvciB7XHJcblxyXG4gIEBJbnB1dCgpIGRpc2FibGVkID0gZmFsc2U7XHJcbiAgQElucHV0KCkgdmFsdWUhOiBUO1xyXG4gIEBJbnB1dCgpIG5hbWUgPSAnJztcclxuICBASW5wdXQoKSBwb3NpdGlvbjogJ3N0YXJ0JyB8ICdlbmQnID0gJ3N0YXJ0JztcclxuICBtb2RlbCE6IFQ7XHJcbiAgaWQgPSBgcmFkaW9fJHsoTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogMTAwMDAwMCkpLnRvU3RyaW5nKCkucGFkU3RhcnQoMTAsICcwJyl9YDtcclxuICBvbkNoYW5nZTogRnVuY3Rpb24gPSBuZXcgRnVuY3Rpb24oKTtcclxuICBvblRvdWNoZWQ6IEZ1bmN0aW9uID0gbmV3IEZ1bmN0aW9uKCk7XHJcblxyXG4gIHJlZ2lzdGVyT25DaGFuZ2UoZm46IEZ1bmN0aW9uKTogdm9pZCB7XHJcbiAgICB0aGlzLm9uQ2hhbmdlID0gZm47XHJcbiAgfVxyXG5cclxuICByZWdpc3Rlck9uVG91Y2hlZChmbjogRnVuY3Rpb24pOiB2b2lkIHtcclxuICAgIHRoaXMub25Ub3VjaGVkID0gZm47XHJcbiAgfVxyXG5cclxuICB3cml0ZVZhbHVlKG9iajogYW55KTogdm9pZCB7XHJcbiAgICB0aGlzLm1vZGVsID0gb2JqO1xyXG4gIH1cclxuXHJcbiAgQEhvc3RMaXN0ZW5lcignY2xpY2snLCBbJyRldmVudCddKVxyXG4gIEBIb3N0TGlzdGVuZXIoJ3dpbmRvdzprZXlkb3duLmVudGVyJywgWyckZXZlbnQnXSlcclxuICBASG9zdExpc3RlbmVyKCd3aW5kb3c6a2V5ZG93bi5zcGFjZScsIFsnJGV2ZW50J10pXHJcbiAgY2xpY2soZXZlbnQ6IE1vdXNlRXZlbnQpIHtcclxuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIGlmICh0aGlzLmRpc2FibGVkKSByZXR1cm47XHJcbiAgICB0aGlzLmNoYW5nZWQodGhpcy52YWx1ZSk7XHJcbiAgfVxyXG5cclxuICBjaGFuZ2VkKHZhbHVlOiBUKSB7XHJcbiAgICB0aGlzLm1vZGVsID0gdmFsdWU7XHJcbiAgICB0aGlzLm9uQ2hhbmdlKHRoaXMubW9kZWwpO1xyXG4gICAgdGhpcy5vblRvdWNoZWQoKTtcclxuICB9XHJcblxyXG59XHJcbiIsIjxsYWJlbCBbYXR0ci5mb3JdPVwiaWRcIiBbY2xhc3MucmV2ZXJzZV09XCJwb3NpdGlvbiA9PT0gJ2VuZCdcIj5cclxuICAgIDxpbnB1dFxyXG4gICAgICAgIHR5cGU9XCJyYWRpb1wiXHJcbiAgICAgICAgW3ZhbHVlXT1cInZhbHVlXCJcclxuICAgICAgICBbKG5nTW9kZWwpXT1cIm1vZGVsXCJcclxuICAgICAgICBbZGlzYWJsZWRdPVwiZGlzYWJsZWRcIlxyXG4gICAgICAgIFtuYW1lXT1cIm5hbWVcIlxyXG4gICAgICAgICNjdHJsPVwibmdNb2RlbFwiXHJcbiAgICAgICAgW2F0dHIuaWRdPVwiaWRcIlxyXG4gICAgLz5cclxuICAgIDxzcGFuPjwvc3Bhbj5cclxuICAgIDxwPjxuZy1jb250ZW50PjwvbmctY29udGVudD48L3A+XHJcbjwvbGFiZWw+Il19