import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "../loading-button/loading-button.directive";
export class SpinnerComponent {
    constructor(button) {
        this.button = button;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.10", ngImport: i0, type: SpinnerComponent, deps: [{ token: i1.LoadingButtonDirective }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.10", type: SpinnerComponent, selector: "cdk-spinner", ngImport: i0, template: "<span [@showHidden]=\"button.loading ? 'show' : 'hidden'\" class=\"spinner\">\r\n    <span class=\"spinner-border text-light\" role=\"status\">\r\n      <span class=\"visually-hidden\">Loading...</span>\r\n    </span>\r\n  </span>\r\n  \r\n  <span [@showHidden]=\"!button.loading ? 'show' : 'hidden'\">\r\n    <ng-content></ng-content>\r\n  </span>\r\n  ", styles: [":host{display:flex;width:100%;position:relative;justify-content:center}:host .spinner{position:absolute;top:-5px}.spinner-border{width:1.25em;height:1.25em}\n"], animations: [
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
        ] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.10", ngImport: i0, type: SpinnerComponent, decorators: [{
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
        }], ctorParameters: () => [{ type: i1.LoadingButtonDirective }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3Bpbm5lci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jb21wb25lbnRzL3NyYy9saWIvc3Bpbm5lci9zcGlubmVyLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NvbXBvbmVudHMvc3JjL2xpYi9zcGlubmVyL3NwaW5uZXIuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLFVBQVUsRUFBRSxPQUFPLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUNqRixPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7QUF1QjFDLE1BQU0sT0FBTyxnQkFBZ0I7SUFFM0IsWUFDUyxNQUE4QjtRQUE5QixXQUFNLEdBQU4sTUFBTSxDQUF3QjtJQUNuQyxDQUFDOytHQUpNLGdCQUFnQjttR0FBaEIsZ0JBQWdCLG1EQ3hCN0Isb1dBU0UsMExERFk7WUFDVixPQUFPLENBQUMsWUFBWSxFQUFFO2dCQUNwQixLQUFLLENBQUMsTUFBTSxFQUFFLEtBQUssQ0FBQztvQkFDbEIsT0FBTyxFQUFFLENBQUM7b0JBQ1YsYUFBYSxFQUFFLE9BQU87b0JBQ3RCLEdBQUcsRUFBRSxLQUFLO2lCQUNYLENBQUMsQ0FBQztnQkFDSCxLQUFLLENBQUMsUUFBUSxFQUFFLEtBQUssQ0FBQztvQkFDcEIsT0FBTyxFQUFFLENBQUM7b0JBQ1YsYUFBYSxFQUFFLE9BQU87b0JBQ3RCLEdBQUcsRUFBRSxNQUFNO2lCQUNaLENBQUMsQ0FBQztnQkFDSCxVQUFVLENBQUMsaUJBQWlCLEVBQUUsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDO2FBQ2hELENBQUM7U0FDSDs7NEZBRVUsZ0JBQWdCO2tCQXBCNUIsU0FBUzsrQkFDRSxhQUFhLGNBR1g7d0JBQ1YsT0FBTyxDQUFDLFlBQVksRUFBRTs0QkFDcEIsS0FBSyxDQUFDLE1BQU0sRUFBRSxLQUFLLENBQUM7Z0NBQ2xCLE9BQU8sRUFBRSxDQUFDO2dDQUNWLGFBQWEsRUFBRSxPQUFPO2dDQUN0QixHQUFHLEVBQUUsS0FBSzs2QkFDWCxDQUFDLENBQUM7NEJBQ0gsS0FBSyxDQUFDLFFBQVEsRUFBRSxLQUFLLENBQUM7Z0NBQ3BCLE9BQU8sRUFBRSxDQUFDO2dDQUNWLGFBQWEsRUFBRSxPQUFPO2dDQUN0QixHQUFHLEVBQUUsTUFBTTs2QkFDWixDQUFDLENBQUM7NEJBQ0gsVUFBVSxDQUFDLGlCQUFpQixFQUFFLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQzt5QkFDaEQsQ0FBQztxQkFDSCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGFuaW1hdGUsIHN0YXRlLCBzdHlsZSwgdHJhbnNpdGlvbiwgdHJpZ2dlciB9IGZyb20gJ0Bhbmd1bGFyL2FuaW1hdGlvbnMnO1xyXG5pbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTG9hZGluZ0J1dHRvbkRpcmVjdGl2ZSB9IGZyb20gJy4uL2xvYWRpbmctYnV0dG9uL2xvYWRpbmctYnV0dG9uLmRpcmVjdGl2ZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2Nkay1zcGlubmVyJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vc3Bpbm5lci5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vc3Bpbm5lci5jb21wb25lbnQuc2NzcyddLFxyXG4gIGFuaW1hdGlvbnM6IFtcclxuICAgIHRyaWdnZXIoJ3Nob3dIaWRkZW4nLCBbXHJcbiAgICAgIHN0YXRlKCdzaG93Jywgc3R5bGUoe1xyXG4gICAgICAgIG9wYWNpdHk6IDEsXHJcbiAgICAgICAgcG9pbnRlckV2ZW50czogJ3Vuc2V0JyxcclxuICAgICAgICB0b3A6ICcxcHgnXHJcbiAgICAgIH0pKSxcclxuICAgICAgc3RhdGUoJ2hpZGRlbicsIHN0eWxlKHtcclxuICAgICAgICBvcGFjaXR5OiAwLFxyXG4gICAgICAgIHBvaW50ZXJFdmVudHM6ICd1bnNldCcsXHJcbiAgICAgICAgdG9wOiAnLTVweCdcclxuICAgICAgfSkpLFxyXG4gICAgICB0cmFuc2l0aW9uKCdzaG93IDw9PiBoaWRkZW4nLCBhbmltYXRlKCczMDBtcycpKVxyXG4gICAgXSlcclxuICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTcGlubmVyQ29tcG9uZW50IHtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwdWJsaWMgYnV0dG9uOiBMb2FkaW5nQnV0dG9uRGlyZWN0aXZlXHJcbiAgKSB7IH1cclxuXHJcbn1cclxuIiwiPHNwYW4gW0BzaG93SGlkZGVuXT1cImJ1dHRvbi5sb2FkaW5nID8gJ3Nob3cnIDogJ2hpZGRlbidcIiBjbGFzcz1cInNwaW5uZXJcIj5cclxuICAgIDxzcGFuIGNsYXNzPVwic3Bpbm5lci1ib3JkZXIgdGV4dC1saWdodFwiIHJvbGU9XCJzdGF0dXNcIj5cclxuICAgICAgPHNwYW4gY2xhc3M9XCJ2aXN1YWxseS1oaWRkZW5cIj5Mb2FkaW5nLi4uPC9zcGFuPlxyXG4gICAgPC9zcGFuPlxyXG4gIDwvc3Bhbj5cclxuICBcclxuICA8c3BhbiBbQHNob3dIaWRkZW5dPVwiIWJ1dHRvbi5sb2FkaW5nID8gJ3Nob3cnIDogJ2hpZGRlbidcIj5cclxuICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cclxuICA8L3NwYW4+XHJcbiAgIl19