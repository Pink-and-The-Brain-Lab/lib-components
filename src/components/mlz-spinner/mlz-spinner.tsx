import { Component, Host, Prop, h } from '@stencil/core';

@Component({
  tag: 'mlz-spinner',
  styleUrl: 'mlz-spinner.scss',
  scoped: true,
})
export class MlzSpinner {
  @Prop() size = '';

  render() {
    return (
      <Host>
        <i
          role="status"
          class="spinner-border text-light"
          style={{
            width: `${this.size}px`,
            height: `${this.size}px`,
          }}
        ></i>
      </Host>
    );
  }
}
