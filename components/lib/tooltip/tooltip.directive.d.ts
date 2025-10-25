import { ElementRef } from '@angular/core';
import { TooltipePlacement } from './tooltip-placement.type';
import { Overlay, OverlayPositionBuilder } from '@angular/cdk/overlay';
import * as i0 from "@angular/core";
export declare class TooltipDirective {
    private overlay;
    private overlayPositionBuilder;
    private elementRef;
    text: string;
    hideTooltip: boolean;
    placement: TooltipePlacement;
    noMax: boolean;
    private overlayRef;
    constructor(overlay: Overlay, overlayPositionBuilder: OverlayPositionBuilder, elementRef: ElementRef);
    show(): void;
    hide(): void;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<TooltipDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<TooltipDirective, "[cdkTooltip]", never, { "text": { "alias": "cdkTooltip"; "required": false; }; "hideTooltip": { "alias": "hideTooltip"; "required": false; }; "placement": { "alias": "placement"; "required": false; }; "noMax": { "alias": "noMax"; "required": false; }; }, {}, never, never, false, never>;
}
