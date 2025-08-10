import { Component, Input } from '@angular/core';

@Component({
  selector: 'cdk-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.scss']
})
export class LogoComponent {
  @Input() size = 32;
}
