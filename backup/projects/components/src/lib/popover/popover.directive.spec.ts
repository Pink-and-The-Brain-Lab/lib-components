import { Component, DebugElement } from '@angular/core';
import { ComponentFixture, inject, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { PopoverModule } from './popover.module';
import { PopoverDirective } from 'components';
import { of } from 'rxjs';
import { FullscreenOverlayContainer, OverlayContainer, OverlayRef } from '@angular/cdk/overlay';

@Component({
  template: `
    <button
      type="button"
      #content
      (click)="showPopover = true"
    >
      Button
    </button>

    <div
      *cdkPopover="
        showPopover;
        target: content;
        close: closePopover;
        positions: 'ETST'
      "
    >
      Popover content
    </div>
  `
})
class HostComponent {
  showPopover = false;
  closePopover = () => this.showPopover = false;
}

@Component({
  template: `
    <button
      type="button"
      #content
      (click)="showPopover = true"
    >
      Button
    </button>

    <div
      *cdkPopover="
        showPopover;
        target: content;
        close: closePopover;
        positions: 'ETST';
        fullScreen: isFullscreen
      "
    >
      Popover content
    </div>
  `
})
class FullPopoverComponent {
  showPopover = false;
  isFullscreen = true;
  closePopover = () => this.showPopover = false;
}

describe('PopoverDirective', () => {
  let component: HostComponent;
  let fullPopoverComponent: FullPopoverComponent;
  let fixture: ComponentFixture<HostComponent>;
  let fixtureFullPopover: ComponentFixture<FullPopoverComponent>;
  let buttonElement: DebugElement;
  let buttonElementFullPopover: DebugElement;
  let overlayContainerElement: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HostComponent, FullPopoverComponent ],
      imports: [ PopoverModule ],
      providers: [
        {
          provide: OverlayRef,
          useValue: {
            backdropClick: () => of({} as any)
          }
        }, {
          provide: PopoverDirective,
          useValue: {
            close: () => {}
          }
        },
      ]
    });

    fixture = TestBed.createComponent(HostComponent);
    fixtureFullPopover = TestBed.createComponent(FullPopoverComponent);
    component = fixture.componentInstance;
    fullPopoverComponent = fixtureFullPopover.componentInstance;
    buttonElement = fixture.debugElement.query(By.css('button'));
    buttonElementFullPopover = fixtureFullPopover.debugElement.query(By.css('button'));
    fixture.detectChanges();
    fixtureFullPopover.detectChanges();
  });

  beforeEach(inject([OverlayContainer], (oc: OverlayContainer) => {
    overlayContainerElement = oc.getContainerElement();
  }));

  it('should create an instance', () => {
    expect(component).toBeTruthy();
  });

  it('should open popover content', () => {
    buttonElement.triggerEventHandler('click');
    fixture.detectChanges();
    const content = fixture.debugElement.query(By.css('div'));
    expect(content.nativeElement.innerHTML).toEqual(' Popover content ');
  });

  it('should close popover content', () => {
    buttonElement.triggerEventHandler('click');
    fixture.detectChanges();
    let content = fixture.debugElement.query(By.css('div'));
    expect(content.nativeElement.innerHTML).toEqual(' Popover content ');
    component.closePopover();
    fixture.detectChanges();
    content = fixture.debugElement.query(By.css('div'));
    expect(content).toBeNull();
  });

  it('should open a full screen popover content', () => {
    buttonElementFullPopover.triggerEventHandler('click');
    fixtureFullPopover.detectChanges();
    const content = fixtureFullPopover.debugElement.query(By.css('div'));
    expect(content.nativeElement.innerHTML).toEqual(' Popover content ');
  });

  it('should close modal on backdrop click', () => {
    buttonElement.triggerEventHandler('click');
    fixture.detectChanges();
    const backdropElement = overlayContainerElement.querySelector('.cdk-overlay-transparent-backdrop') as HTMLElement;
    backdropElement.click();
    expect(backdropElement).toBeTruthy();
    expect(backdropElement.classList).not.toContain('cdk-overlay-backdrop-showing');
  });
});
