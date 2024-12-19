import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, FormsModule, NG_VALUE_ACCESSOR, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-form-textarea',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './form-textarea.component.html',
  styleUrl: './form-textarea.component.css',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: forwardRef(() => FormTextareaComponent)
    }
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormTextareaComponent implements ControlValueAccessor {
    
  @Input({required: true}) id!: string;
  @Input({required: true}) label!: string;
  @Input() rows = 5;
  @Input() cols = 50;
  @Input() required = false;
  @Input() disabled = false;
  @Input() placeholder = '';

  value!: string;
  onChange: any = (value: any) => {};
  onTouched: any = () => {};


  writeValue(obj: any): void {
    this.value = obj;
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
}
