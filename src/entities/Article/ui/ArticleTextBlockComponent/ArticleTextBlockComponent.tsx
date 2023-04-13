import { ArticleTextBlock } from 'entities/Article/model/types/article';
import { memo } from 'react';
import classNames from 'shared/lib/classNames/classNames';
import { Text } from 'shared/ui/Text/Text';
import cls from './ArticleTextBlockComponent.module.scss';

interface ArticleTextBlockComponentProps {
className?: string;
block: ArticleTextBlock;
}

const ArticleTextBlockComponent = ({ className, block }: ArticleTextBlockComponentProps) => (
    <div className={classNames(cls.ArticleTextBlockComponent, { }, [className])}>
        {block.title && <Text title={block.title} className={cls.title} />}
        {block.paragraphs.map((paragraph) => (
            <Text key={paragraph} text={paragraph} className={cls.paragraph} />
        ))}
    </div>
);

export default memo(ArticleTextBlockComponent);
