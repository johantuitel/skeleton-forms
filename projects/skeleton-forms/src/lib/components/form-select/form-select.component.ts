import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, FormsModule, NG_VALUE_ACCESSOR, ReactiveFormsModule } from '@angular/forms';
import { FormSelectOption } from './form-select.option';

@Component({
  selector: 'app-form-select',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './form-select.component.html',
  styleUrl: './form-select.component.css',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: forwardRef(() => FormSelectComponent)
    }
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormSelectComponent implements ControlValueAccessor {
  
  @Input({required: true}) id!: string;
  @Input({required: true}) label!: string;
  @Input() required = false;
  @Input() disabled = false;
  @Input() firstOption = 'Select an option';
  @Input() options: Array<FormSelectOption> = [];
  
  value!: string;
  onChange: any = (value: any) => {};
  onTouched: any = () => {};

  writeValue(obj: any): void {
    this.value = obj
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  selectOption(value: any): void {
    if (!this.disabled) {
      this.value = value;
      this.onChange(this.value);
      this.onTouched();
    }
  }
}

