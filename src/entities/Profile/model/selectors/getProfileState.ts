import { StateSchema } from 'app/provider/StoreProvider';
import { initialState } from 'entities/Profile';
import { ProfileSchema } from '../types/profile';

export const getProfileState = (state: StateSchema): ProfileSchema => state.profile || initialState;
