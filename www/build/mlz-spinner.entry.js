import { r as registerInstance, h, a as Host } from './index-DFHlXP_q.js';

const mlzSpinnerCss = ".sc-mlz-spinner-h{display:block}";

const MlzSpinner = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    size = '';
    render() {
        return (h(Host, { key: 'd094f0e68ded73db8510b0ff0d9bb6f27eeb86af' }, h("i", { key: 'e3d0893b04ec0efe6d4b42c24c7855a5ae766f05', role: "status", class: "spinner-border text-light", style: {
                width: `${this.size}px`,
                height: `${this.size}px`,
            } })));
    }
};
MlzSpinner.style = mlzSpinnerCss;

export { MlzSpinner as mlz_spinner };
//# sourceMappingURL=mlz-spinner.entry.esm.js.map

//# sourceMappingURL=mlz-spinner.entry.js.map