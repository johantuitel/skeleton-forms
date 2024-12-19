import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, FormsModule, NG_VALUE_ACCESSOR, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-form-input',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './form-input.component.html',
  styleUrl: './form-input.component.css',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: forwardRef(() => FormInputComponent)
    }
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormInputComponent implements ControlValueAccessor {
    
  @Input({required: true}) id!: string;
  @Input({required: true}) label!: string;
  @Input() required = false;
  @Input() disabled = false;
  @Input() placeholder = '';
  @Input() type: 'text' | 'zipcode' | 'number' | 'image' | 'email' | 'password' | 'tel' | 'mobile' | 'url' | 'color' | 'date' | 'time' = 'text';

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
