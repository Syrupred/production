import {
    AnyAction, CombinedState, EnhancedStore, Reducer, ReducersMapObject,
} from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { ArticleDetailsSchema } from 'entities/Article';
import { CounterState } from 'entities/Counter';
import { ProfileSchema } from 'entities/Profile';
import { UserSchema } from 'entities/User';
import { addCommentFormSchema } from 'features/addCommentForm';
import { LoginSchema } from 'features/AuthByUsername';
import { ArticleDetailsCommentSchema } from 'pages/ArticleDetailsPage';
import { articlePageSchema } from 'pages/ArticlePage/model/types/articlePageSchema';
import { uiSchema } from 'widgets/Pages/ScrollSave/model';

export interface StateSchema {
    counter: CounterState;
    user: UserSchema;
    scroll: uiSchema;
    // async
    login?: LoginSchema;
    profile?: ProfileSchema;
    articleDetails?: ArticleDetailsSchema;
    ArticleDetailsComment?: ArticleDetailsCommentSchema;
    addCommentForm?: addCommentFormSchema;
    articlePage?: articlePageSchema;
}

export type StateSchemaKey = keyof StateSchema;
export interface ReducerManager {
    getReducerMap: () => ReducersMapObject<StateSchema>;
    reduce: (state: StateSchema, action: AnyAction) => CombinedState<StateSchema>;
    add: (key: StateSchemaKey, reducer: Reducer) => void;
    remove: (key: StateSchemaKey) => void;

    getMountedReducers: () => OptionalRecord<StateSchemaKey, boolean>;
}

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema>{
  reducerManager: ReducerManager;
}

export interface ExtraThunkApi {
    api: AxiosInstance,
}

export interface ThunkConfig<T> {
    rejectValue: T;
    extra: ExtraThunkApi;
    state: StateSchema;
}
