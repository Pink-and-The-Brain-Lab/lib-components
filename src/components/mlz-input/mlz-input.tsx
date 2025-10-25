import { Component, Prop, State, Event, EventEmitter, h } from '@stencil/core';

@Component({
  tag: 'mlz-input',
  styleUrl: 'mlz-input.scss',
  scoped: true,
})
export class MlzInput {
  @Prop({ mutable: true }) value: string = '';
  @Prop() status: 'valid' | 'invalid' | 'neutral' = 'neutral';
  @Prop() label: string;
  @Prop() name: string;
  @Prop() type: 'text' | 'password' = 'text';
  @State() isTouched: boolean = false;
  @State() isPasswordVisible: boolean = false;
  @Event() valueChange: EventEmitter<string>;
  @Event() inputBlur: EventEmitter<void>;
  
  private onInput(event: Event) {
    const input = event.target as HTMLInputElement;
    this.value = input.value;
    this.valueChange.emit(this.value);
  }

  private onBlur() {
    this.isTouched = true;
    this.inputBlur.emit();
  }

  private togglePasswordVisibility() {
    this.isPasswordVisible = !this.isPasswordVisible;
  }

  render() {
    const validationClass = this.isTouched && this.status !== 'neutral'
      ? (this.status === 'valid' ? 'success' : 'invalid')
      : '';
    const notEmptyClass = this.value.length > 0 ? 'not-empty' : '';
    const showErrorClass = this.isTouched && this.status === 'invalid' ? '' : 'hidden';
    const inputType = this.type === 'password' && !this.isPasswordVisible ? 'password' : 'text';

    return (
      <div class="row-form right-icon w-100">
        <input
          type={inputType}
          name={this.name}
          value={this.value}
          onInput={(e) => this.onInput(e)}
          onBlur={() => this.onBlur()}
          class={`input-field ${validationClass} ${notEmptyClass}`}
        />
        <label class="input-label">{this.label}</label>

        {this.type === 'password' && (
          <i
            class={`password-toggle-icon ${this.isPasswordVisible ? 'bi bi-eye-slash' : 'bi bi-eye'}`}
            onClick={() => this.togglePasswordVisibility()}
          ></i>
        )}

        <small class={`error-message ${showErrorClass}`}>
          <slot name="error-message"></slot>
        </small>
      </div>
    );
  }
}
