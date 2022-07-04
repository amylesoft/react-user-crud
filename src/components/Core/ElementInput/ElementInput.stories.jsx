import React from 'react';
import { ElementInput } from './ElementInput';

export default {
    title: 'ElementInput',
    component: ElementInput,
}

const Template = (args) => <ElementInput {...args} />;

export const props = Template.bind({});

props.args = {
    type: 'text',
    label: 'FirstName', 
};
