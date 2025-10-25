import { Overlay } from '@angular/cdk/overlay';
import { IModalConfig } from '../interfaces/modal-data.interface';
import { ModalOverlayRef } from '../modal-overlay-ref';
import { Subject } from 'rxjs';
import * as i0 from "@angular/core";
export declare class ModalService<T, K> {
    private overlay;
    private readonly OVERLAY_CONFIG;
    componentResultData: Subject<T>;
    private overlayRef;
    constructor(overlay: Overlay);
    private getOverlayConfig;
    private createOverlay;
    private createInjector;
    open(modalConfig: IModalConfig<T, K>): ModalOverlayRef<T>;
    listenBackdropClick(modalConfig: IModalConfig<T, K>): void;
    getComponentResultData(data: T): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ModalService<any, any>, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<ModalService<any, any>>;
}
