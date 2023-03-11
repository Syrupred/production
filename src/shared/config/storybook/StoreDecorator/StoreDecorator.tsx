import { Story } from '@storybook/react';
import { StateSchema, StoreProvider } from 'app/provider/StoreProvider';

export const StoreDecorator = (state: Partial<StateSchema>) => (StoryComponent: Story) => (
    <StoreProvider initialState={state}>
        <StoryComponent />
    </StoreProvider>
);
