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
    private _isFullScreen;
    set cdkPopover(value: boolean);
    set target(value: HTMLElement);
    set positions(value: PositionOption);
    set isFullscreen(value: boolean);
    close: (event: MouseEvent) => void;
    constructor(overlay: Overlay, template: TemplateRef<object>, viewContainerRef: ViewContainerRef);
    open(): void;
    private createOverlay;
    static ɵfac: i0.ɵɵFactoryDeclaration<PopoverDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<PopoverDirective, "[cdkPopover]", never, { "cdkPopover": { "alias": "cdkPopover"; "required": false; }; "target": { "alias": "cdkPopoverTarget"; "required": false; }; "positions": { "alias": "cdkPopoverPositions"; "required": false; }; "isFullscreen": { "alias": "cdkPopoverFullScreen"; "required": false; }; "close": { "alias": "cdkPopoverClose"; "required": false; }; }, {}, never, never, false, never>;
}
