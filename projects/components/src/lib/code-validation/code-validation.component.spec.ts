import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoadingButtonModule } from '@app/_cdk/directives/loading-button/loading-button.module';
import { SpinnerModule } from '../spinner/spinner.module';
import { CodeValidationComponent } from './code-validation.component';

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
    const spy = jest.spyOn(component, 'setInputFocus' as any);
    component.formGroup.patchValue({
      '_0': 'a'
    });
    expect(spy).toBeCalledWith(1);
  });

  it('should change focus to previous input', () => {
    const spy = jest.spyOn(component, 'setInputFocus' as any);
    component.formGroup.patchValue({
      '_0': 'a',
      '_1': 'a',
    });
    component.formGroup.patchValue({
      '_0': 'a',
      '_1': '',
    });
    expect(spy).toBeCalledWith(0);
  });

  it('should set focused input', () => {
    component.setFocusedElement(0);
    expect(component['focusedInput']).toBe(0);
  });

  it('should try to set focus to previous input with backspace event', () => {
    const spy = jest.spyOn(component, 'backToPreviousInput' as any);
    const mockKeyboardEvent = { key: 'Backspace' };
    component.formGroup.patchValue({
      '_0': 'a',
      '_1': 'a',
    });
    component['focusedInput'] = 1;
    component.onKeyDownHandler(mockKeyboardEvent as KeyboardEvent);
    expect(spy).toBeCalled();
  });

  it('should to set focus to previous input with backspace event', () => {
    const spy = jest.spyOn(component, 'backToPreviousInput' as any);
    const mockKeyboardEvent = { key: 'Backspace' };
    component.formGroup.patchValue({
      '_0': 'a',
      '_1': '',
    });
    component['focusedInput'] = 1;
    component.onKeyDownHandler(mockKeyboardEvent as KeyboardEvent);
    expect(spy).toBeCalled();
  });

  it('should get pasted text', () => {
    const spy = jest.spyOn(component, 'inputPastedCode' as any);
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
    jest.useFakeTimers();
    const spy = jest.spyOn(component, 'setInputFocus' as any);
    component['inputPastedCode']('123456');
    jest.advanceTimersByTime(2);
    expect(spy).toHaveBeenCalledWith(5);
  });
});
