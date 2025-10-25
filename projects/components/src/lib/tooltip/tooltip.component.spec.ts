import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TooltipComponent } from './tooltip.component';
import { TooltipePlacement } from './tooltip-placement.type';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('TooltipComponent', () => {
  let component: TooltipComponent;
  let fixture: ComponentFixture<TooltipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TooltipComponent],
      imports: [BrowserAnimationsModule], // Required for animations
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TooltipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should have default placement as "auto"', () => {
    expect(component.placement).toBe('auto');
  });

  it('should bind the placement class correctly', () => {
    component.placement = 'top' as TooltipePlacement;
    fixture.detectChanges();
    const tooltipElement: HTMLElement = fixture.nativeElement;
    expect(tooltipElement.classList.contains('top')).toBeTrue();
  });

  it('should bind the noMax class correctly', () => {
    component.noMax = true;
    fixture.detectChanges();
    const tooltipElement: HTMLElement = fixture.nativeElement;
    expect(tooltipElement.classList.contains('no-max')).toBeTrue();
  });

  it('should update the text input correctly', () => {
    component.text = 'Test Tooltip';
    fixture.detectChanges();
    expect(component.text).toBe('Test Tooltip');
  });
});