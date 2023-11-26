import { ConnectedPosition, Overlay, OverlayConfig, OverlayRef } from '@angular/cdk/overlay';
import { TemplatePortal } from '@angular/cdk/portal';
import { Directive, Input, Optional, TemplateRef, ViewContainerRef } from '@angular/core';
import { PopoverPositions } from './popover-positions';
import { PositionOption } from './popover-positions.map';

@Directive({
  selector: '[cdkPopover]'
})
export class PopoverDirective {
  
  // @ts-ignore
  private overlayRef: OverlayRef;
  // @ts-ignore
  private _target: HTMLElement;
  private _positons: ConnectedPosition = PopoverPositions.getPosition('EBSB');
  private _isFullScreen = false;
  
  @Input('cdkPopover') set cdkPopover(value: boolean) {
    if (value) this.open();
    else if (this.overlayRef) this.overlayRef.dispose();
    
  }

  @Input('cdkPopoverTarget') set target(value: HTMLElement) {
    this._target = value;
  }

  @Optional() @Input('cdkPopoverPositions') set positions(value: PositionOption) {
    this._positons = PopoverPositions.getPosition(value);
  }

  @Optional() @Input('cdkPopoverFullScreen') set isFullscreen(value: boolean) {
    this._isFullScreen = value;
  }

  // @ts-ignore
  @Input('cdkPopoverClose') close: (event: MouseEvent) => void;

  constructor (
    private overlay: Overlay,
    private template: TemplateRef<object>,
    private viewContainerRef: ViewContainerRef,
  ) {}

  open() {
    const position = this.overlay.position().flexibleConnectedTo(
      this._target,
    ).withPositions([this._positons]);
    const config = new OverlayConfig({
      hasBackdrop: true,
      backdropClass: 'cdk-overlay-transparent-backdrop',
      scrollStrategy: this.overlay.scrollStrategies.block(),
      positionStrategy: position,
      maxHeight: this._isFullScreen ? 'auto' : '95%',
      height: this._isFullScreen ? '100%' : 'auto',
      width: this._isFullScreen ? '100%' : 'auto',
      disposeOnNavigation: true,
    });

    this.overlayRef = this.overlay.create(config);
    const component = new TemplatePortal(this.template, this.viewContainerRef);
    this.overlayRef.attach(component);

    this.overlayRef.backdropClick().subscribe(event => {
      this.cdkPopover = false;
      this.close(event);
    });
  }
}
