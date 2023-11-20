import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';
import { LoadingButtonDirective } from '../loading-button/loading-button.directive';

@Component({
  selector: 'cdk-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss'],
  animations: [
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
  ]
})
export class SpinnerComponent {

  constructor(
    public button: LoadingButtonDirective
  ) { }

}
