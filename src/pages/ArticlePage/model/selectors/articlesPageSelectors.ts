import { StateSchema } from 'app/provider/StoreProvider';
import { ArticleView } from 'entities/Article';

export const getArticlePageError = (state: StateSchema) => state?.articlePage?.error;
export const getArticlePageIsLoading = (state:
    StateSchema) => state?.articlePage?.isLoading;
export const getArticlePageView = (state:
        StateSchema) => state?.articlePage?.view || ArticleView.SMALL;
export const getArticlePageLimit = (state:
            StateSchema) => state?.articlePage?.limit || 4;
export const getArticlePageNumber = (state:
                StateSchema) => state?.articlePage?.page || 1;
export const getArticlePageHasMore = (state:
                    StateSchema) => state?.articlePage?.hasMore;
