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
        this.onChange = () => { };
        this.onTouched = () => { };
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
    click(e) {
        e.stopPropagation();
        e.preventDefault();
        if (this.disabled)
            return;
        this.changed(this.value);
    }
    changed(value) {
        this.model = value;
        this.onChange(this.model);
        this.onTouched();
    }
}
RadioButtonComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: RadioButtonComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
RadioButtonComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.1.2", type: RadioButtonComponent, selector: "cdk-radio", inputs: { disabled: "disabled", value: "value", name: "name", position: "position" }, host: { listeners: { "click": "click($event)", "window:keydown.enter": "click($event)", "window:keydown.space": "click($event)" } }, providers: [{
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => RadioButtonComponent),
            multi: true,
        }], ngImport: i0, template: "<label [attr.for]=\"id\" [class.reverse]=\"position === 'end'\">\r\n    <input\r\n        type=\"radio\"\r\n        [value]=\"value\"\r\n        [(ngModel)]=\"model\"\r\n        [disabled]=\"disabled\"\r\n        [name]=\"name\"\r\n        #ctrl=\"ngModel\"\r\n        [attr.id]=\"id\"\r\n    />\r\n    <span></span>\r\n    <p><ng-content></ng-content></p>\r\n</label>", styles: ["label{display:flex;width:100%;cursor:pointer;align-items:center;margin-bottom:8px;-webkit-user-select:none;user-select:none}label.reverse{flex-direction:row-reverse;justify-content:space-between}label.reverse span{margin-right:0}label input{position:absolute;opacity:0;cursor:pointer;width:0;height:0}label span{display:block;width:18px;height:18px;border:1px solid #6c717d;margin-right:8px;border-radius:50%}label p{font-weight:400;font-size:14px;color:#7f858c;margin:0!important}label:hover input~span{border:3px solid #9FFDF3}label input:checked~span{border:5px solid #109cf1;background-color:#fff}label input:checked~p{font-weight:600;font-size:14px;color:#dfdfdf}\n"], dependencies: [{ kind: "directive", type: i1.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i1.RadioControlValueAccessor, selector: "input[type=radio][formControlName],input[type=radio][formControl],input[type=radio][ngModel]", inputs: ["name", "formControlName", "value"] }, { kind: "directive", type: i1.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i1.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: RadioButtonComponent, decorators: [{
            type: Component,
            args: [{ selector: 'cdk-radio', providers: [{
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef(() => RadioButtonComponent),
                            multi: true,
                        }], template: "<label [attr.for]=\"id\" [class.reverse]=\"position === 'end'\">\r\n    <input\r\n        type=\"radio\"\r\n        [value]=\"value\"\r\n        [(ngModel)]=\"model\"\r\n        [disabled]=\"disabled\"\r\n        [name]=\"name\"\r\n        #ctrl=\"ngModel\"\r\n        [attr.id]=\"id\"\r\n    />\r\n    <span></span>\r\n    <p><ng-content></ng-content></p>\r\n</label>", styles: ["label{display:flex;width:100%;cursor:pointer;align-items:center;margin-bottom:8px;-webkit-user-select:none;user-select:none}label.reverse{flex-direction:row-reverse;justify-content:space-between}label.reverse span{margin-right:0}label input{position:absolute;opacity:0;cursor:pointer;width:0;height:0}label span{display:block;width:18px;height:18px;border:1px solid #6c717d;margin-right:8px;border-radius:50%}label p{font-weight:400;font-size:14px;color:#7f858c;margin:0!important}label:hover input~span{border:3px solid #9FFDF3}label input:checked~span{border:5px solid #109cf1;background-color:#fff}label input:checked~p{font-weight:600;font-size:14px;color:#dfdfdf}\n"] }]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmFkaW8tYnV0dG9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NvbXBvbmVudHMvc3JjL2xpYi9yYWRpby1idXR0b24vcmFkaW8tYnV0dG9uLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NvbXBvbmVudHMvc3JjL2xpYi9yYWRpby1idXR0b24vcmFkaW8tYnV0dG9uLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0UsT0FBTyxFQUF3QixpQkFBaUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDOzs7QUFZekUsTUFBTSxPQUFPLG9CQUFvQjtJQVZqQztRQVlXLGFBQVEsR0FBRyxLQUFLLENBQUM7UUFHakIsU0FBSSxHQUFHLEVBQUUsQ0FBQztRQUNWLGFBQVEsR0FBb0IsT0FBTyxDQUFDO1FBRzdDLE9BQUUsR0FBRyxTQUFTLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsT0FBTyxDQUFDLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxRQUFRLENBQUMsRUFBRSxFQUFFLEdBQUcsQ0FBQyxFQUFFLENBQUM7UUFFbkYsYUFBUSxHQUFhLEdBQUcsRUFBRSxHQUFFLENBQUMsQ0FBQztRQUM5QixjQUFTLEdBQWEsR0FBRyxFQUFFLEdBQUUsQ0FBQyxDQUFDO0tBOEJoQztJQTVCQyxnQkFBZ0IsQ0FBQyxFQUFZO1FBQzNCLElBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDO0lBQ3JCLENBQUM7SUFFRCxpQkFBaUIsQ0FBQyxFQUFZO1FBQzVCLElBQUksQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDO0lBQ3RCLENBQUM7SUFFRCxVQUFVLENBQUMsR0FBUTtRQUNqQixJQUFJLENBQUMsS0FBSyxHQUFHLEdBQUcsQ0FBQztJQUNuQixDQUFDO0lBS0QsS0FBSyxDQUFDLENBQWE7UUFDakIsQ0FBQyxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBQ3BCLENBQUMsQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUNuQixJQUFJLElBQUksQ0FBQyxRQUFRO1lBQUUsT0FBTztRQUMxQixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUMzQixDQUFDO0lBRUQsT0FBTyxDQUFDLEtBQVE7UUFDZCxJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNuQixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUMxQixJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDbkIsQ0FBQzs7aUhBeENVLG9CQUFvQjtxR0FBcEIsb0JBQW9CLCtQQU5wQixDQUFDO1lBQ1YsT0FBTyxFQUFFLGlCQUFpQjtZQUMxQixXQUFXLEVBQUUsVUFBVSxDQUFDLEdBQUcsRUFBRSxDQUFDLG9CQUFvQixDQUFDO1lBQ25ELEtBQUssRUFBRSxJQUFJO1NBQ1osQ0FBQywwQkNYSixrWEFZUTsyRkRDSyxvQkFBb0I7a0JBVmhDLFNBQVM7K0JBQ0UsV0FBVyxhQUdWLENBQUM7NEJBQ1YsT0FBTyxFQUFFLGlCQUFpQjs0QkFDMUIsV0FBVyxFQUFFLFVBQVUsQ0FBQyxHQUFHLEVBQUUscUJBQXFCLENBQUM7NEJBQ25ELEtBQUssRUFBRSxJQUFJO3lCQUNaLENBQUM7OEJBSU8sUUFBUTtzQkFBaEIsS0FBSztnQkFFRyxLQUFLO3NCQUFiLEtBQUs7Z0JBQ0csSUFBSTtzQkFBWixLQUFLO2dCQUNHLFFBQVE7c0JBQWhCLEtBQUs7Z0JBdUJOLEtBQUs7c0JBSEosWUFBWTt1QkFBQyxPQUFPLEVBQUUsQ0FBQyxRQUFRLENBQUM7O3NCQUNoQyxZQUFZO3VCQUFDLHNCQUFzQixFQUFFLENBQUMsUUFBUSxDQUFDOztzQkFDL0MsWUFBWTt1QkFBQyxzQkFBc0IsRUFBRSxDQUFDLFFBQVEsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgZm9yd2FyZFJlZiwgSG9zdExpc3RlbmVyLCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb250cm9sVmFsdWVBY2Nlc3NvciwgTkdfVkFMVUVfQUNDRVNTT1IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2Nkay1yYWRpbycsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL3JhZGlvLWJ1dHRvbi5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vcmFkaW8tYnV0dG9uLmNvbXBvbmVudC5zY3NzJ10sXHJcbiAgcHJvdmlkZXJzOiBbe1xyXG4gICAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXHJcbiAgICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBSYWRpb0J1dHRvbkNvbXBvbmVudCksXHJcbiAgICBtdWx0aTogdHJ1ZSxcclxuICB9XVxyXG59KVxyXG5leHBvcnQgY2xhc3MgUmFkaW9CdXR0b25Db21wb25lbnQ8VD4gaW1wbGVtZW50cyBDb250cm9sVmFsdWVBY2Nlc3NvciB7XHJcblxyXG4gIEBJbnB1dCgpIGRpc2FibGVkID0gZmFsc2U7XHJcbiAgLy8gQHRzLWlnbm9yZVxyXG4gIEBJbnB1dCgpIHZhbHVlOiBUO1xyXG4gIEBJbnB1dCgpIG5hbWUgPSAnJztcclxuICBASW5wdXQoKSBwb3NpdGlvbjogJ3N0YXJ0JyB8ICdlbmQnID0gJ3N0YXJ0JztcclxuICAvLyBAdHMtaWdub3JlXHJcbiAgbW9kZWw6IFQ7XHJcbiAgaWQgPSBgcmFkaW9fJHsoTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogMTAwMDAwMCkpLnRvU3RyaW5nKCkucGFkU3RhcnQoMTAsICcwJyl9YDtcclxuXHJcbiAgb25DaGFuZ2U6IEZ1bmN0aW9uID0gKCkgPT4ge307XHJcbiAgb25Ub3VjaGVkOiBGdW5jdGlvbiA9ICgpID0+IHt9O1xyXG5cclxuICByZWdpc3Rlck9uQ2hhbmdlKGZuOiBGdW5jdGlvbik6IHZvaWQge1xyXG4gICAgdGhpcy5vbkNoYW5nZSA9IGZuO1xyXG4gIH1cclxuXHJcbiAgcmVnaXN0ZXJPblRvdWNoZWQoZm46IEZ1bmN0aW9uKTogdm9pZCB7XHJcbiAgICB0aGlzLm9uVG91Y2hlZCA9IGZuO1xyXG4gIH1cclxuXHJcbiAgd3JpdGVWYWx1ZShvYmo6IGFueSk6IHZvaWQge1xyXG4gICAgdGhpcy5tb2RlbCA9IG9iajtcclxuICB9XHJcblxyXG4gIEBIb3N0TGlzdGVuZXIoJ2NsaWNrJywgWyckZXZlbnQnXSlcclxuICBASG9zdExpc3RlbmVyKCd3aW5kb3c6a2V5ZG93bi5lbnRlcicsIFsnJGV2ZW50J10pXHJcbiAgQEhvc3RMaXN0ZW5lcignd2luZG93OmtleWRvd24uc3BhY2UnLCBbJyRldmVudCddKVxyXG4gIGNsaWNrKGU6IE1vdXNlRXZlbnQpIHtcclxuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBpZiAodGhpcy5kaXNhYmxlZCkgcmV0dXJuO1xyXG4gICAgdGhpcy5jaGFuZ2VkKHRoaXMudmFsdWUpO1xyXG4gIH1cclxuXHJcbiAgY2hhbmdlZCh2YWx1ZTogVCkge1xyXG4gICAgdGhpcy5tb2RlbCA9IHZhbHVlO1xyXG4gICAgdGhpcy5vbkNoYW5nZSh0aGlzLm1vZGVsKTtcclxuICAgIHRoaXMub25Ub3VjaGVkKCk7XHJcbiAgfVxyXG5cclxufVxyXG4iLCI8bGFiZWwgW2F0dHIuZm9yXT1cImlkXCIgW2NsYXNzLnJldmVyc2VdPVwicG9zaXRpb24gPT09ICdlbmQnXCI+XHJcbiAgICA8aW5wdXRcclxuICAgICAgICB0eXBlPVwicmFkaW9cIlxyXG4gICAgICAgIFt2YWx1ZV09XCJ2YWx1ZVwiXHJcbiAgICAgICAgWyhuZ01vZGVsKV09XCJtb2RlbFwiXHJcbiAgICAgICAgW2Rpc2FibGVkXT1cImRpc2FibGVkXCJcclxuICAgICAgICBbbmFtZV09XCJuYW1lXCJcclxuICAgICAgICAjY3RybD1cIm5nTW9kZWxcIlxyXG4gICAgICAgIFthdHRyLmlkXT1cImlkXCJcclxuICAgIC8+XHJcbiAgICA8c3Bhbj48L3NwYW4+XHJcbiAgICA8cD48bmctY29udGVudD48L25nLWNvbnRlbnQ+PC9wPlxyXG48L2xhYmVsPiJdfQ==