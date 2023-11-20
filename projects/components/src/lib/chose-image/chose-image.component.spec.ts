import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ChoseImageComponent } from './chose-image.component';

describe('ChoseImageComponent', () => {
  let component: ChoseImageComponent;
  let fixture: ComponentFixture<ChoseImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChoseImageComponent ],
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChoseImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should trigger input file click', () => {
    const spy = jest.spyOn(component.inputFile.nativeElement, 'click');
    component.selectFile();
    expect(spy).toHaveBeenCalled();
  });

  it('should get a file and convert into blob url', () => {
    const spy = jest.spyOn(component.imageFile, 'emit');
    const event = {
      target: { files: [ new File([], 'file') ] }
    } as unknown as Event;
    component.getFile(event);
    setTimeout(() => {
      expect(spy).toHaveBeenCalled(); 
    }, 100);
    jest.useFakeTimers();
  });
});
