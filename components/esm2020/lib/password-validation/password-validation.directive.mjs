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
}
PasswordValidationDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: PasswordValidationDirective, deps: [{ token: i0.ElementRef }, { token: i0.Renderer2 }], target: i0.ɵɵFactoryTarget.Directive });
PasswordValidationDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "15.1.2", type: PasswordValidationDirective, selector: "[cdkPasswordValidation]", inputs: { password: ["cdkPasswordValidation", "password"] }, outputs: { isValid: "isValid" }, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: PasswordValidationDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[cdkPasswordValidation]'
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: i0.Renderer2 }]; }, propDecorators: { password: [{
                type: Input,
                args: ['cdkPasswordValidation']
            }], isValid: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFzc3dvcmQtdmFsaWRhdGlvbi5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jb21wb25lbnRzL3NyYy9saWIvcGFzc3dvcmQtdmFsaWRhdGlvbi9wYXNzd29yZC12YWxpZGF0aW9uLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQWlCLFNBQVMsRUFBYyxZQUFZLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBYSxNQUFNLGVBQWUsQ0FBQzs7QUFLN0csTUFBTSxPQUFPLDJCQUEyQjtJQVF0QyxJQUFvQyxRQUFRLENBQUUsS0FBYTtRQUN6RCxJQUFJLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDL0IsQ0FBQztJQUlELFlBQ1UsT0FBbUIsRUFDbkIsUUFBbUI7UUFEbkIsWUFBTyxHQUFQLE9BQU8sQ0FBWTtRQUNuQixhQUFRLEdBQVIsUUFBUSxDQUFXO1FBWHJCLGVBQVUsR0FBRyxTQUFTLENBQUM7UUFDdkIsaUJBQVksR0FBRyxTQUFTLENBQUM7UUFNdkIsWUFBTyxHQUFHLElBQUksWUFBWSxFQUFXLENBQUM7SUFLNUMsQ0FBQztJQUVMLGVBQWU7UUFDYixNQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUM7UUFDckQsSUFBSSxDQUFDLGVBQWUsR0FBRyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDbkMsSUFBSSxDQUFDLE1BQU0sR0FBRyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDMUIsSUFBSSxDQUFDLE1BQU0sR0FBRyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDNUIsQ0FBQztJQUVPLGdCQUFnQixDQUFDLEtBQWE7UUFDcEMsTUFBTSxhQUFhLEdBQUcsS0FBSyxDQUFDLE1BQU0sSUFBSSxDQUFDLENBQUM7UUFDeEMsTUFBTSxTQUFTLEdBQUcsSUFBSSxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ2hELE1BQU0sU0FBUyxHQUFHLElBQUksTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNoRCxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLGVBQWUsRUFBRSxhQUFhLENBQUMsQ0FBQztRQUMzRCxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxTQUFTLENBQUMsQ0FBQztRQUM5QyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxTQUFTLENBQUMsQ0FBQztRQUM5QyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxhQUFhLElBQUksU0FBUyxJQUFJLFNBQVMsQ0FBQyxDQUFDO0lBQzdELENBQUM7SUFFTyxnQkFBZ0IsQ0FBQyxPQUFnQyxFQUFFLEtBQWM7UUFDdkUsSUFBSSxDQUFDLE9BQU87WUFBRSxPQUFPO1FBQ3JCLElBQUksS0FBSyxFQUFFO1lBQ1QsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsT0FBTyxFQUFFLE9BQU8sRUFBRSxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7WUFDNUQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLENBQUMsQ0FBQztTQUN4RDthQUFNO1lBQ0wsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsT0FBTyxFQUFFLE9BQU8sRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7U0FDM0Q7SUFDSCxDQUFDOzt3SEE1Q1UsMkJBQTJCOzRHQUEzQiwyQkFBMkI7MkZBQTNCLDJCQUEyQjtrQkFIdkMsU0FBUzttQkFBQztvQkFDVCxRQUFRLEVBQUUseUJBQXlCO2lCQUNwQzt5SEFTcUMsUUFBUTtzQkFBM0MsS0FBSzt1QkFBQyx1QkFBdUI7Z0JBSXBCLE9BQU87c0JBQWhCLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBZnRlclZpZXdJbml0LCBEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE91dHB1dCwgUmVuZGVyZXIyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5ARGlyZWN0aXZlKHtcclxuICBzZWxlY3RvcjogJ1tjZGtQYXNzd29yZFZhbGlkYXRpb25dJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgUGFzc3dvcmRWYWxpZGF0aW9uRGlyZWN0aXZlIGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCB7XHJcblxyXG4gIHByaXZhdGUgdG90YWxDaGFyYWN0ZXJzOiBIVE1MRWxlbWVudHwgdW5kZWZpbmVkO1xyXG4gIHByaXZhdGUgbnVtYmVyOiBIVE1MRWxlbWVudHwgdW5kZWZpbmVkO1xyXG4gIHByaXZhdGUgbGV0dGVyOiBIVE1MRWxlbWVudHwgdW5kZWZpbmVkO1xyXG4gIHByaXZhdGUgZXJyb3JDb2xvciA9ICcjZmY1ZDRmJztcclxuICBwcml2YXRlIHN1Y2Nlc3NDb2xvciA9ICcjMDBjYjVmJztcclxuXHJcbiAgQElucHV0KCdjZGtQYXNzd29yZFZhbGlkYXRpb24nKSBzZXQgcGFzc3dvcmQgKHZhbHVlOiBzdHJpbmcpIHtcclxuICAgIHRoaXMudmFsaWRhdGVQYXNzd29yZCh2YWx1ZSk7XHJcbiAgfVxyXG5cclxuICBAT3V0cHV0KCkgaXNWYWxpZCA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIGVsZW1lbnQ6IEVsZW1lbnRSZWYsXHJcbiAgICBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsXHJcbiAgKSB7IH1cclxuXHJcbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xyXG4gICAgY29uc3QgY2hpbGRyZW4gPSB0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudC5jaGlsZHJlbjtcclxuICAgIHRoaXMudG90YWxDaGFyYWN0ZXJzID0gY2hpbGRyZW5bMF07XHJcbiAgICB0aGlzLm51bWJlciA9IGNoaWxkcmVuWzFdO1xyXG4gICAgdGhpcy5sZXR0ZXIgPSBjaGlsZHJlblsyXTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgdmFsaWRhdGVQYXNzd29yZCh2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICBjb25zdCBpc0xlbmd0aFZhbGlkID0gdmFsdWUubGVuZ3RoID49IDg7XHJcbiAgICBjb25zdCBoYXNOdW1iZXIgPSBuZXcgUmVnRXhwKC9cXGQvZykudGVzdCh2YWx1ZSk7XHJcbiAgICBjb25zdCBoYXNMZXR0ZXIgPSBuZXcgUmVnRXhwKC9cXEQvZykudGVzdCh2YWx1ZSk7XHJcbiAgICB0aGlzLmNvbG9yaXplRWxlbWVudHModGhpcy50b3RhbENoYXJhY3RlcnMsIGlzTGVuZ3RoVmFsaWQpO1xyXG4gICAgdGhpcy5jb2xvcml6ZUVsZW1lbnRzKHRoaXMubnVtYmVyLCBoYXNOdW1iZXIpO1xyXG4gICAgdGhpcy5jb2xvcml6ZUVsZW1lbnRzKHRoaXMubGV0dGVyLCBoYXNMZXR0ZXIpO1xyXG4gICAgdGhpcy5pc1ZhbGlkLmVtaXQoaXNMZW5ndGhWYWxpZCAmJiBoYXNOdW1iZXIgJiYgaGFzTGV0dGVyKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgY29sb3JpemVFbGVtZW50cyhlbGVtZW50OiBIVE1MRWxlbWVudCB8IHVuZGVmaW5lZCwgdmFsdWU6IGJvb2xlYW4pIHtcclxuICAgIGlmICghZWxlbWVudCkgcmV0dXJuO1xyXG4gICAgaWYgKHZhbHVlKSB7IFxyXG4gICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKGVsZW1lbnQsICdjb2xvcicsIHRoaXMuc3VjY2Vzc0NvbG9yKTtcclxuICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZShlbGVtZW50LCAnZm9udC13ZWlnaHQnLCAnYm9sZCcpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZShlbGVtZW50LCAnY29sb3InLCB0aGlzLmVycm9yQ29sb3IpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbn1cclxuIl19