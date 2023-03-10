import { getLoginState } from 'features/AuthByUsername/model/selectors/getLoginState/getLoginState';
import { loginByUsername } from
    'features/AuthByUsername/model/services/loginByUsername/loginByUsername';
import { loginActions } from 'features/AuthByUsername/model/slice/loginSlice';
import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import classNames from 'shared/lib/classNames/classNames';
import Button, { ThemeButton } from 'shared/ui/Button/Button';
import Input from 'shared/ui/Input/Input';
import Text, { TextTheme } from 'shared/ui/Text/Text';
import cls from './LoginForm.module.scss';

interface LoginFormProps {
className?: string;
}

const LoginForm = memo(({ className }: LoginFormProps) => {
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const {
        username, password, error, isLoading,
    } = useSelector(getLoginState);

    const onChangeUsername = useCallback((value) => {
        dispatch(loginActions.setUsername(value));
    }, [dispatch]);

    const onChangePassword = useCallback((value) => {
        dispatch(loginActions.setPassword(value));
    }, [dispatch]);

    const onLoginClick = useCallback(() => {
        dispatch(loginByUsername({ username, password }));
    }, [dispatch, username, password]);

    return (
        <div className={classNames(cls.LoginForm, { }, [className])}>
            <Text title={t('Форма авторизации')} />
            {error && (
                <Text
                    theme={TextTheme.ERROR}
                    text={t('Вы ввели неправильный логин или пароль')}
                />
            )}
            <Input
                type="text"
                className={cls.input}
                value={username}
                onChange={onChangeUsername}
                autofocus
                placeholder={t('Введите логин')}

            />
            <Input
                value={password}
                type="text"
                className={cls.input}
                placeholder={t('Введите пароль')}
                onChange={onChangePassword}
            />
            <Button
                className={cls.loginBtn}
                theme={ThemeButton.OUTLINE}
                onClick={onLoginClick}
                disabled={isLoading}
            >
                {t('Войти')}
                {' '}
            </Button>
        </div>
    );
});

export default LoginForm;
