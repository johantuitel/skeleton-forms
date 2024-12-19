import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-form-switch',
  standalone: true,
  imports: [
    CommonModule,
  ],
  template: `<p>form-switch works!</p>`,
  styleUrl: './form-switch.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormSwitchComponent { }
