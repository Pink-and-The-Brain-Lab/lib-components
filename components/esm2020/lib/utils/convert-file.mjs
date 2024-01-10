import { Injectable } from "@angular/core";
import * as i0 from "@angular/core";
export class FileConversor {
    convertoToBlobURL(file) {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onload = () => {
                const srcData = new Blob([new Uint8Array(reader.result)], { type: file.type });
                const urlFile = URL.createObjectURL(srcData);
                resolve(urlFile);
            };
            reader.onerror = reject;
            reader.readAsArrayBuffer(file);
        });
    }
}
FileConversor.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: FileConversor, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
FileConversor.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: FileConversor, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: FileConversor, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udmVydC1maWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY29tcG9uZW50cy9zcmMvbGliL3V0aWxzL2NvbnZlcnQtZmlsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDOztBQUszQyxNQUFNLE9BQU8sYUFBYTtJQUV4QixpQkFBaUIsQ0FBQyxJQUFVO1FBQzFCLE9BQU8sSUFBSSxPQUFPLENBQUMsQ0FBQyxPQUFPLEVBQUUsTUFBTSxFQUFFLEVBQUU7WUFDckMsTUFBTSxNQUFNLEdBQUcsSUFBSSxVQUFVLEVBQUUsQ0FBQztZQUNoQyxNQUFNLENBQUMsTUFBTSxHQUFHLEdBQUcsRUFBRTtnQkFDbkIsTUFBTSxPQUFPLEdBQUcsSUFBSSxJQUFJLENBQ3RCLENBQUMsSUFBSSxVQUFVLENBQUMsTUFBTSxDQUFDLE1BQXlCLENBQUMsQ0FBQyxFQUNsRCxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSSxFQUFFLENBQ3BCLENBQUM7Z0JBQ0YsTUFBTSxPQUFPLEdBQUcsR0FBRyxDQUFDLGVBQWUsQ0FBQyxPQUFPLENBQUMsQ0FBQztnQkFDN0MsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQ25CLENBQUMsQ0FBQztZQUVGLE1BQU0sQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDO1lBQ3hCLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNqQyxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7OzBHQWpCVSxhQUFhOzhHQUFiLGFBQWEsY0FGWixNQUFNOzJGQUVQLGFBQWE7a0JBSHpCLFVBQVU7bUJBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBGaWxlQ29udmVyc29yIHtcclxuXHJcbiAgY29udmVydG9Ub0Jsb2JVUkwoZmlsZTogRmlsZSk6IFByb21pc2U8c3RyaW5nPiB7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICBjb25zdCByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xyXG4gICAgICByZWFkZXIub25sb2FkID0gKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHNyY0RhdGEgPSBuZXcgQmxvYihcclxuICAgICAgICAgIFtuZXcgVWludDhBcnJheShyZWFkZXIucmVzdWx0IGFzIEFycmF5QnVmZmVyTGlrZSldLFxyXG4gICAgICAgICAgeyB0eXBlOiBmaWxlLnR5cGUgfVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgY29uc3QgdXJsRmlsZSA9IFVSTC5jcmVhdGVPYmplY3RVUkwoc3JjRGF0YSk7XHJcbiAgICAgICAgcmVzb2x2ZSh1cmxGaWxlKTtcclxuICAgICAgfTtcclxuICBcclxuICAgICAgcmVhZGVyLm9uZXJyb3IgPSByZWplY3Q7XHJcbiAgICAgIHJlYWRlci5yZWFkQXNBcnJheUJ1ZmZlcihmaWxlKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbn1cclxuIl19