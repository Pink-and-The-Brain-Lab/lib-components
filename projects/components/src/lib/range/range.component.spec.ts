import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RangeComponent } from './range.component';

describe('RangeComponent', () => {
  let component: RangeComponent;
  let fixture: ComponentFixture<RangeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RangeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit changed value', () => {
    const spy = jest.spyOn(component.selectedRange, 'emit');
    const event = {
      target: { value: '50' }
    } as unknown as Event;
    component.change(event);
    expect(spy).toBeCalledWith('50')
  });
});
