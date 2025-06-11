import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhoneNumberComponent } from './phone-number.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SpinnerModule } from '../spinner/spinner.module';
import { CustomSelectModule } from '../custom-select/custom-select.module';
import { InputValidationModule } from '../input-validation/input-validation.module';
import { LoadingButtonModule } from '../loading-button/loading-button.module';
import * as i0 from "@angular/core";
export class PhoneNumberModule {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.10", ngImport: i0, type: PhoneNumberModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "18.2.10", ngImport: i0, type: PhoneNumberModule, declarations: [PhoneNumberComponent], imports: [CommonModule,
            CustomSelectModule,
            FormsModule,
            ReactiveFormsModule,
            InputValidationModule,
            LoadingButtonModule,
            SpinnerModule], exports: [PhoneNumberComponent] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "18.2.10", ngImport: i0, type: PhoneNumberModule, imports: [CommonModule,
            CustomSelectModule,
            FormsModule,
            ReactiveFormsModule,
            InputValidationModule,
            LoadingButtonModule,
            SpinnerModule] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.10", ngImport: i0, type: PhoneNumberModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        PhoneNumberComponent,
                    ],
                    exports: [
                        PhoneNumberComponent,
                    ],
                    imports: [
                        CommonModule,
                        CustomSelectModule,
                        FormsModule,
                        ReactiveFormsModule,
                        InputValidationModule,
                        LoadingButtonModule,
                        SpinnerModule,
                    ]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGhvbmUtbnVtYmVyLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NvbXBvbmVudHMvc3JjL2xpYi9waG9uZS1udW1iZXIvcGhvbmUtbnVtYmVyLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUNoRSxPQUFPLEVBQUUsV0FBVyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDbEUsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQzFELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHVDQUF1QyxDQUFDO0FBQzNFLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDZDQUE2QyxDQUFDO0FBQ3BGLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHlDQUF5QyxDQUFDOztBQW1COUUsTUFBTSxPQUFPLGlCQUFpQjsrR0FBakIsaUJBQWlCO2dIQUFqQixpQkFBaUIsaUJBZjFCLG9CQUFvQixhQU1wQixZQUFZO1lBQ1osa0JBQWtCO1lBQ2xCLFdBQVc7WUFDWCxtQkFBbUI7WUFDbkIscUJBQXFCO1lBQ3JCLG1CQUFtQjtZQUNuQixhQUFhLGFBVGIsb0JBQW9CO2dIQVlYLGlCQUFpQixZQVQxQixZQUFZO1lBQ1osa0JBQWtCO1lBQ2xCLFdBQVc7WUFDWCxtQkFBbUI7WUFDbkIscUJBQXFCO1lBQ3JCLG1CQUFtQjtZQUNuQixhQUFhOzs0RkFHSixpQkFBaUI7a0JBakI3QixRQUFRO21CQUFDO29CQUNSLFlBQVksRUFBRTt3QkFDWixvQkFBb0I7cUJBQ3JCO29CQUNELE9BQU8sRUFBRTt3QkFDUCxvQkFBb0I7cUJBQ3JCO29CQUNELE9BQU8sRUFBRTt3QkFDUCxZQUFZO3dCQUNaLGtCQUFrQjt3QkFDbEIsV0FBVzt3QkFDWCxtQkFBbUI7d0JBQ25CLHFCQUFxQjt3QkFDckIsbUJBQW1CO3dCQUNuQixhQUFhO3FCQUNkO2lCQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgUGhvbmVOdW1iZXJDb21wb25lbnQgfSBmcm9tICcuL3Bob25lLW51bWJlci5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBGb3Jtc01vZHVsZSwgUmVhY3RpdmVGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHsgU3Bpbm5lck1vZHVsZSB9IGZyb20gJy4uL3NwaW5uZXIvc3Bpbm5lci5tb2R1bGUnO1xyXG5pbXBvcnQgeyBDdXN0b21TZWxlY3RNb2R1bGUgfSBmcm9tICcuLi9jdXN0b20tc2VsZWN0L2N1c3RvbS1zZWxlY3QubW9kdWxlJztcclxuaW1wb3J0IHsgSW5wdXRWYWxpZGF0aW9uTW9kdWxlIH0gZnJvbSAnLi4vaW5wdXQtdmFsaWRhdGlvbi9pbnB1dC12YWxpZGF0aW9uLm1vZHVsZSc7XHJcbmltcG9ydCB7IExvYWRpbmdCdXR0b25Nb2R1bGUgfSBmcm9tICcuLi9sb2FkaW5nLWJ1dHRvbi9sb2FkaW5nLWJ1dHRvbi5tb2R1bGUnO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICBkZWNsYXJhdGlvbnM6IFtcclxuICAgIFBob25lTnVtYmVyQ29tcG9uZW50LFxyXG4gIF0sXHJcbiAgZXhwb3J0czogW1xyXG4gICAgUGhvbmVOdW1iZXJDb21wb25lbnQsXHJcbiAgXSxcclxuICBpbXBvcnRzOiBbXHJcbiAgICBDb21tb25Nb2R1bGUsXHJcbiAgICBDdXN0b21TZWxlY3RNb2R1bGUsXHJcbiAgICBGb3Jtc01vZHVsZSxcclxuICAgIFJlYWN0aXZlRm9ybXNNb2R1bGUsXHJcbiAgICBJbnB1dFZhbGlkYXRpb25Nb2R1bGUsXHJcbiAgICBMb2FkaW5nQnV0dG9uTW9kdWxlLFxyXG4gICAgU3Bpbm5lck1vZHVsZSxcclxuICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBQaG9uZU51bWJlck1vZHVsZSB7IH1cclxuIl19