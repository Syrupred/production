import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Country } from 'entities/Country/model/types/country';
import { Currency } from 'entities/Currency/model/types/currency';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import avatar from 'shared/ui/Avatar/avatar.jpg';
import ProfileCard from './ProfileCard';

export default {
    title: 'entities/ProfileCard',
    component: ProfileCard,

    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ProfileCard>;

const Template: ComponentStory<typeof ProfileCard> = (args) => <ProfileCard {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    data: {
        data: {
            username: 'admin',
            lastname: 'ivanov',
            age: '10',
            country: Country.Russia,
            first: 'gora',
            currency: Currency.RUB,
            city: 'moscow',
            avatar,
        },
    },
};

export const Loading = Template.bind({});
Loading.args = {
    data: {
        isLoading: true,
    },
};

export const Error = Template.bind({});
Error.args = {
    data: {
        error: 'error',
    },
};
