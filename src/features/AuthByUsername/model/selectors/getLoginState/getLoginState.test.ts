import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/provider/StoreProvider';
import { getLoginState } from './getLoginState';

describe('getLoginState', () => {
    test('getLoginState', () => {
        const state: DeepPartial<StateSchema> = {
            login: {
                username: 'admin',
                password: '123',
                error: 'error',
                isLoading: true,
            },
        };
        expect(getLoginState(state as StateSchema)).toEqual(state.login);
    });

    test('getLoginState empty state', () => {
        const state: DeepPartial<StateSchema> = {};

        expect(getLoginState(state as StateSchema)).toEqual({
            error: undefined, isLoading: false, password: '', username: '',
        });
    });
});
