/* eslint-disable i18next/no-literal-string */
import { Comment } from 'entities/Comment/model/types/types';
import classNames from 'shared/lib/classNames/classNames';
import { Text } from 'shared/ui/Text/Text';
import CommentCard from '../CommentCard/CommentCard';
import cls from './CommentList.module.scss';

interface CommentListProps {
className?: string;
comments?: Comment[];
isLoading?: boolean;
}

const CommentList = (props: CommentListProps) => {
    const { className, comments, isLoading } = props;
    return (
        <div className={classNames(cls.CommentList, { }, [className])}>
            {comments?.length ? comments.map((comment) => (
                <CommentCard
                    comment={comment}
                    className={cls.comment}
                    isLoading={isLoading}
                    key={comment.id}
                />
            )) : <Text text="Комментарии отсутствуют" />}
        </div>
    );
};

export default CommentList;
