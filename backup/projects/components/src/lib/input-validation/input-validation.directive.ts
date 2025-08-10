import { Directive, ElementRef, Host, OnDestroy, OnInit, Optional, Renderer2 } from '@angular/core';
import { FormControlName } from '@angular/forms';
import { Subject, takeUntil } from 'rxjs';
import { IInputValidation } from './input-validation.model';

@Directive({
  selector: '[cdkInputValidation]'
})
export class InputValidationDirective implements OnInit, OnDestroy {
  private destroy$ = new Subject<boolean>();

  private readonly responseMap: IInputValidation = {
    'INVALID': this.setErrorClass,
    'VALID': this.setSuccessClass,
  }

  constructor(
    @Host() @Optional() private formControl: FormControlName,
    private element: ElementRef,
    private renderer: Renderer2,
  ) { }

  ngOnInit(): void {
    this.formControl.control.statusChanges
    .pipe(
      takeUntil(this.destroy$)
    )
    .subscribe(
      (response: string) => {
        this.responseMap[response](this.element.nativeElement, this.renderer)
        this.hasValue(this.element.nativeElement, this.renderer);
      }
    );
  }

  setErrorClass(element: ElementRef, renderer: Renderer2): void {
    renderer.removeClass(element, 'success');
    renderer.addClass(element, 'invalid');
  }

  setSuccessClass(element: ElementRef, renderer: Renderer2): void {
    renderer.removeClass(element, 'invalid');
    renderer.addClass(element, 'success');
  }

  hasValue(element: ElementRef, renderer: Renderer2): void {
    const hasValue = !!this.element.nativeElement.value.length;

    if (hasValue) {
      renderer.addClass(element, 'not-empty');
      return;
    }

    renderer.removeClass(element, 'not-empty');
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }

}
