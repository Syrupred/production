import { createReduxStore, AppDispatch } from './config/store';
import StoreProvider from './ui/StoreProvider';
import type {
    StateSchema, ReduxStoreWithManager, ExtraThunkApi, ThunkConfig,
} from './config/StateSchema';

export {
    StoreProvider,
    createReduxStore, StateSchema, ReduxStoreWithManager, AppDispatch, ExtraThunkApi, ThunkConfig,
};
