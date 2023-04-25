import { configureStore, ReducersMapObject } from '@reduxjs/toolkit';
import { counterReducer } from 'entities/Counter';
import { userReducer } from 'entities/User';

import { $api } from 'shared/api/api';
import { scrollReducer } from 'widgets/Pages/ScrollSave/model';

import { createReducerManager } from './reducerManager';

import { ExtraThunkApi, StateSchema } from './StateSchema';

export const createReduxStore = (
    initialState?: StateSchema,
    asyncReducers?: ReducersMapObject<StateSchema>,
) => {
    const rootReducers: ReducersMapObject<StateSchema> = {
        ...asyncReducers,
        counter: counterReducer,
        user: userReducer,
        scroll: scrollReducer,
    };

    const reducerManager = createReducerManager(rootReducers);

    const extraArg: ExtraThunkApi = {
        api: $api,
    };

    const store = configureStore({
        reducer: reducerManager.reduce as unknown as ReducersMapObject<StateSchema>,
        devTools: __IS__DEV,
        preloadedState: initialState,
        middleware: (getDefaultMiddleware) => getDefaultMiddleware({
            thunk: {
                extraArgument: extraArg,
            },
        }),
    });
    // @ts-ignore
    store.reducerManager = reducerManager;

    return store;
};

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch'];
