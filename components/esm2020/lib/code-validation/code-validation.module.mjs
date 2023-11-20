import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CodeValidationComponent } from './code-validation.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SpinnerModule } from '../spinner/spinner.module';
import { LoadingButtonModule } from '../loading-button/loading-button.module';
import * as i0 from "@angular/core";
export class CodeValidationModule {
}
CodeValidationModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: CodeValidationModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
CodeValidationModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "15.1.2", ngImport: i0, type: CodeValidationModule, declarations: [CodeValidationComponent], imports: [CommonModule,
        FormsModule,
        ReactiveFormsModule,
        SpinnerModule,
        LoadingButtonModule], exports: [CodeValidationComponent] });
CodeValidationModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: CodeValidationModule, imports: [CommonModule,
        FormsModule,
        ReactiveFormsModule,
        SpinnerModule,
        LoadingButtonModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: CodeValidationModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        CodeValidationComponent
                    ],
                    exports: [
                        CodeValidationComponent
                    ],
                    imports: [
                        CommonModule,
                        FormsModule,
                        ReactiveFormsModule,
                        SpinnerModule,
                        LoadingButtonModule,
                    ]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29kZS12YWxpZGF0aW9uLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NvbXBvbmVudHMvc3JjL2xpYi9jb2RlLXZhbGlkYXRpb24vY29kZS12YWxpZGF0aW9uLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUN0RSxPQUFPLEVBQUUsV0FBVyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDbEUsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQzFELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHlDQUF5QyxDQUFDOztBQWlCOUUsTUFBTSxPQUFPLG9CQUFvQjs7aUhBQXBCLG9CQUFvQjtrSEFBcEIsb0JBQW9CLGlCQWI3Qix1QkFBdUIsYUFNdkIsWUFBWTtRQUNaLFdBQVc7UUFDWCxtQkFBbUI7UUFDbkIsYUFBYTtRQUNiLG1CQUFtQixhQVBuQix1QkFBdUI7a0hBVWQsb0JBQW9CLFlBUDdCLFlBQVk7UUFDWixXQUFXO1FBQ1gsbUJBQW1CO1FBQ25CLGFBQWE7UUFDYixtQkFBbUI7MkZBR1Ysb0JBQW9CO2tCQWZoQyxRQUFRO21CQUFDO29CQUNSLFlBQVksRUFBRTt3QkFDWix1QkFBdUI7cUJBQ3hCO29CQUNELE9BQU8sRUFBRTt3QkFDUCx1QkFBdUI7cUJBQ3hCO29CQUNELE9BQU8sRUFBRTt3QkFDUCxZQUFZO3dCQUNaLFdBQVc7d0JBQ1gsbUJBQW1CO3dCQUNuQixhQUFhO3dCQUNiLG1CQUFtQjtxQkFDcEI7aUJBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBDb2RlVmFsaWRhdGlvbkNvbXBvbmVudCB9IGZyb20gJy4vY29kZS12YWxpZGF0aW9uLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEZvcm1zTW9kdWxlLCBSZWFjdGl2ZUZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBTcGlubmVyTW9kdWxlIH0gZnJvbSAnLi4vc3Bpbm5lci9zcGlubmVyLm1vZHVsZSc7XHJcbmltcG9ydCB7IExvYWRpbmdCdXR0b25Nb2R1bGUgfSBmcm9tICcuLi9sb2FkaW5nLWJ1dHRvbi9sb2FkaW5nLWJ1dHRvbi5tb2R1bGUnO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICBkZWNsYXJhdGlvbnM6IFtcclxuICAgIENvZGVWYWxpZGF0aW9uQ29tcG9uZW50XHJcbiAgXSxcclxuICBleHBvcnRzOiBbXHJcbiAgICBDb2RlVmFsaWRhdGlvbkNvbXBvbmVudFxyXG4gIF0sXHJcbiAgaW1wb3J0czogW1xyXG4gICAgQ29tbW9uTW9kdWxlLFxyXG4gICAgRm9ybXNNb2R1bGUsXHJcbiAgICBSZWFjdGl2ZUZvcm1zTW9kdWxlLFxyXG4gICAgU3Bpbm5lck1vZHVsZSxcclxuICAgIExvYWRpbmdCdXR0b25Nb2R1bGUsXHJcbiAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ29kZVZhbGlkYXRpb25Nb2R1bGUgeyB9XHJcbiJdfQ==