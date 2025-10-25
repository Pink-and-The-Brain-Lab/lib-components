import { TestBed } from '@angular/core/testing';
import { ModalOverlayRef } from './modal-overlay-ref';
import { OverlayRef } from '@angular/cdk/overlay';

const mockOverlayRef = {
  dispose: () => {}
} as OverlayRef;

describe('ModalOverlayRef', () => {
  let service: ModalOverlayRef<any>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ModalOverlayRef,
      ]
    });
    service = new ModalOverlayRef<any>(mockOverlayRef);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should close modal', () => {
    const spy = spyOn(service['overlayRef'], 'dispose');
    service.close();
    expect(spy).toHaveBeenCalled();
  });

  it('should accept without data', () => {
    const spy = spyOn(service, 'close');
    service.accept(null);
    expect(spy).toHaveBeenCalled();
  });

  it('should accept with data', () => {
    const spy = spyOn(service.accepted, 'next');
    service.accept({});
    expect(spy).toHaveBeenCalledWith({});
  });

  it('should decline', () => {
    const spy = spyOn(service.declined, 'next');
    service.decline();
    expect(spy).toHaveBeenCalled();
  });
});
