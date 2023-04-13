import { memo } from 'react';
import classNames from 'shared/lib/classNames/classNames';
import cls from './ArticlePage.module.scss';

interface ArticlePageProps {
className?: string;
}

const ArticlePage = ({ className }: ArticlePageProps) => (
    // eslint-disable-next-line i18next/no-literal-string
    <div className={classNames(cls.ArticlePage, { }, [className])}>
        article page
    </div>
);

export default memo(ArticlePage);
