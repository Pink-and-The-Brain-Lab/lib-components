import { r as registerInstance, d as createEvent, g as getElement, h } from './index-DFHlXP_q.js';

const mlzImageCropperCss = ".sc-mlz-image-cropper-h{display:block;font-family:sans-serif}.container.sc-mlz-image-cropper{display:flex;flex-direction:column;align-items:center;gap:1rem}canvas.sc-mlz-image-cropper{border:1px solid #ccc}canvas.is-pan-mode.sc-mlz-image-cropper{cursor:grab}canvas.is-pan-mode.sc-mlz-image-cropper:active{cursor:grabbing}canvas.is-draw-mode.sc-mlz-image-cropper{cursor:crosshair}.mode-controls.sc-mlz-image-cropper{display:flex;gap:0.5rem;background-color:#f0f0f0;padding:0.25rem;border-radius:8px}.mode-controls.sc-mlz-image-cropper button.sc-mlz-image-cropper{padding:0.5rem 1rem;border:1px solid transparent;background:none;cursor:pointer;border-radius:6px;font-weight:500}.mode-controls.sc-mlz-image-cropper button.active.sc-mlz-image-cropper{background-color:white;border-color:#ccc;box-shadow:0 1px 3px rgba(0, 0, 0, 0.1)}.controls.sc-mlz-image-cropper,.actions.sc-mlz-image-cropper{display:flex;flex-wrap:wrap;gap:0.5rem;justify-content:center}";

