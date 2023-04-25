import { createSelector } from '@reduxjs/toolkit';
import { StateSchema } from 'app/provider/StoreProvider';

export const getScrollSaveSelectors = (state: StateSchema) => state.scroll.scroll;
export const getScrollSaveSelectorsByPath = createSelector(
    getScrollSaveSelectors,
    (state: StateSchema, path: string) => path,
    (scroll, path) => scroll[path] || 0,
);
