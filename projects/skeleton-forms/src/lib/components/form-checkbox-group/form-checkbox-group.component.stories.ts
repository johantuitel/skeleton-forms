import { Meta, StoryObj } from '@storybook/angular';

import { moduleMetadata } from '@storybook/angular';    
import { FormCheckboxGroupComponent } from './form-checkbox-group.component';

export default {
  title: 'Components',
  component: FormCheckboxGroupComponent,
  decorators: [
    moduleMetadata({
      imports: [FormCheckboxGroupComponent],
    }),
  ],
} as Meta<FormCheckboxGroupComponent>;

type TFormCheckboxGroupComponentTemplate = StoryObj<FormCheckboxGroupComponent>;

export const checkboxGroup: TFormCheckboxGroupComponentTemplate = {
    args: {
        id: 'checkbox-group',
        label: 'Checkbox Group',
        options: [
            { label: 'Option 1', value: 'option1' },
            { label: 'Option 2', value: 'option2' },
            { label: 'Option 3', value: 'option3' },
        ],
    },
}