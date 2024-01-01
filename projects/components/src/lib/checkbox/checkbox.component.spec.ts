import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CheckboxComponent } from './checkbox.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

describe('CheckboxComponent', () => {
  let component: CheckboxComponent;
  let fixture: ComponentFixture<CheckboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckboxComponent ],
      imports: [
        FormsModule,
        ReactiveFormsModule,
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CheckboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get form value', () => {
    component.form.patchValue({ input: true });
    expect(component.input).toBeTruthy();
  });

  it('should emit input value', () => {
    const spy = spyOn(component.change, 'emit');
    component.form.patchValue({ input: true });
    component.changeValue();
    expect(spy).toHaveBeenCalledWith(true);
  });
});
