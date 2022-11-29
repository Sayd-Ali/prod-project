import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { Modal } from 'shared/ui/Modal/Modal';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';

export default {
    title: 'shared/Modal',
    component: Modal,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    isOpen: true,
    children: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae deserunt earum error, illo iusto mollitia omnis possimus provident quaerat voluptas! Accusantium aliquam architecto esse eum fuga in nostrum, omnis qui?',
};

export const Dark = Template.bind({});
Dark.args = {
    isOpen: true,
    children: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae deserunt earum error, illo iusto mollitia omnis possimus provident quaerat voluptas! Accusantium aliquam architecto esse eum fuga in nostrum, omnis qui?',
};

Dark.decorators = [ThemeDecorator(Theme.DARK)];
