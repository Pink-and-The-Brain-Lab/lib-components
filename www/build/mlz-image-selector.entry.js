import { r as registerInstance, d as createEvent, h } from './index-DFHlXP_q.js';

const mlzImageSelectorCss = ".sc-mlz-image-selector-h{display:block}";

const MlzImageSelector = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.imageFile = createEvent(this, "imageFile", 7);
    }
    buttonText = 'Escolher Imagem';
    aditionalText = 'ou escolha uma cor abaixo';
    imageFile;
    inputFileRef;
    selectFile() {
        this.inputFileRef.click();
    }
    getFile(event) {
        const target = event.target;
        if (target.files && target.files.length > 0) {
            const image = target.files[0];
            this.convertoToBlobURL(image).then((response) => {
                this.imageFile.emit({
                    file: image,
                    blobUrl: response
                });
            });
        }
    }
    convertoToBlobURL(file) {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onload = () => {
                const srcData = new Blob([new Uint8Array(reader.result)], { type: file.type });
                const urlFile = URL.createObjectURL(srcData);
                resolve(urlFile);
            };
            reader.onerror = (error) => {
                reject(error);
            };
            reader.readAsArrayBuffer(file);
        });
    }
    render() {
        return (h("div", { key: '21f67a043af62c8cfd33136878408397cf1ead68', class: "d-flex align-items-center" }, h("button", { key: 'a861ad2beb24522c0b17fd01895e6edf92528a6e', type: "button", class: "btn btn-outline-secondary", onClick: () => this.selectFile() }, this.buttonText), h("p", { key: 'd02f00baa8566e30294100667243a0ce78efffd1', class: "mb-0 ms-2 text--sm text--medium text--600" }, this.aditionalText), h("input", { key: 'bd2399ad20831d243e89c8e18e20fa29fc80e415', type: "file", accept: "image/*", hidden: true, ref: (el) => (this.inputFileRef = el), onChange: (event) => this.getFile(event) })));
    }
};
MlzImageSelector.style = mlzImageSelectorCss;

export { MlzImageSelector as mlz_image_selector };
//# sourceMappingURL=mlz-image-selector.entry.esm.js.map

//# sourceMappingURL=mlz-image-selector.entry.js.map