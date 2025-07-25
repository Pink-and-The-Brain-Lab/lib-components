import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, NG_VALUE_ACCESSOR } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { RadioButtonComponent } from './radio-button.component';

describe('RadioButtonComponent', () => {
  let component: RadioButtonComponent<any>;
  let fixture: ComponentFixture<RadioButtonComponent<any>>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RadioButtonComponent ],
      imports: [ FormsModule ],
    })
    .compileComponents();

    fixture = TestBed.createComponent(RadioButtonComponent);
    component = fixture.componentInstance;
    fixture.debugElement.injector.get(NG_VALUE_ACCESSOR);
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
    spyOn(component, 'onChange' as any);
    spyOn(component, 'onTouched' as any);
    component.changed('Dark');
    expect(component.model).toBeTruthy();
    expect(component.onChange).toHaveBeenCalledWith('Dark');
    expect(component.onTouched).toHaveBeenCalled();
  });

  it('should listen click event', () => {
    spyOn(component, 'changed');
    const element = fixture.debugElement.query(By.css('label'));
    element.nativeElement.click();
    fixture.detectChanges();
    expect(component.changed).toHaveBeenCalled();
  });

  it('should listen keydown event with enter key', () => {
    spyOn(component, 'changed');
    const event = new KeyboardEvent('keydown', { key: 'enter' })
    window.dispatchEvent(event);
    fixture.detectChanges();
    expect(component.changed).toHaveBeenCalled();
  });

  it('should listen keydown event with space key', () => {
    spyOn(component, 'changed');
    const event = new KeyboardEvent('keydown', { key: 'space' })
    window.dispatchEvent(event);
    fixture.detectChanges();
    expect(component.changed).toHaveBeenCalled();
  });

  it('should listen keydown event and not call changed when disabled is true', () => {
    spyOn(component, 'changed');
    component.disabled = true;
    const event = new KeyboardEvent('keydown', { key: 'enter' })
    window.dispatchEvent(event);
    fixture.detectChanges();
    expect(component.changed).not.toHaveBeenCalled();
  });
});
