import { Component, ContentChild, EventEmitter, Input, Output, TemplateRef } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "../popover/popover.directive";
import * as i3 from "@angular/forms";
export class CustomSelectComponent {
    constructor() {
        this.options = [];
        this.placeholder = 'Selecione';
        this.modelProperty = '';
        this.label = '';
        this.isValid = false;
        this.hasLeftIcon = false;
        this.hasDivider = false;
        this.valueChanges = new EventEmitter();
        this.customTemplate = {};
        this.selectedTemplate = {};
        this.showOptions = false;
        this.formGroup = new FormGroup({
            input: new FormControl('')
        });
        this.closePopover = () => this.showOptions = false;
    }
    ngOnInit() {
        this.filterOptions();
    }
    ngOnChanges({ selectedOption }) {
        if (selectedOption && !selectedOption.firstChange && selectedOption.currentValue !== selectedOption.previousValue)
            this.filterOptions();
    }
    filterOptions() {
        if (this.selectedOption)
            this.formGroup.controls.input.setValue(this.selectedOption[this.modelProperty]);
    }
    getOption(option) {
        this.selectedOption = option;
        this.valueChanges.emit(this.selectedOption);
        this.formGroup.controls.input.setValue(option[this.modelProperty]);
        this.closePopover();
    }
}
CustomSelectComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: CustomSelectComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
CustomSelectComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.1.2", type: CustomSelectComponent, selector: "cdk-custom-select", inputs: { options: "options", placeholder: "placeholder", modelProperty: "modelProperty", label: "label", selectedOption: "selectedOption", isValid: "isValid", hasLeftIcon: "hasLeftIcon", hasDivider: "hasDivider" }, outputs: { valueChanges: "valueChanges" }, queries: [{ propertyName: "customTemplate", first: true, predicate: ["customTemplate"], descendants: true, read: TemplateRef, static: true }, { propertyName: "selectedTemplate", first: true, predicate: ["selectedTemplate"], descendants: true, read: TemplateRef, static: true }], usesOnChanges: true, ngImport: i0, template: "<ng-container *ngIf=\"options.length\">\r\n  <div class=\"content\">\r\n    <div class=\"row-form position-relative m-0\" #content>\r\n      <div class=\"country-flag\" *ngIf=\"selectedOption\">\r\n        <ng-container\r\n          *ngTemplateOutlet=\"\r\n            selectedTemplate;\r\n            context: { $implicit: selectedOption }\r\n          \"\r\n        ></ng-container>\r\n      </div>\r\n\r\n      <form [formGroup]=\"formGroup\">\r\n        <input\r\n          type=\"text\"\r\n          (focus)=\"showOptions = true\"\r\n          [attr.placeholder]=\"placeholder\"\r\n          formControlName=\"input\"\r\n          [class.has-left-icon]=\"hasLeftIcon\"\r\n          [class.not-empty]=\"selectedOption[modelProperty]\"\r\n          [class.success]=\"isValid\"\r\n          readonly\r\n          id=\"select\"\r\n        />\r\n        <label for=\"select\">{{ label }}</label>\r\n      </form>\r\n\r\n      <span class=\"arrow\">\r\n        <i class=\"bi bi-chevron-down\" *ngIf=\"!showOptions\"></i>\r\n        <i class=\"bi bi-chevron-up\" *ngIf=\"showOptions\"></i>\r\n      </span>\r\n    </div>\r\n  </div>\r\n\r\n  <ul\r\n    class=\"options m-0\"\r\n    *cdkPopover=\"\r\n      showOptions;\r\n      target: content;\r\n      close: closePopover;\r\n      positions: 'SBST'\r\n    \"\r\n  >\r\n    <ng-container\r\n      *ngFor=\"\r\n        let item of options;\r\n        let first = first;\r\n        let last = last;\r\n        let index = index\r\n      \"\r\n    >\r\n      <li\r\n        class=\"custom-option\"\r\n        [class.first]=\"first\"\r\n        [class.last]=\"last\"\r\n        (click)=\"getOption(item)\"\r\n      >\r\n        <ng-container\r\n          *ngTemplateOutlet=\"customTemplate; context: { $implicit: item, index }\"\r\n        ></ng-container>\r\n      </li>\r\n      <li class=\"divider\" *ngIf=\"hasDivider && index === 1\"></li>\r\n    </ng-container>\r\n  </ul>\r\n</ng-container>\r\n", styles: [".content{box-shadow:0 2px 0 -1px #4e5463}.content .country-flag{position:absolute;left:3px;top:11px}.content .arrow{position:absolute;right:3px;top:11px;color:#7f858c}.content .has-left-icon{padding-left:30px}.content:focus{box-shadow:0 3px 0 -1px #4e5463}.content.invalid{box-shadow:0 2px 0 -1px #ff5d4f}.content.invalid:focus{box-shadow:0 3px 0 -1px #ff5d4f}.content.success{box-shadow:0 2px 0 -1px #00cb5f}.content.success:focus{box-shadow:0 3px 0 -1px #00cb5f}.content.warning{box-shadow:0 2px 0 -1px #fec23a}.content.warning:focus{box-shadow:0 3px 0 -1px #fec23a}.content.info{box-shadow:0 2px 0 -1px #109cf1}.content.info:focus{box-shadow:0 3px 0 -1px #109cf1}\n"], dependencies: [{ kind: "directive", type: i1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i1.NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"] }, { kind: "directive", type: i2.PopoverDirective, selector: "[cdkPopover]", inputs: ["cdkPopover", "cdkPopoverTarget", "cdkPopoverPositions", "cdkPopoverFullScreen", "cdkPopoverClose"] }, { kind: "directive", type: i3.ɵNgNoValidate, selector: "form:not([ngNoForm]):not([ngNativeValidate])" }, { kind: "directive", type: i3.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i3.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i3.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { kind: "directive", type: i3.FormGroupDirective, selector: "[formGroup]", inputs: ["formGroup"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { kind: "directive", type: i3.FormControlName, selector: "[formControlName]", inputs: ["formControlName", "disabled", "ngModel"], outputs: ["ngModelChange"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: CustomSelectComponent, decorators: [{
            type: Component,
            args: [{ selector: 'cdk-custom-select', template: "<ng-container *ngIf=\"options.length\">\r\n  <div class=\"content\">\r\n    <div class=\"row-form position-relative m-0\" #content>\r\n      <div class=\"country-flag\" *ngIf=\"selectedOption\">\r\n        <ng-container\r\n          *ngTemplateOutlet=\"\r\n            selectedTemplate;\r\n            context: { $implicit: selectedOption }\r\n          \"\r\n        ></ng-container>\r\n      </div>\r\n\r\n      <form [formGroup]=\"formGroup\">\r\n        <input\r\n          type=\"text\"\r\n          (focus)=\"showOptions = true\"\r\n          [attr.placeholder]=\"placeholder\"\r\n          formControlName=\"input\"\r\n          [class.has-left-icon]=\"hasLeftIcon\"\r\n          [class.not-empty]=\"selectedOption[modelProperty]\"\r\n          [class.success]=\"isValid\"\r\n          readonly\r\n          id=\"select\"\r\n        />\r\n        <label for=\"select\">{{ label }}</label>\r\n      </form>\r\n\r\n      <span class=\"arrow\">\r\n        <i class=\"bi bi-chevron-down\" *ngIf=\"!showOptions\"></i>\r\n        <i class=\"bi bi-chevron-up\" *ngIf=\"showOptions\"></i>\r\n      </span>\r\n    </div>\r\n  </div>\r\n\r\n  <ul\r\n    class=\"options m-0\"\r\n    *cdkPopover=\"\r\n      showOptions;\r\n      target: content;\r\n      close: closePopover;\r\n      positions: 'SBST'\r\n    \"\r\n  >\r\n    <ng-container\r\n      *ngFor=\"\r\n        let item of options;\r\n        let first = first;\r\n        let last = last;\r\n        let index = index\r\n      \"\r\n    >\r\n      <li\r\n        class=\"custom-option\"\r\n        [class.first]=\"first\"\r\n        [class.last]=\"last\"\r\n        (click)=\"getOption(item)\"\r\n      >\r\n        <ng-container\r\n          *ngTemplateOutlet=\"customTemplate; context: { $implicit: item, index }\"\r\n        ></ng-container>\r\n      </li>\r\n      <li class=\"divider\" *ngIf=\"hasDivider && index === 1\"></li>\r\n    </ng-container>\r\n  </ul>\r\n</ng-container>\r\n", styles: [".content{box-shadow:0 2px 0 -1px #4e5463}.content .country-flag{position:absolute;left:3px;top:11px}.content .arrow{position:absolute;right:3px;top:11px;color:#7f858c}.content .has-left-icon{padding-left:30px}.content:focus{box-shadow:0 3px 0 -1px #4e5463}.content.invalid{box-shadow:0 2px 0 -1px #ff5d4f}.content.invalid:focus{box-shadow:0 3px 0 -1px #ff5d4f}.content.success{box-shadow:0 2px 0 -1px #00cb5f}.content.success:focus{box-shadow:0 3px 0 -1px #00cb5f}.content.warning{box-shadow:0 2px 0 -1px #fec23a}.content.warning:focus{box-shadow:0 3px 0 -1px #fec23a}.content.info{box-shadow:0 2px 0 -1px #109cf1}.content.info:focus{box-shadow:0 3px 0 -1px #109cf1}\n"] }]
        }], propDecorators: { options: [{
                type: Input
            }], placeholder: [{
                type: Input
            }], modelProperty: [{
                type: Input
            }], label: [{
                type: Input
            }], selectedOption: [{
                type: Input
            }], isValid: [{
                type: Input
            }], hasLeftIcon: [{
                type: Input
            }], hasDivider: [{
                type: Input
            }], valueChanges: [{
                type: Output
            }], customTemplate: [{
                type: ContentChild,
                args: ["customTemplate", { static: true, read: TemplateRef }]
            }], selectedTemplate: [{
                type: ContentChild,
                args: ["selectedTemplate", { static: true, read: TemplateRef }]
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VzdG9tLXNlbGVjdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jb21wb25lbnRzL3NyYy9saWIvY3VzdG9tLXNlbGVjdC9jdXN0b20tc2VsZWN0LmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NvbXBvbmVudHMvc3JjL2xpYi9jdXN0b20tc2VsZWN0L2N1c3RvbS1zZWxlY3QuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBcUIsTUFBTSxFQUFpQixXQUFXLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDcEksT0FBTyxFQUFFLFdBQVcsRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7Ozs7QUFPeEQsTUFBTSxPQUFPLHFCQUFxQjtJQUxsQztRQU9XLFlBQU8sR0FBUSxFQUFTLENBQUM7UUFDekIsZ0JBQVcsR0FBRyxXQUFXLENBQUM7UUFDMUIsa0JBQWEsR0FBRyxFQUFFLENBQUM7UUFDbkIsVUFBSyxHQUFHLEVBQUUsQ0FBQztRQUVYLFlBQU8sR0FBRyxLQUFLLENBQUM7UUFDaEIsZ0JBQVcsR0FBRyxLQUFLLENBQUM7UUFDcEIsZUFBVSxHQUFHLEtBQUssQ0FBQztRQUNsQixpQkFBWSxHQUFHLElBQUksWUFBWSxFQUFLLENBQUM7UUFHL0MsbUJBQWMsR0FBcUIsRUFBc0IsQ0FBQztRQUcxRCxxQkFBZ0IsR0FBcUIsRUFBc0IsQ0FBQztRQUU1RCxnQkFBVyxHQUFHLEtBQUssQ0FBQztRQUVwQixjQUFTLEdBQUcsSUFBSSxTQUFTLENBQUM7WUFDeEIsS0FBSyxFQUFFLElBQUksV0FBVyxDQUFDLEVBQUUsQ0FBQztTQUMzQixDQUFDLENBQUM7UUFlSCxpQkFBWSxHQUFHLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDO0tBUy9DO0lBdEJDLFFBQVE7UUFDTixJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7SUFDdkIsQ0FBQztJQUVELFdBQVcsQ0FBQyxFQUFFLGNBQWMsRUFBaUI7UUFDM0MsSUFBSSxjQUFjLElBQUksQ0FBQyxjQUFjLENBQUMsV0FBVyxJQUFJLGNBQWMsQ0FBQyxZQUFZLEtBQUssY0FBYyxDQUFDLGFBQWE7WUFBRSxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7SUFDMUksQ0FBQztJQUVELGFBQWE7UUFDWCxJQUFJLElBQUksQ0FBQyxjQUFjO1lBQ3JCLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQztJQUNwRixDQUFDO0lBSUQsU0FBUyxDQUFDLE1BQVc7UUFDbkIsSUFBSSxDQUFDLGNBQWMsR0FBRyxNQUFNLENBQUM7UUFDN0IsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBQzVDLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDO1FBQ25FLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUN0QixDQUFDOztrSEE1Q1UscUJBQXFCO3NHQUFyQixxQkFBcUIscVpBWXNCLFdBQVcsNkhBR1QsV0FBVyxnRUN2QnJFLDY1REFpRUE7MkZEekRhLHFCQUFxQjtrQkFMakMsU0FBUzsrQkFDRSxtQkFBbUI7OEJBTXBCLE9BQU87c0JBQWYsS0FBSztnQkFDRyxXQUFXO3NCQUFuQixLQUFLO2dCQUNHLGFBQWE7c0JBQXJCLEtBQUs7Z0JBQ0csS0FBSztzQkFBYixLQUFLO2dCQUNHLGNBQWM7c0JBQXRCLEtBQUs7Z0JBQ0csT0FBTztzQkFBZixLQUFLO2dCQUNHLFdBQVc7c0JBQW5CLEtBQUs7Z0JBQ0csVUFBVTtzQkFBbEIsS0FBSztnQkFDSSxZQUFZO3NCQUFyQixNQUFNO2dCQUdQLGNBQWM7c0JBRGIsWUFBWTt1QkFBQyxnQkFBZ0IsRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRTtnQkFJbkUsZ0JBQWdCO3NCQURmLFlBQVk7dUJBQUMsa0JBQWtCLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIENvbnRlbnRDaGlsZCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT25DaGFuZ2VzLCBPbkluaXQsIE91dHB1dCwgU2ltcGxlQ2hhbmdlcywgVGVtcGxhdGVSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRm9ybUNvbnRyb2wsIEZvcm1Hcm91cCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnY2RrLWN1c3RvbS1zZWxlY3QnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9jdXN0b20tc2VsZWN0LmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9jdXN0b20tc2VsZWN0LmNvbXBvbmVudC5zY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIEN1c3RvbVNlbGVjdENvbXBvbmVudDxUPiBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzIHtcclxuXHJcbiAgQElucHV0KCkgb3B0aW9uczogVFtdID0gW10gYXMgYW55O1xyXG4gIEBJbnB1dCgpIHBsYWNlaG9sZGVyID0gJ1NlbGVjaW9uZSc7XHJcbiAgQElucHV0KCkgbW9kZWxQcm9wZXJ0eSA9ICcnO1xyXG4gIEBJbnB1dCgpIGxhYmVsID0gJyc7XHJcbiAgQElucHV0KCkgc2VsZWN0ZWRPcHRpb246IGFueTtcclxuICBASW5wdXQoKSBpc1ZhbGlkID0gZmFsc2U7XHJcbiAgQElucHV0KCkgaGFzTGVmdEljb24gPSBmYWxzZTtcclxuICBASW5wdXQoKSBoYXNEaXZpZGVyID0gZmFsc2U7XHJcbiAgQE91dHB1dCgpIHZhbHVlQ2hhbmdlcyA9IG5ldyBFdmVudEVtaXR0ZXI8VD4oKTtcclxuXHJcbiAgQENvbnRlbnRDaGlsZChcImN1c3RvbVRlbXBsYXRlXCIsIHsgc3RhdGljOiB0cnVlLCByZWFkOiBUZW1wbGF0ZVJlZiB9KVxyXG4gIGN1c3RvbVRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+ID0ge30gYXMgVGVtcGxhdGVSZWY8YW55PjtcclxuXHJcbiAgQENvbnRlbnRDaGlsZChcInNlbGVjdGVkVGVtcGxhdGVcIiwgeyBzdGF0aWM6IHRydWUsIHJlYWQ6IFRlbXBsYXRlUmVmIH0pXHJcbiAgc2VsZWN0ZWRUZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PiA9IHt9IGFzIFRlbXBsYXRlUmVmPGFueT47XHJcblxyXG4gIHNob3dPcHRpb25zID0gZmFsc2U7XHJcblxyXG4gIGZvcm1Hcm91cCA9IG5ldyBGb3JtR3JvdXAoe1xyXG4gICAgaW5wdXQ6IG5ldyBGb3JtQ29udHJvbCgnJylcclxuICB9KTtcclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLmZpbHRlck9wdGlvbnMoKTtcclxuICB9XHJcblxyXG4gIG5nT25DaGFuZ2VzKHsgc2VsZWN0ZWRPcHRpb24gfTogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xyXG4gICAgaWYgKHNlbGVjdGVkT3B0aW9uICYmICFzZWxlY3RlZE9wdGlvbi5maXJzdENoYW5nZSAmJiBzZWxlY3RlZE9wdGlvbi5jdXJyZW50VmFsdWUgIT09IHNlbGVjdGVkT3B0aW9uLnByZXZpb3VzVmFsdWUpIHRoaXMuZmlsdGVyT3B0aW9ucygpO1xyXG4gIH1cclxuXHJcbiAgZmlsdGVyT3B0aW9ucygpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLnNlbGVjdGVkT3B0aW9uKVxyXG4gICAgICB0aGlzLmZvcm1Hcm91cC5jb250cm9scy5pbnB1dC5zZXRWYWx1ZSh0aGlzLnNlbGVjdGVkT3B0aW9uW3RoaXMubW9kZWxQcm9wZXJ0eV0pO1xyXG4gIH1cclxuXHJcbiAgY2xvc2VQb3BvdmVyID0gKCkgPT4gdGhpcy5zaG93T3B0aW9ucyA9IGZhbHNlO1xyXG5cclxuICBnZXRPcHRpb24ob3B0aW9uOiBhbnkpIHtcclxuICAgIHRoaXMuc2VsZWN0ZWRPcHRpb24gPSBvcHRpb247XHJcbiAgICB0aGlzLnZhbHVlQ2hhbmdlcy5lbWl0KHRoaXMuc2VsZWN0ZWRPcHRpb24pO1xyXG4gICAgdGhpcy5mb3JtR3JvdXAuY29udHJvbHMuaW5wdXQuc2V0VmFsdWUob3B0aW9uW3RoaXMubW9kZWxQcm9wZXJ0eV0pO1xyXG4gICAgdGhpcy5jbG9zZVBvcG92ZXIoKTtcclxuICB9XHJcblxyXG59XHJcbiIsIjxuZy1jb250YWluZXIgKm5nSWY9XCJvcHRpb25zLmxlbmd0aFwiPlxyXG4gIDxkaXYgY2xhc3M9XCJjb250ZW50XCI+XHJcbiAgICA8ZGl2IGNsYXNzPVwicm93LWZvcm0gcG9zaXRpb24tcmVsYXRpdmUgbS0wXCIgI2NvbnRlbnQ+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJjb3VudHJ5LWZsYWdcIiAqbmdJZj1cInNlbGVjdGVkT3B0aW9uXCI+XHJcbiAgICAgICAgPG5nLWNvbnRhaW5lclxyXG4gICAgICAgICAgKm5nVGVtcGxhdGVPdXRsZXQ9XCJcclxuICAgICAgICAgICAgc2VsZWN0ZWRUZW1wbGF0ZTtcclxuICAgICAgICAgICAgY29udGV4dDogeyAkaW1wbGljaXQ6IHNlbGVjdGVkT3B0aW9uIH1cclxuICAgICAgICAgIFwiXHJcbiAgICAgICAgPjwvbmctY29udGFpbmVyPlxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIDxmb3JtIFtmb3JtR3JvdXBdPVwiZm9ybUdyb3VwXCI+XHJcbiAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAoZm9jdXMpPVwic2hvd09wdGlvbnMgPSB0cnVlXCJcclxuICAgICAgICAgIFthdHRyLnBsYWNlaG9sZGVyXT1cInBsYWNlaG9sZGVyXCJcclxuICAgICAgICAgIGZvcm1Db250cm9sTmFtZT1cImlucHV0XCJcclxuICAgICAgICAgIFtjbGFzcy5oYXMtbGVmdC1pY29uXT1cImhhc0xlZnRJY29uXCJcclxuICAgICAgICAgIFtjbGFzcy5ub3QtZW1wdHldPVwic2VsZWN0ZWRPcHRpb25bbW9kZWxQcm9wZXJ0eV1cIlxyXG4gICAgICAgICAgW2NsYXNzLnN1Y2Nlc3NdPVwiaXNWYWxpZFwiXHJcbiAgICAgICAgICByZWFkb25seVxyXG4gICAgICAgICAgaWQ9XCJzZWxlY3RcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPGxhYmVsIGZvcj1cInNlbGVjdFwiPnt7IGxhYmVsIH19PC9sYWJlbD5cclxuICAgICAgPC9mb3JtPlxyXG5cclxuICAgICAgPHNwYW4gY2xhc3M9XCJhcnJvd1wiPlxyXG4gICAgICAgIDxpIGNsYXNzPVwiYmkgYmktY2hldnJvbi1kb3duXCIgKm5nSWY9XCIhc2hvd09wdGlvbnNcIj48L2k+XHJcbiAgICAgICAgPGkgY2xhc3M9XCJiaSBiaS1jaGV2cm9uLXVwXCIgKm5nSWY9XCJzaG93T3B0aW9uc1wiPjwvaT5cclxuICAgICAgPC9zcGFuPlxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcblxyXG4gIDx1bFxyXG4gICAgY2xhc3M9XCJvcHRpb25zIG0tMFwiXHJcbiAgICAqY2RrUG9wb3Zlcj1cIlxyXG4gICAgICBzaG93T3B0aW9ucztcclxuICAgICAgdGFyZ2V0OiBjb250ZW50O1xyXG4gICAgICBjbG9zZTogY2xvc2VQb3BvdmVyO1xyXG4gICAgICBwb3NpdGlvbnM6ICdTQlNUJ1xyXG4gICAgXCJcclxuICA+XHJcbiAgICA8bmctY29udGFpbmVyXHJcbiAgICAgICpuZ0Zvcj1cIlxyXG4gICAgICAgIGxldCBpdGVtIG9mIG9wdGlvbnM7XHJcbiAgICAgICAgbGV0IGZpcnN0ID0gZmlyc3Q7XHJcbiAgICAgICAgbGV0IGxhc3QgPSBsYXN0O1xyXG4gICAgICAgIGxldCBpbmRleCA9IGluZGV4XHJcbiAgICAgIFwiXHJcbiAgICA+XHJcbiAgICAgIDxsaVxyXG4gICAgICAgIGNsYXNzPVwiY3VzdG9tLW9wdGlvblwiXHJcbiAgICAgICAgW2NsYXNzLmZpcnN0XT1cImZpcnN0XCJcclxuICAgICAgICBbY2xhc3MubGFzdF09XCJsYXN0XCJcclxuICAgICAgICAoY2xpY2spPVwiZ2V0T3B0aW9uKGl0ZW0pXCJcclxuICAgICAgPlxyXG4gICAgICAgIDxuZy1jb250YWluZXJcclxuICAgICAgICAgICpuZ1RlbXBsYXRlT3V0bGV0PVwiY3VzdG9tVGVtcGxhdGU7IGNvbnRleHQ6IHsgJGltcGxpY2l0OiBpdGVtLCBpbmRleCB9XCJcclxuICAgICAgICA+PC9uZy1jb250YWluZXI+XHJcbiAgICAgIDwvbGk+XHJcbiAgICAgIDxsaSBjbGFzcz1cImRpdmlkZXJcIiAqbmdJZj1cImhhc0RpdmlkZXIgJiYgaW5kZXggPT09IDFcIj48L2xpPlxyXG4gICAgPC9uZy1jb250YWluZXI+XHJcbiAgPC91bD5cclxuPC9uZy1jb250YWluZXI+XHJcbiJdfQ==