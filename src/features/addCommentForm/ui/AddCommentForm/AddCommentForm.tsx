/* eslint-disable i18next/no-literal-string */
import {
    addCommentFormActions,
    addCommentFormReducer,
} from 'features/addCommentForm/model/slices/addCommentFormSlice';
import { useCallback } from 'react';
import { useSelector } from 'react-redux';
import classNames from 'shared/lib/classNames/classNames';
import DynamicModalLoader,
{ ReducersList } from 'shared/lib/components/DynamicModalLoader/DynamicModalLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import Button from 'shared/ui/Button/Button';
import Input from 'shared/ui/Input/Input';
import {
    getAddCommentFormError,
    getAddCommentFormText,
} from '../../model/selectors/addCommentFormSelectors';
import cls from './AddCommentForm.module.scss';

export interface AddCommentFormProps {
    className?: string;
    onSendComment: (text: string) => void;
}

const reducers: ReducersList = {
    addCommentForm: addCommentFormReducer,
};

const AddCommentForm = ({ className, onSendComment }: AddCommentFormProps) => {
    const text = useSelector(getAddCommentFormText);
    const error = useSelector(getAddCommentFormError);
    const dispatch = useAppDispatch();

    const onCommentTextChange = useCallback((value: string) => {
        dispatch(addCommentFormActions.setText(value));
    }, [dispatch]);

    const onSendHandler = useCallback(() => {
        onSendComment(text || '');
        onCommentTextChange('');
    }, [onCommentTextChange, onSendComment, text]);

    return (
        <DynamicModalLoader removeAfterUnmount reducers={reducers}>
            <div className={classNames(cls.AddCommentForm, { }, [className])}>
                <Input
                    placeholder="Введите комментарий"
                    value={text}
                    onChange={onCommentTextChange}
                    className={cls.input}
                />
                <Button onClick={onSendHandler}>Отправить</Button>
            </div>
        </DynamicModalLoader>
    );
};

export default AddCommentForm;
