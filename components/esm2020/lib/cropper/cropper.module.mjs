import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CropperComponent } from './cropper.component';
import { ImageCropperModule } from 'ngx-image-cropper';
import { TooltipModule } from 'ng2-tooltip-directive';
import { AvatarModule } from '../avatar/avatar.module';
import { RangeModule } from '../range/range.module';
import * as i0 from "@angular/core";
export class CropperModule {
}
CropperModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: CropperModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
CropperModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "15.1.2", ngImport: i0, type: CropperModule, declarations: [CropperComponent], imports: [CommonModule,
        AvatarModule,
        ImageCropperModule,
        RangeModule,
        TooltipModule], exports: [CommonModule] });
CropperModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: CropperModule, imports: [CommonModule,
        AvatarModule,
        ImageCropperModule,
        RangeModule,
        TooltipModule, CommonModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: CropperModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        CropperComponent
                    ],
                    exports: [
                        CommonModule
                    ],
                    imports: [
                        CommonModule,
                        AvatarModule,
                        ImageCropperModule,
                        RangeModule,
                        TooltipModule,
                    ]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JvcHBlci5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jb21wb25lbnRzL3NyYy9saWIvY3JvcHBlci9jcm9wcGVyLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUN2RCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUN2RCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDdEQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQzs7QUFpQnBELE1BQU0sT0FBTyxhQUFhOzswR0FBYixhQUFhOzJHQUFiLGFBQWEsaUJBYnRCLGdCQUFnQixhQU1oQixZQUFZO1FBQ1osWUFBWTtRQUNaLGtCQUFrQjtRQUNsQixXQUFXO1FBQ1gsYUFBYSxhQVBiLFlBQVk7MkdBVUgsYUFBYSxZQVB0QixZQUFZO1FBQ1osWUFBWTtRQUNaLGtCQUFrQjtRQUNsQixXQUFXO1FBQ1gsYUFBYSxFQVBiLFlBQVk7MkZBVUgsYUFBYTtrQkFmekIsUUFBUTttQkFBQztvQkFDUixZQUFZLEVBQUU7d0JBQ1osZ0JBQWdCO3FCQUNqQjtvQkFDRCxPQUFPLEVBQUU7d0JBQ1AsWUFBWTtxQkFDYjtvQkFDRCxPQUFPLEVBQUU7d0JBQ1AsWUFBWTt3QkFDWixZQUFZO3dCQUNaLGtCQUFrQjt3QkFDbEIsV0FBVzt3QkFDWCxhQUFhO3FCQUNkO2lCQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgQ3JvcHBlckNvbXBvbmVudCB9IGZyb20gJy4vY3JvcHBlci5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBJbWFnZUNyb3BwZXJNb2R1bGUgfSBmcm9tICduZ3gtaW1hZ2UtY3JvcHBlcic7XHJcbmltcG9ydCB7IFRvb2x0aXBNb2R1bGUgfSBmcm9tICduZzItdG9vbHRpcC1kaXJlY3RpdmUnO1xyXG5pbXBvcnQgeyBBdmF0YXJNb2R1bGUgfSBmcm9tICcuLi9hdmF0YXIvYXZhdGFyLm1vZHVsZSc7XHJcbmltcG9ydCB7IFJhbmdlTW9kdWxlIH0gZnJvbSAnLi4vcmFuZ2UvcmFuZ2UubW9kdWxlJztcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgZGVjbGFyYXRpb25zOiBbXHJcbiAgICBDcm9wcGVyQ29tcG9uZW50XHJcbiAgXSxcclxuICBleHBvcnRzOiBbXHJcbiAgICBDb21tb25Nb2R1bGVcclxuICBdLFxyXG4gIGltcG9ydHM6IFtcclxuICAgIENvbW1vbk1vZHVsZSxcclxuICAgIEF2YXRhck1vZHVsZSxcclxuICAgIEltYWdlQ3JvcHBlck1vZHVsZSxcclxuICAgIFJhbmdlTW9kdWxlLFxyXG4gICAgVG9vbHRpcE1vZHVsZSxcclxuICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDcm9wcGVyTW9kdWxlIHsgfVxyXG4iXX0=