const MlzImageCropper = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.crop = createEvent(this, "crop", 7);
    }
    get hostElement() { return getElement(this); }
    /** A imagem em formato Base64 para ser editada. */
    src;
    /** A proporção do corte (ex: 16/9, 4/3, 1/1). Use 0 ou null para corte livre. */
    aspectRatio = 16 / 9;
    /** Evento emitido com a imagem cortada em Base64. */
    crop;
    transform = { scale: 1, rotation: 0, x: 0, y: 0, flipX: false, flipY: false };
    canvasEl;
    ctx;
    image;
    cropBox;
    isPanning = false;
    lastPanPos = { x: 0, y: 0 };
    isInteracting = false;
    interactionHandle = null;
    startInteractionPos = { x: 0, y: 0 };
    startCropBox = { x: 0, y: 0, width: 0, height: 0 };
    startImagePos = { x: 0, y: 0 };
    handleSize = 10;
    componentDidLoad() {
        this.ctx = this.canvasEl.getContext('2d');
        this.setupEventListeners();
        if (this.src) {
            this.loadImage();
        }
    }
    disconnectedCallback() {
        this.canvasEl.removeEventListener('mousedown', this.handleMouseDown);
        this.canvasEl.removeEventListener('mousemove', this.handleMouseMove);
        this.canvasEl.removeEventListener('mouseup', this.handleMouseUp);
        this.canvasEl.removeEventListener('mouseleave', this.handleMouseUp);
        this.canvasEl.removeEventListener('wheel', this.handleWheel);
    }
    onSrcChange() {
        this.loadImage();
    }
    loadImage() {
        this.image = new Image();
        this.image.onload = () => {
            this.resetTransforms();
            this.centerImage();
            this.calculateCropBox();
            this.draw();
        };
        this.image.src = this.src;
    }
    setupEventListeners() {
        this.canvasEl.addEventListener('mousedown', this.handleMouseDown);
        this.canvasEl.addEventListener('mousemove', this.handleMouseMove);
        this.canvasEl.addEventListener('mouseup', this.handleMouseUp);
        this.canvasEl.addEventListener('mouseleave', this.handleMouseUp);
        this.canvasEl.addEventListener('wheel', this.handleWheel);
    }
    handleMouseDown = (e) => {
        const handle = this.getInteractionHandle(e.offsetX, e.offsetY);
        this.isInteracting = true;
        this.interactionHandle = handle;
        this.startInteractionPos = { x: e.offsetX, y: e.offsetY };
        this.startCropBox = { ...this.cropBox };
        this.startImagePos = { x: this.transform.x, y: this.transform.y };
        if (!handle) {
            this.isPanning = true;
            this.lastPanPos = { x: e.offsetX, y: e.offsetY };
        }
    };
    handleMouseMove = (e) => {
        if (!this.isInteracting)
            return;
        const dx = e.offsetX - this.startInteractionPos.x;
        const dy = e.offsetY - this.startInteractionPos.y;
        if (this.interactionHandle) {
            this.resizeOrMoveCropBox(dx, dy);
        }
        else if (this.isPanning) {
            this.transform = {
                ...this.transform,
                x: this.startImagePos.x + dx,
                y: this.startImagePos.y + dy
            };
            this.draw();
        }
    };
    handleMouseUp = () => {
        this.isInteracting = false;
        this.interactionHandle = null;
        this.isPanning = false;
    };
    handleWheel = (e) => {
        e.preventDefault();
        const zoomAmount = e.deltaY * -0.001;
        const newScale = Math.max(0.1, Math.min(5, this.transform.scale + zoomAmount));
        this.transform = { ...this.transform, scale: newScale };
        this.draw();
    };
    draw = () => {
        if (!this.image || !this.ctx)
            return;
        this.ctx.clearRect(0, 0, this.canvasEl.width, this.canvasEl.height);
        this.ctx.save();
        this.ctx.translate(this.transform.x, this.transform.y);
        this.ctx.rotate((this.transform.rotation * Math.PI) / 180);
        this.ctx.scale(this.transform.scale * (this.transform.flipX ? -1 : 1), this.transform.scale * (this.transform.flipY ? -1 : 1));
        this.ctx.drawImage(this.image, -this.image.width / 2, -this.image.height / 2);
        this.ctx.restore();
        if (this.cropBox) {
            this.drawCropOverlay();
        }
    };
    drawCropOverlay() {
        this.ctx.save();
        // Desenha o overlay escuro
        this.ctx.fillStyle = 'rgba(0, 0, 0, 0.5)';
        this.ctx.fillRect(0, 0, this.canvasEl.width, this.canvasEl.height);
        // Configura a máscara para "limpar" a área do crop box
        this.ctx.globalCompositeOperation = 'destination-out';
        const x = this.cropBox.x;
        const y = this.cropBox.y;
        this.ctx.fillRect(x, y, this.cropBox.width, this.cropBox.height);
        // Restaura o modo de composição para desenhar a borda
        this.ctx.globalCompositeOperation = 'source-over';
        // Desenha a borda tracejada
        this.ctx.strokeStyle = 'rgba(255, 255, 255, 0.8)';
        this.ctx.lineWidth = 2;
        this.ctx.setLineDash([5, 5]);
        this.ctx.strokeRect(x, y, this.cropBox.width, this.cropBox.height);
        this.ctx.setLineDash([]);
        this.drawResizeHandles();
        this.ctx.restore();
    }
    drawResizeHandles() {
        this.ctx.fillStyle = 'rgba(255, 255, 255, 1)';
        const x = this.cropBox.x;
        const y = this.cropBox.y;
        const w = this.cropBox.width;
        const h = this.cropBox.height;
        // Cantos
        this.ctx.fillRect(x - this.handleSize / 2, y - this.handleSize / 2, this.handleSize, this.handleSize);
        this.ctx.fillRect(x + w - this.handleSize / 2, y - this.handleSize / 2, this.handleSize, this.handleSize);
        this.ctx.fillRect(x - this.handleSize / 2, y + h - this.handleSize / 2, this.handleSize, this.handleSize);
        this.ctx.fillRect(x + w - this.handleSize / 2, y + h - this.handleSize / 2, this.handleSize, this.handleSize);
        // Meios
        this.ctx.fillRect(x + w / 2 - this.handleSize / 2, y - this.handleSize / 2, this.handleSize, this.handleSize);
        this.ctx.fillRect(x + w / 2 - this.handleSize / 2, y + h - this.handleSize / 2, this.handleSize, this.handleSize);
        this.ctx.fillRect(x - this.handleSize / 2, y + h / 2 - this.handleSize / 2, this.handleSize, this.handleSize);
        this.ctx.fillRect(x + w - this.handleSize / 2, y + h / 2 - this.handleSize / 2, this.handleSize, this.handleSize);
    }
    getInteractionHandle(x, y) {
        const { cropBox, handleSize } = this;
        if (!cropBox)
            return null;
        const { x: cx, y: cy, width: cw, height: ch } = cropBox;
        const h = handleSize / 2;
        if (x >= cx - h && x <= cx + h && y >= cy - h && y <= cy + h)
            return 'top-left';
        if (x >= cx + cw - h && x <= cx + cw + h && y >= cy - h && y <= cy + h)
            return 'top-right';
        if (x >= cx - h && x <= cx + h && y >= cy + ch - h && y <= cy + ch + h)
            return 'bottom-left';
        if (x >= cx + cw - h && x <= cx + cw + h && y >= cy + ch - h && y <= cy + ch + h)
            return 'bottom-right';
        if (x >= cx + h && x <= cx + cw - h && y >= cy - h && y <= cy + h)
            return 'top';
        if (x >= cx + h && x <= cx + cw - h && y >= cy + ch - h && y <= cy + ch + h)
            return 'bottom';
        if (x >= cx - h && x <= cx + h && y >= cy + h && y <= cy + ch - h)
            return 'left';
        if (x >= cx + cw - h && x <= cx + cw + h && y >= cy + h && y <= cy + ch - h)
            return 'right';
        if (x >= cx && x <= cx + cw && y >= cy && y <= cy + ch)
            return 'cropbox-move';
        return null;
    }
    resizeOrMoveCropBox(dx, dy) {
        const { interactionHandle, startCropBox, aspectRatio } = this;
        let newX = startCropBox.x;
        let newY = startCropBox.y;
        let newWidth = startCropBox.width;
        let newHeight = startCropBox.height;
        switch (interactionHandle) {
            case 'cropbox-move':
                newX = startCropBox.x + dx;
                newY = startCropBox.y + dy;
                break;
            case 'top-left':
                newX = startCropBox.x + dx;
                newY = startCropBox.y + dy;
                newWidth = startCropBox.width - dx;
                newHeight = startCropBox.height - dy;
                break;
            case 'top-right':
                newY = startCropBox.y + dy;
                newWidth = startCropBox.width + dx;
                newHeight = startCropBox.height - dy;
                break;
            case 'bottom-left':
                newX = startCropBox.x + dx;
                newWidth = startCropBox.width - dx;
                newHeight = startCropBox.height + dy;
                break;
            case 'bottom-right':
                newWidth = startCropBox.width + dx;
                newHeight = startCropBox.height + dy;
                break;
            case 'top':
                newY = startCropBox.y + dy;
                newHeight = startCropBox.height - dy;
                break;
            case 'bottom':
                newHeight = startCropBox.height + dy;
                break;
            case 'left':
                newX = startCropBox.x + dx;
                newWidth = startCropBox.width - dx;
                break;
            case 'right':
                newWidth = startCropBox.width + dx;
                break;
        }
        if (aspectRatio > 0 && interactionHandle && interactionHandle !== 'cropbox-move') {
            const signW = Math.sign(newWidth);
            const signH = Math.sign(newHeight);
            newWidth = Math.abs(newWidth);
            newHeight = newWidth / aspectRatio;
            if (signW !== Math.sign(newWidth))
                newX = startCropBox.x + startCropBox.width - newWidth;
            if (signH !== Math.sign(newHeight))
                newY = startCropBox.y + startCropBox.height - newHeight;
        }
        this.cropBox = {
            x: newX,
            y: newY,
            width: newWidth,
            height: newHeight,
        };
        this.draw();
    }
    handleZoom = (amount) => {
        const newScale = Math.max(0.1, Math.min(5, this.transform.scale + amount));
        this.transform = { ...this.transform, scale: newScale };
        this.draw();
    };
    handleRotate = (degrees) => {
        this.transform = { ...this.transform, rotation: (this.transform.rotation + degrees) % 360 };
        this.draw();
    };
    handleFlipX = () => {
        this.transform = { ...this.transform, flipX: !this.transform.flipX };
        this.draw();
    };
    handleFlipY = () => {
        this.transform = { ...this.transform, flipY: !this.transform.flipY };
        this.draw();
    };
    handleCrop = () => {
        if (!this.image || this.cropBox.width === 0 || this.cropBox.height === 0)
            return;
        const tempCanvas = document.createElement('canvas');
        tempCanvas.width = Math.abs(this.cropBox.width);
        tempCanvas.height = Math.abs(this.cropBox.height);
        const tempCtx = tempCanvas.getContext('2d');
        tempCtx.save();
        tempCtx.translate(this.transform.x - this.cropBox.x, this.transform.y - this.cropBox.y);
        tempCtx.rotate((this.transform.rotation * Math.PI) / 180);
        tempCtx.scale(this.transform.scale * (this.transform.flipX ? -1 : 1), this.transform.scale * (this.transform.flipY ? -1 : 1));
        tempCtx.drawImage(this.image, -this.image.width / 2, -this.image.height / 2);
        tempCtx.restore();
        const dataUrl = tempCanvas.toDataURL('image/jpeg');
        this.crop.emit(dataUrl);
    };
    resetTransforms() {
        this.transform = { scale: 1, rotation: 0, x: 0, y: 0, flipX: false, flipY: false };
    }
    centerImage() {
        this.transform = { ...this.transform, x: this.canvasEl.width / 2, y: this.canvasEl.height / 2 };
    }
    calculateCropBox() {
        const canvasWidth = this.canvasEl.width;
        const canvasHeight = this.canvasEl.height;
        let width = canvasWidth * 0.5;
        let height = canvasHeight * 0.5;
        if (this.aspectRatio > 0) {
            if (width / height > this.aspectRatio) {
                width = height * this.aspectRatio;
            }
            else {
                height = width / this.aspectRatio;
            }
        }
        this.cropBox = {
            width,
            height,
            x: (canvasWidth - width) / 2,
            y: (canvasHeight - height) / 2,
        };
    }
    render() {
        return (h("div", { key: 'c105f7e027793bd50fb50d399d1251ca6f77b381', class: "container" }, h("canvas", { key: 'c3faada4d9b90626bcf1f8696990c6481950f7d2', ref: (el) => (this.canvasEl = el), width: "800", height: "600", class: {
                'is-panning': this.isPanning,
                'is-resizing': this.interactionHandle && this.interactionHandle !== 'cropbox-move',
                'is-dragging': this.interactionHandle === 'cropbox-move',
            } }), h("div", { key: 'df040505cb07e657c541cacaf317ce3f28b9f7eb', class: "controls" }, h("button", { key: 'ec827c89d651eec1bb46e7976bd7d2b57d5dce67', title: "Zoom In", onClick: () => this.handleZoom(0.1) }, "+"), h("button", { key: '0ef04878f5c5b2cc210221d9bb14cf12e2f66074', title: "Zoom Out", onClick: () => this.handleZoom(-0.1) }, "-"), h("button", { key: 'd64edea53b157b7c4621dfdd395ee38e6cb1898e', title: "Rotate Left", onClick: () => this.handleRotate(-90) }, "\u27F2"), h("button", { key: '02bb3da544f3ea5f8236a83b9b11e470b765623e', title: "Rotate Right", onClick: () => this.handleRotate(90) }, "\u27F3"), h("button", { key: 'd29e52fe1800c60f999f51429c305a5bfd825ff5', title: "Flip Horizontal", onClick: this.handleFlipX }, "\u2194"), h("button", { key: 'a3a9aa2b5d66fffc1172c822e2c6b3b8cbfdb103', title: "Flip Vertical", onClick: this.handleFlipY }, "\u2195")), h("div", { key: '970a953f980a58c498eed5dd44e8dd4fc994382a', class: "actions" }, h("button", { key: 'd19b261a60b2e2a8eda1927ae6723371fab55efe', class: "crop-button", onClick: this.handleCrop }, "Cortar Imagem"))));
    }
    static get watchers() { return {
        "src": ["onSrcChange"]
    }; }
};
MlzImageCropper.style = mlzImageCropperCss;

export { MlzImageCropper as mlz_image_cropper };
//# sourceMappingURL=mlz-image-cropper.entry.esm.js.map

//# sourceMappingURL=mlz-image-cropper.entry.js.map