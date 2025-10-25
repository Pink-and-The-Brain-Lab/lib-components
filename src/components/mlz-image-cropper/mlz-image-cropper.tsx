import { Component, Element, Event, EventEmitter, Prop, State, Watch, h } from '@stencil/core';
import { TransformState } from './interfaces/transform-state.interface';
import { CropBox } from './interfaces/crop-box.interface';
import { InteractionHandle } from './interfaces/interaction-handle.type';

@Component({
  tag: 'mlz-image-cropper',
  styleUrl: 'mlz-image-cropper.scss',
  scoped: true,
})
export class MlzImageCropper {
  @Element() hostElement: HTMLElement;

  /** A imagem em formato Base64 para ser editada. */
  @Prop() src: string;

  /** A proporção do corte (ex: 16/9, 4/3, 1/1). Use 0 ou null para corte livre. */
  @Prop() aspectRatio: number = 16 / 9;

  /** Evento emitido com a imagem cortada em Base64. */
  @Event({ eventName: 'crop', bubbles: true, composed: true }) crop: EventEmitter<string>;

  @State() private transform: TransformState = { scale: 1, rotation: 0, x: 0, y: 0, flipX: false, flipY: false };
  
  private canvasEl: HTMLCanvasElement;
  private ctx: CanvasRenderingContext2D;
  private image: HTMLImageElement;
  private cropBox: CropBox;
  
  private isPanning = false;
  private lastPanPos = { x: 0, y: 0 };
  
  private isInteracting = false;
  private interactionHandle: InteractionHandle = null;
  private startInteractionPos = { x: 0, y: 0 };
  private startCropBox = { x: 0, y: 0, width: 0, height: 0 };
  private startImagePos = { x: 0, y: 0 };
  
  private readonly handleSize = 10;

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

  @Watch('src')
  onSrcChange() {
    this.loadImage();
  }

  private loadImage() {
    this.image = new Image();
    this.image.onload = () => {
      this.resetTransforms();
      this.centerImage();
      this.calculateCropBox(); 
      this.draw();
    };
    this.image.src = this.src;
  }
  
  private setupEventListeners() {
    this.canvasEl.addEventListener('mousedown', this.handleMouseDown);
    this.canvasEl.addEventListener('mousemove', this.handleMouseMove);
    this.canvasEl.addEventListener('mouseup', this.handleMouseUp);
    this.canvasEl.addEventListener('mouseleave', this.handleMouseUp);
    this.canvasEl.addEventListener('wheel', this.handleWheel);
  }
  
