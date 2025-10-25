import { Directive, EventEmitter, Input, Output } from '@angular/core';
import * as i0 from "@angular/core";
export class PasswordValidationDirective {
    set password(value) {
        this.validatePassword(value);
    }
    constructor(element, renderer) {
        this.element = element;
        this.renderer = renderer;
        this.errorColor = '#ff5d4f';
        this.successColor = '#00cb5f';
        this.isValid = new EventEmitter();
    }
    ngAfterViewInit() {
        const children = this.element.nativeElement.children;
        this.totalCharacters = children[0];
        this.number = children[1];
        this.letter = children[2];
    }
    validatePassword(value) {
        const isLengthValid = value.length >= 8;
        const hasNumber = new RegExp(/\d/g).test(value);
        const hasLetter = new RegExp(/\D/g).test(value);
        this.colorizeElements(this.totalCharacters, isLengthValid);
        this.colorizeElements(this.number, hasNumber);
        this.colorizeElements(this.letter, hasLetter);
        this.isValid.emit(isLengthValid && hasNumber && hasLetter);
    }
    colorizeElements(element, value) {
        if (!element)
            return;
        if (value) {
            this.renderer.setStyle(element, 'color', this.successColor);
            this.renderer.setStyle(element, 'font-weight', 'bold');
        }
        else {
            this.renderer.setStyle(element, 'color', this.errorColor);
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.10", ngImport: i0, type: PasswordValidationDirective, deps: [{ token: i0.ElementRef }, { token: i0.Renderer2 }], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "18.2.10", type: PasswordValidationDirective, selector: "[cdkPasswordValidation]", inputs: { password: ["cdkPasswordValidation", "password"] }, outputs: { isValid: "isValid" }, ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.10", ngImport: i0, type: PasswordValidationDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[cdkPasswordValidation]'
                }]
        }], ctorParameters: () => [{ type: i0.ElementRef }, { type: i0.Renderer2 }], propDecorators: { password: [{
                type: Input,
                args: ['cdkPasswordValidation']
            }], isValid: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFzc3dvcmQtdmFsaWRhdGlvbi5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jb21wb25lbnRzL3NyYy9saWIvcGFzc3dvcmQtdmFsaWRhdGlvbi9wYXNzd29yZC12YWxpZGF0aW9uLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQWlCLFNBQVMsRUFBYyxZQUFZLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBYSxNQUFNLGVBQWUsQ0FBQzs7QUFLN0csTUFBTSxPQUFPLDJCQUEyQjtJQVF0QyxJQUFvQyxRQUFRLENBQUUsS0FBYTtRQUN6RCxJQUFJLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDL0IsQ0FBQztJQUlELFlBQ1UsT0FBbUIsRUFDbkIsUUFBbUI7UUFEbkIsWUFBTyxHQUFQLE9BQU8sQ0FBWTtRQUNuQixhQUFRLEdBQVIsUUFBUSxDQUFXO1FBWHJCLGVBQVUsR0FBRyxTQUFTLENBQUM7UUFDdkIsaUJBQVksR0FBRyxTQUFTLENBQUM7UUFNdkIsWUFBTyxHQUFHLElBQUksWUFBWSxFQUFXLENBQUM7SUFLNUMsQ0FBQztJQUVMLGVBQWU7UUFDYixNQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUM7UUFDckQsSUFBSSxDQUFDLGVBQWUsR0FBRyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDbkMsSUFBSSxDQUFDLE1BQU0sR0FBRyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDMUIsSUFBSSxDQUFDLE1BQU0sR0FBRyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDNUIsQ0FBQztJQUVPLGdCQUFnQixDQUFDLEtBQWE7UUFDcEMsTUFBTSxhQUFhLEdBQUcsS0FBSyxDQUFDLE1BQU0sSUFBSSxDQUFDLENBQUM7UUFDeEMsTUFBTSxTQUFTLEdBQUcsSUFBSSxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ2hELE1BQU0sU0FBUyxHQUFHLElBQUksTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNoRCxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLGVBQWUsRUFBRSxhQUFhLENBQUMsQ0FBQztRQUMzRCxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxTQUFTLENBQUMsQ0FBQztRQUM5QyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxTQUFTLENBQUMsQ0FBQztRQUM5QyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxhQUFhLElBQUksU0FBUyxJQUFJLFNBQVMsQ0FBQyxDQUFDO0lBQzdELENBQUM7SUFFTyxnQkFBZ0IsQ0FBQyxPQUFnQyxFQUFFLEtBQWM7UUFDdkUsSUFBSSxDQUFDLE9BQU87WUFBRSxPQUFPO1FBQ3JCLElBQUksS0FBSyxFQUFFLENBQUM7WUFDVixJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxPQUFPLEVBQUUsT0FBTyxFQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztZQUM1RCxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBQ3pELENBQUM7YUFBTSxDQUFDO1lBQ04sSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsT0FBTyxFQUFFLE9BQU8sRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDNUQsQ0FBQztJQUNILENBQUM7K0dBNUNVLDJCQUEyQjttR0FBM0IsMkJBQTJCOzs0RkFBM0IsMkJBQTJCO2tCQUh2QyxTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSx5QkFBeUI7aUJBQ3BDO3VHQVNxQyxRQUFRO3NCQUEzQyxLQUFLO3VCQUFDLHVCQUF1QjtnQkFJcEIsT0FBTztzQkFBaEIsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFmdGVyVmlld0luaXQsIERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT3V0cHV0LCBSZW5kZXJlcjIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBEaXJlY3RpdmUoe1xyXG4gIHNlbGVjdG9yOiAnW2Nka1Bhc3N3b3JkVmFsaWRhdGlvbl0nXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBQYXNzd29yZFZhbGlkYXRpb25EaXJlY3RpdmUgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0IHtcclxuXHJcbiAgcHJpdmF0ZSB0b3RhbENoYXJhY3RlcnM6IEhUTUxFbGVtZW50fCB1bmRlZmluZWQ7XHJcbiAgcHJpdmF0ZSBudW1iZXI6IEhUTUxFbGVtZW50fCB1bmRlZmluZWQ7XHJcbiAgcHJpdmF0ZSBsZXR0ZXI6IEhUTUxFbGVtZW50fCB1bmRlZmluZWQ7XHJcbiAgcHJpdmF0ZSBlcnJvckNvbG9yID0gJyNmZjVkNGYnO1xyXG4gIHByaXZhdGUgc3VjY2Vzc0NvbG9yID0gJyMwMGNiNWYnO1xyXG5cclxuICBASW5wdXQoJ2Nka1Bhc3N3b3JkVmFsaWRhdGlvbicpIHNldCBwYXNzd29yZCAodmFsdWU6IHN0cmluZykge1xyXG4gICAgdGhpcy52YWxpZGF0ZVBhc3N3b3JkKHZhbHVlKTtcclxuICB9XHJcblxyXG4gIEBPdXRwdXQoKSBpc1ZhbGlkID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgZWxlbWVudDogRWxlbWVudFJlZixcclxuICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMixcclxuICApIHsgfVxyXG5cclxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XHJcbiAgICBjb25zdCBjaGlsZHJlbiA9IHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50LmNoaWxkcmVuO1xyXG4gICAgdGhpcy50b3RhbENoYXJhY3RlcnMgPSBjaGlsZHJlblswXTtcclxuICAgIHRoaXMubnVtYmVyID0gY2hpbGRyZW5bMV07XHJcbiAgICB0aGlzLmxldHRlciA9IGNoaWxkcmVuWzJdO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSB2YWxpZGF0ZVBhc3N3b3JkKHZhbHVlOiBzdHJpbmcpIHtcclxuICAgIGNvbnN0IGlzTGVuZ3RoVmFsaWQgPSB2YWx1ZS5sZW5ndGggPj0gODtcclxuICAgIGNvbnN0IGhhc051bWJlciA9IG5ldyBSZWdFeHAoL1xcZC9nKS50ZXN0KHZhbHVlKTtcclxuICAgIGNvbnN0IGhhc0xldHRlciA9IG5ldyBSZWdFeHAoL1xcRC9nKS50ZXN0KHZhbHVlKTtcclxuICAgIHRoaXMuY29sb3JpemVFbGVtZW50cyh0aGlzLnRvdGFsQ2hhcmFjdGVycywgaXNMZW5ndGhWYWxpZCk7XHJcbiAgICB0aGlzLmNvbG9yaXplRWxlbWVudHModGhpcy5udW1iZXIsIGhhc051bWJlcik7XHJcbiAgICB0aGlzLmNvbG9yaXplRWxlbWVudHModGhpcy5sZXR0ZXIsIGhhc0xldHRlcik7XHJcbiAgICB0aGlzLmlzVmFsaWQuZW1pdChpc0xlbmd0aFZhbGlkICYmIGhhc051bWJlciAmJiBoYXNMZXR0ZXIpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBjb2xvcml6ZUVsZW1lbnRzKGVsZW1lbnQ6IEhUTUxFbGVtZW50IHwgdW5kZWZpbmVkLCB2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgaWYgKCFlbGVtZW50KSByZXR1cm47XHJcbiAgICBpZiAodmFsdWUpIHsgXHJcbiAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUoZWxlbWVudCwgJ2NvbG9yJywgdGhpcy5zdWNjZXNzQ29sb3IpO1xyXG4gICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKGVsZW1lbnQsICdmb250LXdlaWdodCcsICdib2xkJyk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKGVsZW1lbnQsICdjb2xvcicsIHRoaXMuZXJyb3JDb2xvcik7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxufVxyXG4iXX0=