import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreatePasswordComponent } from './create-password.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputValidationModule } from '../input-validation/input-validation.module';
import { PasswordValidationModule } from '../password-validation/password-validation.module';
import { TranslateModule } from '@ngx-translate/core';
import * as i0 from "@angular/core";
import * as i1 from "@ngx-translate/core";
export class CreatePasswordModule {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.10", ngImport: i0, type: CreatePasswordModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "18.2.10", ngImport: i0, type: CreatePasswordModule, declarations: [CreatePasswordComponent], imports: [CommonModule,
            InputValidationModule,
            FormsModule,
            ReactiveFormsModule,
            PasswordValidationModule, i1.TranslateModule], exports: [CreatePasswordComponent] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "18.2.10", ngImport: i0, type: CreatePasswordModule, imports: [CommonModule,
            InputValidationModule,
            FormsModule,
            ReactiveFormsModule,
            PasswordValidationModule,
            TranslateModule.forChild()] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.10", ngImport: i0, type: CreatePasswordModule, decorators: [{
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
                        TranslateModule.forChild(),
                    ]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlYXRlLXBhc3N3b3JkLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NvbXBvbmVudHMvc3JjL2xpYi9jcmVhdGUtcGFzc3dvcmQvY3JlYXRlLXBhc3N3b3JkLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUN0RSxPQUFPLEVBQUUsV0FBVyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDbEUsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sNkNBQTZDLENBQUM7QUFDcEYsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sbURBQW1ELENBQUM7QUFDN0YsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHFCQUFxQixDQUFDOzs7QUFrQnRELE1BQU0sT0FBTyxvQkFBb0I7K0dBQXBCLG9CQUFvQjtnSEFBcEIsb0JBQW9CLGlCQWQ3Qix1QkFBdUIsYUFNdkIsWUFBWTtZQUNaLHFCQUFxQjtZQUNyQixXQUFXO1lBQ1gsbUJBQW1CO1lBQ25CLHdCQUF3QixpQ0FQeEIsdUJBQXVCO2dIQVdkLG9CQUFvQixZQVI3QixZQUFZO1lBQ1oscUJBQXFCO1lBQ3JCLFdBQVc7WUFDWCxtQkFBbUI7WUFDbkIsd0JBQXdCO1lBQ3hCLGVBQWUsQ0FBQyxRQUFRLEVBQUU7OzRGQUdqQixvQkFBb0I7a0JBaEJoQyxRQUFRO21CQUFDO29CQUNSLFlBQVksRUFBRTt3QkFDWix1QkFBdUI7cUJBQ3hCO29CQUNELE9BQU8sRUFBRTt3QkFDUCx1QkFBdUI7cUJBQ3hCO29CQUNELE9BQU8sRUFBRTt3QkFDUCxZQUFZO3dCQUNaLHFCQUFxQjt3QkFDckIsV0FBVzt3QkFDWCxtQkFBbUI7d0JBQ25CLHdCQUF3Qjt3QkFDeEIsZUFBZSxDQUFDLFFBQVEsRUFBRTtxQkFDM0I7aUJBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBDcmVhdGVQYXNzd29yZENvbXBvbmVudCB9IGZyb20gJy4vY3JlYXRlLXBhc3N3b3JkLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEZvcm1zTW9kdWxlLCBSZWFjdGl2ZUZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBJbnB1dFZhbGlkYXRpb25Nb2R1bGUgfSBmcm9tICcuLi9pbnB1dC12YWxpZGF0aW9uL2lucHV0LXZhbGlkYXRpb24ubW9kdWxlJztcclxuaW1wb3J0IHsgUGFzc3dvcmRWYWxpZGF0aW9uTW9kdWxlIH0gZnJvbSAnLi4vcGFzc3dvcmQtdmFsaWRhdGlvbi9wYXNzd29yZC12YWxpZGF0aW9uLm1vZHVsZSc7XHJcbmltcG9ydCB7IFRyYW5zbGF0ZU1vZHVsZSB9IGZyb20gJ0BuZ3gtdHJhbnNsYXRlL2NvcmUnO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICBkZWNsYXJhdGlvbnM6IFtcclxuICAgIENyZWF0ZVBhc3N3b3JkQ29tcG9uZW50XHJcbiAgXSxcclxuICBleHBvcnRzOiBbXHJcbiAgICBDcmVhdGVQYXNzd29yZENvbXBvbmVudFxyXG4gIF0sXHJcbiAgaW1wb3J0czogW1xyXG4gICAgQ29tbW9uTW9kdWxlLFxyXG4gICAgSW5wdXRWYWxpZGF0aW9uTW9kdWxlLFxyXG4gICAgRm9ybXNNb2R1bGUsXHJcbiAgICBSZWFjdGl2ZUZvcm1zTW9kdWxlLFxyXG4gICAgUGFzc3dvcmRWYWxpZGF0aW9uTW9kdWxlLFxyXG4gICAgVHJhbnNsYXRlTW9kdWxlLmZvckNoaWxkKCksXHJcbiAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ3JlYXRlUGFzc3dvcmRNb2R1bGUgeyB9XHJcbiJdfQ==