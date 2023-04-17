import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/provider/StoreProvider';
import { getArticleDetailsData } from 'entities/Article/model/selectors/articleDetails';

import { Comment } from 'entities/Comment';
import { getAuthUserData } from 'entities/User';

import { fetchCommentsByArticleId } from './fetchCommentsByArticleId';

export const fetchSendCommentForArticle = createAsyncThunk<Comment, string, ThunkConfig<string>>(
    'articleDetails/fetchSendCommentForArticle',
    async (text, {
        extra, dispatch, rejectWithValue, getState,
    }) => {
        const userData = getAuthUserData(getState());

        const article = getArticleDetailsData(getState());

        if (!userData || !text || !article) {
            return rejectWithValue('no data');
        }

        try {
            const response = await extra.api.post<Comment>('/comments', {
                articleId: article?.id,
                userId: userData?.id,
                text,
            });

            dispatch(fetchCommentsByArticleId(article.id));
            return response.data;
        } catch (e) {
            return rejectWithValue('error');
        }
    },
);
