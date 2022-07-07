import React from 'react';
import ElementInput from './ElementInput';
import { within, userEvent } from '@storybook/testing-library';

export default {
    title: 'ElementInput',
    component: ElementInput,
    argTypes: { handleChange: { action: 'changeValue' } },
}

const Template = (args) => <ElementInput {...args} />;

export const props = Template.bind({});

props.args = {
    name: 'firstName',
    label: 'FirstName',
    type: 'text',
    helperText: 'firstName is required',
    error: false,
    value: 'sagar',
};

props.play = async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    console.log(canvas.getByRole('textbox'));
    await userEvent.click(canvas.getByRole('textbox'))
    await userEvent.type(canvas.getByRole('textbox'), 'kankadiya')
}