import { ReducersMapObject } from '@reduxjs/toolkit';
import { ReactNode } from 'react';
import { Provider } from 'react-redux';

import { StateSchema } from '../config/StateSchema';
import { createReduxStore } from '../config/store';

type DeepPartial<T> = T extends object ? { [P in keyof T]?: DeepPartial<T[P]> | undefined; } : T
interface StoreProviderProps {
children: ReactNode;
initialState?: DeepPartial<StateSchema>;
asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>
}

const StoreProvider = ({ children, initialState, asyncReducers }: StoreProviderProps) => {
    const store = createReduxStore(
        initialState as StateSchema,
        asyncReducers as ReducersMapObject<StateSchema>,

    );

    return (
        <Provider store={store}>
            {children}
        </Provider>
    );
};

export default StoreProvider;
