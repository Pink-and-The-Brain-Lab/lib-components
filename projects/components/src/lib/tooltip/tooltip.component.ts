import { ChangeDetectionStrategy, Component, HostBinding, Input } from '@angular/core';
import { TooltipePlacement } from './tooltip-placement.type';
import { animate, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'cdk-tooltip',
  templateUrl: './tooltip.component.html',
  styleUrls: ['./tooltip.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger("tooltip", [
      transition(":enter", [
        style({ opacity: 0 }),
        animate(300, style({ opacity: 1 }))
      ]),
      transition(":leave", [animate(300, style({ opacity: 0 }))])
    ])
  ]
})
export class TooltipComponent {
  @Input() @HostBinding("class") placement: TooltipePlacement = 'auto';
  @Input() @HostBinding("class.no-max") noMax = false;
  @Input() text = "";
}
