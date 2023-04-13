/* eslint-disable i18next/no-literal-string */
import {
    getArticleDetailsData,
    getArticleDetailsError, getArticleDetailsLoading,
} from 'entities/Article/model/selectors/articleDetails';
import { fetchArticleById }
    from 'entities/Article/model/services/fetchArticleById/fetchArticleById';
import { articleDetailsReducer } from 'entities/Article/model/slice/articleDetailsSlce';
import { memo, useCallback, useEffect } from 'react';
import { useSelector } from 'react-redux';
import classNames from 'shared/lib/classNames/classNames';
import DynamicModalLoader,
{ ReducersList } from 'shared/lib/components/DynamicModalLoader/DynamicModalLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import Avatar from 'shared/ui/Avatar/Avatar';
import Skeleton from 'shared/ui/Skeleton/Skeleton';
import { Text, TextAlign, TextSize } from 'shared/ui/Text/Text';
import ViewIcon from 'shared/assets/icons/view.svg';
import CalendarIcon from 'shared/assets/icons/calendar.svg';
import Icon from 'shared/ui/Icon/Icon';
import {
    ArticleBlocks, ArticleBlockType, ArticleCodeBlock, ArticleImageBlock, ArticleTextBlock,
} from 'entities/Article/model/types/article';
import cls from './ArticleDetails.module.scss';
import ArticleCodeBlockComponent from '../ArticleCodeBlockComponent/ArticleCodeBlockComponent';
import ArticleImageBlockComponent from '../ArticleImageBlockComponent/ArticleImageBlockComponent';
import ArticleTextBlockComponent from '../ArticleTextBlockComponent/ArticleTextBlockComponent';

interface ArticleDetailsProps {
className?: string;
id: string;
}
const reducers: ReducersList = {
    articleDetails: articleDetailsReducer,
};

const ArticleDetails = ({ className, id }: ArticleDetailsProps) => {
    const dispach = useAppDispatch();
    const isLoading = useSelector(getArticleDetailsLoading);
    const error = useSelector(getArticleDetailsError);
    const data = useSelector(getArticleDetailsData);

    let content;

    const renderBlock = useCallback((block: ArticleBlocks) => {
        switch (block.type) {
        case ArticleBlockType.CODE:
            return (
                <ArticleCodeBlockComponent
                    key={block.id}
                    block={block as ArticleCodeBlock}
                    className={cls.block}
                />
            );
        case ArticleBlockType.IMAGE:
            return (
                <ArticleImageBlockComponent
                    key={block.id}
                    block={block as ArticleImageBlock}
                    className={cls.block}
                />
            );
        case ArticleBlockType.TEXT:
            return (
                <ArticleTextBlockComponent
                    key={block.id}
                    block={block as ArticleTextBlock}
                    className={cls.block}
                />
            );
        default:
            return null;
        }
    }, []);

    if (isLoading) {
        content = (
            <div>
                <Skeleton width={200} height={200} border="50%" className={cls.avatar} />
                <Skeleton width={300} height={32} className={cls.title} />
                <Skeleton width={600} height={24} className={cls.skeleton} />
                <Skeleton width="100%" height={200} className={cls.skeleton} />
                <Skeleton width="100%" height={200} className={cls.skeleton} />
            </div>
        );
    } else if (error) {
        content = <Text title="Произошла ошибка при загрузке статьи" align={TextAlign.CENTER} />;
    } else {
        content = (
            <div className={classNames(cls.ArticleDetails, { }, [className])}>
                <div className={cls.avatarWrapper}>
                    <Avatar size={200} src={data?.img} className={cls.avatar} />
                </div>

                <Text
                    title={data?.title}
                    text={data?.subtitle}
                    className={cls.title}
                    size={TextSize.L}
                />
                <div className={cls.articleInfo}>
                    <Icon Svg={ViewIcon} className={cls.icon} />

                    <Text text={String(data?.views)} />
                </div>
                <div className={cls.articleInfo}>
                    <Icon Svg={CalendarIcon} className={cls.icon} />
                    <Text text={data?.createdAt} />
                </div>
                {data?.blocks.map(renderBlock)}
            </div>
        );
    }

    useEffect(() => {
        if (__PROJECT !== 'storybook') {
            dispach(fetchArticleById(id));
        }
    }, [dispach, id]);

    return (
        <DynamicModalLoader removeAfterUnmount reducers={reducers}>
            {content}
        </DynamicModalLoader>
    );
};

export default memo(ArticleDetails);
