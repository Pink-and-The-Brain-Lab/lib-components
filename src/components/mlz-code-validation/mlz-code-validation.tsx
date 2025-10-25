import { Component, Event, EventEmitter, h, Listen, Prop, State } from '@stencil/core';

@Component({
  tag: 'mlz-code-validation',
  styleUrl: 'mlz-code-validation.scss',
  scoped: true,
})
export class MlzCodeValidation {
  @Prop() isLoading = false;
  @Event() validate: EventEmitter<string>;

  @State() digit0: string = '';
  @State() digit1: string = '';
  @State() digit2: string = '';
  @State() digit3: string = '';
  @State() digit4: string = '';
  @State() digit5: string = '';

  private inputRefs: HTMLInputElement[] = [];
  private focusedInputIndex = 0;
  private backspaceControl = 0;
  private keyupListener: any;
  private pasteListener: any;

  componentDidLoad(): void {
    this.setInputFocus(0);
    this.keyupListener = this.onKeyUpHandler.bind(this);
    this.pasteListener = this.onPasteHandler.bind(this);
    document.addEventListener('keyup', this.keyupListener);
    document.addEventListener('paste', this.pasteListener);
  }

  disconnectedCallback(): void {
    document.removeEventListener('keyup', this.keyupListener);
    document.removeEventListener('paste', this.pasteListener);
  }

  private handleInputChange(event: Event, index: number): void {
    const input = event.target as HTMLInputElement;
    const value = input.value;
    const sanitizedValue = value.replace(/[^0-9]/g, '').substring(0, 1);
    input.value = sanitizedValue;
    this[`digit${index}`] = sanitizedValue;

    if (sanitizedValue.length > 0) {
      this.setInputFocus(index + 1);
      this.backspaceControl = 0;
    }

    if (this.isFormValid()) {
      this.validateCode();
    }
  }

  private setInputFocus(index: number): void {
    if (this.inputRefs[index]) {
      this.inputRefs[index].focus();
      this.inputRefs[index].select();
    }
  }

  private setFocusedElement(index: number): void {
    this.focusedInputIndex = index;
  }

  private backToPreviousInput(): void {
    this.backspaceControl++;
    if (this.backspaceControl < 2) return;
    if (this.focusedInputIndex > 0 && this[`digit${this.focusedInputIndex}`].length > 0) {
      this[`digit${this.focusedInputIndex}`] = '';
    }
    
    if (this.focusedInputIndex > 0) {
      this[`digit${this.focusedInputIndex}`] = '';
      this.setInputFocus(this.focusedInputIndex - 1);
    }
    this.backspaceControl = 0;
  }

  private onKeyUpHandler(event: KeyboardEvent): void {
    if (event.key === 'Backspace') {
      this.backToPreviousInput();
    } else if (event.key === 'ArrowLeft' && this.focusedInputIndex > 0) {
      this.setInputFocus(this.focusedInputIndex - 1);
    } else if (event.key === 'ArrowRight' && this.focusedInputIndex < 5) {
      this.setInputFocus(this.focusedInputIndex + 1);
    }
  }

  private onPasteHandler(event: ClipboardEvent): void {
    event.preventDefault();
    const clipboardData = event.clipboardData;
    const pastedText = clipboardData?.getData('text');

    if (pastedText && pastedText.length) {
      this.inputPastedCode(pastedText);
    }
  }

  private inputPastedCode(code: string): void {
    const digits = code.split('').slice(0, 6);
    this.digit0 = digits[0] || '';
    this.digit1 = digits[1] || '';
    this.digit2 = digits[2] || '';
    this.digit3 = digits[3] || '';
    this.digit4 = digits[4] || '';
    this.digit5 = digits[5] || '';

    const lastFilledIndex = digits.length > 0 ? Math.min(digits.length - 1, 5) : 0;
    this.setInputFocus(lastFilledIndex);

    if (this.isFormValid()) {
      this.validateCode();
    }
  }

  private isFormValid(): boolean {
    return (
      this.digit0.length > 0 &&
      this.digit1.length > 0 &&
      this.digit2.length > 0 &&
      this.digit3.length > 0 &&
      this.digit4.length > 0 &&
      this.digit5.length > 0
    );
  }

  @Listen('mlzClick')
  handleAnyMlzClick() {
    this.validateCode();
  }

  private validateCode() {
    const code = `${this.digit0}${this.digit1}${this.digit2}${this.digit3}${this.digit4}${this.digit5}`;
    console.log(code)
    this.validate.emit(code);
  }

  render() {
    return (
      <div class="d-flex flex-column">
        <div class="d-flex align-items-center">
          <input
            type="text"
            maxlength="1"
            value={this.digit0}
            onInput={(event) => this.handleInputChange(event, 0)}
            onFocus={() => this.setFocusedElement(0)}
            ref={(el) => (this.inputRefs[0] = el as HTMLInputElement)}
            class="me-1"
          />
          <input
            type="text"
            maxlength="1"
            value={this.digit1}
            onInput={(event) => this.handleInputChange(event, 1)}
            onFocus={() => this.setFocusedElement(1)}
            ref={(el) => (this.inputRefs[1] = el as HTMLInputElement)}
            class="me-1 ms-1"
          />
          <input
            type="text"
            maxlength="1"
            value={this.digit2}
            onInput={(event) => this.handleInputChange(event, 2)}
            onFocus={() => this.setFocusedElement(2)}
            ref={(el) => (this.inputRefs[2] = el as HTMLInputElement)}
            class="me-1 ms-1"
          />
          <span class="me-1 ms-1"></span>
          <input
            type="text"
            maxlength="1"
            value={this.digit3}
            onInput={(event) => this.handleInputChange(event, 3)}
            onFocus={() => this.setFocusedElement(3)}
            ref={(el) => (this.inputRefs[3] = el as HTMLInputElement)}
            class="me-1 ms-1"
          />
          <input
            type="text"
            maxlength="1"
            value={this.digit4}
            onInput={(event) => this.handleInputChange(event, 4)}
            onFocus={() => this.setFocusedElement(4)}
            ref={(el) => (this.inputRefs[4] = el as HTMLInputElement)}
            class="me-1 ms-1"
          />
          <input
            type="text"
            maxlength="1"
            value={this.digit5}
            onInput={(event) => this.handleInputChange(event, 5)}
            onFocus={() => this.setFocusedElement(5)}
            ref={(el) => (this.inputRefs[5] = el as HTMLInputElement)}
            class=" ms-1"
          />
        </div>

        <div class="d-flex mt-2">
          <mlz-loading-button
            type="button"
            styleClass="btn-primary w-100"
            class="w-100"
            disabled={!this.isFormValid() || this.isLoading}
            is-loading={this.isLoading}
          >
            Validar Código
          </mlz-loading-button>
        </div>
      </div>
    );
  }
}
