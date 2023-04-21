import { Article, ArticleView } from 'entities/Article/model/types/article';
import { is } from 'immer/dist/internal';
import classNames from 'shared/lib/classNames/classNames';
import ArticleListItem from '../ArticleListItem/ArticleListItem';
import { ArticleListItemSkeleton } from '../ArticleListItem/ArticleListItemSkeleton';
import cls from './ArticleList.module.scss';

interface ArticleListProps {
className?: string;
view?: ArticleView;
isLoading?: boolean;
articles: Article[];

}

const ArticleList = ({
    className, view = ArticleView.SMALL, isLoading, articles,
}: ArticleListProps) => {
    const getSkeletons = (view: ArticleView) => new Array(view === ArticleView.SMALL ? 9 : 3)
        .fill(0).map((item, index) => (
            <ArticleListItemSkeleton view={view} key={index} className={cls.card} />
        ));

    const renderArticle = (article: Article) => (
        <ArticleListItem article={article} view={view} className={cls.card} key={article.id} />
    );

    return (
        <div className={classNames(cls.ArticleList, { }, [className, cls[view]])}>
            {articles.length > 0 ? articles.map(renderArticle) : null}
            {isLoading && getSkeletons(view)}
        </div>
    );
};

export default ArticleList;
