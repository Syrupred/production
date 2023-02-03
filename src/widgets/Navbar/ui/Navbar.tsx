import classNames from "shared/lib/classNames/classNames"
import AppLink, { AppLinkTheme } from "shared/ui/AppLink/AppLink";

import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
}

export const Navbar = ({className}: NavbarProps) => {
    return (
        <div className={classNames(cls.navbar, {}, [className])}>
            
            <div className={classNames(cls.links)}>
              <AppLink to={'/'} className={classNames(cls.mainLink)} theme={AppLinkTheme.SECONDARY}>Main</AppLink>
              <AppLink to={'/about'} theme={AppLinkTheme.SECONDARY}>about</AppLink>
            </div>
            
        </div>
    )
}