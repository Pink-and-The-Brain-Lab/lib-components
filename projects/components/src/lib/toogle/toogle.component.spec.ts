import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ToogleComponent } from './toogle.component';

describe('ToogleComponent', () => {
  let component: ToogleComponent;
  let fixture: ComponentFixture<ToogleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToogleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ToogleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    expect(component.toogleControl).toBeFalsy();
    expect(component.disabled).toBeFalsy();
  });

  it('should toogle component value', () => {
    jest.spyOn(component.toogleEvent, 'emit');
    component.toogle();
    expect(component.toogleControl).toBeTruthy();
    expect(component.toogleEvent.emit).toBeCalled();
  });

  it('should not toogle component value when is disabled', () => {
    jest.spyOn(component.toogleEvent, 'emit');
    component.disabled = true;
    component.toogle();
    expect(component.toogleControl).toBeFalsy();
    expect(component.toogleEvent.emit).not.toBeCalled();
  });
});
