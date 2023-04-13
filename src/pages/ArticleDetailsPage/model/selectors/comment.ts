import { StateSchema } from 'app/provider/StoreProvider';

export const getArticleCommentsError = (state: StateSchema) => state?.ArticleDetailsComment?.error;
export const getArticleCommentsIsLoading = (state:
    StateSchema) => state?.ArticleDetailsComment?.isLoading;
