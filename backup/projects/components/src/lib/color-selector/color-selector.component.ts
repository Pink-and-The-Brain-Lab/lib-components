import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'cdk-color-selector',
  templateUrl: './color-selector.component.html',
  styleUrls: ['./color-selector.component.scss'],
})
export class ColorSelectorComponent implements OnInit {
  @Output() colorChanged = new EventEmitter<string>();
  selectedColor = '#7A87CC';

  options1 = [
    '#7A87CC',
    '#9D7CDC',
    '#BA69C9',
    '#F06291',
    '#E9787A',
    '#FF8D5B',
    '#FFA826',
    '#F3D457',
  ];

  options2 = [
    '#C7D048',
    '#9CCB63',
    '#72C392',
    '#4FCFD7',
    '#7CDFE6',
    '#5CB1FF',
    '#43C0FF',
    '#8D6E62',
  ];

  ngOnInit(): void {
    this.selectColor(this.selectedColor);
  }

  selectColor(color: string) {
    this.selectedColor = color;
    this.colorChanged.emit(color);
  }
}