  private handleMouseDown = (e: MouseEvent) => {
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

  private handleMouseMove = (e: MouseEvent) => {
    if (!this.isInteracting) return;

    const dx = e.offsetX - this.startInteractionPos.x;
    const dy = e.offsetY - this.startInteractionPos.y;

    if (this.interactionHandle) {
      this.resizeOrMoveCropBox(dx, dy);
    } else if (this.isPanning) {
      this.transform = { 
        ...this.transform, 
        x: this.startImagePos.x + dx, 
        y: this.startImagePos.y + dy 
      };
      this.draw();
    }
  };

  private handleMouseUp = () => {
    this.isInteracting = false;
    this.interactionHandle = null;
    this.isPanning = false;
  };
  
  private handleWheel = (e: WheelEvent) => {
    e.preventDefault();
    const zoomAmount = e.deltaY * -0.001;
    const newScale = Math.max(0.1, Math.min(5, this.transform.scale + zoomAmount));
    this.transform = { ...this.transform, scale: newScale };
    this.draw();
  };

  private draw = () => {
    if (!this.image || !this.ctx) return;
    this.ctx.clearRect(0, 0, this.canvasEl.width, this.canvasEl.height);
    this.ctx.save();
    this.ctx.translate(this.transform.x, this.transform.y);
    this.ctx.rotate((this.transform.rotation * Math.PI) / 180);
    this.ctx.scale(
        this.transform.scale * (this.transform.flipX ? -1 : 1),
        this.transform.scale * (this.transform.flipY ? -1 : 1)
    );
    this.ctx.drawImage(this.image, -this.image.width / 2, -this.image.height / 2);
    this.ctx.restore();
    if(this.cropBox) {
      this.drawCropOverlay();
    }
  }
  
  private drawCropOverlay() {
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
  
  private drawResizeHandles() {
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

  private getInteractionHandle(x: number, y: number): InteractionHandle {
    const { cropBox, handleSize } = this;
    if(!cropBox) return null;

    const { x: cx, y: cy, width: cw, height: ch } = cropBox;
    const h = handleSize / 2;
    
    if (x >= cx - h && x <= cx + h && y >= cy - h && y <= cy + h) return 'top-left';
    if (x >= cx + cw - h && x <= cx + cw + h && y >= cy - h && y <= cy + h) return 'top-right';
    if (x >= cx - h && x <= cx + h && y >= cy + ch - h && y <= cy + ch + h) return 'bottom-left';
    if (x >= cx + cw - h && x <= cx + cw + h && y >= cy + ch - h && y <= cy + ch + h) return 'bottom-right';

    if (x >= cx + h && x <= cx + cw - h && y >= cy - h && y <= cy + h) return 'top';
    if (x >= cx + h && x <= cx + cw - h && y >= cy + ch - h && y <= cy + ch + h) return 'bottom';
    if (x >= cx - h && x <= cx + h && y >= cy + h && y <= cy + ch - h) return 'left';
    if (x >= cx + cw - h && x <= cx + cw + h && y >= cy + h && y <= cy + ch - h) return 'right';

    if (x >= cx && x <= cx + cw && y >= cy && y <= cy + ch) return 'cropbox-move';

    return null;
  }
  
  private resizeOrMoveCropBox(dx: number, dy: number) {
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
        
        if (signW !== Math.sign(newWidth)) newX = startCropBox.x + startCropBox.width - newWidth;
        if (signH !== Math.sign(newHeight)) newY = startCropBox.y + startCropBox.height - newHeight;
    }

    this.cropBox = {
        x: newX,
        y: newY,
        width: newWidth,
        height: newHeight,
    };
    
    this.draw();
  }
  
  private handleZoom = (amount: number) => {
    const newScale = Math.max(0.1, Math.min(5, this.transform.scale + amount));
    this.transform = { ...this.transform, scale: newScale };
    this.draw();
  };

  private handleRotate = (degrees: number) => {
    this.transform = { ...this.transform, rotation: (this.transform.rotation + degrees) % 360 };
    this.draw();
  };
  
  private handleFlipX = () => {
    this.transform = { ...this.transform, flipX: !this.transform.flipX };
    this.draw();
  };
  
  private handleFlipY = () => {
    this.transform = { ...this.transform, flipY: !this.transform.flipY };
    this.draw();
  };
  
  private handleCrop = () => {
    if (!this.image || this.cropBox.width === 0 || this.cropBox.height === 0) return;
    const tempCanvas = document.createElement('canvas');
    tempCanvas.width = Math.abs(this.cropBox.width);
    tempCanvas.height = Math.abs(this.cropBox.height);
    const tempCtx = tempCanvas.getContext('2d');
    tempCtx.save();
    tempCtx.translate(
        this.transform.x - this.cropBox.x, 
        this.transform.y - this.cropBox.y
    );
    tempCtx.rotate((this.transform.rotation * Math.PI) / 180);
    tempCtx.scale(
      this.transform.scale * (this.transform.flipX ? -1 : 1),
      this.transform.scale * (this.transform.flipY ? -1 : 1)
    );
    tempCtx.drawImage(this.image, -this.image.width / 2, -this.image.height / 2);
    tempCtx.restore();
    const dataUrl = tempCanvas.toDataURL('image/jpeg');
    this.crop.emit(dataUrl);
  };
  
  private resetTransforms() {
    this.transform = { scale: 1, rotation: 0, x: 0, y: 0, flipX: false, flipY: false };
  }
  
  private centerImage() {
    this.transform = { ...this.transform, x: this.canvasEl.width / 2, y: this.canvasEl.height / 2 };
  }
  
  private calculateCropBox() {
    const canvasWidth = this.canvasEl.width;
    const canvasHeight = this.canvasEl.height;
    
    let width = canvasWidth * 0.5; 
    let height = canvasHeight * 0.5; 
    
    if (this.aspectRatio > 0) {
        if (width / height > this.aspectRatio) {
            width = height * this.aspectRatio;
        } else {
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
    return (
      <div class="container">
        <canvas
          ref={(el) => (this.canvasEl = el)}
          width="800"
          height="600"
          class={{
            'is-panning': this.isPanning,
            'is-resizing': this.interactionHandle && this.interactionHandle !== 'cropbox-move',
            'is-dragging': this.interactionHandle === 'cropbox-move',
          }}
        ></canvas>

        <div class="controls">
            <button title="Zoom In" onClick={() => this.handleZoom(0.1)}>+</button>
            <button title="Zoom Out" onClick={() => this.handleZoom(-0.1)}>-</button>
            <button title="Rotate Left" onClick={() => this.handleRotate(-90)}>⟲</button>
            <button title="Rotate Right" onClick={() => this.handleRotate(90)}>⟳</button>
            <button title="Flip Horizontal" onClick={this.handleFlipX}>↔</button>
            <button title="Flip Vertical" onClick={this.handleFlipY}>↕</button>
        </div>
        <div class="actions">
          <button class="crop-button" onClick={this.handleCrop}>Cortar Imagem</button>
        </div>
      </div>
    );
  }
}
