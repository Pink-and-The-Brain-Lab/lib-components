import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'cdk-range',
  templateUrl: './range.component.html',
  styleUrls: ['./range.component.scss']
})
export class RangeComponent {
  @Input() min = 0;
  @Input() max = 100;
  @Input() step = 1;
  @Output() selectedRange = new EventEmitter<string>();

  change(event: Event) {
    const target = event.target as HTMLInputElement;
    this.selectedRange.emit(target.value)
  }
}
