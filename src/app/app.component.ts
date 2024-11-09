import { Component, inject } from '@angular/core';
import { Theme, ThemeChangerService } from 'components';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'lib-components';
  isLoading = false;
  private readonly themeChangerService = inject(ThemeChangerService);

  constructor() {
    this.themeChangerService.loadTheme(Theme.DARK);
  }

  validate(code: string) {
    console.log(code)
  }
}
