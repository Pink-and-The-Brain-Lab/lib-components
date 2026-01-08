import { r as registerInstance, d as createEvent, g as getElement, h, a as Host } from './index-DFHlXP_q.js';

const mlzLoadingButtonCss = ".sc-mlz-loading-button-h{display:inline-block}.disabled.sc-mlz-loading-button-h{cursor:not-allowed}button.sc-mlz-loading-button{overflow:hidden;position:relative}button.sc-mlz-loading-button:disabled{cursor:not-allowed}.spinner.sc-mlz-loading-button{position:absolute;left:0;right:0}@keyframes slideOutFadeUp{from{transform:translateY(0);opacity:1}to{transform:translateY(-100%);opacity:0}}@keyframes slideInFadeDown{from{transform:translateY(100%);opacity:0}to{transform:translateY(0);opacity:1}}.fadeout.sc-mlz-loading-button{animation:slideOutFadeUp 0.3s forwards}.fadein.sc-mlz-loading-button{animation:slideInFadeDown 0.3s forwards}";

const MlzLoadingButton = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.mlzClick = createEvent(this, "mlzClick", 7);
    }
    get el() { return getElement(this); }
    isLoading = false;
    disabled = false;
    type = 'button';
    styleClass = 'btn-primary';
    mlzClick;
    isLoadingStateChanges = false;
    onLoadingChange(newValue, oldValue) {
        if (newValue !== oldValue) {
            this.updateButtonState();
            this.isLoadingStateChanges = true;
        }
    }
    componentDidLoad() {
        this.updateButtonState();
    }
    updateButtonState() {
        const buttonElement = this.el.shadowRoot?.querySelector('button');
        if (!buttonElement)
            return;
        if (this.isLoading) {
            buttonElement.blur();
            buttonElement.style.pointerEvents = 'none';
            this.el.classList.add('is-loading-state');
        }
        else {
            buttonElement.style.removeProperty('pointer-events');
            this.el.classList.remove('is-loading-state');
        }
    }
    handleClick = (event) => {
        if (this.disabled || this.isLoading) {
            event.stopPropagation();
            return;
        }
        this.mlzClick.emit(event);
    };
    get styleClassDefinition() {
        return `btn ${this.styleClass}`;
    }
    render() {
        return (h(Host, { key: '04e1265e18441e300184b3f1a36bbb550a75daf4', class: this.disabled ? 'disabled' : '' }, h("button", { key: 'bb527bc4e2895042c2b3bf6af26221e37b1dc1c0', type: this.type, disabled: this.disabled || this.isLoading, class: this.styleClassDefinition, onClick: this.handleClick }, !this.isLoadingStateChanges ? null
            : h("span", { class: {
                    'fadein': this.isLoading,
                    'fadeout': !this.isLoading,
                    'spinner': true
                } }, h("mlz-spinner", { size: "25" })), h("span", { key: 'b33fee0efd44223912a8292b91898262d1b0bab9', class: {
                'fadein': !this.isLoading,
                'fadeout': this.isLoading,
            } }, h("slot", { key: '5c9c344162c6842585b134b327e9d45e4c1df19e' })))));
    }
    static get watchers() { return {
        "isLoading": ["onLoadingChange"]
    }; }
};
MlzLoadingButton.style = mlzLoadingButtonCss;

export { MlzLoadingButton as mlz_loading_button };
//# sourceMappingURL=mlz-loading-button.entry.esm.js.map

//# sourceMappingURL=mlz-loading-button.entry.js.map