import { Component, Element, Event, EventEmitter, Host, Prop, Watch, h } from '@stencil/core';

@Component({
  tag: 'mlz-loading-button',
  styleUrl: 'mlz-loading-button.scss',
  scoped: true,
})
export class MlzLoadingButton {
  @Element() el!: HTMLElement;
  @Prop({ mutable: true, reflect: true }) isLoading = false;
  @Prop() disabled = false;
  @Prop() type: 'submit' | 'button' | 'reset' = 'button';
  @Prop() styleClass = 'btn-primary';
  @Event({ eventName: 'mlzClick', bubbles: true, composed: true })
  mlzClick: EventEmitter<MouseEvent>;

  private isLoadingStateChanges = false;
  
  @Watch('isLoading')
  onLoadingChange(newValue: boolean, oldValue: boolean): void {
    if (newValue !== oldValue) {
      this.updateButtonState();
      this.isLoadingStateChanges = true;
    }
  }

  componentDidLoad(): void {
    this.updateButtonState();
  }

  private updateButtonState(): void {
    const buttonElement = this.el.shadowRoot?.querySelector('button');
    if (!buttonElement) return;

    if (this.isLoading) {
      buttonElement.blur();
      buttonElement.style.pointerEvents = 'none';
      this.el.classList.add('is-loading-state');
    } else {
      buttonElement.style.removeProperty('pointer-events');
      this.el.classList.remove('is-loading-state');
    }
  }

  private handleClick = (event: MouseEvent): void => {
    if (this.disabled || this.isLoading) {
      event.stopPropagation();
      return;
    }
    this.mlzClick.emit(event);
  }

  private get styleClassDefinition() {
    return `btn ${this.styleClass}`;
  }

  render() {
    return (
      <Host
        class={this.disabled ? 'disabled' : ''}
      >
        <button
          type={this.type}
          disabled={this.disabled || this.isLoading}
          class={this.styleClassDefinition}
          onClick={this.handleClick}
        >
          {
            !this.isLoadingStateChanges ? null
            : <span
                class={{
                  'fadein': this.isLoading,
                  'fadeout': !this.isLoading,
                  'spinner': true
                }}
              >
                <mlz-spinner size="25"></mlz-spinner>
              </span>
          }
          <span
            class={{
              'fadein': !this.isLoading,
              'fadeout': this.isLoading,
            }}
          >
            <slot></slot>
          </span>
        </button>
      </Host>
    );
  }
}