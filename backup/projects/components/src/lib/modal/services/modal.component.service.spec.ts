import { fakeAsync, TestBed, tick } from '@angular/core/testing';
import { ModalService } from './modal.component.service';
import { Overlay, OverlayRef } from '@angular/cdk/overlay';
import { of } from 'rxjs';
import { IModalConfig } from '../interfaces/modal-data.interface';

describe('ModalService', () => {
  let service: ModalService<any, any>;
  let mockOverlayRef: any;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ModalService,
        Overlay,
      ]
    });
    mockOverlayRef = {
      backdropClick: jasmine.createSpy('backdropClick').and.returnValue(of(null)),
      dispose: jasmine.createSpy('dispose')
    };

    service = TestBed.inject(ModalService);
    service['overlayRef'] = mockOverlayRef;
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should create overlay config', () => {
    const overlayConfig = service['getOverlayConfig']({} as any);
    expect(overlayConfig.maxWidth).toBeUndefined();
  });

  it('should create overlay', () => {
    const overlay = TestBed.inject(Overlay);
    const spy = spyOn(overlay, 'create');
    service['createOverlay']({} as any);
    expect(spy).toHaveBeenCalled();
  });

  it('should create injector', () => {
    const injector = service['createInjector']({} as any, {} as any);
    expect(injector).toBeTruthy();
  });

  it('should open modal', () => {
    const open = service['open']({} as any);
    expect(open).toBeTruthy();
  });

  it('should emit result data', () => {
    const spy = spyOn(service.componentResultData, 'next');
    service.getComponentResultData({} as any);
    expect(spy).toHaveBeenCalledWith({});
  });

  it('should listen backdrop click', () => {
    service['overlayRef']?.backdropClick().subscribe(() => {
      service['overlayRef']?.dispose();
    });
    mockOverlayRef.backdropClick().subscribe();
    expect(mockOverlayRef.dispose).toHaveBeenCalled();
  });

  it('should subscribe to backdropClick and dispose the overlay when clickOutsideToClose is true', () => {
    const modalConfig: IModalConfig<any, any> = { clickOutsideToClose: true };
    service.listenBackdropClick(modalConfig);
    expect(mockOverlayRef.backdropClick).toHaveBeenCalled();
    expect(mockOverlayRef.dispose).toHaveBeenCalled();
  });

  it('should not subscribe to backdropClick when clickOutsideToClose is false', () => {
    const modalConfig: IModalConfig<any, any> = { clickOutsideToClose: false };
    service.listenBackdropClick(modalConfig);
    expect(mockOverlayRef.backdropClick).not.toHaveBeenCalled();
    expect(mockOverlayRef.dispose).not.toHaveBeenCalled();
  });

  it('should not subscribe to backdropClick when clickOutsideToClose is undefined', () => {
    const modalConfig: IModalConfig<any, any> = { clickOutsideToClose: undefined };
    service.listenBackdropClick(modalConfig);
    expect(mockOverlayRef.backdropClick).not.toHaveBeenCalled();
    expect(mockOverlayRef.dispose).not.toHaveBeenCalled();
  });
});
