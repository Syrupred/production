import { Reducer } from '@reduxjs/toolkit';
import { ReduxStoreWithManager } from 'app/provider/StoreProvider';
import { StateSchemaKey } from 'app/provider/StoreProvider/config/StateSchema';
import { loginReducer } from 'features/AuthByUsername';
import {
    FC, useEffect,
} from 'react';
import { useDispatch, useStore } from 'react-redux';

export type ReducersList = {
    [name in StateSchemaKey]?: Reducer;
}

interface DynamicModalLoaderProps {
    reducers: ReducersList;
    removeAfterUnmount?: boolean;
}

type ReducersListEntries = [StateSchemaKey, Reducer]

const DynamicModalLoader: FC<DynamicModalLoaderProps> = ({
    children, reducers, removeAfterUnmount,
}) => {
    const store = useStore() as ReduxStoreWithManager;
    const dispatch = useDispatch();
    useEffect(() => {
        Object.entries(reducers).forEach(([name, reducer]: ReducersListEntries) => {
            store.reducerManager.add(name, reducer);
            dispatch({ type: `@INIT ${name} reducer` });
        });

        return () => {
            if (removeAfterUnmount) {
                Object.entries(reducers).forEach(([name, _]: ReducersListEntries) => {
                    store.reducerManager.remove(name);
                    dispatch({ type: `@DESTROY ${name} reducer` });
                });
            }
        };
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return (
        // eslint-disable-next-line react/jsx-no-useless-fragment
        <>
            { children }
        </>
    );
};

export default DynamicModalLoader;
