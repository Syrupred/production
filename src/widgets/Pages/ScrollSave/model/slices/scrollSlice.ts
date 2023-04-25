import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { uiSchema } from '../types/uiSchema';

export const initialState: uiSchema = {
    scroll: {},
};

export const scrollSlice = createSlice({
    name: 'scrollSlice',
    initialState,
    reducers: {
        setScrollPosition: (state, action: PayloadAction<{path: string; position: number}>) => {
            state.scroll[action.payload.path] = action.payload.position;
        },
    },
    // extraReducers: (builder) => {
    //     builder
    //         .addCase(fetchArticleById.pending, (state) => {
    //             state.error = undefined;
    //             state.isLoading = true;
    //         })
    //         .addCase(fetchArticleById.fulfilled, (state, action: PayloadAction<Article>) => {
    //             state.isLoading = false;
    //             state.data = action.payload;
    //         })
    //         .addCase(fetchArticleById.rejected, (state, action) => {
    //             state.isLoading = false;
    //             state.error = action.payload;
    //         });
    // },

});

export const {
    actions: scrollActions,
    reducer: scrollReducer,
} = scrollSlice;
