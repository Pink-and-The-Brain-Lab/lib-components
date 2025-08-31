import { Component, DebugElement, Renderer2 } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { PasswordValidationModule } from 'components';
import { PasswordValidationDirective } from './password-validation.directive';

@Component({
  template: `
    <p cdkPasswordValidation="abcd1234">
        text <span>text</span> <span>text</span> <span>text</span>
    </p>
  `
})
class HostComponent {}

describe('PasswordValidationDirective', () => {
  let component: HostComponent;
  let fixture: ComponentFixture<HostComponent>;
  let directiveEl: DebugElement;
  let directiveInstance: PasswordValidationDirective;
  
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        PasswordValidationDirective,
        HostComponent
      ],
      imports: [
        PasswordValidationModule
      ]
    });

    fixture = TestBed.createComponent(HostComponent);
    component = fixture.componentInstance;
    directiveEl = fixture.debugElement.query(By.directive(PasswordValidationDirective));
    directiveInstance = directiveEl.injector.get(PasswordValidationDirective);
    fixture.detectChanges();
  });

  it('should create an instance', () => {
    expect(directiveInstance).toBeTruthy();
    expect(component).toBeTruthy();
  });
  
  it('should validate password', () => {
    const spy = spyOn(directiveInstance.isValid, 'emit');
    directiveInstance['validatePassword']('abcd1234');
    expect(spy).toHaveBeenCalledWith(true);
  });

  it('should colorize element with success color', () => {
    const spy = spyOn(directiveInstance['renderer'], 'setStyle');
    const element = document.createElement("div");
    directiveInstance['totalCharacters'] = element;
    directiveInstance['colorizeElements'](element, true);
    expect(spy).toHaveBeenCalledWith(element, 'color', directiveInstance['successColor']);
  });

  it('should colorize element with error color', () => {
    const spy = spyOn(directiveInstance['renderer'], 'setStyle');
    directiveInstance['colorizeElements'](directiveInstance['totalCharacters'], false);
    expect(spy).toHaveBeenCalledWith(directiveInstance['totalCharacters'], 'color', directiveInstance['errorColor']);
  });
});
