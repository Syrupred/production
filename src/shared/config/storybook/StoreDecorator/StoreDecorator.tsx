import { Story } from '@storybook/react';
import { StateSchema, StoreProvider } from 'app/provider/StoreProvider';
import { articleDetailsReducer } from 'entities/Article/model/slice/articleDetailsSlce';
import { profileReducer } from 'entities/Profile';
import { addCommentFormReducer } from 'features/addCommentForm/model/slices/addCommentFormSlice';
import { loginReducer } from 'features/AuthByUsername';
import { articleDetailsCommentsReducer }
    from 'pages/ArticleDetailsPage/model/slices/articleDetailsCommentSlice';
import { ReducersList } from 'shared/lib/components/DynamicModalLoader/DynamicModalLoader';

const defaultAsyncReducers: ReducersList = {
    login: loginReducer,
    profile: profileReducer,
    articleDetails: articleDetailsReducer,
    addCommentForm: addCommentFormReducer,
    ArticleDetailsComment: articleDetailsCommentsReducer,
};
type DeepPartial<T> = T extends object ? { [P in keyof T]?: DeepPartial<T[P]> | undefined; } : T
export const StoreDecorator = (
    state:
    DeepPartial<StateSchema>,
    asyncReducers?: ReducersList,
) => (StoryComponent: Story) => (
    <StoreProvider
        initialState={state}
        asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}
    >
        <StoryComponent />
    </StoreProvider>
);
