import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import classNames from 'shared/lib/classNames/classNames';
import Button from 'shared/ui/Button/Button';
import Input from 'shared/ui/Input/Input';
import cls from './LoginForm.module.scss';

interface LoginFormProps {
className?: string;
}

const LoginForm = ({ className }: LoginFormProps) => {
    const [value, setValue] = useState('');
    const { t } = useTranslation();
    const onChange = (val: string) => {
        setValue(val);
    };
    return (
        <div className={classNames(cls.LoginForm, { }, [className])}>
            <Input
                type="text"
                className={cls.input}
                value={value}
                onChange={onChange}
                autofocus
                placeholder={t('Введите логин')}
            />
            <Input type="text" className={cls.input} placeholder={t('Введите пароль')} />
            <Button className={cls.loginBtn}>
                {t('Войти')}
                {' '}
            </Button>
        </div>
    );
};

export default LoginForm;
