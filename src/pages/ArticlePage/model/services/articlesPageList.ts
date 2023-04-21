import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/provider/StoreProvider';
import { Article } from 'entities/Article';
import { getArticlePageLimit } from '../selectors/articlesPageSelectors';

interface FetchArticleListProps {
    page?: number;
}

export const fetchArticlesPageList = createAsyncThunk<Article[],
FetchArticleListProps, ThunkConfig<string>>(
    'articlesPageList/fetchArticlesPageList',

    async (props, { extra, rejectWithValue, getState }) => {
        const { page = 1 } = props;
        const limit = getArticlePageLimit(getState());

        try {
            const response = await extra.api.get<Article[]>('/articles', {
                params: {
                    _expand: 'user',
                    _limit: limit,
                    _page: page,
                },
            });

            return response.data;
        } catch (e) {
            return rejectWithValue('error');
        }
    },
);
