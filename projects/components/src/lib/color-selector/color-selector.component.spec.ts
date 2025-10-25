import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ColorSelectorComponent } from './color-selector.component';

describe('ColorSelectorComponent', () => {
  let component: ColorSelectorComponent;
  let fixture: ComponentFixture<ColorSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColorSelectorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ColorSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit selected color', () => {
    const spy = spyOn(component.colorChanged, 'emit');
    component.selectColor('#8D6E62');
    expect(spy).toHaveBeenCalledWith('#8D6E62');
    expect(component.selectedColor).toBe('#8D6E62');
  });
});
