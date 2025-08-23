import { AfterViewInit, Directive, ElementRef, EventEmitter, Input, Output, Renderer2 } from '@angular/core';

@Directive({
  selector: '[cdkPasswordValidation]'
})
export class PasswordValidationDirective implements AfterViewInit {

  private totalCharacters: HTMLElement| undefined;
  private number: HTMLElement| undefined;
  private letter: HTMLElement| undefined;
  private errorColor = '#ff5d4f';
  private successColor = '#00cb5f';

  @Input('cdkPasswordValidation') set password (value: string) {
    this.validatePassword(value);
  }

  @Output() isValid = new EventEmitter<boolean>();

  constructor(
    private element: ElementRef,
    private renderer: Renderer2,
  ) { }

  ngAfterViewInit(): void {
    const children = this.element.nativeElement.children;
    this.totalCharacters = children[0];
    this.number = children[1];
    this.letter = children[2];
  }

  private validatePassword(value: string) {
    const isLengthValid = value.length >= 8;
    const hasNumber = new RegExp(/\d/g).test(value);
    const hasLetter = new RegExp(/\D/g).test(value);
    this.colorizeElements(this.totalCharacters, isLengthValid);
    this.colorizeElements(this.number, hasNumber);
    this.colorizeElements(this.letter, hasLetter);
    this.isValid.emit(isLengthValid && hasNumber && hasLetter);
  }

  private colorizeElements(element: HTMLElement | undefined, value: boolean) {
    if (!element) return;
    if (value) { 
      this.renderer.setStyle(element, 'color', this.successColor);
      this.renderer.setStyle(element, 'font-weight', 'bold');
    } else {
      this.renderer.setStyle(element, 'color', this.errorColor);
    }
  }

}
