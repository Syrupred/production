import { StateSchema } from 'app/provider/StoreProvider';
import { initialState } from 'features/AuthByUsername';
import { LoginSchema } from '../../types/loginSchema';

export const getLoginState = (state: StateSchema): LoginSchema => state.login || initialState;
