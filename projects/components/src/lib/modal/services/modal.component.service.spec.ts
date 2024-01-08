import { TestBed } from '@angular/core/testing';
import { ModalService } from './modal.component.service';
import { Overlay } from '@angular/cdk/overlay';

describe('ModalService', () => {
  let service: ModalService<any, any>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ModalService,
        Overlay,
      ]
    });
    service = TestBed.inject(ModalService);
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
});
