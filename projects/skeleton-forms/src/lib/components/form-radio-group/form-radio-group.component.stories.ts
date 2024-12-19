import { Meta, StoryObj } from '@storybook/angular';

import { moduleMetadata } from '@storybook/angular';    
import { FormRadioGroupComponent } from './form-radio-group.component';

export default {
  title: 'Components',
  component: FormRadioGroupComponent,
  decorators: [
    moduleMetadata({
        imports: [FormRadioGroupComponent],
    }),
  ],
} as Meta<FormRadioGroupComponent>;

type TFormRadioGroupComponentTemplate = StoryObj<FormRadioGroupComponent>;

export const radioGroup: TFormRadioGroupComponentTemplate = {
    args: {
        id: 'radio-group',
        label: 'Radio Group',
        options: [
            { label: 'Option 1', value: 'option1' },
            { label: 'Option 2', value: 'option2' },
            { label: 'Option 3', value: 'option3' },
        ],
    },
}