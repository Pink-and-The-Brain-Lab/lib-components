import { ComponentRef, Directive, ElementRef, HostListener, Input } from '@angular/core';
import { TooltipePlacement } from './tooltip-placement.type';
import { Overlay, OverlayPositionBuilder, OverlayRef } from '@angular/cdk/overlay';
import { getPositionRoles } from './tooltip-position';
import { TooltipComponent } from './tooltip.component';
import { ComponentPortal } from '@angular/cdk/portal';

@Directive({
  selector: '[cdkTooltip]'
})
export class TooltipDirective {
  @Input("cdkTooltip") text = "";
  @Input() hideTooltip = false;
  @Input() placement: TooltipePlacement = "auto";
  @Input() noMax = false;

  private overlayRef!: OverlayRef;

  constructor(
    private overlay: Overlay,
    private overlayPositionBuilder: OverlayPositionBuilder,
    private elementRef: ElementRef,
  ) {}

  @HostListener("mouseenter")
  show() {
    if (this.hideTooltip || !this.text.length || !this.text.trim().length) {
      return;
    }

    const positionStrategy = this.overlayPositionBuilder
      .flexibleConnectedTo(this.elementRef)
      .withPositions(getPositionRoles(this.placement))
      .withGrowAfterOpen(true);

    this.overlayRef = this.overlay.create({ positionStrategy });

    const tooltipRef: ComponentRef<TooltipComponent> =
      this.overlayRef.attach(new ComponentPortal(TooltipComponent));

    positionStrategy.positionChanges.subscribe(p => {
      tooltipRef.instance.placement = p.connectionPair.panelClass as any;
      tooltipRef.instance.noMax = this.noMax;
      tooltipRef.changeDetectorRef.detectChanges();
    });

    tooltipRef.instance.text = this.text;
  }

  @HostListener("mouseleave")
  hide() {
    if (this.overlayRef) {
      this.overlayRef.detach();
      this.overlayRef.dispose();
      this.overlayRef = undefined as any;
    }
  }

  ngOnDestroy() {
    if (this.overlayRef) {
      this.overlayRef.detach();
      this.overlayRef.dispose();
    }
  }
}
