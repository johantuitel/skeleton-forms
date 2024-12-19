import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, forwardRef, inject } from '@angular/core';
import { ControlValueAccessor, FormsModule, NG_VALUE_ACCESSOR, ReactiveFormsModule } from '@angular/forms';
import { FormRadioOption } from './form-radio.option';

@Component({
  selector: 'app-form-radio-group',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './form-radio-group.component.html',
  styleUrl: './form-radio-group.component.css',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: forwardRef(() => FormRadioGroupComponent)
    }
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormRadioGroupComponent implements ControlValueAccessor {
  private readonly changeDetectionRef = inject(ChangeDetectorRef);
  
  @Input({required: true}) id!: string;
  @Input({required: true}) label!: string;
  @Input() required = false;
  @Input() disabled = false;
  @Input() direction: 'horizontal' |'vertical' = 'horizontal';
  @Input() options: Array<FormRadioOption> = [];
  
  value!: string;
  onChange: any = (value: any) => {};
  onTouched: any = () => {};

  writeValue(obj: any): void {
    this.value = obj
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

  selectOption(value: any): void {
    if (!this.disabled) {
      this.value = value;
      this.onChange(value);
      this.onTouched();
    }
  }
}
