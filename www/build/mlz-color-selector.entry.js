import { r as registerInstance, d as createEvent, h } from './index-DFHlXP_q.js';

const mlzColorSelectorCss = ".sc-mlz-color-selector-h{display:block}.color-option.sc-mlz-color-selector{width:28px;height:28px;border-radius:50%;cursor:pointer}.color-option.sc-mlz-color-selector i.sc-mlz-color-selector{color:#fff}";

const MlzColorSelector = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.colorChanged = createEvent(this, "colorChanged", 7);
    }
    colorChanged;
    selectedColor = '#7A87CC';
    options1 = [
        '#7A87CC',
        '#9D7CDC',
        '#BA69C9',
        '#F06291',
        '#E9787A',
        '#FF8D5B',
        '#FFA826',
        '#F3D457',
    ];
    options2 = [
        '#C7D048',
        '#9CCB63',
        '#72C392',
        '#4FCFD7',
        '#7CDFE6',
        '#5CB1FF',
        '#43C0FF',
        '#8D6E62',
    ];
    componentWillLoad() {
        this.selectColor(this.selectedColor);
    }
    selectColor(color) {
        this.selectedColor = color;
        this.colorChanged.emit(color);
    }
    renderColorOptions(options) {
        return options.map(item => (h("span", { class: "color-option d-flex justify-content-center align-items-center", style: { backgroundColor: item }, onClick: () => this.selectColor(item) }, this.selectedColor === item && (h("i", { class: "bi bi-check-lg color-option-check" })))));
    }
    render() {
        return (h("div", { key: '631d560caea0538698ce42ebc28ce794e8ca10e8', class: "d-flex flex-column" }, h("div", { key: 'db5e5a927022716c9ef0d5614c05c412b9ea3c87', class: "d-flex align-items-center justify-content-between mt-4" }, this.renderColorOptions(this.options1)), h("div", { key: '45d94f77e50fad008742fe5a3188cd57ddc2b055', class: "d-flex align-items-center justify-content-between mt-4" }, this.renderColorOptions(this.options2))));
    }
};
MlzColorSelector.style = mlzColorSelectorCss;

export { MlzColorSelector as mlz_color_selector };
//# sourceMappingURL=mlz-color-selector.entry.esm.js.map

//# sourceMappingURL=mlz-color-selector.entry.js.map