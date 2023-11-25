import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreatePasswordComponent } from './create-password.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputValidationModule } from '../input-validation/input-validation.module';
import { PasswordValidationModule } from '../password-validation/password-validation.module';
import * as i0 from "@angular/core";
export class CreatePasswordModule {
}
CreatePasswordModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: CreatePasswordModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
CreatePasswordModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "15.1.2", ngImport: i0, type: CreatePasswordModule, declarations: [CreatePasswordComponent], imports: [CommonModule,
        InputValidationModule,
        FormsModule,
        ReactiveFormsModule,
        PasswordValidationModule], exports: [CreatePasswordComponent] });
CreatePasswordModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: CreatePasswordModule, imports: [CommonModule,
        InputValidationModule,
        FormsModule,
        ReactiveFormsModule,
        PasswordValidationModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: CreatePasswordModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        CreatePasswordComponent
                    ],
                    exports: [
                        CreatePasswordComponent
                    ],
                    imports: [
                        CommonModule,
                        InputValidationModule,
                        FormsModule,
                        ReactiveFormsModule,
                        PasswordValidationModule,
                    ]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlYXRlLXBhc3N3b3JkLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NvbXBvbmVudHMvc3JjL2xpYi9jcmVhdGUtcGFzc3dvcmQvY3JlYXRlLXBhc3N3b3JkLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUN0RSxPQUFPLEVBQUUsV0FBVyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDbEUsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sNkNBQTZDLENBQUM7QUFDcEYsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sbURBQW1ELENBQUM7O0FBaUI3RixNQUFNLE9BQU8sb0JBQW9COztpSEFBcEIsb0JBQW9CO2tIQUFwQixvQkFBb0IsaUJBYjdCLHVCQUF1QixhQU12QixZQUFZO1FBQ1oscUJBQXFCO1FBQ3JCLFdBQVc7UUFDWCxtQkFBbUI7UUFDbkIsd0JBQXdCLGFBUHhCLHVCQUF1QjtrSEFVZCxvQkFBb0IsWUFQN0IsWUFBWTtRQUNaLHFCQUFxQjtRQUNyQixXQUFXO1FBQ1gsbUJBQW1CO1FBQ25CLHdCQUF3QjsyRkFHZixvQkFBb0I7a0JBZmhDLFFBQVE7bUJBQUM7b0JBQ1IsWUFBWSxFQUFFO3dCQUNaLHVCQUF1QjtxQkFDeEI7b0JBQ0QsT0FBTyxFQUFFO3dCQUNQLHVCQUF1QjtxQkFDeEI7b0JBQ0QsT0FBTyxFQUFFO3dCQUNQLFlBQVk7d0JBQ1oscUJBQXFCO3dCQUNyQixXQUFXO3dCQUNYLG1CQUFtQjt3QkFDbkIsd0JBQXdCO3FCQUN6QjtpQkFDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IENyZWF0ZVBhc3N3b3JkQ29tcG9uZW50IH0gZnJvbSAnLi9jcmVhdGUtcGFzc3dvcmQuY29tcG9uZW50JztcclxuaW1wb3J0IHsgRm9ybXNNb2R1bGUsIFJlYWN0aXZlRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IElucHV0VmFsaWRhdGlvbk1vZHVsZSB9IGZyb20gJy4uL2lucHV0LXZhbGlkYXRpb24vaW5wdXQtdmFsaWRhdGlvbi5tb2R1bGUnO1xyXG5pbXBvcnQgeyBQYXNzd29yZFZhbGlkYXRpb25Nb2R1bGUgfSBmcm9tICcuLi9wYXNzd29yZC12YWxpZGF0aW9uL3Bhc3N3b3JkLXZhbGlkYXRpb24ubW9kdWxlJztcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgZGVjbGFyYXRpb25zOiBbXHJcbiAgICBDcmVhdGVQYXNzd29yZENvbXBvbmVudFxyXG4gIF0sXHJcbiAgZXhwb3J0czogW1xyXG4gICAgQ3JlYXRlUGFzc3dvcmRDb21wb25lbnRcclxuICBdLFxyXG4gIGltcG9ydHM6IFtcclxuICAgIENvbW1vbk1vZHVsZSxcclxuICAgIElucHV0VmFsaWRhdGlvbk1vZHVsZSxcclxuICAgIEZvcm1zTW9kdWxlLFxyXG4gICAgUmVhY3RpdmVGb3Jtc01vZHVsZSxcclxuICAgIFBhc3N3b3JkVmFsaWRhdGlvbk1vZHVsZSxcclxuICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDcmVhdGVQYXNzd29yZE1vZHVsZSB7IH1cclxuIl19