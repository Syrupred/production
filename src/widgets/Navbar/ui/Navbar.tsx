/* eslint-disable i18next/no-literal-string */
import { getAuthUserData, userActions } from 'entities/User';
import { LoginModal } from 'features/AuthByUsername';
import { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import classNames from 'shared/lib/classNames/classNames';

import Button, { ThemeButton } from 'shared/ui/Button/Button';

import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
    const { t } = useTranslation();
    const [isAuthModal, setIsAuthModal] = useState(false);
    const dispatch = useDispatch();
    const authData = useSelector(getAuthUserData);

    const onToggleModal = useCallback(() => {
        setIsAuthModal((prev) => !prev);
    }, []);

    const onLogout = () => {
        dispatch(userActions.logout());
    };

    if (authData) {
        return (
            <div className={classNames(cls.navbar, {}, [className])}>

                <Button
                    className={classNames(cls.links)}
                    onClick={onLogout}
                    theme={ThemeButton.CLEAR_INVERTED}
                >
                    {t('Выйти')}
                </Button>

            </div>
        );
    }

    return (
        <div className={classNames(cls.navbar, {}, [className])}>

            <Button
                className={classNames(cls.links)}
                onClick={onToggleModal}
                theme={ThemeButton.CLEAR_INVERTED}
            >
                {t('Войти')}
            </Button>
            <LoginModal isOpen={isAuthModal} onClose={onToggleModal} />
        </div>
    );
};
