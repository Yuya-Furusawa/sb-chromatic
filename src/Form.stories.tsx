import * as React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import Form from './Form';

export default {
  title: 'component/Form',
  component: Form,
  parameters: {
    layout: 'fullscreen'
  }
} as ComponentMeta<typeof Form>;

const Template: ComponentStory<typeof Form> = () => (
  <Form />
);

export const Default = Template.bind({});
