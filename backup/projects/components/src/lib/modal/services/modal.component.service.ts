import { Overlay, OverlayConfig, OverlayRef } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { ComponentRef, Injectable, Injector } from '@angular/core';
import { IModalConfig } from '../interfaces/modal-data.interface';
import { OVERLAY_DATA } from '../interfaces/overlay-data.const';
import { ModalOverlayRef } from '../modal-overlay-ref';
import { ModalComponent } from '../modal.component';
import { Subject } from 'rxjs';

@Injectable()
export class ModalService<T, K> {
  private readonly OVERLAY_CONFIG: IModalConfig<T, K> = {
    hasBackdrop: true,
    backdropClass: 'cdk-overlay-dark-backdrop',
    panelClass: 'tm-file-preview-dialog-panel',
    maxWidth: '100%',
    clickOutsideToClose: true,
    showCloseButton: true,
  };

  componentResultData = new Subject<T>();
  private overlayRef!: OverlayRef;

  constructor(private overlay: Overlay) {}

  private getOverlayConfig(config: IModalConfig<T, K>): OverlayConfig {
    const positionStrategy = this.overlay
      .position()
      .global()
      .centerHorizontally()
      .centerVertically();

    const overlayConfig = new OverlayConfig({
      scrollStrategy: this.overlay.scrollStrategies.block(),
      ...config,
      positionStrategy,
    });

    return overlayConfig;
  }

  private createOverlay(config: IModalConfig<T, K>) {
    const overlayConfig = this.getOverlayConfig(config);
    return this.overlay.create(overlayConfig);
  }

  private createInjector(
    config: IModalConfig<T, K>,
    dialogRef: ModalOverlayRef<T>
  ): Injector {
    return Injector.create({
      providers: [
        { provide: ModalOverlayRef, useValue: dialogRef },
        { provide: OVERLAY_DATA, useValue: config },
      ],
    });
  }

  open(modalConfig: IModalConfig<T, K>): ModalOverlayRef<T> {
    const dialogConfig = { ...this.OVERLAY_CONFIG, ...modalConfig };
    this.overlayRef = this.createOverlay(dialogConfig);
    const dialogRef = new ModalOverlayRef<T>(this.overlayRef);
    const injector = this.createInjector(dialogConfig, dialogRef);
    const portal = new ComponentPortal<ModalComponent<T, K>>(
      ModalComponent,
      null,
      injector
    );
    const containerRef: ComponentRef<ModalComponent<T, K>> =
      this.overlayRef.attach<ModalComponent<T, K>>(portal);
    this.listenBackdropClick(dialogConfig);
    containerRef.instance;
    return dialogRef;
  }

  listenBackdropClick(modalConfig: IModalConfig<T, K>) {
    if (modalConfig?.clickOutsideToClose) {
      this.overlayRef?.backdropClick().subscribe(() => {
        this.overlayRef?.dispose();
      });
    }
  }

  getComponentResultData(data: T) {
    this.componentResultData.next(data);
  }
}
