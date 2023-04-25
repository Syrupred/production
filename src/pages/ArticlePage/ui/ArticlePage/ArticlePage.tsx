import {
    ArticleList, ArticleView, ArticleViewSelector,
} from 'entities/Article';

import {
    getArticlePageError, getArticlePageIsLoading,
    getArticlePageView,
} from 'pages/ArticlePage/model/selectors/articlesPageSelectors';
import { initArticlesPage } from 'pages/ArticlePage/model/services/initArticlesPage';
import {
    articlePageActions,
    articlePageReducer, getArticles,
} from 'pages/ArticlePage/model/slices/articlePageSlice';
import { memo, useCallback } from 'react';
import { useSelector } from 'react-redux';
import classNames from 'shared/lib/classNames/classNames';
import DynamicModalLoader,
{ ReducersList } from 'shared/lib/components/DynamicModalLoader/DynamicModalLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import UseInitialEffect from 'shared/lib/hooks/useInitialEffect';
import Pages from 'widgets/Pages/Pages';
import { fetchNextArticlesPage } from '../../model/services/fetchNextArticlesPage';
import cls from './ArticlePage.module.scss';

interface ArticlePageProps {
className?: string;
}

const reducersList: ReducersList = {
    articlePage: articlePageReducer,
};

const ArticlePage = ({ className }: ArticlePageProps) => {
    const dispatch = useAppDispatch();
    const articles = useSelector(getArticles.selectAll);
    const error = useSelector(getArticlePageError);
    const isLoading = useSelector(getArticlePageIsLoading);
    const view = useSelector(getArticlePageView);

    const onLoadNextArticles = useCallback(() => {
        dispatch(fetchNextArticlesPage());
    }, [dispatch]);

    UseInitialEffect(() => {
        dispatch(initArticlesPage());
    });

    const onChangeView = useCallback((viewType: ArticleView) => {
        dispatch(articlePageActions.setView(viewType));
    }, [dispatch]);
    // eslint-disable-next-line i18next/no-literal-string
    return (
        <DynamicModalLoader reducers={reducersList} removeAfterUnmount={false}>

            <Pages
                className={classNames(cls.ArticlePage, { }, [className])}
                onScrollEnd={onLoadNextArticles}
            >
                <ArticleViewSelector onClickView={onChangeView} view={view} />
                <ArticleList articles={articles} isLoading={isLoading} view={view} />
            </Pages>

        </DynamicModalLoader>
    );
};

export default memo(ArticlePage);
