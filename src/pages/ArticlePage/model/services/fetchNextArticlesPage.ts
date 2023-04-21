import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/provider/StoreProvider';
import {
    getArticlePageHasMore,
    getArticlePageIsLoading, getArticlePageNumber,
} from '../selectors/articlesPageSelectors';
import { articlePageActions } from '../slices/articlePageSlice';
import { fetchArticlesPageList } from './articlesPageList';

export const fetchNextArticlesPage = createAsyncThunk<
    void,
    void,
    ThunkConfig<string>
    >(
        'articlesPage/fetchNextArticlesPage',
        async (_, thunkApi) => {
            const { getState, dispatch } = thunkApi;
            const hasMore = getArticlePageHasMore(getState());
            const page = getArticlePageNumber(getState());
            const isLoading = getArticlePageIsLoading(getState());

            if (hasMore && !isLoading) {
                dispatch(articlePageActions.setPage(page + 1));
                dispatch(fetchArticlesPageList({
                    page: page + 1,
                }));
            }
        },
    );
