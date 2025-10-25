import { Component, Event, EventEmitter, State, h } from '@stencil/core';

@Component({
  tag: 'mlz-color-selector',
  styleUrl: 'mlz-color-selector.scss',
  scoped: true,
})
export class MlzColorSelector {
  @Event() colorChanged: EventEmitter<string>;
  @State() selectedColor: string = '#7A87CC';

  options1: string[] = [
    '#7A87CC',
    '#9D7CDC',
    '#BA69C9',
    '#F06291',
    '#E9787A',
    '#FF8D5B',
    '#FFA826',
    '#F3D457',
  ];

  options2: string[] = [
    '#C7D048',
    '#9CCB63',
    '#72C392',
    '#4FCFD7',
    '#7CDFE6',
    '#5CB1FF',
    '#43C0FF',
    '#8D6E62',
  ];

  componentWillLoad(): void {
    this.selectColor(this.selectedColor);
  }

  private selectColor(color: string): void {
    this.selectedColor = color;
    this.colorChanged.emit(color);
  }

  private renderColorOptions(options: string[]) {
    return options.map(item => (
      <span
        class="color-option d-flex justify-content-center align-items-center"
        style={{ backgroundColor: item }}
        onClick={() => this.selectColor(item)}
      >
        {this.selectedColor === item && (
          <i class="bi bi-check-lg color-option-check"></i>
        )}
      </span>
    ));
  }

  render() {
    return (
      <div class="d-flex flex-column">
        <div class="d-flex align-items-center justify-content-between mt-4">
          {this.renderColorOptions(this.options1)}
        </div>

        <div class="d-flex align-items-center justify-content-between mt-4">
          {this.renderColorOptions(this.options2)}
        </div>
      </div>
    );
  }
}
