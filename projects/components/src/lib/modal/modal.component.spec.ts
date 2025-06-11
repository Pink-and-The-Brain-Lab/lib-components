import { ComponentFixture, TestBed } from '@angular/core/testing';
import {
  ChangeDetectorRef,
  Component,
} from '@angular/core';
import { Subject } from 'rxjs';
import { ModalComponent } from './modal.component';
import { ModalOverlayRef } from './modal-overlay-ref';
import { ModalService } from './services/modal.component.service';
import { IModalConfig } from './interfaces/modal-data.interface';
import { OVERLAY_DATA } from './interfaces/overlay-data.const';
import { IMAGE_DATA } from './interfaces/image-data.const';
import { MODAL_SERVICE_DATA } from './interfaces/modal-service-data.const';

@Component({
  template: '<div #modalContainer></div>',
})
class TestHostComponent {}

describe('ModalComponent', () => {
  let component: ModalComponent<any, any>;
  let fixture: ComponentFixture<ModalComponent<any, any>>;
  let mockDialogRef: jasmine.SpyObj<ModalOverlayRef<any>>;
  let mockModalService: jasmine.SpyObj<ModalService<any, any>>;
  let mockChangeDetectorRef: jasmine.SpyObj<ChangeDetectorRef>;
  let mockModalData: IModalConfig<any, any>;

  beforeEach(async () => {
    mockDialogRef = jasmine.createSpyObj('ModalOverlayRef', [
      'accept',
      'decline',
      'close',
    ]);
    mockModalService = jasmine.createSpyObj('ModalService', [
      'componentResultData',
    ]);
    mockChangeDetectorRef = jasmine.createSpyObj('ChangeDetectorRef', [
      'detectChanges',
    ]);
    mockModalData = {
      component: TestHostComponent,
      data: { someData: 'test' },
    };

    await TestBed.configureTestingModule({
      declarations: [ModalComponent, TestHostComponent],
      providers: [
        { provide: ModalOverlayRef, useValue: mockDialogRef },
        { provide: ModalService, useValue: mockModalService },
        { provide: ChangeDetectorRef, useValue: mockChangeDetectorRef },
        { provide: OVERLAY_DATA, useValue: mockModalData },
      ],
    }).compileComponents();
    
    mockModalService.componentResultData = new Subject<any>(); 
    fixture = TestBed.createComponent(ModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should create the component inside modalContainer', () => {
    const createComponentSpy = spyOn(
      component['modalContainer'],
      'createComponent'
    );
    component.ngAfterViewInit();
    expect(createComponentSpy).toHaveBeenCalled();
  });

  it('should get result data', () => {
    mockModalService.componentResultData.next('test')
    expect(component['resultData']).toBe('test');
  });

  it('should complete the destroy$ subject', () => {
    const nextSpy = spyOn(component['destroy$'], 'next');
    const unsubscribeSpy = spyOn(component['destroy$'], 'unsubscribe');
    component.ngOnDestroy();
    expect(nextSpy).toHaveBeenCalledWith(true);
    expect(unsubscribeSpy).toHaveBeenCalled();
  });

  it('should call accept on dialogRef with resultData', () => {
    component['resultData'] = { someResult: 'test' };
    component.accept();
    expect(mockDialogRef.accept).toHaveBeenCalledWith({ someResult: 'test' });
  });

  it('should call decline on dialogRef', () => {
    component.decline();
    expect(mockDialogRef.decline).toHaveBeenCalled();
  });

  it('should call close on dialogRef', () => {
    component.close();
    expect(mockDialogRef.close).toHaveBeenCalled();
  });

  it('should create an injector with IMAGE_DATA and MODAL_SERVICE_DATA', () => {
    const injector = component['createInjector']();
    const imageData = injector.get(IMAGE_DATA);
    const modalServiceData = injector.get(MODAL_SERVICE_DATA);

    expect(imageData).toEqual(mockModalData.data);
    expect(modalServiceData).toEqual(mockModalService as any);
  });
});
