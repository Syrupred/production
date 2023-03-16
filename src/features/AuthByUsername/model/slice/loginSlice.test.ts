import { DeepPartial } from '@reduxjs/toolkit';

import { loginActions, loginReducer, LoginSchema } from 'features/AuthByUsername';

describe('loginSlice', () => {
    test('username', () => {
        const state: DeepPartial<LoginSchema> = { username: '123' };

        expect(loginReducer(state as LoginSchema, loginActions.setUsername('123123'))).toEqual({ username: '123123' });
    });
});
