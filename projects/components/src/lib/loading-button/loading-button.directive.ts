import { Directive, ElementRef, Input, OnChanges, Renderer2, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[cdkLoadingButton]'
})
export class LoadingButtonDirective implements OnChanges {

  loading = false;

  @Input() set cdkLoadingButton(value: boolean) {
    this.loading = value;
  }

  constructor(
    private element: ElementRef,
    private renderer: Renderer2,
  ) { }

  ngOnChanges({ cdkLoadingButton }: SimpleChanges): void {
    if (cdkLoadingButton.currentValue !== cdkLoadingButton.previousValue)
      this.updateButton();
  }

  updateButton() {
    if (this.loading) {
      this.element.nativeElement.blur();
      this.renderer.setStyle(this.element.nativeElement, "pointer-events", "none");
    } else {
      this.renderer.removeStyle(this.element.nativeElement, "pointer-events");
    }
  }

}
