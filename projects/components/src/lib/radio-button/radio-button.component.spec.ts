import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { RadioButtomComponent } from './radio-button.component';

describe('RadioButtomComponent', () => {
  let component: RadioButtomComponent<any>;
  let fixture: ComponentFixture<RadioButtomComponent<any>>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RadioButtomComponent ],
      imports: [ FormsModule ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RadioButtomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    expect(component.disabled).toBeFalsy();
    expect(component.value).toBeUndefined();
    expect(component.name).toEqual('');
    expect(component.position).toEqual('start');
  });

  it('should register onChanges', () => {
    const mock = () => {};
    component.registerOnChange(mock);
    expect(component.onChange).toBeInstanceOf(Function);
  });

  it('should register onTouched', () => {
    const mock = () => {};
    component.registerOnTouched(mock);
    expect(component.onChange).toBeInstanceOf(Function);
  });

  it('should write value', () => {
    const mock = new Object();
    component.writeValue(mock);
    expect(component.model).toBe(mock);
  });

  it('should change value', () => {
    jest.spyOn(component, 'onChange' as any);
    jest.spyOn(component, 'onTouched' as any);
    component.changed('Dark');
    expect(component.model).toBeTruthy();
    expect(component.onChange).toBeCalledWith('Dark');
    expect(component.onTouched).toBeCalled();
  });

  it('should listen click event', () => {
    jest.spyOn(component, 'changed');
    const element = fixture.debugElement.query(By.css('label'));
    element.nativeElement.click();
    fixture.detectChanges();
    expect(component.changed).toHaveBeenCalled();
  });

  it('should listen keydown event with enter key', () => {
    jest.spyOn(component, 'changed');
    const event = new KeyboardEvent('keydown', { key: 'enter' })
    window.dispatchEvent(event);
    fixture.detectChanges();
    expect(component.changed).toHaveBeenCalled();
  });

  it('should listen keydown event with space key', () => {
    jest.spyOn(component, 'changed');
    const event = new KeyboardEvent('keydown', { key: 'space' })
    window.dispatchEvent(event);
    fixture.detectChanges();
    expect(component.changed).toHaveBeenCalled();
  });

  it('should listen keydown event and not call changed when disabled is true', () => {
    jest.spyOn(component, 'changed');
    component.disabled = true;
    const event = new KeyboardEvent('keydown', { key: 'enter' })
    window.dispatchEvent(event);
    fixture.detectChanges();
    expect(component.changed).not.toHaveBeenCalled();
  });
});
