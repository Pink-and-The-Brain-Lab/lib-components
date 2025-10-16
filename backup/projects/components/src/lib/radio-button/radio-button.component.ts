import { Component, forwardRef, HostListener, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'cdk-radio',
  templateUrl: './radio-button.component.html',
  styleUrls: ['./radio-button.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => RadioButtonComponent),
    multi: true,
  }]
})
export class RadioButtonComponent<T> implements ControlValueAccessor {

  @Input() disabled = false;
  @Input() value!: T;
  @Input() name = '';
  @Input() position: 'start' | 'end' = 'start';
  model!: T;
  id = `radio_${(Math.round(Math.random() * 1000000)).toString().padStart(10, '0')}`;
  onChange: Function = new Function();
  onTouched: Function = new Function();

  registerOnChange(fn: Function): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: Function): void {
    this.onTouched = fn;
  }

  writeValue(obj: any): void {
    this.model = obj;
  }

  @HostListener('click', ['$event'])
  @HostListener('window:keydown.enter', ['$event'])
  @HostListener('window:keydown.space', ['$event'])
  click(event: MouseEvent) {
    event.stopPropagation();
    event.preventDefault();
    if (this.disabled) return;
    this.changed(this.value);
  }

  changed(value: T) {
    this.model = value;
    this.onChange(this.model);
    this.onTouched();
  }

}
