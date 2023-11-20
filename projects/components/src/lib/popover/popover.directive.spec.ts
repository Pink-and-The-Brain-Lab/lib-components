import { Component, DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { PopoverModule } from './popover.module';

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
      *cdkPopover="showPopover; target: content; close: closePopover; positions: 'ETST'"
    >
      Popover content
    </div>
  `
})
class HostComponent {
  showPopover = false;
  closePopover = () => this.showPopover = false;
}

describe('PopoverDirective', () => {
  let component: HostComponent;
  let fixture: ComponentFixture<HostComponent>;
  let buttonElement: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HostComponent ],
      imports: [ PopoverModule ],
    });

    fixture = TestBed.createComponent(HostComponent);
    component = fixture.componentInstance;
    buttonElement = fixture.debugElement.query(By.css('button'));
    fixture.detectChanges();
  });

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
});
