import { r as registerInstance, d as createEvent, g as getElement, h, a as Host } from './index-DFHlXP_q.js';

const mlzRangeCss = ".sc-mlz-range-h{display:block;width:100%}input[type=range].sc-mlz-range{-webkit-appearance:none;appearance:none;width:100%;height:8px;background:var(--divider);outline:none;opacity:0.7;transition:opacity 0.2s;border-radius:4px}input[type=range].sc-mlz-range:hover{opacity:1}input[type=range].sc-mlz-range::-webkit-slider-thumb{-webkit-appearance:none;width:20px;height:20px;border-radius:50%;background:var(--primary);cursor:pointer;box-shadow:0 2px 4px rgba(0, 0, 0, 0.2);margin-top:calc(-20px / 2 + 8px / 2);transition:background 0.2s ease-in-out, box-shadow 0.2s ease-in-out}input[type=range].sc-mlz-range::-webkit-slider-thumb:hover{background:light(--primary, 5%);box-shadow:0 4px 8px rgba(0, 0, 0, 0.3)}input[type=range].sc-mlz-range::-webkit-slider-thumb:active{background:dark(--primary, 5%);box-shadow:0 6px 12px rgba(0, 0, 0, 0.4)}input[type=range].sc-mlz-range::-webkit-slider-runnable-track{width:100%;height:8px;background:linear-gradient(to right, var(--primary) 0%, var(--primary) var(--value, 0%), var(--divider) var(--value, 0%), var(--divider) 100%);border-radius:4px;cursor:pointer}input[type=range].sc-mlz-range::-moz-range-thumb{width:20px;height:20px;border-radius:50%;background:var(--primary);cursor:pointer;box-shadow:0 2px 4px rgba(0, 0, 0, 0.2);border:none;transition:background 0.2s ease-in-out, box-shadow 0.2s ease-in-out}input[type=range].sc-mlz-range::-moz-range-thumb:hover{background:light(--primary, 5%);box-shadow:0 4px 8px rgba(0, 0, 0, 0.3)}input[type=range].sc-mlz-range::-moz-range-thumb:active{background:dark(--primary, 5%);box-shadow:0 6px 12px rgba(0, 0, 0, 0.4)}input[type=range].sc-mlz-range::-moz-range-track{width:100%;height:8px;background:linear-gradient(to right, var(--primary) 0%, var(--primary) var(--value, 0%), var(--divider) var(--value, 0%), var(--divider) 100%);border-radius:4px;cursor:pointer}input[type=range].sc-mlz-range::-ms-thumb{width:20px;height:20px;border-radius:50%;background:var(--primary);cursor:pointer;box-shadow:0 2px 4px rgba(0, 0, 0, 0.2);margin-top:0;transition:background 0.2s ease-in-out, box-shadow 0.2s ease-in-out}input[type=range].sc-mlz-range::-ms-thumb:hover{background:light(--primary, 5%);box-shadow:0 4px 8px rgba(0, 0, 0, 0.3)}input[type=range].sc-mlz-range::-ms-thumb:active{background:dark(--primary, 5%);box-shadow:0 6px 12px rgba(0, 0, 0, 0.4)}input[type=range].sc-mlz-range::-ms-track{width:100%;height:8px;background:transparent;border-color:transparent;color:transparent;cursor:pointer}input[type=range].sc-mlz-range::-ms-fill-lower{background:var(--primary);border-radius:4px}input[type=range].sc-mlz-range::-ms-fill-upper{background:var(--divider);border-radius:4px}";

const MlzRange = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.selectedRange = createEvent(this, "selectedRange", 7);
    }
    get hostElement() { return getElement(this); }
    min = 0;
    max = 100;
    step = 1;
    value = 0;
    selectedRange;
    rangeInputRef;
    handleChange(event) {
        const target = event.target;
        this.value = parseFloat(target.value);
        this.selectedRange.emit(target.value);
        this.onSliderInput(event);
    }
    componentDidLoad() {
        this.rangeInputRef = this.hostElement.shadowRoot?.querySelector('input[type="range"]');
        this.updateSliderAppearance();
    }
    onSliderInput(event) {
        this.value = parseInt(event.target.value, 10);
        this.updateSliderAppearance();
    }
    updateSliderAppearance() {
        if (this.rangeInputRef) {
            const percentage = ((this.value - this.min) / (this.max - this.min)) * 100;
            this.rangeInputRef.style.setProperty('--value', `${percentage}%`);
        }
    }
    render() {
        const initialPercentage = ((this.value - this.min) / (this.max - this.min)) * 100;
        return (h(Host, { key: '75f2ea709fddcb8fb9c3d177b6f125604b7fecf2' }, h("input", { key: '76bf0c186e41a0ad033dcae7e54be397256aced9', type: "range", min: this.min, max: this.max, step: this.step, value: this.value.toString(), onInput: (event) => this.handleChange(event), onChange: (event) => this.handleChange(event), style: { '--value': `${initialPercentage}%` } })));
    }
};
MlzRange.style = mlzRangeCss;

export { MlzRange as mlz_range };
//# sourceMappingURL=mlz-range.entry.esm.js.map

//# sourceMappingURL=mlz-range.entry.js.map