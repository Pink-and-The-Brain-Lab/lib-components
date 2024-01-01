import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CropperComponent } from './cropper.component';
import { AvatarModule } from '../avatar/avatar.module';
import { ImageCroppedEvent, ImageCropperModule } from 'ngx-image-cropper';
import { RangeModule } from '../range/range.module';
import { TooltipModule } from 'ng2-tooltip-directive';
import { IMAGE_DATA } from '../modal/interfaces/image-data.const';
import { MODAL_SERVICE_DATA } from '../modal/interfaces/modal-service-data.const';

const mockModalService = {
    getComponentResultData: (value: any) => {} 
};

describe('CropperComponent', () => {
  let component: CropperComponent;
  let fixture: ComponentFixture<CropperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CropperComponent ],
      imports: [
        AvatarModule,
        ImageCropperModule,
        RangeModule,
        TooltipModule,
      ],
      providers: [
        { provide: IMAGE_DATA, useValue: '' },
        { provide: MODAL_SERVICE_DATA, useValue: mockModalService },
      ],
    })
    .compileComponents();

    fixture = TestBed.createComponent(CropperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get cropped image', () => {
    const spy = spyOn(component.modalService, 'getComponentResultData');
    const mock = {
        objectUrl: 'data'
    } as ImageCroppedEvent;
    component.imageCropped(mock);
    expect(spy).toHaveBeenCalledWith('data');
  });

  it('should get cropped image with imageFile', () => {
    const spy = spyOn(component.modalService, 'getComponentResultData');
    component.imageFile = 'data';
    const mock = {
        objectUrl: null
    } as ImageCroppedEvent;
    component.imageCropped(mock);
    expect(spy).toHaveBeenCalledWith('data');
  });

  it('should get image rotation', () => {
    component.selectedRange('10');
    expect(component.imageRotation).toBe(0.4);
  });

  it('should rotate image', () => {
    component.rotateImage();
    expect(component.imageRotation).toBe(1);
  });

  it('should flip the image', () => {
    component.invertImage();
    expect(component.imageFlipH).toBeTruthy();
  });

  it('should zoom out image', () => {
    component.imageZoom = 5;
    component.zoomOutImage();
    expect(component.imageZoom).toBe(4);
  });

  it('should not zoom out image', () => {
    component.zoomOutImage();
    expect(component.imageZoom).toBe(1);
  });

  it('should zoom in image', () => {
    component.zoomInImage();
    expect(component.imageZoom).toBe(2);
  });

  it('should not zoom in image', () => {
    component.imageZoom = 10;
    component.zoomInImage();
    expect(component.imageZoom).toBe(10);
  });
});
