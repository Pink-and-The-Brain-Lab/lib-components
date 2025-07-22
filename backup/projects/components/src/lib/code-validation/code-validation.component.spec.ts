import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SpinnerModule } from '../spinner/spinner.module';
import { CodeValidationComponent } from './code-validation.component';
import { LoadingButtonModule } from '../loading-button/loading-button.module';

describe('CodeValidationComponent', () => {
  let component: CodeValidationComponent;
  let fixture: ComponentFixture<CodeValidationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CodeValidationComponent],
      imports: [
        SpinnerModule,
        LoadingButtonModule,
        FormsModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(CodeValidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should change focus to next input', () => {
    const spy = spyOn(component, 'setInputFocus' as any);
    component.formGroup.patchValue({
      '_0': 'a'
    });
    expect(spy).toHaveBeenCalledWith(1);
  });

  it('should change focus to previous input', () => {
    const spy = spyOn(component, 'backToPreviousInput' as any);
    const mockClipboardEvent = {
        key: 'Backspace'
    } as KeyboardEvent;
    component.onKeyDownHandler(mockClipboardEvent);
    expect(spy).toHaveBeenCalled();
  });

  it('should change focus to previous input', () => {
    component['backspaceControl'] = 1;
    component['backToPreviousInput']();
    expect(component['backspaceControl']).toBe(0);
  });

  it('should not change focus to previous input', () => {
    component['backspaceControl'] = 0;
    component['backToPreviousInput']();
    expect(component['backspaceControl']).toBe(1);
  });

  it('should set focused input', () => {
    component.setFocusedElement(0);
    expect(component['focusedInput']).toBe(0);
  });

  it('should try to set focus to previous input with backspace event', () => {
    const spy = spyOn(component, 'backToPreviousInput' as any);
    const mockKeyboardEvent = { key: 'Backspace' };
    component.formGroup.patchValue({
      '_0': 'a',
      '_1': 'a',
    });
    component['focusedInput'] = 1;
    component.onKeyDownHandler(mockKeyboardEvent as KeyboardEvent);
    expect(spy).toHaveBeenCalled();
  });

  it('should to set focus to previous input with backspace event', () => {
    const spy = spyOn(component, 'backToPreviousInput' as any);
    const mockKeyboardEvent = { key: 'Backspace' };
    component.formGroup.patchValue({
      '_0': 'a',
      '_1': '',
    });
    component['focusedInput'] = 1;
    component.onKeyDownHandler(mockKeyboardEvent as KeyboardEvent);
    expect(spy).toHaveBeenCalled();
  });

  it('should get pasted text', () => {
    const spy = spyOn(component, 'inputPastedCode' as any);
    const mockStorage = new Map();
    mockStorage.set('text', 'texto');
    const mockClipboardEvent: any = {
      clipboardData: {
        getData: (key: string)  => mockStorage.get(key),
      }
    };

    mockClipboardEvent.clipboardData.getData('text')
    component.onPaste(mockClipboardEvent);
    expect(spy).toHaveBeenCalledWith('texto');
  });

  it('should set pasted text inside inputs', () => {
    component['inputPastedCode']('123456');
    const value = component.formGroup.controls._0.value;
    expect(value).toBe('1');
  });

  it('should emit the code', () => {
    const spy = spyOn(component.validate, 'emit');
    component['inputPastedCode']('123456');
    component.validateCode();
    expect(spy).toHaveBeenCalledWith('123456');
  });

  it('should change form to new values', () => {
    component['inputPastedCode']('123456');
    component['inputPastedCode']('654321');
    const value = component.formGroup.controls._0.value;
    expect(value).toBe('6');
  });

  it('should not paste code in input if on paste event get undefined', () => {
    const spy = spyOn(component, 'inputPastedCode' as any);
    component.onPaste(undefined as any);
    expect(spy).not.toHaveBeenCalled();
  });
});
