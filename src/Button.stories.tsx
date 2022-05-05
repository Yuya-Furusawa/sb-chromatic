import * as React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import Button from './Button';

export default {
  title: 'component/Button',
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => (
  <Button {...args} />
);

export const Clickable = Template.bind({});
Clickable.args = {
  isActive: true
};

export const Disable = Template.bind({});
Disable.args = {
  isActive: false
}
