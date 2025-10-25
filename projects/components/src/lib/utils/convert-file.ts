import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class FileConversor {

  convertoToBlobURL(file: File): Promise<string> {
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
  
      reader.onerror = reject;
      reader.readAsArrayBuffer(file);
    });
  }

}
