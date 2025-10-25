import { ElementRef, OnChanges, Renderer2, SimpleChanges } from '@angular/core';
import * as i0 from "@angular/core";
export declare class LoadingButtonDirective implements OnChanges {
    private element;
    private renderer;
    loading: boolean;
    set cdkLoadingButton(value: boolean);
    constructor(element: ElementRef, renderer: Renderer2);
    ngOnChanges({ cdkLoadingButton }: SimpleChanges): void;
    updateButton(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<LoadingButtonDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<LoadingButtonDirective, "[cdkLoadingButton]", never, { "cdkLoadingButton": { "alias": "cdkLoadingButton"; "required": false; }; }, {}, never, never, false, never>;
}
