import { TestBed } from '@angular/core/testing';
import { ThemeChangerService } from './theme-changer.service';
import { Theme } from '../../public-api';

describe('ThemeChangerService', () => {
  let service: ThemeChangerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ThemeChangerService);
    const cssLinkElement = document.getElementById('client-theme') as HTMLLinkElement;
    cssLinkElement?.remove();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should load a new theme creating link tag to load the CSS theme', () => {
    jasmine.createSpy('HTML Element').and.returnValue({} as HTMLLinkElement);
    service.loadTheme(Theme.LIGHT);
    const cssLinkElement = document.getElementById('client-theme') as HTMLLinkElement;
    const shoulContainThemeName = cssLinkElement.href.includes(`${Theme.LIGHT}.css`);
    expect(shoulContainThemeName).toBeTruthy();
  });

  it('should load a new theme', () => {
    document.body.innerHTML = '<link id="client-theme" type="text/css" rel="stylesheet" />';
    service.loadTheme(Theme.DARK);
    const cssLinkElement = document.getElementById('client-theme') as HTMLLinkElement;
    const shoulContainThemeName = cssLinkElement.href.includes(`${Theme.DARK}.css`);
    expect(shoulContainThemeName).toBeTruthy();
  });
});
