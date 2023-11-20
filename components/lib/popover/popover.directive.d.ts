import { Overlay } from '@angular/cdk/overlay';
import { TemplateRef, ViewContainerRef } from '@angular/core';
import { PositionOption } from './popover-positions.map';
import * as i0 from "@angular/core";
export declare class PopoverDirective {
    private overlay;
    private template;
    private viewContainerRef;
    private overlayRef;
    private _target;
    private _positons;
    set cdkPopover(value: boolean);
    set target(value: HTMLElement);
    set positions(value: PositionOption);
    close: (event: MouseEvent) => void;
    constructor(overlay: Overlay, template: TemplateRef<object>, viewContainerRef: ViewContainerRef);
    open(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<PopoverDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<PopoverDirective, "[cdkPopover]", never, { "cdkPopover": "cdkPopover"; "target": "cdkPopoverTarget"; "positions": "cdkPopoverPositions"; "close": "cdkPopoverClose"; }, {}, never, never, false, never>;
}
