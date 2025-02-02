import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CustomSelectComponent } from './custom-select.component';
import { PopoverModule } from '../popover/popover.module';
import * as i0 from "@angular/core";
export class CustomSelectModule {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.10", ngImport: i0, type: CustomSelectModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "18.2.10", ngImport: i0, type: CustomSelectModule, declarations: [CustomSelectComponent], imports: [CommonModule,
            PopoverModule,
            FormsModule,
            ReactiveFormsModule], exports: [CustomSelectComponent] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "18.2.10", ngImport: i0, type: CustomSelectModule, imports: [CommonModule,
            PopoverModule,
            FormsModule,
            ReactiveFormsModule] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.10", ngImport: i0, type: CustomSelectModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        CustomSelectComponent
                    ],
                    exports: [
                        CustomSelectComponent
                    ],
                    imports: [
                        CommonModule,
                        PopoverModule,
                        FormsModule,
                        ReactiveFormsModule,
                    ]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VzdG9tLXNlbGVjdC5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jb21wb25lbnRzL3NyYy9saWIvY3VzdG9tLXNlbGVjdC9jdXN0b20tc2VsZWN0Lm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsV0FBVyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDbEUsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDbEUsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDJCQUEyQixDQUFDOztBQWdCMUQsTUFBTSxPQUFPLGtCQUFrQjsrR0FBbEIsa0JBQWtCO2dIQUFsQixrQkFBa0IsaUJBWjNCLHFCQUFxQixhQU1yQixZQUFZO1lBQ1osYUFBYTtZQUNiLFdBQVc7WUFDWCxtQkFBbUIsYUFObkIscUJBQXFCO2dIQVNaLGtCQUFrQixZQU4zQixZQUFZO1lBQ1osYUFBYTtZQUNiLFdBQVc7WUFDWCxtQkFBbUI7OzRGQUdWLGtCQUFrQjtrQkFkOUIsUUFBUTttQkFBQztvQkFDUixZQUFZLEVBQUU7d0JBQ1oscUJBQXFCO3FCQUN0QjtvQkFDRCxPQUFPLEVBQUU7d0JBQ1AscUJBQXFCO3FCQUN0QjtvQkFDRCxPQUFPLEVBQUU7d0JBQ1AsWUFBWTt3QkFDWixhQUFhO3dCQUNiLFdBQVc7d0JBQ1gsbUJBQW1CO3FCQUNwQjtpQkFDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IEZvcm1zTW9kdWxlLCBSZWFjdGl2ZUZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBDdXN0b21TZWxlY3RDb21wb25lbnQgfSBmcm9tICcuL2N1c3RvbS1zZWxlY3QuY29tcG9uZW50JztcclxuaW1wb3J0IHsgUG9wb3Zlck1vZHVsZSB9IGZyb20gJy4uL3BvcG92ZXIvcG9wb3Zlci5tb2R1bGUnO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICBkZWNsYXJhdGlvbnM6IFtcclxuICAgIEN1c3RvbVNlbGVjdENvbXBvbmVudFxyXG4gIF0sXHJcbiAgZXhwb3J0czogW1xyXG4gICAgQ3VzdG9tU2VsZWN0Q29tcG9uZW50XHJcbiAgXSxcclxuICBpbXBvcnRzOiBbXHJcbiAgICBDb21tb25Nb2R1bGUsXHJcbiAgICBQb3BvdmVyTW9kdWxlLFxyXG4gICAgRm9ybXNNb2R1bGUsXHJcbiAgICBSZWFjdGl2ZUZvcm1zTW9kdWxlLFxyXG4gIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIEN1c3RvbVNlbGVjdE1vZHVsZSB7IH1cclxuIl19