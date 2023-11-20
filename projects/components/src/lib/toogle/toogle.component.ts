import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'cdk-toogle',
  templateUrl: './toogle.component.html',
  styleUrls: ['./toogle.component.scss']
})
export class ToogleComponent {

  @Input() toogleControl = false;
  @Input() disabled = false;
  @Output() toogleEvent = new EventEmitter<boolean>();

  toogle() {
    if (this.disabled) return;
    this.toogleControl = !this.toogleControl;
    this.toogleEvent.emit(this.toogleControl);
  }

}
