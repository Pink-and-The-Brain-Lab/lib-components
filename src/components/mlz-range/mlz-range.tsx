import { Component, Element, Event, EventEmitter, Host, Prop, h } from '@stencil/core';

@Component({
  tag: 'mlz-range',
  styleUrl: 'mlz-range.scss',
  scoped: true,
})
export class MlzRange {
  @Element() hostElement: HTMLElement;
  @Prop() min: number = 0;
  @Prop() max: number = 100;
  @Prop() step: number = 1;
  @Prop({ mutable: true, reflect: true }) value: number = 0;
  @Event() selectedRange: EventEmitter<string>;

  private rangeInputRef: HTMLInputElement;

  private handleChange(event: Event): void {
    const target = event.target as HTMLInputElement;
    this.value = parseFloat(target.value);
    this.selectedRange.emit(target.value);
    this.onSliderInput(event);
  }

  componentDidLoad() {
    this.rangeInputRef = this.hostElement.shadowRoot?.querySelector('input[type="range"]');
    this.updateSliderAppearance();
  }

  onSliderInput(event: Event) {
    this.value = parseInt((event.target as HTMLInputElement).value, 10);
    this.updateSliderAppearance();
  }

  updateSliderAppearance() {
    if (this.rangeInputRef) {
      const percentage = ((this.value - this.min) / (this.max - this.min)) * 100;
      this.rangeInputRef.style.setProperty('--value', `${percentage}%`);
    }
  }

  render() {
    const initialPercentage = ((this.value - this.min) / (this.max - this.min)) * 100;
    
    return (
      <Host>
        <input
          type="range"
          min={this.min}
          max={this.max}
          step={this.step}
          value={this.value.toString()}
          onInput={(event) => this.handleChange(event)}
          onChange={(event) => this.handleChange(event)}
          style={{ '--value': `${initialPercentage}%` }}
        />
      </Host>
    );
  }
}
