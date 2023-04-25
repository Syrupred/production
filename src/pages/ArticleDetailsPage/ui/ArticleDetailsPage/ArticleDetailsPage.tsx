/* eslint-disable i18next/no-literal-string */
import { ArticleDetails } from 'entities/Article';

import { CommentList } from 'entities/Comment';
import { AddCommentFormAsync } from 'features/addCommentForm';
import {
    getArticleCommentsError,
    getArticleCommentsIsLoading,
} from 'pages/ArticleDetailsPage/model/selectors/comment';
import { fetchCommentsByArticleId }
    from 'pages/ArticleDetailsPage/model/services/fetchCommentsByArticleId';
import { fetchSendCommentForArticle }
    from 'pages/ArticleDetailsPage/model/services/fetchSendCommentForArticle';
import { articleDetailsCommentsReducer, getArticleComments }
    from 'pages/ArticleDetailsPage/model/slices/articleDetailsCommentSlice';
import { memo, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import classNames from 'shared/lib/classNames/classNames';
import DynamicModalLoader,
{ ReducersList } from 'shared/lib/components/DynamicModalLoader/DynamicModalLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import UseInitialEffect from 'shared/lib/hooks/useInitialEffect';
import Button, { ThemeButton } from 'shared/ui/Button/Button';
import Pages from 'widgets/Pages/Pages';
import { Text } from 'shared/ui/Text/Text';
import cls from './ArticleDetailsPage.module.scss';

interface ArticleDetailsPageProps {
className?: string;
}

const reducers: ReducersList = {
    ArticleDetailsComment: articleDetailsCommentsReducer,
};

const ArticleDetailsPage = ({ className }: ArticleDetailsPageProps) => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const { id } = useParams<{id: string}>();
    const comments = useSelector(getArticleComments.selectAll);
    const error = useSelector(getArticleCommentsError);
    const isLoading = useSelector(getArticleCommentsIsLoading);

    const onBackToList = useCallback(() => {
        navigate(RoutePath.articles);
    }, [navigate]);

    UseInitialEffect(() => dispatch(fetchCommentsByArticleId(id)));

    const onSendComment = useCallback((text: string) => {
        dispatch(fetchSendCommentForArticle(text));
    }, [dispatch]);

    if (!id) {
        return (
            // eslint-disable-next-line i18next/no-literal-string
            <div className={classNames(cls.ArticleDetailsPage, { }, [className])}>
                Cтатья не найдена
            </div>
        );
    }

    return (
        <DynamicModalLoader reducers={reducers} removeAfterUnmount>

            <Pages className={classNames(cls.ArticleDetailsPage, { }, [className])}>
                <Button
                    theme={ThemeButton.OUTLINE}
                    onClick={onBackToList}
                >
                    Назад к списку

                </Button>
                <ArticleDetails id={id} />
                <Text title="Комментарии" className={cls.commentTitle} />
                <AddCommentFormAsync onSendComment={onSendComment} />
                <CommentList isLoading={isLoading} comments={comments} />
            </Pages>

        </DynamicModalLoader>
    );
};

export default memo(ArticleDetailsPage);
