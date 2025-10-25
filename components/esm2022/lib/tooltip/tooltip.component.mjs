import { ChangeDetectionStrategy, Component, HostBinding, Input } from '@angular/core';
import { animate, style, transition, trigger } from '@angular/animations';
import * as i0 from "@angular/core";
export class TooltipComponent {
    constructor() {
        this.placement = 'auto';
        this.noMax = false;
        this.text = "";
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.10", ngImport: i0, type: TooltipComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.10", type: TooltipComponent, selector: "cdk-tooltip", inputs: { placement: "placement", noMax: "noMax", text: "text" }, host: { properties: { "class": "this.placement", "class.no-max": "this.noMax" } }, ngImport: i0, template: "<div class=\"tool-tip\" role=\"tooltip\" @tooltip>\r\n  <div class=\"arrow\"></div>\r\n  <div class=\"tooltip-inner\" [innerHTML]=\"text\"></div>\r\n</div>\r\n", styles: [":host{display:block}:host.tooltip-right .tool-tip .arrow{top:50%;left:2px}:host.tooltip-left .tool-tip .arrow{top:50%;left:100%}:host.tooltip-bottom .tool-tip .arrow{left:50%;top:2px}:host.tooltip-bottom-left .tool-tip .arrow{left:50%;top:2px}:host.no-max .tool-tip .tooltip-inner{max-width:none}.tool-tip{position:relative}.tool-tip .arrow{content:\" \";width:10px;height:10px;margin:-6px 0 0 -6px;position:absolute;z-index:2;top:100%;left:50%;background-color:var(--emphasis-low);transform:rotate(45deg);border-radius:2px}.tool-tip .tooltip-inner{background-color:var(--emphasis-low);color:var(--white);font-size:.75rem;line-height:1rem;border-radius:5px;max-width:200px;padding:.25rem .5rem;word-break:break-word;z-index:3;text-align:left}\n"], animations: [
            trigger("tooltip", [
                transition(":enter", [
                    style({ opacity: 0 }),
                    animate(300, style({ opacity: 1 }))
                ]),
                transition(":leave", [animate(300, style({ opacity: 0 }))])
            ])
        ], changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.10", ngImport: i0, type: TooltipComponent, decorators: [{
            type: Component,
            args: [{ selector: 'cdk-tooltip', changeDetection: ChangeDetectionStrategy.OnPush, animations: [
                        trigger("tooltip", [
                            transition(":enter", [
                                style({ opacity: 0 }),
                                animate(300, style({ opacity: 1 }))
                            ]),
                            transition(":leave", [animate(300, style({ opacity: 0 }))])
                        ])
                    ], template: "<div class=\"tool-tip\" role=\"tooltip\" @tooltip>\r\n  <div class=\"arrow\"></div>\r\n  <div class=\"tooltip-inner\" [innerHTML]=\"text\"></div>\r\n</div>\r\n", styles: [":host{display:block}:host.tooltip-right .tool-tip .arrow{top:50%;left:2px}:host.tooltip-left .tool-tip .arrow{top:50%;left:100%}:host.tooltip-bottom .tool-tip .arrow{left:50%;top:2px}:host.tooltip-bottom-left .tool-tip .arrow{left:50%;top:2px}:host.no-max .tool-tip .tooltip-inner{max-width:none}.tool-tip{position:relative}.tool-tip .arrow{content:\" \";width:10px;height:10px;margin:-6px 0 0 -6px;position:absolute;z-index:2;top:100%;left:50%;background-color:var(--emphasis-low);transform:rotate(45deg);border-radius:2px}.tool-tip .tooltip-inner{background-color:var(--emphasis-low);color:var(--white);font-size:.75rem;line-height:1rem;border-radius:5px;max-width:200px;padding:.25rem .5rem;word-break:break-word;z-index:3;text-align:left}\n"] }]
        }], propDecorators: { placement: [{
                type: Input
            }, {
                type: HostBinding,
                args: ["class"]
            }], noMax: [{
                type: Input
            }, {
                type: HostBinding,
                args: ["class.no-max"]
            }], text: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9vbHRpcC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jb21wb25lbnRzL3NyYy9saWIvdG9vbHRpcC90b29sdGlwLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NvbXBvbmVudHMvc3JjL2xpYi90b29sdGlwL3Rvb2x0aXAuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLHVCQUF1QixFQUFFLFNBQVMsRUFBRSxXQUFXLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXZGLE9BQU8sRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLFVBQVUsRUFBRSxPQUFPLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQzs7QUFpQjFFLE1BQU0sT0FBTyxnQkFBZ0I7SUFmN0I7UUFnQmlDLGNBQVMsR0FBc0IsTUFBTSxDQUFDO1FBQy9CLFVBQUssR0FBRyxLQUFLLENBQUM7UUFDM0MsU0FBSSxHQUFHLEVBQUUsQ0FBQztLQUNwQjsrR0FKWSxnQkFBZ0I7bUdBQWhCLGdCQUFnQix3TUNuQjdCLGlLQUlBLG93QkRLYztZQUNWLE9BQU8sQ0FBQyxTQUFTLEVBQUU7Z0JBQ2pCLFVBQVUsQ0FBQyxRQUFRLEVBQUU7b0JBQ25CLEtBQUssQ0FBQyxFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUUsQ0FBQztvQkFDckIsT0FBTyxDQUFDLEdBQUcsRUFBRSxLQUFLLENBQUMsRUFBRSxPQUFPLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztpQkFDcEMsQ0FBQztnQkFDRixVQUFVLENBQUMsUUFBUSxFQUFFLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxLQUFLLENBQUMsRUFBRSxPQUFPLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7YUFDNUQsQ0FBQztTQUNIOzs0RkFFVSxnQkFBZ0I7a0JBZjVCLFNBQVM7K0JBQ0UsYUFBYSxtQkFHTix1QkFBdUIsQ0FBQyxNQUFNLGNBQ25DO3dCQUNWLE9BQU8sQ0FBQyxTQUFTLEVBQUU7NEJBQ2pCLFVBQVUsQ0FBQyxRQUFRLEVBQUU7Z0NBQ25CLEtBQUssQ0FBQyxFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUUsQ0FBQztnQ0FDckIsT0FBTyxDQUFDLEdBQUcsRUFBRSxLQUFLLENBQUMsRUFBRSxPQUFPLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQzs2QkFDcEMsQ0FBQzs0QkFDRixVQUFVLENBQUMsUUFBUSxFQUFFLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxLQUFLLENBQUMsRUFBRSxPQUFPLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7eUJBQzVELENBQUM7cUJBQ0g7OEJBRzhCLFNBQVM7c0JBQXZDLEtBQUs7O3NCQUFJLFdBQVc7dUJBQUMsT0FBTztnQkFDUyxLQUFLO3NCQUExQyxLQUFLOztzQkFBSSxXQUFXO3VCQUFDLGNBQWM7Z0JBQzNCLElBQUk7c0JBQVosS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQsIEhvc3RCaW5kaW5nLCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBUb29sdGlwZVBsYWNlbWVudCB9IGZyb20gJy4vdG9vbHRpcC1wbGFjZW1lbnQudHlwZSc7XHJcbmltcG9ydCB7IGFuaW1hdGUsIHN0eWxlLCB0cmFuc2l0aW9uLCB0cmlnZ2VyIH0gZnJvbSAnQGFuZ3VsYXIvYW5pbWF0aW9ucyc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2Nkay10b29sdGlwJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vdG9vbHRpcC5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vdG9vbHRpcC5jb21wb25lbnQuc2NzcyddLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxyXG4gIGFuaW1hdGlvbnM6IFtcclxuICAgIHRyaWdnZXIoXCJ0b29sdGlwXCIsIFtcclxuICAgICAgdHJhbnNpdGlvbihcIjplbnRlclwiLCBbXHJcbiAgICAgICAgc3R5bGUoeyBvcGFjaXR5OiAwIH0pLFxyXG4gICAgICAgIGFuaW1hdGUoMzAwLCBzdHlsZSh7IG9wYWNpdHk6IDEgfSkpXHJcbiAgICAgIF0pLFxyXG4gICAgICB0cmFuc2l0aW9uKFwiOmxlYXZlXCIsIFthbmltYXRlKDMwMCwgc3R5bGUoeyBvcGFjaXR5OiAwIH0pKV0pXHJcbiAgICBdKVxyXG4gIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIFRvb2x0aXBDb21wb25lbnQge1xyXG4gIEBJbnB1dCgpIEBIb3N0QmluZGluZyhcImNsYXNzXCIpIHBsYWNlbWVudDogVG9vbHRpcGVQbGFjZW1lbnQgPSAnYXV0byc7XHJcbiAgQElucHV0KCkgQEhvc3RCaW5kaW5nKFwiY2xhc3Mubm8tbWF4XCIpIG5vTWF4ID0gZmFsc2U7XHJcbiAgQElucHV0KCkgdGV4dCA9IFwiXCI7XHJcbn1cclxuIiwiPGRpdiBjbGFzcz1cInRvb2wtdGlwXCIgcm9sZT1cInRvb2x0aXBcIiBAdG9vbHRpcD5cclxuICA8ZGl2IGNsYXNzPVwiYXJyb3dcIj48L2Rpdj5cclxuICA8ZGl2IGNsYXNzPVwidG9vbHRpcC1pbm5lclwiIFtpbm5lckhUTUxdPVwidGV4dFwiPjwvZGl2PlxyXG48L2Rpdj5cclxuIl19