import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/provider/StoreProvider';
import { getArticlePageInited } from '../selectors/articlesPageSelectors';
import { articlePageActions } from '../slices/articlePageSlice';
import { fetchArticlesPageList } from './articlesPageList';

export const initArticlesPage = createAsyncThunk<
    void,
    void,
    ThunkConfig<string>
    >(
        'articlesPage/initArticlesPage',
        async (_, thunkApi) => {
            const { getState, dispatch } = thunkApi;
            const inited = getArticlePageInited(getState());

            if (!inited) {
                dispatch(articlePageActions.initState());
                dispatch(fetchArticlesPageList({
                    page: 1,
                }));
            }
        },
    );
