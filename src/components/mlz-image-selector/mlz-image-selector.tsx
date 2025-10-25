import { Component, Event, EventEmitter, Prop, h } from '@stencil/core';
import { IChooseImage } from './models/choose-image.interface';

@Component({
  tag: 'mlz-image-selector',
  styleUrl: 'mlz-image-selector.scss',
  scoped: true,
})
export class MlzImageSelector {
  @Prop() buttonText: string = 'Escolher Imagem';
  @Prop() aditionalText: string = 'ou escolha uma cor abaixo';
  @Event() imageFile: EventEmitter<IChooseImage>;
  private inputFileRef: HTMLInputElement;

  private selectFile(): void {
    this.inputFileRef.click();
  }

  private getFile(event: Event): void {
    const target = event.target as HTMLInputElement;
    if (target.files && target.files.length > 0) {
      const image = target.files[0];
      this.convertoToBlobURL(image).then(
        (response: string) => {
          this.imageFile.emit({
            file: image,
            blobUrl: response
          });
        }
      );
    }
  }

  private convertoToBlobURL(file: File): Promise<string> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => {
        const srcData = new Blob(
          [new Uint8Array(reader.result as ArrayBufferLike)],
          { type: file.type }
        );
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
    return (
      <div class="d-flex align-items-center">
        <button type="button" class="btn btn-outline-secondary" onClick={() => this.selectFile()}>
          {this.buttonText}
        </button>

        <p class="mb-0 ms-2 text--sm text--medium text--600">{this.aditionalText}</p>

        <input
          type="file"
          accept="image/*"
          hidden
          ref={(el) => (this.inputFileRef = el as HTMLInputElement)}
          onChange={(event) => this.getFile(event)}
        />
      </div>
    );
  }
}
