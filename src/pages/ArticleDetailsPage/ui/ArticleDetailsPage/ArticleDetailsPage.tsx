import { ArticleDetails } from 'entities/Article';
import { memo } from 'react';
import { useParams } from 'react-router-dom';
import classNames from 'shared/lib/classNames/classNames';

interface ArticleDetailsPageProps {
className?: string;
}

const ArticleDetailsPage = ({ className }: ArticleDetailsPageProps) => {
    const { id } = useParams<{id: string}>();

    if (!id) {
        return (
            // eslint-disable-next-line i18next/no-literal-string
            <div className={classNames('', { }, [className])}>
                Cтатья не найдена
            </div>
        );
    }

    return (
        <div className={classNames('', { }, [className])}>
            <ArticleDetails id={id} />
        </div>
    );
};

export default memo(ArticleDetailsPage);
