import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserModule } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { SpinnerModule } from '../spinner/spinner.module';
import { LoadingButtonModule } from './loading-button.module';

@Component({
  template: `
    <button [cdkLoadingButton]="isLoading">
      <cdk-spinner>Button</cdk-spinner>
    </button>
  `
})
class HostComponent {
  isLoading = false;
}

describe('LoadingButtonDirective', () => {
  let component: HostComponent;
  let fixture: ComponentFixture<HostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HostComponent ],
      imports: [
        BrowserModule,
        NoopAnimationsModule,
        LoadingButtonModule,
        SpinnerModule,
      ],
    });

    fixture = TestBed.createComponent(HostComponent);
    component = fixture.componentInstance;
  });

  it('should create an instance', () => {
    expect(component).toBeTruthy();
  });

  it('should show loading icon', () => {
    component.isLoading = true;
    fixture.detectChanges();
    expect(component.isLoading).toBeTruthy();
  });

  it('should hidde loading icon', () => {
    component.isLoading = false;
    fixture.detectChanges();
    expect(component.isLoading).toBeFalsy();
  });
});
