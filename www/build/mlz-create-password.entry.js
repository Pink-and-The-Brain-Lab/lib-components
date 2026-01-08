import { r as registerInstance, d as createEvent, h } from './index-DFHlXP_q.js';

const mlzCreatePasswordCss = ".sc-mlz-create-password-h{display:block}p.sc-mlz-create-password{color:var(--emphasis-low);font-size:0.875em}i.sc-mlz-create-password{color:var(--emphasis-low);cursor:pointer}.password-validation-container.sc-mlz-create-password .is-invalid.sc-mlz-create-password{color:var(--danger)}.password-validation-container.sc-mlz-create-password .is-valid.sc-mlz-create-password{color:var(--st-green)}";

const getTranslation = (key) => {
    const translations = {
        'PASSWORD': 'Senha',
        'PASSWORD_REQUIRED': 'Senha é obrigatória.',
        'AT_LEAST': 'Pelo menos',
        'CHARACTERS': 'caracteres',
        'INCLUDING_A': 'incluindo um(a)',
        'NUMBER': 'número',
        'AND_A': 'e um(a)',
        'LETTER': 'letra',
        'CONFIRM_PASSWORD': 'Confirmar Senha',
        'FORM_VALIDATIONS.PASSWORD_CONFIRMATION_REQUIRED': 'Confirmação de senha é obrigatória.',
        'FORM_VALIDATIONS.PASSWORD_CONFIRMATION_NEED_TO_BE_EQUALS': 'As senhas precisam ser iguais.',
    };
    return translations[key] || key;
};
const MlzCreatePassword = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.passwordValidation = createEvent(this, "passwordValidation", 7);
        this.passwordEvent = createEvent(this, "passwordEvent", 7);
    }
    passwordValue = '';
    confirmPasswordValue = '';
    passwordTouched = false;
    confirmPasswordTouched = false;
    passwordValidation;
    passwordEvent;
    get isPasswordLengthValid() {
        return this.passwordValue.length >= 8;
    }
    get hasNumber() {
        return /[0-9]/.test(this.passwordValue);
    }
    get hasLetter() {
        return /[a-zA-Z]/.test(this.passwordValue);
    }
    get isPasswordStrengthValid() {
        return this.isPasswordLengthValid && this.hasNumber && this.hasLetter;
    }
    get isConfirmPasswordValid() {
        return !!this.confirmPasswordValue && this.passwordValue === this.confirmPasswordValue;
    }
    get passwordStatus() {
        if (!this.passwordTouched)
            return 'neutral';
        return this.isPasswordStrengthValid ? 'valid' : 'invalid';
    }
    get confirmPasswordStatus() {
        if (!this.confirmPasswordTouched)
            return 'neutral';
        return this.isConfirmPasswordValid ? 'valid' : 'invalid';
    }
    handlePasswordValueChange(event) {
        this.passwordValue = event.detail;
        this.emitValidationAndPasswordEvent();
    }
    handleConfirmPasswordValueChange(event) {
        this.confirmPasswordValue = event.detail;
        this.emitValidationAndPasswordEvent();
    }
    handlePasswordBlur() {
        this.passwordTouched = true;
    }
    handleConfirmPasswordBlur() {
        this.confirmPasswordTouched = true;
    }
    emitValidationAndPasswordEvent() {
        const isValid = this.isPasswordStrengthValid && this.isConfirmPasswordValid;
        this.passwordValidation.emit(isValid);
        if (isValid) {
            this.passwordEvent.emit({
                password: this.passwordValue,
                confirmPassword: this.confirmPasswordValue,
            });
        }
    }
    render() {
        const isPasswordValid = this.passwordTouched && this.passwordValue.length > 0;
        return (h("div", { key: 'cd5c1ed8c9bd52de53f1103819106c5704af835d', class: "d-flex flex-column w-full" }, h("div", { key: 'a21ce4645aca4ca560ab78372e83d52ff4d59cda', class: "row-form w-full" }, h("mlz-input", { key: '179d5da05867d28fbaf5d1b5a0a5cda37d976850', label: getTranslation('PASSWORD'), name: "password", type: "password", value: this.passwordValue, status: this.passwordStatus, onValueChange: (e) => this.handlePasswordValueChange(e), onInputBlur: () => this.handlePasswordBlur() }, h("span", { key: '1eae9fbef2aa307f788c773bda931030905dc2cb', slot: "error-message" }, getTranslation('PASSWORD_REQUIRED')))), h("div", { key: 'ddf0cf62c6f8843372ff24bc2bede5a34f3e4eca', class: "password-validation-container mt-4" }, h("p", { key: '8b339ec77614be23cf7480aadf7fb30a33ddcbe6', class: "text-sm text-gray-500" }, getTranslation('AT_LEAST'), ' ', h("span", { key: 'ec1070bd791f7eb1ee72898e933333284a7da41b', class: { 'is-valid': isPasswordValid && this.isPasswordLengthValid, 'is-invalid': isPasswordValid && !this.isPasswordLengthValid } }, "8 ", getTranslation('CHARACTERS')), ",", ' ', getTranslation('INCLUDING_A'), ' ', h("span", { key: 'cb726fc48dc8e2e75080378e92a306743ece65f1', class: { 'is-valid': isPasswordValid && this.hasNumber, 'is-invalid': isPasswordValid && !this.hasNumber } }, getTranslation('NUMBER')), ' ', getTranslation('AND_A'), ' ', h("span", { key: 'dd1ab8388ccb32c66426f34ee42dfcd72db52b2f', class: { 'is-valid': isPasswordValid && this.hasLetter, 'is-invalid': isPasswordValid && !this.hasLetter } }, getTranslation('LETTER')))), h("div", { key: 'e7014b957d7096280281a6339c1b9c06aef5678d', class: "row-form w-full" }, h("mlz-input", { key: '31991bb67ddbaa53167d4495cff7b0797002220b', label: getTranslation('CONFIRM_PASSWORD'), name: "confirm-password", type: "password", value: this.confirmPasswordValue, status: this.confirmPasswordStatus, onValueChange: (e) => this.handleConfirmPasswordValueChange(e), onInputBlur: () => this.handleConfirmPasswordBlur() }, h("span", { key: '87003de1cea51c8d95a45e568ccff986ab4a77d5', slot: "error-message" }, !this.confirmPasswordValue && getTranslation('FORM_VALIDATIONS.PASSWORD_CONFIRMATION_REQUIRED'), !!this.confirmPasswordValue && this.passwordValue !== this.confirmPasswordValue && getTranslation('FORM_VALIDATIONS.PASSWORD_CONFIRMATION_NEED_TO_BE_EQUALS'))))));
    }
};
MlzCreatePassword.style = mlzCreatePasswordCss;

export { MlzCreatePassword as mlz_create_password };
//# sourceMappingURL=mlz-create-password.entry.esm.js.map

//# sourceMappingURL=mlz-create-password.entry.js.map