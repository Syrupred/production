import { userActions } from 'entities/User';
import { TestAsyncThunk } from 'shared/lib/tests/ComponentRender/TestAsyncThunk';
import { loginByUsername } from './loginByUsername';

describe('loginByUsername', () => {
    // let dispatch: Dispatch;
    // let getState: () => StateSchema;

    // beforeEach(() => {
    //     dispatch = jest.fn();
    //     getState = jest.fn();
    // });

    // test('loginByUsername success', async () => {
    //     mockedAxios.post.mockReturnValue(Promise.resolve({ data: { username: '123', id: '1' } }));
    //     const action = loginByUsername({ username: '123', password: '1' });
    //     const result = await action(dispatch, getState, undefined);
    //     expect(dispatch).toHaveBeenCalledTimes(3);
    //     expect(dispatch).toHaveBeenCalledWith(userActions.setAuthData({ username: '123', id: '1' }));
    //     expect(mockedAxios.post).toBeCalled();
    //     expect(result.meta.requestStatus).toBe('fulfilled');
    // });

    // test('loginByUsername error', async () => {
    //     mockedAxios.post.mockReturnValue(Promise.resolve({ status: 403 }));
    //     const action = loginByUsername({ username: '123', password: '1' });
    //     const result = await action(dispatch, getState, undefined);
    //     expect(dispatch).toHaveBeenCalledTimes(2);
    //     expect(mockedAxios.post).toBeCalled();
    //     expect(result.meta.requestStatus).toBe('rejected');
    // });

    test('loginByUsername success', async () => {
        const thunk = new TestAsyncThunk(loginByUsername);
        thunk.api.post.mockReturnValue(Promise.resolve({ data: { username: '123', id: '1' } }));
        const result = await thunk.callThunk({ username: '123', password: '1' });

        expect(thunk.dispatch).toHaveBeenCalledTimes(3);
        expect(thunk.dispatch).toHaveBeenCalledWith(userActions.setAuthData({ username: '123', id: '1' }));
        expect(thunk.api.post).toBeCalled();
        expect(result.meta.requestStatus).toBe('fulfilled');
    });

    test('loginByUsername error', async () => {
        const thunk = new TestAsyncThunk(loginByUsername);
        thunk.api.post.mockReturnValue(Promise.resolve({ status: 403 }));
        const result = await thunk.callThunk({ username: '123', password: '1' });

        expect(thunk.dispatch).toHaveBeenCalledTimes(2);
        expect(thunk.api.post).toBeCalled();
        expect(result.meta.requestStatus).toBe('rejected');
    });
});
