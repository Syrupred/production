import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import classNames from 'shared/lib/classNames/classNames';
import AppLink, { AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import Button, { SizeButton, ThemeButton } from 'shared/ui/Button/Button';
import LangSwitcher from 'widgets/LangSwitcher/LangSwitcher';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import MainIcon from 'shared/assets/icons/home.svg';
import AboutIcon from 'shared/assets/icons/aboutpage.svg';
import cls from './Sidebar.module.scss';

interface SidebarProps {
className?: string;
}

const Sidebar = (props: SidebarProps) => {
    const { className } = props;
    const [collapsed, setCollapsed] = useState(false);
    const { t } = useTranslation();

    const onToggle = () => {
        setCollapsed((prev) => !prev);
    };

    return (
        <div
            data-testid="sidebar"
            className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [className])}
        >
            <Button
                data-testid="sidebar-toggle"
                onClick={onToggle}
                className={cls.collapsedBtn}
                theme={ThemeButton.BACKGROUND_INVERTED}
                square
                size={SizeButton.L}
            >
                {collapsed ? '>' : '<'}
            </Button>
            <div className={cls.items}>
                <div className={cls.item}>

                    <AppLink
                        to={RoutePath.main}
                        theme={AppLinkTheme.SECONDARY}
                    >
                        <MainIcon className={cls.icon} />
                        <span className={classNames(cls.link)}>{t('Главная страница')}</span>

                    </AppLink>
                </div>

                <div className={cls.item}>

                    <AppLink
                        to={RoutePath.about}
                        theme={AppLinkTheme.SECONDARY}

                    >
                        <AboutIcon className={cls.icon} />
                        <span className={classNames(cls.link)}>{t('O сайте')}</span>
                    </AppLink>
                </div>

            </div>
            <div className={cls.switchers}>
                <ThemeSwitcher />
                <LangSwitcher short={collapsed} className={cls.lang} />
            </div>
        </div>
    );
};

export default Sidebar;
