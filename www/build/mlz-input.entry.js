import { r as registerInstance, d as createEvent, h } from './index-DFHlXP_q.js';

const mlzInputCss = ".error-message.hidden.sc-mlz-input{display:none}i.sc-mlz-input{color:var(--emphasis-low);cursor:pointer}";

const MlzInput = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.valueChange = createEvent(this, "valueChange", 7);
        this.inputBlur = createEvent(this, "inputBlur", 7);
    }
    value = '';
    status = 'neutral';
    label;
    name;
    type = 'text';
    isTouched = false;
    isPasswordVisible = false;
    valueChange;
    inputBlur;
    onInput(event) {
        const input = event.target;
        this.value = input.value;
        this.valueChange.emit(this.value);
    }
    onBlur() {
        this.isTouched = true;
        this.inputBlur.emit();
    }
    togglePasswordVisibility() {
        this.isPasswordVisible = !this.isPasswordVisible;
    }
    render() {
        const validationClass = this.isTouched && this.status !== 'neutral'
            ? (this.status === 'valid' ? 'success' : 'invalid')
            : '';
        const notEmptyClass = this.value.length > 0 ? 'not-empty' : '';
        const showErrorClass = this.isTouched && this.status === 'invalid' ? '' : 'hidden';
        const inputType = this.type === 'password' && !this.isPasswordVisible ? 'password' : 'text';
        return (h("div", { key: 'b9d2529d5be6bbb861e0ede6ca0dc7edcbe483de', class: "row-form right-icon w-100" }, h("input", { key: 'abcf75ab19b809a53f37c18804b9f147c0b2a295', type: inputType, name: this.name, value: this.value, onInput: (e) => this.onInput(e), onBlur: () => this.onBlur(), class: `input-field ${validationClass} ${notEmptyClass}` }), h("label", { key: 'f65d8c956fa7880fe57127b787fe171b0475c984', class: "input-label" }, this.label), this.type === 'password' && (h("i", { key: 'ed6f0ceb9c2968e03b516dbffddfa5f0d7924c1e', class: `password-toggle-icon ${this.isPasswordVisible ? 'bi bi-eye-slash' : 'bi bi-eye'}`, onClick: () => this.togglePasswordVisibility() })), h("small", { key: '6017ae576b3c6afb1c63f4400d2e807cde78d762', class: `error-message ${showErrorClass}` }, h("slot", { key: '7ce54a92c413648934d05a3f87cd934328f5fb68', name: "error-message" }))));
    }
};
MlzInput.style = mlzInputCss;

export { MlzInput as mlz_input };
//# sourceMappingURL=mlz-input.entry.esm.js.map

//# sourceMappingURL=mlz-input.entry.js.map