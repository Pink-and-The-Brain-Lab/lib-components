import { AfterViewChecked, AfterViewInit, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { IModalConfig } from './interfaces/modal-data.interface';
import { ModalOverlayRef } from './modal-overlay-ref';
import { ModalService } from './services/modal.component.service';
import * as i0 from "@angular/core";
export declare class ModalComponent<T, K> implements AfterViewChecked, AfterViewInit, OnDestroy {
    dialogRef: ModalOverlayRef<T>;
    modalData: IModalConfig<T, K>;
    private cdref;
    private modalService;
    private destroy$;
    private modalContainer;
    private resultData;
    constructor(dialogRef: ModalOverlayRef<T>, modalData: IModalConfig<T, K>, cdref: ChangeDetectorRef, modalService: ModalService<T, K>);
    ngAfterViewInit(): void;
    ngAfterViewChecked(): void;
    ngOnDestroy(): void;
    accept(): void;
    decline(): void;
    close(): void;
    private createInjector;
    static ɵfac: i0.ɵɵFactoryDeclaration<ModalComponent<any, any>, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ModalComponent<any, any>, "cdk-modal", never, {}, {}, never, never, false, never>;
}
