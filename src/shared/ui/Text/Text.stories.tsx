import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Theme } from 'app/provider/ThemeProvider';
import React from 'react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';

import { Text, TextTheme } from './Text';

export default {
    title: 'shared/Text',
    component: Text,

    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    title: 'title',
    text: 'Text Text Text Text v Text Text Text Text Text Text Text Text Text Text',
};

export const Error = Template.bind({});
Error.args = {
    title: 'title',
    text: 'Text Text Text Text v Text Text Text Text Text Text Text Text Text Text',
    theme: TextTheme.ERROR,
};

export const onlyTitle = Template.bind({});
onlyTitle.args = {
    title: 'title',
};

export const onlyText = Template.bind({});
onlyText.args = {
    text: 'Text Text Text Text v Text Text Text Text Text Text Text Text Text Text',
};

export const PrimaryDark = Template.bind({});
Primary.args = {
    title: 'title',
    text: 'Text Text Text Text v Text Text Text Text Text Text Text Text Text Text',
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const onlyTitleDark = Template.bind({});
onlyTitle.args = {
    title: 'title',
};
onlyTitleDark.decorators = [ThemeDecorator(Theme.DARK)];

export const onlyTextDark = Template.bind({});
onlyText.args = {
    text: 'Text Text Text Text v Text Text Text Text Text Text Text Text Text Text',
};
onlyTextDark.decorators = [ThemeDecorator(Theme.DARK)];
