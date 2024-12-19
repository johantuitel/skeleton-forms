import { Meta, StoryObj } from '@storybook/angular';

import { moduleMetadata } from '@storybook/angular';    
import { FormTextareaComponent } from './form-textarea.component';

export default {
  title: 'Components',
  component: FormTextareaComponent,
  decorators: [
    moduleMetadata({
        imports: [FormTextareaComponent],
    }),
  ],
} as Meta<FormTextareaComponent>;

type TFormTextareaComponentTemplate = StoryObj<FormTextareaComponent>;

export const textarea: TFormTextareaComponentTemplate = {
    args: {
        id: 'form-textarea',
        label: 'Form Textarea',
    },
}