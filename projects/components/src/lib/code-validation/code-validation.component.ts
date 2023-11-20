import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  HostListener,
  Input,
  OnDestroy,
  OnInit,
  Output,
  QueryList,
  ViewChildren,
} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { map, pairwise, startWith, Subject, takeUntil } from 'rxjs';
import { IFormValueChanged } from './models/form-value-changed.model';

@Component({
  selector: 'cdk-code-validation',
  templateUrl: './code-validation.component.html',
  styleUrls: ['./code-validation.component.scss'],
})
export class CodeValidationComponent
  implements OnInit, OnDestroy, AfterViewInit
{
  @ViewChildren('input') inputs = new QueryList<ElementRef>();
  @Input() isLoading = false;
  @Output() validate = new EventEmitter<string>();

  private destroy$ = new Subject<void>();
  private focusedInput = 0;
  private backspaceControl = 0;
  formGroup = new FormGroup({
    _0: new FormControl('', [Validators.required]),
    _1: new FormControl('', [Validators.required]),
    _2: new FormControl('', [Validators.required]),
    _3: new FormControl('', [Validators.required]),
    _4: new FormControl('', [Validators.required]),
    _5: new FormControl('', [Validators.required]),
  });

  constructor() {}

  ngOnInit(): void {
    this.formGroup.valueChanges
      .pipe(
        takeUntil(this.destroy$),
        startWith(null),
        pairwise(),
        map(([oldState, newState]: any) => {
          const changes: IFormValueChanged = {
            changedKey: '_0',
            isAdding: true,
          };

          if (!oldState) return changes;

          for (let key in newState) {
            if (oldState[key] !== newState[key]) {
              changes.changedKey = key;
              changes.isAdding = !oldState[key].length;
            }
          }

          return changes;
        })
      )
      .subscribe((value) => {
        const parsedInputChanged = parseInt(
          value.changedKey.replace(/_/gi, '')
        );
        if (value.isAdding) {
          this.setInputFocus(parsedInputChanged + 1);
          this.backspaceControl = 0;
        }
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.unsubscribe();
  }

  ngAfterViewInit(): void {
    this.setInputFocus(0);
  }

  private setInputFocus(index: number): void {
    this.inputs.get(index)?.nativeElement.focus();
  }

  setFocusedElement(index: number): void {
    this.focusedInput = index;
  }

  private backToPreviousInput() {
    this.backspaceControl++;
    if (this.backspaceControl < 2) return;
    this.setInputFocus(this.focusedInput - 1);
    this.backspaceControl = 0;
  }

  @HostListener('document:keyup', ['$event'])
  onKeyDownHandler(event: KeyboardEvent): void {
    if (event.key === 'Backspace') {
      this.backToPreviousInput();
    }
  }

  @HostListener('paste', ['$event'])
  onPaste(event: ClipboardEvent): void {
    const clipboardData = event.clipboardData;
    const pastedText = clipboardData?.getData('text');
    this.inputPastedCode(pastedText || '');
  }

  private inputPastedCode(code: string) {
    this.formGroup.patchValue({
      '_0': code[0],
      '_1': code[1],
      '_2': code[2],
      '_3': code[3],
      '_4': code[4],
      '_5': code[5],
    });
    setTimeout(() => {
      this.setInputFocus(5);
    });
  }

  validateCode() {
    const code = Object.values(this.formGroup.value).reduce((acc: string, i) => acc += i, '');
    this.validate.emit(code);
  }
}
