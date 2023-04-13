import { EntityState } from '@reduxjs/toolkit';
import { Comment } from 'entities/Comment/model/types/types';

export interface ArticleDetailsCommentSchema extends EntityState<Comment> {
    isLoading?: boolean;
    error?: string;
}
