import { r as registerInstance, d as createEvent, h } from './index-DFHlXP_q.js';

const mlzCodeValidationCss = ".sc-mlz-code-validation-h{display:inline-block}input.sc-mlz-code-validation{padding:10px;width:37px;height:48px;border:1px solid var(--border);border-radius:4px;font-weight:400;font-size:1.25em;line-height:1.5em;text-align:center;color:var(--emphasis-high);background-color:var(--surface-5);text-transform:uppercase}span.sc-mlz-code-validation{width:8px;height:1px;display:block;background-color:var(--support-9)}";

const MlzCodeValidation = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.validate = createEvent(this, "validate", 7);
    }
    isLoading = false;
    validate;
    digit0 = '';
    digit1 = '';
    digit2 = '';
    digit3 = '';
    digit4 = '';
    digit5 = '';
    inputRefs = [];
    focusedInputIndex = 0;
    backspaceControl = 0;
    keyupListener;
    pasteListener;
    componentDidLoad() {
        this.setInputFocus(0);
        this.keyupListener = this.onKeyUpHandler.bind(this);
        this.pasteListener = this.onPasteHandler.bind(this);
        document.addEventListener('keyup', this.keyupListener);
        document.addEventListener('paste', this.pasteListener);
    }
    disconnectedCallback() {
        document.removeEventListener('keyup', this.keyupListener);
        document.removeEventListener('paste', this.pasteListener);
    }
    handleInputChange(event, index) {
        const input = event.target;
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
    setInputFocus(index) {
        if (this.inputRefs[index]) {
            this.inputRefs[index].focus();
            this.inputRefs[index].select();
        }
    }
    setFocusedElement(index) {
        this.focusedInputIndex = index;
    }
    backToPreviousInput() {
        this.backspaceControl++;
        if (this.backspaceControl < 2)
            return;
        if (this.focusedInputIndex > 0 && this[`digit${this.focusedInputIndex}`].length > 0) {
            this[`digit${this.focusedInputIndex}`] = '';
        }
        if (this.focusedInputIndex > 0) {
            this[`digit${this.focusedInputIndex}`] = '';
            this.setInputFocus(this.focusedInputIndex - 1);
        }
        this.backspaceControl = 0;
    }
    onKeyUpHandler(event) {
        if (event.key === 'Backspace') {
            this.backToPreviousInput();
        }
        else if (event.key === 'ArrowLeft' && this.focusedInputIndex > 0) {
            this.setInputFocus(this.focusedInputIndex - 1);
        }
        else if (event.key === 'ArrowRight' && this.focusedInputIndex < 5) {
            this.setInputFocus(this.focusedInputIndex + 1);
        }
    }
    onPasteHandler(event) {
        event.preventDefault();
        const clipboardData = event.clipboardData;
        const pastedText = clipboardData?.getData('text');
        if (pastedText && pastedText.length) {
            this.inputPastedCode(pastedText);
        }
    }
    inputPastedCode(code) {
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
    isFormValid() {
        return (this.digit0.length > 0 &&
            this.digit1.length > 0 &&
            this.digit2.length > 0 &&
            this.digit3.length > 0 &&
            this.digit4.length > 0 &&
            this.digit5.length > 0);
    }
    handleAnyMlzClick() {
        this.validateCode();
    }
    validateCode() {
        const code = `${this.digit0}${this.digit1}${this.digit2}${this.digit3}${this.digit4}${this.digit5}`;
        console.log(code);
        this.validate.emit(code);
    }
    render() {
        return (h("div", { key: '6e0e71e99c8923c9b6d17db36aee48c51f27a634', class: "d-flex flex-column" }, h("div", { key: '097dc768f1348589b98f81e8dca0dbb169e1ef5c', class: "d-flex align-items-center" }, h("input", { key: 'ad607bbe5f3a7f00ba5a0c9593749ab5832cab65', type: "text", maxlength: "1", value: this.digit0, onInput: (event) => this.handleInputChange(event, 0), onFocus: () => this.setFocusedElement(0), ref: (el) => (this.inputRefs[0] = el), class: "me-1" }), h("input", { key: '3154f274cb4f2f9f6779246621935a22994f4bd8', type: "text", maxlength: "1", value: this.digit1, onInput: (event) => this.handleInputChange(event, 1), onFocus: () => this.setFocusedElement(1), ref: (el) => (this.inputRefs[1] = el), class: "me-1 ms-1" }), h("input", { key: 'd9a6b1d49665f7e1a7231a5bfac646587bef7b50', type: "text", maxlength: "1", value: this.digit2, onInput: (event) => this.handleInputChange(event, 2), onFocus: () => this.setFocusedElement(2), ref: (el) => (this.inputRefs[2] = el), class: "me-1 ms-1" }), h("span", { key: '8c43317d42ca1201b35bb53dec62d20cb251573e', class: "me-1 ms-1" }), h("input", { key: '87eaf3eef9da7631f009adf354dd00383be6934c', type: "text", maxlength: "1", value: this.digit3, onInput: (event) => this.handleInputChange(event, 3), onFocus: () => this.setFocusedElement(3), ref: (el) => (this.inputRefs[3] = el), class: "me-1 ms-1" }), h("input", { key: 'b276c16c39fb2420131b47a085f7d73c8f52b41b', type: "text", maxlength: "1", value: this.digit4, onInput: (event) => this.handleInputChange(event, 4), onFocus: () => this.setFocusedElement(4), ref: (el) => (this.inputRefs[4] = el), class: "me-1 ms-1" }), h("input", { key: 'c4b63de6ca8853ebcdb099fb731a87704b916fff', type: "text", maxlength: "1", value: this.digit5, onInput: (event) => this.handleInputChange(event, 5), onFocus: () => this.setFocusedElement(5), ref: (el) => (this.inputRefs[5] = el), class: " ms-1" })), h("div", { key: 'aed4c2b86934f126fbd1db65a71872f199e761e5', class: "d-flex mt-2" }, h("mlz-loading-button", { key: 'cba7880bae749725473e5fd43c255b6f78c998fa', type: "button", styleClass: "btn-primary w-100", class: "w-100", disabled: !this.isFormValid() || this.isLoading, "is-loading": this.isLoading }, "Validar C\u00F3digo"))));
    }
};
MlzCodeValidation.style = mlzCodeValidationCss;

export { MlzCodeValidation as mlz_code_validation };
//# sourceMappingURL=mlz-code-validation.entry.esm.js.map

//# sourceMappingURL=mlz-code-validation.entry.js.map