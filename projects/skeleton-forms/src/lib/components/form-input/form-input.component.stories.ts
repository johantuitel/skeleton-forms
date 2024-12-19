import { Meta, StoryObj } from '@storybook/angular';

import { moduleMetadata } from '@storybook/angular';    
import { FormInputComponent } from './form-input.component';

export default {
  title: 'Components',
  component: FormInputComponent,
  decorators: [
    moduleMetadata({
        imports: [FormInputComponent],
    }),
  ],
} as Meta<FormInputComponent>;

type TFormInputComponentTemplate = StoryObj<FormInputComponent>;

export const input: TFormInputComponentTemplate = {
    args: {
        id: 'form-input',
        label: 'Form Input',
    },
}