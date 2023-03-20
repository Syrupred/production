import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { ProfileSchema } from '../types/profile';

const initialState: ProfileSchema = {
    readonly: true,
    data: undefined,
    isLoading: false,
    error: undefined,
};

export const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {

    },
});

export const { actions: profileActions, reducer: profileReducer } = profileSlice;
