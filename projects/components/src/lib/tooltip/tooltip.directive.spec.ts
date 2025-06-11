import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Component } from '@angular/core';
import { Overlay, OverlayModule } from '@angular/cdk/overlay';
import { TooltipDirective } from './tooltip.directive';
import { TooltipComponent } from './tooltip.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@Component({
  template: `<div cdkTooltip="Test Tooltip" [placement]="'top'" [noMax]="true"></div>`,
})
class TestComponent {}

describe('TooltipDirective', () => {
  let fixture: ComponentFixture<TestComponent>;
  let overlay: Overlay;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TooltipDirective, TestComponent, TooltipComponent],
      imports: [OverlayModule, BrowserAnimationsModule],
      providers: [Overlay],
    }).compileComponents();

    fixture = TestBed.createComponent(TestComponent);
    overlay = TestBed.inject(Overlay);
    fixture.detectChanges();
  });

  it('should create the directive', () => {
    const directiveElement = fixture.debugElement.query(
      (el) => el.attributes['cdkTooltip'] !== undefined
    );
    expect(directiveElement).toBeTruthy();
  });

  it('should show the tooltip on mouseenter', () => {
    const directiveElement = fixture.debugElement.query(
      (el) => el.attributes['cdkTooltip'] !== undefined
    );
    const directiveInstance = directiveElement.injector.get(TooltipDirective);

    spyOn(overlay, 'create').and.callThrough();
    spyOn(directiveInstance, 'show').and.callThrough();

    directiveElement.triggerEventHandler('mouseenter', null);
    fixture.detectChanges();

    expect(directiveInstance.show).toHaveBeenCalled();
    expect(overlay.create).toHaveBeenCalled();
    expect(directiveInstance['overlayRef']).toBeTruthy();
  });

  it('should hide the tooltip on mouseleave', () => {
    const directiveElement = fixture.debugElement.query(
      (el) => el.attributes['cdkTooltip'] !== undefined
    );
    const directiveInstance = directiveElement.injector.get(TooltipDirective);

    spyOn(directiveInstance, 'hide').and.callThrough();

    directiveElement.triggerEventHandler('mouseenter', null);
    fixture.detectChanges();

    directiveElement.triggerEventHandler('mouseleave', null);
    fixture.detectChanges();

    expect(directiveInstance.hide).toHaveBeenCalled();
    expect(directiveInstance['overlayRef']).toBeUndefined();
  });

  it('should not show the tooltip if hideTooltip is true', () => {
    const directiveElement = fixture.debugElement.query(
      (el) => el.attributes['cdkTooltip'] !== undefined
    );
    const directiveInstance = directiveElement.injector.get(TooltipDirective);

    directiveInstance.hideTooltip = true;
    spyOn(directiveInstance, 'show').and.callThrough();

    directiveElement.triggerEventHandler('mouseenter', null);
    fixture.detectChanges();

    expect(directiveInstance.show).toHaveBeenCalled();
    expect(directiveInstance['overlayRef']).toBeUndefined();
  });

  it('should clean up the overlay on ngOnDestroy', () => {
    const directiveElement = fixture.debugElement.query(
      (el) => el.attributes['cdkTooltip'] !== undefined
    );
    const directiveInstance = directiveElement.injector.get(TooltipDirective);

    directiveElement.triggerEventHandler('mouseenter', null);
    fixture.detectChanges();

    spyOn(directiveInstance['overlayRef'], 'detach').and.callThrough();
    spyOn(directiveInstance['overlayRef'], 'dispose').and.callThrough();

    directiveInstance.ngOnDestroy();

    expect(directiveInstance['overlayRef'].detach).toHaveBeenCalled();
    expect(directiveInstance['overlayRef'].dispose).toHaveBeenCalled();
  });
});