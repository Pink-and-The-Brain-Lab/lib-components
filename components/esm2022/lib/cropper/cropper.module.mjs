import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CropperComponent } from './cropper.component';
import { ImageCropperModule } from 'ngx-image-cropper';
// import { TooltipModule } from 'ng2-tooltip-directive';
import { AvatarModule } from '../avatar/avatar.module';
import { RangeModule } from '../range/range.module';
import * as i0 from "@angular/core";
export class CropperModule {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.10", ngImport: i0, type: CropperModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "18.2.10", ngImport: i0, type: CropperModule, declarations: [CropperComponent], imports: [CommonModule,
            AvatarModule,
            ImageCropperModule,
            RangeModule], exports: [CommonModule] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "18.2.10", ngImport: i0, type: CropperModule, imports: [CommonModule,
            AvatarModule,
            ImageCropperModule,
            RangeModule, CommonModule] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.10", ngImport: i0, type: CropperModule, decorators: [{
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
                        // TooltipModule,
                    ]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JvcHBlci5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jb21wb25lbnRzL3NyYy9saWIvY3JvcHBlci9jcm9wcGVyLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUN2RCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUN2RCx5REFBeUQ7QUFDekQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQzs7QUFpQnBELE1BQU0sT0FBTyxhQUFhOytHQUFiLGFBQWE7Z0hBQWIsYUFBYSxpQkFidEIsZ0JBQWdCLGFBTWhCLFlBQVk7WUFDWixZQUFZO1lBQ1osa0JBQWtCO1lBQ2xCLFdBQVcsYUFOWCxZQUFZO2dIQVVILGFBQWEsWUFQdEIsWUFBWTtZQUNaLFlBQVk7WUFDWixrQkFBa0I7WUFDbEIsV0FBVyxFQU5YLFlBQVk7OzRGQVVILGFBQWE7a0JBZnpCLFFBQVE7bUJBQUM7b0JBQ1IsWUFBWSxFQUFFO3dCQUNaLGdCQUFnQjtxQkFDakI7b0JBQ0QsT0FBTyxFQUFFO3dCQUNQLFlBQVk7cUJBQ2I7b0JBQ0QsT0FBTyxFQUFFO3dCQUNQLFlBQVk7d0JBQ1osWUFBWTt3QkFDWixrQkFBa0I7d0JBQ2xCLFdBQVc7d0JBQ1gsaUJBQWlCO3FCQUNsQjtpQkFDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IENyb3BwZXJDb21wb25lbnQgfSBmcm9tICcuL2Nyb3BwZXIuY29tcG9uZW50JztcclxuaW1wb3J0IHsgSW1hZ2VDcm9wcGVyTW9kdWxlIH0gZnJvbSAnbmd4LWltYWdlLWNyb3BwZXInO1xyXG4vLyBpbXBvcnQgeyBUb29sdGlwTW9kdWxlIH0gZnJvbSAnbmcyLXRvb2x0aXAtZGlyZWN0aXZlJztcclxuaW1wb3J0IHsgQXZhdGFyTW9kdWxlIH0gZnJvbSAnLi4vYXZhdGFyL2F2YXRhci5tb2R1bGUnO1xyXG5pbXBvcnQgeyBSYW5nZU1vZHVsZSB9IGZyb20gJy4uL3JhbmdlL3JhbmdlLm1vZHVsZSc7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGRlY2xhcmF0aW9uczogW1xyXG4gICAgQ3JvcHBlckNvbXBvbmVudFxyXG4gIF0sXHJcbiAgZXhwb3J0czogW1xyXG4gICAgQ29tbW9uTW9kdWxlXHJcbiAgXSxcclxuICBpbXBvcnRzOiBbXHJcbiAgICBDb21tb25Nb2R1bGUsXHJcbiAgICBBdmF0YXJNb2R1bGUsXHJcbiAgICBJbWFnZUNyb3BwZXJNb2R1bGUsXHJcbiAgICBSYW5nZU1vZHVsZSxcclxuICAgIC8vIFRvb2x0aXBNb2R1bGUsXHJcbiAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ3JvcHBlck1vZHVsZSB7IH1cclxuIl19