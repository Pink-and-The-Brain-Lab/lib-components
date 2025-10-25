import { Component, Event, EventEmitter, State, h } from '@stencil/core';

export interface IPasswordEvent {
    password?: string;
    confirmPassword?: string;
}

const getTranslation = (key: string): string => {
    const translations: { [key: string]: string } = {
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

@Component({
    tag: 'mlz-create-password',
    styleUrl: 'mlz-create-password.scss',
    scoped: true,
})
export class MlzCreatePassword {
    @State() passwordValue: string = '';
    @State() confirmPasswordValue: string = '';
    @State() passwordTouched: boolean = false;
    @State() confirmPasswordTouched: boolean = false;

    @Event() passwordValidation: EventEmitter<boolean>;
    @Event() passwordEvent: EventEmitter<IPasswordEvent>;

    private get isPasswordLengthValid(): boolean {
        return this.passwordValue.length >= 8;
    }

    private get hasNumber(): boolean {
        return /[0-9]/.test(this.passwordValue);
    }

    private get hasLetter(): boolean {
        return /[a-zA-Z]/.test(this.passwordValue);
    }

    private get isPasswordStrengthValid(): boolean {
        return this.isPasswordLengthValid && this.hasNumber && this.hasLetter;
    }

    private get isConfirmPasswordValid(): boolean {
        return !!this.confirmPasswordValue && this.passwordValue === this.confirmPasswordValue;
    }

    private get passwordStatus(): 'valid' | 'invalid' | 'neutral' {
        if (!this.passwordTouched) return 'neutral';
        return this.isPasswordStrengthValid ? 'valid' : 'invalid';
    }

    private get confirmPasswordStatus(): 'valid' | 'invalid' | 'neutral' {
        if (!this.confirmPasswordTouched) return 'neutral';
        return this.isConfirmPasswordValid ? 'valid' : 'invalid';
    }

    private handlePasswordValueChange(event: CustomEvent<string>) {
        this.passwordValue = event.detail;
        this.emitValidationAndPasswordEvent();
    }

    private handleConfirmPasswordValueChange(event: CustomEvent<string>) {
        this.confirmPasswordValue = event.detail;
        this.emitValidationAndPasswordEvent();
    }

    private handlePasswordBlur() {
        this.passwordTouched = true;
    }

    private handleConfirmPasswordBlur() {
        this.confirmPasswordTouched = true;
    }

    private emitValidationAndPasswordEvent() {
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

        return (
            <div class="d-flex flex-column w-full">
                <div class="row-form w-full">
                    <mlz-input
                        label={getTranslation('PASSWORD')}
                        name="password"
                        type="password"
                        value={this.passwordValue}
                        status={this.passwordStatus}
                        onValueChange={(e) => this.handlePasswordValueChange(e)}
                        onInputBlur={() => this.handlePasswordBlur()}
                    >
                        <span slot="error-message">
                            {getTranslation('PASSWORD_REQUIRED')}
                        </span>
                    </mlz-input>
                </div>

                <div class="password-validation-container mt-4">
                    <p class="text-sm text-gray-500">
                        {getTranslation('AT_LEAST')}{' '}
                        <span class={{ 'is-valid': isPasswordValid && this.isPasswordLengthValid, 'is-invalid': isPasswordValid && !this.isPasswordLengthValid }}>
                            8 {getTranslation('CHARACTERS')}
                        </span>,{' '}
                        {getTranslation('INCLUDING_A')}{' '}
                        <span class={{ 'is-valid': isPasswordValid && this.hasNumber, 'is-invalid': isPasswordValid && !this.hasNumber }}>
                            {getTranslation('NUMBER')}
                        </span>{' '}
                        {getTranslation('AND_A')}{' '}
                        <span class={{ 'is-valid': isPasswordValid && this.hasLetter, 'is-invalid': isPasswordValid && !this.hasLetter }}>
                            {getTranslation('LETTER')}
                        </span>
                    </p>
                </div>

                <div class="row-form w-full">
                    <mlz-input
                        label={getTranslation('CONFIRM_PASSWORD')}
                        name="confirm-password"
                        type="password"
                        value={this.confirmPasswordValue}
                        status={this.confirmPasswordStatus}
                        onValueChange={(e) => this.handleConfirmPasswordValueChange(e)}
                        onInputBlur={() => this.handleConfirmPasswordBlur()}
                    >
                        <span slot="error-message">
                            {!this.confirmPasswordValue && getTranslation('FORM_VALIDATIONS.PASSWORD_CONFIRMATION_REQUIRED')}
                            {!!this.confirmPasswordValue && this.passwordValue !== this.confirmPasswordValue && getTranslation('FORM_VALIDATIONS.PASSWORD_CONFIRMATION_NEED_TO_BE_EQUALS')}
                        </span>
                    </mlz-input>
                </div>
            </div>
        );
    }
}
