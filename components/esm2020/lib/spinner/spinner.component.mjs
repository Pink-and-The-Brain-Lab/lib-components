import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "../loading-button/loading-button.directive";
export class SpinnerComponent {
    constructor(button) {
        this.button = button;
    }
}
SpinnerComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: SpinnerComponent, deps: [{ token: i1.LoadingButtonDirective }], target: i0.ɵɵFactoryTarget.Component });
SpinnerComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.1.2", type: SpinnerComponent, selector: "cdk-spinner", ngImport: i0, template: "<span [@showHidden]=\"button.loading ? 'show' : 'hidden'\" class=\"spinner\">\r\n    <span class=\"spinner-border text-light\" role=\"status\">\r\n      <span class=\"visually-hidden\">Loading...</span>\r\n    </span>\r\n  </span>\r\n  \r\n  <span [@showHidden]=\"!button.loading ? 'show' : 'hidden'\">\r\n    <ng-content></ng-content>\r\n  </span>\r\n  ", styles: [":host{display:flex;width:100%;position:relative;justify-content:center}:host .spinner{position:absolute;top:-5px}.spinner-border{width:1.25em;height:1.25em}\n"], animations: [
        trigger('showHidden', [
            state('show', style({
                opacity: 1,
                pointerEvents: 'unset',
                top: '1px'
            })),
            state('hidden', style({
                opacity: 0,
                pointerEvents: 'unset',
                top: '-5px'
            })),
            transition('show <=> hidden', animate('300ms'))
        ])
    ] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: SpinnerComponent, decorators: [{
            type: Component,
            args: [{ selector: 'cdk-spinner', animations: [
                        trigger('showHidden', [
                            state('show', style({
                                opacity: 1,
                                pointerEvents: 'unset',
                                top: '1px'
                            })),
                            state('hidden', style({
                                opacity: 0,
                                pointerEvents: 'unset',
                                top: '-5px'
                            })),
                            transition('show <=> hidden', animate('300ms'))
                        ])
                    ], template: "<span [@showHidden]=\"button.loading ? 'show' : 'hidden'\" class=\"spinner\">\r\n    <span class=\"spinner-border text-light\" role=\"status\">\r\n      <span class=\"visually-hidden\">Loading...</span>\r\n    </span>\r\n  </span>\r\n  \r\n  <span [@showHidden]=\"!button.loading ? 'show' : 'hidden'\">\r\n    <ng-content></ng-content>\r\n  </span>\r\n  ", styles: [":host{display:flex;width:100%;position:relative;justify-content:center}:host .spinner{position:absolute;top:-5px}.spinner-border{width:1.25em;height:1.25em}\n"] }]
        }], ctorParameters: function () { return [{ type: i1.LoadingButtonDirective }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3Bpbm5lci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jb21wb25lbnRzL3NyYy9saWIvc3Bpbm5lci9zcGlubmVyLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NvbXBvbmVudHMvc3JjL2xpYi9zcGlubmVyL3NwaW5uZXIuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLFVBQVUsRUFBRSxPQUFPLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUNqRixPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7QUF1QjFDLE1BQU0sT0FBTyxnQkFBZ0I7SUFFM0IsWUFDUyxNQUE4QjtRQUE5QixXQUFNLEdBQU4sTUFBTSxDQUF3QjtJQUNuQyxDQUFDOzs2R0FKTSxnQkFBZ0I7aUdBQWhCLGdCQUFnQixtREN4QjdCLG9XQVNFLDBMRERZO1FBQ1YsT0FBTyxDQUFDLFlBQVksRUFBRTtZQUNwQixLQUFLLENBQUMsTUFBTSxFQUFFLEtBQUssQ0FBQztnQkFDbEIsT0FBTyxFQUFFLENBQUM7Z0JBQ1YsYUFBYSxFQUFFLE9BQU87Z0JBQ3RCLEdBQUcsRUFBRSxLQUFLO2FBQ1gsQ0FBQyxDQUFDO1lBQ0gsS0FBSyxDQUFDLFFBQVEsRUFBRSxLQUFLLENBQUM7Z0JBQ3BCLE9BQU8sRUFBRSxDQUFDO2dCQUNWLGFBQWEsRUFBRSxPQUFPO2dCQUN0QixHQUFHLEVBQUUsTUFBTTthQUNaLENBQUMsQ0FBQztZQUNILFVBQVUsQ0FBQyxpQkFBaUIsRUFBRSxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUM7U0FDaEQsQ0FBQztLQUNIOzJGQUVVLGdCQUFnQjtrQkFwQjVCLFNBQVM7K0JBQ0UsYUFBYSxjQUdYO3dCQUNWLE9BQU8sQ0FBQyxZQUFZLEVBQUU7NEJBQ3BCLEtBQUssQ0FBQyxNQUFNLEVBQUUsS0FBSyxDQUFDO2dDQUNsQixPQUFPLEVBQUUsQ0FBQztnQ0FDVixhQUFhLEVBQUUsT0FBTztnQ0FDdEIsR0FBRyxFQUFFLEtBQUs7NkJBQ1gsQ0FBQyxDQUFDOzRCQUNILEtBQUssQ0FBQyxRQUFRLEVBQUUsS0FBSyxDQUFDO2dDQUNwQixPQUFPLEVBQUUsQ0FBQztnQ0FDVixhQUFhLEVBQUUsT0FBTztnQ0FDdEIsR0FBRyxFQUFFLE1BQU07NkJBQ1osQ0FBQyxDQUFDOzRCQUNILFVBQVUsQ0FBQyxpQkFBaUIsRUFBRSxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUM7eUJBQ2hELENBQUM7cUJBQ0giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBhbmltYXRlLCBzdGF0ZSwgc3R5bGUsIHRyYW5zaXRpb24sIHRyaWdnZXIgfSBmcm9tICdAYW5ndWxhci9hbmltYXRpb25zJztcclxuaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IExvYWRpbmdCdXR0b25EaXJlY3RpdmUgfSBmcm9tICcuLi9sb2FkaW5nLWJ1dHRvbi9sb2FkaW5nLWJ1dHRvbi5kaXJlY3RpdmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdjZGstc3Bpbm5lcicsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL3NwaW5uZXIuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL3NwaW5uZXIuY29tcG9uZW50LnNjc3MnXSxcclxuICBhbmltYXRpb25zOiBbXHJcbiAgICB0cmlnZ2VyKCdzaG93SGlkZGVuJywgW1xyXG4gICAgICBzdGF0ZSgnc2hvdycsIHN0eWxlKHtcclxuICAgICAgICBvcGFjaXR5OiAxLFxyXG4gICAgICAgIHBvaW50ZXJFdmVudHM6ICd1bnNldCcsXHJcbiAgICAgICAgdG9wOiAnMXB4J1xyXG4gICAgICB9KSksXHJcbiAgICAgIHN0YXRlKCdoaWRkZW4nLCBzdHlsZSh7XHJcbiAgICAgICAgb3BhY2l0eTogMCxcclxuICAgICAgICBwb2ludGVyRXZlbnRzOiAndW5zZXQnLFxyXG4gICAgICAgIHRvcDogJy01cHgnXHJcbiAgICAgIH0pKSxcclxuICAgICAgdHJhbnNpdGlvbignc2hvdyA8PT4gaGlkZGVuJywgYW5pbWF0ZSgnMzAwbXMnKSlcclxuICAgIF0pXHJcbiAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgU3Bpbm5lckNvbXBvbmVudCB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHVibGljIGJ1dHRvbjogTG9hZGluZ0J1dHRvbkRpcmVjdGl2ZVxyXG4gICkgeyB9XHJcblxyXG59XHJcbiIsIjxzcGFuIFtAc2hvd0hpZGRlbl09XCJidXR0b24ubG9hZGluZyA/ICdzaG93JyA6ICdoaWRkZW4nXCIgY2xhc3M9XCJzcGlubmVyXCI+XHJcbiAgICA8c3BhbiBjbGFzcz1cInNwaW5uZXItYm9yZGVyIHRleHQtbGlnaHRcIiByb2xlPVwic3RhdHVzXCI+XHJcbiAgICAgIDxzcGFuIGNsYXNzPVwidmlzdWFsbHktaGlkZGVuXCI+TG9hZGluZy4uLjwvc3Bhbj5cclxuICAgIDwvc3Bhbj5cclxuICA8L3NwYW4+XHJcbiAgXHJcbiAgPHNwYW4gW0BzaG93SGlkZGVuXT1cIiFidXR0b24ubG9hZGluZyA/ICdzaG93JyA6ICdoaWRkZW4nXCI+XHJcbiAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XHJcbiAgPC9zcGFuPlxyXG4gICJdfQ==