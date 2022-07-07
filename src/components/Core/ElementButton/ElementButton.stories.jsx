import React from 'react';
import Button from './ElementButton'
import { within, userEvent } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

export default {
    title: 'Button',
    component: Button,
    argTypes: { onClick: { action: 'clicked' } },
}

const Template = (args) => <Button {...args} />;

export const props = Template.bind({});

props.args ={
    size:'small',
}

props.play = async ({ canvasElement }) => {
    // Starts querying the component from its root element
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByRole('button'));
    await expect(
        canvas.getByText(
          'Everything is perfect. Your account is ready and we should probably get you started!'
        )
      ).toBeInTheDocument();
  };