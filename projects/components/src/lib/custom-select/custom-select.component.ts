import { Component, ContentChild, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, TemplateRef } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'cdk-custom-select',
  templateUrl: './custom-select.component.html',
  styleUrls: ['./custom-select.component.scss']
})
export class CustomSelectComponent<T> implements OnInit, OnChanges {

  @Input() options: T[] = [] as any;
  @Input() placeholder = 'Selecione';
  @Input() modelProperty = '';
  @Input() label = '';
  @Input() selectedOption: any;
  @Input() isValid = false;
  @Input() hasLeftIcon = false;
  @Input() hasDivider = false;
  @Output() valueChanges = new EventEmitter<T>();

  @ContentChild("customTemplate", { static: true, read: TemplateRef })
  customTemplate: TemplateRef<any> = {} as TemplateRef<any>;

  @ContentChild("selectedTemplate", { static: true, read: TemplateRef })
  selectedTemplate: TemplateRef<any> = {} as TemplateRef<any>;

  showOptions = false;

  formGroup = new FormGroup({
    input: new FormControl('')
  });

  ngOnInit(): void {
    this.filterOptions();
  }

  ngOnChanges({ selectedOption }: SimpleChanges): void {
    if (selectedOption && !selectedOption.firstChange && selectedOption.currentValue !== selectedOption.previousValue) this.filterOptions();
  }

  filterOptions(): void {
    if (this.selectedOption)
      this.formGroup.controls.input.setValue(this.selectedOption[this.modelProperty]);
  }

  closePopover = () => this.showOptions = false;

  getOption(option: any) {
    this.selectedOption = option;
    this.valueChanges.emit(this.selectedOption);
    this.formGroup.controls.input.setValue(option[this.modelProperty]);
    this.closePopover();
  }

}
