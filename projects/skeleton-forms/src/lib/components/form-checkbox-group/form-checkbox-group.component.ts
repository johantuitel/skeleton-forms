import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, forwardRef, inject } from '@angular/core';
import { ControlValueAccessor, FormsModule, NG_VALUE_ACCESSOR, ReactiveFormsModule } from '@angular/forms';
import { FormCheckboxOption } from './form-checkbox.option';

@Component({
  selector: 'app-form-checkbox-group',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './form-checkbox-group.component.html',
  styleUrl: './form-checkbox-group.component.css',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: forwardRef(() => FormCheckboxGroupComponent)
    }
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormCheckboxGroupComponent implements ControlValueAccessor {
  private readonly changeDetectionRef = inject(ChangeDetectorRef);
  
  @Input({required: true}) id!: string;
  @Input({required: true}) label!: string;
  @Input() required = false;
  @Input() disabled = false;
  @Input() direction: 'horizontal' |'vertical' = 'horizontal';
  @Input() options: Array<FormCheckboxOption> = [];
  
  value: Array<string> = [];
  onChange: any = (value: any) => {};
  onTouched: any = () => {};

  writeValue(obj: any): void {
    this.value = Array.isArray(obj) ? obj : [];
    this.changeDetectionRef.markForCheck();
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

  selectOption(value: any, event: Event): void {
    if (!this.disabled) {
      const inputElement = event.target as HTMLInputElement;
      const isChecked = inputElement.checked;
      if (isChecked) {
        this.value = [...this.value, value];
      } else {
        this.value = this.value.filter(v => v! == value);
      }
      this.onChange(this.value);
      this.onTouched();
    }
  }
}
