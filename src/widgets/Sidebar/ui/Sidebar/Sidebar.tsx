import { memo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import classNames from 'shared/lib/classNames/classNames';

import Button, { SizeButton, ThemeButton } from 'shared/ui/Button/Button';
import LangSwitcher from 'widgets/LangSwitcher/LangSwitcher';
import { getSidebarItems } from 'widgets/Sidebar/model/selectors/getSidebarItems';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';

import cls from './Sidebar.module.scss';
import SidebarItem from './SidebarItem/SidebarItem';

interface SidebarProps {
className?: string;
}

const Sidebar = (props: SidebarProps) => {
    const { className } = props;
    const [collapsed, setCollapsed] = useState(false);
    const { t } = useTranslation();
    const sidebarItemList = useSelector(getSidebarItems);

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
                {sidebarItemList.map((item) => (
                    <SidebarItem
                        item={item}
                        collapsed={collapsed}
                        key={item.path}

                    />
                ))}
            </div>
            <div className={cls.switchers}>
                <ThemeSwitcher />
                <LangSwitcher short={collapsed} className={cls.lang} />
            </div>
        </div>
    );
};

export default memo(Sidebar);
