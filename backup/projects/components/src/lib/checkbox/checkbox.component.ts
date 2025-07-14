import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'cdk-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss']
})
export class CheckboxComponent {

  @Input() label = '';
  @Input() value = false;
  @Output() change = new EventEmitter<boolean>();

  id = new Date().getTime();
  
  form = new FormGroup({
    input: new FormControl(this.value)
  });

  get input(): boolean {
    return !!this.form.get('input')?.value;
  }

  changeValue() {
    this.change.emit(this.input);
  }

}
