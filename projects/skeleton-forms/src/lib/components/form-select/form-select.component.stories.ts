import { Meta, StoryObj } from '@storybook/angular';

import { moduleMetadata } from '@storybook/angular';    
import { FormSelectComponent } from './form-select.component';

export default {
  title: 'Components',
  component: FormSelectComponent,
  decorators: [
    moduleMetadata({
        imports: [FormSelectComponent],
    }),
  ],
} as Meta<FormSelectComponent>;

type TFormSelectComponentTemplate = StoryObj<FormSelectComponent>;

export const select: TFormSelectComponentTemplate = {
    args: {
        id: 'form-select',
        label: 'Form Selecrt',
        options: [
            { label: 'Option 1', value: 'option1' },
            { label: 'Option 2', value: 'option2' },
            { label: 'Option 3', value: 'option3' },
        ],
    },
}